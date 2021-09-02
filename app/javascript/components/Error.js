import React from 'react';

const Error = ({errors}) => {
    const renderError = () => {
        return Object.entries(errors).map((key_val_pair_arr) => {
            const attr = key_val_pair_arr[0]
            const error = key_val_pair_arr[1]
            return (
                <div>
                    <p>{attr === "name" ? "title" : attr}</p>
                    <ul>
                        {error.map((err) => {
                            return (<li>{err}</li>)
                        })}
                    </ul>
                </div>
            )
        })
    }
    return (
        <div className="error">
            <h4>Error!</h4>
            {errors ? renderError() : "None!"}
        </div>
    )
}

export default Error;