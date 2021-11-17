
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
	let result = await resultQuery({
		type:'animals_by_user_id',
		params:[sessionStorage.userId]
	});

	$("#page-list .cafelist").html(makeAnimalList(result));
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
}


const UserProfilePage = async() => {
	let result = await resultQuery({
		type:'user_by_id',
		params:[sessionStorage.userId]
	});
	let [user] = result;
	$("#page-user-profile [data-role='main']").html(makeUserProfile(user));
}


const CafeProfilePage = async() => {
	let animal_result = await resultQuery({
		type:'animal_by_id',
		params:[sessionStorage.animalId]
	});

	let [animal] = animal_result;
	$(".cafe-profile-top img").attr("src",animal.img);
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
	$(".img-cafe-profile img").attr("src",animal.img);

	$("#cafe-edit-name").val(animal.name);
	$("#cafe-edit-type").val(animal.type);
	$("#cafe-edit-breed").val(animal.breed);
}

