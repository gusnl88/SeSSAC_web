package _practice._interface;

public class MusicEx {
    public static void main(String[] args) {
        Mp3Player mp=new Mp3Player();
        mp.play();
        mp.stop();
        CdPlayer cd=new CdPlayer();
        cd.play();
        cd.stop();
    }
}
