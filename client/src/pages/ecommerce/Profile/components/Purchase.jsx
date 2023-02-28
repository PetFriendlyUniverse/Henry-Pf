import React from "react";

function Purchase() {
  return (
    <div className=" rounded-2xl border-2  py-6 px-4 pt-2  sm:px-0  xl:flex-row ">
      <table className="flex w-full border-collapse flex-col ">
        <tr className=" flex justify-around bg-white py-1">
          <th className="">
            <h3>Product name</h3>
          </th>
          <th className="">
            <h3>Tienda</h3>
          </th>
          <th className="">
            <h3>Precio total</h3>
          </th>
        </tr>
        <tr className="flex justify-around bg-slate-200 py-1">
          <td className="">producto 1</td>
          <td className="">tienda 1</td>
          <td className="">precio final 1</td>
        </tr>
        <tr className="flex justify-around bg-white py-1">
          <td>producto 2</td>
          <td>tienda 2</td>
          <td>precio final 2</td>
        </tr>
        <tr className="flex justify-around bg-slate-200 py-1">
          <td>producto 3</td>
          <td>tienda 3</td>
          <td>precio final 3</td>
        </tr>
        <tr className="flex justify-around bg-white py-1">
          <td>producto 4</td>
          <td>tienda 4</td>
          <td>precio final 4</td>
        </tr>
        <tr className="flex justify-around bg-slate-200 py-1">
          <td>producto 5</td>
          <td>tienda 5</td>
          <td>precio final 5</td>
        </tr>
        <tr className="flex justify-around bg-white py-1">
          <td>producto 6</td>
          <td>tienda 6</td>
          <td>precio final 6</td>
        </tr>
      </table>
      {/* <Table hoverable={true} className="bg-white">
        <Table.Head className="bg-white">
          <Table.HeadCell className="bg-white !p-4"></Table.HeadCell>
          <Table.HeadCell className="bg-white">Product name</Table.HeadCell>
          <Table.HeadCell className="bg-white">Color</Table.HeadCell>
          <Table.HeadCell className="bg-white">Category</Table.HeadCell>
          <Table.HeadCell className="bg-white">Price</Table.HeadCell>
          <Table.HeadCell className="bg-white">
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4"></Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4"></Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="!p-4"></Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table> */}
    </div>
  );
}

export default Purchase;
