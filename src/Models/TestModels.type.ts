export type LetterStatus = "correct" | "incorrect" | "disabled" | "extra";

export interface LetterDto{
    status:LetterStatus;
    character:string;
}