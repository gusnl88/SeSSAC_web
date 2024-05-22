package _practice._extends;

public class Beak extends Student{
    public Beak(String name, String school, int age, int studentId) {
        super(name, school, age, studentId);
    }

    @Override
    public void todo() {
        System.out.println("점심은 백종원 피자");
    }
}
