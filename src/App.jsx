import React from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer} from './components';
import { Home,Cart } from './pages';

function App() {
  const [product, setProduct] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((resp) => resp.json())
    .then( (json) => {
      setProduct(json.product);
    });
  },[]);

  return (
    <>
      <Header/>
      <Route path="/"                  render={() => <Home items={product.sushi? product.sushi: []}/>} exact/>
      <Route path="/rolls"             render={() => <Home items={product.rolls? product.rolls : []}/>} exact/>
      <Route path="/assorted"          render={() => <Home items={product.assorted? product.assorted : []}/>} exact/>
      <Route path="/snacks_and_salads" render={() => <Home items={product.snacks_and_salads? product.snacks_and_salads : []}/>} exact/>
      <Route path="/more"              render={() => <Home items={product.more? product.more : []}/>} exact/>
      <Route path="/drinks"            render={() => <Home items={product.drinks? product.drinks: []}/>} exact/>
      <Route path="/dop"               render={() => <Home items={product.dop? product.dop: []}/>} exact/>
      <Route path="/rolls-rolls"       render={() => <Home items={product.rollsRolls? product.rollsRolls: []} />} exact/>
      <Route path="/hot-rolls"         render={() => <Home items={product.hotRolls? product.hotRolls: []}/>} exact/>
      <Route path="/cart"              render={() => <Cart />} exact/>
      <Footer/>
    </>
  );
}

export default App;
