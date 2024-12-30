let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    let input = document.querySelector(".inputbox");
    if (input.value == "") {
        alert("You must write something!!!")
    } else {
        let li = document.createElement("li");
        li.innerText = input.value;
        document.querySelector("ul").appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveData();
})

let UL = document.querySelector("ul");
UL.addEventListener("click", (e) => {
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
},false);

function saveData(){
    localStorage.setItem("data",UL.innerHTML);
}

function showTask(){
    UL.innerHTML=localStorage.getItem("data");
}
showTask();