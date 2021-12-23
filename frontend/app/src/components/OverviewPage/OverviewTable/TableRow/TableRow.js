import React from "react";
import { Link } from "react-router-dom";
import ProductStateDescriptor from "./StateDescriptors";
import TableRowComment from "./TableRowComment";
const TableRow = (props) => {

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <div className="flex items-center">
          <div className="ml-0">
            <p className="text-gray-900 whitespace-no-wrap">{props.products.productId}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <Link to={`/products/${props.products.id}`} className="text-bluecity_dark whitespace-no-wrap">
          {props.products.name}
        </Link>
      </td>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {props.products.storageTime} days
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {props.products.costPrice.toFixed(2)} DKK
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {props.products.salesPrice.toFixed(2)} DKK
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {(props.products.salesPrice - props.products.costPrice).toFixed(2)} DKK
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
            <ProductStateDescriptor state={props.products.state}/>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200  text-sm">
        <TableRowComment comment={props.products.defectiveComment}/>
      </td>
    </tr>
  );
};

export default TableRow;
