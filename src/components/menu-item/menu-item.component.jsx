import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({item}) => {
    return (
            <div className={`${item.size} menu-item`}>
                <div
                 className='background-image'
                 style={
                     {
                         backgroundImage: `url(${item.imageUrl})`
                     }
                 }
                >
                </div>
                <div className='content'>
                    <div className='title'>{item.title.toUpperCase()}</div>
                    <span className='subtitle'>SHOP KNOW</span>
                </div>
            </div>
    );
};

export default MenuItem;
