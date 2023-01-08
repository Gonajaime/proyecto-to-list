let newInput$$ = document.querySelector("input");
let newButton = document.querySelector("button");
let newList = document.querySelector(".li-container");
let newEmpty = document.querySelector(".empty");
let newUl = document.querySelector("ul");

newButton.onclick = function (ev) {
    if (newInput$$.value == ""){
        newEmpty.style.display = 'block';

        return;
        
    } else{
        newEmpty.style.display = 'none';         
  let work = newInput$$.value;
  let li = document.createElement("li");
  li.textContent = work;
  newUl.appendChild(li);

  let btnDelete = document.createElement("button");
  btnDelete.className = "btn-delete";
  btnDelete.textContent = "X";
  li.appendChild(btnDelete);
  btnDelete.onclick = function () {
    li.remove();
  }};
  ev.preventDefault();
};
