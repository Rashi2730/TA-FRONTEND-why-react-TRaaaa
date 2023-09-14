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

// function createElement(type, attr, ...children) {
//   let element = document.createElement(type);
//   for (let key in attr) {
//     if (key.startsWith('data-')) {
//       element.setAttribute(key, attr[key]);
//     } else if (key.startsWith('on')) {
//       let eventType = key.replace('on', '');
//       element.setAttribute(eventType, attr[key]);
//     } else {
//       element[key] = attr[key];
//     }
//   }

//   children.forEach((child) => {
//     if (typeof child === 'object') {
//       element.append(child);
//     }
//     if (typeof child === 'string') {
//       let node = document.createTextNode(child);
//       element.append(node);
//     }
//   });
//   return element;
// }

let element = React.createElement;
function createUI(dataList = allMovies, rootElm = root) {
  //   rootElm.innerHTML = '';
  let movieUI = dataList.map((data, i) => {
    let li = element(
      'li',
      {},
      element('p', null, data.name),
      element(
        'button',
        {
          id: i,
          onclick: handleChange,
        },
        data.watched ? 'Watched' : 'To Watch'
      )
    );
    return li;
  });
  ReactDOM.render(movieUI, rootElm);
}

createUI(allMovies, root);
