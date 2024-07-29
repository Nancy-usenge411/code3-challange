// Create an empty shopping List array in Javascript
// Create an input field on the html page and an add button

// Create a div for holding the shopping list. It will be empty to begin with.

// Create a function that will handle adding items to the list. It will get the name from the input field and push it to the shopping list array.

// Add function for updating purchased status of an item


let shoppingList = []
function loadItems() {
  console.log("bread")
  let itemInput=document.getElementById("itemInput").value
  console.log(itemInput)
  shoppingList.push(itemInput)
  let item=''
  shoppingList.forEach(element => {
    item += "<li>"+ element + "</li>"
  });
  let itemList=document.getElementById("itemList") 
  itemList.innerHTML=item
  document.getElementById("itemInput").innerText=''

}
const addItemButton = document.getElementById("addItem");
addItemButton.addEventListener("click", loadItems);

function clearItem(){
  shoppingList=[]
  let itemList=document.getElementById("itemList") 
  itemList.innerHTML=""
}

function itemStatus(){
  const items = [...itemList.children].map(function(item){
    return item.textContent;
  });
  localStorage.setItem('itemImput'.stringfy(items));
}

itemList.addEventListener('click',itemStatus)