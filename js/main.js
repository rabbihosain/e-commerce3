(function ($) {
"use strict";

jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: '767'
});

$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['Back','Next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.product-active').owlCarousel({
    loop:true,
    nav:true,
    margin:30,
    navText:['Back','Next'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


$('.brand-active').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

// Nice Select 
 $('select').niceSelect();

 // Price Range 
$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );

// ElevateZoom 
$("#img_01").elevateZoom();

// Google Map 
     
    function basicmap() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,
            scrollwheel: false,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(25.074623, 90.149490), // New York
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
					    {
					        "featureType": "water",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#e9e9e9"
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
					                "color": "#f5f5f5"
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
					                "color": "#ffffff"
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
					                "color": "#ffffff"
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
					                "color": "#ffffff"
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
					                "color": "#f5f5f5"
					            },
					            {
					                "lightness": 21
					            }
					        ]
					    },
					    {
					        "featureType": "poi.park",
					        "elementType": "geometry",
					        "stylers": [
					            {
					                "color": "#dedede"
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
        };
        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('contact-map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(25.074623, 90.149490),
            map: map,
            title: 'Cryptox'
        });
    }
    if ($('#contact-map').length != 0) {
        google.maps.event.addDomListener(window, 'load', basicmap);
    }


})(jQuery);