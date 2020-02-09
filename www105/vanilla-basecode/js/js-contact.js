//Requirement 4:

/* I am creating 3 variables for holding name, email and message fields of the form. Variables are defined by 
    targeting the respective id's using document.getElementById("#id")
*/

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

/* I am creating 3 variables for holding the error/correct messages for name, email and message fields of the form.
    targeting the respective id's using document.getElementById("#id"). If the user inputs his data into the form fields
    these variables would be populated with a thank you note and if the user leaves the input fields blank and clicks
    on submit then an error message would be populated in these variables. These errorMessage variables are linked to the
    newly created <span> tags which have been assigned with #ids.
*/

const nameErrorMessage = document.getElementById("name-error-message");
const emailErrorMessage = document.getElementById("email-error-message");
const messageErrorMessage = document.getElementById("message-error-message");

/* I am defining a function with a parameter "event" which will be executed when the user clicks on "Submit" button.
    I have considered a variable named "errors", which will keep count of the number of errors the user makes while filling 
    the form. By errors made, I mean to say, if the user leaves any field blank it would be considered as an error. I referred 
    the code which was covered during the class for forms in order to come up with the solution
*/

document.getElementById("myform").onsubmit = function (event) {
    let errors = 0;

    /* I am checking if the value present in the "name" variable is blank or not using the if statement. If it is blank, then
        increment the "errors" variable by 1, change field's border to 2px solid "red" inorder to indicate an error to the user
        visually. Additionally "nameErrorMessage" variable will be populated with an appropriate error message.
    */
    /* I am populating a positive message in the "nameErrorMessage" variable if the user inputs his data in the name field.
        Additionally, "name" field's border in the form is made "1px solid green".
    */

    //These Error/Correct messages will be populated below each field in the form. So that the user knows what he needs to do.

    if (name.value == "") {
        errors = errors + 1; // Update the errors variable
        name.style.border = "2px solid red";
        nameErrorMessage.innerHTML = "You forgot to enter your name";
    } else {
        name.style.border = "1px solid green"
        nameErrorMessage.innerHTML = "Thank you!";
    }

    /* I am checking if the value present in the "email" variable is blank or not using the if statement. If it is blank, then
        increment the "errors" variable by 1, change field's border to 2px solid "red" inorder to indicate an error to the user
        visually. Additionally "emailErrorMessage" variable will be populated with an appropriate error message.
    */
    /* I am populating a positive message in the "emailErrorMessage" variable if the user inputs his data in the name field.
        Additionally, "email" field's border in the form is made "1px solid green", inorder to visually tell the user that
        he has input correct data
    */

    //These Error/Correct messages will be populated below each field in the form. So that the user knows what he needs to do.

    if (email.value == "") {
        errors = errors + 1; // Update the errors variable
        email.style.border = "2px solid red";
        emailErrorMessage.innerHTML = "You forgot to enter your email";
    } else {
        email.style.border = "1px solid green"
        emailErrorMessage.innerHTML = "Thanks for entering your email";
    }

    /* I am checking if the value present in the "message" variable is blank or not using the if statement. If it is blank, then
        increment the "errors" variable by 1, change field's border to 2px solid "red" inorder to indicate an error to the user
        visually. Additionally "messageErrorMessage" variable will be populated with an appropriate error message
    */
    /* I am populating a positive message in the "messageErrorMessage" variable if the user inputs his data in the name field.
        Additionally, "message" field's border in the form is made "1px solid green", inorder to visually tell the user that
        he has input correct data
    */

    //These Error/Correct messages will be populated below each field in the form. So that the user knows what he needs to do.

    if (message.value == "") {
        errors = errors + 1; // Update the errors variable
        message.style.border = "2px solid red";
        messageErrorMessage.innerHTML = "You forgot to enter your message";
    } else {
        message.style.border = "1px solid green"
        messageErrorMessage.innerHTML = "Thank you for your message";
    }

    /* In the below code, I am checking if the count of the variable "errors" is more than 0. If the value in "errors" is more
        than 0, then the parameter passed into the (function(event)) function, ie., "event" will be set to prevent the 
        default action. preventDefault() method prevents the default action associated with the "onsubmit" event. The default
        action for "onsubmit" is to submit the form.

        If the error count is equal to 0. Then the form will be submitted.
    */
    if (errors > 0) {
        event.preventDefault();
    }
}

//Requirement 5:
/*I have changed the contact.html document's email line to empty <a> tags and assigned it an id "c-mail"
I have populated the content of the #c-mail using innerHTML. Id is targeted using the getElementById() method, and the
E-mail address is populated. This will only populate the text inside the anchor tags<a>. However, this text will not
appear like a link and won't launch to a email account on a click.
*/

document.getElementById("c-mail").innerHTML = "vanillajsbakery@example.com";

/*
In this part of the code I am populating the "href" attribute of #c-mail, i.e., <a> tag. Due to which the text populated above
will look like a link and on clicking, it will launch the default mail box and compose an E-mail with "To" address already filled
in as "vanillajsbakery@example.com"
*/

document.getElementById("c-mail").href = "mailto:vanillajsbakery@example.com";

/*The above method will prevent the spambots from accessing the e-mail address "vanillajsbakery@example.com". While I right
click on the page and go to view page source, the code will not have the e-mail address. It will only show the id name. In this
way we can restrict spambots from accessing our email addresses from our webpages. Deciding about which of the 3 things I can 
modify helped me to start with the solution for this requirement. Modifying content and attribute were present in the syllabus
covered in the class.
*/