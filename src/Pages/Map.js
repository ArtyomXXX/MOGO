import React from 'react';

class Map extends React.Component {
     render() {
        return (
          <div className="page">
               <section className="section section--map">
                    <div className="container">
                         <h2 className="map_title text-center">
                              <div><i className="fa-solid fa-location-dot"></i></div>
                              <a className="map_link" href="https://goo.gl/maps/NCemzeYAD7G1S27GA" target="_blank" rel="noreferrer">Open map</a>
                         </h2>
                    </div>
               </section>
          </div>
          );
     }
}

export default Map;