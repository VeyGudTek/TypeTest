export type LetterStatus = "correct" | "incorrect" | "disabled" | "extra";

export interface LetterDto{
    status:LetterStatus;
    lastInput:boolean;
    character:string;
}