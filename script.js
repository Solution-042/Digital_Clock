// function time() {
//     let timer=new Date()
//     let hrs = timer.getHours().toString().padStart(2, "0");
// let mins = timer.getMinutes().toString().padStart(2, "0");
// let secs = timer.getSeconds().toString().padStart(2, "0");

//     document.querySelector('.hrs').innerHTML=hrs
//     document.querySelector('.min').innerHTML=mins
//     document.querySelector('.sec').innerHTML=secs
//     meri=document.querySelector('.meri')

//     if (hrs<12){
//         meri.innerHTML="AM"
//     }
//     else{
//         meri.innerHTML="PM"
//     }
// }

// time()
// setInterval(time,1000)

function time() {
    let timer = new Date();

    let hrs = timer.getHours();
    let mins = timer.getMinutes();
    let secs = timer.getSeconds();

    let meri = document.querySelector('.meri');

    let displayHrs = hrs % 12 || 12;

    displayHrs = displayHrs.toString().padStart(2, "0");
    mins = mins.toString().padStart(2, "0");
    secs = secs.toString().padStart(2, "0");

    document.querySelector('.hrs').innerHTML = displayHrs;
    document.querySelector('.min').innerHTML = mins;
    document.querySelector('.sec').innerHTML = secs;

    if (hrs < 12) {
        meri.innerHTML = "AM";
    } else {
        meri.innerHTML = "PM";
    }
}

time();
setInterval(time, 1000);