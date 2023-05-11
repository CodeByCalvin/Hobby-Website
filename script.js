// Learn more btn (redirects to random page)
document.querySelector(".learn-more-button").onclick = function () {
  const pages = [
    "https://codebycalvin.github.io/TDA-Project-1-Hobby-Website/succulents.html",
    "https://codebycalvin.github.io/TDA-Project-1-Hobby-Website/ferns.html",
    "https://codebycalvin.github.io/TDA-Project-1-Hobby-Website/orchids.html",
  ];
  let randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = randomPage;
};
