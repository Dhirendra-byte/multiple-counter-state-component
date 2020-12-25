import React from "react";
import "./styles.css";
import Counter from "./Counter";
export default class extends React.Component{
  constructor(){
    super();
 this.state={counters:[{id:1,value:3},
  {id:2,value:5},{id:3,value:7},{id:4,value:9}]}
  }
handleDelete=(id)=>{
const filterCounters=this.state.counters.filter((counter)=>counter.id!==id);
this.setState({counters:filterCounters});
}
handleIncrement=(id)=>{
 const countersCopy=this.state.counters.map(counter=>{
  const counterCopy={...counter};
  if(counterCopy.id===id){
    counterCopy.value++;
  }
return counterCopy;
});
this.setState({counters:countersCopy})
  }

handleReset=()=>{
const resettedCopy=this.state.counters.map(counter=>{
  counter.value=0;
  return counter; })
this.setState({counters:resettedCopy})
}

  render(){
  return (
    <div className="App">
      <button onClick={this.handleReset}>Reset</button>
      {this.state.counters.map(counter=>(
      <Counter key={counter.id} 
      id={counter.id}
      value={counter.value} 
      handleDelete={this.handleDelete}
      handleIncrement={this.handleIncrement}/>))}
    </div>
  );
}
}