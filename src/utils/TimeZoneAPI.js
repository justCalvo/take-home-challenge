import axios from 'axios';

// I would normally put key in a .env file for security and not push to github
import { API_KEY } from '../../config';

export const GetTimeZoneByCoordinates = async(lat, lng) => (
    await axios.get(`http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=position&lat=${lat}&lng=${lng}`)
);
