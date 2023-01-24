import Piece from './piece';
import Square from '../square';
import Player from '../player';
import Board from '../board';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        let row = location.row;
        let col = location.col;

        const nextPlayerSameRow1 = board.getPiece(Square.at(row, col + 1));
        if (col + 1 <= 7) {
            if (nextPlayerSameRow1 === undefined) {
                moves.push(Square.at(row, col + 1));
            } else if (nextPlayerSameRow1.player !== this.player && nextPlayerSameRow1.constructor.name !== 'King') {
                moves.push(Square.at(row, col + 1));
            }
        }
        if ((col - 1) >= 0) {
            const nextPlayerSameRow2 = board.getPiece(Square.at(row, col - 1));
            if (nextPlayerSameRow2 === undefined) {
                moves.push(Square.at(row, col - 1));
            } else if (nextPlayerSameRow2.player !== this.player && nextPlayerSameRow2.constructor.name !== 'King') {
                moves.push(Square.at(row, col - 1));
            }
        }
        if (row + 1 <= 7 && col - 1 >= 0) {
            const nextPlayerFrontRow1 = board.getPiece(Square.at(row + 1, col - 1));
            if (nextPlayerFrontRow1 === undefined) {
                moves.push(Square.at(row + 1, col - 1));
            } else if (nextPlayerFrontRow1.player !== this.player && nextPlayerFrontRow1.constructor.name !== 'King') {
                moves.push(Square.at(row + 1, col - 1));
            }
        }
        if (row + 1 <= 7 && col + 1 <= 7) {
            const nextPlayerFrontRow2 = board.getPiece(Square.at(row + 1, col + 1));
            if (nextPlayerFrontRow2 === undefined) {

                moves.push(Square.at(row + 1, col + 1));
            } else if (nextPlayerFrontRow2.player !== this.player && nextPlayerFrontRow2.constructor.name !== 'King') {
                moves.push(Square.at(row + 1, col + 1));
            }
        }
        if (row + 1 <= 7) {
            const nextPlayerFrontRow3 = board.getPiece(Square.at(row + 1, col));
            if (nextPlayerFrontRow3 === undefined) {

                moves.push(Square.at(row + 1, col));
            } else if (nextPlayerFrontRow3.player !== this.player && nextPlayerFrontRow3.constructor.name !== 'King') {
                moves.push(Square.at(row + 1, col));
            }
        }
        if (row - 1 >= 0 && col - 1 >= 0) {
            const nextPlayerBackRow1 = board.getPiece(Square.at(row - 1, col - 1));
            if (nextPlayerBackRow1 === undefined) {
                moves.push(Square.at(row - 1, col - 1));
            } else if (nextPlayerBackRow1.player !== this.player && nextPlayerBackRow1.constructor.name !== 'King') {
                moves.push(Square.at(row - 1, col - 1));
            }
        }
        if (row - 1 >= 0 && col + 1 <= 7) {
            const nextPlayerBackRow2 = board.getPiece(Square.at(row - 1, col + 1));
            if (nextPlayerBackRow2 === undefined || nextPlayerBackRow2.player !== this.player) {
                moves.push(Square.at(row - 1, col + 1));
            } else if (nextPlayerBackRow2.player !== this.player && nextPlayerBackRow2.constructor.name !== 'King') {
                moves.push(Square.at(row - 1, col + 1));
            }
        }
        if (row - 1 >= 0) {
            const nextPlayerBackRow3 = board.getPiece(Square.at(row - 1, col));
            if (nextPlayerBackRow3 === undefined || nextPlayerBackRow3.player !== this.player) {

                moves.push(Square.at(row - 1, col));
            } else if (nextPlayerBackRow3.player !== this.player && nextPlayerBackRow3.constructor.name !== 'King') {
                moves.push(Square.at(row - 1, col));
            }
        }
        return moves;
    }
}
