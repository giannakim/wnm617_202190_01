

const listItemTemplate = templater(o=>`
<a class="col-xs-12 col-md-4" href="notes/product_item.php?id=${o.id}">
	<figure class="figure product">
		<img src="img/thumbnail/${o.thumbnail}"alt="" >
		<figcaption>
			<div>${o.name}</div>
			<div>&dollar;${o.price}</div>
		</figcaption>
	</figure>
</a>

`);