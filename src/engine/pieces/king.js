import Piece from './piece';
import Square from '../square';


export default class King extends Piece {
    constructor(player) {
        super(player);
    }
    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        let row = location.row;
        let col = location.col;
        let currentPlayer = this.player;
        function getKingMoves(row, col) {
            if (row <= 7 && row >= 0 && col <= 7 && col >= 0) {
                const nextSquare = board.getPiece(Square.at(row, col));
                if (nextSquare === undefined) {
                    moves.push(Square.at(row, col));
                } else if (nextSquare.player !== currentPlayer && nextSquare.constructor.name !== 'King') {
                    moves.push(Square.at(row, col));
                }
            }
        }
        getKingMoves(row, col + 1);
        getKingMoves(row, col - 1);
        getKingMoves(row + 1, col - 1);
        getKingMoves(row + 1, col + 1);
        getKingMoves(row + 1, col);
        getKingMoves(row - 1, col - 1);
        getKingMoves(row - 1, col + 1);
        getKingMoves(row - 1, col);

        return moves;
    }
}
