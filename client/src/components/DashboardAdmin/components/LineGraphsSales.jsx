import { Card, Title, LineChart } from "@tremor/react";
import "@tremor/react/dist/esm/tremor.css";

function LineGraphsSales() {
  const chartdata = [
    {
      date: "Enero 22",
      Ventas: 1.74,
    },
    {
      date: "Febrero 22",
      Ventas: 1.93,
    },
    {
      date: "Marzo 22",
      Ventas: 1.9,
    },
    {
      date: "Abril 22",
      Ventas: 1.98,
    },
    {
      date: "Mayo 22",
      Ventas: 2,
    },
  ];

  const dataFormatter = (number) => {
    return `${Intl.NumberFormat("us").format(number).toString()}%`;
  };

  return (
    <div>
      <Card>
        <Title>Grafico de ventas</Title>
        <LineChart
          data={chartdata}
          dataKey="date"
          categories={["Ventas"]}
          colors={["blue"]}
          valueFormatter={dataFormatter}
          marginTop="mt-6"
          yAxisWidth="w-10"
        />
      </Card>
    </div>
  );
}

export default LineGraphsSales;
