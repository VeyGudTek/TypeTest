import { tests, type Navigator, type TestOption } from "@Models/.";
import "@CSS/Select.css";
import { useMemo } from "react";
import { Display } from "./Display";

interface SelectProps{
    navigator: Navigator
}

export function Select(props: SelectProps){
    const { navigator } = props;

    const testKeys:TestOption[] = useMemo(() => {
        return Object.keys(tests) as TestOption[];
    }, [tests])

    return(<div className="SelectContainer">
        <div className="SelectTitle">
            Select Typing Test
        </div>
        <div className="ButtonGrid">
            {testKeys.map((option) => 
                <button className="SelectButton" onClick={() => navigator(option)} key={option}>
                    <Display display={tests[option].display}/>
                </button>
            )}
        </div>
    </div>);
}