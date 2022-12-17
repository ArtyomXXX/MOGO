import React from 'react';
import blog_1 from '../Images/blog/1.jpg';
import blog_2 from '../Images/blog/2.jpg';
import blog_3 from '../Images/blog/3.jpg';

class Blog extends React.Component {
    render() {
        return (
          <div className='page'>
               <section className="section" id="blog">
                    <div className="container">
                         <div className="section_header text-center">
                              <h3 className="section_suptitle">Our stories</h3>
                              <h2 className="section_title">Latest blog</h2>
                         </div>

                         <div className="blog">
                              <div className="blog_item">
                                   <div className="blog_header">
                                        <img className="blog_photo" src={blog_1} alt="" />
                                        <div className="blog_data text-center">
                                             <h1 className="blog_data--day ">15</h1>
                                             <p>Jan</p>
                                        </div>
                                   </div>

                                   <div className="blog_content">
                                        <div className="blog_title">
                                             <a href="/">Lorem ipsum dolor sit amet</a>
                                        </div>
                                        <p className="blog_text">Consectetur adipiscing elit, sed do eiusmod tempor
                                             incididunt ut labore et magna aliqua.</p>
                                   </div>

                                   <div className="blog_footer">
                                        <div className="blog_stat">
                                             <span className="blog-stat_item">
                                                  <i className="fa-solid fa-eye"></i> 542
                                             </span>
                                             <span className="blog-stat_item">
                                                  <i className="fa-brands fa-rocketchat"></i> 17
                                             </span>
                                        </div>
                                   </div>
                              </div>

                              <div className="blog_item">
                                   <div className="blog_header">
                                        <img className="blog_photo" src={blog_2} alt="" />
                                        <div className="blog_data text-center">
                                             <h1 className="blog_data--day ">14</h1>
                                             <p>Jan</p>
                                        </div>
                                   </div>

                                   <div className="blog_content">
                                        <div className="blog_title">
                                             <a href="/">Sed do eiusmod tempor</a>
                                        </div>
                                        <p className="blog_text">Adipiscing elit, sed do eiusmod tempor incididunt
                                             ut labore et dolore magna aliqua.</p>
                                   </div>

                                   <div className="blog_footer">
                                        <div className="blog_stat">
                                             <span className="blog-stat_item">
                                                  <i className="fa-solid fa-eye"></i> 992
                                             </span>
                                             <span className="blog-stat_item">
                                                  <i className="fa-brands fa-rocketchat"></i> 42
                                             </span>
                                        </div>
                                   </div>
                              </div>

                              <div className="blog_item">
                                   <div className="blog_header">
                                        <img className="blog_photo" src={blog_3} alt="" />
                                        <div className="blog_data text-center">
                                             <h1 className="blog_data--day ">12</h1>
                                             <p>Jan</p>
                                        </div>
                                   </div>

                                   <div className="blog_content">
                                        <div className="blog_title">
                                             <a href="/">Incididunt ut labore et dolore</a>
                                        </div>
                                        <p className="blog_text">Elit, sed do eiusmod tempor incididunt
                                             ut labore et dolore magna aliqua.</p>
                                   </div>

                                   <div className="blog_footer">
                                        <div className="blog_stat">
                                             <span className="blog-stat_item">
                                                  <i className="fa-solid fa-eye"></i> 1560
                                             </span>
                                             <span className="blog-stat_item">
                                                  <i className="fa-brands fa-rocketchat"></i> 98
                                             </span>
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

export default Blog;