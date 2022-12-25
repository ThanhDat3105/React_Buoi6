import React, { Component } from "react";

import { connect } from "react-redux";
import { deleteChairAction } from "../../store/actions/datgheAction";

class Bill extends Component {
  deleteChair = (chair) => {
    this.props.dispatch(deleteChairAction(chair));
  };

  render() {
    const { element } = this.props;
    return (
      <tr key={element.soGhe} className="text-white">
        <th scope="row">{element.soGhe}</th>
        <td>
          {element.gia.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND",
          })}
        </td>
        <td>
          <button
            onClick={() => this.deleteChair(element)}
            className="btn btn-danger"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default connect()(Bill);
