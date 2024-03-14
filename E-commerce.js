var navbarSide=document.querySelector(".navbar-side")

function menu(){
    navbarSide.style.left="0"
}
function sideclose(){
    navbarSide.style.left="-54%"
}
var product=document.getElementById("Product")
var search=document.getElementById("search")
var productImage=product.querySelectorAll('div')
search.addEventListener('keyup',function(event){
    var enterValue=event.target.value.toUpperCase()
    for(var i=0;i<productImage.length;i++){
        var productName=productImage[i].querySelector("p").textContent 
        if(productName.toUpperCase().indexOf(enterValue)<0){
            productImage[i].style.display="none"
        } 
        else{
            productImage[i].style.display="block"
        }
    }
})