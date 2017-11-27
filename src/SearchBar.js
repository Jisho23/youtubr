import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
    this.props.handleChange(e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.searchTerm);
  };

  render() {
    return (
      <div className="sixteen wide column">
        <div className="ui segment secondary">
          <form onSubmit={this.handleSubmit}>
            <div className="ui huge fluid input">
              <input onChange={this.handleChange} type="text" />
              <button type="submit" className="ui button">
                Search!
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
