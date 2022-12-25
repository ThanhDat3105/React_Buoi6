import React, { Component } from "react";

export default class Comment extends Component {
  render() {
    return (
      <div className="pb-4">
        {" "}
        <div className="detail">
          <div
            style={{ width: "44px", height: "44px", borderRadius: "6px" }}
            className="chair booked"
          ></div>
          <p className="content ml-2">Ghế đã đặt</p>
        </div>
        <div className="detail">
          <div
            style={{ width: "44px", height: "44px", borderRadius: "6px" }}
            className="chair selected"
          ></div>
          <p className="content ml-2">Ghế đang chọn</p>
        </div>
        <div className="detail">
          <div
            style={{ width: "44px", height: "44px", borderRadius: "6px" }}
            className="chair available"
          ></div>
          <p className="content ml-2">Ghế chưa đặt</p>
        </div>
      </div>
    );
  }
}
