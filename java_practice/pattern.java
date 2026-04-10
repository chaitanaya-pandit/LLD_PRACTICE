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
    
    public void full_triangle(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<n-i+1;j++){
                System.out.print(" ");
            }
            for(int j=0;j<2*i+1;j++){
                System.out.print("*");
            }
            for(int j=0;j<n-i+1;j++){
                System.out.print(" ");
            }
            System.out.println("");
        }

    }
    public void inverted_full_triangle(int n){
        for (int i = 0; i < n; i++) {
            for(int j=0;j<i+1;j++){
                System.out.print(" ");
            }
            for (int j = 0; j < (2*n)-(2*i+1); j++) {
                System.err.print("*");
            }
            for(int j=0;j<i+1;j++){
                System.out.print(" ");
            }
            System.out.println(" ");
            
        }
    }
    public void diamond (int n){
         for(int i=0;i<n;i++){
            for(int j=0;j<n-i;j++){
                System.out.print(" ");
            }
            for(int j=0;j<2*i+1;j++){
                System.out.print("*");
            }
            for(int j=0;j<n-i;j++){
                System.out.print(" ");
            }
            System.out.println("");
        }
        for (int i = 0; i < n; i++) {
            for(int j=0;j<i+1;j++){
                System.out.print(" ");
            }
            for (int j = 0; j < (2*n)-(2*i+1); j++) {
                System.err.print("*");
            }
            for(int j=0;j<i+1;j++){
                System.out.print(" ");
            }
            System.out.println(" ");
            
        }

    }
    
    public void half_diamond(int n){
        for(int i=0;i<n;i++){
            for(int j=0;j<i;j++){
                System.out.print("*");
            }
            System.out.println("");
        }
        for(int i=0;i<n;i++){
            for(int j=0;j<n-i;j++){
                System.out.print("*");
            }
            System.out.println("");
        }
    }
    
    public void triangle01(int n){
        
         for(int i=0;i<n;i++){
            if (i%2==0) {
             for(int j=0;j<i+1;j++){
                if (j%2 == 0){
                    System.out.print("1");
                }else{
                    System.out.print("0");
                }
             } 
            }else{
                for(int j=0;j<i+1;j++){
                  if (j%2 == 0){
                    System.out.print("0");
                  }else{
                    System.out.print("1");
                  }
             }     
            }
            System.out.println("");
        }
     

    }
    
    public void newtriangle(int n){
        
        for(int i=0;i<n;i++){
            int count1=1;
            int count2=1;
            for(int j=0;j<i+1;j++){
                System.out.print(count1++);
            }
            for(int j=0;j<2*n-2;j++){
                System.out.print(" ");
            }
            for(int j=0;j<n-i;j++){
                System.out.print(count2++);
            }
            System.out.println("");
        }
    }

    public void number_triangle(int n){
         int count=1;

        for(int i=0;i<n;i++){
            for(int j=0;j<i+1;j++){
                System.out.print(" "+count++);
            }
            System.out.println("");
        }

    }
    public static void main (String args[]){

        Scanner sc= new Scanner( System.in);
        int n=sc.nextInt();

        pattern patterns= new pattern();
         patterns.newtriangle(n);

    }
    
}
