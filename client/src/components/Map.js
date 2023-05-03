import { useState, useEffect } from 'react';
import { Map, NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './styling/Map.css';

export function ShowMap({ latitude, longitude }) {
    const MAP_API_KEY = process.env.REACT_APP_MAPTILER_API_KEY;
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkMapStyle = async () => {
            try {
                const response = await fetch(`https://api.maptiler.com/maps/streets/style.json?key=${MAP_API_KEY}`);
                if (!response.ok) {
                    setError(true);
                }
            } catch (error) {
                console.error(error);
                setError(true);
            }
            setIsLoading(false);
        };
        checkMapStyle();
    }, [MAP_API_KEY]);

    if (isLoading) {
        return (
            <div className='map'>
                <p>Loading map...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className='map'>
                <p>Failed to fetch map style.</p>
            </div>
        );
    }

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
