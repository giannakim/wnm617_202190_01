
const resultQuery = async (options) => {
	//destructure
	let {result,error} = await query(options);
	if(error) {
		throw(error);
		return;
	}
	return result;
}


const ListPage = async() => {
		let animals = await resultQuery({
			type:'animals_by_user_id',
			params:[sessionStorage.userId]
		});

		makeAnimalListSet(animals);
}

const RecentPage = async() => {
	let result = await resultQuery({
		type:'recent_animal_locations',
		params:[sessionStorage.userId]
	});

	let animals = result.reduce((r,o)=>{
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	},[]);

	let mapEl = await makeMap("#page-recent .map");
	makeMarkers(mapEl,animals);

	let {infoWindow,map,markers} = mapEl.data();
	markers.forEach((o,i)=>{
		o.addListener("click",function(){
			/*Simple Example */
			//sessionStorage.animalId = animals[i].animal_id;
			//$.mobile.navigate("#page-cafe-profile")

			/*InfoWindow Example */
			infoWindow.open(map,o);
			infoWindow.setContent(makeAnimalPopup(animals[i]))

			/*Activate Example*/
			//$("#recent-drawer")
			//	.addClass("active")
			//	.find(".modal-body")
			//	.html(makeAnimalPopup(animals[i]))
		})
	});
}


const UserProfilePage = async() => {
	let result = await resultQuery({
		type:'user_by_id',
		params:[sessionStorage.userId]
	});
	let [user] = result;
	$("#page-user-profile [data-role='main']").html(makeUserProfile(user));
}

const UserEditPage = async() => {
	let user_result = await resultQuery({
		type:'user_by_id',
		params:[sessionStorage.userId]
	});

	let [user] = user_result;

	$("#user-edit-form .fill-parent").html(
		makeUserFormInputs(user,"user-edit")
	);
}




const CafeProfilePage = async() => {
	let animal_result = await resultQuery({
		type:'animal_by_id',
		params:[sessionStorage.animalId]
	});

	let [animal] = animal_result;
	$(".cafe-profile-top>img").attr("src",animal.img);
	$(".cafe-profile-middle .cafename").html(animal.name);
	$(".cafe-profile-middle .cafetype").html(animal.type);
	$(".cafe-profile-middle .cafedrink").html(animal.breed);
	$(".cafe-profile-middle .description").html(animal.description);
	

	
	let locations_result = await resultQuery({
		type:'locations_by_animal_id',
		params:[sessionStorage.animalId]
	});


	let mapEl= await makeMap("#page-cafe-profile .map-sm");
	makeMarkers(mapEl,locations_result);
}





const CafeEditPage = async() => {
	let animal_result = await resultQuery({
		type:'animal_by_id',
		params:[sessionStorage.animalId]
	});

	let [animal] = animal_result;

	$("#cafe-edit-form .fill-parent").html(
	makeAnimalFormInputs(animal,"cafe-edit")
	);

}

const CafeAddPage = async() => {
	$("#cafe-add-form .fill-parent").html(
		makeAnimalFormInputs({
		name:'',
		type:'',
		breed:'',
		description:''
	  },"cafe-add")
	);
}






const LocationSetLocationPage = async() => {
   let mapEl = await makeMap("#page-location-set-location .map");
   makeMarkers(mapEl,[]);

   mapEl.data("map").addListener("click",function(e){
      $("#location-lat").val(e.latLng.lat())
      $("#location-lng").val(e.latLng.lng())
      makeMarkers(mapEl,[e.latLng]);
   })
}


const LocationChooseCafePage = async() => {
   let result = await resultQuery({
      type:'animals_by_user_id',
      params:[sessionStorage.userId]
   });

   console.log(result)

   $(".location-animal-choice-select").html(
      makeAnimalChoiceSelect({
         animals:result,
         name:'location-animal-choice-select'
      })
   );
	
}



