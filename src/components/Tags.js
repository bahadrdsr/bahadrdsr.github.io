import React, { Component } from "react";

class Tags extends Component {
  state = {
    tags: ["sharepoint", "react", "ASP.NET", "angular", "Azure"]
  };
  render() {
    let tags = [];
    if (this.props.tags && this.props.tags.length) {
      tags = this.props.tags;
    } else {
      tags = [...this.state.tags];
    }

    return (
      <div className="tags">
        {tags.map(tag => (
          <span className="tags__tag">{tag}</span>
        ))}
      </div>
    );
  }
}
export default Tags;
