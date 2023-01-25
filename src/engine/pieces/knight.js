import Piece from './piece';
import Square from '../square';
import Player from '../player';
import Board from '../board';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        let col = location.col;
        let row = location.row;

        // knight jumps up-right (4,4) => (6,5)
        if (row + 2 <= 7) {

            const nextUpRightSquare = board.getPiece(Square.at(row + 2, col + 1));
            if (nextUpRightSquare === undefined) {
                moves.push(Square.at(row + 2, col + 1));
            }
            else if (nextUpRightSquare.player !== this.player && nextUpRightSquare.constructor.name !== 'King') {
                moves.push(Square.at(row + 2, col + 1));
            }
        }

        //knight jumps up-right corner (4,4) => (5,6)
        if (col + 2 <= 7) {

            const nextUpRightSquare = board.getPiece(Square.at(row + 1, col + 2));
            if (nextUpRightSquare === undefined) {
                moves.push(Square.at(row + 1, col + 2));
            }
            else if (nextUpRightSquare.player !== this.player && nextUpRightSquare.constructor.name !== 'King') {
                moves.push(Square.at(row + 1, col + 2));
            }
        }
        // knight jumps up-left (4,4) => (6,3)
        if (row - 2 >= 0) {
            console.log("Hello2" + col + row)
            const nextUpLeftSquare = board.getPiece(Square.at(row + 2, col - 1));
            if (nextUpLeftSquare === undefined) {
                moves.push(Square.at(row + 2, col - 1));
            }
            else if (nextUpLeftSquare.player !== this.player && nextUpLeftSquare.constructor.name !== 'King') {
                moves.push(Square.at(row + 2, col - 1));
            }
        }
        // knight jumps up-left corner (4,4) => (5,2)
        if (col - 2 >= 0) {

            const nextUpRightSquare = board.getPiece(Square.at(row + 1, col - 2));
            if (nextUpRightSquare === undefined) {
                moves.push(Square.at(row + 1, col - 2));
            }
            else if (nextUpRightSquare.player !== this.player && nextUpRightSquare.constructor.name !== 'King') {
                moves.push(Square.at(row + 1, col - 2));
            }
        }
        // knight jumps down-right (4,4) => (2,5)
        // knight jumps down-right corner (4,4) => (3,6)
        // knight jumps down -left (4,4) => (2,3)
        // knight jumps down-right corner (4,4) => (3,2)
        return moves;
    }
}
