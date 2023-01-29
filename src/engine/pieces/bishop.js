
import Piece from './piece';
import Square from '../square';
import Player from '../player';
import Board from '../board';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        let col = location.col;
        let row = location.row;
        let currentPlayer = this.player;

        function canMoveToNextStep(currentRow, currentCol) {
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
        // bishop going up-right
        for (let i = location.row + 1; i <= 7; i++) {
            col++;
            if (col <= 7) {
                if (!canMoveToNextStep(i, col)) {
                    break;
                }
            }
        }
        // bishop going up-left
        col = location.col;
        for (let i = location.row + 1; i <= 7; i++) {
            col--;
            if (col >= 0) {
                if (!canMoveToNextStep(i, col)) {
                    break;
                }
            }
        }
        // bishop trying move down-right
        for (let i = location.col + 1; i <= 7; i++) {
            row--;
            if (row >= 0) {
                if (!canMoveToNextStep(row, i)) {
                    break;
                }

            }
        }
        // bishop trying move down-left
        row = location.row;
        for (let i = location.col - 1; i >= 0; i--) {
            row--;
            if (row >= 0) {
                if (!canMoveToNextStep(row, i)) {
                    break;
                }
            }
        }
        return moves;
    }
}
