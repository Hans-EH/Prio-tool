import React from "react";
// import { useState, useEffect} from 'react';
import { GoPrimitiveDot } from "react-icons/go";
import StyledContainer from "../../Global/StyledContainer/StyledContainer";

export const HoriBarChart = (props) => {
  //initialize data for width display
  let data = [
    {
      name: "iPhones",
      value: (1 / 6) * 10,
    },
    {
      name: "Macbooks",
      value: (1 / 6) * 10,
    },
    {
      name: "iPads",
      value: (1 / 6) * 10,
    },
    {
      name: "Smartphones",
      value: (1 / 6) * 10,
    },
    {
      name: "Laptops",
      value: (1 / 6) * 10,
    },
    {
      name: "Tablets",
      value: (1 / 6) * 10,
    },
  ];


  function calcAmountOfCategory(category) {
    let amount = 0;
    for (let i = 0; i < props.products.length; i++) {
      if (props.products[i].category === category) amount++;
    }

    let percentageAmount = ((amount / props.products.length) * 100).toFixed(1);
    switch (category) {
      case "IPHONE":
        data[0].value = percentageAmount / 10;
        break;
      case "MACBOOK":
        data[1].value = percentageAmount / 10;
        break;
      case "IPAD":
        data[2].value = percentageAmount / 10;
        break;
      case "SMARTPHONE":
        data[3].value = percentageAmount / 10;
        break;
      case "LAPTOP":
        data[4].value = percentageAmount / 10;
        break;
      case "TABLET":
        data[5].value = percentageAmount / 10;
        break;
      default:
        data[5].value = 0;
        break;
    }

    return percentageAmount;
  }

  return (
    <StyledContainer>
      <div className="flex justify-between mb-4">
        <h3 className="text-xl">Total Defective Stock</h3>

        <div className="flex">
          <div
            className="flex items-center cursor-pointer mr-2"
            onClick={() => {
              props.handleSelect("All Products");
            }}
          >
            <GoPrimitiveDot className="text-black-500" />
            All Products
          </div>
          <div
            className="flex items-center cursor-pointer mr-2"
            onClick={() => {
              props.handleSelect("iPhones");
            }}
          >
            <GoPrimitiveDot className="text-blue-500" />
            iPhones
          </div>

          <div
            className="flex items-center cursor-pointer mr-2"
            onClick={() => {
              props.handleSelect("Macbooks");
            }}
          >
            <GoPrimitiveDot className="text-green-500" />
            Macbooks
          </div>

          <div
            className="flex items-center cursor-pointer mr-2"
            onClick={() => {
              props.handleSelect("iPads");
            }}
          >
            <GoPrimitiveDot className="text-indigo-500" />
            iPads
          </div>

          <div
            className="flex items-center cursor-pointer mr-2"
            onClick={() => {
              props.handleSelect("Smartphones");
            }}
          >
            <GoPrimitiveDot className="text-red-500" />
            Smartphones
          </div>

          <div
            className="flex items-center cursor-pointer mr-2"
            onClick={() => {
              props.handleSelect("Laptops");
            }}
          >
            <GoPrimitiveDot className="text-yellow-500" />
            Laptops
          </div>

          <div
            className="flex items-center cursor-pointer mr-2"
            onClick={() => {
              props.handleSelect("Tablets");
            }}
          >
            <GoPrimitiveDot className="text-purple-500" />
            Tablets
          </div>
        </div>
      </div>

      <div className="flex text-center align-middle rounded-lg text-white cursor-pointer">
        {props.products.length > 0 ? (
          <div
            style={{ width: calcAmountOfCategory("IPHONE") + "%" }}
            id="iPhones"
            className="bg-blue-500 hover:bg-blue-700 py-8 w-full text-xl transition ease-in duration-200"
            onClick={() => {
              props.handleSelect("iPhones");
            }}
          >
            {calcAmountOfCategory("IPHONE") > 2 ? (<>{calcAmountOfCategory("IPHONE")} %</>) : (<></>)}
          </div>
        ) : (
          <>Loading...</>
        )}

        {props.products.length > 0 ? (
          <div
            style={{ width: calcAmountOfCategory("MACBOOK") + "%" }}
            id="Macbooks"
            className="bg-green-500 hover:bg-green-700 py-8 w-full text-xl transition ease-in duration-200"
            onClick={() => {
              props.handleSelect("Macbooks");
            }}
          >
            {calcAmountOfCategory("MACBOOK") > 2 ? (<>{calcAmountOfCategory("MACBOOK")} %</>) : (<></>)}
          </div>
        ) : (
          <>Loading...</>
        )}


        {props.products.length > 0 ? (
          <div
            style={{ width: calcAmountOfCategory("IPAD") + "%" }}
            id="iPads"
            className="bg-indigo-500 hover:bg-indigo-700 py-8 w-full text-xl transition ease-in duration-200"
            onClick={() => {
              props.handleSelect("iPads");
            }}
          >
            {calcAmountOfCategory("IPAD") > 2 ? (<>{calcAmountOfCategory("IPAD")} %</>) : (<></>)}
          </div>
        ) : (
          <>Loading...</>
        )}

        {props.products.length > 0 ? (
          <div
            style={{ width: calcAmountOfCategory("SMARTPHONE") + "%" }}
            id="Smartphones"
            className="bg-red-500 hover:bg-red-700 py-8 w-full text-xl transition ease-in duration-200"
            onClick={() => {
              props.handleSelect("Smartphones");
            }}
          >
            {calcAmountOfCategory("SMARTPHONE") > 2 ? (<>{calcAmountOfCategory("SMARTPHONE")} %</>) : (<></>)}
          </div>
        ) : (
          <>Loading...</>
        )}

        {props.products.length > 0 ? (
          <div
            style={{ width: calcAmountOfCategory("LAPTOP") + "%" }}
            id="Laptops"
            className="bg-yellow-500 hover:bg-yellow-700 py-8 w-full text-xl transition ease-in duration-200"
            onClick={() => {
              props.handleSelect("Laptops");
            }}
          >
            {calcAmountOfCategory("LAPTOP") > 2 ? (<>{calcAmountOfCategory("LAPTOP")} %</>) : (<></>)}
          </div>
        ) : (
          <>Loading...</>
        )}

        {props.products.length > 0 ? (
          <div
            style={{ width: calcAmountOfCategory("TABLET") + "%" }}
            id="Tablets"
            className="bg-purple-500 hover:bg-purple-700 py-8 w-full text-xl transition ease-in duration-200"
            onClick={() => {
              props.handleSelect("Tablets");
            }}
          >
            {calcAmountOfCategory("TABLET") > 2 ? (<>{calcAmountOfCategory("TABLET")} %</>) : (<></>)}
          </div>
        ) : (
          <>Loading...</>
        )}
        
      </div>
    </StyledContainer>
  );
};
