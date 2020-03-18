var restart = document.querySelector("#btn");

var td = document.querySelectorAll('td');

function clearBoard() {
  for (var i = 0; i < td.length; i++) {
    td[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard);

function change() {
  if(this.textContent === '')
  {
    this.textContent = 'X';
  }else if (this.textContent === 'X') {
    this.textContent = 'O';
  }else {
    this.textContent = '';
  }
}

for (var i = 0; i < td.length; i++) {
  td[i].addEventListener('click',change);
}
