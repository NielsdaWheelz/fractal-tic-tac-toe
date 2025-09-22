interface SquareProps {
    row: number,
    col: number,
    value: string | undefined
    onClick: (row: number, col: number) => void
}

const Square = (props : {row, col, value, onClick}) => {
    return (
        <div id={`square-${props.row}-${props.col}`} className="square" onClick={() => onClick(props.row, props.col)}>
            {props.value}
        </div>
    )
}