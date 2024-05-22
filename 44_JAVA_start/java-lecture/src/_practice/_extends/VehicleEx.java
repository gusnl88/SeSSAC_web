package _practice._extends;

public class VehicleEx {
    public static void main(String[] args) {
        Bus bus=new Bus(30);
        bus.info();
        bus.startUp();
        bus.start();
        bus.startOff();
        Car car=new Car(true);
        car.info();
        car.startUp();
        car.start();
        car.startOff();
        Motorcycle moto=new Motorcycle("A");
        moto.info();
        moto.startUp();
        moto.start();
        moto.startOff();
    }
}
