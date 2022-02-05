import { Test3 } from "./Test3";

export const Test2 = (props) => {
    console.log(props)
    // console.log(props.candy || 'Maria')
    return ( 
        <>
            <h2>TEST TWO</h2>
            <h3>{props.carName}</h3>
            <h3>{props.plant}</h3>
            <h4>{props.candy}</h4>
            <Test3 candy={props.candy}/>
        </>
    );
}