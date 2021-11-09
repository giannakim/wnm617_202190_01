
const ListPage = async() => {
	//destructure
	let {result,error} = await query({type:'animals_by_user_id', params:[sessionStorage.userId]});


	if(error) {
		console.log(error);
		return;
	}


	console.log(result,error);

	$("#page-list .cafelist").html(makeAnimalList(result));
}

const RecentPage = async() => {
	console.log("honk")
}

const UserProfilePage = async() => {
	let {result,error} = await query({type:'user_by_id', params:[sessionStorage.userId]});
	if(error) {
		console.log(error);
		return;
	}
	$("#page-list .cafelist").html(makeAnimalList(result));
}

const CafeProfilePage = async() => {
	console.log("honk")
}