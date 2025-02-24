package classes;

public class Car {

    private String id;
    String color;

    public Car(String color, String id){
        this.color = color;
        this.id = id;
    }

    public void xrl8(){
        System.out.println("accelerating the " + this.color + " car");
    }

    public String getId(){
        return this.id;
    }
}
