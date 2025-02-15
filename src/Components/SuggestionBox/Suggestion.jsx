import React, { useEffect, useState } from 'react';
import { suggesion } from '../../staticJSON';
import TruckDetails from '../TruckDetails/TruckDetails';

const Suggestion = ({ list ,location}) => {
    const [items, setItems] = useState([]);
    const [selectedTruck, setSelectedTruck] = useState(null);
    if (location) {
        var [pickupLocation, dropLocation] = location;
    }
    

    useEffect(() => {
        console.log(list);
        setItems(list ? list : suggesion);
    }, [list]);

    // Function to open Offcanvas with selected truck details
    const handleCardClick = (data) => {
        setSelectedTruck(data);
        const offcanvas = new window.bootstrap.Offcanvas(document.getElementById('offcanvasRight'));
        offcanvas.show();
    };

    return (
        <div className="mt-5">
            <h3 className="fw-bold mb-3"><u>Suggestion</u></h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {items && items.map((data, index) => (
                    <div className="col" key={index}>
                        <div className="card h-100" onClick={() => handleCardClick(data)}>
                            <div className="row g-0">
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="card-title fs-16 fw-bolder">
                                            {data.title || `Owner Name: ${data?.owner?.userName}`}
                                        </h6>
                                        <p className="card-text fs-12">
                                            {data?.Summary || `Get a quick and affordable ride with our service!`}
                                        </p>
                                        <button type="button" className="btn fs-14 rounded-pill text-bg-secondary">
                                            {data.action || 'Check Availability'}
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img src={data.img || 'https://cn-geo1.uber.com/static/mobile-content/launch-experience/ride.png'}
                                        className="img-fluid rounded-start" alt="car" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Offcanvas Component */}
            <TruckDetails selectedTruck={selectedTruck} location= {[pickupLocation,dropLocation]} />
        </div>
    );
};

export default Suggestion;
