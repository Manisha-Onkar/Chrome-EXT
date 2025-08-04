const like = document.querySelector(".cbtn");
const comment = document.querySelector(".c");
const gocontainer = document.querySelector(".divgo");
const go = document.querySelector(".gobtn");

like.addEventListener("keyup", toggleBtn);
comment.addEventListener("keyup", toggleBtn);

function toggleBtn() {
  if (like.value !== "" && comment.value !== "") {
    gocontainer.classList.remove("hidden");
  } else {
    gocontainer.classList.add("hidden");
  }
}

go.addEventListener("click", function () {
  // Save to chrome storage
  chrome.storage.local.set({
    likeCount: like.value,
    commentCount: comment.value
  }, function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.update(tabs[0].id, { url: "https://www.linkedin.com/feed/" });
    });
  });
});
