
const makeMap = async (target="", center={ lat: 34.015275, lng: -118.473933 }) => {
	await checkData(()=>window.google);
	let mapEl = $(target);



	if(!mapEl.data("map",)) {
		mapEl.data({
			"map" : new google.maps.Map(mapEl[0], {
			    center:center,
			    zoom: 12,
			    disableDefaultUI:true,
			    styles:mapStyles
  			}),
			"infoWindow" : new google.maps.InfoWindow({content:''})
		});

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
	setMapBounds(mapEl,mapLocs);
}



const setMapBounds = (mapEl,mapLocs) => {
	let {map,markers} = mapEl.data();
	let zoom = 14;

	if(mapLocs.length==0) {
		if(window.location.protocol!=='https:') return;
		else {
			navigator.geolocation.getCurrentPosition(p=>{
				let pos = {
					lat:p.coords.latitude,
					lng:p.coords.longitude
				};
				map.setCenter(pos);
				map.setZoom(zoom);
			},(...args)=>{
				console.log(args)
			},{
				enableHighAccuracy:false,
				timeout:5000,
				maximumAge:0
			});
		}
	} else if(mapLocs.length==1) {
		map.setCenter(mapLocs[0]);
		map.setZoom(zoom);
	} else {
    	let bounds = new google.maps.LatLngBounds(null);
    	mapLocs.forEach(o=>{
    		bounds.extend(o);
    	});
    	map.fitBounds(bounds);
    }
}





const mapStyles = [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a0d6d1"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f1f1f1"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]










