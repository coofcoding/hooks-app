import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from "../03-examples";

export const Layout = () => {

    const { counter, increment } = useCounter();

    const { data, isLoading, hasError } = useFetch(`${import.meta.env.VITE_BASE_URL}/${counter}`);

    const { author, quote } = !!data && data[0];


    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            
            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote
                        quote={quote}
                        author={author}
                    />
            }

            <button
                className="btn btn-primary"
                disabled={isLoading}
                onClick={() => increment()}
            >
                Next Quote
            </button>
        </>
    )
}
