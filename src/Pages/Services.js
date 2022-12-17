import React from 'react';
import ALARM  from '../Images/service/ALARM.jpg';
import BOOK from '../Images/service/BOOK 2.jpg';
import COMPUTER from '../Images/service/COMPUTER _ OK.jpg';
import HOME from '../Images/service/HOME.jpg';
import IMAGE from '../Images/service/IMAGE.jpg';
import LINE_GRAPH from '../Images/service/LINE GRAPH.jpg';

class Services extends React.Component {
     render() {
        return (
          <div className='page'>
               <section className="section">
                    <div className="container">
                         <div className="section_header text-center">
                              <h4 className="section_suptitle">We work with</h4>
                              <h3 className="section_title">Amazing Services</h3>
                         </div>

                         <div className="services">
                              <div className="services_item services_item--border">
                                   <img className="services_icon" src={ALARM} alt="" />
                                   <h3 className="services_title">Photography</h3>
                                   <p className="services_text">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor.</p>
                              </div>
                              <div className="services_item services_item--border">
                                   <img className="services_icon" src={LINE_GRAPH} alt="" />
                                   <h3 className="services_title">Web Design</h3>
                                   <p className="services_text">Ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor.</p>
                              </div>
                              <div className="services_item services_item--border">
                                   <img className="services_icon" src={COMPUTER} alt="" />
                                   <h3 className="services_title">Creativity</h3>
                                   <p className="services_text">Dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor.</p>
                              </div>
                              <div className="services_item">
                                   <img className="services_icon" src={BOOK} alt="" />
                                   <h3 className="services_title">SEO</h3>
                                   <p className="services_text">Ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod.</p>
                              </div>
                              <div className="services_item">
                                   <img className="services_icon" src={HOME} alt="" />
                                   <h3 className="services_title">Css/Html</h3>
                                   <p className="services_text">Lorem dolor sit amet,
                                        consectetur adipiscing elit, sed do tempor.</p>
                              </div>
                              <div className="services_item">
                                   <img className="services_icon" src={IMAGE} alt="" />
                                   <h3 className="services_title">digital</h3>
                                   <p className="services_text">Sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor.</p>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
         );
     }
}

export default Services;