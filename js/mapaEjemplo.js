 var map;
    $(document).ready(function(){
      map = new GMaps({
        el: '#map',
        zoom: 16,
        lat: -12.043333,
        lng: -77.028333
      });
      map.addControl({
        position: 'top_right',
        content: 'Geolocate',
        style: {
          margin: '5px',
          padding: '1px 6px',
          border: 'solid 1px #717B87',
		  size: '20px',
          background: '#fff'
        },
        events: {
          click: function(){
            GMaps.geolocate({
              success: function(position){
                map.setCenter(position.coords.latitude, position.coords.longitude);
              },
              error: function(error){
                alert('Geolocation failed: ' + error.message);
              },
              not_supported: function(){
                alert("Your browser does not support geolocation");
              }
            });
          }
        }
      });
    });