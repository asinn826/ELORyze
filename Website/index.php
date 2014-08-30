<!DOCTYPE html>
<html lang="en-ca">
<head>
	<title>ELORyze</title>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" ></meta>

	<!-- CSS -->
	<link href="./css/bootstrap.css" rel="stylesheet" />
	<link href="./css/custom.css" rel="stylesheet" />

	<!-- Favicons -->
	<link rel="icon" href="favicons/favicon-new.ico">
	<link rel="apple-touch-icon" sizes="64x64" href="favicons/favicon-new.png">

</head>

<body class=" center main-font">
	<h1>An all new way to determine your skill!</h1>
    <div class="banner-center-main jumbotron">
	</div>

	<hr class="line-dark">	

	<div class="search-input">
		<form action="searchResults.html" method="get">
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

	<div class="search-input">
		<form action="summoner.php" method="get">
			<span>
				<div class="enter-name">Summoner Individual Skill ELO:</div>

				<input type="text" class="search-query" name="query" id="query" placeholder="Summoner ID"/>

				<button type="submit" id="search_button">
				What's my ISE?
		            <img src="./images/arrow.png" style="height:.8em;" />
		        </button>
			</span>
		</form>
	</div>

</body>
</html>
