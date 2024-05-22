package _practice;

import java.util.Scanner;

public class Practice_03 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("이름을 입력하세요");
        String name=sc.next();

        System.out.println((name.equals("홍길동")?"남자":name.equals("성춘향")?"여자":"모르는성별인데"));
    }
}
