import React, { Component } from 'react';

class Price extends Component {
  render() {
    return (
      <div className="card my-4 shadow-sm price-card">
        <div className="card-header">
          <div className="card-header-content">
            <div className="bg-heading" />
            <div className="my-0 font-weight-normal header-price-name">
              <span>{this.props.enName}</span>
            </div>
            <div className="price-tag">
              <p>
                <span className="shekel-sign">&#x20AA;</span>
                <span className="header-price">
                  {this.props.prices[0].price}
                </span>
                <span className="header-min"> /{this.props.prices[0].min}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-unstyled">
            {this.props.prices.map((p, index) => (
              <li className="price-option" key={index}>
                {p.min} - <span>{p.price} &#x20AA;</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Price;
