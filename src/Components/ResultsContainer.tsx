import type { ResultsDto, ResultSetter, Navigator } from "@Models/.";
import { Results } from "./Results";

interface ResultsContainerProps{
    results?:ResultsDto;
    resultSetter:ResultSetter;
    navigator:Navigator;
}

export function ResultsContainer(props: ResultsContainerProps){
    const { results, resultSetter, navigator } = props;

    const onBack = () => {
        resultSetter(undefined);
        navigator("home");
    }

    return(<div className="ResultsContainer">
        {results === undefined && <span>Error: Results were not set. Developer failed to account for an existing workflow.</span>}
        {results !== undefined && <Results results={results} onBack={onBack}/>}
    </div>);
}