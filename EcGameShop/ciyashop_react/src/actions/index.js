import ProductsList from '../api/product.json';
// action creator qui nous permet de faire de l'asynchrone
export const fetchProducts = (product, times) => (
    fetch("http://localhost:8080/getAllArticles", {
      method: "get",
      credentials: "include"
    })
      .then(response => response.json())
      .then(result =>{
          setTimeout(() => product(traitementArticle(result)), times || 150);
      }
      )
      .catch(function(error){
        console.log("Il y a eu une erreur dans le fetch: "+error.message);
      })
)


const traitementArticle = (result) =>{ 
    console.log("result",result);
    const artProductsArray = [];
    
    for (let article of result) {

        // artProduct.add(objArticles[x].idArticle,objArticles[x].articleName);
        const pictArray = [];
        // const category = [];
        // for (let cat in result[x].articleCategory) {
        //     category.push(result[x].articleCategory.categoryLabel);
        // }
        // console.log("category",category);
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
    console.log("artProductsArray",artProductsArray);
    return artProductsArray;
  }
// export const  fetchProducts = (product, times) => (
//      setTimeout(() => product(ProductsList), times || 150)
// )

export const ProductsData = () => dispatch => {
    dispatch({
        type: "GET_PRODUCTS_VALUE"
    });
    fetchProducts(products => {
        dispatch({
            type: "ACTUAL_PRODUCTS",
            products
        });
        return products;
    })

}