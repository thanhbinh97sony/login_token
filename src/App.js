import Footers from 'components/Footers';
import Headers from 'components/Headers';
import ResponsiveAppBar from 'components/Navbar/Navbar';
import CounterFeature from 'features/Counter';
import Home from 'features/Home';
import ProductFeature from 'features/Products';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <ResponsiveAppBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={CounterFeature} />
        <Route path="/header" component={Headers} />
        <Route path="/footer" component={Footers} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/form" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
