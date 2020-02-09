//Requirement 1: jQuery Plugin used for the Hero slider
/*
Plugin Name: Basic ResponsiveBackground Slider - jQuery sliCarousel
Github Link: https://github.com/AM-77/slicarousel
jqeryscript documentation: https://www.jqueryscript.net/slider/background-slider-slicarousel.html
Plugin type: jQuery
License: MIT and free for private and commercial usage

Usage and Understanding:
    Steps for usage:
    1. Link slicarousel.css file in the <head> of the html document.
    2. Attach the Latest jQuery CDN script and slicarousel.js at the end of the document within <script> tags.
    3. Create a container within which you want to place the slider. Here I have used "the_slider" class for the container
        which holds the slider.
    4. Call the function on the slider container. Here, I am calling the function on div .the_slider
    5. Customize the slider as required. Here, I have customized the number of slides to 4 instead of the default number 5.
        I have hidden the navigation arrows, I have enables the navigation dots seen at the bottom of the slideshow. I have
        customized the slider to occupy full-width of the container,I have set slider to autoplay and I have given a delay
        of 3seconds for transition.
    6. IMPORTANT! - Slide images are passed to the slider through a custom CSS. Here, I have used "styles.css" to pass the
        images. This CSS will have certain styles (Eg: Container height, slider styles etc). You can easily find them in 
        the demo example provided with this plugin on GitHub.
*/

$("div .the_slider").slicarousel({ 
    "nbr_slides": 4, // The number of slides  
    "arrows": false, // Enable the arrows navigation   
    "dot_nav": true, // Enable the dots navigation  
    "full_width": true, // width: 100%  
    "autoplay": {
        "enabled": true,
        "direction": "rtl" 
    }, // autoplay    
    "delay": 3000, // transition delay
});


// Requirement 2: JavaScript Plugin for LightBox in the Current Projects section
/*
Plugin Name: Baguettebox - JavaScript LightBox
Github Link: https://github.com/feimosi/baguetteBox.js
Documentation reference: https://www.javascripting.com/view/baguettebox-js
Plugin type: JavaScript
License: MIT and free for private and commercial usage

Usage and Understanding:
    Steps for usage:
    1. Link baguetteBox.min.css file in the <head> of your HTML document.
    2. Add baguetteBox.min.js at the end of your document in <script> tag.
    3. Both the above files are available in the "dist" folder of your downloaded zip file.
    4. Initialize the script by running, ---- baguetteBox.run('.gallery'); onload of the window.
    5. There are variety of customization options available for this plugin. However, It didn't find them relevant
        for my site. Hence, I am using only few of them which I found were relevant. I have changed the "Captions"
        option to not display the captions. I have also changed the overlay background colour of the box. I have 
        played around alittle with buttons and animation.
    6. This  is a easy to use Fully JavaScript Plugin for LightBox purpose.
*/

window.onload = function () {
    baguetteBox.run('.card-holder', {
        captions: false, // By default caption is shown in the lightbox
        overlayBackgroundColor: 'rgba(0,32,20,0.5)', //By default its rgba(0,0,0,0.8)
        buttons: false,
        animation: 'fadeIn',
    });
};

// Requirement 3: Use AJAX to populate the career section details in the blue background. Have Sliding or Fading effects.
/*
Steps for usage:
    1. I have used the ready event. Which would be triggered when the entire Document Object Model(DOM) has been loaded.
    2. I am targeting the <a> tag present within the class "left-col". On a click(event) this will trigger a function.
        event within the function is a parameter that we pass to the function.
    3. Firstly, I want to stop the default action when the <a> tag is clicked. The default action in this case is to load
        html page provided within the href attribute. Uisng event.preventDefault() method, I am preventing the default
        action from occuring.
    4. Next, I am populating the "profile" constant with the content of the href attribute.
    5. The third task in AJAX is to populate the content into the blue box with ID opportunity.
    6. I am targetting the #opportunity container and making the already present content to fade Out using fadeOut effect
        from the jQuery Library. I have set the fade out 2seconds(present content fadesout) and after which I am calling an anonymous function
        in order to populate the content dynamically form various html pages.
    7. I have used .load() to load the content from the external source into the container with ID opportunity. 
    8. The .load method takes the href data which is present in the "profile" and loads the content present within the
        "new-page" ID of the external source and populate the area inside #opportunity.
    9. I have declared a slideDown effect here which will take 2seconds and the external content will be populated within
        #opportunity container.
    10. Working with AJAX was covered in the class. I have reffered the class examples to write the code for this 
        requirement. Effects and load() methods were also in the syllabus.
    11. For more deatils, you can refer the API Documentation in: https://jquery.com

*/

$(document).ready(function () {
    $(".left-col a").click(function (event) {
        event.preventDefault();
        const profile = $(this).attr("href");  
        $("#opportunity").fadeOut(2000, function () {
            $("#opportunity").load(`${profile}#new-page`, function () {
                $("#opportunity").slideDown(2000);
            }); //end of load
        });// end of fadeout
    });// close event


//Requirement 4: Contact Form Validation
/*
Reference Material:
    1. logic: JavaScript form validation example done in the class + JavaScript Assignment
    2. jQuery Syntax: jQuery notes/syllabus covered in the class
    3. validating if the content entered in the Email Box: 
        https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation
    4. More About Regular Expressions: https://www.regular-expressions.info/email.html
                                        https://www.w3schools.com/js/js_regexp.asp
    5. Stackoverflow Link: https://stackoverflow.com/questions/3663968/how-to-validate-email-in-jquery

Steps for usage:
    1. Pseudo-code:
        On submit{
            if(username is blank){
                increase error count by 1, target the username box to indicate the error visually(red color) and also 
                target the <span> with written error message beside the name box.
            }else{
                <span> content is blank
                username box shown as green
            }

            if(email is blank){
                increase error count by 1, target the username box to indicate the error visually and also target the
                <span> with written error message beside the email box.
            }elseif (email box is not blank AND The content within the box is invalid){
                Increment error by 1
                Throw error message about invalid mail id. Targe box with visual error display.
            } else {
                <span> content is blank
                email box shown as green
            }

            if(checkbox is left unchecked){
                increase error count by 1, Populate <span> with appropriate error message beside the checkbox.
            }else{
                <span> content is blank
            }

            if(error count is greater than 0){
                prevent the form from getting submitted using preventdefault()
            }

        }
    2. If you still can't figureout, God help you! LOL!
*/

    $('#contact-form').submit(function (e) {
        const name = $("#username").val();
        const email = $("#email").val();
        const checkBox = $("#consent");
        let errors = 0;
        let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

        if (name == "") {
            errors = errors + 1;
            $("#username").css("border", "2px solid red");
            $("#error-username").css("color", "red");
            $("#error-username").html('You forgot to enter your name');
        }
        else {
            $("#username").css("border", "2px solid green");
            $("#error-username").html("");
        }

        if (email == "") {
            errors = errors + 1;
            $("#email").css("border", "2px solid red");
            $("#error-email").css("color", "red");
            $("#error-email").html('You forgot to enter your email');
        } else if ((email != "") & (!testEmail.test(email))) {
            errors = errors + 1;
            $("#email").css("border", "2px solid red");
            $("#error-email").css("color", "red");
            $("#error-email").html("Valid email please");
        }
        else {
            $("#email").css("border", "2px solid green");
            $("#error-email").html("");
        }

        if (checkBox.is(":not(:checked)")) {
            errors = errors + 1;
            $("#error-consent").css("color", "red");
            $("#error-consent").html('Please check the check box');
        } else {
            $("#error-consent").html("");
        }

        if (errors > 0) {
            e.preventDefault();
        }
    });// close function
});//close ready


