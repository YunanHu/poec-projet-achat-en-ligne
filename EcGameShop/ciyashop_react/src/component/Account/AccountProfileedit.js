/**
 *  Account Profile Edit
 */
import React, { Component } from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import Sitebar from './Sitebar';
import Common from '../../api/common';
import { Link } from 'react-router-dom';
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as action from "../../actions/loginInfo";


class AccountProfileedit extends Component {

  constructor(props) {

    super(props);
    this.state = {
      fieldvalue: Common['0']['profile'],
      errors: {},
      firstname: props.firstname,
      lastname: props.lastname,
      email: props.email,
      phoneno: props.phoneno,

    }
  }


  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleValidation() {
    let fieldvalue = this.state.fieldvalue;
    let errors = {};
    let formIsValid = true;

    //First Name
    if (!fieldvalue["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "Please Enter First Name";
    }

    if (typeof fieldvalue["firstname"] !== "undefined") {
      if (!fieldvalue["firstname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstname"] = "Please Enter Only Letter";
      }
    }

    //Last Name
    if (!fieldvalue["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "Please Enter Last Name";
    }

    if (typeof fieldvalue["lastname"] !== "undefined") {
      if (!fieldvalue["lastname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastname"] = "Please Enter Only Letter";
      }
    }


    //Phone nomber
    if (!fieldvalue["phoneno"]) {
      formIsValid = false;
      errors["phoneno"] = "Please Enter Phone NO";
    }

    if (typeof fieldvalue["phoneno"] !== "undefined") {
      if (!fieldvalue["phoneno"].match(/^\d{10}$/)) {
        formIsValid = false;
        errors["phoneno"] = "Please Enter Valid Phone no";
      }
    }

    //Email ID
    if (!fieldvalue["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "Please Enter Email ID";
    }

    if (typeof fieldvalue["emailid"] !== "undefined") {
      if (!fieldvalue["emailid"].match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$/)) {
        formIsValid = false;
        errors["emailid"] = "Please Enter Valid Email Address";
      }
    }

    // //Male & Female Radio Button
    // if (!fieldvalue["customradio"]) {
    //     formIsValid = false;
    //     errors["customradio"] = "Please Select Radio";
    // }


    // //Address
    // if (!fieldvalue["address"]) {
    //   formIsValid = false;
    //   errors["address"] = "Please Enter Address";
    // }

    // if (typeof fieldvalue["address"] !== "undefined") {
    //     if (!fieldvalue["address"].match(/^[a-zA-Z0-9 ]+$/)) {
    //       formIsValid = false;
    //       errors["address"] = "Please Enter Only Letter";
    //     }
    // }

    this.setState({ errors: errors });
    return formIsValid;

  }

  onProfileFormSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      return true;
    }
    else {
      // alert('Please Enter Valid Data.');
    }
  }


  handleChange(field, e) {
    let fieldvalue = this.state.fieldvalue;
    fieldvalue[field] = e.target.value;
    this.setState({ fieldvalue });
  }

  onClickSave = async () => {

    const response2 = await axios({
      method: 'post',
      withCredentials: true,
      url: 'http://localhost:8080/editProfile/byid',
      data: {
        uid: this.props.uid,
        email: this.state.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phoneno: this.state.phoneno
      }
    })

    if (response2.status == 200) {
      console.log("changed")

      this.props.onSetLastName(this.state.lastname)
      this.props.onSetFirstName(this.state.firstname)
      this.props.onSetPhoneNumber(this.state.phoneno)
      this.props.onSetEmail(this.state.email)

      localStorage.setItem("firstname", this.state.firstname);
      localStorage.setItem("lastname", this.state.lastname);
      localStorage.setItem("email", this.state.email);


      this.props.history.push("/Account/AccountProfile")

    }

  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const Profile = Common['0']['profile'];
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
                  <li><span>Mon Compte</span></li>
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
                  <Col lg={12}>
                    <div className="woocommerce-Address woocommerce-Address-edit">
                      <div className="woocommerce-Address-title">
                        <h5 class="mb-0">Editer son profile </h5>
                      </div>
                      <div className="woocommerce-Address-info mt-4">
                        <form onSubmit={this.onProfileFormSubmit.bind(this)}>
                          <div class="form-group">
                            <label>First name</label>
                            <input type="text" class="form-control" name="firstname"  value={this.state.firstname} onChange={this.onChangeHandler} placeholder="First name"  />
                            <span className="error">{this.state.errors["firstname"]}</span>
                          </div>
                          <div class="form-group">
                            <label>Last name</label>
                            <input type="text" class="form-control" name="lastname" value={this.state.lastname} onChange={this.onChangeHandler} placeholder="Last name"></input>
                            <span className="error">{this.state.errors["lastname"]}</span>
                          </div>
                          <div class="form-group">
                            <label>Email</label>
                            <input type="Email" class="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.onChangeHandler}></input>
                            <span className="error">{this.state.errors["email"]}</span>
                          </div>
                          <div class="form-group">
                            <label>Phone</label>
                            <input type="text" class="form-control" placeholder="Phone" name="phoneno" value={this.state.phoneno} onChange={this.onChangeHandler}></input>
                            <span className="error">{this.state.errors["phoneno"]}</span>
                          </div>
                          {/* <div class="form-group">
                        <label className="d-block">Gender</label>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="male" name="gender" class="custom-control-input" value="Male" onChange={this.handleChange.bind(this, "gender")} checked={this.state.fieldvalue.gender === "Male"}></input>
                            <label class="custom-control-label" for="male" >Male</label>
                          </div>
                          <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="female" name="gender" class="custom-control-input" value="Female" onChange={this.handleChange.bind(this, "gender")} checked={this.state.fieldvalue.gender === "Female"}></input>
                            <label class="custom-control-label" for="female">Female</label>
                          </div>
                        </div>
                        <div class="form-group">
                          <label>Date of birth</label>
                          <input type="date" class="form-control" placeholder="Date of birth"  value={this.state.fieldvalue.dob} onChange={this.handleChange.bind(this, "dob")} ></input>
                        </div>
                        <div class="form-group">
                          <label>Address</label>
                          <textarea class="form-control" rows="3" placeholder="Address" value={this.state.fieldvalue.address}   onChange={this.handleChange.bind(this, "address")}></textarea>
                          <span className="error">{this.state.errors["address"]}</span>
                        </div> */}
                          <Button onClick={this.onClickSave} type="submit" className="btn btn-primary">Save</Button>
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
    uid: state.login.uid,
    lastname: state.login.lastname,
    firstname: state.login.firstname,
    email: state.login.email,
    phoneno: state.login.phoneno


  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetLastName: (lastname) => dispatch(action.setLN(lastname)),
    onSetFirstName: (firstname) => dispatch(action.setFN(firstname)),
    onSetPhoneNumber: (phoneno) => dispatch(action.setPN(phoneno)),
    onSetEmail: (email) => dispatch(action.setEmail(email)),

    onLogout: () => dispatch(action.logout())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountProfileedit));
