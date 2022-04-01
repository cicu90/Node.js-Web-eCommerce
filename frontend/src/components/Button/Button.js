import React from "react";

import "./Button.scss";

function Button ({
    name,
    ...props
}){
    return(
        <div>
            <button className="btnBasic"
            {...props}>
                {name}
            </button>
        </div>
    )
}

export default Button;