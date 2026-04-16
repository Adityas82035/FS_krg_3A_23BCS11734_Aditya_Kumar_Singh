import java.util.*;

public class second{

    public static int bagOfTokensScore(int[] tokens, int power) {
        Arrays.sort(tokens);

        int i = 0;
        int j = tokens.length - 1;
        int score = 0;
        int maxScore = 0;

        while (i <= j) {
            if (power >= tokens[i]) {
                power -= tokens[i];
                score++;
                i++;
                maxScore = Math.max(maxScore, score);
            } 
            else if (score > 0) {
                power += tokens[j];
                score--;
                j--;
            } 
            else {
                break;
            }
        }

        return maxScore;
    }

    public static void main(String[] args) {
        int[] tokens = {100, 200, 300, 400};
        int power = 200;

        System.out.println("Maximum Score: " + bagOfTokensScore(tokens, power));
    }
}