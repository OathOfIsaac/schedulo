//Call a var for the moment format we desire
var present= moment().format('MMMM Do YYYY, h:mm:ss a')
//append the var to html id for currentDay
$('#currentDay').html(present)

//object grabs to local storage
$(".0").val(localStorage.getItem("0"));
$(".1").val(localStorage.getItem("1"));
$(".3").val(localStorage.getItem("3"));
$(".4").val(localStorage.getItem("4"));
$(".5").val(localStorage.getItem("5"));
$(".6").val(localStorage.getItem("6"));
$(".7").val(localStorage.getItem("7"));
$(".8").val(localStorage.getItem("8"));
$(".9").val(localStorage.getItem("9"));
$(".10").val(localStorage.getItem("10"));
$(".11").val(localStorage.getItem("11"));
$(".12").val(localStorage.getItem("12"));
$(".13").val(localStorage.getItem("13"));
$(".14").val(localStorage.getItem("14"));
$(".15").val(localStorage.getItem("15"));
$(".16").val(localStorage.getItem("16"));
$(".17").val(localStorage.getItem("17"));
$(".18").val(localStorage.getItem("18"));
$(".19").val(localStorage.getItem("19"));
$(".20").val(localStorage.getItem("20"));
$(".21").val(localStorage.getItem("21"));
$(".22").val(localStorage.getItem("22"));
$(".23").val(localStorage.getItem("23"));

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
