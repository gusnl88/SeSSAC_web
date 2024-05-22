package _05_class.a_access_modifier.pack6;

public class B {
    public void methodB(){
        A a= new A();
        //같은 패키지 에서는 생성자,필드,메소드 모두에게 접근이 가능 !!!
        a.field1=11;
        a.methodA();
    }
}
