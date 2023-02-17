import CardContainer from "../CardContainer/CardContainer";
import Paginate from "react-paginate";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsApi } from "../../redux/features/products/productsActions";
import { setCurrentPage } from "../../redux/features/products/productsSlice";
import arrowLeft from "../../assets/arrows/dobleArrowToLeft.svg";
import arrowRight from "../../assets/arrows/dobleArrowToRight.svg";

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
    <div className="src flex h-full w-full flex-col bg-slate-500  ">
      <div className="w-2/4 self-center">
        <Paginate
          containerClassName={
            "flex text-xl h-16 font-mono w-full justify-between items-center border-2 border-black "
          }
          previousLabel={
            // prettier-ignore
            <img className="mt-1 mr-3 w-5" src={arrowLeft} alt="arrowLeft" />
          }
          nextLabel={
            // prettier-ignore
            <img className="ml-3 mt-1 w-5 " src={arrowRight} alt="arrowRight" />
          }
          pageRangeDisplayed={3}
          pageCount={totalPages}
          onPageChange={changePage}
          previousLinkClassName={""}
          nextLinkClassName={""}
          disabledClassName={"paginationDisabled"}
          activeClassName={"text-4xl px-3 font-extrabold"}
        />
      </div>
      <CardContainer className="w-full" />
    </div>
  );
}

export default Paginator;
