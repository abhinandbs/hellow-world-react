import React from "react";

const withMessage = (WrappedComponent)=>{

    return (props)=>{

       return <WrappedComponent {...props} message="Hellow Hoc Sample"> </WrappedComponent>
    }

}

export default withMessage;