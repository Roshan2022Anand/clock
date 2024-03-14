const hourStick = document.getElementById('cir-1');
const minuteStick = document.getElementById('cir-2');
const secondStick = document.getElementById('cir-3');
const showDate = document.getElementById('show-date');
setInterval(()=>{
let a = new Date();
let hour = a.getHours()-12;
let minute = a.getMinutes();
let second = a.getSeconds();
hourStick.style.transform = `rotate(${hour * 30}deg)`;
minuteStick.style.transform = `rotate(${minute * 6}deg)`;
secondStick.style.transform = `rotate(${second * 6}deg)`;
showDate.innerText = `${a.getDate()} - ${a.getMonth()} - ${a.getFullYear()}`
},1000)

