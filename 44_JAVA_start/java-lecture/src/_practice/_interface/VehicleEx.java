package _practice._interface;

public class VehicleEx {
    public static void main(String[] args) {
        Vehicle[] vehicles=new Vehicle[2];
        Car car=new Car();
        car.setName("Tico");
        vehicles[0]=car;

        Airplane airplane=new Airplane();
        airplane.setName("Bong go");
        vehicles[1]=airplane;

        for (Vehicle vehicle:vehicles){
            vehicle.move();
            if(vehicle instanceof Flyable){
                ((Flyable) vehicle).fly();
            }
        }
    }
}
