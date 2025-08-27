import {useReducer} from 'react'

type Action = {
    type: "INCREMENT";
}
const reducer = (state:number, action:Action): number => {
        switch(action.type) {
            case "INCREMENT":
                return state + 1;
            default:
                return state;
        }
    }
export default function Increase() {
    const [click, dispatch] = useReducer(reducer, 0);
  return (
    <div style={{backgroundColor:"wheat", padding:"20px"}}>
      <h3>{click}</h3>
      <button onClick={() => dispatch({type:"INCREMENT"})}>Increase</button>
    </div>
  )
}