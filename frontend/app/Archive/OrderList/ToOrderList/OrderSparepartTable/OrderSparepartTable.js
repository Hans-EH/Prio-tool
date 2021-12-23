import React, {useState} from "react";
import OrderSparepartUtils from "./OrderSparepartUtils/OrderSparepartUtils";
import OrderSparepartRow from "./OrderSparepartRow/OrderSparepartRow";
import OrderSparepartButton from "./OrderSparepartButtons/OrderSparepartButton";


import StyledContainer from "../../../Global/StyledContainer/StyledContainer";
import OrderSparepartTableHeader from "./OrderSparepartTableHeader";

const Ordersparepart = () => {

  const [selectedItems, setSelectedItems] = useState([]);

  const updateItmes = (item) => {
    setSelectedItems([...selectedItems, item]);
  }

  return (
    <StyledContainer>
      <OrderSparepartUtils />
      <div className="-mx-4 sm:-mx-8 sm:px-8 overflow-x-auto">
        <div className="inline-block min-w-full rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <OrderSparepartTableHeader/>
            </thead>
            <tbody>
              <OrderSparepartRow handler={updateItmes} />
              <OrderSparepartRow />
              <OrderSparepartRow />
              <OrderSparepartRow />
            </tbody>
          </table>
          <OrderSparepartButton />
        </div>
      </div>
    </StyledContainer>
  );
};

export default Ordersparepart;
