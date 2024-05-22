package _01_basic_syntax;

//ctrl + shift f10
public class Casting {
    public static void main(String[] args) {
//        1.묵시적 형변환
        /*
         * 더 작은타입에서 터 큰타입으로 "자동 변환"
         * */
        int smallNumber = 10;
        System.out.println("small number(int)" + smallNumber);
        double bigNumber = smallNumber;
        System.out.println("bigNumber(double)" + bigNumber);
        //2.암시적 형변환
        /*더 큰타입에서 더 작은 타입으로 강제 형변환
         * */
        double anotherBigNumber = 20.8;
        int anotherSmallNumber = (int) anotherBigNumber;
        System.out.println("anotherBigNumber" + anotherBigNumber);
        System.out.println("anotherSmallNumber" + anotherSmallNumber);

        int largeNumber = 1000;
        byte smallByte = (byte) largeNumber;

        System.out.println("largeNumber" + largeNumber);
        System.out.println("smallByte" + smallByte);

    }
}
