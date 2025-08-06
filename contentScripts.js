(() => {
  console.log("Content script loaded ✅");

  chrome.storage.local.get(["likeCount", "commentCount"], function (data) {
    const likec = parseInt(data.likeCount);
    const commentc = parseInt(data.commentCount);

    console.log("Like Count: ", likec);
    console.log("Comment Count: ", commentc);

    let i = 0, k = 0;

    function changehere() {
      const container = document.querySelector('.scaffold-finite-scroll__content');
      if (!container) {
        console.log("Feed container not found ❌");
        return;
      }

      if (i < likec) {
        let like = container.querySelectorAll('div.feed-shared-social-action-bar__action-button .react-button__trigger')[i];
        if (like) {
          console.log("Liking post", i);
          like.click();
          i++;
        }
      }

      if (k < commentc) {
        let commentBtn = container.querySelectorAll('div.comment span div button')[k];
        if (commentBtn) {
          console.log("Opening comment box for post", k);
          commentBtn.click();

          setTimeout(() => {
            let commentBox = container.querySelectorAll('.comments-comment-box__editor')[k];
            if (commentBox) {
              commentBox.innerHTML = "CFBR";
              commentBox.dispatchEvent(new Event('input', { bubbles: true }));
              console.log("Typed comment on post", k);
            }

            let postBtn = container.querySelectorAll('.comments-comment-box__submit-button')[k];
            if (postBtn) {
              postBtn.click();
              console.log("Submitted comment on post", k);
              k++;
            }
          }, 1000);
        }
      }
     }
    setTimeout(() => {
      setInterval(changehere, 4000);
    }, 5000);
  });
})();
