import { Card, Title, AreaChart } from "@tremor/react";
import "@tremor/react/dist/esm/tremor.css";

function Graphs() {
  const chartdata = [
    {
      date: "Enero 22",
      Tiendas: 2890,
      Guarderias: 2338,
      Paseadores: 3100,
    },
    {
      date: "Febrero 22",
      Tiendas: 2756,
      Guarderias: 2103,
      Paseadores: 2600,
    },
    {
      date: "Marzo 22",
      Tiendas: 3322,
      Guarderias: 2194,
      Paseadores: 3012,
    },
    {
      date: "Abril 22",
      Tiendas: 3470,
      Guarderias: 2108,
      Paseadores: 2890,
    },
    {
      date: "Mayo 22",
      Tiendas: 3475,
      Guarderias: 1812,
      Paseadores: 3402,
    },
    {
      date: "Junio 22",
      Tiendas: 3129,
      Guarderias: 1726,
      Paseadores: 3671,
    },
  ];
  const dataFormatter = function (number) {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <div>
      <Card>
        <Title>Grafico de ventas del ultimo año</Title>
        <AreaChart
          data={chartdata}
          categories={["Tiendas", "Guarderias", "Paseadores"]}
          dataKey="date"
          height="h-72"
          colors={["indigo", "cyan", "green"]}
          valueFormatter={dataFormatter}
          marginTop="mt-4"
        />
      </Card>
    </div>
  );
}

export default Graphs;
