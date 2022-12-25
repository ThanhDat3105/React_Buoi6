import React, { Component } from "react";
import { connect } from "react-redux";
import Bill from "./Bill";
import Payment from "./Payment";

class Table extends Component {
  renderContent = () => {
    return this.props.chairSelected.map((element) => {
      return <Bill key={element.soGhe} element={element} />;
    });
  };

  render() {
    return (
      <>
        <table className="table table-bordered table-dark">
          <thead>
            <tr className="text-white">
              <th scope="col">Số ghế</th>
              <th scope="col">Giá</th>
              <th scope="col">Hủy</th>
            </tr>
          </thead>
          <tbody>
            {this.renderContent()}
            <tr>
              <th scope="row">Tổng tiền</th>
              <td>
                {this.props.total.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </td>
            </tr>
          </tbody>
        </table>
        <Payment />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chairSelected: state.datGheReducer.chairSelected,
    total: state.datGheReducer.total,
  };
};

export default connect(mapStateToProps)(Table);
