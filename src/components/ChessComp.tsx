import { ChessType } from "../types/enums"
import React from 'react'
import './ChessComp.scss'
interface IProps{
    type:ChessType,
    onClick?:()=>void
}

// ChessComp  is defined as a functon comp  as it's only for displaying data (props) , not providing any data (state)
export  function ChessComp(props:IProps){
    let chess = null
    
    if(props.type===ChessType.red){
       chess  =  <div className="chess-item red"></div>
    }
    else if(props.type === ChessType.black){
         chess = <div className="chess-item black"></div>
    }

     return(
     <div className="chess" onClick={()=>{
        // this event to do what ?  cur comp doesn't know
        props.onClick &&  props.onClick()
     }}>
          {chess}
     </div>
     )

}