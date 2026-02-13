import type { BasicCallback, PageOption } from "@Models/.";
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
            <button className="SelectButton" onClick={() => setPage("0")}>go test 0</button>
            <button className="SelectButton" onClick={() => setPage("0")}>go test 0</button>
            <button className="SelectButton" onClick={() => setPage("0")}>go test 0</button>
            <button className="SelectButton" onClick={() => setPage("0")}>go test 0</button>
            <button className="SelectButton" onClick={() => setPage("0")}>go test 0</button>
        </div>
    </div>);
}