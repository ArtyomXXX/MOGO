import React from 'react';
import testimonial_photo from '../Images/testimonial/photo.png';

class Testimonial extends React.Component {
     render() {
         return (
               <div className='page'>
                    <section className="section section--testimonial">
                         <div className="container">
                              <div className="testimonial">
                                   <a className="testimonial_btn testimonial_btn--prev" href="/">Prev</a>
                                   <a className="testimonial_btn testimonial_btn--next" href="/">Next</a>

                                   <div data-slider>
                                        <div>
                                        <div className="testimonial_item">
                                             <img className="testimonial_photo" src={testimonial_photo} alt="" />
                                             <p className="testimonial_text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                             Ut enim ad minim veniam, quis nostrud exercitation."</p>
                                             <div className="testimonial_author">Joshua Earle</div>
                                        </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                   </section>
               </div>
          );
     }
}

export default Testimonial;