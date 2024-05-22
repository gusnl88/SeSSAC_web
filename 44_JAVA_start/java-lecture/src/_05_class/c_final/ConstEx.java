package _05_class.c_final;

public class ConstEx {
    public static void main(String[] args) {
        System.out.println(Const.MAX_VALUE);
        System.out.println(Const.GREETING);
//        Const.MAX_VALUE=200;//final이기 떄문에 재할당 x
        System.out.println("MIN_VALUE: "+Const.MIN_VALUE);

        Const.MIN_VALUE=100;
        System.out.println("NEW MIN_VALUE: "+Const.MIN_VALUE);

//        final 변수 접근
//        System.out.println(Const.name);// static 이 아니기 때문에 인스턴스 생성 하고 접근
        Const c1=new Const();
        System.out.println(c1.name);
    }
}
