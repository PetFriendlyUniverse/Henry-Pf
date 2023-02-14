// import CardContainer from "../CardContainer/CardContainer";
import Paginate from "react-paginate";
import { useState } from "react";
import CardContainer from "../CardContainer/CardContainer";

function Paginator() {
  // const [items, setItems] = useState(allProducts);
  const [pageNumber, setPageNumber] = useState(0);
  const items = [];

  const ProdPerPage = 12;
  const pagesVisited = pageNumber * ProdPerPage;
  const displayProducts = items
    .slice(pagesVisited, pagesVisited + ProdPerPage)
    .map((item) => {
      return (
        <div>
          <CardContainer />
        </div>
      );
    });
  const pageCount = Math.ceil(items.length / ProdPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {displayProducts}
      <Paginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Paginator;
