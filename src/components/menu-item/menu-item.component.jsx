import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';


const MenuItem = ({size, title, linkUrl, imageUrl, history, match}) => {
    return (
            <div
                onClick={()=> {history.push(`${match.url}${linkUrl}`)}}
                className={`${size} menu-item`}>
                <div
                 className='background-image'
                 style={
                     {
                         backgroundImage: `url(${imageUrl})`
                     }
                 }
                >
                </div>
                <div className='content'>
                    <div className='title'>{title.toUpperCase()}</div>
                    <span className='subtitle'>SHOP KNOW</span>
                </div>
            </div>
    );
};

export default withRouter(MenuItem);
