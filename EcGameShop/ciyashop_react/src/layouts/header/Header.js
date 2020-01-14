/**
 *  Header Main
 */
import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import navLinks from '../../NavLinks.js';
import logo from '../../assets/images/logoEgame.png';
import { Row, Col, Container } from 'reactstrap';
import Loader from 'react-loader-spinner';
import AllProduct from '../../api/product';
import {
    Modal, ModalHeader, ModalBody, DropdownMenu, DropdownItem, Navbar,
    NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, Collapse, TabContent, TabPane
} from 'reactstrap';
import classnames from 'classnames';
import axios from "axios"
import {connect} from "react-redux"
import * as action from "../../actions/loginInfo"
import {withRouter } from "react-router-dom"


class Header extends React.Component {
    constructor(props) {

        super(props);
        this.ReadCartItems = this.ReadCartItems.bind(this);
        this.ReadWishListItems = this.ReadWishListItems.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            timeout: true,
            modal: false,
            activeTab: '1',
            isOpen: false,
            collapsed: true,
            CartHide: true,
            classset: '',
            getproduct: AllProduct,

            email: "",
            statut: "",
            passwordInput:"",
            userData:[],
            uid:0,
           



        }
        var removeFromCart, removeFromWishList;
        this.toggle = this.toggle.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.ShowCart = this.ShowCart.bind(this);

        this.passwordInputRef = React.createRef();
        this.passwordInputRef2 = React.createRef();
        this.nom = React.createRef();

    }


    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    logintoggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    ReadCartItems() {
        return JSON.parse(localStorage.getItem("LocalCartItems"));
    }
    removeFromCart = (Index) => {
        var UpdatedCart = JSON.parse(localStorage.getItem("LocalCartItems"));
        UpdatedCart = UpdatedCart.slice(0, Index).concat(UpdatedCart.slice(Index + 1, UpdatedCart.length));
        localStorage.removeItem("LocalCartItems");
        localStorage.setItem("LocalCartItems", JSON.stringify(UpdatedCart));
    }

    ReadWishListItems() {
        return JSON.parse(localStorage.getItem("LocalWishListItems"));
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;

        if (scrollTop > 100) {
            document.getElementById("site-header").setAttribute("class", "site-header header-style-menu-center is-sticky");
        } else {
            document.getElementById("site-header").setAttribute("class", "site-header header-style-menu-center");
        }
    }

    ShowCart() {
        if (this.state.CartHide == true) {
            var elm = document.getElementById("DivCartContent");
            if (elm != null) {
                document.getElementById("DivCartContent").setAttribute("style", "display:block");
                this.state.CartHide = false;
            }
        }
    }

    HideCart() {
        var elm = document.getElementById("DivCartContent");
        if (elm != null) {
            document.getElementById("DivCartContent").setAttribute("style", "display:none");
            this.state.CartHide = true;
        }
    }

    closeNavbar() {
        if (this.state.collapsed !== true) {
            this.toggleNavbar();
        }
    }
    onClickClassAdd(pages) {
        if (this.state.classset != pages) {
            this.setState({
                ...this.state,
                classset: pages
            })
        }
        else {
            if (Object.keys(this.state.classset).length == 0) {
                this.setState({
                    ...this.state,
                    classset: pages
                })
            }
            else {
                this.setState({
                    ...this.state,
                    classset: ''
                })
            }
        }

    }


    OpenSubmenuOpen(id) {
        var elm = document.getElementById(id);
        if (elm != null) {
            document.getElementById(id).setAttribute("class", "dropdown-menu dropdown-menu-right show")
        }
    }

    OpenSubmenuClose(id) {
        var elm = document.getElementById(id);
        if (elm != null) {
            document.getElementById(id).setAttribute("class", "dropdown-menu dropdown-menu-right")
        }
    }


    /************************************* */
    onSubmitLogin = async (event) => {

        // event.preventDefault() //évite le rafraichissement de la page

        
        console.log(this.state.email)

        const data = {
            'username': this.state.email,
            'password': this.state.passwordInput
        }


        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            credentials: "include",
            body: new URLSearchParams(data),
        })
        console.log(response.status)

        if (response.status == 200) {


            this.setState({
                statut: "Connecté !"
            })

            //try
            const response2 = await axios({
                method: 'post',
                withCredentials: true,
                url: 'http://localhost:8080/role/byemail',
                data: {
                    email: this.state.email,
                }
            })
            console.log(response2.data[0].roleName)

            this.props.onSetRole(response2.data[0].roleName)


            const response3 = await axios({
                method: 'post',
                withCredentials: true,
                url: 'http://localhost:8080/infouser/byemail',
                data: {
                    email: this.state.email,
                }
            })
            
            const response4 = await axios({
                method: 'post',
                withCredentials: true,
                url: 'http://localhost:8080/getaddresses/byemail',
                data: {
                    email: this.state.email,
                }
            })
            console.log(response4.data[0])
            this.props.onSetAddress(response4.data[0])
            
            this.setState({
                uid:response3.data[0],
                prenom:response3.data[3]
            })

            this.props.onSetUid(response3.data[0])
            this.props.onSetLastName(response3.data[2])
            this.props.onSetFirstName(response3.data[3])
            this.props.onSetPhoneNumber(response3.data[4])
            this.props.onSetEmail(response3.data[1])

            localStorage.setItem("firstname",response3.data[3]);
            localStorage.setItem("lastname",response3.data[2]);
            localStorage.setItem("email",response3.data[1]);

            
            this.toggle()
        } else {
            console.log("Email ou mot de passe incorrect")

            this.setState({
                statut: "Email ou mot de passe incorrect"
            })
        }

    }


    /**************************************** */

    onSubmitRegister = async (event) => {

        // event.preventDefault() //évite le rafraichissement de la page
        
        if (this.passwordInputRef.current.value == this.passwordInputRef2.current.value) {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:8080/user/register',
                data: {
                    email: this.state.email,
                    password: this.passwordInputRef.current.value,
                    lastname: this.nom.current.value,
                }
            });
            console.log(response)

            if (response.data == 202) {
                // this.props.history.push("/login")
                console.log("inscrit")
                

                const data = {
                    'username': this.state.email,
                    'password': this.passwordInputRef.current.value
                }
        
        
                const response = await fetch("http://localhost:8080/login", {
                    method: "POST",
                    credentials: "include",
                    body: new URLSearchParams(data),
                })
                console.log(response.status)
        
                if (response.status == 200) {
        
        
                    this.setState({
                        statut: "Connecté !"
                    })
        
                    //try
                    const response2 = await axios({
                        method: 'post',
                        withCredentials: true,
                        url: 'http://localhost:8080/role/byemail',
                        data: {
                            email: this.state.email,
                        }
                    })
                    console.log(response2.data[0].roleName)
        
                    this.props.onSetRole(response2.data[0].roleName)
        
        
                    const response3 = await axios({
                        method: 'post',
                        withCredentials: true,
                        url: 'http://localhost:8080/infouser/byemail',
                        data: {
                            email: this.state.email,
                        }
                    })
                    
                    console.log(response3.data)
                    this.setState({
                        userData: response3.data,
                        
                        uid:response3.data[0]
                    })
                    console.log("userdata:"+this.state.userData)
        
                    this.props.onSetUid(response3.data[0])
                    this.toggle()
                } else {
                    console.log("Email ou mot de passe incorrect")
        
                    this.setState({
                        statut: "Email ou mot de passe incorrect"
                    })
                }
        
            
                
            }
        
    } else console.log("pas les memes mot de passe")
}
    //--------------------------------------------------------

    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    onLogout = () => {
        this.props.onLogout()
        this.setState({
            
            prenom:""
        })
    }

   

    render() {
        // console.log(this.state)
        let pathnames = document.location.href;
        let pathArray = pathnames.split('/');
        let pageName = '/' + pathArray[pathArray.length - 1];
        if (this.state.timeout == true) {
            setTimeout(function () {
                this.setState({ timeout: false });
            }.bind(this), 2000);  // wait 5 seconds, then reset to false
        }
        return (

            <header className="site-header header-style-menu-center" id="site-header">
                {this.state.timeout == false ?
                    <div>
                        <div className="topbar topbar-bg-color-default topbar-desktop-on topbar-mobile-off">
                            <div className="container-fluid">
                                <Row>
                                    <Col lg={6} sm={12}>
                                        <div className="topbar-left text-left">
                                            <div className="topbar-link">
                                                <ul>

                                                    <li className="topbar_item topbar_item_type-email">
                                                        <Link to="/Contactus"><i className="fa fa-envelope-o">&nbsp;</i>support@ciyashop.com</Link>
                                                    </li>
                                                    <li className="topbar_item topbar_item_type-phone_number">
                                                        <Link to="/Contactus"><i className="fa fa-phone">&nbsp;</i>06 00 00 00 00</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} sm={12}>
                                        <div className="topbar-right text-right">
                                            <div className="topbar-link">
                                                <ul>
                                                    <li className="topbar_item topbar_item_type-topbar_menu">
                                                        <div className="menu-top-bar-menu-container">
                                                            <ul className="top-menu list-inline">
                                                                { this.props.userRole!="Not Connected" && <li>
                                                                    <div> Bonjour <Link to="/Account/AccountProfile">{this.props.firstname}</Link> </div>
                                                                </li>}
                                                            { this.props.userRole==="ROLE_SELLER" &&<li className="menu-item">
                                                                    <Link to="/admin-panel/Product">Gérer ma boutique</Link>
                                                                </li>}
                                                            {/* { this.props.userRole!="Not Connected" &&<li className="menu-item">
                                                                    <Link to="/Account/AccountProfile">Mon Compte</Link>
                                                                </li>} */}
                                                                { this.props.userRole==="Not Connected" &&  <li>
                                                                    <Link to="#" onClick={this.toggle} data-toggle="modal" data-target="#"><i className="fa fa-sign-in">&nbsp;</i> Se connecter</Link>
                                                                </li>}
                                                                { this.props.userRole!="Not Connected" &&<li>
                                                                    <Link onClick={this.onLogout}  > Se deconnecter</Link>
                                                                </li>}
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="topbar_item topbar_item_type-social_profiles">
                                                        <div className="topbar-social_profiles-wrapper">
                                                            <ul className="topbar-social_profiles">
                                                                <li className="topbar-social_profile">
                                                                    <a href={'https://www.facebook.com'} target="_blank" >
                                                                        <i className="fa fa-facebook" />
                                                                    </a>
                                                                </li>
                                                                <li className="topbar-social_profile" >
                                                                    <a href={'https://twitter.com/'} target="_blank">
                                                                        <i className="fa fa-twitter" />
                                                                    </a>
                                                                </li>
                                                                <li className="topbar-social_profile" >
                                                                    <a href={'https://plus.google.com/'} target="_blank">
                                                                        <i className="fa fa-google-plus" />
                                                                    </a>
                                                                </li>
                                                                <li className="topbar-social_profile" >
                                                                    <a href={'https://vimeo.com/'} target="_blank">
                                                                        <i className="fa fa-vimeo" />
                                                                    </a>
                                                                </li>
                                                                <li className="topbar-social_profile" >
                                                                    <a href={'https://in.pinterest.com/'} target="_blank">
                                                                        <i className="fa fa-pinterest" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="header-main header-main-bg-color-default">
                            <div className="container-fluid">
                                <Row>
                                    <Col lg={12}>
                                        <div className="row align-items-center justify-content-md-center">
                                            <Col xl={2} lg={2} className="col-6">
                                                <div className="logo-wrapper">
                                                    <Link to="/">
                                                        <img className="img-fluid" src={logo} alt="logo" />
                                                    </Link>
                                                </div>
                                                <div className="clearfix" />
                                            </Col>
                                            <div className="col" id="mainMenu">
                                                <div className="header-nav header-nav-bg-color-default">
                                                    <div className="header-nav-wrapper">
                                                        <Container>
                                                            <Row>
                                                                <div className="col-12">
                                                                    <div className="primary-nav">
                                                                        <div className="primary-nav-wrapper">
                                                                            <nav className="mega-menu">
                                                                                <div class="menu-list-items">
                                                                                    <Navbar light expand="md" class="front_menu" >
                                                                                        <NavbarToggler onClick={this.toggle} />
                                                                                        <Collapse isOpen={this.state.isOpen} navbar>
                                                                                            {navLinks.map((navLink, index) => (
                                                                                                <Nav className="ml-auto" navbar>
                                                                                                    {(navLink.type && navLink.type === 'subMenu') ?
                                                                                                        <Fragment>
                                                                                                            <UncontrolledDropdown nav inNavbar onMouseEnter={() => this.OpenSubmenuOpen(`submenu_${index}`)} onMouseLeave={() => this.OpenSubmenuClose(`submenu_${index}`)}>
                                                                                                                <Link aria-haspopup="true" to={navLink.path} className="dropdown-toggle nav-link" aria-expanded="true"> {navLink.menu_title}</Link>
                                                                                                                <DropdownMenu right id={`submenu_${index}`}>

                                                                                                                    {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                                                                        <DropdownItem tag={Link} to={subNavLink.path}>{subNavLink.menu_title}</DropdownItem>
                                                                                                                    ))}
                                                                                                                </DropdownMenu>
                                                                                                            </UncontrolledDropdown>

                                                                                                        </Fragment>
                                                                                                        :
                                                                                                        <Fragment>
                                                                                                            <NavItem>
                                                                                                                <NavLink href={navLink.path}>{navLink.menu_title}</NavLink>
                                                                                                            </NavItem>

                                                                                                        </Fragment>
                                                                                                    }
                                                                                                </Nav>
                                                                                            ))}
                                                                                        </Collapse>
                                                                                    </Navbar>
                                                                                </div>
                                                                            </nav>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Row>
                                                        </Container>
                                                    </div>
                                                </div>
                                            </div>
                                            <Col xl={2} lg={2} className="col-6">
                                                <div className="header-nav-right-wrapper">
                                                    <div className="ciya-tools">
                                                        <div className="ciya-tools-wrapper">
                                                            <ul className="ciya-tools-actions">
                                                                <li className="ciya-tools-action ciya-tools-cart">
                                                                    {
                                                                        (this.ReadCartItems() == null || this.ReadCartItems().length == 0) ?
                                                                            <Link className="cart-link" to="#" onClick={() => this.ShowCart()} >
                                                                                <span className="cart-icon"><i className="glyph-icon pgsicon-ecommerce-empty-shopping-cart" /></span>
                                                                                <span className="cart-count count">  {this.ReadCartItems() == null ? 0 : this.ReadCartItems().length}  </span>
                                                                            </Link>

                                                                            :

                                                                            <Link className="cart-link" to="/ShopingCart" onClick={() => this.ShowCart()} >
                                                                                <span className="cart-icon"><i className="glyph-icon pgsicon-ecommerce-empty-shopping-cart" /></span>
                                                                                <span className="cart-count count">  {this.ReadCartItems() == null ? 0 : this.ReadCartItems().length}  </span>
                                                                            </Link>

                                                                    }


                                                                    {(this.ReadCartItems() != null && this.ReadCartItems().length > 0) ?

                                                                        <div className="cart-contents" id="DivCartContent">
                                                                            <div className="widget ciyashop widget-shopping-cart">
                                                                                <div className="widget-shopping-cart-content">
                                                                                    <div className="pgs-product-list-widget-container has-scrollbar">
                                                                                        <ul className="ciyashop-mini-cart cart-list">



                                                                                            {this.ReadCartItems().map((CartItem, index) => (

                                                                                                <li className="ciya-mini-cart-item"   >
                                                                                                    <Link onClick={() => this.removeFromCart(index)} id={`Product_${CartItem.ProductID}`} className="remove remove_from_cart_button">×</Link>
                                                                                                    <div className="media">
                                                                                                        <Link to="#"><img width={60} height={76} src={require(`../../assets/images/${CartItem.ProductImage}`)} className="img-fluid" alt /></Link>
                                                                                                        <div className="media-body">
                                                                                                            <Link to="#" className="product-title">{CartItem.ProductName}</Link>
                                                                                                            <span className="quantity">{CartItem.Qty} × <span className="woocs-special_price_code"><span className="ciya-Price-amount amount"><span className="ciya-Price-currencySymbol">$</span>{CartItem.Rate}</span></span></span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </li>
                                                                                            ))}

                                                                                        </ul>
                                                                                    </div>
                                                                                    <p className="ciyashop-mini-cart__total total"><strong>Subtotal:</strong> <span className="woocs_special_price_code"><span className="ciyashop-Price-amount amount"><span className="ciyashop-Price-currencySymbol">$</span> {this.ReadCartItems().reduce((fr, CartItem) => fr + (CartItem.Qty * CartItem.Rate), 0)}</span></span></p>
                                                                                    <p className="ciyashop-mini-cart__buttons buttons">
                                                                                        <Link onClick={() => this.HideCart()} to="/ShopingCart" className="button wc-forward">View cart</Link>
                                                                                        <Link onClick={() => this.HideCart()} to="/CheckOut" className="button checkout wc-forward">Checkout</Link>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        :
                                                                        <div className="cart-contents" id="DivCartContent">
                                                                            <div className="widget ciyashop widget-shopping-cart">
                                                                                <div className="widget-shopping-cart-content">
                                                                                    <p className="ciyashop-mini-cart__total total">
                                                                                        <img src={require(`../../assets/images/empty-cart.png`)} className="img-fluid mr-3" />
                                                                                        <strong>Your cart is currently empty.</strong> <span className="woocs_special_price_code"><span className="ciyashop-Price-amount amount"><span className="ciyashop-Price-currencySymbol"></span> </span></span></p>


                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                </li>
                                                                {/* <li className="ciya-tools-action ciya-tools-wishlist"> <Link to="/wishlist"><i className="glyph-icon pgsicon-ecommerce-like" /> <span className="wishlist ciyashop-wishlist-count"> {this.ReadWishListItems() == null ? 0 : this.ReadWishListItems().length} </span> </Link></li> */}
                                                                <li className="ciya-tools-action ciya-tools-search"><Link to="/shop"><i className="glyph-icon pgsicon-ecommerce-magnifying-glass" /></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Navbar color="faded" light >

                                                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                                                <Collapse isOpen={!this.state.collapsed} navbar>
                                                    <Nav className="ml-auto" navbar>
                                                        {navLinks.map((navLink, index) => (
                                                            <li className={`nav-item ${(this.state.classset == navLink.menu_title) ? 'show' : ''}`}>
                                                                {(navLink.type && navLink.type === 'subMenu') ?
                                                                    <Fragment>
                                                                        <Link href="#" className="nav-link" onClick={() => this.onClickClassAdd(navLink.menu_title)}>{navLink.menu_title}</Link>
                                                                        <ul className={(this.state.classset == navLink.menu_title) ? 'showcollapsed' : 'submenu'}>
                                                                            {navLink.child_routes && navLink.child_routes.map((subNavLink, index) => (
                                                                                <li className={`nav-item  ${(pageName == subNavLink.path) ? 'active' : ''}`} toggle={false}   >
                                                                                    <Link className="nav-link" onClick={() => this.closeNavbar()} to={subNavLink.path}>{subNavLink.menu_title}</Link>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </Fragment>
                                                                    :
                                                                    <Fragment>
                                                                        <NavItem>
                                                                            <Link to={navLink.path} className="nav-admin-link" >{navLink.menu_title}</Link>
                                                                        </NavItem>

                                                                    </Fragment>
                                                                }
                                                            </li>
                                                        ))}
                                                    </Nav>
                                                </Collapse>
                                            </Navbar>
                                        </div>
                                    </Col>

                                </Row>
                                <Row>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-login modal-dialog-centered">
                                        <ModalHeader toggle={this.toggle}>
                                            <h4 className="mb-0">Sign in Or Register</h4>
                                        </ModalHeader>
                                        <ModalBody>
                                            <Nav tabs>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({ active: this.state.activeTab === '1' })}
                                                        onClick={() => { this.logintoggle('1'); }}
                                                    >
                                                        Sign In
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames({ active: this.state.activeTab === '2' })}
                                                        onClick={() => { this.logintoggle('2'); }}
                                                    >
                                                        Register
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                            <TabContent activeTab={this.state.activeTab}>
                                                <TabPane tabId="1">
                                                    <form>
                                                        {this.state.statut}
                                                        <div class="form-group">
                                                            <label>Email address</label>
                                                            <input type="text" class="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChangeHandler}></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Password </label>
                                                            <input type="password" class="form-control" placeholder="Password" name="passwordInput" value={this.state.passwordInput} onChange={this.onChangeHandler}/>
                                                        </div>

                                                        <div class="form-group">
                                                            <Link className="btn btn-primary mt-1" onClick={this.onSubmitLogin} >Log in</Link>
                                                            <Link className="btn btn-secondary ml-2 mt-1" onClick={this.toggle} >Cancel</Link>
                                                        </div>
                                                        <p className="mb-0">Don't have account? <Link to="#" className={classnames({ active: this.state.activeTab === '2' })}
                                                            onClick={() => { this.logintoggle('2'); }} > Register </Link>here</p>
                                                    </form>
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    <form>
                                                        <div class="form-group">
                                                            <label>Nom</label>
                                                            <input type="texttext" class="form-control" placeholder="Nom" ref={this.nom}></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Email</label>
                                                            <input type="text" class="form-control" placeholder="Entrer votre email" value={this.state.email} onChange={this.onChangeHandler} name="email"></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Mot de passe </label>
                                                            <input type="password" class="form-control" placeholder="Password" ref={this.passwordInputRef}></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Confirm Password </label>
                                                            <input type="password" class="form-control" placeholder="Confirm Password" ref={this.passwordInputRef2}></input>
                                                        </div>
                                                        <div class="form-group">
                                                            <Link className="btn btn-primary" onClick={this.onSubmitRegister}>S'inscrire</Link>
                                                            <Link className="btn btn-secondary ml-2" onClick={this.toggle} >Cancel</Link>

                                                        </div>
                                                        <p className="mb-0">Already have account? <Link to="#" className={classnames({ active: this.state.activeTab === '1' })}
                                                            onClick={() => { this.logintoggle('1'); }} > SignIn </Link> here </p>
                                                    </form>
                                                </TabPane>
                                            </TabContent>
                                        </ModalBody>
                                    </Modal>
                                    <div className="col-12">
                                        <div className="mobile-menu" id="mobileMenu" />
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>

                    :

                    <div id="preloader">
                        <Loader
                            type="Puff"
                            color="#04d39f"
                            height="100"
                            width="100"
                        />
                    </div>
                }
            </header>

        )
    }
};

const mapStateToProps =(state) => {
    return {
        userRole : state.login.role,
        firstname : state.login.firstname
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetRole : (role) => dispatch(action.setRole(role)),
        onSetUid: (uid) => dispatch(action.setUid(uid)),
        onSetLastName: (lastname) => dispatch(action.setLN(lastname)),
        onSetFirstName: (firstname) => dispatch(action.setFN(firstname)),
        onSetPhoneNumber: (phoneno) => dispatch(action.setPN(phoneno)),
        onSetEmail: (email) => dispatch(action.setEmail(email)),
        onSetAddress: (address) => dispatch(action.setAddress(address)),

        onLogout : () => dispatch(action.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
