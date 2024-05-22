package _practice;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Practice_RectangleEx {
    public static void main(String[] args) {
        ArrayList<Practice_Rectangle> rectangles = new ArrayList<>();

        Scanner sc=new Scanner(System.in);
        int width;
        int height;
        while (true) {
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해 주세요 (종료하려면 0 0 입력):");
            try {
                width = sc.nextInt();
                height = sc.nextInt();
                if (width == 0 && height == 0) break;

                Practice_Rectangle rectangle = new Practice_Rectangle(width);
                rectangle.setHeight(height);
                rectangles.add(rectangle);
            } catch (Exception e) {
                System.out.println("잘못된 입력입니다. 정수를 입력하세요.");
                sc.next(); // 잘못된 입력 제거
            }
        }

        for(int i=0;i<rectangles.size();i++){
            System.out.println("가로 길이는 :"+rectangles.get(i).getWidth());
            System.out.println("세로 길이는 :"+rectangles.get(i).getHeight());
            System.out.println("넓이는 :"+rectangles.get(i).area());
            System.out.println("-----------------------------------------");
        }
        System.out.println("Rectangle 인스턴스의 개수는 :"+rectangles.size());
    }
}
