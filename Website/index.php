<!DOCTYPE html>
<html lang="en-ca">
<head>
	<title>ELORyze Search</title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" ></meta>

	<!-- CSS -->
	<link href="./css/bootstrap.css" rel="stylesheet" />
	<link href="./css/custom.css" rel="stylesheet" />

	<!-- Favicons -->
	<link rel="icon" href="favicons/favicon-new.ico">
	<link rel="apple-touch-icon" sizes="64x64" href="favicons/favicon-new.png">

	<!-- Google Analytics Script -->
	<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-54334717-1', 'auto');
		  ga('send', 'pageview');
	</script>

</head>

<body class=" center main-font">
<h1> 
<?php 
	$val = mt_rand(1,6);
	switch ($val) {
		case 1: 
			echo 'An all new way to determine your skill!';
			break;
		case 2:
			echo 'An all new League of Legends Search Engine!';
			break;
		case 3: 
			echo 'Are you really better than your friends? Your ISE will tell!';
			break;
		case 4: 
			echo 'The surefire way to compare your League of Legends skill level!';
			break;
		case 5:
		default:
			echo 'An all new League of Legends search experience';
			break;
		case 6:
			echo 'Joon is gay';
			break;
	}
 ?>
	</h1>


    <div class="banner-center-main"></div>
	<hr class="line-dark">	


	<div class="search-input">
		<form action="searchResults.php" method="get">
			<span>
				<div class="enter-name">Summoner Statistics:</div>

				<input type="text" class="search-query" name="query" id="query" placeholder="Summoner Name"/>

				<button type="submit" id="search_button">
				Summoner Statistics
		            <img src="./images/arrow.png" style="height:.8em;" />
		        </button>
			</span>
		</form>
	</div>


</body>
</html>
