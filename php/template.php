<!DOCTYPE html>
<html lang='en'>
<head>
	<?php include($_SERVER['DOCUMENT_ROOT'] . '/php/misc-markup/head.php'); ?>
</head>
<body>
	<header>
		<?php include($_SERVER['DOCUMENT_ROOT'] . '/php/misc-markup/header.php'); ?>
	</header>
	<main>
		<?php include($_SERVER['DOCUMENT_ROOT'] . '/php/pages/' . $_GET["PAGE"] . '.php'); ?>
	</main>
	<footer>
		<?php include($_SERVER['DOCUMENT_ROOT'] . '/php/misc-markup/footer.php'); ?>
	</footer>
</body>
</html>