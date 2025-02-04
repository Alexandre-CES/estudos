
import java.util.ArrayList;

public class Main{
    public static void main(String[] args) {

        System.out.println("Hello, World!");

        //integers
        byte byteVar = -128;
        short shortVar = 32767;
        int intVar = 2147483647;
        long longVar = 999999999999999999L;
        
        //decimals
        float floatVar = 1.1f;
        double doubleVar = 1.9999999999999999;

        //string && char
        String StringVar = "string";
        char charVar = 's';

        //boolean
        boolean booleanVar = true;

        //conditionals
        if(booleanVar){
            System.out.println("if");
        }else if(StringVar == "string"){
            System.out.println("else if");
        }else{
            System.out.println("else");
        }

        //vector
        int[] fixedIntColection = {1,2,3,4,5};
        fixedIntColection[0] = 3;
        int[] numbers = new int[3];

        System.out.println(fixedIntColection[0]);
        System.out.println(fixedIntColection.length);

        ArrayList<String> names = new ArrayList<>();
        names.add("Alexandre");
        names.add("Robson");

        System.out.println(names);
    }
}