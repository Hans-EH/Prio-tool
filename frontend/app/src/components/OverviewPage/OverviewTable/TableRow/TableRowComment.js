import React, { useState } from 'react'

// Icons 
import { BsChevronUp } from "react-icons/bs";


const TableRowCommentPopUp = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        className="flex items-center justify-center w-full px-8 text-sm font-medium text-gray-700 focus:outline-none"
        id="options-menu"
      >
        <BsChevronUp className={`${collapsed && "transform rotate-180"} transition ease-in duration-300`} />

      </button>
      <div
        className={`origin-top-right absolute z-50 right-2 mt-0 w-40 rounded-md   ${collapsed && "hidden"
          }`}
      >
        <div
          className="py-1 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="info-menu"
        >
          <button onClick={() => {
            setCollapsed(!collapsed);
          }}>
            <div className="absolute rounded-md shadow-lg bg-white w-100 py-6 px-8">
              <b className="pb-2">Comment</b>
              <p>{props.comment}</p>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
};

export default TableRowCommentPopUp;
