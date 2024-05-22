package _05_class.f_interface;

public class Television implements RemoteControl{
    private int volume;
    @Override
    public void turnOn() {
        System.out.println("Tv를 켭니다");
    }

    @Override
    public void turnOff() {
        System.out.println("Tv를 끕니다.");

    }

    @Override
    public void setVolume(int volume) {
        System.out.println("Tv의 현재 볼륨:"+this.volume);

    }
}
