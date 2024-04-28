import { SpeedInsights } from "@vercel/speed-insights/next"
var currentdate = new Date(); 
var datetime = currentdate.getHours() + ":" + currentdate.getMinutes() + " - " + currentdate.getDate() + "/" + (currentdate.getMonth()+1) + "," + currentdate.getFullYear() ;
window.onload = function() { 
 document.getElementById("datetime").innerHTML = datetime;
}