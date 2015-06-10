var map;
    $(document).ready(function(){
      var map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333
		      });
			  
			  alert('Estamos calculando tu ubicación: ');

      GMaps.geolocate({
        success: function(position){
          map.setCenter(position.coords.latitude, position.coords.longitude);
		  
		  
		  		// Creating marker of user location
              map.addMarker({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                  title: 'Estás aquí',
                  click: function(e) {
                    alert('Te encuentras aquí');
                  },
                  infoWindow: {
                      content: '<p>Te encuentras aquí!</p>'
                    }
            });
        },
        error: function(error){
          alert('Geolocation failed: '+error.message);
        },
        not_supported: function(){
          alert("Your browser does not support geolocation");
        },
        always: function(){
          alert("Te hemos encontrado!");
        }
      });
    });