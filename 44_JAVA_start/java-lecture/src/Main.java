import java.util.Arrays;

public class Main {
    /*
    * 자바는 기본적으로 클래스 단위로 프로그램 작성
    * 클래스의 이름은 첫 문자가 대문자로 시작되는 것이 관례,
    * 클래스의 구성 요소는 {} 안에 위치한다.
    * 소스 파일 저장시 파일명과 클래스명이 반드시 일치해야 합니다
    *
    * */
    // 주석
    // 한줄주석 ://
    // 여러줄 주석:/**/ ctrl+shift+/
    // 문서 주석:/** */
    //shift + f10 :빌드 런
    public static void main(String[] args) {
//        public -접근 제어자
//        static: JVM이 main 함수를 곧바로 실행하도록
//        void: 함수의 리턴타입
        System.out.println("Hello world!");
        System.out.println(args.length);
        System.out.println(Arrays.toString(args));
    }

}