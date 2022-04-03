import React from "react";

import "./Button.scss";

function Button ({
    name,
    ...props
}){
    return(
            <button className="btnBasic"
            {...props}>
                {name}
            </button>
    )
}

export default Button;