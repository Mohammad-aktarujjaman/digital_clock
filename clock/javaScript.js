let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');


let hrr = document.getElementById("hrr")
let min = document.getElementById("min")
let scc = document.getElementById("scc")
let time_formate = document.getElementById("time_formate")








setInterval(() =>{
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let hh = h * 30;
    let mm = m * 6;
    let ss = s * 6;

    hr.style.transform = `rotate(${m/2+hh}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`


    //let hours = h < 21 ? "0"+h : h;
    let hours = h > 12 ? h- 12 : h;
    hrr.innerText = hours < 10 ? "0"+ hours : hours;
    min.innerText = m < 10 ? "0"+m : m;
    scc.innerText = s < 10 ? "0"+s : s;

    //age >= 21 ? "Beer" : "Juice";


    if (h <= 12) {
        time_formate.innerText = "AM"
    }
    else{
        time_formate.innerText = "PM"
    }



})