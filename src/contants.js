const DEVELOPMENT_URL = "http://localhost:5454";
const PRODUCTION_URL = "https://zomato-backe.herokuapp.com";
  

if (process.env.NODE_ENV==='development') {
    exports.API_URL = DEVELOPMENT_URL;
}  else {
    exports.API_URL = PRODUCTION_URL;
}

