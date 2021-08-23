import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About'
import SingleUser from './Pages/SingleUser'
import NotFound from './Pages/NotFound'
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/user/:userid' render={ (props) => <SingleUser {...props} />}/>
        <Route path='/*' component={NotFound} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
