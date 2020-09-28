import React from 'react';
import ContextInfoStyle from './ContextInfo.module.css';

const ContextInfo = (props) => {
    return (<div className={ContextInfoStyle.divLogo}>
        <div className={ContextInfoStyle.divOne}>
            <img className={ContextInfoStyle.logoImg} src='https://image.flaticon.com/icons/svg/2569/2569923.svg' />
        </div>
        <div className={ContextInfoStyle.divTwo}>
            <span className={ContextInfoStyle.name}>
                Sasha K.
            </span><br />
            <div className={ContextInfoStyle.infoAbout}>
                Date of Birth: 15 December<br />
                City: Moscow<br />
                Education: school<br />
                Web Site: https://github.com
            </div>
        </div>
    </div>);
};

export default ContextInfo;