/* Invoice Bill Json */
export default [
{
    "siteUrl" : "http://localhost:8080/",
    "profile":
        {
            "firstname":"Alice",
            "lastname":"Williams",
            "gender":"Male", // to delete
            "dob":"2019-07-03", // to delete
            "phoneno":"1266322345",
            "email":"support@ciyashop.com",
            "address":"1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104",  // to delete
            "companyname" : "Ciya Shop",  // to delete
            "address":"4402 Worthington Drive",  // to delete
            "streetno":"Richardson",  // to delete
            "state":"Near Sherwood Mall",  // to delete
            "zipcode":"361046",  // to delete
            "country":"US",  // to delete
            "phone":"5685486123"  // to delete
        }
    ,
    "billingaddress":
        {
            "billingname":"Ciyashop",
            "address":"4402 Worthington Drive",
            "streetno":"Richardson",
            "state":"Near Sherwood Mall",
            "zipcode":"361046",
            "country":"USA"
        }
    ,
    "shippingaddress":
        {   
            "shippingname":"Ciyashop",
            "address":"4402 Worthington Drive",
            "streetno":"Richardson",
            "state":"Near Sherwood Mall",
            "zipcode":"361046",
            "country":"UK"
        }
    ,
    "carddetail": // to desactif SavedCards, SavedCardsadd and SavedCardsedit components
        {
            "cardno": "8888-8888-8888-8888",
            "cardname":"Visa - Credit Card",
            "cvv":"001",
            "month":"12",
            "year":"2025"
            
        }
    
    }
]