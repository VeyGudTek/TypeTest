import type { BasicCallback } from "@Models/.";

interface SelectProps{
    nagivate0: BasicCallback
}

export function Select(props: SelectProps){
    const { nagivate0 } = props;

    return(<>
        <button onClick={() => nagivate0()}>go test 0</button>
    </>);
}