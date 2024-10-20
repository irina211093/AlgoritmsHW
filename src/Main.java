
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Шаг 1: Создаем объект Scanner для получения ввода от пользователя
        Scanner scanner = new Scanner(System.in);

        // Шаг 2: Получаем три целых числа от пользователя
        System.out.print("Введите первое число: ");
        int num1 = scanner.nextInt();

        System.out.print("Введите второе число: ");
        int num2 = scanner.nextInt();

        System.out.print("Введите третье число: ");
        int num3 = scanner.nextInt();

        // Шаг 3: Объявляем переменную sum и складываем три числа
        int sum = num1 + num2 + num3;

        // Шаг 4: Выводим результат суммы
        System.out.println("Сумма чисел: " + sum);
    }
}