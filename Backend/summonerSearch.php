
<!DOCTYPE html>
<html>
<head>
<title> Refer to skype if you do not know what this is for </title>
</head>

<body>
    <?php 



    //Create connection
    $link = mysql_connect("eloryzenet.ipagemysql.com", "eloryzenet", "Poimk489!"); 
    //Check connection
    if (!$link) { 
        die('Could not connect: ' . mysql_error()); 
    } 
    echo 'Connected successfully to database: ise_database_test1 !'; 
    echo "<br> <br>";
    mysql_select_db(ise_database_release1) or die(mysql_error()); 
	

    
    //Grab the URL query
    $urlQuery = "SELECT * FROM `na_ladder` WHERE summonerId=" . $_GET["summonerId"];
	//Execute the query
	$queryExecute = mysql_query($urlQuery) or die(mysql_error()); 



    //Check query, then display the summonerId, the ISE, and the time of last update
    $info = mysql_fetch_array($queryExecute);
    if(!$info) {echo "This Summoner does not exist in our database yet!";}
    else{
        print ("<b>SummonerId:</b> ".$info['summonerId'] . "<br>"); 
        print ("<b>ISE:</b> ".$info['ELO'] . "<br>"); 
        print ("<b>Time of last update:</b> ".$info['last_update'] . "<br>"); 
    }

    

    //Close connection
    mysql_close($link);



    ?>
</body>
</html>
