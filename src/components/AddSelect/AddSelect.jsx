import React, { useEffect, useState } from 'react';

const AddSelect = ({ breeds, onSelectChange }) => {
    const [breed, setBreed] = useState({});

    useEffect(() => {
        fetch(breeds)
            .then(res => res.json())
            .then(res => setBreed(res.message))
    }, []);

    const handleSelectChange = (event) => {
        let selectedBreed = event.target.value;
        onSelectChange(selectedBreed);
    };

    return (
        <select className='dog-selection' onChange={handleSelectChange}>
            <option value="Empty">Empty</option>
            {Object.keys(breed).map((breedName, index) => (
                <option key={index} value={breedName}>
                    {breedName.charAt(0).toUpperCase() + breedName.slice(1).toLowerCase()}
                </option>
            ))}
        </select>
    );
};

export default AddSelect;