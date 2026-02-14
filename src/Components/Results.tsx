import type { Navigator, ResultsDto, ResultSetter } from "@Models/.";

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
            <button onClick={() => onBack()}>Return To Menu</button>
        </>}
    </div>);
}