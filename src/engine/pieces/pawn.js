import Player from '../player';
import Square from '../square';
import Piece from './piece';
//import Board from '../board';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []

        if (this.player === Player.WHITE) {
            const block1WPlayer = board.getPiece(Square.at(location.row + 1, location.col))
            const block2WPlayer = board.getPiece(Square.at(location.row + 2, location.col))
            if (!block1WPlayer) {
                if ((location.row === 1) && !block2WPlayer) {

                    moves.push(Square.at(location.row + 2, location.col))
                }

                moves.push(Square.at(location.row + 1, location.col))
            }
        } else {
            const block1BPlayer = board.getPiece(Square.at(location.row - 1, location.col))
            const block2BPlayer = board.getPiece(Square.at(location.row - 2, location.col))
            if (!block1BPlayer) {
                if ((location.row === 6) && !block2BPlayer) {
                    moves.push(Square.at(location.row - 2, location.col))
                }
                moves.push(Square.at(location.row - 1, location.col))
            }
        }
        return moves

    }
}
