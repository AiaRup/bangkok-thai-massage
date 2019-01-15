import React, { Component } from 'react';

class MoovitWidget extends Component {
  componentDidMount = () => {
    this.createWidgwt(document, 'script', 'moovit-jsw');
  };

  createWidgwt = (d, s, id) => {
    let js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src =
      'https://widgets.moovit.com/ws/7EDFF83D3FC1BB10E0530100007FE537/2193290';
    fjs.parentNode.insertBefore(js, fjs);
  };

  render() {
    // this.createWidgwt(document, 'script', 'moovit-jsw');

    return (
      <div className="mv-gd-widget-20" data-width="100%" data-height="100%" />
    );
  }
}

export default MoovitWidget;
