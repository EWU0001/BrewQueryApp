import { Map, NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './styling/Map.css'

export function ShowMap() {

    return (
        <div className='map'>
            <Map mapLib={maplibregl}
                initialViewState={{
                    longitude: -97.46818222,
                    latitude: 35.25738891,
                    zoom: 3
                }}
                style={{ width: "100%", height: " calc(50vh - 77px)" }}
                mapStyle="https://api.maptiler.com/maps/streets/style.json?key=N1ewBuTtTOkxieXwdAnk"
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