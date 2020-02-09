//Requirement 1
//a)change the text "Bakery and Cafe" to "Life is short. Eat dessert first." in the Index page

/* I have set a Timer of 3seconds inorder to change the tagline from "Bakery and Cafe" to "Life is short. Eat dessert first."
    setTimeout triggers the function "textChange" after 3second (3000ms)
*/

setTimeout(textChange, 3000);

/* I have written a function inorder to change the content in the tagline (#tx-change). This function targets the element based
    on its ID and then changes it's content(innerHTML).
*/
function textChange() {
document.getElementById("tx-change").innerHTML = "Life is short. Eat dessert first.";
}

//b) onmouseover on the jumbotron change the image to donuts.jpg, and onmouseout original image should re-appear

// I have created a variable jumboImage in order target the background-image in the jumbotron(#jumbo1) 
const jumboImage = document.getElementById("jumbo1");

/* I have defined an event "onmouseover" on the variable just created(jumboImage). If this event occurs then a anonymous 
    function will be triggered, which would change the existing macaron image with donut.jpg image. 
    I have also defined an event "onmouseout" on the variable just created(jumboImage). If this event occurs then a anonymous 
    function will be triggered, which would change the existing donut image with the default macaron.jpg image. 
*/
jumboImage.onmouseover = function(){
document.getElementById("jumbo1").style.backgroundImage = "url(images/donuts.jpg)";
};

jumboImage.onmouseout = function(){
document.getElementById("jumbo1").style.backgroundImage = "url(images/macaron.jpg)";
};

/* I have referred the portion covered in the class for Events, Timers, Functions and Manipulation of Content */
