import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface ISearchParam {
    [key: string]: string;
}

const useSearchParam = () => {
    const { search } = useLocation();

    const [searchParams, setSearchParams] = useState<ISearchParam>();

    useEffect(() => {
        const searchParams = new URLSearchParams(search);
        const keys = searchParams.keys();
        const obj: ISearchParam = {};
        searchParams.forEach(searchParam => {
            obj[keys.next().value] = searchParam;
        });
        setSearchParams(obj);
    }, [search]);

    return searchParams;
}

export default useSearchParam;