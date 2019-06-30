// @media (max-width: 575.98px){...}
// @media (max-width: 767.98px){...}
// @media (max-width: 991.98px){...}
// @media (max-width: 1199.98px){...}

export default {

  //for this size and below use when first mobile first ui 
  up(){

  }
  ,
  //for this size and below use when first make large ui 
  down(size){
    const sizes = {
      xs: "575.98px",
      sm: "767.98px",
      md: "991.98px",
      lg: "1199.98px", //means lg size and below till md or where ever we defined
    }
    return `@media (max-width: ${sizes[size]})`
  }
}