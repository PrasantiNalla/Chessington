import Player from '../player';
import Square from '../square';
import King from './king';
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
            if (location.row === 7) {
                return moves;
            }
            const block1WPlayer = board.getPiece(Square.at(location.row + 1, location.col))
            const block2WPlayer = board.getPiece(Square.at(location.row + 2, location.col))
            const diagonalWLeftPlayer = board.getPiece(Square.at(location.row + 1, location.col - 1));
            const diagonalWRightPlayer = board.getPiece(Square.at(location.row + 1, location.col + 1));
            //console.log("opponent player is " + diagonalWLeftPlayer);
            if (diagonalWLeftPlayer && diagonalWLeftPlayer.player === Player.BLACK && diagonalWLeftPlayer.constructor.name !== 'King') {
                moves.push(Square.at(location.row + 1, location.col - 1))
            }
            else if (diagonalWRightPlayer && diagonalWRightPlayer.player === Player.BLACK && diagonalWRightPlayer.constructor.name !== 'King') {
                moves.push(Square.at(location.row + 1, location.col + 1))
            }
            if (!block1WPlayer) {
                if ((location.row === 1) && !block2WPlayer) {
                    moves.push(Square.at(location.row + 2, location.col))
                }

            } moves.push(Square.at(location.row + 1, location.col))
        }
        else {
            console.log(this.player)
            if (location.row === 0) {
                return moves;
            }
            const block1BPlayer = board.getPiece(Square.at(location.row - 1, location.col))
            const block2BPlayer = board.getPiece(Square.at(location.row - 2, location.col))
            const diagonalBLeftPlayer = board.getPiece(Square.at(location.row - 1, location.col + 1));
            const diagonalBRightPlayer = board.getPiece(Square.at(location.row - 1, location.col - 1));

            if (diagonalBLeftPlayer && diagonalBLeftPlayer.player === Player.WHITE && diagonalBLeftPlayer.constructor.name !== 'King') {
                moves.push(Square.at(location.row - 1, location.col + 1))
            }
            else if (diagonalBRightPlayer && diagonalBRightPlayer.player === Player.WHITE && diagonalBRightPlayer.constructor.name !== 'King') {
                moves.push(Square.at(location.row - 1, location.col - 1))
            }
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
