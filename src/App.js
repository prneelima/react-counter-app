
import './App.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Counter from './Components/wrapComponents/Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
