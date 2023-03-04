import React, {createContext, useState, useEffect} from "react";

import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const {oading, setLoading} = useState(false);
    const {searchResults, setSearchResults} = useState(false);
    const {selectCatagories, setSelectCatagories} = useState(false);
    const {mobileMenu, setMobileMenu} = useState(false);

    useEffect(() => {
        fetchSelectedCatagoryData(selectCatagories)
    }, [selectCatagories]);

    const fetchSelectedCatagoryData = (query) => {
        setLoading(true);
        fetchDataFromApi('search/?q=$(query)').then((res) =>{
            console.log(res);
            //setSearchResults(res)
            setLoading(false);
        })
    }
    
    return {

        // <Context.Provider>
        // (props.children)
        // </Context.Provider>

    }
};