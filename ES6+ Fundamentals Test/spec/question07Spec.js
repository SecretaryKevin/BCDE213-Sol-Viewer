/* global describe beforeEach Controller it expect Kennel */
describe("Question Seven", () => {
    let theKennel
    beforeEach(() => {
        theKennel = Controller.setup()
    })
    describe("Kennel.getThoseWithOneDog function", () => {
        it("should return a string", () => {
            expect(typeof theKennel.getThoseWithOneDog()).toBe("string")
        })
        it("should NOT be hard coded", () => {
            theKennel = new Kennel()
            expect(theKennel.getThoseWithOneDog()).toBe("")
        })

        // 'Andrew, Carter [ACR]\n  Random (F) the Mastiff likes to eat Cat\nBrad, McCaw [BMC]\n  Speedy (N) the Pomeranian likes to eat Ekanuba\n');
        describe("The first owner", () => {
            it("should be Andrew", () => {
                let output = theKennel.getThoseWithOneDog()
                expect(output).toMatch(/^Andrew/)
            })
        })

        describe("Andrew's dog", () => {
            let theKennel = Controller.setup()
            let owner = theKennel.findDogOwner("ACR")
            let theDog = owner.allMyDogs[0]
            let output = theDog.toString()

            it("and the dog's name should be the Random", () => {
                expect(output).toMatch(/Random/)
            })
            it("and should be Female", () => {
                expect(output).toMatch(/\s\(F\)\s/)
            })
            it("and a Mastiff", () => {
                expect(output).toMatch(/ the Mastiff/)
            })
            it("who likes to eat Cat!", () => {
                expect(output).toMatch(/likes to eat Cat$/)
            })
        })

        // \nBrad, McCaw [BMC]\n  Speedy (N) the Pomeranian likes to eat Ekanuba\n');
        describe("The second Dog owner", () => {
            it("should be Brad", () => {
                let output = theKennel.getThoseWithOneDog()
                expect(output).toMatch(/^Andrew.*\n.*\nBrad/)
            })
        })

        describe("Brads's dog", () => {
            let theKennel = Controller.setup()
            let owner = theKennel.findDogOwner("BMC")
            let theDog = owner.allMyDogs[0]
            let output = theDog.toString()

            it("and the dog's name should be the Speedy", () => {
                expect(output).toMatch(/Speedy/)
            })
            it("and should be Neutered", () => {
                expect(output).toMatch(/\s\(N\)\s/)
            })
            it("and a Pomeranian", () => {
                expect(output).toMatch(/ the Pomeranian/)
            })
            it("who likes to eat Ekanuba", () => {
                expect(output).toMatch(/likes to eat Ekanuba$/)
            })
        })
    })
})
