import React from "react";

const withMessage = (WrappedComponent)=>{

    return (props)=>{

       return <WrappedComponent {...props} message="hellow"> </WrappedComponent>
    }

}

export default withMessage;