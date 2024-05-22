package _practice;

import java.util.Scanner;

public class Practice_01 {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("이름을 입력하세요");
        String name=sc.next();
        System.out.println("나이를 입력하세요");
        int age=sc.nextInt();
        System.out.println("안녕하세요!"+name+"님("+age+")");
    }
}
