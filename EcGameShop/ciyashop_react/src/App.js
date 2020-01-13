import React,{Component,Fragment} from 'react';
import {Switch,Route} from 'react-router-dom';

import Headers from './layouts/header/Header';
import Footer from './layouts/footer/Footer';

//Component
import HomePage from './component/home/index';
import HomePage2 from './component/home2';
import HomePage3 from './component/home3';

import './App.css';
import './Vendor.js';
 
import { IntlProvider } from 'react-intl';
import ShopPage from './component/shop';
import ProductDetail from './component/shop/product-detail';
import ShopingCart from './component/shop/ShopingCart';
import MyAccount from './component/Account/MyAccount';
import PageNotFound from './component/Pages/PageNotFound';
import ComingSoon from './component/Pages/ComingSoon';

import BlogSinglePage from './component/Blog/BlogSinglePage';
import WishList from './component/WishList/WishList';
import Aboutus from './component/AboutUs/Aboutus';
import Contactus from './component/ContactUs/Contactus';
import Maintenance from './component/Pages/Maintenance';
import BlogFullWidth from './component/Blog/BlogFullWidth';
import HomePage4 from './component/home4';
import CheckOut from './component/shop/CheckOut';

import Address from './component/Account/Address';
import Addressedit from './component/Account/Addressedit';
import AccountProfile from './component/Account/AccountProfile';
import AccountProfileedit from './component/Account/AccountProfileedit';
import SavedCards from './component/Account/SavedCards';
import SavedCardsedit from './component/Account/SavedCardsedit';
import SuccessScreen from './component/Account/SuccessScreen';

import Reports from './component/admin/Reports';
import Invoices from './component/admin/Invoices';

import OrderHistory from './component/Account/OrderHistory';
import AdminDashboard from './component/admin';
import SavedCardsadd from './component/Account/SavedCardsadd';
import PrivateRoute from "./component/PrivateRoute/PrivateRoute"

class App extends Component {

  getUrl(pathname) {
      let pathArray = pathname.split('/');
      return `/${pathArray[1]}` === '/ComingSoon'  ? true : `/${pathArray[1]}` === '/Maintenance' ? true :`/${pathArray[1]}` === '/admin-panel'  ? true : false;
  }

  render() {
    const { location } = this.props;
    return (
      <IntlProvider
          locale="a"
          messages="s"
      >
         <Fragment>
           {
             this.getUrl(location.pathname) ?
                <Switch>
                  <Route path="/ComingSoon" component={ComingSoon} />
                  <Route path="/Maintenance" component={Maintenance} />
                  <PrivateRoute routeRole={["ROLE_ADMIN","ROLE_SELLER"]} path="/admin-panel" component={AdminDashboard} />
                </Switch>
              :
              <div>
                
                <Headers />
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/index-new-fashion" component={HomePage2} />
                    <Route exact path="/index-modern" component={HomePage3} />
                    <Route exact path="/index-home-classic" component={HomePage4} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route exact path="/ShopingCart" component={ShopingCart} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/MyAccount" component={MyAccount} />
                    <Route exact path="/BlogSinglePage" component={BlogSinglePage} />
                    <Route exact path="/BlogFullWidth" component={BlogFullWidth} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/wishlist" component={WishList} />
                    <Route exact path="/Aboutus" component={Aboutus} />
                    <Route exact path="/contactus" component={Contactus} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/CheckOut" component={CheckOut} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/Address" component={Address} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/Account/Addressedit" component={Addressedit} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} path={`/Account/AccountProfile`} component={AccountProfile} />  
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/Account/AccountProfile" component={AccountProfile} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/Account/Address" component={Address} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/Account/OrderHistory" component={OrderHistory} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/Account/SavedCards" component={SavedCards} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/Account/AccountProfileedit" component={AccountProfileedit} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/Account/SavedCards" component={SavedCards} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/Account/SavedCardsedit" component={SavedCardsedit} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/Account/SavedCardsadd" component={SavedCardsadd} />
                    <Route exact path="/SuccessScreen" component={SuccessScreen} />
                    <PrivateRoute routeRole={["ROLE_ADMIN"]} exact path="/Reports" component={Reports} />
                    <PrivateRoute routeRole={["ROLE_CLIENT","ROLE_ADMIN","ROLE_SELLER"]} exact path="/Invoices" component={Invoices} />
                    <Route path={`/shop/:category/:id`} component={ProductDetail} /> 
                    <Route path="/loginerror" render={() => <div className="container"><h1>Veuillez vous connecter s'il vous plait.</h1></div>}/>
                    <Route exact  component={PageNotFound} />

                  </Switch>
                <Footer />
              </div>
           }

         </Fragment>
        </IntlProvider>
    );
  }
}

export default App;
