import { tests, type Navigator } from "@Models/.";
import "@CSS/Select.css";

interface SelectProps{
    navigator: Navigator
}

export function Select(props: SelectProps){
    const { navigator } = props;

    return(<div className="SelectContainer">
        <div className="SelectTitle">
            Select Typing Test
        </div>
        <div className="ButtonGrid">
            <button className="SelectButton" onClick={() => navigator("0")}>{tests["0"].display}</button>
            <button className="SelectButton" onClick={() => navigator("0")}>{tests["0"].display}</button>
            <button className="SelectButton" onClick={() => navigator("0")}>{tests["0"].display}</button>
            <button className="SelectButton" onClick={() => navigator("0")}>{tests["0"].display}</button>
            <button className="SelectButton" onClick={() => navigator("0")}>{tests["0"].display}</button>
        </div>
    </div>);
}