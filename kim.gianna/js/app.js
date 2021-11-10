//DOCUMENT READY

$(()=>{


	checkUserId();

	//Event Delegation
	$(document)


	.on("pagecontainerbeforeshow",function(event, ui){
		//PAGE ROUTING
		switch(ui.toPage[0].id) {
			case "page-recent": RecentPage(); break;
			case "page-list": ListPage(); break;
			case "page-user-profile": UserProfilePage(); break;
			case "page-cafe-profile": CafeProfilePage(); break;
		}
	})


	//FORM SUBMITS
	.on("submit","#signin-form",function(e) {
		e.preventDefault();


		checkSigninForm();
	})


	.on("submit","#list-add-form",function(e) {
		e.preventDefault();
	})



	//ANCHOR CLICKS
	.on("click",".js-logout",function(e) {
		e.preventDefault();
		sessionStorage.removeItem("userId");
		checkUserId();
	})

	.on("click",".animal-jump",function(e) {
		if(!$(this).data("id")) throw("No Id on element");
		sessionStorage.animalId = $(this).data("id")
		$.mobile.navigate("#page-cafe-profile");
	})

	.on("click","[data-activate]",function(e){

		let target = $(this).data("activate");
		$(target).addClass("active");
	})

	.on("click","[data-deactivate]",function(e){
		e.preventDefault();
		let target = $(this).data("deactivate");
		$(target).removeClass("active");
	})

	.on("click","[data-toggle]",function(e){
		e.preventDefault();
		let target = $(this).data("toggle");
		$(target).toggleClass("active");
	})


	 $("[data-template]").each(function(){
    let target = $(this).data("template");
    $(this).html($(target).html());
  	})



	//NAV//
	$({
		"#page-recent":".nav-icon-set li:nth-child(1)",
		"#page-list":".nav-icon-set li:nth-child(2)",
		"#page-user-profile":".nav-icon-set li:nth-child(3",
	}[location.hash]).addClass("active")



});