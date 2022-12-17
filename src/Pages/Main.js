import React from 'react';

function  Main() {
      return(
            <div className="page">
                <main className="main_section" id="main_section">
                    <div className="container">
                        <div className="main_content text-center">
                            <h3 className="main_suptitle">Creative Template</h3>
                            <h1 className="main_title">Welcome<br/>to MoGo</h1>
                            <a className="btn" target="_blank" href="/">learn more</a>
                        </div>

                        <div className="slider">
                            <div className="slider_item active">
                                    <spam className="slider_num">01 </spam>
                                    <spam className="slider_text">intro</spam>
                            </div>
                            <div className="slider_item">
                                    <spam className="slider_num">02 </spam>
                                    <spam className="slider_text">work</spam>
                            </div>
                            <div className="slider_item">
                                    <spam className="slider_num">03 </spam>
                                    <spam className="slider_text">about</spam>
                            </div>
                            <div className="slider_item">
                                    <spam className="slider_num">04 </spam>
                                    <spam className="slider_text">contacts</spam>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

export default Main;