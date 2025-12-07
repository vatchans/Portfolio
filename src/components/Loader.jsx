import React from 'react';

const Loader = () => {
    return (
        <div className='loader-overlay'>
            <div className='loader'>
                <div className='loader-circle'></div>
                <p className='loader-text'>Crafting your experience...</p>
            </div>
        </div>
    );
};

export default Loader;
