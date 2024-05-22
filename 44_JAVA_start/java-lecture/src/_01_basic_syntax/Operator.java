package _01_basic_syntax;

public class Operator {
    public static void main(String[] args) {
        int x,y;
        float a,b;

        //대입 연산자 (=) 사용해서 재할당
        x=11;
        y=3;
        a=11.0f;
        b=3.0f;

        System.out.println("======정수형 연산=======");
        System.out.println("x ="+x);
        System.out.println("y ="+y);
        System.out.println("x + y ="+(x+y));
        System.out.println("x + y ="+(x-y));
        System.out.println("x * y ="+(x*y));
        System.out.println("x / y ="+(x/y));//결과의 몫
        System.out.println("x % y ="+(x%y));//나머지
        System.out.println("x^3 = "+(Math.pow(x,3)));//Math 메서드에서 pow로 3제곱 하겟다.

        System.out.println("======실수형 연산=======");
        System.out.println("a ="+a);
        System.out.println("b ="+b);
        System.out.println("a + b ="+(a+b));
        System.out.println("a + b ="+(a-b));
        System.out.println("a * b ="+(a*b));
        System.out.println("a / b ="+(a/b));//실제 나눗셈의 결과가 나온다
        System.out.println("a % b ="+(a%b));

        x=10;
        System.out.println("증감 연산자");
        System.out.println("++x" + ++x +' '+x);//전위 증가
        System.out.println("x++" + x++ +' '+x);//후위 증가
        System.out.println("--x" + --x +' '+x);
        System.out.println("x--" + x-- +' '+x);

        System.out.println("산술 대입 연산자");
        System.out.println(x);//10;
        System.out.println("x+=5 >>>" + (x += 5));
        System.out.println("x-=5 >>>" + (x -= 5));
        System.out.println("x*=5 >>>" + (x *= 5));
        System.out.println("x/=5 >>>" + (x /= 5));
        System.out.println("x%=5 >>>" + (x %= 5));

        System.out.println("논리 연산자,연산결과: booleadn");
        //     || && !
        boolean j = true;
        boolean k =false;
        boolean l = true;
        System.out.println("j && k=" +(j && k) ); //false
        System.out.println("j && l=" +(j && l) ); //true
        System.out.println("j || k=" +(j || k) ); //true
        System.out.println("!j: ="+(!j)); //false

        //삼항 연산자
        System.out.println("삼항 연산자");
        System.out.println(x > y ? "x가 y보다 크다":"x가 y랑 같거나 작음");


    }
}
