
import java.util.ArrayList;
import basics.Basics;

public class Main{
    public static void main(String[] args) {

        String arg = "";

        if (args.length > 0){
            arg = args[0];
        }

        if (arg.equals("basics")){
            Basics basics = new Basics();
        }  
        

    }
}