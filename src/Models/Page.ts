export type PageOption = "home" | "results" | 
    "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" |
    "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19"| "20" | "21" | "22" |
    "23" | "24" | "25" | "26" | "27" | "27" | "28" | "29";

export type TestOption = Exclude<PageOption, "home" | "results">;
type TestType = "Left" | "Right" | "Both";

export interface TestData{
    display: string[];
    type: TestType
    letterSet: string[];
}

export const tests:Record<TestOption, TestData> = {
    "0":{
        display: ["asdf"],
        type: "Left",
        letterSet: ["a", "s", "d", "f"]
    },
    "1":{
        display: ["qwer"],
        type: "Left",
        letterSet: ["q", "w", "e", "r"]
    },
    "2":{
        display: ["zxcv"],
        type: "Left",
        letterSet: ["z", "x", "c", "v"]
    },
    "3":{
        display: ["qwer", "asdf"],
        type: "Left",
        letterSet: ["a", "s", "d", "f", "q", "w", "e", "r"]
    },
    "4":{
        display: ["asdf", "zxcv"],
        type: "Left",
        letterSet: ["a", "s", "d", "f", "z", "x", "c", "v"]
    },
    "5":{
        display: ["qwer", "asdf", "zxcv"],
        type: "Left",
        letterSet: ["a", "s", "d", "f", "q", "w", "e", "r", "z", "x", "c", "v"]
    },
    "6":{
        display: ["asdf g"],
        type: "Left",
        letterSet: ["a", "s", "d", "f", "g"]
    },
    "7":{
        display: ["qwer t"],
        type: "Left",
        letterSet: ["q", "w", "e", "r", "t"]
    },
    "8":{
        display: ["zxcv b"],
        type: "Left",
        letterSet: ["z", "x", "c", "v", "b"]
    },
    "9":{
        display: ["qwer t", "asdf g", "zxcv b"],
        type: "Left",
        letterSet: ["a", "s", "d", "f", "g", "q", "w", "e", "r", "t", "z", "x", "c", "v", "b"]
    },
    "10":{
        display: ["123456", "asdf"],
        type: "Left",
        letterSet: ["a", "s", "d", "f", "1", "2", "3", "4", "5", "6"]
    },
    "11":{
        display: ["jkl;"],
        type: "Right",
        letterSet: ["j", "k", "l", ";"]
    },
    "12":{
        display: ["uiop"],
        type: "Right",
        letterSet: ["u", "i", "o", "p"]
    },
    "13":{
        display: ["m,./"],
        type: "Right",
        letterSet: ["m", ",", ".", "/"]
    },
    "14":{
        display: ["uiop", "jkl;"],
        type: "Right",
        letterSet: ["j", "k", "l", ";", "u", "i", "o", "p"]
    },
    "15":{
        display: ["jkl;", "m,./"],
        type: "Right",
        letterSet: ["j", "k", "l", ";", "m", ",", ".", "/"]
    },
    "16":{
        display: ["uiop", "jkl;", "m,./"],
        type: "Right",
        letterSet: ["u", "i", "o", "p", "j", "k", "l", ";", "m", ",", ".", "/"]
    },
    "17":{
        display: ["h jkl;"],
        type: "Right",
        letterSet: ["h", "j", "k", "l", ";"]
    },
    "18":{
        display: ["y uiop"],
        type: "Right",
        letterSet: ["y", "u", "i", "o", "p"]
    },
    "19":{
        display: ["n m,./"],
        type: "Right",
        letterSet: ["n", "m", ",", ".", "/"]
    },
    "20":{
        display: ["y uiop", "h jkl;", "n m,./"],
        type: "Right",
        letterSet: ["h", "j", "k", "l", ";", "y", "u", "i", "o", "p", "n", "m", ",", ".", "/"]
    },
    "21":{
        display: ["y uiop", "h jkl", "n m"],
        type: "Right",
        letterSet: ["h", "j", "k", "l", "y", "u", "i", "o", "p", "n", "m"]
    },
    "22":{
        display: ["7890-=", "jkl;"],
        type: "Right",
        letterSet: ["7", "8", "9", "0", "-", "=", "j", "k", "l", ";"]
    },
    "23":{
        display: ["asdf gh jkl;"],
        type: "Both",
        letterSet: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"]
    },
    "24":{
        display: ["qwer ty uiop"],
        type: "Both",
        letterSet: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    },
    "25":{
        display: ["zxcv bn m,./"],
        type: "Both",
        letterSet: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
    },
    "26":{
        display: ["qwer ty uiop", "asdf gh jkl;"],
        type: "Both",
        letterSet: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";"]
    },
    "27":{
        display: ["asdf gh jkl;", "zxcv b nm,./"],
        type: "Both",
        letterSet: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
    },
    "28":{
        display: ["qwer ty uiop", "asdf gh jkl;", "zxcv bn m,./"],
        type: "Both",
        letterSet: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
    },
    "29":{
        display: ["123456 7890-=", "asdf jkl;"],
        type: "Both",
        letterSet: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "a", "s", "d", "f", "j", "k", "l", ";"]
    }
}

export const LeftHandTests = Object.keys(tests).filter(k => tests[k as TestOption].type === "Left") as TestOption[];
export const RightHandTests = Object.keys(tests).filter(k => tests[k as TestOption].type === "Right") as TestOption[];
export const BothHandTests = Object.keys(tests).filter(k => tests[k as TestOption].type === "Both") as TestOption[];