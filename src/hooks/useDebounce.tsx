import { useRef, SyntheticEvent } from "react";

type useDebounceHookTypes = {
    current: number;
}

const useDebounce = (func: Function, delay: number) => {
    const ref: useDebounceHookTypes = useRef(0);

    return (...args: SyntheticEvent[]) => {
        clearTimeout(ref.current);
        ref.current = window.setTimeout(() => func(...args), delay);
    };
};

export default useDebounce;
