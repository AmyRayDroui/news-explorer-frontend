import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Main></Main>

    </div>
  );
}

export default App;
