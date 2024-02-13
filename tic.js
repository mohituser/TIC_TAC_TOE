let grid=document.querySelector(".grid");
let div=document.querySelectorAll(".grid div");
let text=document.querySelector(".chance"),
button=document.querySelector("button");
let x,chance="X",f=0;
button.addEventListener("click",()=>{
    div.forEach(element => {
        element.innerText="";
    });
    chance="X";
    text.innerText=`This is ${chance}'s Chance`;
    f=0;
})
document.addEventListener("dblclick",(e)=>{
    if(e.target.innerText=="" && f==0){
    console.log(e.target.innerText);
    x=e.target.className;
    document.getElementsByClassName(x)[0].innerText=chance;
    let p=fun(x);
    if(p==true){console.log(`you win`); won();f++;return;}
    else{console.log(`you lose`)}
    if(chance=="X") chance='O';
    else{chance='X';}
    text.innerText=`This is ${chance}'s Chance`
}
    
});
// console.log("rohit");
function won(){
    text.innerHTML=`Congrutulations! <br>Person ${chance} <br> won this match`

}
function fun(x){
    x=parseInt(x);
    let y=x,x1=x-1,c=0;
    console.log(div[x-1].innerText);
    if(div[0].innerText==chance && div[8].innerText==chance  && div[4].innerText==chance){return true;}
    if(div[2].innerText==chance && div[6].innerText==chance  && div[4].innerText==chance){return true;}
 while(y>0){y=y-3;}
 while(x1%3!=0){x1--;}
 y=y+3;
 x1=x1+1;
 for(var i=0;i<3;i++){if(div[x1-1].innerText===chance){c++;}
else{break;}
x1++;}
if(c==3) return true;
c=0;
for(var i=0;i<3;i++){
    if(div[y-1].innerText===chance){c++;}
    else{break;}
    y+=3;
}
if(c===3) return true;
return false;
    
}