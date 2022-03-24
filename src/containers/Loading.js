import React from "react";
import { connect } from "react-redux";

let Loading = ({ loading }) =>
  loading ? (
    <div style={{ textAlign: "center", fontSize: 24, margin: "5px" }}>
      <i class="fa fa-circle-o-notch fa-spin"></i>
    </div>
  ) : null;

const mapStateToProps = (state) => ({
  loading: state.loading,
});

Loading = connect(mapStateToProps, null)(Loading);

export default Loading;
