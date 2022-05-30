// On clicking remove button the item should be removed from DOM as well as localstorage.
var data= JSON.parse(localStorage.getItem("coffee")) || [];
console.log(data)
var total=localStorage.getItem("total") ;

document.getElementById("total_amount").innerHTML="total :- "+total;

data.forEach(function(elem,ind){
    let row = document.createElement("div")
    row.setAttribute("class","row1")
    
    let image= document.createElement("img")
    image.src=elem.image

    let discri= document.createElement("P")
    discri.innerText=elem.description

    let title= document.createElement("P")
    title.innerText="Type :-"+elem.title

    let price= document.createElement("P")
    price.innerText="Price :-" +elem.price

    let btn= document.createElement("button")
    btn.innerText= "remove"

    btn.addEventListener("click", function(){
        reMove(ind,elem);
      
    })

    row.append(image,title,price,btn)
    document.getElementById("bucket").append(row)
  

})

function reMove(ind,elem){
    data.slice(ind,1)
    total=total-elem.price;
    localStorage.setItem("coffee",JSON.stringify(data))
    localStorage.setItem("total",JSON.stringify(total))
     window.location.reload();
}
