import React from 'react';

class Statistics extends React.Component {
     render() {
        return (
           <div className='page'>
               <div className="statistics">
                    <div className="container">
                         <div className="stat text-center">
                              <div className="stat_item">
                                   <div className="stat_count">42</div>
                                   <div className="stat_text">Web Design Projects</div>
                              </div>
                              <div className="stat_item">
                                   <div className="stat_count">123</div>
                                   <div className="stat_text">Happy Client</div>
                              </div>
                              <div className="stat_item">
                                   <div className="stat_count">15</div>
                                   <div className="stat_text">Award Winner</div>
                              </div>
                              <div className="stat_item">
                                   <div className="stat_count">99</div>
                                   <div className="stat_text">Cup of Coffee</div>
                              </div>
                              <div className="stat_item">
                                   <div className="stat_count">24</div>
                                   <div className="stat_text">Members</div>
                              </div>
                         </div>
                    </div>
               </div>
           </div>
          );
     }
}

export default Statistics;