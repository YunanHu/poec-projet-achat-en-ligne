
/**
 *  Shop Main Page
 */
import React , {Component} from 'react';
import SideFilter from '../../widgets/shopfilter/SideFilter';
import SocialFilter from '../../widgets/shopfilter/SocialInfo';
import ShopBanner from '../../widgets/shopfilter/ShopBanner';
import { Link } from 'react-router-dom';
import { Row, Col,Container,Form,Nav } from 'reactstrap';
import AllProduct from '../../api/product';
import ProductList from '../../widgets/ProductList';
import {getFilterProductsdata} from '../../services';
import { connect } from 'react-redux';
import TopFilter from '../../widgets/shopfilter/TopFilter';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetch from '../../hook/useFetch'

// const shopitemslider = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//     {
//       breakpoint: 991,
//       settings: {
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 575,
//       settings: {
//         slidesToShow: 1
//     }
//     }
//   ]

// };
class ShopPage extends Component {

    

    constructor(props, context) {
        super(props, context)
        this.state = {
          limit: 5,
          hasMoreProduct: true,
          getproduct:AllProduct,
          articles:[]
        }
        this.fetchArticles = this.fetchArticles.bind(this);

    }
    componentWillMount(){
        if (this.state.limit < this.state.getproduct.length) {
            setTimeout(() => {
                this.setState({
                    limit: this.state.limit + 5
                });
            }, 2500);
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.fetchArticles();
    }
    componentDidUpdate(prevProps)
    {
        if (this.state.limit < prevProps.products.length) {
            setTimeout(() => {
                this.setState({
                    limit: this.state.limit + 5
                });
            }, 2500);
        }
    }

    
    fetchArticles() {
        
        // if (this.state.limit >= this.props.products.length) {
        //     this.setState({ hasMoreProduct: false });
        //     return;
        // }
        // setTimeout(() => {
        //     this.setState({
        //         limit: this.state.limit + 5
        //     });
        // }, 2500);
        fetch("http://localhost:8080/getAllArticles",
        {
            method:"get",
            credentials:"include"
        }).then(response=>response.json())
        .then(result=>
            this.setState({
                ...this.state,
                articles:result
            })
            )
            
            
    }
    render() {
        console.log("articlesIndex",this.state.articles);
        // let {products} = this.props;
        let products = this.state.articles;
        //let test = products.length;
        //console.log("test",test);
        let layoutstyle=localStorage.getItem('setLayoutStyle')

        if(layoutstyle == null)
        {
            layoutstyle=localStorage.setItem('setLayoutStyle','col-sm-6 col-md-4')
        }

     return (
            // <div>
            //     {/* <button>Get users</button> */}
            //     {loading && <p>Loading...</p>}
            //     {error && <p>Oops, une erreur est survenue :(</p>}
            //     {data ? data.map(user => <p key={user.id}>{user.email}</p>) : null}
            // </div>
            <div className="site-content">
                <div className="inner-intro">
                <Container>
                    <Row className="intro-title align-items-center">
                        <Col md={6} className="text-left">
                            <div className="intro-title-inner">
                            <h1>Shop</h1>
                            </div>
                        </Col>
                        <Col md={6}  className="text-right">
                            <ul className="ciyashop_breadcrumbs page-breadcrumb breadcrumbs">
                            <li className="home">
                                <span>
                                <Link className="bread-link bread-home" to="/">Home</Link>
                                </span>
                            </li>
                            <li><span>Articles</span></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                </div>
                <div className="content-wrapper section-pt mb-3 mb-md-5">
                  <Container>
                        <Row>
                        <div className="sidebar col-xl-3 col-lg-4 desktop">
                                <div className="shop-sidebar-widgets">
                                    <SideFilter />
                                    {/* <SocialFilter />
                                    <ShopBanner /> */}
                                </div>
                            </div>
                            <div className="content col-xl-9 col-lg-8">
                                <div className="products-header">
                                    {/* <div className="right-banner">
                                        <img alt="Shop Banner" src={require(`../../assets/images/shop/shop-banner.jpg`)}  className="img-fluid" />
                                    </div> */}
                                    <div className="loop-header">
                                        <div className="loop-header-tools">
                                            <div className="loop-header-tools-wrapper">
                                                {/* <TopFilter productlength={products.length}  /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {products.length > 0 ?
                                    <InfiniteScroll
                                        dataLength={this.state.limit}
                                        next={this.fetchProduct}
                                        hasMore={this.state.hasMoreProduct}
                                        loader={<div className="lazyload-img"></div>}
                                    >
                                        <Row className="products products-loop grid ciyashop-products-shortcode pgs-product-list">
                                            {products.slice(0,this.state.limit).map((product, index) =>
                                                        <ProductList article={product} key={index} layoutstyle={layoutstyle} />
                                                )
                                            }
                                        </Row>
                                    </InfiniteScroll>
                                :
                                      <Row className="products products-loop grid ciyashop-products-shortcode">
                                        <div className="col-sm-12 text-center  mt-5" >
                                            <img src={require(`../../assets/images/empty-search.jpg`)} className="img-fluid mb-4" />
                                            <h3>Sorry! No products were found matching your selection!    </h3>
                                            <p>Please try to other words.</p>
                                             <Link to="/shop" className="btn btn-solid">Continue Shopping</Link>
                                        </div>
                                      </Row>
                                }
                            </div>

                        </Row>
                  </Container>
                </div>
        </div>
      )
    }
}
const mapDispatchToProps  = (state) => ({
    products: getFilterProductsdata(state.data, state.filters)
})
export default connect(
    mapDispatchToProps , {}
)(ShopPage)
