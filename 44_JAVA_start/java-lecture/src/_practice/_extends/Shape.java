package _practice._extends;

abstract class Shape {
    private String color;
    private  String type;

    public Shape(String color, String type) {
        this.color = color;
        this.type = type;
    }

    public String getColor() {
        return color;
    }

    public String getType() {
        return type;
    }

    public abstract double calculateArea();
    public  abstract  void printShapeInfo();
}
