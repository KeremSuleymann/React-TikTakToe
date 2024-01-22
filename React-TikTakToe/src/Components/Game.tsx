import React, { useState } from 'react';
import calculateWinner from '../Helpers/calculateWinner';
import Board from './Board';

type Player = 'X' | 'O';

const Game: React.FC = () => {
    const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');

    const handleClick = (index: number) => {
        if (board[index] || calculateWinner(board)) {
            return;
        }

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    let status;
    const winner = calculateWinner(board);
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (board.every(cell => cell !== null)) {
        status = "It's a draw!";
    } else {
        status = `Next player: ${currentPlayer}`;
    }

    return (
        <>
        <p>{status}</p>
        <Board board={board} onCellClick={handleClick} />
        <button className='Reset-Button' onClick={() => setBoard(Array(9).fill(null))}>Start new game</button>
        </>
    );
};

export default Game;
