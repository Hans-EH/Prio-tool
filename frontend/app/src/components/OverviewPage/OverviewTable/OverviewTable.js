import React, { useContext } from "react";
import TableRow from "./TableRow/TableRow";
import TableUtils from "./TableUtils/TableUtils";
import { SelectionContext } from "../OverviewPage";

import { TiArrowSortedUp, TiArrowSortedDown, TiArrowUnsorted } from "react-icons/ti";

const OverviewTable = (props) => {
  const selection = useContext(SelectionContext);
  return (
    <div className="body-font bg-white px-4 pb-8 pt-8 my-4 rounded-md">
      <div className="container col-span-4 mx-auto bg-white shadow-sm rounded-lg">
        <TableUtils />

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
          <div className="inline-block min-w-full rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    <button className="flex items-center" onClick={(value) => props.sortBy === "productId" ? props.setSortBy("productIdReverse") : props.setSortBy("productId")}>
                      ID
                      {props.sortBy === "productId" ? <TiArrowSortedUp className="ml-1 transform transition ease-in duration-300 text-red-500" /> : props.sortBy === "productIdReverse" ? <TiArrowSortedDown className="ml-1 transform transition ease-in duration-300 text-red-500" /> : <TiArrowUnsorted className="ml-1 transform transition ease-in duration-300 " />}</button>
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    <button className="flex items-center" onClick={(value) => props.sortBy === "name" ? props.setSortBy("nameReverse") : props.setSortBy("name")}>
                      PRODUCT
                      {props.sortBy === "name" ? <TiArrowSortedUp className="ml-1 transform transition ease-in duration-300 text-red-500" /> : props.sortBy === "nameReverse" ? <TiArrowSortedDown className="ml-1 transform transition ease-in duration-300 text-red-500" /> : <TiArrowUnsorted className="ml-1 transform transition ease-in duration-300 " />}</button>
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    <button className="flex items-center" onClick={(value) => props.sortBy === "storageTime" ? props.setSortBy("storageTimeReverse") : props.setSortBy("storageTime")}>
                      STORAGE TIME
                      {props.sortBy === "storageTime" ? <TiArrowSortedUp className="ml-1 transform transition ease-in duration-300 text-red-500" /> : props.sortBy === "storageTimeReverse" ? <TiArrowSortedDown className="ml-1 transform transition ease-in duration-300 text-red-500" /> : <TiArrowUnsorted className="ml-1 transform transition ease-in duration-300 " />}</button>
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    <button className="flex items-center" onClick={(value) => props.sortBy === "costPrice" ? props.setSortBy("costPriceReverse") : props.setSortBy("costPrice")}>
                      COST PRICE
                      {props.sortBy === "costPrice" ? <TiArrowSortedUp className="ml-1 transform transition ease-in duration-300 text-red-500" /> : props.sortBy === "costPriceReverse" ? <TiArrowSortedDown className="ml-1 transform transition ease-in duration-300 text-red-500" /> : <TiArrowUnsorted className="ml-1 transform transition ease-in duration-300 " />}</button>
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    <button className="flex items-center" onClick={(value) => props.sortBy === "salesPrice" ? props.setSortBy("salesPriceReverse") : props.setSortBy("salesPrice")}>
                      SALES PRICE
                      {props.sortBy === "salesPrice" ? <TiArrowSortedUp className="ml-1 transform transition ease-in duration-300 text-red-500" /> : props.sortBy === "salesPriceReverse" ? <TiArrowSortedDown className="ml-1 transform transition ease-in duration-300 text-red-500" /> : <TiArrowUnsorted className="ml-1 transform transition ease-in duration-300 " />}</button>
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    <button className="flex items-center" onClick={(value) => props.sortBy === "profitSum" ? props.setSortBy("profitSumReverse") : props.setSortBy("profitSum")}>
                      PROFIT MARGIN
                      {props.sortBy === "profitSum" ? <TiArrowSortedUp className="ml-1 transform transition ease-in duration-300 text-red-500" /> : props.sortBy === "profitSumReverse" ? <TiArrowSortedDown className="ml-1 transform transition ease-in duration-300 text-red-500" /> : <TiArrowUnsorted className="ml-1 transform transition ease-in duration-300 " />}</button>
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    <button className="flex items-center" onClick={(value) => props.sortBy === "status" ? props.setSortBy("statusReverse") : props.setSortBy("status")}>
                      STATUS
                      {props.sortBy === "status" ? <TiArrowSortedUp className="ml-1 transform transition ease-in duration-300 text-red-500" /> : props.sortBy === "statusReverse" ? <TiArrowSortedDown className="ml-1 transform transition ease-in duration-300 text-red-500" /> : <TiArrowUnsorted className="ml-1 transform transition ease-in duration-300 " />}</button>
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                  >
                    <button className="flex items-center" onClick={(value) => props.sortBy === "defectiveComment" ? props.setSortBy("defectiveCommentReverse") : props.setSortBy("defectiveComment")}>
                      COMMENT
                      {props.sortBy === "defectiveComment" ? <TiArrowSortedUp className="ml-1 transform transition ease-in duration-300 text-red-500" /> : props.sortBy === "defectiveCommentReverse" ? <TiArrowSortedDown className="ml-1 transform transition ease-in duration-300 text-red-500" /> : <TiArrowUnsorted className="ml-1 transform transition ease-in duration-300 " />}</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.products.length > 0 ? (
                  <>
                    {props.products
                      .sort((a, b) => props.sortBy === "salesPrice" ? (a.salesPrice < b.salesPrice ? 1 : -1)
                        : props.sortBy === "salesPriceReverse" ? (a.salesPrice > b.salesPrice ? 1 : -1)
                          : props.sortBy === "costPrice" ? (a.costPrice < b.costPrice ? 1 : -1)
                            : props.sortBy === "costPriceReverse" ? (a.costPrice > b.costPrice ? 1 : -1)
                              : props.sortBy === "productId" ? (a.productId < b.productId ? 1 : -1)
                                : props.sortBy === "productIdReverse" ? (a.productId > b.productId ? 1 : -1)
                                  : props.sortBy === "profitSum" ? (a.profitSum < b.profitSum ? 1 : -1)
                                    : props.sortBy === "profitSumReverse" ? (a.profitSum > b.profitSum ? 1 : -1)
                                      : props.sortBy === "defectiveComment" ? (a.defectiveComment < b.defectiveComment ? 1 : -1)
                                        : props.sortBy === "defectiveCommentReverse" ? (a.defectiveComment > b.defectiveComment ? 1 : -1)
                                          : props.sortBy === "status" ? (a.state < b.state ? 1 : -1)
                                            : props.sortBy === "statusReverse" ? (a.state > b.state ? 1 : -1)
                                              : props.sortBy === "productId" ? (a.productId < b.productId ? 1 : -1)
                                                : props.sortBy === "productIdReverse" ? (a.productId > b.productId ? 1 : -1)
                                                  : props.sortBy === "name" ? (a.name < b.name ? 1 : -1)
                                                    : props.sortBy === "nameReverse" ? (a.name > b.name ? 1 : -1)
                                                      : props.sortBy === "storageTime" ? (a.storageTime < b.storageTime ? 1 : -1)
                                                        : props.sortBy === "storageTimeReverse" ? (a.storageTime > b.storageTime ? 1 : -1) : 0)

                      .map((product, key) => {
                        return ((product.category === selection.toString().slice(0, -1).toUpperCase() || selection === "All Products") ? <TableRow products={product} key={key} /> : null
                        )
                      })}
                  </>
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTable;
