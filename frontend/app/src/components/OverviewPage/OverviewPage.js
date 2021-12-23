import React, { useState, useEffect, useContext } from 'react'
import { HoriBarChart } from './HoriBarChart/HoriBarChart'
import OverviewTable from './OverviewTable/OverviewTable';
import { StatsBlock } from './StatsBlock/StatsBlock'

// Contexts 
import { ApiContext } from '../../contexts/apiContext';

export const SelectionContext = React.createContext();

function OverviewPage() {
  
    const API_BASE = useContext(ApiContext);
    const [apiLink] = useState(API_BASE + "/products");

    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState("");
  
    // Fetch data from API
    useEffect(() => {
      let isComponentMounted = true;
      const fetchData = async () => {
        const response = await fetch(apiLink);
        const responseJson = await response.json();
        if (isComponentMounted) {
          setProducts(responseJson);
        }
      };
      fetchData();
      return () => {
        isComponentMounted = false;
      };
    }, [apiLink]);

    // Selected State
    const [selectedCat, setSelectedCat] = useState("All Products");
    
    return (
        <div>
            <HoriBarChart handleSelect={(value)=>{setSelectedCat(value)}} products={products}/>
            <StatsBlock products={products}/>

            <SelectionContext.Provider value={selectedCat}>
                <OverviewTable products={products} sortBy={sortBy} setSortBy={(value)=>{setSortBy(value)}}/>
            </SelectionContext.Provider>
        </div>
    )
}

export default OverviewPage
