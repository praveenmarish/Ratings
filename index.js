var checkBox = document.querySelectorAll('input[type=checkbox][star=full]');

checkBox.forEach((val) => {
  val.addEventListener('click', (ev) => {
    clicked(ev);
  });
});

function clicked(ev) {
  for (let i = 1; i <= ev.target.name; i++) {
    checkBox[i - 1].checked = true;
  }
  for (let j = ev.target.name; j < checkBox.length; j++) {
    checkBox[j].checked = false;
  }
}

var checkBoxHalf = document.querySelectorAll('input[type=checkbox][star=half]');

checkBoxHalf.forEach((val) => {
  val.addEventListener('click', (ev) => {
    clickedHalf(ev);
  });
});

function clickedHalf(ev) {
  for (let i = 1; i <= ev.target.name; i++) {
    checkBoxHalf[i - 1].checked = true;
  }
  for (let j = ev.target.name; j < checkBoxHalf.length; j++) {
    checkBoxHalf[j].checked = false;
  }
}
