const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function clock(){
   let h = new Date().getHours()
   let m = new Date().getMinutes()
   let s = new Date().getSeconds()
   let ap = "AM"

    if(h > 12){
        h = h - 12
        ap = "PM"
    }

    if(h < 10){
        h = "0" + h;
    }
    m=m<10 ? "0" + m : m;
    s=s<10 ? "0" + s : s;
    

    hour.innerText=h;
    minute.innerText=m;
    second.innerText=s;
    ampm.innerText=ap;
    setInterval(()=>{
    clock()
    }, 1000)


}
clock()