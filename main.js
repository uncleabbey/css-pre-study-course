// Get Date
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear().toString().substring(2);
const now = day + '/' + month + '/' + year;

// Instanciate data array
const data = [];

const main = document.querySelector('.main');

//  Iteriate data into main element

// Get and display number of articles
const count = document.querySelector('.count');
count.innerHTML = main.childElementCount;

const button = document.querySelector('.add-note-btn');
const addForm = document.querySelector('.add-form');
const cancel = document.querySelector('.cancel');
const form = document.querySelector('#form');

// Add Note in data
form.onsubmit = (e) => {
  e.preventDefault();
  let title = document.querySelector('#form-title');
  let body = document.querySelector('#form-body');
  data.push({
    title: now + ': ' + title.value,
    body: body.value,
  });
const newData = data[data.length - 1]
  console.log(newData);
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const pBody = document.createElement('p');

    main.appendChild(article);
    article.appendChild(h2);
    h2.innerHTML = newData.title;
    article.appendChild(pBody);
    pBody.innerHTML = newData.body;
    count.innerHTML = main.childElementCount;
  title.value = ''
  body.value = ''
  addForm.style.display = 'none';
};

//  display form
button.onclick = () => {
  addForm.style.display = 'block';
};

// close form display
cancel.onclick = (e) => {
  addForm.style.display = 'none';
};

// close form display
window.onclick = (e) => {
  if (e.target == addForm) {
    addForm.style.display = 'none';
  }
};


