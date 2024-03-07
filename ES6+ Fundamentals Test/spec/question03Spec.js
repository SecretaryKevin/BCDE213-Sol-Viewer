/* global describe beforeEach Controller it expect Kennel DogOwner Dog */
/*
describe("Question Three", function () {
  describe("Kennel.getDogOwners function", function () {
      let theKennel;
      beforeEach(function () {
          theKennel = Controller.setup();
      });

      it("should return a string", function () {
          expect(typeof theKennel.getDogOwners()).toBe('string');
      });

      it("should NOT be hard coded", function () {
          theKennel = new Kennel();
          expect(theKennel.getDogOwners()).toBe('');
      });

      it("should return correctly formatted data in the right order", function () {
          expect(theKennel.getDogOwners()).toBe('Andrew, Carter [ACR]\nBrad, McCaw [BMC]\nDan, Ellis [DEL]\nRichie, Thorn [RTH]\n');
      });
  });
});
*/
describe("Kennel.getDogOwners function", () => {
    let theKennel
    beforeEach(() => {
        theKennel = Controller.setup()
    })
    it("should return a string", () => {
        expect(typeof theKennel.getDogOwners()).toBe("string")
    })
    it("should NOT be hard coded", () => {
        theKennel = new Kennel()
        expect(theKennel.getDogOwners()).toBe("")
    })

    // 'Andrew, Carter [ACR]\nBrad, McCaw [BMC]\nDan, Ellis [DEL]\nRichie, Thorn [RTH]\n');
    describe("Should return correctly formatted data", () => {
        describe("Should start with the first names but be sorted in ID order", () => {
            it("First Andrew then Brad then Dan then Richie", () => {
                let output = theKennel.getDogOwners()
                expect(output).toMatch(/^Andrew.*\nBrad.*\nDan.*\nRichie.*\n/)
            })
        })
        describe("Puntuation after each first name", () => {
            it("should be a comma followed by a single space", () => {
                let output = theKennel.getDogOwners()
                expect(output).toMatch(
                    /^Andrew,\s.*\nBrad,\s.*\nDan,\s.*\nRichie,\s.*\n/
                )
            })
        })
        describe("last names", () => {
            it("should be Carter, then McCaw, then Ellis and finally Richie", () => {
                let output = theKennel.getDogOwners()
                expect(output).toMatch(
                    /.*Carter.*\n.*McCaw.*\n.*Ellis.*\n.*Richie.*/
                )
            })
        })
        describe("Puntuation after the last names", () => {
            it("should be a space", () => {
                expect(theKennel.getDogOwners()).toMatch(/[\.\s]/)
            })
        })
        describe("the IDs", () => {
            it("should have three letters enclosed in square brackets ie [ARC]", () => {
                expect(theKennel.getDogOwners()).toMatch(/\[...\]/)
            })
        })
        describe("end of each owner's details", () => {
            it("should end with the newline character", () => {
                expect(theKennel.getDogOwners()).toMatch(/\n/)
            })
        })
    })
})
