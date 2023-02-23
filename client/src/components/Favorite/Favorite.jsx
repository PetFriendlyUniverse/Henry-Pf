import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  addFavoriteProduct,
  searchFavorite,
} from "../../../../api/src/controllers/favoriteController";
import { deleteFavoriteById } from "../../redux/features/products/productsActions";

export const Favorite = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favorite } = useSelector((state) => state.Favorite);
  const profile = useSelector((state) => state.profile);

  const handleClick = () => {
    Swal.fire({
      icon: "warning",
      title: "¿Estas seguro?",
      text: `¿Estas seguro que desea elminar la lista de favoritos por completo?`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteFavoriteById(profile.id));
        Swal.fire(
          "Eliminado!",
          "El carrito se ha eliminado correctamente",
          "success"
        );
      }
    });
  };

  useEffect(() => {
    dispatch(addFavoriteProduct());
  }, []);
  useEffect(() => {
    return () => {
      dispatch(searchFavorite());
    };
  }, []);

  return (
    <>
      <div className="mx-auto h-full w-full">
        <div className=" my-2 flex h-full w-11/12  shadow-md sm:w-full">
          <div className="bg-white px-10 py-10">
            <div className="flex justify-center border-b pb-8">
              <h1 className="text-4xl font-semibold text-gray-500">
                Tus productos favoritos
              </h1>
            </div>
            <div className="mt-10 mb-5 flex">
              <h3 className="font-semibol hidden w-4/5 text-3xl sm:block">
                Detalle
              </h3>
              <h3 className="hidden w-1/5  text-center text-3xl font-semibold sm:block">
                Precio
              </h3>
            </div>
            <div className="mb-20">
              {/* Products */}
              {favorite.length > 0 ? (
                favorite.map((product) => (
                  <LinkButton key={product.id} product={product} />
                ))
              ) : (
                <p className="text-center text-2xl">
                  Agregá acá los productos que te gustaron para poder verlos más
                  tarde.
                </p>
              )}
            </div>
            <div className="flex justify-around">
              <Link
                className="bg-primary-color hover:bg-secondary-color mb-4 w-3/4 rounded-md py-3 px-2 text-center text-2xl font-semibold text-white sm:mb-0 sm:w-56"
                to="/"
              >
                Volver a inicio
              </Link>
              {favorite.length > 0 ? (
                <button
                  onClick={() => handleClick()}
                  className="mb-4 w-3/4 rounded-md bg-red-400 py-3 px-2 text-center text-2xl font-semibold text-white hover:bg-red-600 sm:mb-0 sm:w-56"
                >
                  Remover todo
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
