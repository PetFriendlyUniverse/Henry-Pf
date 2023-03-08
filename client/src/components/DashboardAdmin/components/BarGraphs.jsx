import "@tremor/react/dist/esm/tremor.css";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getDaycaresStats,
  getStoresStats,
  getUsersStats,
  getWalkersStats,
} from "../../../redux/features/stats/statsActions";

function BarGraphs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersStats());
    dispatch(getStoresStats());
    dispatch(getWalkersStats());
    dispatch(getDaycaresStats());
  }, []);

  const user = useSelector((state) => state.Stats?.users);
  const stores = useSelector((state) => state.Stats?.stores);
  const walkers = useSelector((state) => state.Stats?.walkers);
  const daycares = useSelector((state) => state.Stats?.daycares);

  const chartdata = [
    {
      name: "Usuarios",
      "Numero de cuentas": user,
    },
    {
      name: "Tiendas",
      "Numero de cuentas": stores,
    },
    {
      name: "Paseadores",
      "Número de cuentas": walkers,
    },
    {
      name: "Guarderias",
      "Número de cuentas": daycares,
    },
  ];

  const dataFormatter = (number) => {
    return "" + Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <div>
      <Card>
        <Title>Cuentas (2021)</Title>
        <Subtitle>
          Esto muestra la cantidad de cuentas por funcionalidad
        </Subtitle>
        <BarChart
          data={chartdata}
          dataKey="name"
          categories={["Numero de cuentas"]}
          colors={["blue"]}
          valueFormatter={dataFormatter}
          marginTop="mt-6"
          yAxisWidth="w-12"
        />
      </Card>
    </div>
  );
}

export default BarGraphs;
