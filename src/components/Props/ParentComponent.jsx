import React from "react";
import ChildComponent from "./ChildComponent";

//Props - properties: pass data one component to another

export default function ParentComponent() {
  return <div>
    
    <ChildComponent name="Olamiji" age="10"/>
    
    
    </div>;
}

//import ChildComponent here, pass data from parent to child






//Props is a short form of properties. It allows for passage data from one component to another. Props allow components to talk to each other by sharing information

//parent component pass data to child component

//Key points of Props
//1. data sharing - send data from parent comp to a child comp
//2. read only - display only - user cannot edit: cannot be modified
//3. props - usage
//4. props are optional not mandatory
//5. props can be any data types: strings, numbers, arrays, booleans

//How to make use of props