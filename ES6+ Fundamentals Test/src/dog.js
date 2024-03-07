class Dog {
    constructor(theDogOwner, newName, newFavoriteFood, newBreed, newGender) {
        this.myDogOwner = theDogOwner
        this.name = newName
        this.favoriteFood = newFavoriteFood
        this.breed = newBreed
        this.gender = newGender
    }

    toString(){
        return `${this.name} (${this.gender}) the ${this.breed} likes to eat ${this.favoriteFood}`
    }
}
