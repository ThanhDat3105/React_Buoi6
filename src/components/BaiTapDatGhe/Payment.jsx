import React, { Component } from "react";
import { paymentChairAction } from "../../store/actions/datgheAction";

import { connect } from "react-redux";

class Payment extends Component {
  handlePayment = () => {
    this.props.dispatch(paymentChairAction());
  };

  render() {
    return (
      <div className=" d-flex justify-content-center">
        <button
          onClick={this.handlePayment}
          style={{ width: "80%" }}
          className="btn btn-primary mb-4"
        >
          Thanh Toán
        </button>
      </div>
    );
  }
}

export default connect()(Payment);
