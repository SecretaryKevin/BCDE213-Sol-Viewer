/* global describe beforeEach it expect DogOwner */
describe("Question Six", () => {
    describe("DogOwner.hasOneDog function", () => {
        let aDogOwner
        beforeEach(() => {
            aDogOwner = new DogOwner()
        })

        it("should exist", () => {
            expect(aDogOwner.hasOneDog).toBeDefined()
        })

        it("should return a boolean", () => {
            expect(typeof aDogOwner.hasOneDog()).toBe("boolean")
        })

        it("should return false if the number of Dog that person owns is equal zero.", () => {
            aDogOwner = new DogOwner("tao", null, null, null, null)
            expect(aDogOwner.hasOneDog()).toBe(false)
        })

        it("should return true if the number of Dog that person owns is equal one.", () => {
            aDogOwner = new DogOwner("tao", null, null, null, null)
            aDogOwner.addDog(null, null, null, null)
            expect(aDogOwner.hasOneDog()).toBe(true)
        })

        it("should return false if the number of Dog that person owns is more than one.", () => {
            aDogOwner = new DogOwner("tao", null, null, null, null)
            aDogOwner.addDog(null, null, null, null)
            aDogOwner.addDog(null, null, null, null)
            expect(aDogOwner.hasOneDog()).toBe(false)
        })

        it("should return false if the number of Dog that person owns is more than two.", () => {
            aDogOwner = new DogOwner("tao", null, null, null, null)
            aDogOwner.addDog(null, null, null, null)
            aDogOwner.addDog(null, null, null, null)
            aDogOwner.addDog(null, null, null, null)
            expect(aDogOwner.hasOneDog()).toBe(false)
        })
    })
})
