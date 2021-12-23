package com.skarp.prio;

public class fib {
    public static void main(String[] args){
        long startTime = System.nanoTime();
        fib(30);
        long endTime = System.nanoTime();
        double duration = ((double)(endTime - startTime)/1000000000);
        System.out.println(duration);
    }
    private static int fib(int n){
        if(n == 0){
            return 0;
        }else if(n == 1){
            return 1;
        }else{
            return (fib(n-1)+fib(n-2));
        }
    }
}


