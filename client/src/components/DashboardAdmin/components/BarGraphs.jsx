import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import "@tremor/react/dist/esm/tremor.css";

function BarGraphs() {
  const chartdata = [
    {
      name: "Tiendas",
      "Numero de cuentas": 2488,
    },
    {
      name: "Paseadores",
      "Numero de cuentas": 1445,
    },
    {
      name: "Guarderias",
      "Numero de cuentas": 743,
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
          Esto muestra la cantidad de cuentas por funcionaldiad
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
      ;
    </div>
  );
}

export default BarGraphs;
