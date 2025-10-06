/*var procont=document.getElementById("product")
var search=document.getElementById("search")
var productlist=procont.querySelector("div")

search.addEventListener("keyup",function(){
var enteredvalue=event.target.value.toUpperCase()

for(count=0;count<productlist.clientHeight;count=count+1){
    var productnam = productlist[count].querySelector("p").textContent
   if(productname.toUpperCase().indexOf(enteredvalue)<0)
    {
        productlist[count].style.display="none"
    }
    else{
        productlist[count].style.display="block"
    }
}
})*/

var procont = document.getElementById("product");
var search = document.getElementById("search");
var productlist = procont.querySelectorAll(".products-box");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productName = productlist[count].querySelector("p").textContent.toUpperCase();
        if (productName.indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
