import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Home /> */}
        <Header />
      </div>
    </Provider>
  );
}

export default App;
