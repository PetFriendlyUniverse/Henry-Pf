import React from "react";
import QualificationStars from "../QualificationStars/QualificationStars";

const starColor = (rating, starNumber) =>
  starNumber <= rating ? "text-yellow-400" : "text-gray-300";
function ReviewsGraph({ data }) {
  const { qualificationAVG, dispatchtimeAVG, supportAVG } = data;
  const generalAVG = (
    (parseFloat(qualificationAVG) +
      parseFloat(dispatchtimeAVG) +
      parseFloat(supportAVG)) /
    3
  ).toFixed(2);
  const ratios = {
    product: ((qualificationAVG / 5) * 100).toString(),
    dispatchtime: ((dispatchtimeAVG / 5) * 100).toString(),
    support: ((supportAVG / 5) * 100).toString(),
  };
  const ratiosStyles = {
    product: { width: ratios.product + "%" },
    dispatchtime: { width: ratios.dispatchtime + "%" },
    support: { width: ratios.support + "%" },
  };

  return (
    <div className=" w-1/3 py-4">
      <QualificationStars
        className={"mt-4"}
        title={"Calificación general"}
        rating={generalAVG}
      />
      {/* -----------------------------  Fin de Rating General ------------------------------- */}
      <hr className="mt-4 w-1/6 border-gray-300" />

      <QualificationStars
        className={"mt-4"}
        title={"Calidad de productos"}
        rating={qualificationAVG}
      />
      <QualificationStars
        className={"mt-4"}
        title={"Tiempo de despacho"}
        rating={dispatchtimeAVG}
      />
      <QualificationStars
        className={"mt-4"}
        title={"Atención al cliente"}
        rating={supportAVG}
      />
    </div>
  );
}

export default ReviewsGraph;
