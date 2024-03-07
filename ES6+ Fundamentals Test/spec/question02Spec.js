/* globals describe beforeEach Controller it expect  */
describe("Question Two", () => {
    describe("adding the four DogOwners", () => {
        let theKennel
        beforeEach(() => {
            theKennel = Controller.setup()
        })

        it("should have added 4 DogOwners", () => {
            expect(theKennel.allMyDogOwners.length).toBe(4)
        })

        it("should have correctly set details for each DogOwner", () => {
            let aDogOwner
            aDogOwner = theKennel.sortDogOwners()

            aDogOwner = theKennel.allMyDogOwners[0]
            expect(aDogOwner).toBeDefined()
            expect(aDogOwner.id).toBe("ACR")
            expect(aDogOwner.firstName).toBe("Andrew")
            expect(aDogOwner.lastName).toBe("Carter")
            expect(aDogOwner.birthDate).toEqual(new Date(1987, 10, 30))

            aDogOwner = theKennel.allMyDogOwners[1]
            expect(aDogOwner).toBeDefined()
            expect(aDogOwner.id).toBe("BMC")
            expect(aDogOwner.firstName).toBe("Brad")
            expect(aDogOwner.lastName).toBe("McCaw")
            expect(aDogOwner.birthDate).toEqual(new Date(1982, 11, 12))

            aDogOwner = theKennel.allMyDogOwners[2]
            expect(aDogOwner).toBeDefined()
            expect(aDogOwner.id).toBe("DEL")
            expect(aDogOwner.firstName).toBe("Dan")
            expect(aDogOwner.lastName).toBe("Ellis")
            expect(aDogOwner.birthDate).toEqual(new Date(1984, 1, 16))

            aDogOwner = theKennel.allMyDogOwners[3]
            expect(aDogOwner).toBeDefined()
            expect(aDogOwner.id).toBe("RTH")
            expect(aDogOwner.firstName).toBe("Richie")
            expect(aDogOwner.lastName).toBe("Thorn")
            expect(aDogOwner.birthDate).toEqual(new Date(1980, 4, 8))
        })
    })
})
