package _practice._extends;

public class Car extends Vehicle{
    public boolean convertible;
    public Car(boolean convertible) {
        this.brand="Toyota";
        this.model="Camry";
        this.year=2023;
        this.convertible=convertible;
    }

    @Override
    public void start() {
        System.out.println("주차했습니다.");

    }

    @Override
    public void info() {
        System.out.println("=== Car 정보===");
        System.out.println("car {brand='"+this.brand+", model='"+this.model+"', "+"year="+this.year+", convertible="+this.convertible+"}");
    }
}
