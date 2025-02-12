var count=0;
function remove(el){
    elid="#"+el.id;
   const imgg=document.querySelector(elid);
   let rbtn=imgg.parentElement.parentElement.remove();
}

function add(){
    const text=document.querySelector(".add");
    if(text.value=="")
        return;
    const cont=document.querySelector("#content");
    cont.classList.add("content");
    const div=document.createElement("div");
    cont.appendChild(div);
    div.classList.add("exx");
    var idd="exx"+count;
    div.setAttribute("id",idd);
    const details=document.createElement("div");
    div.appendChild(details);
    details.classList.add("details");
    const btnn=document.createElement("div");
    div.appendChild(btnn);
    btnn.classList.add("btnn");
    btnn.innerHTML=`<img src="delete.svg" alt="" class="imgg" id="img${count}" onclick="remove(this)">`;
    details.innerText=text.value;
    text.value="";
     count++;
}

//  function to store the data in localStorage

// (function(){
// if(localStorage.length==0)
//     return;
// })();

const btn=document.querySelector(".btn");
btn.addEventListener("click",add);
