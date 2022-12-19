let fullname = document.getElementById("fname");
let lastname = document.getElementById("lname");
let countryname = document.getElementById("cname");
let playerscore = document.getElementById("score");
const  addeddata = document.getElementById('addeddata');

let btn = document.getElementById("addplayer");

btn.addEventListener('click', ()=>{    
        let fname=fullname.value.trim();
        let lname=lastname.value.trim();
        let cname=countryname.value.trim();
        let score=playerscore.value.trim();

        addPlayer(fname, lname, cname, score);
    
        fullname.value="";
        lastname.value="";
        countryname.value="";
        playerscore.value="";
       
});
function isAllFieldValid(fname, lname, cname, score) {
    let html='';
    if(fname === "" || lname === "" || cname === "" || score === "") {
    html = `<p style="color:red;text-align:center;">All fields are required</p>`;
    addeddata.innerHTML=html;
    return false;
}else{
return true;
}
}
function addPlayer(fname, lname, cname, score) {
let valid = isAllFieldValid(fname, lname, cname, score);
console.log(fname.toUpperCase());    
if(valid === false) {
return;
}
addeddata.innerHTML="";
let playerData = document.createElement('div');
playerData.setAttribute('class', 'player-data');

let container = document.getElementById('container');
container.appendChild(playerData);

let details = document.createElement('div');
details.setAttribute("class", "details");
details.style="display:flex; justify-content:space-between; gap:50px;align-items:center;"

let ptagname = document.createElement('h2');
ptagname.innerText = fname.toUpperCase()+" "+lname.toUpperCase();

let name = document.createElement('div');
name.setAttribute("class", "names");
name.appendChild(ptagname);

let nameDate = document.createElement("h4");
nameDate.setAttribute("class", "name-date");
nameDate.appendChild(name);
details.appendChild(nameDate);
nameDate.style="margin:0;"

let pTageDate = document.createElement('p');
const tdate =  new Date();
let stdate = tdate[Symbol.toPrimitive]('string').slice(4,21);
pTageDate.innerText=stdate;
pTageDate.setAttribute('class', 'date-class');

let date = document.createElement("div");
date.setAttribute("class","date");
date.appendChild(pTageDate);
nameDate.appendChild(date);

let ptag1=document.createElement('h2');
ptag1.innerText=cname.toUpperCase();
details.appendChild(ptag1);

let ptag2=document.createElement('h2');
ptag2.innerText=score;
details.appendChild(ptag2);

let button = document.createElement("div");
button.setAttribute('class','button');
button.style="display:flex; align-items:center; gap:5px; justify-content: center;";

let circle1 = document.createElement('div');
circle1.setAttribute("class","circle");
button.appendChild(circle1);
circle1.innerHTML=`<img id="del" src="https://tse2.mm.bing.net/th?id=OIP.gAaTsSJVbT0YGd9LR1eRpwHaHa&pid=Api&P=0" />`;

let circle2 = document.createElement("div");
circle2.setAttribute("class", "circle");
button.appendChild(circle2);
circle2.innerHTML=` <p> +5  </p>`;

let circle3 = document.createElement("div");
circle3.setAttribute("class","circle");
button.appendChild(circle3);
circle3.innerHTML=`<p> -5 </p>`;

playerData.appendChild(details);
playerData.appendChild(button);

let del=circle1;
del.addEventListener('click',() => {
    container.removeChild(playerData);
});

let increament=circle2;
increament.addEventListener('click',() =>{
    let num=Number(ptag2.innerText);
    num +=5;
    ptag2.innerText=num;
});

let decreament = circle3;
decreament.addEventListener('click', () =>{
    let num = Number(ptag2.innerText);
    num -=5;
    ptag2.innerText=num;
});
}