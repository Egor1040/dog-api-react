import React from 'react';

const RenderImg = ({ dataImg }) => {
    return (
        <>
            {dataImg.status === 'error' || dataImg === ''
                ?
                <div className="dog-single">
                    <div className="dog-single__img">
                        <img key="default img" src='./img/Image_not_available.png' alt="" />
                    </div>
                </div>
                :
                <div className="dog-single">
                    {dataImg.message.map((img, index) => (
                        <div className="dog-single__img" key={ index }>
                            <img src={img} alt=""/>
                        </div>
                    ))}
                </div>
            }
        </>
    );
};

export default RenderImg;