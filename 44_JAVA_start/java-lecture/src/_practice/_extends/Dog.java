package _practice._extends;

public class Dog extends Animal{
    public Dog(String name,int age) {
        this.type="강아지";
        this.name=name;
        this.age=age;
    }

    @Override
    public void makeSound() {
        System.out.println(type+"멍멍");
    }
}
class main{
    public static void main(String[] args) {
        Cat cat=new Cat("톰",5);
        cat.makeSound();
        Dog dog=new Dog("흰둥이",5);
        dog.makeSound();
    }
}