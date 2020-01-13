/*
* Admin Site Product Edit Page
*/
import React , {Component} from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Row, FormGroup, Label, Input } from 'reactstrap';
import ImageUploader from 'react-images-upload';
import axios from 'axios';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
const productslider = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

class ProductEditDetail extends Component {

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
        validationErrorMsg:""
        };
        this.fetchCategories = this.fetchCategories.bind(this);
      }

    state1 = {
        newImage: 'product-01.jpg'
     }

     componentDidMount() {
        this.setState({
           newImage: 'product-01.jpg'
        });
        this.fetchCategories();
     }

    //function for preview images
    changePreviewImage(image) {
        this.setState({
           newImage: image
        });
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

    ImageChange(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
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

    onClickSaveBtn  = async (event) =>{
        // const date = new Date();
        // const day = ('0'+date.getDate()).slice(-2);
        // const year = date.getFullYear();
        // const month = ('0'+date.getMonth()+1).slice(-2);
        // const actualDate = year+"-"+month+"-"+day;
        event.preventDefault();
        const article ={};
        article.articleName = this.state.articleName;
        article.articleBrand = this.state.articleBrand;
        article.articleDescription = this.state.articleDescription;
        article.articleDateAvailibility = this.state.articleDateAvailibility;
        // article.articleAddedDate = actualDate;
        article.articlePlateforme = this.state.articlePlateforme;
        article.articleCategory = this.state.articleCategory;
        article.articleDematerialized = this.state.articleDematerialized;
        article.articlePricePromo = this.state.articlePricePromo;
        article.articlePrice = this.state.articlePrice;
        article.articleQty = this.state.articleQty;
        article.articlePromoBegDate = this.state.articlePromoBegDate;
        article.articleDatePromoEnd = this.state.articleDatePromoEnd;

        console.log("articleUp",article);
        // article.artListImg = this.state.pictures;
        // console.log("article.artListImg",article.artListImg);
        const articleCategoryArray = this.state.categories.filter(c=>c.categoryLabel===this.state.articleCategory);
         article.articleCategory = Object.assign({},articleCategoryArray);
         const errors = this.validationArticleForm(article);
        
        this.setState({
            ...this.state,
             validationErrorMsg:errors
        })
        console.log("errors",errors);
         if (errors) return;
         
        console.log("pictures",this.state.pictures);
        const response = await axios({
            method: 'post',
            withCredentials:'true',
            url: 'http://localhost:8080/updateArticle/'+this.props.product.id,
            data: {
                 articleName : this.state.articleName,
                 articleBrand : this.state.articleBrand,
                 articleDescription : this.state.articleDescription,
                 articleDateAvailibility : this.state.articleDateAvailibility,
                 articlePlateforme : this.state.articlePlateforme,
                 articleCategory : article.articleCategory[0],
                 articleDematerialized : this.state.articleDematerialized,
                 articlePricePromo : this.state.articlePricePromo,
                 articlePrice : this.state.articlePrice,
                 articleQty : this.state.articleQty,
                articlePromoBegDate : this.state.articlePromoBegDate,
                articleDatePromoEnd : this.state.articleDatePromoEnd,
                // artListImg:this.state.pictures.name
            }
        });
        console.log(response);
    }
    render() {
        const { photoIndex, isOpen } = this.state;
        const {product} = this.props;
        console.log("product",product);
        const images=[];
        {product.pictures.map((pic)=>
            images.push(require(`../../assets/images/${pic}`))
        )}
        return (
            <section>
                <div className="product-content-top single-product single-product-edit">
                    <Row>
                        <div className="product-top-left col-xl-5 col-md-6">
                            <div className="product-top-left-inner">
                                <div className="ciyashop-product-images">
                                <div className="ciyashop-product-images-wrapper ciyashop-gallery-style-default ciyashop-gallery-thumb_position-bottom ciyashop-gallery-thumb_vh-horizontal">
                                    <div className="ciyashop-product-gallery ciyashop-product-gallery--with-images slick-carousel">
                                    <Slider {...settings} className="ciyashop-product-gallery__wrapper popup-gallery">
                                        <div className="ciyashop-product-gallery__image">
                                                <img src={require(`../../assets/images/${product.pictures[0]}`)}  className="img-fluid" />
                                        </div>
                                    </Slider>
                                    <div className="ciyashop-product-gallery_buttons_wrapper">
                                        <div className="ciyashop-product-gallery_button ciyashop-product-gallery_button-zoom popup-gallery" onClick={() => this.setState({ isOpen: true })} >
                                        <Link to="#" className="ciyashop-product-gallery_button-link-zoom">
                                            <i className="fa fa-arrows-alt" />
                                        </Link>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="ciyashop-product-thumbnails">
                                        <Slider {...productslider} className="ciyashop-product-thumbnails__wrapper">
                                            {product.pictures.map((pictureimage,index) =>
                                                <div key={index}>
                                                    <div className="ciyashop-product-thumbnail__image">
                                                        <a href="javascript:void(0)">
                                                            <img src={require(`../../assets/images/${pictureimage}`)}  className="img-fluid" />
                                                        </a>
                                                        <div className="d-flex justify-content-center image-content align-items-center">
                                                            <ImageUploader
                                                                buttonText=""
                                                                onChange={() => this.ImageChange()}
                                                                withPreview
                                                                withIcon={false}
                                                                maxFileSize={5242880}
                                                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
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
                                            <Input type="text" name="articleName" value={this.state.articleName}  onChange={e=>this.onChangeHandler(e.target)} className="form-control product_title" placeholder={product.name}  />
                                        </FormGroup>
                                        <FormGroup className="edit-icon">
                                            <Input type="text" className="form-control price"value={this.state.articlePrice} name="articlePrice" onChange={e=>this.onChangeHandler(e.target)} placeholder={product.salePrice} />
                                        </FormGroup>
                                        <Label className="title">Description</Label>
                                        <FormGroup className="edit-icon">
                                            <Input  type="textarea" className="form-control"value={this.state.articleDescription} name="articleDescription"  onChange={e=>this.onChangeHandler(e.target)} rows="3" placeholder={product.description}  />
                                        </FormGroup>
                                        <Label className="title">Plateforme</Label>
                                        <FormGroup>
                                        {productdata.plateform.map((p) =>
                                            <Label>
                                                <Input  name="articlePlateforme" defaultValue={ product.plateforme}  value={p} onChange={e=>this.onChangeHandler(e.target)} type="radio"/>{' '}
                                                {p}
                                            </Label>
                                        )}
                                         </FormGroup>
                                         <Label className="title">Dematerialized</Label>
                                        <FormGroup>
                                        {productdata.dematerialized.map((d) =>
                                                <Label>
                                                <Input name="articleDematerialized" value={d} onChange={e=>this.onChangeHandler(e.target)} type="radio"/>{' '}
                                                {d}
                                                </Label>
                                            )}                                                        
                                    </FormGroup>
                                        {/*<Label className="title">Size</Label>
                                         <FormGroup>
                                            {product.size.map((size) =>
                                                <Label>
                                                    <Input type="checkbox"/>{' '}
                                                    {size}
                                                </Label>
                                            )}
                                        </FormGroup> */}
                                        {/* <Label className="title">Color</Label>
                                        <FormGroup>
                                            {product.colors.map((color) =>
                                                <Label>
                                                    <Input type="checkbox"/>{' '}
                                                    {color}
                                                </Label>
                                            )}
                                        </FormGroup> */}
                                        <Label className="title">Category</Label>
                                        <FormGroup>
                                            {this.state.categories.map((cat) =>
                                            <Label>
                                            <Input name="articleCategory"  value={cat.categoryLabel} onChange={e=>this.onChangeHandler(e.target)} type="radio"/>
                                            {cat.categoryLabel}
                                            </Label>
                                            )}
                                        </FormGroup>
                                        <Label className="title">Brand</Label>
                                        <FormGroup>
                                            <Input type="text" name="articleBrand"  onChange={e=>this.onChangeHandler(e.target)} class="form-control" placeholder="Article Brand" />
                                        </FormGroup>
                                        <Label className="title mb-2">Availibility Date</Label>
                                                        <FormGroup>
                                                            {/* <Moment name="articleDateAvailibility" value={this.state.articleDateAvailibility} onChange={e=>this.onChangeHandler(e.target)}/> */}
                                                            <Input type="date" name="articleDateAvailibility" value={this.state.articleDateAvailibility}  onChange={e=>this.onChangeHandler(e.target)}></Input>
                                                        </FormGroup>
                                                        
                                                        <Label className="title mb-2">Article Promotion Beginning Date</Label>
                                                        <FormGroup>
                                                            <Input type="date" name="articlePromoBegDate" onBlur={e=>this.onBlurHandler(e.target)} onChange={e=>this.onChangeHandler(e.target)}></Input>
                                                        </FormGroup>
                                                       
                                                        <Label className="title mb-2">Article Promotion Ending Date</Label>
                                                        <FormGroup>
                                                            <Input type="date" name="articleDatePromoEnd" onChange={e=>this.onChangeHandler(e.target)}></Input>
                                                        </FormGroup>
                                                        <Label className="title mb-2">Promotion Price</Label>
                                                        <FormGroup>
                                                            <Input type="text" name="articlePricePromo" onChange={e=>this.onChangeHandler(e.target)} className="form-control" placeholder={"Promotion Price"} ></Input>
                                                        </FormGroup>

                                        {/* <Label className="title">Total Products</Label>
                                        <input type="text" className="form-control" placeholder="Total Product" defaultValue={product.stock}></input> */}

                                        <Label className="title">Product Stock</Label>
                                        <input type="text" class="form-control" name="articleQty" value={this.state.articleQty} onChange={e=>this.onChangeHandler(e.target)} placeholder={product.stock}></input>

                                        <a href="#" class="btn btn-primary mb-2 mr-2"  onClick={this.onClickSaveBtn}> Update </a>
                                        <Link to="/admin-panel/Product" class="btn btn-danger mb-2"> Cancel </Link>
                                    </div>
                                </div>
                        </div>
                    </Row>
                    </div>



                    <div>


                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                                }
                                onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length,
                                })
                                }
                            />
                        )}
                    </div>

        </section>




        )
    }
}
export default ProductEditDetail;

