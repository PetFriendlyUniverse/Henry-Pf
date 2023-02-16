import CardContainer from "../CardContainer/CardContainer";
import Paginate from "react-paginate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsApi } from "../../redux/features/products/productsActions";

function Paginator() {
  let { totalPages, productsPerPage, currentPage, setFilters } = useSelector(
    (state) => state.Products
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsApi(productsPerPage, currentPage, setFilters));
  }, []);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="flex h-full w-full flex-col">
      <Paginate
        className="flex justify-center border-2 border-black"
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={totalPages}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      <CardContainer className="w-full" />
    </div>
  );
}

export default Paginator;
