import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
    return (
        <button
            onClick={() => {
                increment();
            }}
        >
            Incrementar
        </button>
    )
})
