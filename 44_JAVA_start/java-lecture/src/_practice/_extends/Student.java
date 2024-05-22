package _practice._extends;

abstract class Student {
    private   String name;
    private  String school;
    private  int age;
    private  int studentId;

    public Student(String name, String school, int age, int studentId) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.studentId = studentId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }
    public abstract void todo();
}
