import React, { Component } from "react";
class Pagination extends Component {
  state = {
    currentPage: 3,
    totalPages: 10,
    page_size: 5
  };
  render() {
    const { currentPage, totalPages, page_size } = this.state;
    return (
      <div className="pagination">
        {currentPage > 1 ? (
          <button className="btn pagination__left">&#8249;</button>
        ) : null}
        <h5 className="pagination__currentPage">{currentPage}</h5>
        {currentPage < totalPages ? (
          <button className="btn pagination__right">&#8250;</button>
        ) : null}
      </div>
    );
  }
}
export default Pagination;
