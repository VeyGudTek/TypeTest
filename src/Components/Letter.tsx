import type { LetterStatus } from "@Models/.";
import "@CSS/Letter.css";

interface LetterProps{
    letter:string;
    status:LetterStatus
}

export function Letter(props: LetterProps){
    const { letter, status } = props;

    return (<>
        {status === "correct" &&    <span className="Correct">  {letter}</span>}
        {status === "incorrect" &&  <span className="Incorrect">{letter}</span>}
        {status === "disabled" &&   <span className="Disabled"> {letter}</span>}
    </>);
}