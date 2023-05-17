import React, { Component } from "react";

function withStoragelistener(WrapperComponent){
    return function WrapperComponentWithStorList(){
        return <WrapperComponent />
    }
}

export { withStoragelistener };