package _practice._extends;

public class Bus extends Vehicle{
    public int passengerCapacity;
    public Bus(int passengerCapacity){
        this.brand="Hyundai";
        this.model="City Bus";
        this.year=2022;
        this.passengerCapacity=passengerCapacity;
    }
    @Override
    public void start(){
        System.out.println("승객을 운송합니다.");
    }

    @Override
    public void info() {
        System.out.println("=== Bus 정보===");
        System.out.println("Bus {brand='"+this.brand+", model='"+this.model+"', "+"year="+this.year+", passengerCapacity="+this.passengerCapacity+"}");
    }
}
