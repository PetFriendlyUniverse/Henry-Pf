import { useDispatch, useSelector } from "react-redux";
import { clearFilters } from "../../../../../../redux/features/products/productsSlice";

function ClearFiltersBtn() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.Products?.setFilters);
  const handleClick = () => {
    dispatch(clearFilters());
  };

  return (
    <>
      {Object.keys(filters).length > 0 && (
        <button
          className=" py-1 text-sm font-bold text-blue-500"
          onClick={handleClick}
        >
          limpiar filtros
        </button>
      )}
    </>
  );
}

export default ClearFiltersBtn;
