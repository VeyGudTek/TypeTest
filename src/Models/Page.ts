export type PageOption = "home" | "results" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type TestOption = Exclude<PageOption, "home" | "results">;

export interface TestData{
    display: string;
    letterSet: string[];
}

export const tests:Record<TestOption, TestData> = {
    "0":{
        display: "asdf",
        letterSet: ["a", "s", "d", "f"]
    },
    "1":{
        display: "qwer",
        letterSet: ["q", "w", "e", "r"]
    },
    "2":{
        display: "zxcv",
        letterSet: ["z", "x", "c", "v"]
    },
    "3":{
        display: "asdfqwer",
        letterSet: ["a", "s", "d", "f", "q", "w", "e", "r"]
    },
    "4":{
        display: "asdfzxcv",
        letterSet: ["a", "s", "d", "f", "z", "x", "c", "v"]
    },
    "5":{
        display: "asdfg",
        letterSet: ["a", "s", "d", "f", "g"]
    },
    "6":{
        display: "qwert",
        letterSet: ["q", "w", "e", "r", "t"]
    },
    "7":{
        display: "zxcvb",
        letterSet: ["z", "x", "c", "v", "b"]
    },
    "8":{
        display: "asdfgqwertzxcvb",
        letterSet: ["a", "s", "d", "f", "g", "q", "w", "e", "r", "t", "z", "x", "c", "v", "b"]
    },
    "9":{
        display: "asdf1234",
        letterSet: ["a", "s", "d", "f", "1", "2", "3", "4"]
    }
}