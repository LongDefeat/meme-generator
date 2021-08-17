// IDs: meme-input (url), topText, bottomText, create-meme, meme-placement paragraph
const form = document.querySelector("form"); // should this be "image"? form is the element, but not its ID

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  /* Get references to top text and bottom text values and image url */
  const linkImage = evt.target.querySelector("#meme-input");
  const topText = evt.target.querySelector("#top-text");
  const bottomText = evt.target.querySelector("#bottom-text");

  createMeme(linkImage, topText, bottomText);

  /* reset values for each element) */
  evt.target.reset();
});

function createMeme(linkImage, topText, bottomText) {
  // Create container for each meme
  let imageDiv = document.createElement("div");
  imageDiv.classList.add("image-div");

  // Create random ID for each Div, create delete button
  let randomId = Math.floor(Math.random() * 100000);
  imageDiv.dataset.id = randomId;
  let deleteMemeBtn = document.createElement("button");
  deleteMemeBtn.classList.add("remove-button");
  deleteMemeBtn.innerHTML = "X";
  deleteMemeBtn.dataset.id = randomId;
  deleteMemeBtn.addEventListener("click", function (event) {
    let element = document.querySelector(
      `div[data-id='${event.target.dataset.id}']`
    );
    element.remove();
  });
  imageDiv.appendChild(deleteMemeBtn);

  // creates meme and styles it
  let createImg = document.createElement("img");
  createImg.src = linkImage.value;
  createImg.style.height = "400px";
  createImg.style.width = "400px";
  imageDiv.appendChild(createImg);

  // creates top and bottom text to meme
  let createTop = document.createElement("p");
  let createBottom = document.createElement("p");
  createTop.classList.add("top-text");
  createBottom.classList.add("bottom-text");

  createTop.innerHTML = topText.value;
  createBottom.innerHTML = bottomText.value;
  imageDiv.appendChild(createTop);
  imageDiv.appendChild(createBottom);

  document.querySelector("#meme-container").appendChild(imageDiv);
}
