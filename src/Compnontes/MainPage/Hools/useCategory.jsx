import { useQuery } from "react-query";
import useAxousPublic from "./useAxousPublic";
import useAllPropotismenu from "./useAllPropotismenu";
import { useEffect, useState } from "react";


const useCategory = ({text}) => {
    const [menus,refetch,isLoading] = useAllPropotismenu();
    const axospublic = useAxousPublic();
    console.log(text)
    const [data,setdata] = useState([]);
    useEffect(()=>{
        const verified = menus?.filter(item=>item.status===text);
        setdata(verified)
    },[text])

    return [data,refetch,isLoading]
};

export default useCategory;