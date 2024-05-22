package _practice._extends;

public class Circle extends Shape{
    private double radius;
    public Circle(String color, double radius) {
        super(color, "원");
        this.radius=radius;
    }

    public double getRadius() {
        return radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius *radius;
    }

    @Override
    public void printShapeInfo() {
        System.out.println("=== Circle 도형의 정보 ===");
        System.out.println("도형의 색상: "+getColor());
        System.out.println("도형의 넓이: "+calculateArea());
    }
}
