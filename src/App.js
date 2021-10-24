import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSearch from './components/MainSearch';
import SearchResults from './components/SearchResults';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Route exact path='/' component={MainSearch} />
    <Route exact path='/:companyName' component={SearchResults} />
  </BrowserRouter>
  );
}

export default App;
