import React from 'react';
import Ipad from '../Images/feature/ipad.png';
import Iphone from '../Images/feature/iphone.png';

class Feature extends React.Component {
    render() {
       return (
          <div className='page'>
               <section className="section section--devices">
                    <div className="container">
                         <div className="section_header text-center" style={{marginBottom: 0}}>
                              <h3 className="section_suptitle">For all devices</h3>
                              <h2 className="section_title">Unique design</h2>
                         </div>
                         <div className="devices text-center">
                              <img className="devices_item devices__item--ipad" src={Ipad} a alt="" />
                              <img className="devices_item devices__item--iphone" src={Iphone} alt="" />
                         </div>
                    </div>
               </section>
        </div>
       );
  }
}

export default Feature;