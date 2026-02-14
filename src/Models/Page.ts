export type PageOption = "home" | "results" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
export type TestOption = Exclude<PageOption, "home" | "results">;

export interface TestData{
    display: string[];
    letterSet: string[];
}

export const tests:Record<TestOption, TestData> = {
    "0":{
        display: ["asdf"],
        letterSet: ["a", "s", "d", "f"]
    },
    "1":{
        display: ["qwer"],
        letterSet: ["q", "w", "e", "r"]
    },
    "2":{
        display: ["zxcv"],
        letterSet: ["z", "x", "c", "v"]
    },
    "3":{
        display: ["qwer", "asdf"],
        letterSet: ["a", "s", "d", "f", "q", "w", "e", "r"]
    },
    "4":{
        display: ["asdf", "zxcv"],
        letterSet: ["a", "s", "d", "f", "z", "x", "c", "v"]
    },
    "5":{
        display: ["qwer", "asdf", "zxcv"],
        letterSet: ["a", "s", "d", "f", "q", "w", "e", "r", "z", "x", "c", "v"]
    },
    "6":{
        display: ["asdf g"],
        letterSet: ["a", "s", "d", "f", "g"]
    },
    "7":{
        display: ["qwer t"],
        letterSet: ["q", "w", "e", "r", "t"]
    },
    "8":{
        display: ["zxcv b"],
        letterSet: ["z", "x", "c", "v", "b"]
    },
    "9":{
        display: ["qwer t", "asdf g", "zxcv b"],
        letterSet: ["a", "s", "d", "f", "g", "q", "w", "e", "r", "t", "z", "x", "c", "v", "b"]
    },
    "10":{
        display: ["123456", "asdf"],
        letterSet: ["a", "s", "d", "f", "1", "2", "3", "4", "5", "6"]
    }
}