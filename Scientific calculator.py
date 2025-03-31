import math

def calculator():
    print("Scientific Calculator")
    print("Select operation:")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    print("5. Square Root")
    print("6. Sine")
    print("7. Cosine")
    print("8. Logarithm")

    choice = input("Enter choice (1/2/3/4/5/6/7/8): ")

    if choice in ['1', '2', '3', '4']:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

    if choice == '1':
        print(f"Result: {num1 + num2}")
    elif choice == '2':
        print(f"Result: {num1 - num2}")
    elif choice == '3':
        print(f"Result: {num1 * num2}")
    elif choice == '4':
        if num2 != 0:
            print(f"Result: {num1 / num2}")
        else:
            print("Error: Division by 0")
    elif choice == '5':
        num = float(input("Enter number for square root: "))
        print(f"Square Root: {math.sqrt(num)}")
    elif choice == '6':
        num = float(input("Enter angle in radians for sine: "))
        print(f"Sine: {math.sin(num)}")
    elif choice == '7':
        num = float(input("Enter angle in radians for cosine: "))
        print(f"Cosine: {math.cos(num)}")
    elif choice == '8':
        num = float(input("Enter number for logarithm: "))
        print(f"Logarithm: {math.log(num)}")
    else:
        print("Invalid input!")

if __name__ == "__main__":
    calculator()
