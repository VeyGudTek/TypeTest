import type { LetterStatus } from "@Models/.";
import "@CSS/Letter.css";

interface LetterProps{
    letter:string;
    status:LetterStatus;
    lastInput:boolean;
}

export function Letter(props: LetterProps){
    const { letter, status, lastInput } = props;
    const className = `${status} ${lastInput ? "lastInput" : ""}`

    return (<>
        {status === "correct" &&    <span className={className}>{letter}</span>}
        {status === "incorrect" &&  <span className={className}>{letter}</span>}
        {status === "disabled" &&   <span className={className}>{letter}</span>}
        {status === "extra" &&      <span className={className}>{letter}</span>}
    </>);
}