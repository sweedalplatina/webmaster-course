<?php   $title = "Superhero Sidekick Selection System | The League of Heroes";
        $description = "Superhero Sidekick Selection System helps the user to insert the details of thier favourite superheroes
		from The League Of Super Heroes."; ?>

<?php require_once "includes/header.php" ?>

<?php $banner_title = "Superhero Sidekick Selection System";?>

<header>
	<div class="m-head">
		<div class="m-title">
			<div class="m-banner">
				<img src="images/the-league-of-heroes-logo.svg" alt="League of heroes Logo"
					   title="The league of Heroes logo" class="m-logo">
				<h1><?php echo $banner_title; ?></h1>
			</div>	
		</div>
		<!-- Header- banner -->
		<div class="m-banner-img">
		</div>
	</div>
</header>

<main>
	<div class="container-fixed">
		<div class="welcome">
			<p><b>Welcome to The League of Heroes!</b></p>
			<p> This is a Superhero Sidekick Selection System. Please provide your name, your
			favourite Superhero who would be your campanion in this quest and a short description about yourself
			in order to volenteer in this sidekick.</p>
			<p>Gear Up to become the Ultimate Warrior!</p>
		</div>

		<form action="step_two.php" method="post">
			<?php if (isset($_GET['form']) && ($_GET['form'] == 'error')) { ?>
				<div class="input-row">
					<div class="alert">
						<p class="alert-text">Sorry, we can't turn you into a crime-fighting sidekick without all 
							of the information. Try again!</p>
					</div>
				</div>
			<?php } ?>

			<div class="input-row">
				<label for="first_name">Sidekick Name:</label>
				<input type="text" name="user_name" id="first_name" placeholder="Enter your first name">
			</div>
			<div class="input-row">
				<label for="first_name">Favourite Hero:</label>
				<select class="input-selection" name="user_hero">
					<option value="brainio">Brainio</option>
					<option value="clamp">Clamp</option>
					<option value="dr_goliath">Dr Goliath</option>
					<option value="power_maiden">Power Maiden</option>
					<option value="ironjaw">Ironjaw</option>
					<option value="shroud">Shroud</option>
				</select>
			</div>
			<div class="input-row">
				<label for="bio">Sidekick Bio:</label>
				<textarea name="user_bio" id="bio" maxlength="64" placeholder="Enter your bio"></textarea>
			</div>
			<div class="input-row">
				<input type="submit" value="Select Sidekick">
				<input type="reset" value="Reset">
			</div>
		</form>
	</div>
</main>

<?php require_once "includes/footer.php" ?>
