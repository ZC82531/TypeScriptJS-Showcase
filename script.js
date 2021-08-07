// Name Input
let submit = document.querySelector("#sbmt");
let textInput = document.querySelector("#text");
let entry = document.querySelector("#welcome");
let content = document.querySelector("#entry");

submit.onclick = function(event){
    event.preventDefault();
    if (textInput.value == ""){
        
    }
    else{
        let newTask = document.createElement("div");
        newTask.innerHTML = textInput.value;
        entry.append("Welcome "+newTask.innerHTML);
        content.innerHTML = "";
    }
}

//Images Disappear
let dlt = document.querySelector("#delete");
let imgs = document.querySelector(".preview");
let dv = document.querySelector("#cntr");

dlt.ondblclick = function(event){
    event.preventDefault();
    imgs.innerHTML = "";
    dv.innerHTML = "";
}
