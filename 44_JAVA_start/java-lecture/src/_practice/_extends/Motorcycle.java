package _practice._extends;

public class Motorcycle extends Vehicle{
    public String licenseType;
    public Motorcycle(String licenseType) {
        this.brand="Harley-Davidson";
        this.model="Sportster";
        this.year=2021;
        this.licenseType=licenseType;
    }

    @Override
    public void info() {
        System.out.println("=== Motorcycle 정보===");
        System.out.println("Motorcycle {brand='"+this.brand+", model='"+this.model+"', "+"year="+this.year+", licenseType='"+this.licenseType+"'}");
    }

    @Override
    public void start() {
        System.out.println("울림통을 합니다.");

    }
}
