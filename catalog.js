let pagination = document.querySelector(".pagination");
let pag = 0;
let list = [
  "lightbox2",
].reverse();
// let rows = list.length;
let rows = 3;


// ========== DisplayButton... ==========
let pagNum = list.length / rows; // =3

let pags_container = pagination.querySelector(".pags_container");
pags_container.innerHTML = null;
for (num = 1; num < pagNum + 1; num++) {
  //   console.log(num);
  new_button = document.createElement("button");
  new_button.classList.add("btn");
  new_button.innerText = num;
  pags_container.appendChild(new_button);
}
// ========== DisplayButton. ==========

// ========== Func Button... ==========
let buttons = pagination.querySelectorAll("button");
buttons.forEach((element, index) => {
  if (index === 0) element.disabled = true;
  element.addEventListener("click", () => {
    pag = index;
    FuncButton();
  });
});

function arrow_left() {
  if (pag > 0) {
    pag--;
    FuncButton();
  }
}

function arrow_right() {
  if (pag < pagNum - 1) {
    pag++;
    FuncButton();
  }
}

function FuncButton() {
  for (element of buttons) {
    element.disabled = false;
  }
  DisplayList();
  buttons[pag].disabled = true;
  //   console.log(buttons[pag]);
}
// ========== Func Button. ==========

// ========== DisplayList... ==========
let list_container = pagination.querySelector(".list_container");

function DisplayList() {
  list_container.innerHTML = null;
  let start = pag * rows;
  let end = start + rows;
  // let new_list = list.slice(start, end);
  for (e = list.length - start; e > list.length - end; e--) {
    let item = list[e - 1];

    const div = document.createElement("div");

    div.innerHTML = /* html */ `
      <div loading="lazy" class="iframe-container">
        <!-- <a target="_blank" class="title" href="https://codewithsadee.github.io/${item}/">${e} ${item}</a> -->
        <!-- <br> -->
        <!-- <iframe src="https://codewithsadee.github.io/${item}/" frameborder="0"></iframe> -->
        <iframe src="${item}" frameborder="0"></iframe>
        <div class="btn-container">
          <!-- <a target="_blank" class="btn" href="https://codewithsadee.github.io/${item}/"><i class="icon-eye" aria-hidden="true"></i> </a> -->
          <!-- <a target="_blank" class="btn" href="https://github.com/codewithsadee/${item}"><i class="icon-github" aria-hidden="true"></i> </a> -->
          <!-- <a target="_blank" class="btn" href="https://github.com/codewithsadee/${item}/archive/refs/heads/master.zip"><i class="icon-file-archive-o" aria-hidden="true"></i> </a> -->
        </div>
      </div>
    `;
    list_container.appendChild(div);
  }
}
DisplayList();

// ========== DisplayList. ==========
