import { LeftHandTests, RightHandTests, tests, type Navigator } from "@Models/.";
import "@CSS/Select.css";
import { Display } from "./Display";

interface SelectProps{
    navigator: Navigator
}

export function Select(props: SelectProps){
    const { navigator } = props;

    return(<div className="SelectContainer">
        <div className="SelectTitle">
            Select Typing Test
        </div>
        <div className="SelectHeader">
            Left Hand Tests
        </div>
        <div className="ButtonGrid">
            {LeftHandTests.map((option) => 
                <button className="SelectButton" onClick={() => navigator(option)} key={option}>
                    <Display display={tests[option].display}/>
                </button>
            )}
        </div>
        <div className="SelectHeader">
            Right Hand Tests
        </div>
        <div className="ButtonGrid">
            {RightHandTests.map((option) => 
                <button className="SelectButton" onClick={() => navigator(option)} key={option}>
                    <Display display={tests[option].display}/>
                </button>
            )}
        </div>
    </div>);
}