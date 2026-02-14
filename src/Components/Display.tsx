interface DisplayProps{
    display:string[]
}

export function Display(props: DisplayProps){
    const { display } = props;
    const numLines = display.length;

    return(<>
        {display.map((line) => 
            <div key={line + numLines}>{line}</div>
        )}
    </>);
}