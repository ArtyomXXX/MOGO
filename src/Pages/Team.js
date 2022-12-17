import React from 'react';
import team_Img_1 from '../Images/our-team/1.jpg';
import team_Img_2 from '../Images/our-team/2.jpg';
import team_Img_3 from '../Images/our-team/3.jpg';

class Team extends React.Component {
     render() {
         return (
          <div className='page'>
               <section className="section">
                    <div className="container">
                         <div className="section_header text-center">
                              <h3 className="section_suptitle">Who we are</h3>
                              <h2 className="section_title">Meet our team</h2>
                              <div className="section_text">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.</p>
                              </div>
                         </div>

                         <div className="card">
                              <div className="card_item">
                                   <div className="card_inner">
                                        <div className="card_img">
                                             <img src={team_Img_1} alt="" />

                                             <div className="card_text text-center">
                                                  <div className="social">
                                                       <a className="social_item" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-facebook-f size_fix"></i>
                                                       </a>
                                                       <a className="social_item" href="https://twitter.com/?lang=ru" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-twitter size_fix"></i>
                                                       </a>
                                                       <a className="social_item" href="https://ru.pinterest.com/" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-pinterest-p size_fix"></i>
                                                       </a>
                                                       <a className="social_item" href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-instagram"></i>
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="card_info text-center">
                                        <h4 className="name">Matthew Dix</h4>
                                        <p className="job_title">Graphic Design</p>
                                   </div>
                              </div>

                              <div className="card_item">
                                   <div className="card_inner">
                                        <div className="card_img">
                                             <img src={team_Img_2} alt="" />

                                             <div className="card_text text-center">
                                                  <div className="social">
                                                       <a className="social_item" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-facebook-f size_fix"></i>
                                                       </a>
                                                       <a className="social_item" href="https://twitter.com/?lang=ru" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-twitter size_fix"></i>
                                                       </a>
                                                       <a className="social_item" href="https://ru.pinterest.com/" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-pinterest-p size_fix"></i>
                                                       </a>
                                                       <a className="social_item" href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-instagram"></i>
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="card_info text-center">
                                        <h4 className="name">Christopher Campbell</h4>
                                        <p className="job_title">Branding/UX design</p>
                                   </div>
                              </div>

                              <div className="card_item">
                                   <div className="card_inner">
                                        <div className="card_img">
                                             <img src={team_Img_3} alt="" />

                                             <div className="card_text text-center">
                                                  <div className="social">
                                                       <a className="social_item" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-facebook-f size_fix"></i>
                                                       </a>
                                                       <a className="social_item" href="https://twitter.com/?lang=ru" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-twitter size_fix"></i>
                                                       </a>
                                                       <a className="social_item" href="https://ru.pinterest.com/" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-pinterest-p size_fix"></i>
                                                       </a>
                                                       <a className="social_item" href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
                                                            <i className="fa-brands fa-instagram"></i>
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="card_info text-center">
                                        <h4 className="name">Michael Fertig</h4>
                                        <p className="job_title">Developer</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </div>
        );
     }
}

export default Team;