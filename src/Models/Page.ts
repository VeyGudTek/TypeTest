export type PageOption = "home" | "results" | "0" | "1";
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
        display: "jkl;",
        letterSet: ["j", "k", "l", ";"]
    }
}