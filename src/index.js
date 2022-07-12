import React from "react";
import  ReactDOM from "react-dom";
import "./index.css";
let tt=new Date(2022,5,5,17);
 let newtime=tt.getHours();

let greetings="";
let bG={};
if(newtime>=0 &&  newtime<12)
{
greetings="Good Morning";
bG.color="green";
}

else if(newtime>=12 &&  newtime<=16)
{
greetings="Good Noon";
bG.color="orange";
}


else if(newtime>16 &&  newtime<=18)
{
greetings="Good Evening";
bG.color="pink";

}
else
{
  

greetings="Good Night";
bG.color="white";
bG.backgroundColor="black";

}



ReactDOM.render(
  <>
<h1>HELLO SIR! <span style={bG}>{greetings} </span></h1>

</>

,document.getElementById("root"));

