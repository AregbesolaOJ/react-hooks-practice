import React from 'react'

const Banner = () => {
    return (
        <>
            <h2 className="my-header">Responsive Banner</h2>
            <div className="banner">
                <div className="banner-item">
                    <div className="banner-item-content">
                        <img src={require('./assets/EDJm1D3XUAAeU_S.jpeg')} alt="" />
                        <p>Roro</p>                        
                    </div>
                </div>
                <div className="banner-item">
                    <div className="banner-item-content">
                        <img src={require('./assets/EDJm1D3XUAAeU_S.jpeg')} alt="" />
                        <p>Roro</p>                        
                    </div>
                </div>
                <div className="banner-item">
                    <div className="banner-item-content">
                        <img src={require('./assets/EDJm1D3XUAAeU_S.jpeg')} alt="" />
                        <p>Roro</p>                        
                    </div>
                </div>
                <div className="banner-item">
                    <div className="banner-item-content">
                        <img src={require('./assets/EDJm1D3XUAAeU_S.jpeg')} alt="" />
                        <p>Roro</p>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
