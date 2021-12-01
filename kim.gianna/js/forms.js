
const animalAddForm = async () => {
	let name = $("#cafe-add-name").val();
	let type = $("#cafe-add-type").val();
	let breed = $("#cafe-add-breed").val();
	let description = $("#cafe-add-description").val();


	let r = await query({
		type: 'insert_animal',
		params: [sessionStorage.userId,name,type,breed,description]
	});

	if(r.error) throw(r.error);

	sessionStorage.animalId = r.id;
	history.go(-1);
}


const animalEditForm = async () => {
	let name = $("#cafe-edit-name").val();
	let type = $("#cafe-edit-type").val();
	let breed = $("#cafe-edit-breed").val();
	let description = $("#cafe-edit-description").val();


	let r = await query({
		type: 'update_animal',
		params: [name,type,breed,description,sessionStorage.animalId]
	});

	if(r.error) throw(r.error);


	history.go(-1);
}








const userAddForm = async () => {
   let name = $("#user-add-name").val();
   let type = $("#user-add-type").val();
   let breed = $("#user-add-breed").val();

   let r = await query({
      type:'insert_user',
      params:[name,type,breed,description,sessionStorage.animalId]
   });

   if(r.error) throw(r.error);

   history.go(-1);
}

const userEditForm = async () => {
   let username = $("#user-edit-username").val();
   let name = $("#user-edit-name").val();
   let email = $("#user-edit-email").val();

   let r = await query({
      type:'update_user',
      params:[username,name,email,sessionStorage.userId]
   });

   if(r.error) throw(r.error);

   history.go(-1);
}

const userEditPasswordForm = async () => {
   let password = $("#user-password-initial").val();
   let confirm = $("#user-password-confirm").val();

   if(password!==confirm) throw ("Passwords don't match")

   let r = await query({
      type:'update_user_password',
      params:[password,sessionStorage.userId]
   });

   if(r.error) throw(r.error);

   history.go(-1);
}

const locationAddForm = async () => {
   let animal = $("#location-animal-choice").val();
   let lat = $("#location-lat").val();
   let lng = $("#location-lng").val();
   let description = $("#location-description").val();

   let r = await query({
      type:'insert_location',
      params:[animal,lat,lng,description]
   });

   if(r.error) throw(r.error);

   history.go($("#location-navigateback").val());
}








