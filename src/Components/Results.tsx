import type { Navigator, ResultsDto, ResultSetter } from "@Models/.";
import "@CSS/Results.css";

interface ResultsProps{
    results?:ResultsDto;
    resultSetter:ResultSetter;
    navigator:Navigator;
}

export function Results(props: ResultsProps){
    const { results, resultSetter, navigator } = props;

    const onBack = () => {
        resultSetter(undefined);
        navigator("home");
    }

    return(<div className="ResultsContainer">
        {results === undefined && <span>Error: Results were not set. Developer failed to account for an existing workflow.</span>}
        {results !== undefined && <>
            <div className="ResultsTitle">Test Completed!</div>
            <div className="StatsContainer">
                <div className="StatsHeader">
                    Speed
                </div>
                <div className="StatsResults">
                    {`time: ${results.time}`}
                </div>
                <div className="StatsHeader">
                    Accuracy
                </div>
                <div className="StatsResults">
                    {`Typoes (total): ${results.missedCharacters} Incorrect Letters (final): ${results.finalMissedCharacters}`}
                </div>
            </div>
            <div className="ResultActionContainer">
                <button className="ResultAction" onClick={() => onBack()}>Return To Menu</button>
            </div>
        </>}
    </div>);
}