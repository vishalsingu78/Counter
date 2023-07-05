function increase(){
    var uservalue=document.getElementById("print").textContent;
    var num=Number(uservalue)+1;
    document.getElementById("print").innerText=num;
    if(num>0){
        document.getElementById("print").style.color="green"
    }
    else if(num<0){
        document.getElementById("print").style.color="red"
    }
    else{
        document.getElementById("print").style.color="black"  
    }
}
function decrease(){
    var uservalue=document.getElementById("print").textContent;
    var num=Number(uservalue)-1;
    document.getElementById("print").innerText=num;
    if(num<0){
        document.getElementById("print").style.color="red"
    }
    else if(num>0){
        document.getElementById("print").style.color="green"
    }
    else{
        document.getElementById("print").style.color="black"  
    }
}
function reset(){
    var uservalue=document.getElementById("print").textContent;
    var num=uservalue=0;
    document.getElementById("print").innerHTML=num;
    document.getElementById("print").style.color="black" ;
}