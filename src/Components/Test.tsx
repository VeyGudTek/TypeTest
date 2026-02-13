import { pages, type BasicCallback, type PageOption } from "@Models/.";
import "@CSS/Test.css";
import { useEffect, useMemo, useState } from "react";

interface TestProps{
    navigateBack: BasicCallback,
    pageOption: PageOption
}

export function Test(props: TestProps){
    const { pageOption, navigateBack } = props;
    const [ time, setTime ] = useState(0);
    const [ input, setInput ] = useState("");
    const [ started, setStarted ] = useState(false);

    useEffect(() => {
        const onKeyDown = (event:KeyboardEvent) => {
            setInput(event.key);
            if (!started){
                setStarted(true);
            }
        }

        addEventListener("keydown", onKeyDown)
        return () => removeEventListener("keydown", onKeyDown)
    }, []);

    useEffect(() => {
        let id:number | undefined = undefined;

        if (started){
            id = setInterval(() => {
                setTime(prevTime => prevTime + .1);
            }, 100);
        }

        return () => clearInterval(id);
    }, [started])

    useEffect(() => {
        
    }, []);
    
    const testText = useMemo(() => {
        const letterSet = pages[pageOption].letterSet;
        const wordCount = 25;
        let text = "";

        for(let i = 0; i < wordCount; i++){
            const range = 5;
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


    return (<div className="TestContainer">
        <button className="BackButton" onClick={() => navigateBack()}>Go home</button>
        <div className="TestHeader">
            <div className="Timer">{pages[pageOption].display}</div>
            <div className="WPM">{pages[pageOption].display}</div>
        </div>
        <div className="Timer"></div>
        <div className="Prompt">
            {testText}
        </div>
        {time.toFixed(1)}
    </div>);
}