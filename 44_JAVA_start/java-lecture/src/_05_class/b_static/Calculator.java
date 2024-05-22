package _05_class.b_static;

/*
 * 정적(static) 멤버
 * -인스턴트를 생성한 필요 없이 바로 접근할 수 있다
 * -정적 메소드와 정적 블록은 객체가 없어도 실행 가능하므로,내부에 인스턴스 필드나 메소드 사용 불가
 * -this 사용 불가능*/
public class Calculator {
    static double pi = 3.141592;

    static int plus(int x, int y) {
        return x + y;
    }

    static int minus(int x, int y) {
        return x - y;
    }

    static double circumference(int r) {
        return 2 * r * pi;
    }

    public static void main(String[] args) {
        int num1=10;
        int num2=5;
        double circleArea= num1 * num1 *Calculator.pi;

        int plusResult=plus(num1,num2);
        int minusResult=minus(num1,num2);
        double lengthCircleResult=circumference(num1);

        System.out.println("원의 넓이:"+circleArea);
        System.out.println("원의 둘레:"+lengthCircleResult);
        System.out.println("덧셈 결과:"+plusResult);
        System.out.println("뺼셈 결과:"+minusResult);
    }
}
