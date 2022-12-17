import React from 'react';
import SPEECH  from '../Images/quote/SPEECH 4.png';

class Quote extends React.Component {
     render() {
        return (
          <div className='page'>
               <section className="section section--grey">
                    <div className="container">
                         <div className="quote">
                              <a className="quote_btn quote_btn--prev" href="/">Prev</a>
                              <a className="quote_btn quote_btn--next" href="/">Next</a>

                              <div data-slider>
                                   <div>
                                   <div className="quote_item">
                                        <div className="quote_icon">
                                             <img src={SPEECH} alt="" />
                                        </div>
                                        <p className="quote_text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation."</p>
                                        <div className="quote_author">Jon Doy</div>
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

export default Quote;