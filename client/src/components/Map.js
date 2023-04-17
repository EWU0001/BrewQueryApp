import { Map, NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './styling/Map.css'

export function ShowMap({ latitude, longitude }) {
    const MAP_API_KEY = process.env.REACT_APP_MAPTILER_API_KEY;

    return (
        <div className='map'>
            <Map mapLib={maplibregl}
                initialViewState={{
                    longitude: -94.588402,
                    latitude: 39.9260196,
                    zoom: 3
                }}
                style={{ width: "100%", height: " calc(50vh - 77px)" }}
                mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${MAP_API_KEY}`}
            >
                <NavigationControl position="top-left" />
                {/* create markers/points on map */}
                {/* brewery locations select from GetBreweryDetails function */}
                <Marker longitude={longitude} latitude={latitude} color='#61dbfb' />
            </Map>
        </div>
    );
}