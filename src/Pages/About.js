import React from 'react';
import about_Img_1 from '../Images/about/1.jpg';
import about_Img_2 from '../Images/about/2.jpg';
import about_Img_3 from '../Images/about/3.jpg';
import about_USERS from '../Images/about/USERS.png';

class About extends React.Component {
     render() {
        return (
          <div className="page">
               <section className="section" id="about">
                    <div className="container">
                         <div className="section_header text-center">
                              <h3 className="section_suptitle">What we do</h3>
                              <h2 className="section_title">Story about us</h2>
                              <div className="section_text">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.</p>
                              </div>
                         </div>

                         <div className="about">

                              <div className="about_item">
                                   <div className="about_inner">
                                        <div className="about_img">
                                             <img className="img" src={about_Img_1} alt="" />

                                             <div className="img_content text-center">
                                                  <img src={about_USERS} alt="" />
                                                  <div className="img_text">Super team</div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="about_item">
                                   <div className="about_inner">
                                        <div className="about_img">
                                             <img className="img" src={about_Img_2} alt="" />

                                             <div className="img_content text-center">
                                                  <img src={about_USERS} alt="" />
                                                  <div className="img_text">Super team</div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="about_item">
                                   <div className="about_inner">
                                        <div className="about_img">
                                             <img className="img" src={about_Img_3} alt="" />

                                             <div className="img_content text-center">
                                                  <img src={about_USERS} alt="" />
                                                  <div className="img_text">Super team</div>
                                             </div>
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

export default About;