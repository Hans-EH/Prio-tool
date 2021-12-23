import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect, useLocation } from "react-router-dom";

// Global
import { SuccessToast, ErrorToast } from "../../../Global/PushToast/PushToast";

// Contexts
import { RefreshContext } from "../../../../contexts/refreshContext";
import { ApiContext } from "../../../../contexts/apiContext";

const ProductDetailCollapsed = ({ product, username }) => {
  const location = useLocation();
  const setUpdated = useContext(RefreshContext)
  const API_BASE = useContext(ApiContext);

  // Reposne states
  const [respId, setRespId] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const [apiLink] = useState(`${API_BASE}/repairs/?prod_id=${product.id}&tech_id=${username}`);

  const handleStartRepair = async () => {
    const response = await fetch(apiLink, {method: "post"})
    const responseText = await response.json();

    if (response.ok) {
      SuccessToast(`Repair started for ${product.id}`)
      setRespId(responseText.id);
      setUpdated(true);
    } else { 
      ErrorToast(`Repair couldn't started for ${product.id}`) 
    }
  }

  useEffect(()=> {
    if (respId) {
      setRedirect(true);
    }
  }, [respId])

  if (redirect) {
    return <Redirect to={`/repairs/${respId}`}/>
  }

  return (
    <div>
      <div className="grid max-w-screen-lg grid-cols-3 grid-rows-3 gap-4 p-4">
        <div className="flex col-start-1 row-start-1">
          <p className="font-bold mr-2">Product Id:</p>
          <p className="font-light">{product.productId}</p>
        </div>
        <div className="flex col-start-2 row-start-1">
          <p className="font-bold mr-2">State:</p>
          <p className="font-light font-mono">{product.state}</p>
        </div>
        <div className="flex col-start-1 row-start-2">
          <p className="font-bold mr-2 mb-0">Date added:</p>
          <p className="font-light">{product.dateAdded}</p>
        </div>
        <div className="flex col-start-2 row-start-2">
          <p className="font-bold mr-2">Cost Price:</p>
          <p className="font-light">{product.costPrice} DKK</p>
        </div>
        <div className="flex col-start-1 row-start-3">
          <p className="font-bold mr-2">Stock days:</p>
          <p className="font-light">{product.storageTime}</p>
        </div>
        <div className="flex col-start-2 row-start-3">
          <p className="font-bold mr-2">Sales Price:</p>
          <p className="font-light">{product.salesPrice} DKK</p>
        </div>
        <div className="max-w-1/3 col-start-3 row-span-3">
          <p className="font-bold mr-2">Defective Comment:</p>
          <p className="font-light break-words">
            {product.defectiveComment == null ? <>undefined</> : <>{product.defectiveComment}</>}
          </p>
        </div>
      </div>

      {product.state === "DEFECTIVE" &&
        <div className="flex place-content-end">
          <button
            type="button"
            onClick={handleStartRepair}
            className="py-2 px-4 mr-2 w-32  bg-indigo-600 hover:bg-white text-white hover:text-indigo-600 transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
          >
            Start Repair
          </button>

          <Link
            to={`${location.pathname}/${product.id}`}
            className="py-2 px-4 mr-2 w-32  bg-indigo-600 hover:bg-white text-white hover:text-indigo-600 transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg"
          >
            Loss Product
          </Link>
        </div>
      }
    </div>
  );
};

export default ProductDetailCollapsed;
