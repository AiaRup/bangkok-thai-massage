import React, { Component } from 'react';
import Price from './price';

class Treatment extends Component {
  state = {
    showPrices: true
  };

  handleShowPrices = () => {
    this.setState(prevState => ({
      showPrices: !prevState.showPrices
    }));
  };

  render() {
    return (
      <div className="row mb-4">
        <div className="col-lg-4 align-self-center">
          {this.state.showPrices && (
            <Price prices={this.props.prices} enName={this.props.enName} />
          )}
        </div>

        <div className="col-lg-4 align-self-center">{this.props.content}</div>
        <div className="col-lg-4 align-self-center">
          <h2 className="treatment-name english">{this.props.enName}</h2>
          <h3 className="treatment-name">{this.props.heName}</h3>
          <img
            src={this.props.image}
            alt={this.props.enName}
            className="treatment-image my-3"
          />
        </div>
      </div>
      // <div className="col-lg-3">
      //   <img
      //     src={this.props.image}
      //     alt={this.props.enName}
      //     className="treatment-image"
      //   />
      //   <h2 className="treatment-name english">{this.props.enName}</h2>
      //   <h3 className="treatment-name">{this.props.heName}</h3>
      //   <p>{this.props.content}</p>
      //   <p>
      //     <button
      //       className="btn btn-secondary price-button"
      //       type="button"
      //       onClick={this.handleShowPrices}>
      //       Prices / מחירון &raquo;
      //     </button>
      //   </p>
      //   {this.state.showPrices && (
      //     <Price prices={this.props.prices} enName={this.props.enName} />
      //   )}
      // </div>
    );
  }
}

export default Treatment;
