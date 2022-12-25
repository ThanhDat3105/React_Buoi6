import React, { Component } from "react";
import Chair from "./Chair";

export default class Seat extends Component {
  render() {
    const { ele } = this.props;
    return (
      <div>
        <div className="seat">{ele.hang}</div>
        {ele.danhSachGhe.map((chair, idx) => {
          return (
            <Chair
              soGhe={chair.soGhe}
              daDat={chair.daDat}
              dangChon={chair.dangChon}
              hang={ele.hang}
              key={chair.soGhe}
              name={idx + 1}
            />
          );
        })}
      </div>
    );
  }
}
