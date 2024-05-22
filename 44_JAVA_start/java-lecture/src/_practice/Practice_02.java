package _practice;

import java.util.Scanner;
import java.util.Scanner;

public class Practice_02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("나이를 입력하세요");
        int age = sc.nextInt();

        if (age <= 7) {
            System.out.println("유아");
        } else if (age <= 13) {
            System.out.println("중학생");
        } else if (age <= 19) {
            System.out.println("고등학생");
        } else {
            System.out.println("성인");
        }
    }
}
