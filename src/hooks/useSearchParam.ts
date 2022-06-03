import { useEffect, useState } from "react";

interface ISearchParam {
    [key: string]: string;
}

const useSeachParam = () => {
    const [searchParams, setSearchParams] = useState<ISearchParam>();

    useEffect(() => {
        const searchParams = new URLSearchParams(document.location.search);
        const keys = searchParams.keys();
        const obj: ISearchParam = {};

        searchParams.forEach(searchParam => {
            const key = keys.next().value;
            obj[String(key)] = searchParam;
        });
        setSearchParams(obj);
    }, [document.location.search]);

    return searchParams
}

export default useSeachParam;