class Animal:

    def __init__(self, name, age):
        self.name = name
        self.age = age
    def speak(self):
        return "Some sound"
    def __str__(self):
        return f"Animal(Name: {self.name}, is, Age: {self.age}, years old)"
    

class Dog(Animal):
    
        def __init__(self, name, age):
            super().__init__(name, age)
            
        # def speak(self):
        #     return "Woof!"
        def __str__(self):
            return f" {self.name} {self.age} years old"
class Cat(Animal):
    
        def __init__(self, name, age):
            super().__init__(name, age)
           
        def speak(self):
            return "Meow!"
        def __str__(self):
            return f" {self.name} {self.age} years old"

def main():
    dog = Dog("Bublick", 1)
    dog.speak()
    cat = Cat("Magripa", 5)
    animals = [dog, cat]

    for animal in animals:
        print(animal)  
        print(animal.speak())  


if __name__ == "__main__":
    main()