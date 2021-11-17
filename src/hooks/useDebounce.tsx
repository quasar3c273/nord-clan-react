import { useRef, SyntheticEvent } from "react";

type useDebounceHookTypes = {
    current: number;
}

/**
 * @description - hook для задержки выполнения функции
 * @param func - функция, которую необходимо выполнить с задержкой
 * @param delay - задержка в миллисекундах
 * @type {useDebounceHookTypes} - тип возвращаемого значения
 */

const useDebounce = (func: Function, delay: number) => {
    const ref: useDebounceHookTypes = useRef(0);

    return (...args: SyntheticEvent[]) => {
        clearTimeout(ref.current);
        ref.current = window.setTimeout(() => func(...args), delay);
    };
};

export default useDebounce;
