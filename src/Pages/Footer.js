import React from 'react';

import footer_blog_1 from '../Images/footer/blogs/1.jpg';
import footer_blog_2 from '../Images/footer/blogs/2.jpg';
import footer_blog_3 from '../Images/footer/blogs/3.jpg';

import footer_insta_1 from '../Images/footer/instagram/1.jpg';
import footer_insta_2 from '../Images/footer/instagram/2.jpg';
import footer_insta_3 from '../Images/footer/instagram/3.jpg';
import footer_insta_4 from '../Images/footer/instagram/4.jpg';
import footer_insta_5 from '../Images/footer/instagram/5.jpg';
import footer_insta_6 from '../Images/footer/instagram/6.jpg';
import footer_insta_7 from '../Images/footer/instagram/7.jpg';
import footer_insta_8 from '../Images/footer/instagram/8.jpg';
import footer_insta_9 from '../Images/footer/instagram/9.jpg';


class Footer extends React.Component {
    render() {
         return (
               <div className='page'>
                    <footer className="footer" id="contact">
                         <div className="container">
                              <div className="footer_inner">
                                   <div className="footer_col footer_col--first">
                                        <h1 className="footer_logo">MoGo</h1>
                                        <p className="footer_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                             nisi ut aliquip ex ea commodo consequat.</p>

                                        <div className="footer_social">
                                             <p className="f_social_header"><b>15k</b> followers</p>

                                             <div className="f_social_content">
                                                  <p>Follow Us:</p>
                                                  <a className="f_icon-1" href="https://www.facebook.com/login/" target="_blank" rel="noreferrer">
                                                       <i className="fa-brands fa-facebook-f"></i>
                                                  </a>
                                                  <a className="f_icon-2" href="https://twitter.com/login?lang=ru" target="_blank" rel="noreferrer">
                                                       <i className="fa-brands fa-twitter"></i>
                                                  </a>
                                                  <a className="f_icon-3" href="https://www.instagram.com/accounts/login/" target="_blank" rel="noreferrer">
                                                       <i className="fa-brands fa-instagram"></i>
                                                  </a>
                                                  <a className="f_icon-4" href="https://ru.pinterest.com/login/" target="_blank" rel="noreferrer">
                                                       <i className="fa-brands fa-pinterest-p"></i>
                                                  </a>
                                                  <a className="f_icon-5" href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1" target="_blank" rel="noreferrer">
                                                       <i className="fa-brands fa-google-plus-g"></i>
                                                  </a>
                                                  <a className="f_icon-6" href="https://www.youtube.com/watch?v=-9gEgshJUuY" target="_blank" rel="noreferrer">
                                                       <i className="fa-brands fa-youtube"></i>
                                                  </a>
                                                  <a className="f_icon-7" href="https://dribbble.com/shots/popular/web-design" target="_blank" rel="noreferrer">
                                                       <i className="fa-brands fa-dribbble"></i>
                                                  </a>
                                                  <a className="f_icon-8" href="https://www.tumblr.com/explore/trending?source=homepage_explore" target="_blank" rel="noreferrer">
                                                       <i className="fa-brands fa-tumblr"></i>
                                                  </a>
                                             </div>

                                        </div>

                                        <form className="subscribe" action="/" method="post">
                                             <input type="email" name="email" placeholder="Your Email..." />
                                             <button type="submit">Subscribe</button>
                                        </form>
                                   </div>

                                   <div className="footer_col footer_col--second">
                                        <div className="footer_title">Blogs</div>

                                        <div className="blogs">
                                             <div className="blogs_item">
                                                  <img className="blogs_img" src={footer_blog_1} alt="" />
                                                  <div className="blogs_content">
                                                       <a className="blogs_title" href="/">Lorem ipsum dolor sit amet,
                                                            consectetur adipiscing</a>
                                                       <p className="blogs_data">Jan 9, 2016</p>
                                                  </div>
                                             </div>

                                             <div className="blogs_item">
                                                  <img className="blogs_img" src={footer_blog_2} alt="" />
                                                  <div className="blogs_content">
                                                       <a className="blogs_title" href="/">Consectetur adipiscing elit,
                                                            sed do eiusmod temporg</a>
                                                       <p className="blogs_data">Jan 9, 2016</p>
                                                  </div>
                                             </div>

                                             <div className="blogs_item">
                                                  <img className="blogs_img" src={footer_blog_3} alt="" />
                                                  <div className="blogs_content">
                                                       <a className="blogs_title" href="/">sed do eiusmod tempor
                                                            incididunt ut labore</a>
                                                       <p className="blogs_data">Jan 9, 2016</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="footer_col footer_col--third">
                                        <div className="footer_title">Instagram</div>

                                        <div className="instagram">
                                             <a className="instagram_item" href="/" target="_blank">
                                                  <img src={footer_insta_1} alt="" />
                                             </a>
                                             <a className="instagram_item" href="/" target="_blank">
                                                  <img src={footer_insta_2} alt="" />
                                             </a>
                                             <a className="instagram_item" href="/" target="_blank">
                                                  <img src={footer_insta_3} alt="" />
                                             </a>
                                             <a className="instagram_item" href="/" target="_blank">
                                                  <img src={footer_insta_4} alt="" />
                                             </a>
                                             <a className="instagram_item" href="/" target="_blank">
                                                  <img src={footer_insta_5} alt="" />
                                             </a>
                                             <a className="instagram_item" href="/" target="_blank">
                                                  <img src={footer_insta_6} alt="" />
                                             </a>
                                             <a className="instagram_item" href="/" target="_blank">
                                                  <img src={footer_insta_7} alt="" />
                                             </a>
                                             <a className="instagram_item" href="/" target="_blank">
                                                  <img src={footer_insta_8} alt=""/>
                                             </a>
                                             <a className="instagram_item" href="/" target="_blank">
                                                  <img src={footer_insta_9} alt=""/>
                                             </a>
                                        </div>
                                        <a className="link_img" href="/" target="_blank">View more photos</a>
                                   </div>
                              </div>

                              <div className="copyright text-center">
                                   &copy; 2016 MoGo free PSD template by <span>Laaqiq</span>
                              </div>
                         </div>
                   </footer>
              </div>
          );
     }
}

export default Footer;