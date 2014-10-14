<!DOCTYPE html>
<html lang="en-ca">
<head>
	<title>ELORyze Search Results</title>
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

<body class="main-font">

<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="http://www.eloryze.com">
      	<img src="./images/finalbanner.png" height="250%" >
      </a>
    </div>

<!--     <div class="troll-text">
    Joon is gay
    </div> -->

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse float-right" id="bs-example-navbar-collapse-1">
      <form action="searchResults.php" method="get" class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" name="query" id="query" placeholder="Summoner Name">
        </div>
        <button type="submit" class="btn btn-default navbar-btn">
        Search Again <img src="./images/arrow.png" style="height:.5em;" />
        </button>
      </form>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
	

	<div class="banner-container">
		<div id="summoner-pic" class="summoner-pic"></div>
		<div id="summoner-level" class="summoner-level"></div>
	</div>
	

	
	<div id="summoner-info" class="center">
	<!-- <hr class="line-dark">	
	<h2><strong>Summoner info</strong></h2>
	<hr class="line-dark"> -->
		<div id="results"></div>
		<div id="summonerId"></div>
		<div id="summonerIconNum"></div>
	</div>

	<!-- <div id="skillLevel" class="center"></div> -->

	<div id="ise-info" class="center">
		<hr class="line-dark">	
		<h2><strong>Individual Skill Level</strong></h2>
		<hr class="line-dark">
		<div id="skillLevel"></div>
		<div class="left-align">
		<ul>
			<li>Something</li>
			<li>Something else</li>
		</ul>
		</div>
	</div>

	<div class="col-md-4">
		<div id="ranked-stats" class="center">
		<hr class="line-dark">	
		<h2><strong>Your Season 4 Ranked Stats</strong></h2>
		<hr class="line-dark">
			<div id="rankedwins"></div>
			<div id="rankedlosses"></div>
			<div id="rankedkills"></div>
			<div id="rankedassists"></div>
		</div>
	</div>
	<div class="col-md-4">
		<div id="norms-stats" class="center">
		<hr class="line-dark">	
		<h2><strong>Your Season 4 Normals Stats</strong></h2>
		<hr class="line-dark">
			<div id="normsWins"></div>
			<div id="normsKills"></div>
			<div id="normsCS"></div>
			<div id="normsAssists"></div>
		</div>
	</div>

<br><br><br><br><br><br><br><br><br><br><br><br>
	<div class="footer">
      <div class="center">
        <p class="text-muted">Copyright &copy; 2014 ELORyze. Not to be copied, used, or revised without explicit written permission from the copyright owner.</p>
      </div>
    </div>

<!-- JavaScript -->
<script src="./js/summonerinfo-joon.js"></script>

</body>
</html>