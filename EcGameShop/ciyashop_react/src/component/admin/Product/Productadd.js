/**
 *  Admin Site Product Add
 */
import React, { Component } from 'react';
import { Row, Col,Container, FormGroup, Label, Input } from 'reactstrap';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const productslider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
const productdata = {
    Product_single: "product-single.jpg",
    product_gallery: [
       "product-single.jpg",
       "product-single.jpg",
       "product-single.jpg",
       "product-single.jpg"
    ],
    size:[
        "M",
        "L",
        "XXL",
        "S"
    ],
    colors:[
        "Black",
        "Red",
        "Blue",
        "Green"
    ],
<<<<<<< HEAD
=======

>>>>>>> 99ba6edda7d1a9c4232668fac481b469603c971f
    plateform:[
        "PS4",
        "Switch",
        "XBox One",
        "PC"
    ],
<<<<<<< HEAD
=======

>>>>>>> 99ba6edda7d1a9c4232668fac481b469603c971f
    tags:[
        "Athleisure",
        "Jacket",
        "Women",
        "Clothing",
        "Blazers"
    ]

 }
class Productadd extends Component{
        constructor(props) {
            super(props);
            this.state = {
                pictures: [] ,
                photoIndex: 0,
                isOpen: false,
                articleName:"",
                articleDateAvailibility:"",
                articleAddedDate:"",
                articleDatePromoEnd:"",
                articleDeactivated:"",
                articleDematerialized:"",
                articleDescription:"",
                articlePlateforme:"",
                articlePrice:"",
                articlePricePromo:"",
                articlePromoBegDate:"",
                articleQty:"",
                refArticle:"",
                categories:[],
                ErrorMsg:""
            };
            this.Uploadimage = this.Uploadimage.bind(this);
            this.onClickSaveBtn = this.onClickSaveBtn.bind(this);
            this.onChangeHandler=this.onChangeHandler.bind(this);
        }
        

        onChangeHandler(event){
            const value = event.type === 'checkbox' ? event.checked : event.value;
            const name = event.name;
            this.setState({
                ...this.state,
                [name]:value               
            })            
        }
        onClickSaveBtn(event){
            event.preventDefault();
            console.log(this.state);
            const article ={};
            article.articleName = this.state.articleName;
<<<<<<< HEAD

            fetch("http://localhost:8080/addArticle",
            {
                method:"post",
                credentials:"include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "no-cors",
                body:JSON.stringify(article)
            }).then(data=>console.log("data",data))
            .catch(error=>console.log(error))

            //if(this.state.articleName!=="" && this.state.art)

=======

            fetch("http://localhost:8080/addArticle",
            {
                method:"post",
                credentials:"include",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                mode: "no-cors",
                body:JSON.stringify(article)
            }).then(data=>console.log("data",data))
            .catch(error=>console.log(error))

            //if(this.state.articleName!=="" && this.state.art)

>>>>>>> 99ba6edda7d1a9c4232668fac481b469603c971f
        }
        Uploadimage(picture) {
            if(picture == '')
            {
                this.setState({
                    ...this.state,
                    ErrorMsg:"File Not Supported"
                })
            }
            else
            {
                this.setState({
                    pictures: this.state.pictures.concat(picture),
                    ErrorMsg:''
                });
            }
        }
        fetchCategories(){
            fetch("http://localhost:8080/categories",
            {
                method:"get",
                credentials:"include"
            }).then(response=>response.json())
            .then(result=>
                this.setState({
                    ...this.state,
                    categories:result
                }))

        }
        componentDidMount() {
            window.scrollTo(0, 0)
            this.fetchCategories();
        }
      render(){
        return(
                <div>
                    <div className="site-content">
                        <div className="content-wrapper section-ptb">
                            <Container>
                                <div className="product-content-top single-product single-product-edit">
                                    <Row>
                                        <div className="product-top-left col-xl-5 col-md-6">
                                            <div className="product-top-left-inner">
                                                <div className="ciyashop-product-images">
                                                <div className="ciyashop-product-images-wrapper ciyashop-gallery-style-default ciyashop-gallery-thumb_position-bottom ciyashop-gallery-thumb_vh-horizontal">
                                                    <div className="ciyashop-product-gallery ciyashop-product-gallery--with-images slick-carousel">
                                                    <Slider {...settings} className="ciyashop-product-gallery__wrapper popup-gallery">
                                                        <div className="ciyashop-product-gallery__image">
                                                                <img src={require(`../../../assets/images/${productdata.Product_single}`)}   className="img-fluid" />
                                                        </div>

                                                    </Slider>

                                                    </div>
                                                    <div className="ciyashop-product-thumbnails">
                                                        <Slider {...productslider} className="ciyashop-product-thumbnails__wrapper">
                                                            {productdata.product_gallery.map((pictureimage,index) =>
                                                                <div key={index}>
                                                                    <div className="ciyashop-product-thumbnail__image">
                                                                        <a href="javascript:void(0)">
                                                                            <img src={require(`../../../assets/images/${pictureimage}`)}  className="img-fluid" />
                                                                        </a>
                                                                        <div className="d-flex justify-content-center image-content align-items-center">
                                                                            <ImageUploader
                                                                                buttonText=""
                                                                                withIcon={false}
                                                                                withPreview={true}
                                                                                fileTypeError={this.state.ErrorMsg}
                                                                                onChange={this.Uploadimage}
                                                                                imgExtension={['.jpg', '.jpeg', '.png']}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            )}
                                                        </Slider>
                                                    </div>
                                                    <div className="clearfix" />
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                       <div className="product-top-right col-xl-7 col-md-6">
                                        <div className="product-top-right-inner">
                                                <div className="summary entry-summary">
                                                        <FormGroup className="edit-icon">
                                                            <Input type="text" name="articleName" value={this.state.articleName} onChange={e=>this.onChangeHandler(e.target)} className="form-control product_title" placeholder="Product Name"  />
                                                        </FormGroup>
                                                        <FormGroup className="edit-icon">
                                                            <Input type="text" value={this.state.articlePrice} name="articlePrice" onChange={e=>this.onChangeHandler(e.target)} className="form-control price" placeholder="Article Price"  />
                                                        </FormGroup>
                                                        <FormGroup className="edit-icon">
                                                            <Input  type="textarea" value={this.state.articleDescription} name="articleDescription" onChange={e=>this.onChangeHandler(e.target)} className="form-control" rows="3" placeholder="Article Description" />
                                                        </FormGroup>
                                                        <Label className="title">Plateform</Label>
                                                        <FormGroup>
                                                            {productdata.plateform.map((p) =>
                                                                <Label>
                                                                    <Input  name="articlePlateform" value={p} onChange={e=>this.onChangeHandler(e.target)} type="checkbox"/>{' '}
                                                                    {p}
                                                                </Label>
                                                            )}
                                                        </FormGroup>
                                                        <Label className="title">Dematerialized</Label>
                                                         <FormGroup>
                                                            <Label>
                                                                <Input name="articleDematerialized" onChange={e=>this.onChangeHandler(e.target)} type="checkbox"/>{' '}
                                                                Yes
                                                            </Label>
                                                            <Label>
                                                                <Input name="articleNotDematerialized" onChange={e=>this.onChangeHandler(e.target)} type="checkbox"/>{' '}
                                                                No
                                                            </Label>                                                            
                                                        </FormGroup> 
                                                         <FormGroup>
                                                        <Label className="title pl-0">Brand</Label>
                                                        <Input type="text" name="articleBrand" value={this.state.articleName} onChange={e=>this.onChangeHandler(e.target)} class="form-control" placeholder="Article Brand" />
                                                        </FormGroup>
                                                        <Label className="title mb-2">Categories</Label>
                                                        <FormGroup>
                                                            {this.state.categories.map((label) =>
                                                            <Label>
                                                            <Input name="categoryLabel" value={label.categoryLabel} onChange={e=>this.onChangeHandler(e.target)} type="checkbox"/>{' '}
                                                            {label.categoryLabel}
                                                            </Label>
                                                            )}
                                                        </FormGroup>
                                                        <Label className="title mb-2">Availibility Date</Label>
                                                        <FormGroup>
                                                            <Input type="date" name="articleAvailibilityDate" value={this.state.articleDateAvailibility} onChange={e=>this.onChangeHandler(e.target)} value={this.state.articleDateAvailibility}  onChange={e=>this.onChangeHandler(e.target.value)} ></Input>
                                                        </FormGroup>
                                                        <Label className="title mb-2">Article Promotion Beginning Date</Label>
                                                        <FormGroup>
                                                            <Input type="date" name="articlePromoBegDate" value={this.state.articlePromoBegDate} onChange={e=>this.onChangeHandler(e.target)}></Input>
                                                        </FormGroup>
                                                        <Label className="title mb-2">Article Promotion Ending Date</Label>
                                                        <FormGroup>
                                                            <Input type="date" name="articlePromoEndDate" value={this.state.articleDatePromoEnd} onChange={e=>this.onChangeHandler(e.target)}></Input>
                                                        </FormGroup>
                                                        <Label className="title mb-2">Promotion Price</Label>
                                                        <FormGroup>
                                                            <Input type="text" name="articlePromoPrice" value={this.state.articlePricePromo} onChange={e=>this.onChangeHandler(e.target)} className="form-control" placeholder="Promotion Price" ></Input>
                                                        </FormGroup>
                                                        <FormGroup>
                                                        <Label className="title pl-0">Product Stock</Label>
                                                        <input type="text" name="articleQty" value={this.state.articleQty} onChange={e=>this.onChangeHandler(e.target)} class="form-control" placeholder="Article Stock"></input>
                                                        </FormGroup>
                                                        {/* <FormGroup>
                                                        <Label className="title pl-0">Total Products</Label>
                                                        <input type="text" name="" className="form-control" placeholder="Total Article" ></input>
                                                        </FormGroup> */}

                                                        {/* <a href="#" class="btn btn-primary mb-2 mr-2"> Save </a> */}
                                                        <button  class="btn btn-primary mb-2 mr-2" onClick={this.onClickSaveBtn}>Save</button>
                                                        <Link to="/admin-panel/Product" class="btn btn-danger mb-2"> Cancel </Link>
                                                    </div>
                                                </div>
                                        </div>
                                    </Row>
                                    </div>
                            </Container>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Productadd;
