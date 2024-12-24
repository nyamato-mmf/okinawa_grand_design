

/* ----------------------------------------------------------------------------
　Mapboxマップ描画機能
---------------------------------------------------------------------------- */
mapboxgl.accessToken = 'pk.eyJ1IjoibnlhbWF0byIsImEiOiJja2Y4dzNkOW8wY3MwMnFvM29iNnJzNzVzIn0.GHlHwu3r5YjKBU3qAKvccQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/satellite-v9', // style URL
    projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
    center: [130.29512947990742, 38.821536580824926], // starting position [lng, lat]
    zoom: 2 // starting zoom
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style, since satellite-v9 doesn't include atmosphere by default.
    });


map.setMaxZoom(20);
map.setMaxPitch(60)

map.on('load', function () {

    // Add terrain source, with slight exaggeration
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.terrain-rgb',
        'tileSize': 512,
        'maxzoom': 14
    });
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.0 });


    // Fly to functionality
    document.getElementById("fly").select.onchange = function() {
        var target = document.getElementById("fly").select.value;
        console.log(target);

        const flyLocations = {
            "fly-world": { center: [130.29512947990742, 38.821536580824926], zoom: 2 },
            "fly-hawaii": { center: [-157.87604057447587, 20.36384710660511], zoom: 7 },
            "fly-bali": { center: [115.09857609640414, -8.28549595840383], zoom: 7 },
            "fly-singapore": { center: [103.82364408627899, 1.2837839801814193], zoom: 9 },
            "fly-maldives": { center: [73.23452224308963, 2.3930987986228622], zoom: 6 },
            "fly-polynesia": { center: [-151.78907317129566, -16.554553406697714], zoom: 7 },
            "fly-seychelles": { center: [55.505277049675044, -4.695062251279288], zoom: 7 },
            "fly-cuyo": { center: [120.92431245977218, 11.10817035342058], zoom: 7 },
        };

        if (flyLocations[target]) {
            map.flyTo({
                center: flyLocations[target].center,
                zoom: flyLocations[target].zoom,
                essential: true
            });
        }
    };


    /* --------------------------------------------------------
    　ラグジュアリー・ホテル
    -------------------------------------------------------- */
    map.loadImage(
        '././img/marker-hotel.png',
        (error, image) => {
            if (error) throw error;

            // Add the image to the map style.
            map.addImage('hotelicon', image);

            // Add a data source containing several points' features.
            map.addSource('luxury_hotels', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {'type': 'Feature', 'properties': {'name': 'Soneva Fushi', 'description': '<strong>Soneva Fushi</strong><p><img src="././img/luxury_hotels/Soneva Fushi.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [73.0786623, 5.1118009]}},
                        {'type': 'Feature', 'properties': {'name': 'Soneva Jani', 'description': '<strong>Soneva Jani</strong><p><img src="././img/luxury_hotels/Soneva Jani.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [73.4150317, 5.720434]}},
                        {'type': 'Feature', 'properties': {'name': 'Four Seasons Resort Maldives at Kuda Huraa', 'description': '<strong>Four Seasons Resort Maldives at Kuda Huraa</strong><p><img src="././img/luxury_hotels/Four Seasons Resort Maldives at Kuda Huraa.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [73.5979972, 4.3301232]}},
                        {'type': 'Feature', 'properties': {'name': 'Four Seasons Resort Maldives Landaa Giraavaru', 'description': '<strong>Four Seasons Resort Maldives Landaa Giraavaru</strong><p><img src="././img/luxury_hotels/Four Seasons Resort Maldives Landaa Giraavaru.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [73.1122821, 5.2861715]}},
                        {'type': 'Feature', 'properties': {'name': 'AYADA MALDIVES', 'description': '<strong>AYADA MALDIVES</strong><p><img src="././img/luxury_hotels/AYADA MALDIVES.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [73.3571778, 0.2786906]}},
                        {'type': 'Feature', 'properties': {'name': 'Velaa Private Island', 'description': '<strong>Velaa Private Island</strong><p><img src="././img/luxury_hotels/Velaa Private Island.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [73.209457, 5.831371]}},
                        {'type': 'Feature', 'properties': {'name': 'The Ritz-Carlton, Millenia Singapore', 'description': '<strong>The Ritz-Carlton, Millenia Singapore</strong><p><img src="././img/luxury_hotels/The Ritz-Carlton, Millenia Singapore.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [103.8601209, 1.2909687]}},
                        {'type': 'Feature', 'properties': {'name': 'Raffles Hotel Singapore', 'description': '<strong>Raffles Hotel Singapore</strong><p><img src="././img/luxury_hotels/Raffles Hotel Singapore.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [103.854483, 1.294889]}},
                        {'type': 'Feature', 'properties': {'name': 'Six Senses Duxton', 'description': '<strong>Six Senses Duxton</strong><p><img src="././img/luxury_hotels/Six Senses Duxton.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [103.843367, 1.2787917]}},
                        {'type': 'Feature', 'properties': {'name': 'Fregate Island Private', 'description': '<strong>Fregate Island Private</strong><p><img src="././img/luxury_hotels/Fregate Island Private.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [55.9404697, -4.5818334]}},
                        {'type': 'Feature', 'properties': {'name': 'The Sanchaya', 'description': '<strong>The Sanchaya</strong><p><img src="././img/luxury_hotels/The Sanchaya.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [104.3682289, 1.1774712]}},
                        {'type': 'Feature', 'properties': {'name': 'The Mulia - Nusa Dua', 'description': '<strong>The Mulia - Nusa Dua</strong><p><img src="././img/luxury_hotels/The Mulia - Nusa Dua.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [115.221174, -8.8162105]}},
                        {'type': 'Feature', 'properties': {'name': 'Mulia Resort - Nusa Dua', 'description': '<strong>Mulia Resort - Nusa Dua</strong><p><img src="././img/luxury_hotels/Mulia Resort - Nusa Dua.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [115.221174, -8.8162105]}},
                        {'type': 'Feature', 'properties': {'name': 'Amandari', 'description': '<strong>Amandari</strong><p><img src="././img/luxury_hotels/Amandari.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [115.2447028, -8.487623083]}},
                        {'type': 'Feature', 'properties': {'name': 'Amankila', 'description': '<strong>Amankila</strong><p><img src="././img/luxury_hotels/Amankila.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [115.5280609, -8.5008658]}},
                        {'type': 'Feature', 'properties': {'name': 'Aman Villas at Nusa Dua', 'description': '<strong>Aman Villas at Nusa Dua</strong><p><img src="././img/luxury_hotels/Aman Villas at Nusa Dua.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [115.2111222, -8.8131724]}},
                        {'type': 'Feature', 'properties': {'name': 'Amanwana', 'description': '<strong>Amanwana</strong><p><img src="././img/luxury_hotels/Amanwana.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [117.4986933, -8.2630038]}},
                        {'type': 'Feature', 'properties': {'name': 'Viceroy Bali', 'description': '<strong>Viceroy Bali</strong><p><img src="././img/luxury_hotels/Viceroy Bali.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [115.2764686, -8.4936114]}},
                        {'type': 'Feature', 'properties': {'name': 'Ayana Resort and Spa BALI', 'description': '<strong>Ayana Resort and Spa BALI</strong><p><img src="././img/luxury_hotels/Ayana Resort and Spa BALI.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [115.1392725, -8.7862171]}},
                        {'type': 'Feature', 'properties': {'name': 'The Villas at AYANA Resort BALI', 'description': '<strong>The Villas at AYANA Resort BALI</strong><p><img src="././img/luxury_hotels/The Villas at AYANA Resort BALI.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [115.1366264, -8.788001]}},
                        {'type': 'Feature', 'properties': {'name': 'RIMBA Jimbarab BALI by AYANA', 'description': '<strong>RIMBA Jimbarab BALI by AYANA</strong><p><img src="././img/luxury_hotels/RIMBA Jimbarab BALI by AYANA.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [115.1394921, -8.7934043]}},
                        {'type': 'Feature', 'properties': {'name': 'BVLGARI Resort Bali', 'description': '<strong>BVLGARI Resort Bali</strong><p><img src="././img/luxury_hotels/BVLGARI Resort Bali.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [115.1216909, -8.8429187]}},
                        {'type': 'Feature', 'properties': {'name': 'NIHI SUMBA', 'description': '<strong>NIHI SUMBA</strong><p><img src="././img/luxury_hotels/NIHI SUMBA.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [119.3762222, -9.7776308]}},
                        {'type': 'Feature', 'properties': {'name': 'The Legian Seminyak Bali', 'description': '<strong>The Legian Seminyak Bali</strong><p><img src="././img/luxury_hotels/The Legian Seminyak Bali.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [115.153314, -8.6844988]}},
                        {'type': 'Feature', 'properties': {'name': 'Amanpuri', 'description': '<strong>Amanpuri</strong><p><img src="././img/luxury_hotels/Amanpuri.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [98.2767076, 7.9841249]}},
                        {'type': 'Feature', 'properties': {'name': 'Soneva Kiri', 'description': '<strong>Soneva Kiri</strong><p><img src="././img/luxury_hotels/Soneva Kiri.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [102.5311733, 11.6986214]}},
                        {'type': 'Feature', 'properties': {'name': 'The Royal Hawaiian Resort Waikiki', 'description': '<strong>The Royal Hawaiian Resort Waikiki</strong><p><img src="././img/luxury_hotels/The Royal Hawaiian Resort Waikiki.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [-157.8287149, 21.2772562]}},
                        {'type': 'Feature', 'properties': {'name': 'Four Seasons Resort Maui at Wailea', 'description': '<strong>Four Seasons Resort Maui at Wailea</strong><p><img src="././img/luxury_hotels/Four Seasons Resort Maui at Wailea.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [-156.4423445, 20.6801531]}},
                        {'type': 'Feature', 'properties': {'name': 'The Ritz-Carlton Residences Waikiki Beach', 'description': '<strong>The Ritz-Carlton Residences Waikiki Beach</strong><p><img src="././img/luxury_hotels/The Ritz-Carlton Residences Waikiki Beach.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [-157.8303638, 21.2827356]}},
                        {'type': 'Feature', 'properties': {'name': 'Trump International Hotel Waikiki', 'description': '<strong>Trump International Hotel Waikiki</strong><p><img src="././img/luxury_hotels/Trump International Hotel Waikiki.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [-157.8320619, 21.2793863]}},
                        {'type': 'Feature', 'properties': {'name': 'El Nido Resorts Pangulasian Island', 'description': '<strong>El Nido Resorts Pangulasian Island</strong><p><img src="././img/luxury_hotels/El Nido Resorts Pangulasian Island.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [119.3357447, 11.1131793]}},
                        {'type': 'Feature', 'properties': {'name': 'El Nido Resorts Miniloc Island', 'description': '<strong>El Nido Resorts Miniloc Island</strong><p><img src="././img/luxury_hotels/El Nido Resorts Miniloc Island.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [119.3202135, 11.1497047]}},
                        {'type': 'Feature', 'properties': {'name': 'El Nido Resorts Ragen Island', 'description': '<strong>El Nido Resorts Ragen Island</strong><p><img src="././img/luxury_hotels/El Nido Resorts Ragen Island.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [119.3886795, 11.0941562]}},
                        {'type': 'Feature', 'properties': {'name': 'Amanpulo', 'description': '<strong>Amanpulo</strong><p><img src="././img/luxury_hotels/Amanpulo.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [120.7270957, 11.3563099]}},
                        {'type': 'Feature', 'properties': {'name': 'Four Seasons Resort Bora bora', 'description': '<strong>Four Seasons Resort Bora bora</strong><p><img src="././img/luxury_hotels/Four Seasons Resort Bora bora.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [-151.7071035, -16.4725491]}},
                        {'type': 'Feature', 'properties': {'name': 'The Brando', 'description': '<strong>The Brando</strong><p><img src="././img/luxury_hotels/The Brando.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [-149.5959015, -17.0227667]}},
                        {'type': 'Feature', 'properties': {'name': 'The Upper House', 'description': '<strong>The Upper House</strong><p><img src="././img/luxury_hotels/The Upper House.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [114.1663406, 22.2775031]}},
                        {'type': 'Feature', 'properties': {'name': 'Mandarin Oriental Paris', 'description': '<strong>Mandarin Oriental Paris</strong><p><img src="././img/luxury_hotels/Mandarin Oriental Paris.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [2.3272231, 48.8670551]}},
                        {'type': 'Feature', 'properties': {'name': 'La Perouse Nice', 'description': '<strong>La Perouse Nice</strong><p><img src="././img/luxury_hotels/La Perouse Nice.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [7.2792302, 43.6939621]}},
                        {'type': 'Feature', 'properties': {'name': 'Relais Christine', 'description': '<strong>Relais Christine</strong><p><img src="././img/luxury_hotels/Relais Christine.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [2.3401138, 48.8543896]}},
                        {'type': 'Feature', 'properties': {'name': 'Saint James Paris', 'description': '<strong>Saint James Paris</strong><p><img src="././img/luxury_hotels/Saint James Paris.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [2.2796401, 48.8706168]}},
                        {'type': 'Feature', 'properties': {'name': 'Le Royal Monceau Raffles Paris', 'description': '<strong>Le Royal Monceau Raffles Paris</strong><p><img src="././img/luxury_hotels/Le Royal Monceau Raffles Paris.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [2.300295, 48.8757605]}},
                        {'type': 'Feature', 'properties': {'name': 'Hotel du Palais', 'description': '<strong>Hotel du Palais</strong><p><img src="././img/luxury_hotels/Hotel du Palais.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [-1.5562046, 43.4867958]}},
                        {'type': 'Feature', 'properties': {'name': 'Park Hyatt Paris Vendome', 'description': '<strong>Park Hyatt Paris Vendome</strong><p><img src="././img/luxury_hotels/Park Hyatt Paris Vendome.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [2.3305496, 48.8688209]}},
                        {'type': 'Feature', 'properties': {'name': 'La Reserve Paris', 'description': '<strong>La Reserve Paris</strong><p><img src="././img/luxury_hotels/La Reserve Paris.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [2.3133912, 48.869721]}},
                        {'type': 'Feature', 'properties': {'name': 'Hotel Napoleon Paris', 'description': '<strong>Hotel Napoleon Paris</strong><p><img src="././img/luxury_hotels/Hotel Napoleon Paris.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [2.2980315, 48.874277]}},
                        {'type': 'Feature', 'properties': {'name': 'Ritz Paris', 'description': '<strong>Ritz Paris</strong><p><img src="././img/luxury_hotels/Ritz Paris.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [2.3288932, 48.8680987]}},
                        {'type': 'Feature', 'properties': {'name': 'Browns Hotel', 'description': '<strong>Browns Hotel</strong><p><img src="././img/luxury_hotels/Browns Hotel.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [-0.142200334, 51.50923073]}},
                        {'type': 'Feature', 'properties': {'name': 'The Landmark London', 'description': '<strong>The Landmark London</strong><p><img src="././img/luxury_hotels/The Landmark London.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [-0.1626027, 51.5214599]}},
                        {'type': 'Feature', 'properties': {'name': 'Six Senses Fiji', 'description': '<strong>Six Senses Fiji</strong><p><img src="././img/luxury_hotels/Six Senses Fiji.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [177.1588095, -17.7584111]}},
                        {'type': 'Feature', 'properties': {'name': 'Amanoi', 'description': '<strong>Amanoi</strong><p><img src="././img/luxury_hotels/Amanoi.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [109.197624, 11.7091034]}},
                        {'type': 'Feature', 'properties': {'name': 'Six Senses Ninh Van Bay', 'description': '<strong>Six Senses Ninh Van Bay</strong><p><img src="././img/luxury_hotels/Six Senses Ninh Van Bay.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [109.2776855, 12.3589397]}},
                        {'type': 'Feature', 'properties': {'name': 'Six Senses Con Dao', 'description': '<strong>Six Senses Con Dao</strong><p><img src="././img/luxury_hotels/Six Senses Con Dao.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [106.6338684, 8.7009522]}},
                        {'type': 'Feature', 'properties': {'name': 'Amankora', 'description': '<strong>Amankora</strong><p><img src="././img/luxury_hotels/Amankora.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [89.83522417, 27.62413995]}},
                        {'type': 'Feature', 'properties': {'name': 'The Ritz-Carlton Langkawi', 'description': '<strong>The Ritz-Carlton Langkawi</strong><p><img src="././img/luxury_hotels/The Ritz-Carlton Langkawi.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [99.6953044, 6.3589428]}},
                        {'type': 'Feature', 'properties': {'name': 'The St. Regis Langkawi', 'description': '<strong>The St. Regis Langkawi</strong><p><img src="././img/luxury_hotels/The St. Regis Langkawi.jpg"></img></p>'}, 'geometry': {'type': 'Point', 'coordinates': [99.8625737, 6.2961675]}},
                        
                    ]
                }
            });

            // Add a layer to use the image to represent the data.
            map.addLayer({
                'id': 'luxury_hotels',
                'type': 'symbol',
                'source': 'luxury_hotels', // reference the data source
                'layout': {
                    'icon-image': 'hotelicon', // reference the image
                    'icon-size': 1,
                    'visibility': 'none'
                },
            });
            // On click, get coordinates and a description.
            map.on('click', 'luxury_hotels', (e) => {
                const coordinates = e.features[0].geometry.coordinates.slice();
                const description = e.features[0].properties.description;

                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                // Create a popup object
                new mapboxgl.Popup({className: 'popupLuxuryHotel'})
                    .setLngLat(coordinates)
                    .setHTML(description)
                    .addTo(map);
            });
            map.on('mouseenter', 'luxury_hotels', () => {
                map.getCanvas().style.cursor = 'pointer';
            });
            map.on('mouseleave', 'luxury_hotels', () => {
                map.getCanvas().style.cursor = '';
            });
        }
    );

    /* --------------------------------------------------------
    　プライベート・ジェット
    -------------------------------------------------------- */
    map.addSource('private_jets', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {'type': 'Feature', 'properties': {'name': 'Sugar Beach, A Viceroy Resort ', 'description': '<strong>Sugar Beach, A Viceroy Resort </strong>'}, 'geometry': {'type': 'Point', 'coordinates': [-61.0612116, 13.8278433]}},
                {'type': 'Feature', 'properties': {'name': 'Soneva Jani', 'description': '<strong>Soneva Jani</strong>'}, 'geometry': {'type': 'Point', 'coordinates': [73.4150317, 5.720434]}},
                {'type': 'Feature', 'properties': {'name': 'Amanpulo', 'description': '<strong>Amanpulo</strong>'}, 'geometry': {'type': 'Point', 'coordinates': [120.7270957, 11.3563099]}},
                {'type': 'Feature', 'properties': {'name': 'Cheval Blanc St-Barth', 'description': '<strong>Cheval Blanc St-Barth</strong>'}, 'geometry': {'type': 'Point', 'coordinates': [-62.85447689999999, 17.9190387]}},
                {'type': 'Feature', 'properties': {'name': 'Steigenberger Grandhotel Belvedere', 'description': '<strong>Steigenberger Grandhotel Belvedere</strong>'}, 'geometry': {'type': 'Point', 'coordinates': [9.8268642, 46.80063550000001]}},
                {'type': 'Feature', 'properties': {'name': 'AlpenGold Hotel Davos', 'description': '<strong>AlpenGold Hotel Davos</strong>'}, 'geometry': {'type': 'Point', 'coordinates': [9.8536434, 46.8133583]}},
                {'type': 'Feature', 'properties': {'name': 'Kulm Hotel ', 'description': '<strong>Kulm Hotel </strong>'}, 'geometry': {'type': 'Point', 'coordinates': [9.8412717, 46.4990105]}},
                {'type': 'Feature', 'properties': {'name': 'The Inn of The Five Graces', 'description': '<strong>The Inn of The Five Graces</strong>'}, 'geometry': {'type': 'Point', 'coordinates': [-105.9385253, 35.6836358]}},
                {'type': 'Feature', 'properties': {'name': 'Twin Farms', 'description': '<strong>Twin Farms</strong>'}, 'geometry': {'type': 'Point', 'coordinates': [-72.5929, 43.7240354]}},
                {'type': 'Feature', 'properties': {'name': 'The Resort at Paws Up', 'description': '<strong>The Resort at Paws Up</strong>'}, 'geometry': {'type': 'Point', 'coordinates': [-113.434776, 46.9169794]}},                
            ]
        }
    });
    map.addLayer({
        'id': "private_jets",
        'type': 'circle',
        'source': 'private_jets',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'circle-radius': 7,
            'circle-stroke-width': 2,
            'circle-color': '#ffff00',
            'circle-stroke-color': '#0000ff'
        }
    });
    // ポップアップ //
    map.on('click', "private_jets", function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties["name"])
            .addTo(map);
    });
    map.on('mouseenter', "private_jets", function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', "private_jets", function () {
        map.getCanvas().style.cursor = '';
    });


    /* --------------------------------------------------------
    　MICE
    -------------------------------------------------------- */
    map.addSource('mice', {
        'type': 'geojson',
        'data': './geojson/facilities/mice/mice.geojson'
    });
    map.addLayer({
        'id': "mice",
        'type': 'circle',
        'source': 'mice',
        'layout': {
            'visibility': 'none'
        },
        'paint': {
            'circle-radius': 10,
            'circle-stroke-width': 2,
            'circle-color': 'rgba(0,0,0,0)',
            'circle-stroke-color': 'red'
        }
    });
    // ポップアップ //
    map.on('click', "mice", function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(e.features[0].properties["City"])
            .addTo(map);
    });
    map.on('mouseenter', "mice", function () {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', "mice", function () {
        map.getCanvas().style.cursor = '';
    });

    /* --------------------------------------------------------
    　沖縄マーカー
    -------------------------------------------------------- */
    // Set marker options.
    const okinawa_marker = new mapboxgl.Marker({
        color: "#FFFF00",
        scale: 0.5,
        draggable: false
    }).setLngLat([127.68024536707256, 26.208922988503556])
        .addTo(map);

    /* --------------------------------------------------------
    　クルーズ
    -------------------------------------------------------- */
    function add_cruise_ships_LayerAndEvents(sourceId, linelayerId, circlelayerId, circleColor) {
        map.addSource(sourceId, {
            'type': 'geojson',
            'data': `./geojson/cruise_ships/${sourceId}.geojson`
        });
        map.addLayer({
            'id': linelayerId,
            'type': 'line',
            'source': sourceId,
            'layout': {
                'visibility': 'none'
            },
            'paint': {
                'line-color': circleColor,
                'line-width': 2,
            }
        });
        map.addLayer({
            'id': circlelayerId,
            'type': 'circle',
            'source': sourceId,
            'layout': {
                'visibility': 'none'
            },
            'paint': {
                'circle-radius': 5,
                'circle-stroke-width': 2,
                'circle-color': 'rgba(0, 0, 0, 0)',
                'circle-stroke-color': circleColor
            }
        });
    }

    // Define cruise layers and colors
    const cruiseLayers = [
        { sourceId: 'cruise_01', linelayerId: 'cruise_01-line', circlelayerId: 'cruise_01-circle', color: '#FF5733' },
        { sourceId: 'cruise_02', linelayerId: 'cruise_02-line', circlelayerId: 'cruise_02-circle', color: '#FFBD33' },
        { sourceId: 'cruise_03', linelayerId: 'cruise_03-line', circlelayerId: 'cruise_03-circle', color: '#FF3333' },
        { sourceId: 'cruise_04', linelayerId: 'cruise_04-line', circlelayerId: 'cruise_04-circle', color: '#33FF57' },
        { sourceId: 'cruise_05', linelayerId: 'cruise_05-line', circlelayerId: 'cruise_05-circle', color: '#33FFBD' },
        { sourceId: 'cruise_06', linelayerId: 'cruise_06-line', circlelayerId: 'cruise_06-circle', color: '#33BDFF' },
        { sourceId: 'cruise_07', linelayerId: 'cruise_07-line', circlelayerId: 'cruise_07-circle', color: '#5733FF' },
        { sourceId: 'cruise_08', linelayerId: 'cruise_08-line', circlelayerId: 'cruise_08-circle', color: '#BD33FF' },
        { sourceId: 'cruise_09', linelayerId: 'cruise_09-line', circlelayerId: 'cruise_09-circle', color: '#FF33BD' },
        { sourceId: 'cruise_10', linelayerId: 'cruise_10-line', circlelayerId: 'cruise_10-circle', color: '#FF33BD' },
        { sourceId: 'cruise_11', linelayerId: 'cruise_11-line', circlelayerId: 'cruise_11-circle', color: '#FF5733' },
        { sourceId: 'cruise_12', linelayerId: 'cruise_12-line', circlelayerId: 'cruise_12-circle', color: '#FFBD33' },
        { sourceId: 'cruise_13', linelayerId: 'cruise_13-line', circlelayerId: 'cruise_13-circle', color: '#FF3333' },
        { sourceId: 'cruise_14', linelayerId: 'cruise_14-line', circlelayerId: 'cruise_14-circle', color: '#33FF57' },
        { sourceId: 'cruise_15', linelayerId: 'cruise_15-line', circlelayerId: 'cruise_15-circle', color: '#33FFBD' },
        { sourceId: 'cruise_16', linelayerId: 'cruise_16-line', circlelayerId: 'cruise_16-circle', color: '#33BDFF' },
        { sourceId: 'cruise_17', linelayerId: 'cruise_17-line', circlelayerId: 'cruise_17-circle', color: '#5733FF' },
        { sourceId: 'cruise_18', linelayerId: 'cruise_18-line', circlelayerId: 'cruise_18-circle', color: '#BD33FF' },
        { sourceId: 'cruise_19', linelayerId: 'cruise_19-line', circlelayerId: 'cruise_19-circle', color: '#FF33BD' },
        { sourceId: 'cruise_20', linelayerId: 'cruise_20-line', circlelayerId: 'cruise_20-circle', color: '#FF33BD' },
        { sourceId: 'cruise_21', linelayerId: 'cruise_21-line', circlelayerId: 'cruise_21-circle', color: '#FF5733' },
        { sourceId: 'cruise_22', linelayerId: 'cruise_22-line', circlelayerId: 'cruise_22-circle', color: '#FFBD33' },
        { sourceId: 'cruise_23', linelayerId: 'cruise_23-line', circlelayerId: 'cruise_23-circle', color: '#FF3333' },
    ];

    // Add cruise layers and events
    cruiseLayers.forEach(layer => add_cruise_ships_LayerAndEvents(layer.sourceId, layer.linelayerId, layer.circlelayerId, layer.color));

    /* ----------------------------------------------------------------------------
    　レイヤー表示/非表示
    ---------------------------------------------------------------------------- */
    // 表示/非表示の関数を定義
    function updateLayerVisibility(layerIds, visibility) {
        if (Array.isArray(layerIds)) {
            layerIds.forEach(layerId => {
                map.setLayoutProperty(layerId, 'visibility', visibility ? 'visible' : 'none');
            });
        } else {
            map.setLayoutProperty(layerIds, 'visibility', visibility ? 'visible' : 'none');
        }
    }

    // イベント・リスナー（チェックボックス）
    // ラグジュアリー・ホテル（世界） //
    document.getElementById('luxury_hotelsCheckbox').addEventListener('change', function () {
        updateLayerVisibility('luxury_hotels', this.checked);
    });  
    // プライベート・ジェット //
    document.getElementById('private_jetsCheckbox').addEventListener('change', function () {
        updateLayerVisibility('private_jets', this.checked);
    });  
    // MICE //
    document.getElementById('miceCheckbox').addEventListener('change', function () {
        updateLayerVisibility('mice', this.checked);
    });  
    // クルーズ //
    document.getElementById('cruise_shipsCheckbox').addEventListener('change', function () {
        updateLayerVisibility(['cruise_01-line','cruise_02-line','cruise_03-line','cruise_04-line','cruise_05-line','cruise_06-line','cruise_07-line','cruise_08-line','cruise_09-line','cruise_10-line','cruise_11-line','cruise_12-line','cruise_13-line','cruise_14-line','cruise_15-line','cruise_16-line','cruise_17-line','cruise_18-line','cruise_19-line','cruise_20-line','cruise_21-line','cruise_22-line','cruise_23-line'], this.checked);
    });  
    // クルーズ //
    document.getElementById('cruise_shipsCheckbox').addEventListener('change', function () {
        updateLayerVisibility(['cruise_01-circle','cruise_02-circle','cruise_03-circle','cruise_04-circle','cruise_05-circle','cruise_06-circle','cruise_07-circle','cruise_08-circle','cruise_09-circle','cruise_10-circle','cruise_11-circle','cruise_12-circle','cruise_13-circle','cruise_14-circle','cruise_15-circle','cruise_16-circle','cruise_17-circle','cruise_18-circle','cruise_19-circle','cruise_20-circle','cruise_21-circle','cruise_22-circle','cruise_23-circle'], this.checked);
    });  
    
    
    // チェックボックスの状態に応じて表示/非表示
    // 行政区域 //
    // ラグジュアリー・ホテル（世界） //
    updateLayerVisibility('luxury_hotels', document.getElementById('luxury_hotelsCheckbox').checked);
    // プライベート・ジェット //
    updateLayerVisibility('private_jets', document.getElementById('private_jetsCheckbox').checked);
    // MICE //
    updateLayerVisibility('mice', document.getElementById('miceCheckbox').checked);
    // クルーズ //
    updateLayerVisibility(['cruise_01-line','cruise_02-line','cruise_03-line','cruise_04-line','cruise_05-line','cruise_06-line','cruise_07-line','cruise_08-line','cruise_09-line','cruise_10-line','cruise_11-line','cruise_12-line','cruise_13-line','cruise_14-line','cruise_15-line','cruise_16-line','cruise_17-line','cruise_18-line','cruise_19-line','cruise_20-line','cruise_21-line','cruise_22-line','cruise_23-line'], document.getElementById('cruise_shipsCheckbox').checked);
    // クルーズ //
    updateLayerVisibility(['cruise_01-circle','cruise_02-circle','cruise_03-circle','cruise_04-circle','cruise_05-circle','cruise_06-circle','cruise_07-circle','cruise_08-circle','cruise_09-circle','cruise_10-circle','cruise_11-circle','cruise_12-circle','cruise_13-circle','cruise_14-circle','cruise_15-circle','cruise_16-circle','cruise_17-circle','cruise_18-circle','cruise_19-circle','cruise_20-circle','cruise_21-circle','cruise_22-circle','cruise_23-circle'], document.getElementById('cruise_shipsCheckbox').checked);

    // 初期設定
    //document.getElementById('luxury_hotelsCheckbox').checked = true;


    //##### ローディング・スピナー #####//
    stopSpinner = (e) => {
        document.getElementById("loading").style.visibility = "hidden";
        map.off('idle', stopSpinner);
    }

    map.on('sourcedataloading', (e) => {
        if (!e.isSourceLoaded) {
            document.getElementById("loading").style.visibility = "visible";
            map.on('idle', stopSpinner);
        }
    })


});


map.addControl(new mapboxgl.NavigationControl());
        
