package _practice._extends;

public class Rectangle extends Shape{
    private double width;
    private double heigth;

    public Rectangle(String color, double width,double heigth) {
        super(color, "사각");
        this.width=width;
        this.heigth=heigth;
    }

    public double getWidth() {
        return width;
    }

    public double getHeigth() {
        return heigth;
    }

    @Override
    public double calculateArea() {
        return width*heigth;
    }

    @Override
    public void printShapeInfo() {
        System.out.println("=== Rectangle 도형의 정보===");
        System.out.println("도형의 색상: "+getColor());
        System.out.println("도형의 넓이: "+calculateArea());
    }
}
