import "./App.css";
import { useState } from 'react';
import AddSelect from './components/AddSelect/AddSelect';
import RenderImg from "./components/RenderImg/RenderImg";

const App = () => {
    const [dataImg, setDataImg] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [breed, setBreed] = useState('');
    const [value, setValue] = useState(1);

    const urls = {
        random : `https://dog.ceo/api/breeds/image/random/${value}`,
        breed: 'https://dog.ceo/api/breeds/list/all',
        randomBreeds: `https://dog.ceo/api/breed/${breed}/images/random/${value}`
    }

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const clickHandler = async () => {
        const res = await fetch(urls.random);
        const data = await res.json();
        setDataImg(data);
    }

    const handleSelectChange = (selectedBreed) => {
        setBreed(selectedBreed);
    }

    const clickHandlerBreed = async () => {
        const res = await fetch(urls.randomBreeds);
        const data = await res.json();
        setDataImg(data);
    }

    return (
        <div className='App'>
            <h2 className='App__title'>Dog's breed</h2>
            
            <div className="dog-app">
                {
                    isChecked ? <AddSelect breeds={ urls.breed } onSelectChange={handleSelectChange}/> : '' 
                }
                <label className="dog-app__checkbox">
                    Select breed
                    <input 
                        type="checkbox" 
                        onClick={ toggleCheckbox } 
                        checked={ isChecked }
                        onChange={ handleSelectChange }
                    />
                </label>
                <label className="dog-app__range">
                    Number of img
                    <input 
                        type="range" 
                        value={value} 
                        min="1" 
                        max="10" 
                        onChange={(e) => setValue(e.target.value) }
                    />
                    <p> { value } </p>
                </label>

                <button className="dog-app__get-btn" onClick={ !isChecked ? clickHandler : clickHandlerBreed }>
                    { !isChecked ? 'Get random dog': 'Get dog for breed'}
                </button>

                <RenderImg dataImg={dataImg}/>
            </div>

        </div>
    );
};

export default App
