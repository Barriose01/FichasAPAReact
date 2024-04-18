import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </div>
 
)


