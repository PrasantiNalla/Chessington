import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        let col = location.col;
        let row = location.row;
        let currentPlayer = this.player;

        function getNextMove(currentRow, currentCol) {
            const nextPlayer = board.getPiece(Square.at(currentRow, currentCol))
            if (nextPlayer === undefined) {
                moves.push(Square.at(currentRow, currentCol));
            }
            else if (nextPlayer.player !== currentPlayer && nextPlayer.constructor.name !== 'King') {
                moves.push(Square.at(currentRow, currentCol));
                return false;
            }
            else if (nextPlayer.player === currentPlayer) {
                return false;
            }
            return true;
        }
        // Queen going up-right
        for (let i = location.row + 1; i <= 7; i++) {
            col++;
            if (col <= 7) {
                if (!getNextMove(i, col)) {
                    break;
                }
            }
        }
        // Queen going up-left
        col = location.col;
        for (let i = location.row + 1; i <= 7; i++) {
            col--;
            if (col >= 0) {
                if (!getNextMove(i, col)) {
                    break;
                }
            }
        }
        // Queen trying move down-right
        for (let i = location.col + 1; i <= 7; i++) {
            row--;
            if (row >= 0) {
                if (!getNextMove(row, i)) {
                    break;
                }

            }
        }
        // Queen trying move down-left
        row = location.row;
        for (let i = location.col - 1; i >= 0; i--) {
            row--;
            if (row >= 0) {
                if (!getNextMove(row, i)) {
                    break;
                }
            }
        }
        //if rook wants to go forward
        for (let i = location.row + 1; i <= 7; i++) {
            if (!getNextMove(i, location.col)) {
                break;
            }
        }
        // if rook wants to go backwards
        for (let i = location.row - 1; i >= 0; i--) {
            if (!getNextMove(i, location.col)) {
                break;
            }
        }
        // if rook wants to go left
        for (let i = location.col + 1; i <= 7; i++) {
            if (!getNextMove(location.row, i)) {
                break;
            }
        }
        // if rook wants to go right
        for (let i = location.col - 1; i >= 0; i--) {
            if (!getNextMove(location.row, i)) {
                break;
            }
        }
        return moves;
    }
}
