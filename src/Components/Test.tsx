import { type Navigator, type ResultSetter, type TestOption } from "@Models/.";
import "@CSS/Test.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Letter } from "./Letter";
import { GenerateResults, GetMissedCharacters, GetPrompt, GetResults, GetWPM } from "@Functions/TestFunctions";

interface TestProps{
    testOption: TestOption,
    resultSetter: ResultSetter,
    navigator: Navigator,
}

export function Test(props: TestProps){
    const { testOption, navigator, resultSetter } = props;
    const [ time, setTime ] = useState(0);
    const [ input, setInput ] = useState("");
    const [ started, setStarted ] = useState(false);
    const [missedCharacters, setMissedCharacters] = useState<number[]>([]);

    const prompt = useMemo(() => {
        return GetPrompt(testOption);
    }, [testOption]); 

    const testResults = useMemo(() => {
        return GetResults(prompt, input);
    }, [prompt, input])

    const wpm = useMemo(() => {
        return GetWPM(testResults, time);
    }, [testResults, time])

    const onKeyDown = useCallback((event:KeyboardEvent) => {
        if (event.key.length === 1){
            setInput(prevInput => prevInput + event.key);
            if (!started){
                setStarted(true);
            }
        }
        if (event.key === "Backspace"){
            setInput(prevInput => prevInput.slice(0, prevInput.length - 1))
        }
    }, [setInput, setStarted])

    useEffect(() => {
        addEventListener("keydown", onKeyDown)
        return () => removeEventListener("keydown", onKeyDown)
    }, [onkeydown]);

    useEffect(() => {
        let id:number | undefined = undefined;

        if (started){
            id = setInterval(() => {
                setTime(prevTime => prevTime + .1);
            }, 100);
        }

        return () => clearInterval(id);
    }, [started, setTime])

    useEffect(() => {
        const currentMissedCharacters = GetMissedCharacters(input, prompt);

        setMissedCharacters(prevChar => prevChar.concat(currentMissedCharacters));
    }, [input, prompt, setMissedCharacters])
    
    useEffect(() => {
        if (input.length > prompt.length && input[input.length - 1] === " "){
            const results = GenerateResults(time, missedCharacters, testResults);

            resultSetter(results);
            navigator("results");
        }
    }, [input, prompt, time, missedCharacters, testResults])

    return (<div className="TestContainer">
        <button className="BackButton" onClick={() => navigator("home")}>Go home</button>
        <div className="TestHeader">
            <div className="Timer">Time: {time.toFixed(1)}</div>
            <div className="WPM">WPM: {wpm.toFixed(1)}</div>
        </div>
        <div className="Timer"></div>
        <div className="Prompt">
            {testResults.map((dto, index) => (
                <Letter letter={dto.character} status={dto.status} lastInput={dto.lastInput} key={index}></Letter>
            ))}
        </div>
        {input.length >= prompt.length && <div className="EndPrompt">
            Press Space to Finish Test
        </div>}
    </div>);
}