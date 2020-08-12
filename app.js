var addButton = document.getElementById("add-btn");
var inputBox = document.getElementById("blur-input-box");
var mainConatiner = document.getElementById("main-conatiner");
var todoInput = document.getElementById("todo-input");
var inputValue = document.getElementById("input-one");



var buttonClick = addButton.addEventListener("click", intialize);


function intialize(){
   inputBox.style.display ="block";
   mainConatiner.style.opacity =0;
 
}


todoInput.addEventListener("keyup", function(e){
    if(e.which === 13){
        inputBox.style.display ="none";
        mainConatiner.style.opacity =1;
        handleTodoCreation();
        
    }
    
    
});


function handleTodoCreation(){
    var enteredText = todoInput.value;
    // <div class="input-colummn"><input type="checkbox"><p>Call the dentist</p></div> 
    // <div class="input-colummn"><input type="checkbox"><p>Call the programmer</p></div> 
    // <div class="input-colummn"><input type="checkbox"><p id="input-one"></p></div>
      var todoWrapper = document.getElementById("todo-input-wrapper");

    
    var inputCol = document.createElement("div");
    inputCol.classList.add("input-colummn");

    var checkBx = document.createElement("input");
    checkBx.type = "checkbox";
    checkBx.id = 'check' + new Date().getMilliseconds();

    var todoText = document.createElement("p");
    todoText.classList.add("space-one")
    var todoin = document.createTextNode(enteredText);
    todoText.id = new Date().getMilliseconds();

    checkBx.addEventListener("click", function(){
        var currentCard = document.getElementById(todoText.id);
        var currentCheck = document.getElementById(checkBx.id);

        if(currentCheck.checked){
            currentCard.style.textDecoration ="line-through";
        }
        else{
            currentCard.style.textDecoration ="none";
        }
    });

    
    

    todoText.append(todoin);
    inputCol.appendChild(checkBx);
    inputCol.appendChild(todoText);
    todoWrapper.appendChild(inputCol);
    
    
   
  



}


