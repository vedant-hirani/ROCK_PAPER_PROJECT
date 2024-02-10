let btn1=document.querySelector(".d1 button");
let btn2=document.querySelector(".d2");
let btn3=document.querySelector(".d3");
let pre2=document.querySelector("pre");
let w1=document.querySelector(".d4 .solution");
let w2=document.querySelector(".d5 .solution");
let count1=0;
let count2=0;

let clicki_c="rock";

btn1.addEventListener("click" ,function com1()
{
    let k=Math.random();
   let a=Math.floor((k*3)+1);
    if(a==1)
    {
       clicki_c="rock";
       pre2.innerText="          math tied";
       w1.innerText=`${count1}`;
       w2.innerText=`${count2}`; 
    }
    else if(a==2)
    {
        clicki_c="scissor";
        pre2.innerText=`  YOU WON THE MATCH,ROCK BEATS ${clicki_c}`;
        count1++;
        w1.innerText=`${count1}`;
        w2.innerText=`${count2}`;
    }
    else if(a==3)
    {
        clicki_c="paper";
        pre2.innerText=`  YOU LOST THE MATCH, ${clicki_c} BEATS ROCK`;
        count2++;
        w1.innerText=`${count1}`;
        w2.innerText=`${count2}`; 
    }
});
btn2.addEventListener("click" ,function com2()
{
    let k=Math.random();
   let a=Math.floor((k*3)+1);
  
    if(a==1)
    {
       clicki_c="rock";
       pre2.innerText=`  YOU LOST THE MATCH, ${clicki_c} BEATS SCISSOR`;
       count2++;
       w1.innerText=`${count1}`;
       w2.innerText=`${count2}`;
    }
    else if(a==2)
    {
        clicki_c="scissor";
        pre2.innerText="          math tied";
        w1.innerText=`${count1}`;
        w2.innerText=`${count2}`;
    }
    else if(a==3)
    {
        clicki_c="paper"; 
        pre2.innerText=`  YOU WON THE MATCH,SCISSOR BEATS ${clicki_c}`;
        count1++;
        w1.innerText=`${count1}`;
        w2.innerText=`${count2}`;
    }
});
btn3.addEventListener("click" ,function com3()
{
    let k=Math.random();
   let a=Math.floor((k*3)+1);
  
    if(a==1)
    {
       clicki_c="rock";
       pre2.innerText=`  YOU WON THE MATCH,PAPER BEATS ${clicki_c}`;
       count1++;
       w1.innerText=`${count1}`;
       w2.innerText=`${count2}`;
    }
    else if(a==2)
    {
        clicki_c="scissor";
        pre2.innerText=`  YOU LOST THE MATCH, ${clicki_c} BEATS PAPER`;
        count2++;
        w1.innerText=`${count1}`;
        w2.innerText=`${count2}`;
    }
    else if(a==3)
    {
        clicki_c="paper";
        pre2.innerText="          math tied";
        w1.innerText=`${count1}`;
        w2.innerText=`${count2}`;
    }
});


  