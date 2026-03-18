from models import Animal, Dog, Cat

def main():
    generic_animal = Animal("Generic", 5, "Unknown")
    dog = Dog("Buddy", 3, "Golden Retriever")
    cat = Cat("Whiskers", 2, "Black")
    animals = [generic_animal, dog, cat]


    for animal in animals:
        print(animal.info())
        print(f"Sound: {animal.speak()}")
        if isinstance(animal, Dog):
            print(animal.fetch())
        elif isinstance(animal, Cat):
            print(animal.climb())
        print()

if __name__ == "__main__":
    main()