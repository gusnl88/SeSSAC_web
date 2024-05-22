package _practice;

import java.util.Scanner;

public class Practice_Rectangle {
    private int width;
    private int height;

    public int getWidth() {
        return width;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int area(){
        return this.width * this.height;
    }

    public Practice_Rectangle(int width) {
        this.width = width;
        area();
    }

//    public static void main(String[] args) {
//        Scanner sc=new Scanner(System.in);
//        System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해 주세요");
//        Practice_Rectangle r= new Practice_Rectangle(sc.nextInt());
//        System.out.println(r.area(r.width,r.height));
//    }
}
