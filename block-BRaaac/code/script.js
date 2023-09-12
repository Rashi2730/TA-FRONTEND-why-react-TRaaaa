let root = document.querySelector('.root');
let input = document.querySelector('.form-box');

let allMovies = [
  {
    name: 'Titanic',
    watched: false,
  },
  {
    name: 'Bird-Box',
    watched: true,
  },
];

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

function createElement(type, attr, ...children) {
  let element = document.createElement(type);
  for (let key in attr) {
    if (key.startsWith('data-')) {
      element.setAttribute(key, attr[key]);
    } else if (key.startsWith('on')) {
      let eventType = key.replace('on', '');
      element.setAttribute(eventType, attr[key]);
    } else {
      element[key] = attr[key];
    }
  }

  children.forEach((child) => {
    if (typeof child === 'object') {
      element.append(child);
    }
    if (typeof child === 'string') {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function createUI(dataList = allMovies, rootElm = root) {
  rootElm.innerHTML = '';
  dataList.forEach((data, i) => {
    let li = createElement(
      'li',
      {},
      createElement('p', null, data.name),
      createElement(
        'button',
        {
          id: i,
          onclick: handleChange,
        },
        data.watched ? 'Watched' : 'To Watch'
      )
    );
    // let li = document.createElement('li');
    // let p = document.createElement('p');
    // p.innerHTML = data.name;
    // let button = document.createElement('button');
    // button.innerText = data.watched ? 'Watched' : 'To watch';
    // button.id = i;
    // button.addEventListener('click', handleChange);

    // li.append(p, button);
    rootElm.append(li);
  });
}

createUI(allMovies, root);
