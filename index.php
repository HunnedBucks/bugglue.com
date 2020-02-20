<?php 

$url =  'http://localhost:8888/php/template.php?PAGE=home';
$contents = file_get_contents($url);
// If $contents is not a boolean FALSE value.
if($contents !== false){
	echo $contents;
}

?>
