class DogOwner {
    constructor(newId, newFirstName, newLastName, newBirthDate, theKennel) {
        this.id = newId
        this.firstName = newFirstName
        this.lastName = newLastName
        this.birthDate = newBirthDate
        this.myKennel = theKennel
        this.allMyDogs = []
    }

    sortDogs() {
        this.allMyDogs.sort((a, b) => a.name.localeCompare(b.name))
    }

    addDog(theDogOwner, newName, newFavoriteFood, newBreed, newGender) {
        let newDog = new Dog(theDogOwner, newName, newFavoriteFood, newBreed, newGender)
        this.allMyDogs.push(newDog)
    }

    hasOneDog(){
        return this.allMyDogs.length === 1
    }

    toString(){
        return `${this.firstName}, ${this.lastName} [${this.id}]`
    }
}
