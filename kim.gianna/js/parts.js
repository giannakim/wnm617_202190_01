
const makeAnimalList = templater((o)=>`
<div class="cafelist-card">
	<a href="#page-cafe-profile" class="display-flex">
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
<div class="main-detail">
	<div class=line-one">
		<div class="profile-image">
			<img src="${o.img}" alt="">
		</div>
		<div class="username">${o.name}</div>
		<div class="username">&at;${o.username}</div>
	</div>
</div>
<div>
	<a href="#page-user-setting">Setting</a>
</div>

`;






