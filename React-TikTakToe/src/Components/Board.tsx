import React from 'react';
import Cell from './Cell';
import '../Styles/Board.css';

type BoardProps = {
    board: string[];
    onCellClick: (index: number) => void;
};

function Board({ board, onCellClick }:BoardProps) {
    return (
<>
<div className='Board'>
    <div className='Board-Row'>
    <Cell value={board[0]} onClick={() => onCellClick(0)} />
    <Cell value={board[1]} onClick={() => onCellClick(1)} />
    <Cell value={board[2]} onClick={() => onCellClick(2)} />
    </div>
    <div className='Board-Row'>
    <Cell value={board[3]} onClick={() => onCellClick(3)} />
    <Cell value={board[4]} onClick={() => onCellClick(4)} />
    <Cell value={board[5]} onClick={() => onCellClick(5)} />
    </div>
    <div className='Board-Row'>
    <Cell value={board[6]} onClick={() => onCellClick(6)} />
    <Cell value={board[7]} onClick={() => onCellClick(7)} />
    <Cell value={board[8]} onClick={() => onCellClick(8)} />
    </div>
</div>
</>
    );
};

export default Board;
