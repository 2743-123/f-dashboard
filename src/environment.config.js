const ENV = "local";

const ENVIRONMENT_LOCAL = {
    BASE_API_URL : "",
};

const ENVIRONMENT_PRODUCTION = {
    BASE_API_URL : "",
};

const ENVIRONMENT_DEVLOPMENT = {
    BASE_API_URL : "",
};

let ENVIRONMENT_VARIABLES;

if (ENV === "local"){
    ENVIRONMENT_VARIABLES = ENVIRONMENT_LOCAL;
}else if (ENV === "devlopment"){
ENVIRONMENT_VARIABLES = ENVIRONMENT_DEVLOPMENT;
}else{
    ENVIRONMENT_VARIABLES= ENVIRONMENT_PRODUCTION
};

export default ENVIRONMENT_VARIABLES;