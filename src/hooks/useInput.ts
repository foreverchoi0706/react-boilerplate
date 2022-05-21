import { ChangeEvent, useCallback, useState } from "react";

const useInput = (initialState: string | number | boolean) => {
    const [state, setState] = useState<typeof initialState>(initialState);

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
    }, [state]);

    return [state, handleChange];
}

export default useInput;