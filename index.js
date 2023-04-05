var form =document.getElementById("addForm");
var itemlist=document.getElementById("items");
var filter=document.getElementById('filter')
form.addEventListener("submit", addItem)
 itemlist.addEventListener('click',removeitem)
 filter.addEventListener("keyup",filteritems)
function addItem(e){
  e.preventDefault();

var newitem=document.getElementById("item").value
var li =document.createElement('li')
li.className="list-group-item"
li.appendChild(document.createTextNode(newitem))
var delbtn=document.createElement('button')
delbtn.className="btn btn-danger btn-sm float-right delete"
delbtn.appendChild(document.createTextNode('X'))
li.appendChild(delbtn)
itemlist.appendChild(li)
}
function removeitem(e){
  if(e.target.classList.contains("delete")){
    if(confirm("are u sure?")){
      var li=e.target.parentElement
      itemlist.removeChild(li)
    }
  }
}
function filteritems(e){

var text =e.target.value.toLowerCase();
var items=itemlist.getElementsByTagName("li")
Array.from(items).forEach(function(item){
  var itemName =item.firstChild.textContent;
  if(itemName.toLowerCase().indexOf(text) != -1){
    item.style.display="block"
  }else{
    item.style.display="none"
  }
})
}