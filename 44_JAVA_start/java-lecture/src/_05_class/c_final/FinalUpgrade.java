package _05_class.c_final;

public class FinalUpgrade {
    public static void main(String[] args) {
        FinalMethod fm=new FinalMethod();
        fm.showMessage();
        SubClass sc=new SubClass();
        sc.showMessage();
    }
}

class FinalMethod{
    final void showMessage(){
        System.out.println("final 이 붙은 이 메소드는 오버라이딩 할 수 없다.");
    }
}

class SubClass extends FinalMethod{
//    메소드 재정의
//    void showMessage(){}//final 키워드가 붙은 메소드의 경우 재정의 (오버라이딩) 불가
}

final class FinalClass{

}
//클래스에 final 이 붙은 경우에는 자식 클래스에게 상속 불가능
//class SubClass2 extends FinalClass{}