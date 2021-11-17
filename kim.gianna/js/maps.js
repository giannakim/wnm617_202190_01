
const makeMap = async (target="", center={ lat: 34.015275, lng: -118.473933 }) => {
	await checkData(()=>window.google);
	let mapEl = $(target);



	if(!mapEl.data("map",)) {
		mapEl.data("map",
			new google.maps.Map(mapEl[0], {
			    center:center,
			    zoom: 14,
			    disableDefaultUI:true
  			})
		);

	}

  	return mapEl;
}


const makeMarkers = (mapEl,mapLocs) => {
	let {map,markers} = mapEl.data();
	


	if(markers) markers.forEach(o=>o.setMap(null));

	markers = [];


	mapLocs.forEach(o=>{
			let m = new google.maps.Marker({
		    position: o,
		    map,
         	icon: {
            url:o.icon,
            scaledSize: {
               width:40,
               height:40
            	}
          	}
  		});
	markers.push(m);
	});

	mapEl.data("markers",markers);

	

}











