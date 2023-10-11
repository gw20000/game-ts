import React from "react";
import { ChessComp } from "./components/ChessComp";
import { ChessType } from "./types/enums";

export class App extends React.Component{

     render(){
         return(
            <div className="App">
                 <ChessComp type={ ChessType.none} onClick={()=>{
                     console.log('click')
                 }}/>
                 <ChessComp type={ ChessType.red} onClick={()=>{
                    console.log('click')
                 }}/>
                 <ChessComp type={ ChessType.black} onClick={()=>{
                    console.log('click')
                 }}/>
            </div>
         )
     }

}