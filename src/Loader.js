import React from 'react'

export default function Loader() {
    return (
        <div className="loading-spinner">
            <img 
                src={require('../src/assets/rotating-spinner.gif')} 
                height={80} 
                width={80} 
                alt="loader"
            />
        </div>
    )
}
