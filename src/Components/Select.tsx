import { pages, type PageOption } from "@Models/.";
import "@CSS/Select.css";

interface SelectProps{
    setPage: (page: PageOption) => void
}

export function Select(props: SelectProps){
    const { setPage } = props;

    return(<div className="SelectContainer">
        <div className="SelectTitle">
            Select Typing Test
        </div>
        <div className="ButtonGrid">
            <button className="SelectButton" onClick={() => setPage("0")}>{pages["0"].display}</button>
            <button className="SelectButton" onClick={() => setPage("0")}>{pages["0"].display}</button>
            <button className="SelectButton" onClick={() => setPage("0")}>{pages["0"].display}</button>
            <button className="SelectButton" onClick={() => setPage("0")}>{pages["0"].display}</button>
            <button className="SelectButton" onClick={() => setPage("0")}>{pages["0"].display}</button>
        </div>
    </div>);
}