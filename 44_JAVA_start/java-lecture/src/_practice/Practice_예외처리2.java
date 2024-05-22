package _practice;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

public class Practice_예외처리2 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        try{
            int sum=0;
            System.out.println("배열 크기를 입력하세요");
            int n=sc.nextInt();
            int[] arr=new int[n];
            for(int i=0;i<arr.length;i++){
                System.out.println("요소"+(i+1)+" 값을 입력하세요");
                arr[i]=sc.nextInt();
                sum +=arr[i];
            }
            double avg=(double) sum/arr.length;
            System.out.printf("배열 요소 평균 값은: %.2f", avg);
        }catch (InputMismatchException e){
            System.out.println("잘못되었습니다."+e.getMessage());
            System.out.println("잘못되었습니다."+e.toString());
        }
    }
}
