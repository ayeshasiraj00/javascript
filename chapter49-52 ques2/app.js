function readMore() {

    let moreText = document.getElementById("moreText");
    let button = document.getElementById("readMoreBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        button.innerHTML = "Read More";
    }
}