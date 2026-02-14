import { tests, type LetterDto, type ResultsDto, type TestOption } from "@Models/.";

export function GetPrompt(testOption:TestOption){
    const letterSet = tests[testOption].letterSet;
    const wordCount = 3;
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

        text += (i !== wordCount - 1) ? " " : "";
    }

    return text;
}

export function GetResults(prompt:string, input:string){
    const testResults:LetterDto[] = [];

    for(let i = 0; i < prompt.length; i++){
        const currentLetter = input[i];
        const currentPrompt = prompt[i];
        const lastInput = i === input.length - 1;

        if (i > input.length - 1){
            testResults.push({status:"disabled", character:currentPrompt, lastInput: lastInput});
        }
        else if (currentLetter === currentPrompt){
            testResults.push({status:"correct", character:currentPrompt, lastInput: lastInput});
        }
        else{
            if (currentPrompt === " "){
                testResults.push({status:"extra", character:currentLetter, lastInput: false});
                testResults.push({status:"incorrect", character:" ", lastInput: lastInput});
            }
            else{
                testResults.push({status:"incorrect", character:currentPrompt, lastInput: lastInput});
            }
        }
    }

    for(let i = prompt.length; i < input.length; i++){
        testResults.push({status:"extra", character:input[i], lastInput: false});
    }

    return testResults;
}

export function GetWPM(testResults:LetterDto[], time:number){
    const correctLetters = Array.from(testResults.values()).filter(l => l.status === "correct").length;
    const minutes = time / 60;

    if (minutes === 0){
        return 0;
    }

    return (correctLetters / 5) / minutes;
}

export function GetMissedCharacters(input:string, prompt:string){
    const missedCharacters:number[] = [];
    
    for(let i = 0; i < input.length; i++){
        if (i > prompt.length - 1){
            break;
        }

        if (input[i] !== prompt[i]){
            missedCharacters.push(i);
        }
    }

    return missedCharacters;
}

export function GenerateResults(time:number, missedCharacters:number[], testResults:LetterDto[]):ResultsDto{
    return{
        time: time,
        missedCharacters: (new Set(missedCharacters)).size,
        characters: testResults.filter(l => l.status === "correct").length,
        finalMissedCharacters: testResults.filter(l => l.status==="incorrect").length
    };
}
