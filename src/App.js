import './App.css';
import Routes from './routes';
import { Router } from 'react-router';
import history from './sevices/history';

function App() {
  return (
    <div className="App">
      <div className="body">
        <Router history={ history }>
          <Routes/>
        </Router>
      </div>
    </div>
  );
}

export default App;
