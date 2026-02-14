import { LeftHandTests, RightHandTests, tests, type Navigator, type ResultsDto } from "@Models/.";
import "@CSS/Select.css";
import { Display } from "./Display";

interface SelectProps{
    results?: ResultsDto
    navigator: Navigator
}

export function Select(props: SelectProps){
    const { results, navigator } = props;

    return(<div className="SelectContainer">
        {results !== undefined && <button className="BackButton" onClick={() => navigator("results")}>Previous Test Results</button>}
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