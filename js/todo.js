//add delete button to list elements(li) 
let myListElements = document.getElementsByTagName("LI");
for (let i = 0; i < myListElements.length; i++) {
    let span = document.createElement("span")
    span.className = "close"
    span.id = "deleteBtn"
    span.appendChild(document.createTextNode("\u00D7"))
    myListElements[i].appendChild(span);
}

//hide element when button clicked
let closeButton = document.getElementsByClassName("close");
for (let i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function(){
        let li = this.parentElement;
        li.style.display = "none";
    }
    
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);


//add new element
function newElement(){

  var option = {
    animation : true,
    delay: 2000
   };


    var todoInput = document.querySelector("#task");
    var toastHTMLElement;  
    if(todoInput.value != ""){
      addElement();
    }else{
      toastHTMLElement=document.getElementById("failToast");
    }  

    var toastElement = new bootstrap.Toast(toastHTMLElement,option);
    toastElement.show(); 

    function addElement() {
    toastHTMLElement=document.getElementById("successToast")
    let todoInput = document.querySelector("#task")
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(todoInput.value))

    let span = document.createElement("span")
    span.className = "close"
    span.id = "deleteBtn"
    span.appendChild(document.createTextNode("\u00D7"))


    li.appendChild(span)

    document.getElementById("list").appendChild(li) 
    todoInput.value=""

    for (i = 0; i < closeButton.length; i++) {
        closeButton[i].onclick = function() {
          var li = this.parentElement;
          li.style.display = "none";
        }
      }

    }


}

