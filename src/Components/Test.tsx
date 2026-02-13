import type { BasicCallback, PageOption } from "@Models/.";

interface TestProps{
    navigateBack: BasicCallback,
    pageOption: PageOption
}

export function Test(props: TestProps){
    const { navigateBack } = props;

    return (<button onClick={() => navigateBack()}>Go home</button>);
}