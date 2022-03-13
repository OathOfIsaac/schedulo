//Call a var for the moment format we desire
var present= moment().format('MMMM Do YYYY, h:mm:ss a')
//append the var to html id for currentDay
$('#currentDay').html(present)

//check time
function thisTime() {
    //current time variable
    var currentTime = moment().hour();

    $(".time-block").each(function () {
    var timeBlock = parseInt($(this).attr("id"), 10 , 1);
        
    //apply background colors depending on thisTime

    if (timeBlock < currentTime) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');
    } else if (timeBlock === currentTime) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
});
}

thisTime()



// TRASH CODE DO NOT UNCOMMENT
//Gets the current hour in HH military format
//var thisTime = moment().format('HH');
//console.log(thisTime)
//array of I for current hour
//taskArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
//Future element IDs of EACH time-block
//const timeBlock0 = document.getElementById("0");
//console.log(timeBlock)
//function myFunction() {
//    var taskBox0 = document
//}
//future proofing for loop time logic
//pastTime = timeBlock < thisTime;
//presentTime = (timeBlock === thisTime);
//futureTime = timeBlock > thisTime;
//for (let i = 0 ; i < taskArray.length ; i++ ) { 
//};
//timeBlock = [i]
//var pastTime = thisTime >
