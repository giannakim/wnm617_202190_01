<?php


include "../lib/php/functions.php";
include "../parts/templates.php";



$empty_product = (object)[
    "name"=>"tokyo4564",
    "description"=>"From 4564 street in Tokyo, Japan",
    "price"=>"38",
    "category"=>"fragrance1",
    "thumbnail"=>"4564.jpg",
    "images"=>"main4564.jpg"
];



//LOGIC



$conn = makePDOConn();
try {
switch(@$_GET['action']) {
    case "update":
        $statement = $conn->prepare("UPDATE
        `products`
        SET
        	`name`=?,
        	`price`=?,
        	`category`=?,
        	`description`=?,
        	`thumbnail`=?,
        	`images`=?,
        	`date-modify`=NOW()
        WHERE `id`=?
        ");
        $statement->execute([
        	$_POST['product-name'],
            $_POST['price'],
            $_POST['category'],
            $_POST['description'],
            $_POST['thumbnail'],
            $_POST['images'],
            $_GET['id']
        ]);
		header("location:{$_SERVER['PHP_SELF']}?id={$_GET['id']}");
		break;
    case "create":
        $statement = $conn->prepare("INSERT INTO
        `products`(
            `name`,
            `price`,
            `category`,
            `description`,
            `thumbnail`,
            `images`,
            `date-create`,
            `date-modify`
        )
        VALUES
        (?,?,?,?,?,?,NOW(),NOW())
        ");
        $statement->execute([
            $_POST["product-name"],
			$_POST["price"],
			$_POST["category"],
			$_POST["description"],
			$_POST["thumbnail"],
			$_POST["images"]
				
        ]);
        $id = $conn->lastInsertId();

        header("location:{$_SERVER['PHP_SELF']}?id=$id");
        break;
    case "delete":
        $statement = $conn->prepare("DELETE FROM `products` WHERE id=?");
        $statement->execute([$_GET['id']]);

        header("location:{$_SERVER['PHP_SELF']}");
        break;
}

}catch(PDOException $e) {
   die($e->getMessage());
}












// TEMPLATES

function productListItem($r,$o) {
return $r . <<<HTML
<div class="card soft2">
	<div class="display-flex">
		<div class="flex-none images-thumbs"><img src='img/thumbnail/$o->thumbnail'></div>

		<div class="flex-stretch" style="padding:1em">$o->name</div>

		<div class="flex-none">
			<a href="{$_SERVER['PHP_SELF']}?id=$o->id" class="form-button-etc2">Edit</a>
		</div>
	</div>

</div>
HTML;
}




function showProductPage($o) {


$addoredit = $id == "new" ? "Add" : "Edit";
$createorupdate = $id == "new" ? "create" : "update";
$images = array_reduce(explode(",", $o->images),function($r,$o){return $r."<img src='img/thumbnail/$o'>";});


//heredoc
$display = <<<HTML

<div>
	<h2>$o->name</h2>
	<div class="form-control">
		<label class="form-label">Price</label>
		<span>&dollar;$o->price</span>
	</div>

	<div class="form-control">
		<label class="form-label">Category</label>
		<span>$o->category</span>
	</div>

	<div class="form-control">
		<label class="form-label">Description</label>
		<span>$o->description</span>
	</div>

	<div class="form-control">
		<label class="form-label">Thumbnail</label>
		<span class="images-thumbs"><img src='img/thumbnail/$o->thumbnail'></span>
	</div>

	<div class="form-control">
		<label class="form-label">Other Images</label>
		<span class="images-thumbs">$images</span>
	</div>
</div>

HTML;


$form = <<<HTML


<form method="post" action="{$_SERVER['PHP_SELF']}?id=$id&action=$createorupdate">

	<h2>$addoredit Product</h2>

	<div class="form-control">
		<label class="form-label" for="product-name">Name</label>
		<input class="form-input" name="product-name" id="product-name" type="text" value="$o->name" placeholder="Enter the product name">
	</div>

	<div class="form-control">
		<label class="form-label" for="product-price">Price</label>
		<input class="form-input" name="product-price" id="product-price" type="Number" min="0" max="1000" step="0.01" value="$o->price" placeholder="Enter the product price">
	</div>
	
	<div class="form-control">
		<label class="form-label" for="product-category">Category</label>
		<input class="form-input" name="product-category" id="product-category" type="text" value="$o->category" placeholder="Enter the product category">
	</div>

	<div class="form-control">
		<label class="form-label" for="product-description">Description</label>
		<textarea class="form-input" name="product-description" id="product-description" placeholder="Enter the product description">$o->description</textarea>
	</div>

	<div class="form-control">
		<label class="form-label" for="product-thumbnail">Thumbnail</label>
		<input class="form-input" name="product-thumbnail" id="product-thumbnail" type="text" value="$o->thumbnail" placeholder="Enter the product thumbnail">
	</div>

	<div class="form-control">
		<label class="form-label" for="product-images">Other Images</label>
		<input class="form-input" name="product-images" id="product-images" type="text" value="$o->images" placeholder="Enter the product images">
	</div>



	<div class="form-control">
        <input class="form-button" type="submit" value="Submit">
    </div>
</form>
HTML;

$output = $id == "new" ? "<div class='card medium'>$form</div>" :
	"<div class='grid gap'>
		<div class='col-xs-12 col-md-7'><div class='card soft2'>$display</div></div>
		<div class='col-xs-12 col-md-5'><div class='card soft2'>$form</div></div>
	</div>
	";

$delete = $id == "new" ? "" : "<a href='{$_SERVER['PHP_SELF']}?id=$id&action=delete'>Delete</a>";


echo <<<HTML
<div class="card medium">
	<nav class="display-flex">
		<div class="flex-stretch"><a href="{$_SERVER['PHP_SELF']}">Back</a></div>
		<div class="flex-none">$delete</div>
	</nav>
</div>
$output
HTML;
}











?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Product Admin Page</title>
    
    <?php include "../parts/meta.php"; ?>
</head>

<body>

	<header class="navbar">
		<div class="container display-flex">
			<div class="flex-none">
				<h1>Product Admin</h1>
			</div>
			<div class="flex-stretch"></div>
			<nav class="nav nav-flex flex-none">
				<ul>
					<li><a href="<?= $_SERVER['PHP_SELF'] ?>">Product List</a></li>
					<li><a href="<?= $_SERVER['PHP_SELF'] ?>?id=new">Add New Product</a></li>
				</ul>
			</nav>
		</div>
	</header>

	
	<div class="container">

			<?php

			if(isset($_GET['id'])) {
				showProductPage(
					$_GET['id']=="new" ?
						$empty_product :
						makeQuery(makeConn(),"SELECT * FROM `products` WHERE `id`=".$_GET['id'])[0]
					);

			
			} else {

				?>
				<h2>Product List</h2>
			
				
				<?php

				$result = makeQuery(makeConn(),"SELECT * FROM `products` ORDER BY `date_create`DESC");

				echo array_reduce($result,'productListItem');


				?>


			<?php } ?>

			
			
	</div>
</body>

