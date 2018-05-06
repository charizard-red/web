import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospital: ""
    };
  }

  handleSearch(e) {
    this.setState({ hospital: e.target.value });
  }

  handleGoClick() {
    if (!this.props.github.isFetchingUser) {
      this.props.actions.fetchUser(this.state);
    }
  }

  render() {
    return (
      <div className="searchbar-container DivSearchPosition">
        <input
          className="SearchStyle"
          type="text"
          size="20"
          placeholder="Find a doctor"
          onChange={this.handleSearch.bind(this)}
          value={this.state.hospital}
        />
        <input
          className="SearchButton"
          type="button"
          value="Search"
          onClick={this.handleGoClick.bind(this)}
        />
      </div>
    );
  }
}

export default SearchBar;
