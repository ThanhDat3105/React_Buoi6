import React, { Component } from "react";
import { bookedChair } from "../../store/actions/datgheAction";
import { connect } from "react-redux";

class Chair extends Component {
  mappingCLass = () => {
    const { hang, dangChon, daDat } = this.props;

    if (daDat) {
      return "booked";
    }

    if (dangChon) {
      return "selected";
    }

    if (hang === "") {
      return "number";
    }

    if (!daDat) {
      return "available";
    }
  };

  bookChair = (hang, soGhe) => {
    this.props.dispatch(bookedChair({ hang, soGhe }));
  };

  render() {
    const { hang, soGhe } = this.props;
    // onClick={() => this.bookChair(hang, dangChon, daDat)}

    return hang === "" ? (
      <div className={`chair ${this.mappingCLass()}`}>{this.props.name}</div>
    ) : (
      <button
        onClick={() => this.bookChair(hang, soGhe)}
        className={`chair ${this.mappingCLass()}`}
      >
        {this.props.name}
      </button>
    );
  }
}

export default connect()(Chair);
