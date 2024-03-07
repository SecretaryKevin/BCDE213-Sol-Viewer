/* globals describe beforeEach Controller it expect  Dog */
describe("Question Four and Question Five", () => {
    describe("Dog", () => {
        let dog
        beforeEach(() => {
            dog = new Dog()
        })

        it("should have a .myDogOwner reference", () => {
            expect(
                Object.prototype.hasOwnProperty.call(dog, "myDogOwner")
            ).toBeTruthy()
        })

        it("should have a .name property", () => {
            expect(
                Object.prototype.hasOwnProperty.call(dog, "name")
            ).toBeTruthy()
        })

        it("should have a .breed property", () => {
            expect(
                Object.prototype.hasOwnProperty.call(dog, "breed")
            ).toBeTruthy()
        })

        it("should have a .gender property", () => {
            expect(
                Object.prototype.hasOwnProperty.call(dog, "gender")
            ).toBeTruthy()
        })

        it("should have a .favoriteFood property", () => {
            expect(
                Object.prototype.hasOwnProperty.call(dog, "favoriteFood")
            ).toBeTruthy()
        })
    })

    describe("write a DogOwner.addDog function to add the Dogs", () => {
        let theKennel
        beforeEach(() => {
            theKennel = Controller.setup()
        })

        it("DogOwner BMC should have 1 Dog", () => {
            let theDogOwner = theKennel.findDogOwner("BMC")
            expect(theDogOwner.allMyDogs.length).toBe(1)
        })

        it("DogOwner RTH should have 2 Dogs", () => {
            let theDogOwner = theKennel.findDogOwner("RTH")
            expect(theDogOwner.allMyDogs.length).toBe(2)
        })

        it("DogOwner ACR should have 1 Dog", () => {
            let theDogOwner = theKennel.findDogOwner("ACR")
            expect(theDogOwner.allMyDogs.length).toBe(1)
        })

        it("DogOwner DEL should have 2 Dogs", () => {
            let theDogOwner = theKennel.findDogOwner("DEL")
            expect(theDogOwner.allMyDogs.length).toBe(2)
        })

        it("should correctly set Dog details", () => {
            /*
              DogOwner ID     Name        Breed        Gender      Favorite Food
                BMC          Speedy     Pomeranian        N           Ekanuba
                RTH          Victor      Beagle           M           Chef
                RTH          Killer      Mastiff          N           Purina
                DEL          Ruftero     Poodle           F           Ekanuba
                DEL          Sausage    Dachshund         F           Purina
                ACR          Random      Mastiff          F           Cat
            */
            let aDog, theDogOwner
            theDogOwner = theKennel.findDogOwner("BMC")
            aDog = theDogOwner.sortDogs()
            //   BMC          Speedy     Pomeranian        N           Ekanuba
            aDog = theDogOwner.allMyDogs[0]
            expect(aDog.myDogOwner).toEqual(theDogOwner)
            expect(aDog.name).toBe("Speedy")
            expect(aDog.breed).toBe("Pomeranian")
            expect(aDog.gender).toBe("N")
            expect(aDog.favoriteFood).toBe("Ekanuba")

            theDogOwner = theKennel.findDogOwner("RTH")
            aDog = theDogOwner.sortDogs()
            // RTH          Killer      Mastiff          N           Purina
            aDog = theDogOwner.allMyDogs[0]
            expect(aDog.myDogOwner).toEqual(theDogOwner)
            expect(aDog.name).toBe("Killer")
            expect(aDog.breed).toBe("Mastiff")
            expect(aDog.gender).toBe("N")
            expect(aDog.favoriteFood).toBe("Purina")

            // RTH          Victor      Beagle           M           Chef
            aDog = theDogOwner.allMyDogs[1]
            expect(aDog.myDogOwner).toEqual(theDogOwner)
            expect(aDog.name).toBe("Victor")
            expect(aDog.breed).toBe("Beagle")
            expect(aDog.gender).toBe("M")
            expect(aDog.favoriteFood).toBe("Chef")

            theDogOwner = theKennel.findDogOwner("DEL")
            aDog = theDogOwner.sortDogs()
            // DEL          Ruftero     Poodle           F           Ekanuba
            aDog = theDogOwner.allMyDogs[0]
            expect(aDog.myDogOwner).toEqual(theDogOwner)
            expect(aDog.name).toBe("Ruftero")
            expect(aDog.breed).toBe("Poodle")
            expect(aDog.gender).toBe("F")
            expect(aDog.favoriteFood).toBe("Ekanuba")

            // DEL          Sausage    Dachshund         F           Purina
            aDog = theDogOwner.allMyDogs[1]
            expect(aDog.myDogOwner).toEqual(theDogOwner)
            expect(aDog.name).toBe("Sausage")
            expect(aDog.breed).toBe("Dachshund")
            expect(aDog.gender).toBe("F")
            expect(aDog.favoriteFood).toBe("Purina")

            theDogOwner = theKennel.findDogOwner("ACR")
            aDog = theDogOwner.sortDogs()
            // ACR          Random      Mastiff          F            Cat
            aDog = theDogOwner.allMyDogs[0]
            expect(aDog.myDogOwner).toEqual(theDogOwner)
            expect(aDog.name).toBe("Random")
            expect(aDog.breed).toBe("Mastiff")
            expect(aDog.gender).toBe("F")
            expect(aDog.favoriteFood).toBe("Cat")
        })
    })
})
