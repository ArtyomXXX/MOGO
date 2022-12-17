import React from 'react';

const Accordion = ({photo, title, content}) => {
    const [isActive, setIsActive] = React.useState(false);
    
    return (
        <div className='accordion_item'>
                <div className={`accordion_header ${isActive ? 'active accordion_header::after' : ''}`} onClick={() => setIsActive(!isActive)}>
                    <img className="accordion_icon" src={photo} alt="" />
                    <h3 className="accordion_title">{title}</h3>
                </div>
                {
                    isActive && 
                    <div className="accordion_content accordion_text">
                        {content}
                    </div>
                }
        </div>
    );
}

export default Accordion;