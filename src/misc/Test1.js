import { Test2 } from "./Test2";

export const Test1 = () => {
    return(
        <>
            <h1>TEST ONE</h1>
            <Test2 
                carName='Honda' 
                plant='sunflower'
                candy='jollyrancher'
            />
            <Test2 
                carName='Mazda' 
                plant='rose'
            />
            <Test2 
                carName='BMW' 
                plant='ivy'
            />
        </>
    );
}