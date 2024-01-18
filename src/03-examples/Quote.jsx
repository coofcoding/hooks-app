import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';

export const Quote = ({ quote, author }) => {

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {

        const { width, height } = pRef.current.getBoundingClientRect();
        setBoxSize({ width, height })

    }, [quote])

    return (
        <>
            <blockquote
                className="blockquote"
                style={{
                    display: 'flex'
                }}
            >
                <p ref={pRef} className="title">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>

            <p> { JSON.stringify(boxSize) } </p>
        </>
    )
}

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}