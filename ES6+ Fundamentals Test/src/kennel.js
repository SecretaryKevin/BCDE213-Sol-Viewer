/* global  DogOwner */
class Kennel {
    // eslint-disable-line no-unused-vars

    allMyDogOwners = []

    addDogOwner(newId, newFirstName, newLastName, newBirthDate) {
        let newDogOwner = new DogOwner(
            newId,
            newFirstName,
            newLastName,
            newBirthDate,
            this
        )
        this.allMyDogOwners.push(newDogOwner)
    }

    findDogOwner(targetOwnerId) {
        return this.allMyDogOwners.find(
            (aDogOwner) => aDogOwner.id === targetOwnerId
        )
    }

    sortDogOwners() {
        this.allMyDogOwners.sort((a, b) => a.id.localeCompare(b.id))
    }

    getDogOwners(){
        this.sortDogOwners()
        let result = ""
        for (let aOwner of this.allMyDogOwners) {
            result += aOwner + "\n"
        }
        return result
    }

    getThoseWithOneDog(){
        this.sortDogOwners()
        let result = ""
        for (let aOwner of this.allMyDogOwners) {
            if (aOwner.hasOneDog()) {
                result += aOwner + "\n\t"
                result += aOwner.allMyDogs[0] + "\n"
            }
        }
        return result
    }
}
