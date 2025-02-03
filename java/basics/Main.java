
public class Main{
    public static void main(String[] args) {

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

        if(booleanVar){
            System.out.println("if");
        }else if(StringVar == "string"){
            System.out.println("else if");
        }else{
            System.out.println("else");
        }

    }
}