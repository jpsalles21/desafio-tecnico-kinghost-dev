import './App.css';
import Header from './components/Header/header';
import UsersContainer from './components/UsersContainer/usersContainer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <UsersContainer />
      </div>
    </div>
  );
}

export default App;
