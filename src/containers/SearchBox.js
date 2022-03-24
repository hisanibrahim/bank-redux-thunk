import React from "react";
import { connect } from "react-redux";
import { getTweets } from "../actions";
import "./SearchBox.css";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.getTweets(this.state.query);
  }

  render() {
    return (
      <>
        <div className="topnav">
          <a href="#" className="active">
            <i className="fa fa-twitter"></i>
          </a>
          {this.props.tweets ? (
            <a href="#">{this.props.tweets.length}</a>
          ) : null}
          <div className="search-container">
            <div>
              <input
                type="text"
                placeholder="Search.."
                name="search"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
              <button type="button" onClick={this.submit}>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  getTweets: getTweets,
};
const mapStateToProps = (state) => ({
  tweets: state.tweets,
});

SearchBox = connect(mapStateToProps, mapDispatchToProps)(SearchBox);

export default SearchBox;
