
//----Date

function customeDate(){
    let currentDate = new Date();
    //console.log(date);
    let Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let Months = ['January','February','March','April','May','June','July','August','September','Octomber','December'];
    
    let day = currentDate.getDay();
    let month = currentDate.getMonth();
    let fullyear = currentDate.getFullYear();
    let date = currentDate.getDate();

    // console.log(day);

    document.getElementById("date").innerHTML = Days[day];
    document.getElementById("month").innerHTML = Months[month-1];
    document.getElementById("day").innerHTML = date;
    document.getElementById("year").innerHTML = fullyear;

}
customeDate();

//----clock

function displayTime(){
    //get a current date.. 
    let currentDate = new Date();

    //get a hour, min and sec
    let hour = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();

    let weather = document.getElementById("am-pm");

    // am - pm handle
    if(hour >= 12){
        weather.innerHTML = "PM";
    }
    else{
        weather.innerHTML = "AM";
    }

    // time > 12 handle the code...
    if(hour > 12){
        hour = hour - 12 ;
    }
    else{
        hour;
    }

    // suppose your time 9hour: 6min : 5sec so your time show your display ...
    // 09hour : 06min : 5sec
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
     // now add the your time inner Html...
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
}
setInterval(displayTime, 1000);
