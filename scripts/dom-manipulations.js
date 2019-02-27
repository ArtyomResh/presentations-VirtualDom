function addCodeGoodPracrice() {
    const listItemOne = document.getElementsByClassName("list-item")[0];
    listItemOne.textContent = "Элемент списка 1";

    const list = document.getElementsByClassName("list_one")[0];

    const listItemTwo = document.createElement("li");
    listItemTwo.classList.add("list-item");
    listItemTwo.textContent = "Элемент списка 2";
    list.appendChild(listItemTwo);
}

function addCodeBadPracrice() {
  const list = document.getElementsByClassName("list_two")[0];
  list.innerHTML = list.innerHTML + `
    <li class="list-item">Элемент списка 1</li>
    <li class="list-item">Элемент списка 2</li>
  `;
}
