<?php   $title = "Sidekick Details| The League of Heroes";
        $description = "Superhero Sidekick Fixtures shows the details of your next battle."; ?>

<?php require_once "includes/header.php" ?>

<?php $banner_title = "Superhero Sidekick Fixtures";?>

<header>
	<div class="m-head">
		<div class="m-title">
			<div class="m-banner">
				<img src="images/the-league-of-heroes-logo.svg" alt="League of heroes Logo"
                       title="The league of Heroes logo" class="m-logo">
                <h1><?php echo $banner_title; ?></h1> 
            </div>
            <nav class="m-navigation">
			    <ul>
				    <li><a href="step_one.php">Go back to Step1</a></li>
			    </ul>
		    </nav>  
	    </div>
	</div>
</header>

<?php 
$special_chars_1 = "/[^a-z\-,.]/i";
$special_chars_2 = "/[^a-z0-9\-,.]/i";

//Sanitization function
function clean($data, $special_chars) {
    $data = strip_tags($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    $data = preg_replace($special_chars, " ", $data);
    return $data;
}

// Check user input for errors
if ((!empty($_POST['user_name'])) && (!empty($_POST['user_hero'])) && (!empty($_POST['user_bio']))) {
    $name = clean($_POST['user_name'],$special_chars_1);
    $hero = $_POST['user_hero'];
    $bio = clean($_POST['user_bio'],$special_chars_2);
   
} else {
	// Redirect the user back to the form and display a user input error message
    header('Location: step_one.php?form=error');
    exit;
}

//creating Superhero Associative Array
$super_hero = [
    ['brainio' => 'Let smartness be your super power today!'],
    ['clamp' => 'Superostars wait in line!'],
    ['dr-goliath' => 'I am here to fight for truth and justice!'],
    ['power-maiden' => 'To the pain, to the Victory!'],
    ['ironjaw' => 'I smash it all, infinity and beyond!'],
    ['shroud' => 'Forgiveness is divine, not for me!']
];

//creating Nemesis List
$nemesis = [
    ['vname' => 'Spare' , 'src' => 'images/character-headshots/spare.png' , 'bio' => 'Nice to see you. Get ready to loose now!', 'alt' => 'Spare\'s image'],
    ['vname' => 'Tricolops' , 'src' => 'images/character-headshots/tricolops.png' , 'bio' => 'Think you know me? Think again!', 'alt' => 'Tricolop\'s image' ],
    ['vname' => 'Shriek' , 'src' => 'images/character-headshots/shriek.png' , 'bio' => 'This is my best face forward!','alt' => 'Shriek\'s image' ],
];
?>

<div class="container-fixed">
    <?php echo "<p> Hello, <b>".ucfirst($name). "</b>! </p>" ?>
    <?php $hero = clean($_POST['user_hero'],$special_chars_1);?>
    <p>Thank you for volunteering as a sidekick for The League of Heroes. It's our pleasure to have you on our team. 
        Our Superhero Sidekick Selection System has processed the data provided by you and we are happy to inform you that
        you have been paired alongside with your favourite superhero <b><?php echo ucwords(str_replace("_", " ", $hero)) ?></b>. Below are the 
        details of the nemesis whom you will be fighting to survive.</p>
    <p> May the force be with you. Shine Like a Star!</p>
    <p>-The League of Heroes</p>
</div>

<div class="container-fixed card-container">
    <div class="card">
        <h2 class="c-h2-card"><b>Sidekick</b></h2>
        <img src="images/character-headshots/super-duper-man.png" alt="Avatar of super duperman">
        <div class="container-card">
            <?php echo "<h3><b>" . ucwords($name) . "</b></h3>" ?>
            <?php echo "<p>" . ucfirst($bio) . "</p>" ?>
        </div>
    </div>

    <div class="card">
        <?php   $hero = $_POST['user_hero'];
                $hero_name_sanitize = str_replace("_", "-", $hero);?>
        <h2 class="c-h2-card"><b>Superhero</b></h2>
        <img src= "<?php echo "images/character-headshots/{$hero_name_sanitize}.png"; ?>" alt= "avatar">

        <div class="container-card">
            <?php echo "<h3>". ucwords(str_replace("_", " ", $hero)). "</h3>" ?>  
            <?php foreach($super_hero as $item){  
                foreach($item as $key=> $value){
                    if ($key == $hero_name_sanitize){     
                    echo "<p>{$value}</p>";               
                    }
                }         
            }?>
         </div>
    </div>

    <div class="card">
        <h2 class="c-h2-card"><b>Nemesis</b></h2>
        <?php $random = rand(0,2);
            $ran_content = $nemesis[$random]; ?>
        <img src=" <?php echo $ran_content['src']; ?>" alt="<?php echo $ran_content['alt'];?>">
        <div class="container-card">
            <h3><b> <?php echo $ran_content['vname'] ; ?> </b></h3>
            <p><?php echo $ran_content['bio'] ; ?></p>
        </div>
    </div>
</div>

<?php require_once "includes/footer.php" ?>

