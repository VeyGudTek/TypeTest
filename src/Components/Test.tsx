import { pages, type BasicCallback, type PageOption, type LetterStatus } from "@Models/.";
import "@CSS/Test.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Letter } from "./Letter";

interface TestProps{
    navigateBack: BasicCallback,
    pageOption: PageOption
}

export function Test(props: TestProps){
    const { pageOption, navigateBack } = props;
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
            setInput(input.slice(0, input.length - 1))
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
        const letterSet = pages[pageOption].letterSet;
        const wordCount = 25;
        let text = "";

        for(let i = 0; i < wordCount; i++){
            const range = 7;
            const offset = 2;
            const wordLength = offset + Math.round(Math.random() * range)

            for (let j = 0; j < wordLength; j++){
                const index = Math.round(Math.random() * (letterSet.length - 1));
                const letter = letterSet[index]
                text += letter;
            }

            text += " ";
        }

        return text;
    }, [pageOption]); 

    const testResults = useMemo(() => {
        const testResults:Map<number, LetterStatus> = new Map();

        for(let i = 0; i < prompt.length; i++){
            if (i > input.length - 1){
                testResults.set(i, "disabled");
            }
            else if (input[i] === prompt[i]){
                testResults.set(i, "correct");
            }
            else{
                testResults.set(i, "incorrect");
            }
        }

        return testResults
    }, [prompt, input])

    const wpm = useMemo(() => {
        const correctLetters = Array.from(testResults.values()).filter(s => s === "correct").length;
        const minutes = time / 60;

        return (correctLetters / 5) / minutes;
    }, [testResults, time])

    return (<div className="TestContainer">
        <button className="BackButton" onClick={() => navigateBack()}>Go home</button>
        <div className="TestHeader">
            <div className="Timer">Time: {time.toFixed(1)}</div>
            <div className="WPM">WPM: {wpm.toFixed(1)}</div>
        </div>
        <div className="Timer"></div>
        <div className="Prompt">
            {Array.from(testResults).map(([index, status]) => (
                <Letter letter={prompt[index]} status={status} key={index}></Letter>
            ))}
        </div>
    </div>);
}