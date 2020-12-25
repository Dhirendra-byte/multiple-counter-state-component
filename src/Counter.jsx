import React from "react";
import "./styles.css";

export default class Counter extends React.Component{
constructor(props){
  super(props);
}
render(){
  return(
    <div>
    {this.props.value}
    <button onClick={()=>this.props.handleIncrement(this.props.id)}>increment</button>
    <button onClick={()=>this.props.handleDelete(this.props.id)}>Delete</button>
    </div>
  )
}
}