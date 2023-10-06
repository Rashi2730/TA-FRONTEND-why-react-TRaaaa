import Button from './Button';
import './App.css';

function App() {
  return (
    <div className="container">
      <Button label="Click Me" type="secondary" size="large" />
      <Button label="Click Me" />
      <Button label="Click Me" type="tertiary" size="small" />
      <Button label="Click Me" />
      <Button disabled />
      <Button label="Click Me" onClickHandler={() => alert('you clicked me')} />
    </div>
  );
}

export default App;
