import type { ResultsDto, Navigator } from "@Models/.";
import { Results } from "./Results";

interface ResultsContainerProps{
    results?:ResultsDto;
    navigator:Navigator;
}

export function ResultsContainer(props: ResultsContainerProps){
    const { results, navigator } = props;

    const onBack = () => {
        navigator("home");
    }

    return(<div className="ResultsContainer">
        {results === undefined && <span>Error: Results were not set. Developer failed to account for an existing workflow.</span>}
        {results !== undefined && <Results results={results} onBack={onBack}/>}
    </div>);
}