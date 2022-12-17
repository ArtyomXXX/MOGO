import React from 'react';
import people_say_1 from '../Images/what-people-say/1.jpg';
import people_say_2 from '../Images/what-people-say/2.jpg';
import people_say_3 from '../Images/what-people-say/3.jpg';
import people_say_4 from '../Images/what-people-say/4.jpg';

class WhatPeopleSay extends React.Component {
     render() {
        return ( 
          <div className='page'>
               <section className="section section--clients">
                    <div className="container">
                         <div className="section_header text-center">
                              <h3 className="section_suptitle">Happy clients</h3>
                              <h2 className="section_title">What people say</h2>
                         </div>

                         <div className="clients">
                              <div className="clients_item">
                                   <img className="clients_photo" src={people_say_1} alt="" />
                                   <div className="clients_info">
                                        <h4 className="clients_name">Matthew Dix</h4>
                                        <p className="clients_job_title">Graphic Design</p>
                                        <p className="clients_text">Lorem ipsum dolor sit amet,
                                             consectetur adipiscing elit, sed do eiusmod tempor
                                             incididunt ut labore et dolore magna aliqua.</p>
                                   </div>
                              </div>

                              <div className="clients_item">
                                   <img className="clients_photo" src={people_say_2} alt="" />
                                   <div className="clients_info">
                                        <h4 className="clients_name">Nick Karvounis</h4>
                                        <p className="clients_job_title">Graphic Design</p>
                                        <p className="clients_text">Sit amet, consectetur adipiscing elit,
                                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                   </div>
                              </div>

                              <div className="clients_item">
                                   <img className="clients_photo" src={people_say_3} alt="" />
                                   <div className="clients_info">
                                        <h4 className="clients_name">Jaelynn Castillo </h4>
                                        <p className="clients_job_title">Graphic Design</p>
                                        <p className="clients_text">Ipsum dolor sit amet, consectetur adipiscing elit,
                                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                             Ut enim ad minim veniam</p>
                                   </div>
                              </div>

                              <div className="clients_item">
                                   <img className="clients_photo" src={people_say_4} alt="" />
                                   <div className="clients_info">
                                        <h4 className="clients_name">Mike Petrucci</h4>
                                        <p className="clients_job_title">Graphic Design</p>
                                        <p className="clients_text">Dolor sit amet, consectetur adipiscing elit,
                                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                             Ut enim ad minim.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
        );
     }
}

export default WhatPeopleSay;