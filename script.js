let button = document.querySelector(".button");
let result1=document.querySelector(".result1");
let result2=document.querySelector(".result2");
let result3=document.querySelector(".result3");
let result4=document.querySelector(".result4");

button.onclick=function(){
    
    let input1 = document.querySelector(".input1").value;
    let input2 = document.querySelector(".input2").value;
	
    if((input1==="Dr.Pepper")&&(input2==="2")){
        result1.style.display="block";
    } else if (input1=== "chocolate milk"){ 
     result2.style.display="block";
    }
    
};