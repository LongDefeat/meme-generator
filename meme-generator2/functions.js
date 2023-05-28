function createDeleteButton(randomId) {
  const deleteMemeBtn = document.createElement("button");
  deleteMemeBtn.classList.add("remove-button");
  deleteMemeBtn.innerHTML = "X";
  deleteMemeBtn.dataset.id = randomId;
  deleteMemeBtn.addEventListener("click", (event) => {
    const element = document.querySelector(
      `div[data-id='${event.target.dataset.id}']`
    );
    element.remove();
  });
  return deleteMemeBtn;
}

function createRandomId() {
  return Math.floor(Math.random() * 100000);
}

function createText(className, value) {
  const createText = document.createElement("p");
  createText.classList.add(className);
  createText.innerHTML = value;
  return createText;
}

function createImg(value) {
  // creates meme and styles it
  const createImg = document.createElement("img");
  createImg.src = value;
  createImg.style.height = "400px";
  createImg.style.width = "400px";

  return createImg;
}
