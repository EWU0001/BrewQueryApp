import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styling/Map.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export function ShowMap({ latitude, longitude, message, zoom }) {
    // const MAP_API_KEY = process.env.REACT_APP_MAPTILER_API_KEY;

    const position = [latitude, longitude];
    const popupMessage = message;
    const zoomLevel = zoom;

    return (
        <div className='map'>
            <MapContainer
                center={position}
                zoom={zoomLevel}
                style={{ width: "100%", height: " calc(50vh - 77px)" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        {popupMessage}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
