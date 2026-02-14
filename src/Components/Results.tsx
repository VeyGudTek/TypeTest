import type { BasicCallback, ResultsDto } from "@Models/.";
import "@CSS/Results.css";

interface ResultsProps{
    results:ResultsDto;
    onBack: BasicCallback;
}

export function Results(props: ResultsProps){
    const { results, onBack } = props;
    const { time, characters, missedCharacters, finalMissedCharacters } = results;

    return(<div className="ResultsContainer">
        {results === undefined && <span>Error: Results were not set. Developer failed to account for an existing workflow.</span>}
        {results !== undefined && <>
            <div className="ResultsTitle">Test Completed!</div>
            <div className="StatsContainer">
                <div className="StatsHeader">
                    Speed
                </div>
                <div className="StatsResults">
                    <div className="StatsResultSingle">
                        <div className="StatsResultSingleHeader">Time</div>
                        <div className="StatsResultSingleValue">{time.toFixed(1)}</div>
                    </div>
                    <div className="StatsResultSingle">
                        <div className="StatsResultSingleHeader">Characters</div>
                        <div className="StatsResultSingleValue">{characters}</div>
                    </div>
                    <div className="StatsResultSingle">
                        <div className="StatsResultSingleHeader">Words</div>
                        <div className="StatsResultSingleValue">{characters / 5}</div>
                    </div>
                                        <div className="StatsResultSingle">
                        <div className="StatsResultSingleHeader">Characters Per Minute</div>
                        <div className="StatsResultSingleValue">{((characters / time) * 60).toFixed(1)}</div>
                    </div>
                    <div className="StatsResultSingle">
                        <div className="StatsResultSingleHeader">Words Per Minute</div>
                        <div className="StatsResultSingleValue">{(((characters / 5) / time) * 60).toFixed(1)}</div>
                    </div>
                </div>
                <div className="StatsHeader">
                    Accuracy
                </div>
                <div className="StatsResults">
                    <div className="StatsResultSingle">
                        <div className="StatsResultSingleHeader">Typoes</div>
                        <div className="StatsResultSingleValue">{`${missedCharacters}/${characters} (%${(missedCharacters / characters).toFixed(1)})`}</div>
                    </div>
                    <div className="StatsResultSingle">
                        <div className="StatsResultSingleHeader">Incorrect Characters</div>
                        <div className="StatsResultSingleValue">{`${finalMissedCharacters}/${characters} (%${(finalMissedCharacters / characters).toFixed(1)})`}</div>
                    </div>
                </div>
            </div>
            <div className="ResultActionContainer">
                <button className="ResultAction" onClick={() => onBack()}>Return To Menu</button>
            </div>
        </>}
    </div>);
}