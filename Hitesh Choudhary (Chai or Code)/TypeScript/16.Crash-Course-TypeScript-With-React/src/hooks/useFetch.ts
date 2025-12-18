import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {

    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    })

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setState(data)
        }
        fetchData()
    }, [url])

    return state

}