
public class Solution {

    int heigth;
    int width;
    String word;
    char[][] board;

    public boolean exist(char[][] board, String word) {

        this.word = word;
        this.board = board;
        heigth = board.length;
        width = board[0].length;

        for (int r = 0; r < heigth; r++) {
            for (int c = 0; c < width; c++) {
                if (depthFirstSearchForWord(r, c, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    public boolean depthFirstSearchForWord(int r, int c, int index) {

        if (r < 0 || c < 0 || r > heigth || c > width) {
            return false;
        }

        if (board[r][c] == word.charAt(index)) {
            char temp = board[r][c];
            board[r][c] = '\u0000';
            if (index == word.length() - 1) {
                return true;
            }
            if ((r - 1 >= 0 && depthFirstSearchForWord(r - 1, c, index + 1))
                    || (r + 1 < heigth && depthFirstSearchForWord(r + 1, c, index + 1))
                    || (c - 1 >= 0 && depthFirstSearchForWord(r, c - 1, index + 1))
                    || (c + 1 < width && depthFirstSearchForWord(r, c + 1, index + 1))) {
                return true;
            }
            board[r][c] = temp;
        }
        return false;
    }
}
