import { useEffect, useState } from "react";

export function useDebounce(value, delay = 500) {
    const [debounce, setDebounce] = useState("");
    useEffect(() => {
        const time = setTimeout(() => {
            setDebounce(value);
        }, delay)

        return () => clearTimeout(time);
    }, [value, delay])

    return debounce;
}