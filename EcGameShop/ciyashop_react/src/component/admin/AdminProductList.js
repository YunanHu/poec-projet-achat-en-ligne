/**
 *  Admin Site Product Listing Page
 */
import React, { Component } from 'react';
import { Row, Col,Container } from 'reactstrap';
import AdminproductList from '../../widgets/AdminProduct';
import productdata from '../../api/product';
import Pagination from '../../services/Pagination';
import {getFilterProductsdata} from '../../services';
import { connect } from 'react-redux';



const traitementArticle = (result) =>{ 
    const artProductsArray = [];
    console.log("result22",result);
    for (let article of result) {
        const pictArray = [];
        for (let pict in article.artListImg) {
            pictArray.push("imagesEcGame/"+article.artListImg[pict].name);
            
        }
        artProductsArray.push({
            id:article.idArticle,
            name:article.articleName,
            pictures:pictArray,
            stock:article.articleQty,
            discount:0,
            salePrice:article.articlePrice,
            description:article.articleDescription,
            rating:2,
            category:article.articleCategory.categoryLabel,
            tags:[article.articleCategory.categoryLabel],
            size: ["100 CM", 
                "90 CM", 
                "95 CM"],
            colors: ["black", 
                "gray",
                "red"]
        });
    }
    return artProductsArray;
  }

class AdminProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            productsearch:'',
            productList:this.props.products,
            currentProduct: [],
            currentPage: null,
            totalPages: null,
            cp_productList:productdata,
            IsDeleteProcess:false,
            uid:this.props.uid,
            user:[]
        }
        this.fechArticlesByUser = this.fechArticlesByUser.bind(this);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        console.log("uid",this.state.uid);
        const u = this.fechArticlesByUser(this.state.uid);
        console.log("articlesByUser",u);
    }
    onProductSearch(searchproduct)
    {
        if(searchproduct === '')
        {
            var curr_products = this.state.cp_productList.slice((this.state.currentPage - 1) * 12, ((this.state.currentPage - 1) * 12) + 12);
            this.setState({
                ...this.state,
                 productsearch:searchproduct,
                 productList:this.state.cp_productList,
                 currentProduct:curr_products,
                 totalRecords:this.state.cp_productList.length,
                 IsDeleteProcess:true,
            })
            this.state.currentProduct = curr_products;
            this.forceUpdate();
            this.render();

        }
        else
        {
           let serachdata=this.state.cp_productList.filter((productname)=>{
                if(searchproduct === searchproduct.toLowerCase())
                {
                    let product=productname.name.toLowerCase().indexOf(searchproduct.toLowerCase()) > -1
                    return(
                        product
                    )
                }
                else
                {
                    let product=productname.name.toUpperCase().indexOf(searchproduct.toUpperCase()) > -1
                    return(
                        product
                    )
                }

            })
           var curr_products = null;
            if(serachdata.length > 12)
            {
                curr_products= serachdata.slice(0,12);
            }
            else {
                 curr_products= serachdata;
            }

            this.setState({
                ...this.state,
                 productsearch:searchproduct,
                 productList:serachdata,
                 currentProduct:curr_products,
                 totalRecords:searchproduct.length,
                 IsDeleteProcess:false
            })
            this.state.currentProduct = curr_products;
            this.forceUpdate();
            this.render();
        }
    }


    fechArticlesByUser(uid){
        fetch("http://localhost:8080/getArticleByUser/"+uid,
        {
            method:"get",
            credentials:"include"
        }).then(response=>response.json())
        .then(result=>
            this.setState({
                ...this.state,
                productList:traitementArticle(result)
                

            }))
            .catch(function(error){
                console.log(error.message);
            })
    }

    onPageChanged = data => {
        const { productList } = this.state;
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentProduct = productList.slice(offset, offset + pageLimit);
        this.setState({
                ...this.state,
                currentPage:currentPage,
                currentProduct:currentProduct,
                totalPages:totalPages
        });
      };


    onDeleteProduct(productdata){
        if(productdata)
        {
            let deletedproduct=productdata;
            let newproduct=this.state.productList.filter((CurrentProductList)=>CurrentProductList.id !== deletedproduct.id);
            let curr_products=newproduct.filter((CurrentProductList)=>CurrentProductList.id !== deletedproduct.id);
            curr_products = curr_products.slice((this.state.currentPage - 1) * 12, ((this.state.currentPage - 1) * 12) + 12);
            let tpg = newproduct.length/12;

            this.setState({
                ...this.state,
                productList:newproduct,
                currentProduct: curr_products,
                totalRecords:newproduct.length,
                totalPages:tpg,
                IsDeleteProcess:true
            })
        }
    }
    render() {
        console.log("this.state.productList",this.state.productList)
        return (
            <div>
                <div className="section-ptb">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-0">
                                    <h4>Product List</h4>
                                </div>
                                {/* <div className="mb-4">
                                    <form>
                                        <div class="form-group mb-0">
                                            <input type="text" class="form-control" placeholder="Search product" value={this.state.productsearch} onChange={(e)=>{this.onProductSearch(e.target.value)}}></input>
                                        </div>
                                    </form>
                                </div> */}

                                <div className="mb-0 mb-md-4">
                                    {this.state.currentProduct.length > 0 ?
                                        <Row className="products products-loop grid ciyashop-products-shortcode pgs-product-list">
                                                {/* {this.state.currentProduct.map((product, index) => */}
                                                {this.state.productList.map((product, index) =>
                                                            <AdminproductList product={product} key={index} deleteproduct={()=>this.onDeleteProduct(product)} />
                                                    )
                                                }
                                            </Row>
                                        :
                                            <Row className="products products-loop grid ciyashop-products-shortcode">
                                                <div className="col-sm-12 text-center  mt-4 mt-md-5" >
                                                    <img src={require(`../../assets/images/empty-search.jpg`)} className="img-fluid mb-4" />
                                                    <h3>Sorry! No products were found matching your selection!    </h3>
                                                    <p>Please try to other words.</p>
                                                </div>
                                            </Row>
                                        }
                                </div>
                                <div className="row mt-md-3">
                                <div className="col-12">
                                {this.state.productList.length > 12 ?
                                        <div>
                                         <Pagination
                                            totalRecords={this.state.productList.length}
                                            pageLimit={12}
                                            onPageChanged={this.onPageChanged}
                                            IsDeleteProcess={this.state.IsDeleteProcess}
                                        />
                                        </div>
                                        :
                                        <div style={{display:'none'}}>
                                            <Pagination
                                            totalRecords={this.state.productList.length}
                                            pageLimit={12}
                                            onPageChanged={this.onPageChanged}
                                            IsDeleteProcess={this.state.IsDeleteProcess}
                                            />
                                        </div>
                                }
                                </div>
                                </div>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//       uid: state.login.uid,
//     }
//   }

const mapStateToProps = state => ({
    products: getFilterProductsdata(state.data, state.filters),
    uid: state.login.uid
  });
export default connect(mapStateToProps)(AdminProduct);
// export default connect(mapDispatchToProps, {})(ShopPage);
