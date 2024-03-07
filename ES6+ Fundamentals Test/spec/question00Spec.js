/* global describe beforeEach it expect Kennel DogOwner */
describe("Basic Check For Original Source Code", () => {
    describe("Kennel", () => {
        let theKennel
        beforeEach(() => {
            theKennel = new Kennel()
        })

        describe("the allMyDogOwners property", () => {
            it("should have an .allMyDogOwners property", () => {
                // expect(Object.prototype.hasOwnProperty.call(theKennel, "allMyDogOwners")).toBeTruthy()
				expect(theKennel.hasOwnProperty("allMyDogOwners")).toBeTruthy()
            })
            it("should reference an array", () => {
                expect(Array.isArray(theKennel.allMyDogOwners)).toBeTruthy()
            })
        })

        it("should have an .addDogOwner function", () => {
            expect(typeof theKennel.addDogOwner).toBe("function")
        })

        it("should have a .findDogOwner function", () => {
            expect(typeof theKennel.findDogOwner).toBe("function")
        })

        it("should have a .sortDogOwners function", () => {
            expect(typeof theKennel.sortDogOwners).toBe("function")
        })
    })

    describe("DogOwner", () => {
        let dogOwner
        beforeEach(function() {
            dogOwner = new DogOwner()
        })

        it("should have an .id property", () => {
            expect(Object.prototype.hasOwnProperty.call(dogOwner, "id")).toBeTruthy()
        })

        it("should have a .firstName property", () => {
            expect(Object.prototype.hasOwnProperty.call(dogOwner, "firstName")).toBeTruthy()
        })

        it("should have a .lastName property", () => {
            expect(Object.prototype.hasOwnProperty.call(dogOwner, "lastName")).toBeTruthy()
        })

        it("should have a .birthDate property", () => {
            expect(Object.prototype.hasOwnProperty.call(dogOwner, "birthDate")).toBeTruthy()
        })

        it("should have a .myKennel reference", () => {
            expect(Object.prototype.hasOwnProperty.call(dogOwner, "myKennel")).toBeTruthy()
        })

        describe("the allMyDogs property", () => {
            it("should have an .allMyDogs reference", () => {
                expect(Object.prototype.hasOwnProperty.call(dogOwner, "allMyDogs")).toBeTruthy()
            })

            it("should reference an array", () => {
                expect(Array.isArray(dogOwner.allMyDogs)).toBeTruthy()
            })
        })

        it("should have a .sortDogs function", () => {
            expect(typeof dogOwner.sortDogs).toBe("function")
        })
    })
})