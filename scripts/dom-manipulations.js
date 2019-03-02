let counter_1 = 1
let counter_2 = 1

function addCodeGoodPracrice() {
    counter_1 = ++counter_1
    const listItemOne = document.getElementsByClassName("list-item")[0];
    listItemOne.textContent = "Элемент списка 1";

    const list = document.getElementsByClassName("list_one")[0];
    const listItemTwo = document.createElement("li");

    listItemTwo.classList.add("list-item");
    listItemTwo.textContent = `Элемент списка ${counter_1}`;
    list.appendChild(listItemTwo);
}

function addCodeBadPracrice() {
  counter_2 = ++counter_2
  const list = document.getElementsByClassName("list_two")[0];

  if (counter_2 === 2) {
      list.innerHTML = `
        <li class="list-item">Элемент списка 1</li>
        <li class="list-item">Элемент списка ${counter_2}</li>
      `
  } else {
      list.innerHTML = list.innerHTML + `
        <li class="list-item">Элемент списка ${counter_2}</li>
      `;
  }


}
