import React, { Component } from "react";
import { connect } from "react-redux";

import "./style.scss"

import Seat from "./Seat";
import DetailChair from "./DetailChair";


class BaiTapDatGhe extends Component {
  renderContent = () => {
    return this.props.chairList.map((ele) => {
      return (
        <div key={ele.hang}>
          <Seat ele={ele} />
        </div>
      );
    });
  };

  render() {
    return (
      <div style={{ width: "100%" }} className="row">
        <div className="col-7">
          <h2>Đặt vé xem phim</h2>
          <div className="py-3">{this.renderContent()}</div>
        </div>
        <div className="col-5">
          <DetailChair />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairList: state.datGheReducer.chairList,
  };
};

export default connect(mapStateToProps)(BaiTapDatGhe);
