import './style.css';
import colors from './colors.json';
import Color from './Color';

function App() {
  return Object.keys(colors).map((key) => (
    <Color name={key} allColors={colors[key]} />
  ));
}

export default App;
