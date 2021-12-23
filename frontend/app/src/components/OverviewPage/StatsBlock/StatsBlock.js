import React from "react";
import StyledContainer from "../../Global/StyledContainer/StyledContainer";

export const StatsBlock = (props) => {
  const numberFormatter = (num) => {
    if (num > 1000) {
      return String((num / 1000).toFixed(1)) + "K";
    }
    return String(num);
  };

  function calcTotalStockCostValue() {
    let sum = 0;
    for (let i = 0; i < props.products.length; i++) {
      sum += props.products[i].costPrice;
    }
    return sum;
  }

  function calcTotalStockSaleValue() {
    let sum = 0;
    for (let i = 0; i < props.products.length; i++) {
      sum += props.products[i].salesPrice;
    }
    return sum;
  }

  function calcAvgStorageTime() {
    let storageTimeSum = 0;
    for (let i = 0; i < props.products.length; i++) {
      storageTimeSum += props.products[i].storageTime;
    }
    return String((storageTimeSum / props.products.length).toFixed(0));
  }

  //calculates amount of devices which storage time is longer than the daysover parameter
  function calcShareOfDevices(daysOver) {
    let counter = 0;
    for (let i = 0; i < props.products.length; i++) {
      if (props.products.storageTime >= daysOver) {
        counter++;
      }
    }
    return ((counter / props.products.length) * 100).toFixed(2);
  }

  return (
    <StyledContainer>
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 sm:w-1/5 w-1/2">
          <h2 className="title-font font-medium text-gray-900">
            <span className="sm:text-3xl text-2xl mr-1">
              {props.products.length > 0 ? (
                <>{numberFormatter(calcTotalStockSaleValue())}</>
              ) : (
                <>Loading...</>
              )}
            </span>
            DKK
          </h2>
          <p className="leading-relaxed">Total stock sale value</p>
        </div>
        <div className="p-4 sm:w-1/5 w-1/2">
          <h2 className="title-font font-medium text-gray-900">
            <span className="sm:text-3xl text-2xl mr-1">
              {props.products.length > 0 ? (
                <>{numberFormatter(calcTotalStockCostValue())}</>
              ) : (
                <>Loading...</>
              )}
            </span>
            DKK
          </h2>
          <p className="leading-relaxed">Total stock cost value</p>
        </div>

        <div className="p-4 sm:w-1/5 w-1/2">
          <h2 className="title-font font-medium sm:text-3xl text-2xl text-gray-900">
            <span className="sm:text-3xl text-2xl mr-1">
              {props.products.length > 0 ? (
                <>{calcAvgStorageTime()}</>
              ) : (
                <>Loading...</>
              )}
            </span>
            Days
          </h2>
          <p className="leading-relaxed">Avg. Storage Time</p>
        </div>
        <div className="p-4 sm:w-1/5 w-1/2">
          <h2 className="title-font font-medium sm:text-3xl text-2xl text-gray-900">
            <span className="sm:text-3xl text-2xl mr-1">
              {props.products.length > 0 ? (
                <>
                  {calcShareOfDevices(30)}
                </>
              ) : (
                <>Loading...</>
              )}
            </span>
            %
          </h2>
          <p className="leading-relaxed">Share of devices (30+ days)</p>
        </div>
        <div className="p-4 sm:w-1/5 w-1/2">
          <h2 className="title-font font-medium sm:text-3xl text-2xl text-gray-900">
            <span className="sm:text-3xl text-2xl mr-1">
              {props.products.length > 0 ? (
                <>{calcShareOfDevices(90)}</>
              ) : (
                <>Loading...</>
              )}
            </span>
            %
          </h2>
          <p className="leading-relaxed">Share of devices (90+ days)</p>
        </div>
      </div>
    </StyledContainer>
  );
};
