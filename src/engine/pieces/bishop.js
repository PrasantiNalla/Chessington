
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
        col = location.col;
        for (let i = location.row + 1; i <= 7; i++) {
            col--;
            if (col >= 0) {
                const nextPlayer = board.getPiece(Square.at(i, col))
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
        // bishop trying move down-right
        for (let i = location.col + 1; i <= 7; i++) {
            row--;
            if (row >= 0) {
                // console.log("i'm updating" + row, i)
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
