import Piece from './piece';
import Square from '../square';
import Player from '../player';
import Board from '../board';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        let currentPlayer = this.player;
        function getNextMove(row, col) {
            const nextPlayer = board.getPiece(Square.at(row, col))
            if (nextPlayer === undefined) {
                moves.push(Square.at(row, col));
            }
            else if (nextPlayer.player !== currentPlayer && nextPlayer.constructor.name !== 'King') {
                moves.push(Square.at(row, col));
                return false;
            }
            else if (nextPlayer.player === currentPlayer) {
                return false;
            }
            return true;
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

        return moves
    }


}

