let root = document.querySelector('.root');
let input = document.querySelector('.form-box');

let allMovies = [];

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    let movie = {
      name: e.target.value,
      watched: false,
    };
    e.target.value = '';
    allMovies.push(movie);
    createUI();
  }
});

function handleChange(e) {
  let id = e.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI();
}

function createUI(dataList = allMovies) {
  root.innerHTML = '';
  dataList.forEach((data, i) => {
    let li = document.createElement('li');
    let p = document.createElement('p');
    p.innerHTML = data.name;
    let button = document.createElement('button');
    button.innerText = data.watched ? 'Watched' : 'To watch';
    button.id = i;
    button.addEventListener('click', handleChange);

    li.append(p, button);
    root.append(li);
  });
}

createUI();
