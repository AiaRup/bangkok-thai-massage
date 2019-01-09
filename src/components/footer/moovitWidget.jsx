import React, { Component } from 'react';

class MoovitWidget extends Component {
  // componentWillMount = () => {
  //   console.log('will mount');
  //   this.createWidgwt(document, 'script', 'moovit-jsw');
  // };

  // createWidgwt = (d, s, id) => {
  //   let js,
  //     fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) return;
  //   js = d.createElement(s);
  //   js.id = id;
  //   js.src =
  //     'https://widgets.moovit.com/ws/7EDFF83D3FC1BB10E0530100007FE537/2185310';
  //   fjs.parentNode.insertBefore(js, fjs);
  // };

  render() {
    console.log('render');
    // this.createWidgwt(document, 'script', 'moovit-jsw');

    return (
      <div className="col-md px-lg-5 p-3">
        <div className="mv-gd-widget-20" data-width="100%" data-height="100%" />
      </div>
    );
  }
}

export default MoovitWidget;
