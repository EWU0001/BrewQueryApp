import { Map, NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './styling/Map.css'

export function ShowMap() {
    const MAP_API_KEY = process.env.REACT_APP_MAPTILER_API_KEY;

    return (
        <div className='map'>
            <Map mapLib={maplibregl}
                initialViewState={{
                    longitude: -97.46818222,
                    latitude: 35.25738891,
                    zoom: 4
                }}
                style={{ width: "100%", height: " calc(50vh - 77px)" }}
                mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${MAP_API_KEY}`}
            >
                <NavigationControl position="top-left" />
                {/* create markers/points on map */}
                {/* examples of brewery locations */}
                <Marker longitude={-97.46818222} latitude={35.25738891} color='#61dbfb' />
                <Marker longitude={-86.627954} latitude={41.289715} color='#61dbfb' />
                <Marker longitude={-104.8667206627954} latitude={39.38269495} color='#61dbfb' />
            </Map>
        </div>
    );
}