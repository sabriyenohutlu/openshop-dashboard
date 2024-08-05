import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css'
import  store from "../src/store/index.jsx";
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
