
import java.util.ArrayList;
import basics.Basics;
import classes.Car;

public class Main{
    public static void main(String[] args) {

        String arg = "";

        if (args.length > 0){
            arg = args[0];
        }

        if (arg.equals("basics")){
            Basics basics = new Basics();
        }else if(arg.equals("classes")){
            Car car = new Car("red", "325b23");
            Car car2 = new Car("black", "3b2rer");

            car.xrl8();
            System.out.println(car.getId());

            car2.xrl8();
            System.out.println(car2.getId());
        }else{
            System.out.println("Hello, World!");
        }
        

    }
}