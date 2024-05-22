package _practice._extends;

public class Cat extends Animal{
    public Cat(String name,int age) {
        this.type="고양이";
        this.name=name;
        this.age=age;

    }

    @Override
    public void makeSound() {
        System.out.println(type+"야옹야옹");
    }
}
