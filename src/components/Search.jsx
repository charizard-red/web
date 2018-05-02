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
      <div className="searchbar-container DivSearchPosition ">
        <form onSubmit={e => e.preventDefault()}>
          <input
            className="SearchStyle"
            type="text"
            size="20"
            placeholder="search"
            onChange={this.handleSearch.bind(this)}
            value={this.state.hospital}
          />
          <button
            className="SearchButton"
            type="submit"
            onClick={this.handleGoClick.bind(this)}
          >
            <img src="" />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
