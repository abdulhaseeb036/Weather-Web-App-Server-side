
var day = document.getElementById('datetime');
console.log(day.innerHTML);

var date = new Date;

// Month
var months = ['Jan', 'Feb' , 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec']
var currentMonth = months[date.getMonth()]

// Date
var currentDate = date.getDate();
var currentDateofDay = date.getDate()

// Hrs
var hrs = date.getHours();
var period = "AM"
if (hrs > 11) period = "PM"
if (hrs > 12) hrs -= 12;
var currentHrs = hrs;
var currentPeriod = period;

// Minute 
var min = date.getMinutes();
if (min < 10 ){
  min = `0${min}`
  console.log(min); 
}  
var CurrentMin = min;

var currentDateTime = `${currentMonth} / ${currentDate} | ${currentHrs}:${CurrentMin}${currentPeriod}`;
 day.innerHTML = currentDateTime;
 







//  Changing Theme Color Fun
getValue = () => {
 var checkMarked = document.getElementById('inputThemeChange');
 if (checkMarked.checked == true ){ 
    document.body.style.background = "black";
    document.body.style.color = "blue"
  }  
  else {
    document.body.style.background = "white";
  }
}