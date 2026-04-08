import java.util.Scanner;
public class pattern {
    public void rectangle(int n){

        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                System.err.print("*");
            }
            System.err.println("");
        }

    }

    public void triangle(int n){

        for (int i=1;i<n;i++){
            for(int j=0;j<i;j++){
                System.out.print("*");
            }
            System.out.println("");
        }
    }
    public void inverted_triangle(int n){

        for (int i=1;i<n;i++){
            for(int j=i;j<n;j++){
                System.out.print("*");
            }
            System.out.println("");
        }

    }
    public static void main (String args[]){

        Scanner sc= new Scanner( System.in);
        int n=sc.nextInt();

        pattern patterns= new pattern();
         patterns.inverted_triangle(n);

    }
    
}
