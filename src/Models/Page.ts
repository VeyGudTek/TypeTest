export type PageOption = "home" | "results" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
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
    }
}

export const LeftHandTests = Object.keys(tests).filter(k => tests[k as TestOption].type === "Left") as TestOption[];
export const RightHandTests = Object.keys(tests).filter(k => tests[k as TestOption].type === "Right") as TestOption[];
export const BothHandTests = Object.keys(tests).filter(k => tests[k as TestOption].type === "Both") as TestOption[];