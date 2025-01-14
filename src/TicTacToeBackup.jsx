import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './TicTacToe.css'



function Square({value, onClick}) {

    
    
    

    return (
        <button className="Square" onClick={onClick}>  
            {value}
        </button>
    )
}




function CrossSelect({player, onCrossClick, onCircleClick}) {

    
    return (
        <div className="CrossSelect">
            <button onClick = {onCrossClick}>X</button>
            <button onClick = {onCircleClick}>O</button>
            <p>Player: {player}</p>
        </div>
    )
}

function WinningText({ winner }) { 
    const winnerText = winner ? `Winner: ${winner}` : 'No winner yet'
    return <p>Player {winnerText}</p>;
}
function TicTacToe() {
    //state for changing current player X/O
    const [nextPlayer, setNextPlayer] = useState(true)
    //state with square array
    const [squares ,setSquare]=useState(Array(9).fill(null))
    //old state for changing players manually
    const [player, setPlayer] = useState("X")
    //state for winner
    const [winner, setWinner] = useState(null)
    //
    

    //Functions for manually changing players
    function handleCrossClick() {
        setPlayer('X')
    }
    function handleCircleClick() {
        setPlayer('O')
    }

    function getWinner(squares) {
        
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let ind = 0; ind < winConditions.length; ind++) {
            //projedu kazdou win condittion, ty pozice v ni nastvim jako a,b,c a kouknu zda jsou stejne
            const [a, b, c] = winConditions[ind];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
            
            
        }
        return null;
    }

    function onSquareClick(index) {
        //squares je branej jako tvrdej aray co nemuzu zmenit, slicem z nej udelam novej aray ve kterym to zmenim
        //pak nastvavim pomoci setSquare squares na newSquares
        //ve squares nejde menit jednotlva policka protoze to neni jako array co by se dal menit ale je to stav, ktery vypada jako pole deviti naku, ale nejde v nem jen jeden menit, jde vsak slicovat a takze si z nej udelam novy aray ktery uz jde ment, tam zmenim pozadovane policko a squares nastavim na novy array
        
        //musi to byt taakhle pac pri statech nemuzu menit jen urcite polozky daneho arraye co ma state ale musim mu natait zcela novy state
        const newSquares = squares.slice();

        if (newSquares[index]) {
            return;
        }
        let currentPlayer = ""
        if (nextPlayer) {
            currentPlayer = "X";
            setNextPlayer(false);
            
        } else {
            currentPlayer = "O";
            setNextPlayer(true);
        }

        newSquares[index] = currentPlayer;
        setSquare(newSquares);

        if (getWinner(newSquares)) {
            console.log("Winner: " + getWinner(newSquares));
            setWinner(getWinner(newSquares));
        }
        if (!getWinner(newSquares) && newSquares.every((square) => square !== null)) {
            const emptySquares = Array(9).fill(null);
            setSquare(emptySquares);
        }
    }


    return (
        <>
            <h1> Tic Tac Toe</h1>
            <WinningText winner={winner} />
            <div className="Board">
                <div className="BoardRow">
                    <Square onClick={()=>onSquareClick(0)} value={squares[0]} />
                    <Square onClick={() => onSquareClick(1)} value={squares[1]} />
                    <Square onClick={()=>onSquareClick(2)} value={squares[2]} />

                </div>
                <div className="BoardRow">
                    <Square onClick={()=>onSquareClick(3)} value={squares[3]} />        
                    <Square onClick={()=>onSquareClick(4)} value={squares[4]} />
                    <Square onClick={()=>onSquareClick(5)} value={squares[5]} />

                </div>
                <div className="BoardRow">
                    <Square onClick={()=>onSquareClick(6)} value={squares[6]} />
                    <Square onClick={()=>onSquareClick(7)} value={squares[7]} />
                    <Square onClick={()=>onSquareClick(8)} value={squares[8]} />

                </div>
                
            </div>
            <CrossSelect player={player} onCrossClick={handleCrossClick} onCircleClick={handleCircleClick}/>
        </>
    )
}

export default TicTacToe