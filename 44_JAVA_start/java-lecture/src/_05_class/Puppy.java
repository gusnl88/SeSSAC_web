package _05_class;

public class Puppy {
/*
    public Puppy() {

    }*/
    public void printInfo(String name){
        System.out.println("name: "+name);
    }
    public void printInfo(String name,int age){
        System.out.println("name: "+name);
        System.out.println("age: "+age);
    }

    public static void main(String[] args) {
        Puppy p1=new Puppy();
        p1.printInfo("은동이");
        p1.printInfo("은동이",12);
    }
}
