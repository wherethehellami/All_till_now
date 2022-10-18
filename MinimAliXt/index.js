const d = new Date();
let time = d.getHours();
if(time>=1 && time<12){
var greet=document.getElementById('greet').innerText+='Good Morning';
}
else if(time>=12 && time<18){
var greet=document.getElementById('greet').innerText+='Good afternoon';
}
else{
    var greet=document.getElementById('greet').innerText+='Good Evening';

}