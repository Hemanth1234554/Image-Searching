const accessKey = "ePuGQxohLxNHH_OTtScVb2omWr_7bnzuFG0OOToo32Q";

const searchBox = document.getElementById("searching-box");
const searchResult = document.getElementById("searching-result");
const showMorebtn = document.getElementById("showing-more-btn");

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page == 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.forEach(result => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    showMorebtn.style.display = "block";
}

document.getElementById("search-btn").addEventListener("click", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});

showMorebtn.addEventListener("click", () => {
    page++;
    searchImage();
});
