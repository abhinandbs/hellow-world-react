import React from "react";
import ChildComponent from "./HigherOrderComponents/childComponent";
import withMessage from "./HigherOrderComponents/higherOrderComponentSample";


const Samples =() =>{


    const UpdatedComponent = withMessage(ChildComponent)

    return (

        <div>

           <UpdatedComponent></UpdatedComponent>
        </div>
    )
}

export default Samples;