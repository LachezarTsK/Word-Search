

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    this.heigth = board.length;
    this.width = board[0].length;
    this.word = word;
    this.board = board;

    for (let r = 0; r < this.heigth; r++) {
        for (let c = 0; c < this.width; c++) {
            if (depthFirstSearchForWord(r, c, 0)) {
                return true;
            }
        }
    }
    return false;
};


/**
 * @param {number} r
 * @param {number} c
 * @param {number} index
 * @return {boolean}
 */
function depthFirstSearchForWord(r, c, index) {

    if (r < 0 || c < 0 || r > this.heigth || c > this.width) {
        return false;
    }

    if (this.board[r][c] === this.word.charAt(index)) {
        let temp = this.board[r][c];
        this.board[r][c] = '\u0000';
        if (index === this.word.length - 1) {
            return true;
        }
        if ((r - 1 >= 0 && depthFirstSearchForWord(r - 1, c, index + 1))
                || (r + 1 < this.heigth && depthFirstSearchForWord(r + 1, c, index + 1))
                || (c - 1 >= 0 && depthFirstSearchForWord(r, c - 1, index + 1))
                || (c + 1 < this.width && depthFirstSearchForWord(r, c + 1, index + 1))) {
            return true;
        }
        this.board[r][c] = temp;
    }
    return false;
}
