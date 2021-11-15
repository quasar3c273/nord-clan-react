import { useRef } from "react";

const useDebounce = (func, delay) => {
    const ref = useRef(null);

    return (...args) => {
        clearTimeout(ref.current);
        ref.current = setTimeout(() => func(...args), delay);
    };
};

export default useDebounce;
