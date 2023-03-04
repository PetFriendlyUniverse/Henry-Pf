import React from "react";
import QualificationStars from "../../../QualificationStars/QualificationStars";

function ReviewsGraph({ data }) {
  const { qualificationAVG, dispatchtimeAVG, supportAVG } = data;
  const generalAVG = (
    (parseFloat(qualificationAVG) +
      parseFloat(dispatchtimeAVG) +
      parseFloat(supportAVG)) /
    3
  ).toFixed(2);

  return (
    <div className="lg-text-sm px-1 sm:w-1/2 lg:w-1/4">
      <QualificationStars
        className={" lg:mt-4"}
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
