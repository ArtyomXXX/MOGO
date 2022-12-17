import React from 'react';
import work_1 from '../Images/work/1.jpg';
import work_2 from '../Images/work/2.jpg';
import work_3 from '../Images/work/3.jpg';
import work_4 from '../Images/work/4.jpg';
import work_5 from '../Images/work/5.jpg';
import work_6 from '../Images/work/6.jpg';
import work_7 from '../Images/work/7.jpg';

class Works extends React.Component {
     render() {
         return (
            <div className='page'>
                    <section className="section section--work" id="work">
                         <div className="container">
                              <div className="section_header text-center">
                                   <h3 className="section_suptitle">What we do</h3>
                                   <h2 className="section_title">Some of our work</h2>
                                   <div className="section_text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                             nisi ut aliquip ex ea commodo consequat.</p>
                                   </div>
                              </div>
                         </div>

                         <div className="works">
                              <div className="works_col">
                                   <div className="works_item">
                                        <img className="works_img" src={work_1} alt="" />
                                        <div className="works_info text-center">
                                             <i className="fa-regular fa-image works_icon"></i>
                                             <div className="works_title">creatively designed</div>
                                             <div className="works_text">Lorem ipsum dolor sit</div>
                                        </div>
                                   </div>

                                   <div className="works_item">
                                        <img className="works_img" src={work_2} alt="" />
                                        <div className="works_info text-center">
                                             <i className="fa-regular fa-image works_icon"></i>
                                             <div className="works_title">creatively designed</div>
                                             <div className="works_text">Lorem ipsum dolor sit</div>
                                        </div>
                                   </div>
                              </div>

                              <div className="works_col">
                                   <div className="works_item">
                                        <img className="works_img" src={work_3} alt="" />
                                        <div className="works_info text-center">
                                             <i className="fa-regular fa-image works_icon"></i>
                                             <div className="works_title">creatively designed</div>
                                             <div className="works_text">Lorem ipsum dolor sit</div>
                                        </div>
                                   </div>

                                   <div className="works_item">
                                        <img className="works_img" src={work_4} alt="" />
                                        <div className="works_info text-center">
                                             <i className="fa-regular fa-image works_icon"></i>
                                             <div className="works_title">creatively designed</div>
                                             <div className="works_text">Lorem ipsum dolor sit</div>
                                        </div>
                                   </div>
                              </div>

                              <div className="works_col">
                                   <div className="works_item">
                                        <img className="works_img" src={work_5} alt="" />
                                        <div className="works_info text-center">
                                             <i className="fa-regular fa-image works_icon"></i>
                                             <div className="works_title">creatively designed</div>
                                             <div className="works_text">Lorem ipsum dolor sit</div>
                                        </div>
                                   </div>
                              </div>

                              <div className="works_col">
                                   <div className="works_item">
                                        <img className="works_img" src={work_6} alt="" />
                                        <div className="works_info text-center">
                                             <i className="fa-regular fa-image works_icon"></i>
                                             <div className="works_title">creatively designed</div>
                                             <div className="works_text">Lorem ipsum dolor sit</div>
                                        </div>
                                   </div>

                                   <div className="works_item">
                                        <img className="works_img" src={work_7} alt="" />
                                        <div className="works_info text-center">
                                             <i className="fa-regular fa-image works_icon"></i>
                                             <div className="works_title">creatively designed</div>
                                             <div className="works_text">Lorem ipsum dolor sit</div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
               </div>
          );
     }
}

export default Works;