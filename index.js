const ul = document.getElementById("ul");
const item = document.getElementsByTagName("li");

const enterButton = document.getElementById("enter");

const input = document.getElementById("userInput");

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  console.log(ul);
  input.value = "";

  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);

  const dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete");
  }
}

function addListAfterKeypress(event) {
  if (hasInput() && event.which === 13) {
    createListElement();
  }
}

function addListAfterClick() {
  if (input.value.length > 0) {
    createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
