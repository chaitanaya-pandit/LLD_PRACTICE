import java.util.Scanner;

public class exercise {

    public int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n-1) + fibonacci(n-2);
    }

    public int factorial(int n) {
        if (n == 0 || n == 1) return 1;
        return n * factorial(n-1);
    }

    public int largestElement(int[] arr) {
        int max = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
        }
        return max;
    }

    public boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = sc.nextInt();

        exercise obj = new exercise();
        System.out.println("Fibonacci of " + n + " is: " + obj.fibonacci(n));
        System.out.println("Factorial of " + n + " is: " + obj.factorial(n));
        System.out.println("Largest in [1,2,3,4,5] is: " + obj.largestElement(new int[]{1,2,3,4,5}));
        System.out.println("Is 5 prime? " + obj.isPrime(5));
        System.out.println("Is " + n + " prime? " + obj.isPrime(n));

        sc.close();
    }
}