let date=document.querySelector(".subheading");
console.log(date);
date.innerHTML=new Date().toLocaleDateString("en-us", { weekday: "long", year: "numeric", month:"short", day: "numeric" });

let add=document.querySelector(".add");
console.log(add);

let form=document.querySelector(".form");
console.log(form);

function clearForm(){
    this.value="";
}

form.addEventListener("click",clearForm);
let unOrderedList=document.querySelector("#todo-list");
console.log(unOrderedList);

add.addEventListener("click",()=>{

    let newToDo=document.querySelector("#newToDo");
    if(newToDo.value==="New To do...." || newToDo.value==""){
        return;
    }
    let li=document.createElement("li");
     
    li.className="list-group-item p-3";
    li.innerHTML=` <input class="form-check-input me-1" id="todo-1" type="checkbox"> <label class="form-check-label" for ="todo-1">
    ${form.value} </label>`
    
    console.log("hii",li);
    unOrderedList.appendChild(li);
    // newToDo.value="";
    newToDo.value="New To do.....";
    let cut=document.querySelectorAll("input[type=checkbox]");
    console.log(cut);

    cut.forEach((item,idx)=>{
        item.addEventListener("change",()=>
        {
            let data=document.querySelectorAll(".form-check-label")[idx];
            console.log(data);
            let struck=document.createElement("strike");
            console.log(struck);
            let txt=data.innerText;
            data.innerText="";
            struck.append(txt);
            data.appendChild(struck);
            console.log(struck);
        })
    })


})


let clear=document.querySelector(".butt");
console.log(clear);


let listItem=document.querySelectorAll(".list-group-item");
console.log(listItem);
let li=[...listItem];
clear.addEventListener("click",()=>{
    unOrderedList.style.display="none";
    });