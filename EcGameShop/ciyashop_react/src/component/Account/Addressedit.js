/**
 * User Address Edit
 */
import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import Sitebar from './Sitebar';
import Common from '../../api/common';
import { Link } from 'react-router-dom';
import axios from "axios"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import * as action from "../../actions/loginInfo"


class Addressedit extends Component {

  constructor(props) {

    super(props);
    this.state = {
      billingaddress: Common['0']['billingaddress'],
      shippingaddress: Common['0']['shippingaddress'],
      errors: {},
      address: this.props.address
    };


  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  ValidationAddress() {
    let fieldvalue = this.state.billingaddress;
    let errors = {};
    let formIsValid = true;

    //Billing Name
    if (!fieldvalue["billingname"]) {
      formIsValid = false;
      errors["billingname"] = "Please Enter Billing Name";
    }

    if (typeof fieldvalue["billingname"] !== "undefined") {
      if (!fieldvalue["billingname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["billingname"] = "Billing Name  Not Valid";
      }
    }


    //Billing Address Name
    if (!fieldvalue["address"]) {
      formIsValid = false;
      errors["address"] = "Please Enter  Billing Address";
    }

    if (typeof fieldvalue["address"] !== "undefined") {
      if (!fieldvalue["address"].match(/^[a-zA-Z0-9 ]+$/)) {
        formIsValid = false;
        errors["address"] = "Billing Address Not Valid";
      }
    }

    //Street Number
    if (!fieldvalue["streetno"]) {
      formIsValid = false;
      errors["streetno"] = "Please Enter Street No";
    }

    if (typeof fieldvalue["streetno"] !== "undefined") {
      if (!fieldvalue["streetno"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["streetno"] = "Street No Not Valid";
      }
    }

    //State Name
    if (!fieldvalue["state"]) {
      formIsValid = false;
      errors["state"] = "Please Enter State";
    }

    if (typeof fieldvalue["state"] !== "undefined") {
      if (!fieldvalue["state"].match(/^[a-zA-Z ]+$/)) {
        formIsValid = false;
        errors["state"] = "State Not Valid";
      }
    }

    //Zip Code
    if (!fieldvalue["zipcode"]) {
      formIsValid = false;
      errors["zipcode"] = "Please Enter Zip Code";
    }

    if (typeof fieldvalue["zipcode"] !== "undefined") {
      if (!fieldvalue["zipcode"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["zipcode"] = "Zip Code Not Valid";
      }
    }

    //Country Name
    if (!fieldvalue["country"]) {
      formIsValid = false;
      errors["country"] = "Please Enter Country Name";
    }

    if (typeof fieldvalue["country"] !== "undefined") {
      if (!fieldvalue["country"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["country"] = "Country Name Not Valid";
      }
    }


    this.setState({ errors: errors });
    return formIsValid;

  }

  ValidationAddress1() {
    let fieldvalue = this.state.shippingaddress;
    let errors = {};
    let formIsValid = true;

    //Billing Name
    if (!fieldvalue["shippingname"]) {
      formIsValid = false;
      errors["shippingname"] = "Please Enter Shipping Name";
    }

    if (typeof fieldvalue["shippingname"] !== "undefined") {
      if (!fieldvalue["shippingname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["shippingname"] = "Shipping Name  Not Valid";
      }
    }


    //Billing Address Name
    if (!fieldvalue["address"]) {
      formIsValid = false;
      errors["saddress"] = "Please Enter  Billing Address";
    }

    if (typeof fieldvalue["address"] !== "undefined") {
      if (!fieldvalue["address"].match(/^[a-zA-Z0-9 ]+$/)) {
        formIsValid = false;
        errors["saddress"] = "Billing Address Not Valid";
      }
    }

    //Street Number
    if (!fieldvalue["streetno"]) {
      formIsValid = false;
      errors["sstreetno"] = "Please Enter Street No";
    }

    if (typeof fieldvalue["streetno"] !== "undefined") {
      if (!fieldvalue["streetno"].match(/^[a-zA-Z ]+$/)) {
        formIsValid = false;
        errors["sstreetno"] = "Street No Not Valid";
      }
    }

    //State Name
    if (!fieldvalue["state"]) {
      formIsValid = false;
      errors["sstate"] = "Please Enter State";
    }

    if (typeof fieldvalue["state"] !== "undefined") {
      if (!fieldvalue["state"].match(/^[a-zA-Z ]+$/)) {
        formIsValid = false;
        errors["sstate"] = "State Not Valid";
      }
    }

    //Zip Code
    if (!fieldvalue["zipcode"]) {
      formIsValid = false;
      errors["szipcode"] = "Please Enter Zip Code";
    }

    if (typeof fieldvalue["zipcode"] !== "undefined") {
      if (!fieldvalue["zipcode"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["szipcode"] = "Zip Code Not Valid";
      }
    }

    //Country Name
    if (!fieldvalue["country"]) {
      formIsValid = false;
      errors["scountry"] = "Please Enter Country Name";
    }

    if (typeof fieldvalue["country"] !== "undefined") {
      if (!fieldvalue["country"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["scountry"] = "Country Name Not Valid";
      }
    }


    this.setState({ errors: errors });
    return formIsValid;

  }

  onAddressFormSubmit(e) {
    e.preventDefault();
    if (this.ValidationAddress()) {
      return true;
    }
  }

  onAddressFormSubmit1(e) {
    e.preventDefault();
    if (this.ValidationAddress1()) {
      return true;
    }
  }

  handleChange(field, e) {
    let billingaddress = this.state.billingaddress;
    billingaddress[field] = e.target.value;
    this.setState({ billingaddress });
  }

  handleChange1(field, e) {
    let fieldvalue = this.state.shippingaddress;
    fieldvalue[field] = e.target.value;
    this.setState({ fieldvalue });
  }

  onSave = async () => {
    console.log(this.state.address)
    const response2 = await axios({
      method: 'post',
      withCredentials: true,
      url: 'http://localhost:8080/addAddresses/byid',
      data: {
        uid: this.props.uid,
        addresses: [this.state.address]
        
      }
    })
    console.log(response2)
    if (response2.status == 200) {
      console.log("changed")

      this.props.onSetAddress(this.state.address)
      // localStorage.setItem("address", );
      this.props.history.push("/Account/Address")

    }

  }

  onChangeHandler = (event) => {
    console.log(event.target.name)
    this.setState({
        address: {
          ...this.state.address,
          [event.target.name]: event.target.value
        }
    })
  }


  render() {
    return (
      <div>
        <div className="inner-intro">
          <Container>
            <Row className="intro-title align-items-center">
              <Col md={6} className="text-left">
                <div className="intro-title-inner">
                  <h1>My Account</h1>
                </div>
              </Col>
              <Col md={6} className="text-right">
                <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                  <li className="home">
                    <span>
                      <Link className="bread-link bread-home" to="/">Home</Link>
                    </span>
                  </li>
                  <li><span>My Account</span></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section-ptb">
          <Container>
            <Row>
              <Sitebar />
              <Col lg={9} className="mt-4 mt-lg-0">
                <Row>
                  <Col md={6}>
                    <div className="woocommerce-Address">
                      <div className="woocommerce-Address-title">
                        <h5 class="mb-0">Billing Address Edit</h5>
                      </div>
                      <div className="woocommerce-Address-info mt-4">
                        <form onSubmit={this.onAddressFormSubmit.bind(this)}>
                          <div class="form-group">
                            <label>Billing Name</label>
                            <input type="Text" class="form-control" name="billing_name" placeholder="Billing name" value={this.state.address.billing_name} onChange={this.onChangeHandler}></input>
                            <span className="error">{this.state.errors["billingname"]}</span>
                          </div>
                          <div class="form-group">
                            <label>Address</label>
                            <textarea class="form-control" rows="3" name="billing_address" placeholder="Address" value={this.state.address.billing_address} onChange={this.onChangeHandler}></textarea>
                            <span className="error">{this.state.errors["address"]}</span>
                          </div>
                          <div class="form-group">
                            <label>Street No</label>
                            <input type="Text" class="form-control" name="billing_streetno" placeholder="street no" value={this.state.address.billing_streetno} onChange={this.onChangeHandler}></input>
                            <span className="error">{this.state.errors["streetno"]}</span>
                          </div>
                          <div class="form-group">
                            <label>State</label>
                            <input type="Text" class="form-control" name="billing_state" placeholder="state" value={this.state.address.billing_state} onChange={this.onChangeHandler}></input>
                            <span className="error">{this.state.errors["state"]}</span>
                          </div>
                          <div class="form-group">
                            <label>Zip Code/Pin Code</label>
                            <input type="Text" class="form-control" name="billing_zipcode" placeholder="zip code/pin code" value={this.state.address.billing_zipcode} onChange={this.onChangeHandler}></input>
                            <span className="error">{this.state.errors["zipcode"]}</span>
                          </div>
                          <div class="form-group">
                            <label>Country</label>
                            <input type="Text" class="form-control" name="billing_country" placeholder="Country" value={this.state.address.billing_country} onChange={this.onChangeHandler} ></input>
                            <span className="error">{this.state.errors["country"]}</span>
                          </div>
                          <button onClick={this.onSave} type="submit" class="btn btn-primary">Save</button>
                        </form>
                      </div>
                    </div>
                  </Col>
                  <Col md={6} className="mt-4 mt-md-0">
                    <div className="woocommerce-Address">
                      <div className="woocommerce-Address-title">
                        <h5 class="mb-0">Shipping Address Edit</h5>
                      </div>
                      <div className="woocommerce-Address-info mt-4">
                        <form onSubmit={this.onAddressFormSubmit1.bind(this)}>
                          <div class="form-group">
                            <label>Billing Name</label>
                            <input type="Text" class="form-control" name="shipping_name" placeholder="Shipping name" value={this.state.address.shipping_name} onChange={this.onChangeHandler}></input>
                            <span className="error">{this.state.errors["shippingname"]}</span>
                          </div>
                          <div class="form-group">
                            <label>Address</label>
                            <textarea class="form-control" rows="3" name="shipping_address" placeholder="Address" value={this.state.address.shipping_address} onChange={this.onChangeHandler}></textarea>
                            <span className="error">{this.state.errors["saddress"]}</span>
                          </div>
                          <div class="form-group">
                            <label>Street No</label>
                            <input type="Text" class="form-control" name="shipping_streetno" placeholder="street no" value={this.state.address.shipping_streetno} onChange={this.onChangeHandler}></input>
                            <span className="error">{this.state.errors["sstreetno"]}</span>
                          </div>
                          <div class="form-group">
                            <label>State</label>
                            <input type="Text" class="form-control" name="shipping_state" placeholder="state" value={this.state.address.shipping_state} onChange={this.onChangeHandler}></input>
                            <span className="error">{this.state.errors["sstate"]}</span>
                          </div>
                          <div class="form-group">
                            <label>Zip Code/Pin Code</label>
                            <input type="Text" class="form-control" name="shipping_zipcode" placeholder="zip code/pin code" value={this.state.address.shipping_zipcode} onChange={this.onChangeHandler}></input>
                            <span className="error">{this.state.errors["szipcode"]}</span>
                          </div>
                          <div class="form-group">
                            <label>Country</label>
                            <input type="Text" class="form-control" name="shipping_country" placeholder="Country" value={this.state.address.shipping_country} onChange={this.onChangeHandler} ></input>
                            <span className="error">{this.state.errors["scountry"]}</span>
                          </div>
                          <button onClick={this.onSave} type="submit" className="btn btn-primary">Save</button>
                        </form>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    address: state.login.address,
    uid: state.login.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetAddress: (address) => dispatch(action.setAddress(address)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Addressedit));




/*billing_name: this.props.address.billing_name,
              billing_address: this.props.address.billing_address,
              billing_streetno: this.props.address.billing_streetno,
              billing_state: this.props.address.billing_state,
              billing_zipcode: this.props.address.billing_zipcode,
              billing_country: this.props.address.billing_country,
              shipping_name: this.props.address.shipping_name,
              shipping_address: this.props.address.shipping_address,
              shipping_streetno: this.props.address.shipping_streetno,
              shipping_state: this.props.address.shipping_state,
              shipping_zipcode: this.props.address.shipping_zipcode,
              shipping_country: this.props.address.shipping_country
          }*/