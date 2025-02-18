package basics;

import java.util.ArrayList;

public class Basics {
    
    public Basics(){
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

        //ArrayList
        ArrayList<String> names = new ArrayList<>();
        names.add("Alexandre");
        names.add("Robson");
        names.add("Douglas");

        System.out.println(names.get(0));

        names.remove(0);

        System.out.println(names.get(0));

        //loops
        for(int i = 0; i < fixedIntColection.length; i++){
            System.out.println(fixedIntColection[i]);
        }

        for(String name : names){
            System.out.println(name);
        }

        int counter = 0;
        while(counter < 3){
            System.out.println("while");
            counter++;
        }

        do{
            System.out.println("do");
            counter--;
        }while(counter > 0);

        //casting
        int castingInt = (int) doubleVar;
        double castingDouble = (double) intVar;

        String numberString = "0";
        int stringToInt = Integer.parseInt(numberString);
        String intToString = String.valueOf(intVar);
    }
}
