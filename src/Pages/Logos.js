import React from 'react';
import logo_1 from '../Images/logos/1.png';
import logo_2 from '../Images/logos/2.png';
import logo_3 from '../Images/logos/3.png';
import logo_4 from '../Images/logos/4.png';
import logo_5 from '../Images/logos/5.png';
import logo_6 from '../Images/logos/6.png';


class Logos extends React.Component {
    render() {
       return (
          <div className='page'>
               <section className="section_logo section--grey">
                    <div className="container">
                         <div className="logos">
                              <div className="logos_item">
                                   <img className="logos_img" src={logo_1} alt="" />
                              </div>
                              <div className="logos_item">
                                   <img className="logos_img" src={logo_2} alt="" />
                              </div>
                              <div className="logos_item">
                                   <img className="logos_img" src={logo_3} alt="" />
                              </div>
                              <div className="logos_item">
                                   <img className="logos_img" src={logo_4} alt="" />
                              </div>
                              <div className="logos_item">
                                   <img className="logos_img" src={logo_5} alt="" />
                              </div>
                              <div className="logos_item">
                                   <img className="logos_img" src={logo_6} alt="" />
                              </div>
                         </div>
                    </div>
              </section>
          </div>
        );
     }
}

export default Logos;