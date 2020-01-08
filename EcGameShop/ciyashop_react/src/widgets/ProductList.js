
/**
 * ProductList Widget
 */
import React , {Component} from 'react';
import Slider from "react-slick";
import { Row, Col, Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import { ToastContainer,toast  } from 'react-toastify';


class ProductList extends Component {
    constructor(props){
        super(props);
        this.AddToCart = this.AddToCart.bind(this);
        this.AddToWishList = this.AddToWishList.bind(this);

        this.state = {
            open: false,
            stock: 'InStock',
            quantity: 1,
            image: ''
        }
    }


    AddToCart(ProductID,ProductName,ProductImage,Qty,Rate,StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if(Cart == null)
           Cart = new Array();
        let selectedProduct = Cart.find(product => product.ProductName === ProductName);
        if(selectedProduct == null)
        {

           Cart.push({ProductID:ProductID,ProductName:ProductName,ProductImage:ProductImage,Qty:Qty,Rate:Rate,StockStatus:StockStatus});
           localStorage.removeItem("LocalCartItems");
           localStorage.setItem("LocalCartItems",JSON.stringify(Cart));

           toast.success("Item Added to Cart");
        }
        else {
           toast.warning("Item is already in Cart");
        }
     }


     AddToWishList(ProductID,ProductName,ProductImage,Qty,Rate,StockStatus) {
        var Cart = JSON.parse(localStorage.getItem("LocalWishListItems"));
        if(Cart == null)
           Cart = new Array();

           let selectedProduct = Cart.find(product => product.ProductName === ProductName);
           if(selectedProduct == null)
           {

              Cart.push({ProductID:ProductID,ProductName:ProductName,ProductImage:ProductImage,Qty:Qty,Rate:Rate,StockStatus:StockStatus});
              localStorage.removeItem("LocalWishListItems");
              localStorage.setItem("LocalWishListItems",JSON.stringify(Cart));

              toast.success("Item Added to WishList");
           }
           else {
              toast.warning("Item is already in WishList");
           }


     }
     CheckCardItem(ID)
    {
        let checkcart=false;
        var Cart = JSON.parse(localStorage.getItem("LocalCartItems"));
        if(Cart && Cart.length > 0) {
            for (const cartItem of Cart) {
                if (cartItem.ProductID === ID) {
                    checkcart = true
                }
            }
        }
        return checkcart;
    }
    CheckWishList(ID)
    {
    let wishlist=false;
    var Wish = JSON.parse(localStorage.getItem("LocalWishListItems"));

    if(Wish && Wish.length > 0) {
        for (const wishItem of Wish) {
            if (wishItem.ProductID === ID) {
                wishlist = true
            }
        }
    }
    return wishlist;
    }
    render() {
    const articles = this.props.article;
    //const artListImg = articles.artListImg.map(img=>img.name);
    //const artCateg = articles.map(art=>art.articleCategory.categoryLabel);
    console.log("articlestest",articles.artListImg[0].name);
    let rat=[];
    let i = 1;
    // while (i <= 5) {
    //     if(i<=rating)
    //     {
    //         rat.push(<i className="fa fa-star" />);
    //     }
    //     else
    //     {
    //         rat.push(<i className="fa fa-star-o" />);
    //     }
    //     i += 1;
    // };
    return (
             <div key={1} className={this.props.layoutstyle}>
                    <ToastContainer autoClose={1000} />
                     <div className="product product_tag-black product-hover-style-default product-hover-button-style-light product_title_type-single_line product_icon_type-line-icon">
                        <div className="product-inner element-hovered">
                        <div className="product-thumbnail">
                            <div className="product-thumbnail-inner">
                                <Link to={`/shop/${articles.articleCategory}/${articles.articleId}`}>
                                    {articles.artListImg[0] ?
                                        <div className="product-thumbnail-main">
                                            <img src={require(`../assets/images/imagesEcGame/${articles.artListImg[0].name}`)} className="img-fluid" />
                                        </div>
                                    :
                                        null
                                    }
                                    {articles.artListImg[1]  ?
                                        <div className="product-thumbnail-swap">
                                                <img src={require(`../assets/images/imagesEcGame/${articles.artListImg[1].name}`)} className="img-fluid" />
                                        </div>
                                        :
                                        null
                                    }
                                </Link>
                            </div>

                            <div className="product-actions">
                            <div className="product-actions-inner">
                                <div className="product-action product-action-add-to-cart">
                                 {/* {!this.CheckCardItem(articles.articleId) ?
                                       <Link onClick={() => this.AddToCart(articles.articleId,articles.articleName, articles.pictures[0], 1, articles.articlePrice, "In Stock")} className="button add_to_cart_button" rel="nofollow">Add to
                                       cart</Link>
                                 :
                                       <Link  to="/ShopingCart"  className="button add_to_cart_button" rel="nofollow">View Cart</Link>
                                 } */}
                                </div>
                                {/* <div className="product-action product-action-wishlist">
                                    {!this.CheckWishList(product.id) ?
                                        <Link onClick={()=>this.AddToWishList(product.id,product.name,product.pictures[0],1,product.salePrice,"In Stock")} className="add_to_wishlist" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top"> Add to
                                    Wishlist</Link>
                                    :
                                        <Link to="/wishlist" className="add_to_wishlist_fill" data-toggle="tooltip" data-original-title="Wishlist" data-placement="top">View Wishlist</Link>
                                    }
                                </div> */}
                            </div>
                            </div>
                        </div>
                        <div className="product-info">
                            {/* {product.tags ?
                                   <span className="ciyashop-product-category">
                                    {product.tags.map((tag,index) =>
                                          <span>{tag}{index === product.tags.length-1 ?'':','}</span>
                                     )}
                                </span>
                            : null }  */}
                            <span className="ciyashop-product-category">
                                {/* <span>{articles.articleCategory}</span> */}
                            </span>
                            {/* {articles.ArticleName ?
                            <h3 className="product-name">
                                <Link to={`/shop/${articles.articleCategory.categoryLabel}/${articles.idArticle}`}>
                                    {articles.articleName}
                                </Link>
                            </h3>
                            : null } */}
                            <div className="product-rating-price">
                            {/* {articles.articlePrice ?
                                <span className="price">
                                <ins>
                                    <span className="price-amount amount">
                                    <span className="currency-symbol">$</span>{articles.articlePrice}
                                    </span>
                                </ins>
                                </span>
                            : null } */}
                            {/* <div className="product-rating">{rat}</div> */}
                            </div>
                            {/* {articles.articleDescription ?
                            <div className="product-details__short-description">
                            <p>{articles.articleDescription}
                            </p>
                            </div>
                            : null } */}
                        </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default ProductList;
