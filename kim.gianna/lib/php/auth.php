<?php

function MYSQLIAuth() {
	return [
		"localhost",  //mysql host
		"gianna_wnm608", //mysql user name
		"tqwtwg1223", //mysql user password
		"gianna_wnm608", //mysql database name
	];
}

function PDOAuth() {
	return [
		"mysql:host=localhost;dbname=gianna_wnm608",  // host and database name
		"gianna_wnm608", //mysql user name
		"tqwtwg1223", //mysql user password
		[PDO::MYSQL_ATTR_INIT_COMMAND=>"SET NAMES utf8"]
	];
}