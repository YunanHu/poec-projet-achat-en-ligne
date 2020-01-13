/**
 *  Admin Site Product Add
 */
import React, { Component } from 'react';
import { Row, Col,Container, FormGroup, Label, Input } from 'reactstrap';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import ImageUploader from 'react-images-upload';

// import UseFormArticleValidation from '../../../hook/useFormArticleValidation';
import { connect } from 'react-redux';
import axios from 'axios';



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
    plateform:[
        "PS4",
        "Switch",
        "XBox One",
        "PC"
    ],
    dematerialized:[
        "true",
        "false"
    ],
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
                articleBrand:"",
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
                user:[],
                uid:this.props.uid,
                validationErrorMsg:""
            };
            this.Uploadimage = this.Uploadimage.bind(this);
            this.onClickSaveBtn = this.onClickSaveBtn.bind(this);
            this.onChangeHandler=this.onChangeHandler.bind(this);
            this.onBlurHandler = this.onBlurHandler.bind(this);
            this.onFocus = this.onFocus.bind(this);
            this.fetchCategories = this.fetchCategories.bind(this);
            this.fetchUser = this.fetchUser.bind(this);
        }
        onChangeHandler(event){
            
            // const value = event.type === 'radio' ? event.checked : event.value;
            const value = event.value;
            const name = event.name;
            this.setState({
                ...this.state,
                [name]:value,
                validationErrorMsg:""               
            })            
        }

        onFocus(){
            this.setState({
                ...this.state,
                validationErrorMsg:""
            })
        }

        onBlurHandler(event){
            this.setState({
                ...this.state,
                validationErrorMsg:this.validationOnBlurArticleForm(event)
            })
        }
        fetchUser(uid){
            fetch("http://localhost:8080/user/byid/"+uid,
            {
                method:"get",
                credentials:"include"
            }).then(response=>response.json())
            .then(result=>
                this.setState({
                    ...this.state,
                    user:result
                }))
                .catch(function(error){
                    console.log(error.message);
                })
        }

        validationOnBlurArticleForm(event){
            let errors = {};
            const name = event.name;
            const value =event.value;
            if(name ==="articleName"){
                if(!value){
                    errors.articleName = "Required Name";
                }
                else if(value.length<6){
                    errors.articleName = "At least 6 characters";
                }
            }
            return errors;
        }

        validationArticleForm(values){
            console.log("values",values);
            let errors = {};
            if(!values.articleName){
                errors.articleName = "Required Name";
            }
            else if(values.articleName.length<6){
                errors.articleName = "At least 6 characters";
            }
            if(!values.articlePrice){
                errors.articlePrice = "Required Price"
            }
            else if(parseFloat(values.articlePrice)>150){
                errors.articlePrice = "Are you serious? is it not too expensive?";
            }
            if(!values.articleDescription){
                errors.articleDescription = "Required Description"
            }
            else if(values.articleDescription.length<10){
                errors.articleDescription = "a little bit more please. At least 50 characters";
            }
            if(!values.articlePlateforme){
                errors.articlePlateforme = "Required Platform";
            }
            if(!values.articleBrand){
                errors.articleBrand = "Required Brand";
            }
            if(!values.articleCategory){
                errors.articleCategory = "Required Category";
            }

            if(!values.articleDateAvailibility){
                errors.articleDateAvailibility = "Required Date availibility";
            }

            if(!values.articlePromoBegDate){
                if(values.articleDatePromoEnd){
                    if(!values.articlePromoPrice){
                        errors.articlePricePromo = "Required Promotion Price"
                    }
                    errors.articlePromoBegDate = "Required Beginning Promotion Date"
                }
            }
            else if(!values.articleDatePromoEnd){
                console.log("no end date");
                if(!values.articlePromoPrice){
                    errors.articlePricePromo = "Required Promotion Price"
                }
                else if(parseFloat(values.articlePromoPrice)>=parseFloat(values.articlePrice)){
                    errors.articlePricePromo = "The Promo Price is Higher Than The Regular Price";
                }
                errors.articleDatePromoEnd = "Required End Promotion Date"
            }

            if(!values.articleDematerialized){
                errors.articleDematerialized="Is it dematerialized or not?"
            }

            if(!values.articleQty){
                errors.articleQty="Required Quantity"
            }
            return errors;
        }
        onClickSaveBtn  = async (event) =>{
            const date = new Date();
            const day = ('0'+date.getDate()).slice(-2);
            const year = date.getFullYear();
            const month = ('0'+date.getMonth()+1).slice(-2);
            const actualDate = year+"-"+month+"-"+day;
            event.preventDefault();
            const article ={};
            article.articleName = this.state.articleName;
            article.articleBrand = this.state.articleBrand;
            article.articleDescription = this.state.articleDescription;
            article.articleDateAvailibility = this.state.articleDateAvailibility;
            article.articleAddedDate = actualDate;
            article.articlePlateforme = this.state.articlePlateforme;
            article.articleCategory = this.state.articleCategory;
            article.articleDematerialized = this.state.articleDematerialized;
            article.articlePricePromo = this.state.articlePricePromo;
            article.articlePrice = this.state.articlePrice;
            article.articleQty = this.state.articleQty;
            article.articlePromoBegDate = this.state.articlePromoBegDate;
            article.articleDatePromoEnd = this.state.articleDatePromoEnd;

            
            article.artListImg = this.state.pictures;
            console.log("article.artListImg",article.artListImg);
            const articleCategoryArray = this.state.categories.filter(c=>c.categoryLabel===this.state.articleCategory);
            article.articleCategory = Object.assign({},articleCategoryArray);
            const errors = this.validationArticleForm(article);
            
            this.setState({
                ...this.state,
                validationErrorMsg:errors
            })
             //if (errors) return;
           
            const response = await axios({
                method: 'post',
                withCredentials:'true',
                url: 'http://localhost:8080/addArticle',
                data: {
                     articleName : this.state.articleName,
                     articleBrand : this.state.articleBrand,
                     articleDescription : this.state.articleDescription,
                     articleDateAvailibility : this.state.articleDateAvailibility,
                     articleAddedDate: actualDate,
                     articlePlateforme : this.state.articlePlateforme,
                     articleCategory : article.articleCategory[0],
                     articleDematerialized : this.state.articleDematerialized,
                     articlePricePromo : this.state.articlePricePromo,
                     articlePrice : this.state.articlePrice,
                     articleQty : this.state.articleQty,
                     articlePromoBegDate : this.state.articlePromoBegDate,
                     articleDatePromoEnd : this.state.articleDatePromoEnd,
                     artListImg:this.state.pictures.name,
                     user:this.state.user
                }
            });
            //console.log(response);
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
                console.log("picture",this.state.pictures);
                this.setState({
                    pictures: [...this.state.pictures,picture],
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
                .catch(function(error){
                    console.log(error.message);
                })

        }
        componentDidMount() {
            window.scrollTo(0, 0);
            this.fetchCategories();
            this.fetchUser(this.state.uid);
        }
      render(){
          console.log("user",this.state.user);
          console.log("uid",this.state.uid);
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
                                                            <Input type="text" name="articleName" onFocus={this.onFocus} onBlur={e=>this.onBlurHandler(e.target)} value={this.state.articleName} onChange={e=>this.onChangeHandler(e.target)} className="form-control product_title" placeholder="Product Name"  />
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articleName && <p className="error-text">{this.state.validationErrorMsg.articleName}</p>}
                                                        <FormGroup className="edit-icon">
                                                            <Input type="text" value={this.state.articlePrice} name="articlePrice" onChange={e=>this.onChangeHandler(e.target)} className="form-control price" placeholder="Article Price"  />
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articlePrice && <p className="error-text">{this.state.validationErrorMsg.articlePrice}</p>}
                                                        <FormGroup className="edit-icon">
                                                            <Input  type="textarea" value={this.state.articleDescription} name="articleDescription" onChange={e=>this.onChangeHandler(e.target)} className="form-control" rows="3" placeholder="Article Description" />
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articleDescription && <p className="error-text">{this.state.validationErrorMsg.articleDescription}</p>}
                                                        <Label className="title">Plateform</Label>
                                                        <FormGroup>
                                                            {productdata.plateform.map((p) =>
                                                                <Label>
                                                                    <Input  name="articlePlateforme" value={p} onChange={e=>this.onChangeHandler(e.target)} type="radio"/>{' '}
                                                                    {p}
                                                                </Label>
                                                            )}
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articlePlateforme && <p className="error-text">{this.state.validationErrorMsg.articlePlateforme}</p>}
                                                        <Label className="title">Dematerialized</Label>
                                                         <FormGroup>
                                                            {productdata.dematerialized.map((d) =>
                                                                    <Label>
                                                                    <Input name="articleDematerialized" value={d} onChange={e=>this.onChangeHandler(e.target)} type="radio"/>{' '}
                                                                    {d}
                                                                    </Label>
                                                                )}                                                        
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articleDematerialized && <p className="error-text">{this.state.validationErrorMsg.articleDematerialized}</p>} 
                                                         <FormGroup>
                                                        <Label className="title pl-0">Brand</Label>
                                                        <Input type="text" name="articleBrand" value={this.state.articleBrand} onChange={e=>this.onChangeHandler(e.target)} class="form-control" placeholder="Article Brand" />
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articleBrand && <p className="error-text">{this.state.validationErrorMsg.articleBrand}</p>}
                                                        <Label className="title mb-2">Categories</Label>
                                                        <FormGroup>
                                                            {this.state.categories.map((cat) =>
                                                            <Label>
                                                            <Input name="articleCategory" value={cat.categoryLabel} onChange={e=>this.onChangeHandler(e.target)} type="radio"/>
                                                            {cat.categoryLabel}
                                                            </Label>
                                                            )}
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articleCategory && <p className="error-text">{this.state.validationErrorMsg.articleCategory}</p>}
                                                        <Label className="title mb-2">Availibility Date</Label>
                                                        <FormGroup>
                                                            {/* <Moment name="articleDateAvailibility" value={this.state.articleDateAvailibility} onChange={e=>this.onChangeHandler(e.target)}/> */}
                                                            <Input type="date" name="articleDateAvailibility" value={this.state.articleDateAvailibility} onChange={e=>this.onChangeHandler(e.target)}></Input>
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articleDateAvailibility && <p className="error-text">{this.state.validationErrorMsg.articleDateAvailibility}</p>}
                                                        <Label className="title mb-2">Article Promotion Beginning Date</Label>
                                                        <FormGroup>
                                                            <Input type="date" name="articlePromoBegDate" value={this.state.articlePromoBegDate} onChange={e=>this.onChangeHandler(e.target)}></Input>
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articlePromoBegDate && <p className="error-text">{this.state.validationErrorMsg.articlePromoBegDate}</p>}
                                                        <Label className="title mb-2">Article Promotion Ending Date</Label>
                                                        <FormGroup>
                                                            <Input type="date" name="articleDatePromoEnd" value={this.state.articleDatePromoEnd} onChange={e=>this.onChangeHandler(e.target)}></Input>
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articleDatePromoEnd && <p className="error-text">{this.state.validationErrorMsg.articleDatePromoEnd}</p>}
                                                        <Label className="title mb-2">Promotion Price</Label>
                                                        <FormGroup>
                                                            <Input type="text" name="articlePricePromo" value={this.state.articlePricePromo} onChange={e=>this.onChangeHandler(e.target)} className="form-control" placeholder="Promotion Price" ></Input>
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articlePricePromo && <p className="error-text">{this.state.validationErrorMsg.articlePricePromo}</p>}
                                                        <FormGroup>
                                                        <Label className="title pl-0">Product Stock</Label>
                                                        <input type="text" name="articleQty" value={this.state.articleQty} onChange={e=>this.onChangeHandler(e.target)} class="form-control" placeholder="Article Stock"></input>
                                                        </FormGroup>
                                                        {this.state.validationErrorMsg.articleQty && <p className="error-text">{this.state.validationErrorMsg.articleQty}</p>}
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
// export default Productadd;

const mapStateToProps = state => ({
    uid: state.login.uid
  });
export default connect(mapStateToProps)(Productadd);
