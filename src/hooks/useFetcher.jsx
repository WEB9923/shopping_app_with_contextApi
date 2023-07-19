import {useState,useEffect} from "react";
import {getData} from "../services/getData.js";
export const useFetcher = (url) => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    useEffect(() => {
        getData(url).then((res) => {
            setLoading(true);
            setData(res);
        }).catch((err) => {
            setError(err);
        }).finally(() => {
            setLoading(false)
        })
    }, [url]);
    return {data,loading,error};
}
