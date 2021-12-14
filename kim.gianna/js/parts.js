
const makeAnimalList = templater((o)=> `
<div class="cafelist-card">
	<a href="#" class="display-flex animal-jump" data-id="${o.id}">
		<div class="cafelist-img">
			<img src="${o.img}" alt="">
		</div>
		<div class="cafelist-item">
			<div class="cafelist-item-name">${o.name}</div>
			<div class="cafelist-item-type">${o.type}</div>
			<div class="cafelist-item-breed">${o.breed}</div>
		</div>
	</a>
</div>
`);


const makeUserProfile = (o) => `

<div class="main">
	<div class="overscroll fill-parent main-detail">
		
		<div class="cafe-profile-top">
			<img src="${o.img}" class="user-profile-image" alt="">
			<div class="floater bottom right">
				<a href="#page-user-upload" style="font-size: 1.3em;">
					<img src="img/icon/pencil.svg" class="icon edit">
				</a>
			</div>

			<div class="name">${o.name}</div>
		</div>
		
		
		
		<div class="space"></div>
		<div class="username">&commat;${o.username}</div>
		<div class="username">&commat;${o.email}</div>

		
	</div>
</div>
`;


const makeAnimalProfile = (o) => `
<div class="main">
	<div class="overscroll fill-parent main-detail">
		<div class=line-one">
			<div class="cafename">${o.name}</div>
			<div class="space"></div>
			<div class="cafetype">${o.type}</div>
			<div class="cafedrink">${o.breed}</div>
			<div class="description">${o.description}</div>
		</div>
	</div>
</div>
`;


const makeAnimalPopup = o => `

<div class="display-flex animal-jump" data-id="${o.animal_id}">
	<div class="cafe-popup-img">
		<img src="${o.img}" alt="">
	</div>
	<div class="cafe-popup-item">
		<div class="cafe-popup-name">${o.name}</div>
		<div class="cafe-popup-type">${o.type}</div>
		<div class="cafe-popup-breed">${o.breed}</div>
	</div>
</div>
`;





const FormControlInput = ({namespace,name,displayname,type,placeholder,value}) => `
<div class="form-control">
	<label for="${namespace}-${name}" class="form-label">${displayname}</label>
	<input type="${type}" id="${namespace}-${name}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
</div>
`;
const FormControlTextarea = ({namespace,name,displayname,placeholder,value}) => `

<div class="form-control">
	<label for="${namespace}-${name}" class="form-label">${displayname}</label>
	<textarea id="${namespace}-${name}" class="form-input" data-role="none" placeholder="${placeholder}">${value}</textarea>
</div>
`;


const makeAnimalFormInputs = (o,namespace) => `
${FormControlInput({
	namespace:namespace,
	name:"name",
	displayname:"Name",
	type:"text",
	placeholder:"Type The Cafe Name",
	value:o.name
})}
${FormControlInput({
	namespace:namespace,
	name:"type",
	displayname:"Cafe/Espresso bar/Juice bar/Dessert",
	type:"text",
	placeholder:"Type The Type",
	value:o.type
})}
${FormControlInput({
	namespace:namespace,
	name:"breed",
	displayname:"Drink",
	type:"text",
	placeholder:"Type The Drink",
	value:o.breed
})}
${FormControlTextarea({
	namespace:namespace,
	name:"description",
	displayname:"Description",
	placeholder:"Type The Cafe Description",
	value:o.description
})}
`;





const makeUserFormInputs = (o,namespace) => `
${FormControlInput({
	namespace:namespace,
	name:"name",
	displayname:"Name",
	type:"text",
	placeholder:"Type The User Name",
	value:o.name
})}
${FormControlInput({
	namespace:namespace,
	name:"username",
	displayname:"Username",
	type:"text",
	placeholder:"Type The User Handle",
	value:o.username
})}
${FormControlInput({
   namespace:namespace,
   name:"email",
   displayname:"Email",
   type:"email",
   placeholder:"Type The Email Address",
   value:o.email
})}
`;



const makeAnimalChoiceSelect = ({animals, name, chosen=0}) => `
<select id="${name}">
   ${templater(o=>`
      <option value="${o.id}" ${o.id===chosen?'selected':''}>${o.name}</option>
   `)(animals)}
</select>
`;


const makeAnimalListSet = (arr,target="#page-list .cafelist") => {
	$(".filter-bar").html(makeFilterList(arr));
	$(target).html(makeAnimalList(arr));
}


const capitalize = s => s[0].toUpperCase()+s.substr(1);

const filterList = (animals,type) => {
   let a = [...(new Set(animals.map(o=>o[type])))];
   return templater(o=>o?`<a href="#" data-filter="${type}" data-value="${o}">${capitalize(o)}</a>`:'')(a);
}


const makeFilterList = (animals) => {
   return `
   <a href="#" data-filter="type" data-value="">All</a>
   <div>|</div>
   ${filterList(animals,'type')}
   <div>|</div>
   ${filterList(animals,'breed')}
   `;
}







