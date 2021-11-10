
const makeAnimalList = templater((o)=>`
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
	<div class="main-detail">
		<div class=line-one">
			<img src="${o.img}" class="profile-img" alt="">
			<div class="username">${o.name}</div>
			<div class="username">&commat;${o.username}</div>
		</div>
	</div>
</div>
`;






