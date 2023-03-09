import { Card, Title, DonutChart } from "@tremor/react";
import "@tremor/react/dist/esm/tremor.css";

function DonutGraphs() {
  const users = [
    {
      name: "Tiendas",
      sales: 9800,
    },
    {
      name: "Paseadores",
      sales: 4567,
    },
    {
      name: "Guarderias",
      sales: 3908,
    },
  ];
  const cities = [
    {
      name: "Santa Fe",
      sales: 9800,
    },
    {
      name: "Buenos Aires",
      sales: 4567,
    },
    {
      name: "Mendoza",
      sales: 3908,
    },
    {
      name: "Tucuman",
      sales: 2400,
    },
    {
      name: "Córdoba",
      sales: 1908,
    },
    {
      name: "Misiones",
      sales: 1398,
    },
  ];
  const products = [
    {
      name: "Whiskas",
      sales: 9800,
    },
    {
      name: "Pedigree",
      sales: 4567,
    },
    {
      name: "ProPlan",
      sales: 3908,
    },
    {
      name: "VitalCan",
      sales: 2400,
    },
  ];

  const valueFormatter = (number) => {
    return `$ ${Intl.NumberFormat("us").format(number).toString()}`;
  };

  return (
    <div className="flex justify-center">
      <div className="mx-20">
        <Card maxWidth="max-w-lg">
          <Title>Ganancias por Usuarios</Title>
          <DonutChart
            data={users}
            category="sales"
            dataKey="name"
            valueFormatter={valueFormatter}
            marginTop="mt-6"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>
      </div>
      <div className="mx-20">
        <Card maxWidth="max-w-lg">
          <Title>Ganancias por Provincia</Title>
          <DonutChart
            data={cities}
            category="sales"
            dataKey="name"
            valueFormatter={valueFormatter}
            marginTop="mt-6"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>
      </div>
      <div className="mx-20">
        <Card maxWidth="max-w-lg">
          <Title>Ganancias por Productos</Title>
          <DonutChart
            data={products}
            category="sales"
            dataKey="name"
            valueFormatter={valueFormatter}
            marginTop="mt-6"
            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
          />
        </Card>
      </div>
    </div>
  );
}

export default DonutGraphs;
