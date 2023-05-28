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
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image-div");

  // Create random ID for each Div
  const randomId = createRandomId();
  imageDiv.dataset.id = randomId;

  // Connects functionality of delete btn
  imageDiv.appendChild(createDeleteButton(randomId));

  imageDiv.appendChild(createImg(linkImage.value));

  // creates top and bottom text to meme
  imageDiv.appendChild(createText("top-text", topText.value));
  imageDiv.appendChild(createText("bottom-text", bottomText.value));

  document.querySelector("#meme-container").appendChild(imageDiv);
}
