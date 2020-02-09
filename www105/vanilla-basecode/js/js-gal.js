//Requirement2

/*a) Change the big image and title with respect to the mouseover on the thumbnails. This functionality shouldn't break
      even when a new image is added to the gallery.

*/


/* I have declared 3 variables namely:
    1. titleCaption (Populate the caption for the big image accordingly. #art-title is targetted using document.getElementById)
    2. bigImage (Contains the big image. #big-image is targetted using document.getElementById)
    3. galleryItems (Contains all the "li" elements in #gallery. Firstly I am targeting the #gallery using getElementById and
        then I am targetting the "li" using getElementsByTagName)
*/

let titleCaption = document.getElementById("art-title");
let bigImage = document.getElementById("big-img");
let galleryItems = document.getElementById("gallery").getElementsByTagName("li");

/* In the statement below I am adding an image dynamically to the empty <li> in the #gallery. Empty <li> tag has been
    given an ID as li6. As I need to pump the image into an element, I am targetting the content within the element.
    Hence, I have targetted #li6 using getElementById and it's content by innerHTML clause. I have pumped the content
    with the required details like src,alternate text,title in the <img> tag. The <img> tag is enclosed in <a> tag because
    as per the requirement when I hover on the thumbnail image, the big-image area must be populated with the large version
    of the thumbnail image.
*/

//Requirement 2b - adding new image without altering the existing solution.

document.getElementById("li6").innerHTML="<a href='images/img6_large.jpg'><img src='images/img6_thumb.jpg' alt='img6' title='Coffee mug'></a>";

/* I have created a for loop, to iterate through all the "li"'s in #gallery, Inlcuding the one just added dynamically 
    in the code above. I have declared an variable "i" and assigned a value 0 inorder to iterate through the list from 
    the 1st element(index 0). I have used the condition that this loop must run galleryItems.length times. Which means
    the loop will run for the number of "li"s present in the #gallery times. I have used an increment of 1 for every 
    iteration.

    I have declared an event "onmouseover" on the galleryItems. If this event occurs, I mean to say If the user hovers over
    the thumbnail image then it would trigger an anonymous function declared in the code. This is the function which will
    populate the corresponding big image and captions in the required areas.

    I am declaring an array "niceImage" which will hold the content present in the <img> tags which are present in all
    the <li>s in #gallery. <img> tags are targetted using getElementsByTagNames method. [0] will set the array to
    begin from index 0.)

    I am assigning the "alt" data from the array into bigImage.alt attribute and "title" data to titleCaption.innerHTML. This 
    will pump the content into titleCaption area and assign the attribute alt for the bigImage.
    
    Inorder to populate the "src" attribute of bigImage I am using string interpolation. I am interpolating image/ + content
    in bigImage.alt + _large.jpg. This will create a path for the respective big image.

    Going through the array examples covered in class helped me to come up with the solution partially.
*/

 for (let i = 0; i < galleryItems.length; i++) {
    galleryItems[i].onmouseover = function () {
        let niceImage = this.getElementsByTagName("img")[0];
        bigImage.alt = niceImage.alt;
        titleCaption.innerHTML = niceImage.title;
        bigImage.src = `images/${bigImage.alt}_large.jpg`;
    };
}

















