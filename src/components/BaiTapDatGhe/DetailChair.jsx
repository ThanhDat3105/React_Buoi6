import React, { Component } from "react";
import Comment from "./Comment";
import Table from "./Table";

export default class DetailChair extends Component {
  render() {
    return (
      <div>
        <h2 className="pb-4">Danh sách ghế bạn chọn</h2>

        <Comment />

        <Table />
      </div>
    );
  }
}
