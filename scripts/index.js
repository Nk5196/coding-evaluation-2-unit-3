// Add the coffee to local storage with key "coffee"
// url=`https://masai-mock-api.herokuapp.com/coffee/menu`
var count=0
var total=0
var arr= JSON.parse(localStorage.getItem("coffee")) || []

async function getData(){
    var api=`https://masai-mock-api.herokuapp.com/coffee/menu`
    var data= await fetch(api)
    var res = await data.json();
    mapData(res.menu.data)
    console.log("inside the function")
  
}
getData()

var items= document.getElementById("menu")
items.innerHTML=null
    
 function mapData(data){
     console.log(data)

     data.forEach(function(elem){
         let row = document.createElement("div")
         row.setAttribute("class","row")
         
         let image= document.createElement("img")
         image.src=elem.image

         let discri= document.createElement("P")
         discri.innerText=elem.description

         let title= document.createElement("P")
         title.innerText="Type :-"+elem.title

         let price= document.createElement("P")
         price.innerText="Price :-" +elem.price

         let btn= document.createElement("button")
         btn.innerText= "Add to Bucket"

         btn.addEventListener("click", function(){
             buCket(elem);
             count++;
            document.getElementById("Count").innerText= count
         })

         row.append(image,title,price,btn)

         items.append(row)

     })
 }
   function buCket(elem){
   total+=elem.price

   arr.push(elem)
   
   localStorage.setItem("coffee",JSON.stringify(arr))
   localStorage.setItem("total",(total))
   }