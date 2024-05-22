package _practice._extends;

public class ShapeEx {
    public static void main(String[] args) {
        Circle circle=new Circle("Red",5);
        circle.printShapeInfo();
        Rectangle rectangle=new Rectangle("Blue",3,8);
        rectangle.printShapeInfo();
    }
}
