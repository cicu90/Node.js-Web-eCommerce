import React from "react";

import "./Button.scss";

function Button ({
    children,
    ...props
}){
    return(
        <div>
            <button className="btnBasic"
            {...props}>
                {children}
            </button>
        </div>
    )
}

export default Button;