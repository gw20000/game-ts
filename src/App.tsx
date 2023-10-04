import React from "react";
import { CountComp2  } from "./components/CountComp";
import {message} from './utils'

// before refactor: 
// function App() {
  
//   return (
//     <div className="App">
//          <h1>App.tsx</h1>
//          <CountComp2 num={2}  />
//     </div>
//   );
// }

// export default App;






//after refactor:  
// to refactor comp App , since it will have a state,  we need to  change to define it as a class comp  (a class comp : to define logic inside  a class), of which a typical feature owning a state of self.  

// in brief,  App comp functions as a container comp , so we define it as a class comp. 

interface IState {
  num:number,
  desc:string
}

export  class App extends React.Component<{},IState>{
        state:IState={
            num:0,
            desc:''
        }
       render() {
        return (
          <div className="App">
               <h1>App.tsx</h1>
               <CountComp2 num={this.state.num} onChange={n=>{ // if you don't pass this.state.num , the comp CountComp2 instance will not be recorded  / collected as one dependency of  cur comp instance's state this.state.num , 🔥therefore, when this.state.num change, it will not notify  the comp CountComp2 instance 

                 this.setState({  // type compatibility  regarding  object state's type IState -----  type judgement means of  child structure distinguish  type 
                     num:n
                 })
                 setTimeout(()=>{
                  message(`cur num is: ${this.state.num}`,1500)
                 })

               }}  />
          </div>
        );
       }
  
}