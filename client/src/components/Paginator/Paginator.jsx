import CardContainer from "../CardContainer/CardContainer";
import Paginate from "react-paginate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsApi } from "../../redux/features/products/productsActions";
import { setCurrentPage } from "../../redux/features/products/productsSlice";

function Paginator() {
  let { totalPages, productsPerPage, currentPage, setFilters } = useSelector(
    (state) => state.Products
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsApi(productsPerPage, currentPage, setFilters));
  }, []);

  const changePage = ({ selected }) => {
    dispatch(setCurrentPage(selected + 1));
  };

  return (
    <div className="flex h-full w-full flex-col">
      <Paginate
        className="flex justify-center border-2 border-black"
        previousLabel={"previous"}
        nextLabel={"next"}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        onPageChange={changePage}
        containerClassName={"paginationButtons"}
        previousLinkClassName={"pr-8"}
        nextLinkClassName={"pl-8"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"text-xl"}
      />
      <CardContainer className="w-full" />
    </div>
  );
}

export default Paginator;
