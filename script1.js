let storage = data.results;
let textInput = document.querySelector("#inpt");
let button = document.querySelector("#butn");
let text = document.querySelector("#first");
let status = document.querySelector("#input");

button.onclick = function(event){
    event.preventDefault();
    let theName = document.createElement("p");
    let finalStatement = document.createElement("p");
    theName.innerHTML = textInput.value;
    for(i=0; i<10; i++){
        if(theName.innerHTML == storage[i].name){
           finalStatement = "Hi "+theName.innerHTML+ ", born on "+ storage[i].birthdate;
           text.append(finalStatement);
           status.innerHTML = "";
           break;
        }
    }
}
  


