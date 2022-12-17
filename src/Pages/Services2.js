import React from 'react';
import Accordion from '../Components/Accordion';
import { accordionData } from '../utils/AccordionContent';
import service2_Img_1 from '../Images/service2/picture.jpg';

const Services2 = () => {
     return (
          <div className='page'>
               <section className="section" id="services">
                         <div className="container">
                              <div className="section_header text-center">
                                   <h3 className="section_suptitle">Service</h3>
                                   <h2 className="section_title">What we do</h2>
                                   <div className="section_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                             nisi ut aliquip ex ea commodo consequat.</p>
                                   </div>
                              </div>

                              <div className="services2">
                                   <div className="services2_item">
                                        <img className="services2_img" src={service2_Img_1} alt="" />
                                   </div>

                                   <div className="services2_item">
                                        <div className="accordion">
                                             {accordionData.map(({photo, title, content}) => (
                                                  <Accordion photo={photo} title={title} content={content} />
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         </div>
               </section>
          </div>
     );
}

export default Services2;