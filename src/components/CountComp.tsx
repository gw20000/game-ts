
// 1. how to  use TS + React to write a display comp ===  how to constrain a  display comp 

import React from "react"
import  "./CountComp.scss"


interface IProps{
    num:number,
    // onChange?(n:number):void
    onChange?:(n:number)=>void
} // used to constrain the type of props 

// function comp : form 1  
export function CountComp(props:IProps){ 
     return (<div>

           <button onClick={()=>{
               props.onChange &&  props.onChange(props.num-1)
           }}>-</button>
          
            <span>{props.num}</span>

            <button onClick={()=>{
                 props.onChange &&  props.onChange(props.num+1)
            }}>+</button>

     </div>)

}




// function comp : form 2
export const  CountComp2: React.FC<IProps> = (props)=>{   // deprecated :  here don't recomment using React.SFC since as of recent React versions,   function comps can  no longer be  considered 'stateless'. Pls use FunctionComponent instead. 
    // type  React.FC<P={}> = React.FunctionComponent<P>   , in which , the generic type P virtually refers to the type of props 

// note:  React.FC<IProps>  amounts to  a concrete type  to contrant  variable  CountComp2 



    return (<div className="count-comp">

          <button onClick={()=>{
              props.onChange &&  props.onChange(props.num-1)
          }}>-</button>
         
           <span>{props.num}</span>

           <button onClick={()=>{
                props.onChange &&  props.onChange(props.num+1)
           }}>+</button>

    </div>)

}




// 2. how to  use TS + React to write a class comp  === how to constrain a class comp 

interface  IState {
    msg:string
    description:string
} // used to constrain the type of state 

// export class CountComp3 extends React.Component<IProps,IState> {

    //or :  don't pass concrete type to generic type IState ,but instead use a type defined outside cur class  to constrain state of cur class 

    export class CountComp3 extends React.Component<IProps> {

        //initilize state 
        state:IState = {
            msg:'',
            description:'',
            // test:''
        }

      render(): React.ReactNode {
        // this.state
        return (<div>

            <button onClick={()=>{
                this.props.onChange &&  this.props.onChange(this.props.num-1)
            }}>-</button>
           
             <span>{this.props.num}</span>
  
             <button onClick={()=>{
                  this.props.onChange &&  this.props.onChange(this.props.num+1)
                  
             }}>+</button>
  
      </div>)
      }
}