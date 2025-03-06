count=0;
var test;

count=parseInt(localStorage.getItem("count"));

function remove(el){
   elid="#"+el.id;
   const imgg=document.querySelector(elid);
   const rvar=imgg.parentElement.parentElement;
   let data=JSON.parse(localStorage.getItem("data"));
   let te=rvar.getAttribute("id");
   delete data[te];
   localStorage.setItem("data",JSON.stringify(data));
   let rbtn=imgg.parentElement.parentElement.remove();

   con=parseInt(localStorage.getItem("count"));
   if(con>0)
   con=con-1;
   localStorage.setItem("count",con);
}

(function(){
    const data=JSON.parse(localStorage.getItem("data"));
    if(Object.keys(data).length==0){
        con=parseInt(localStorage.getItem("count"));
        con=0;
        localStorage.setItem("count",con);
        return;
    }
    const keys=Object.keys(data);
    const values=Object.values(data);
    for(var i=0;i<Object.keys(data).length;i++){
    
    const cont=document.querySelector("#content");
    cont.classList.add("content");
    const div=document.createElement("div");
    cont.appendChild(div);
    div.classList.add("exx");
    var idd=keys[i];
    div.setAttribute("id",idd);
    const details=document.createElement("div");
    details.setAttribute("onclick","strike(this)");
    div.appendChild(details);
    details.classList.add("details");
    const btnn=document.createElement("div");
    div.appendChild(btnn);
    btnn.classList.add("btnn");
    btnn.innerHTML=`<img src="delete.svg" alt="" class="imgg" id="img${count}" onclick="remove(this)">`;
    details.innerText=values[i];
    }
})();

function add(){
    count=parseInt(localStorage.getItem("count"));
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
    details.setAttribute("onclick","strike(this)");
    div.appendChild(details);
    details.classList.add("details");
    const btnn=document.createElement("div");
    div.appendChild(btnn);
    btnn.classList.add("btnn");
    btnn.innerHTML=`<img src="delete.svg" alt="" class="imgg" id="img${count}" onclick="remove(this)">`;
    details.innerText=text.value;
    
    let data=JSON.parse(localStorage.getItem("data"));
    data[idd]=text.value;
    localStorage.setItem("data",JSON.stringify(data));
    text.value="";

    count=count+1;
    con=parseInt(localStorage.getItem("count"));
    con=con+1;
    localStorage.setItem("count",con);

    const dat=JSON.parse(localStorage.getItem("data"));
    if(Object.keys(dat).length==1)
    location.reload();
}

function strike(el){
    el.classList.toggle("strike");
    
}
function editabe(){
this.setAttribute("contenteditable", "true");
test=this.focus(); 
}
function deditable(){
const id=this.parentElement.getAttribute("id");
const val=this.innerText;
let data=JSON.parse(localStorage.getItem("data"));
data[id]=val;
localStorage.setItem("data",JSON.stringify(data));
this.setAttribute("contenteditable", "false"); 
}
const btn=document.querySelector(".btn");
btn.addEventListener("click",add);

const edit=document.querySelectorAll(".details");
edit.forEach(el=>{
    el.addEventListener("dblclick",editabe);
    el.addEventListener("blur",deditable);
})

// this.setAttribute("contenteditable", "false");
