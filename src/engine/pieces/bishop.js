
import Piece from './piece';
import Square from '../square';
import Player from '../player';
import Board from '../board';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    // getPossibleMovesForward(location) {
    //     const currentRow = location.row;
    //     //cont currentCol = location.col;
    //     let moves = [];
    //     const col = location.co + 1;
    //     for (let start = currentRow + 1; start < 8; start){
    //         if (col < 8) {
    //             moves.push(Square.at(start, col));
    //             col++;
    //         }
    //     }
    // }
    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        let col = location.col;
        let row = location.row;
        // bishop going up-right 

        for (let i = location.row + 1; i <= 7; i++) {
            col++;
            if (col <= 7) {

                const nextPlayer = board.getPiece(Square.at(i, col));

                if (nextPlayer === undefined) {
                    moves.push(Square.at(i, col));
                }
                else if (nextPlayer.player !== this.player && nextPlayer.constructor.name !== 'King') {
                    moves.push(Square.at(i, col));
                    break;
                }
                else if (nextPlayer.player === this.player) {
                    break;
                }

            }
        }

        // bishop going up-left
        //3, 2=> 4, 1=> 5, 0       2,6 => 3,5 => 4,4 => 5,3=>6,2=>7,1
        col = location.col;
        for (let i = location.row + 1; i <= 7; i++) {
            col--;
            if (col >= 0) {

                const nextPlayer = board.getPiece(Square.at(i, col))
                let counter = 0;
                //counter++;
                if (nextPlayer === undefined) {
                    moves.push(Square.at(location.row + i, col));
                }
                else if (nextPlayer.player !== this.player && nextPlayer.constructor.name !== 'King') {
                    moves.push(Square.at(location.row + i, col));
                    break;
                }
                else if (nextPlayer.player === this.player) {
                    break;
                }
            }
            //3,5 => 2,6 => 1,7
            //6,1 => 5,2 =>4,3 => 3,4 => 2,5 => 1,6 => 0,7
            // bishop trying move down-right
            
            for (let i = location.col + 1; i <= 7; i++) {
                row--;
                if (row >= 0) {
                    const nextPlayer = board.getPiece(Square.at(row, i))
                    if (nextPlayer === undefined) {
                        moves.push(Square.at(location.row + i, location.col - i));
                    }
                    else if (nextPlayer.player !== this.player && nextPlayer.constructor.name !== 'King') {
                        moves.push(Square.at(location.row + i, location.col - i));
                        break;
                    }
                    else if (nextPlayer.player === this.player) {
                        break;
                    }
                }
            }


        }//5,6  => 4,5 => 3,4 => 2,3 => 1,2 => 0,1
        // bishop trying move down-left
        row = location.row;
        for (let i = location.col - 1; i >= 0; i--) {
            row--;
            if (row >= 0) {
                const nextPlayer = board.getPiece(Square.at(row, i))
                if (nextPlayer === undefined) {
                    moves.push(Square.at(row, i));
                }
                else if (nextPlayer.player !== this.player && nextPlayer.constructor.name !== 'King') {
                    moves.push(Square.at(row, i));
                    break;
                }
                else if (nextPlayer.player === this.player) {
                    break;
                }
            }
        }


        return moves;
    }
}
