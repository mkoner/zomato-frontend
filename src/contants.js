const DEVELOPMENT_URL = "http://localhost:5454";
const PRODUCTION_URL = "https://my-zomato-like-backend.herokuapp.com/";
  

if (process.env.NODE_ENV==='development') {
    exports.API_URL = DEVELOPMENT_URL;
}  else {
    exports.API_URL = PRODUCTION_URL;
}

