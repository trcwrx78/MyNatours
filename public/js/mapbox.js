/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoidHJjd3J4NzgiLCJhIjoiY2tiN3RoNWVuMDk4OTMyb3lremp2cWRwZSJ9.b0bvx8MLlbK3AfHAxNs1XA';

  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/trcwrx78/ckb7ttnoh18kw1jp9yr1vplf3',
    scrollZoom: false,
    //   center: [-82.038096, 41.397867],
    //   zoom: 10,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
