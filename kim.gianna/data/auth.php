<?php

function Auth() {
	$host = "localhost";
	$user = "gianna_wnm608";
	$pass = "password0501";
	$dbname = "gianna_wnm608";
	return [
      "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
      $user,
      $pass
   ];
}


