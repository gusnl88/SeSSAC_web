package _practice._extends;

public class StudentEx {
    public static void main(String[] args) {
        Kim kim=new Kim("김철수","ABC 고등학교",17,20220001);
        System.out.println("=== "+kim.getName()+" 학생의 정보 ====");
        System.out.println("학교: "+kim.getSchool());
        System.out.println("나이: "+kim.getAge());
        System.out.println("학번: "+kim.getStudentId());
        kim.todo();
        Beak beak=new Beak("백영희","XYZ 고등학교",18,20220002);
        System.out.println("=== "+beak.getName()+" 학생의 정보 ====");
        System.out.println("학교: "+beak.getSchool());
        System.out.println("나이: "+beak.getAge());
        System.out.println("학번: "+beak.getStudentId());
        beak.todo();
    }
}
