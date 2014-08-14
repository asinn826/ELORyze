<?php

/* Connecting, selecting database */
/* Please change the values below to connect to the users database...*/

$mysql_host="eloryzenet.ipagemysql.com";
$mysql_user="eloryzenet";
$mysql_password="Poimk489!";
$my_database = "ise_database_test1";
$table_name = " ISE_NA_Ladder";



/*Please Do not change anything below this line */

$link = mysql_connect("$mysql_host", "$mysql_user", "$mysql_password")
   or die("Could not connect : " . mysql_error());
echo "Connected successfully";
mysql_select_db("$my_database") or die("Could not select database");

/* Performing SQL query */
$query = "SELECT * FROM ".$table_name;
$result = mysql_query($query) or die("Query failed : " . mysql_error());
echo "<br> Information from table ".$table_name;
/* Printing results in HTML */
echo "<table>\n";
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
   echo "\t<tr>\n";
   foreach ($line as $col_value) {
       echo "\t\t<td>$col_value</td>\n";
   }
   echo "\t</tr>\n";
}
echo "</table>\n";

/* Free resultset */
mysql_free_result($result);

/* Closing connection */
mysql_close($link);
?> 