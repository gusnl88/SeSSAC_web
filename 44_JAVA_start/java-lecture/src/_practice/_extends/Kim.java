package _practice._extends;

public class Kim extends Student {
    public Kim(String name, String school, int age, int studentId) {
        super(name, school, age, studentId);
    }

    @Override
    public void todo() {
        System.out.println("점심은 김가네 김밥");
    }
}
