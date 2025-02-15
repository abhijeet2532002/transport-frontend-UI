import React, { useState } from 'react';
import './Home.scss';
import { ArrowDown, Codesandbox, X } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import Map from '../Map/Map';
import Suggestion from '../SuggestionBox/Suggestion';

const libraries = ['places'];

const Home = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropLocation, setDropLocation] = useState('');
    const [pickupCoordinates, setPickupCoordinates] = useState(null);
    const [dropCoordinates, setDropCoordinates] = useState(null);
    const [pickupRef, setPickupRef] = useState(null);
    const [dropRef, setDropRef] = useState(null);
    const token  = localStorage.getItem('authToken')

    const history = useNavigate();

    const handlePlaceSelect = (ref, setLocation, setCoordinates) => {
        if (ref) {
            const place = ref.getPlace();
            if (place && place.formatted_address) {
                setLocation(place.formatted_address);
                if (place.geometry && place.geometry.location) {
                    setCoordinates({
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    });
                }
            }
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (token) {
            history(`/all/list/truc?pickup=${encodeURIComponent(pickupLocation)}&drop=${encodeURIComponent(dropLocation)}`);
        } else {
            history('/signin')
        }
       
       
    }

    return (

        <div className='home_container'>
            <LoadScript googleMapsApiKey="AIzaSyAmbNtxu3PojYC84-t5Ld3hY0IQDS-zyzI" libraries={libraries}>
                <div className="row">
                    <div className="col-md-6 mb-3 mb-sm-0 left">
                        <div className="card border-0">
                            <div className="card-body border-0 d-flex flex-column">
                                <h1 className='fs-52'>Deliver a package</h1>
                                <div className='d-flex flex-column'>
                                    <span className='currier_icon'>
                                        <Codesandbox />
                                    </span>
                                    <span className='fs-16'>Courier</span>
                                </div>

                                <form onSubmit={handleSubmit} className='form_div d-flex flex-column align-items-center justify-content-center gap-3'>
                                    {/* Pickup Location */}
                                    <div className="picLocation w-100 d-flex align-items-center px-4">
                                        <Autocomplete
                                            className='w-100'
                                            onLoad={ref => setPickupRef(ref)}
                                            onPlaceChanged={() => handlePlaceSelect(pickupRef, setPickupLocation, setPickupCoordinates)}
                                        >
                                            <input
                                                className='flex-grow-1 w-100'
                                                type="text"
                                                required
                                                placeholder='Enter Your Pickup Location'
                                                value={pickupLocation}
                                                onChange={(e) => setPickupLocation(e.target.value)}
                                            />
                                        </Autocomplete>
                                        <X className='d-flex align-items-center' onClick={() => {
                                            setPickupLocation('');
                                            setPickupCoordinates(null);
                                        }} />
                                    </div>

                                    <ArrowDown />

                                    {/* Drop Location */}
                                    <div className="picLocation w-100 d-flex align-items-center px-4">
                                        <Autocomplete
                                            className='w-100'
                                            onLoad={ref => setDropRef(ref)}
                                            onPlaceChanged={() => handlePlaceSelect(dropRef, setDropLocation, setDropCoordinates)}
                                        >
                                            <input
                                                className='flex-grow-1 w-100'
                                                type="text"
                                                required
                                                placeholder='Drop Location'
                                                value={dropLocation}
                                                onChange={(e) => setDropLocation(e.target.value)}
                                            />
                                        </Autocomplete>
                                        <X className='d-flex align-items-center' onClick={() => {
                                            setDropLocation('');
                                            setDropCoordinates(null);
                                        }} />
                                    </div>

                                    <div className='d-flex align-items-center form-control border-0 gap-4'>
                                        <button className='select btn' disabled={!(pickupLocation && dropLocation)}>
                                            Select
                                        </button>

                                        <p className='m-0 login_not'>If you don't have an account, please <Link className='text-dark' to={'/signup'}>
                                            <u>Signup</u>
                                        </Link> or <Link className='text-dark' to={'/signin'}>
                                                <u>Login</u>
                                            </Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right Section for Map */}
                    <div className="col-md-6 right">
                        <div className="card h-100">
                            <div className="card-body p-0">
                                {/* Pass the coordinates to the Map component */}
                                <Map pickupCoordinates={pickupCoordinates} dropCoordinates={dropCoordinates} />
                            </div>
                        </div>
                    </div>
                </div>
            </LoadScript>
            <Suggestion />
        </div>

    );
};

export default Home;
