export type PageOption = "home" | "0" | "1";

export interface PageData{
    display: string;
    letterSet: string[];
}

export const pages:Record<PageOption, PageData> = {
    "home":{
        display: "",
        letterSet: []
    },
    "0":{
        display: "asdf",
        letterSet: ["a", "s", "d", "f"]
    },
    "1":{
        display: "jkl;",
        letterSet: ["j", "k", "l", ";"]
    }
}