import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInvoicesById } from "../../../../redux/features/users/usersActions";
function Purchase() {
  const userId = localStorage.getItem("id");

  const dispatch = useDispatch();
  const userInvoice = useSelector((state) => state.User?.userInvoicesId);
  useEffect(() => {
    dispatch(getInvoicesById(userId));
  }, []);
  return (
    <div className=" mx-4 h-[466px] overflow-scroll overflow-x-hidden rounded-2xl border-2  py-6  px-4 pt-2 sm:px-0 xl:flex-row ">
      <ol className="relative mx-4 border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-black "></div>
          {/* fecha de comprobante */}
          <time className="mb-1 text-sm font-normal leading-none  ">
            February 2022
          </time>
          {/* nombre de producto */}
          <h3 className="text-lg font-bold ">
            {userInvoice[0]?.Products[0]?.name}
          </h3>

          {/* <p className="mb-4 text-base font-semibold">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p> */}
          {/* <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Learn more{" "}
            <svg
              className="ml-2 h-3 w-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a> */}
        </li>
      </ol>

      {/* <table className="flex w-full border-collapse flex-col ">
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
      </table> */}
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
