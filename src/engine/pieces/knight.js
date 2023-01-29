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
        let cuurentPlayer = this.player;
        function getKnightMoves(row, col) {
            if (row <= 7 && row >= 0 && col >= 0 && col <= 7) {
                const nextSquare = board.getPiece(Square.at(row, col));
                if (nextSquare === undefined) {
                    moves.push(Square.at(row, col));
                }
                else if (nextSquare.player !== cuurentPlayer && nextSquare.constructor.name !== 'King') {
                    moves.push(Square.at(row, col));
                }
            }
        }
        // knight jumps up-right (4,4) => (6,5)
        getKnightMoves(location.row + 2, location.col + 1);
        //knight jumps up-right corner (4,4) => (5,6)
        getKnightMoves(location.row + 1, location.col + 2);
        // // knight jumps up-left (4,4) => (6,3)
        getKnightMoves(location.row + 2, location.col - 1);
        // // knight jumps up-left corner (4,4) => (5,2)
        getKnightMoves(location.row + 1, location.col - 2);
        // knight jumps down-right (4,4) => (2,5)
        getKnightMoves(location.row - 2, location.col + 1);
        // knight jumps down-right corner (4,4) => (3,6)
        getKnightMoves(location.row - 1, location.col + 2);
        // knight jumps down -left (4,4) => (2,3)
        getKnightMoves(location.row - 2, location.col - 1);
        // knight jumps down-right corner (4,4) => (3,2)
        getKnightMoves(location.row - 1, location.col - 2);
        return moves;
    }
}
