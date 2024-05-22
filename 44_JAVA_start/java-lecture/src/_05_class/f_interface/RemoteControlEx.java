package _05_class.f_interface;

public class RemoteControlEx {
    public static void main(String[] args) {
        RemoteControl rc;
        rc=null;

        rc=new Television();//Remotecontrol = new Television();
        rc.turnOn();
        rc.turnOff();
        rc.setVolume(5);


    }
}
