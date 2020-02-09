# www110 Assignment 1

Module | Assignment # | Title | Instructor | Date Assigned | Date Due | Time Due | Value
----- | ----- | ----- | ----- | ----- | ----- | ----- | -----
www110 | 2 | Superhero Sidekick Selection System | John Framingham | Friday December 6, 2019 | Monday December 16, 2019 | 9:00am | 60 Marks (60%)

## Brief
A recent client was so impressed with your work on their website, they want you to take on another project. As part of their continued engagement with fans of The League of Heroes, they want you to create a PHP based Superhero Sidekick Selection System.

A basic first page has been constructed for you (step_one.php) however you’ll need to duplicate and modify it to successfully complete the assignment. You should use this code as a starting point. You will have to rewrite the markup and CSS in order to satisfy your vision.

## Specification
The Superhero Sidekick Selection System is a 2-step process that uses PHP for all logic. In step one (step_one.php) you should use a form to ask users for their name, favourite superhero from The League of Heroes, and a short bio (64 characters or less).

If a user leaves any form field blank, they should receive an error message and not proceed to step two. Equally, if they try to enter malicious code into the form instead of real data, you must stop them from succeeding. _You should use PHP for this and not JavaScript/jQuery._

In step two (step_two.php) users should receive a short personalized message thanking them for volunteering as a Sidekick for The League of Heroes, which includes their {name} and {favourite superhero}. _A sample message has been provided for reference._

In step two, users should also be presented with 3 cards: one superhero, one nemesis, and one sidekick. Each card should feature a name, a short bio (64 characters or less) and a photo. Users should also be given the option to restart the process at step one.

## Deliverables
Your finished code should:
1.  Get the user’s name, favourite superhero and their short bio from the form in step one.
2.  Correctly handle form errors in step one, sanitizing all input in case of malicious code.
3.  Display a short message in step two that features the user’s and selected hero’s name.
4.  Display 3 different cards: _1 based on the user’s input (sidekick), 1 based on the user’s selection from a pool of 6 (superhero), and 1 from a random selection of 3 (nemesis)._
5.  Demonstrate good coding practices: _Bracket indentation, properly named variables, consistent spacing and placement of <?php ?> tags._
6.  Separate and link common elements such as the header: _Think about the impact of broken code when choosing from one of the four PHP include & require functions._

## In-class Learning Assessments (Quizzes)
The four quizzes taken in class account for the additional 20 marks available in www104. As such, 40% of your final A-F grade for this week’s assignment comes from the quizzes.

## Tips for Success
1.  Use the provided code as a starting point for your development - there’s images too!
2.  Code in any text editor that you are comfortable with. _You do not have to use SASS when creating the stylesheet._
3.  You do not have to integrate this into your existing League of Heroes website. _Feel free to take inspiration from it._

## Submission Instructions
You must submit your assignment by the due date and time, as specified. If not, your assignment will be considered incomplete.
1.  You must commit and push your finished files to the personalized GitHub repository for this assignment. You will receive an email invitation to create this. _Failure to upload your assignment here will result in a grade of zero._
2.  You should not upload this assignment to your student server space.

## Grading Breakdown
-	Harvesting and sanitizing the user’s name from step one into step two **(4 marks)**
-	Correctly implemented error handling for the form in step one **(6 marks)**
-	Display a personalized message in step two and a link to start again in step one **(10 marks)**
-	Successfully displaying a ‘sidekick card’ which shows information from the user **(10 marks)**
-	Successfully displaying a ‘nemesis card’ that’s randomized from a pool of 3 **(10 marks)**
-	Successfully displaying a ‘superhero card’ based on the user’s favourite hero **(10 marks)**
-	Demonstration of good coding practices **(6 marks)**
-	Inclusion of common elements through templating **(4 marks)**

## Code Validation
- Your file should output valid HTML, and be linked to a valid CSS stylesheet, as determined by the W3C validator. If you use invalid code, you must include a comment beside it explaining your decision. You will lose 2% for each uncommented validation error.
-	Your PHP code will not be validated \- it will either work as intended or not work at all.

### Late Policy
All late assignments will be given a grade of zero. For a full discussion please refer to the Late Policy at
http://webmaster.senecacollege.ca/class/docs/webmaster-late-assignment-policy.pdf

### Plagiarism
There are serious penalties for cheating and plagiarism offences and you are expected to be aware of our Academic Honesty Policy. For more information please refer to the Academic Policy at http://www.senecacollege.ca/academic-policy/acpol-09.html.

## Example Message
Howdy {name},
Thank you for volunteering as a sidekick for The League of Heroes - we’re excited to have you on our team. Our very fancy Superhero Sidekick Selection System has processed the information you provided, and we’re pleased to announce that you have been paired with your {favourite superhero}. Take a look below to see which nemesis you will be working to defeat.
May the forks be with you!
The League of Heroes

## Card Components

### Superhero
The names, images and bios could be stored in a variable as a ‘list’. Based on the user’s favourite hero selection, your script should read the correct superhero data from a pool of 6.
-	Name {favorite superhero’s name}
-	Image {favourite superhero’s image}
-	Bio {favorite superhero’s bio}

### Sidekick
The names and bio should be taken from the user’s input, after sanitization. The image choice is up to you - this will be the same image every time the script executes.
-	Name {name from user’s input}
-	Image {static image chosen by you}
-	Bio {bio from user’s input}

### Nemesis
The names, images and bios could be stored in a variable as a ‘list’. Your script should randomly pick one nemesis from a pool of 3.
-	Name {random nemesis name}
-	Image {random nemesis image}
-	Bio {random nemesis bio}