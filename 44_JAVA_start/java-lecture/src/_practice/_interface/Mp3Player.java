package _practice._interface;

public class Mp3Player implements Music{
    @Override
    public void play() {
        System.out.println("=== MP3 Player ===");
        System.out.println("MP3 플레이어에서 '아이유 블루밍' 음악을 재생합니다.");
    }

    @Override
    public void stop() {
        System.out.println("MP3 플레이어에서 '아이유 블루밍' 음악을 정지합니다.");

    }
}
