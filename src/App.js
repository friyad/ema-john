import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Inventory from './components/Inverntory/Inventory';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import OrderPreview from './components/OrderPreview/OrderPreview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/shop/Shop';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './Hooks/AuthProvider';
import PrivetRouter from './PrivetRouter/PrivetRouter';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/shop">
              <Shop />
            </Route>

            <Route path="/orderPreview">
              <OrderPreview />
            </Route>

            <PrivetRouter path="/inventory">
              <Inventory />
            </PrivetRouter>

            <PrivetRouter path="/placeOrder">
              <PlaceOrder />
            </PrivetRouter>

            <PrivetRouter path="/shipping">
              <Shipping />
            </PrivetRouter>

            <Route path="/login">
              <LogIn />
            </Route>

            <Route path="/signUp">
              <SignUp />
            </Route>

            <Route exact path="/">
              <Shop />
            </Route>

            <Route exact path="*">
              <NotFound />
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;