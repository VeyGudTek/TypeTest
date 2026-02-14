import type { PageOption } from "./Page";
import type { ResultsDto } from "./Results.type";

export type BasicCallback = () => void;
export type Navigator = (page:PageOption) => void;
export type ResultSetter = (results:ResultsDto | undefined) => void;