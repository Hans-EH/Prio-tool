import React, { useState, useContext } from 'react';
import { ApiContext } from '../../../contexts/apiContext';

// Global
import { SuccessToast, ErrorToast } from '../../Global/PushToast/PushToast';


export const ProductForm = () => {

    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(API_BASE + "/products/");

    const MAX_COMMENT = 400;

    const [category, setCategory] = useState("iphone");
    const [productId, setProductId] = useState();
    const [brand, setBrand] = useState();
    const [model, setModel] = useState();
    const [specs, setSpecs] = useState();
    const [costPrice, setCostPrice] = useState();
    const [salesPrice, setSalesPrice] = useState();
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append("category", category);
        formData.append("product_id", productId);
        formData.append("brand", brand);
        formData.append("model", model);
        formData.append("specification", specs);
        formData.append("cost_price", costPrice);
        formData.append("sale_price", salesPrice);
        formData.append("comment", comment);

        fetch(apiLink, {
            method: "post",
            body: formData
        }).then(response => {
            if (response.ok) {
                SuccessToast("Product added");
            } else {
                ErrorToast("Product couldn't be added");
            }
        });

        // Reset form after post
        document.forms["product_single_post"].reset();
    };


    const selectOptions = [{
        key: 0,
        label: "iPhones",
        value: "iphone"
    }, {
        key: 1,
        label: "Macbooks",
        value: "macbook"
    }, {
        key: 2,
        label: "iPads",
        value: "ipad"
    }, {
        key: 3,
        label: "Smartphones",
        value: "smartphone"
    }, {
        key: 4,
        label: "Laptops",
        value: "laptop"
    }, {
        key: 5,
        label: "Tablets",
        value: "tablet"
    }];

    return (
        <section className="bg-white shadow-sm py-8 mb-4 rounded-md">
            <div className="container h-full flex flex-col px-8 mx-auto space-y-6">
                <h2 className="text-xl mb-8">Add Single Product</h2>
                <form name="product_single_post" className="flex flex-col h-full space-y-6" onSubmit={handleSubmit}>

                    <div>
                        <select id="search-form-price" onChange={(e) => { setCategory(e.target.value) }} placeholder="Brand" className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity focus:border-transparent" required>
                            {selectOptions.map((option) => {
                                return (
                                    <option value={option.value} key={option.key}>{option.label}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div>
                    <input type="text" onChange={(e) => { setProductId(e.target.value) }} id="search-form-price" placeholder="Product Id." className="flex-grow rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity focus:border-transparent" required />
                        </div>

                    <div className="flex space-x-4">
                        <input type="text" onChange={(e) => { setBrand(e.target.value) }} id="search-form-price" placeholder="Brand" className="flex-grow rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity focus:border-transparent" required/>
                        <input type="text" onChange={(e) => { setModel(e.target.value) }} id="search-form-location" placeholder="Model" className="flex-grow rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity focus:border-transparent" required/>
                    </div>

                    <div className="flex space-x-4">
                        <input type="text" onChange={(e) => { setSpecs(e.target.value) }} id="search-form-location" placeholder="Specifications" className="flex-grow rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity focus:border-transparent" required/>
                    </div>

                    <div className="flex space-x-4">
                        <input type="number" onChange={(e) => { setCostPrice(e.target.value) }} id="search-form-name" placeholder="Cost Price" className="flex-grow rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity focus:border-transparent" required/>
                        <input type="number" onChange={(e) => { setSalesPrice(e.target.value) }} id="search-form-name" placeholder="Sales Price" className="flex-grow rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity focus:border-transparent"required />
                    </div>

                    <div>
                        <textarea
                            id="search-form-name"
                            onChange={(e) => { setComment(e.target.value) }}
                            placeholder="Defective Comment.."
                            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-bluecity focus:border-transparent resize-none"
                            value={comment.value}
                            rows="4"
                            maxLength={String(MAX_COMMENT)}
                            required
                        />
                        <p className={`${comment.length < MAX_COMMENT ? "text-gray-300" : "text-bluecity_dark"}`}>{comment.length} / {MAX_COMMENT}</p>
                    </div>

                    <div className="flex flex-grow">
                        <button type="submit"  className="self-end py-4 w-full  bg-bluecity_dark hover:bg-bluecity focus:ring-indigo-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                            Add Products
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

