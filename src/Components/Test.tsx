import { type Navigator, type LetterDto, type TestOption } from "@Models/.";
import "@CSS/Test.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Letter } from "./Letter";
import { GetPrompt, GetResults, GetWPM } from "@Functions/TestFunctions";

interface TestProps{
    navigator: Navigator,
    testOption: TestOption
}

export function Test(props: TestProps){
    const { testOption, navigator } = props;
    const [ time, setTime ] = useState(0);
    const [ input, setInput ] = useState("");
    const [ started, setStarted ] = useState(false);

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
    }, [])

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
    }, [started])
    
    const prompt = useMemo(() => {
        return GetPrompt(testOption);
    }, [testOption]); 

    const testResults = useMemo(() => {
        return GetResults(prompt, input);
    }, [prompt, input])

    const wpm = useMemo(() => {
        return GetWPM(testResults, time);
    }, [testResults, time])

    return (<div className="TestContainer">
        <button className="BackButton" onClick={() => navigator("home")}>Go home</button>
        <div className="TestHeader">
            <div className="Timer">Time: {time.toFixed(1)}</div>
            <div className="WPM">WPM: {wpm.toFixed(1)}</div>
        </div>
        <div className="Timer"></div>
        <div className="Prompt">
            {testResults.map((dto, index) => (
                <Letter letter={dto.character} status={dto.status} key={index}></Letter>
            ))}
        </div>
    </div>);
}