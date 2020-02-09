/*I figured this logic from the Date syllabus which was covered in the class. I also referred the w3schools tutorial online to
know more about the date methods.s*/ 

//I am creating a new Date object and assigning it to the variable "date"
const date = new Date();

/*I am extracting the current Month, Current Date, Current Day and Current Year from the
    date variable's methods using the dot operator into 4 different variables namely, curMonth, CurDate.
    curDay and CurYear.
*/

const curMonth = date.getMonth(); //Needs an Array
const curDate = date.getDate();
const curDay = date.getDay();//Needs an Array
const curYear = date.getFullYear();

/* The only problem with the date object is that it considers Months and Days of the week as an array. Hence, if I try
to extract today's day and Month it would show me [Today's day-1] and [This Month-1]. These numbers would be the corresponding
indexes of Day and Month. Index in an array begin from 0 rather than 1. Hence, the numbers [Today's day-1] and [This Month-1].
*/

/*I am defining 2 arrays namely "months" and "days". I would be extracting the items from the arrays with respect to the index
that I have retrieved from date using "curMonth" and "curDay".
*/

//Defining Arrays for Month and day
const months = ["January", "February", "March", "April", "May", "June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

/*I am defining 2 variables namely vDay and vMonth to hold the content from the array for the respective indexes which I had
retrieved from date using "curMonth" and "curDay".
 */
const vDay = days[curDay];
const vMonth = months[curMonth];

/* I am performing String interpolation to get the date in the required format. i.e., "Weekday, Month Day, Year"
and populating it into a variable 'd'.
*/

const d = `${vDay}, ${vMonth} ${curDate}, ${curYear}`;

/*I am populating the content in the variable "d" into the element which has #date-exp. This is given in the about.html document. Due to this
current date features would populated in about.html in the required format.
 */
document.getElementById("date-exp").innerHTML = d;