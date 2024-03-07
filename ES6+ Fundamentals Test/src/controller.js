/* global Kennel */
class Controller { // eslint-disable-line no-unused-vars
    static setup() {
        let theKennel = new Kennel()
        // ADD CODE HERE TO CREATE THE DOGOWNERS
        /*
        BMC   Brad    McCaw   12/13/1982
        RTH   Richie  Thorn   8/05/1980
        DEL   Dan     Ellis   16/02/1984
        ACR   Andrew  Carter  30/11/1987
        */
        // ADD CODE HERE TO CREATE THE DOGS

        theKennel.addDogOwner('BMC', 'Brad', 'McCaw', new Date(1982, 11, 12))
        theKennel.addDogOwner('RTH', 'Richie', 'Thorn', new Date(1980, 4, 8))
        theKennel.addDogOwner('DEL', 'Dan', 'Ellis', new Date(1984, 1, 16))
        theKennel.addDogOwner('ACR', 'Andrew', 'Carter', new Date(1987, 10, 30))
        /*
        DogOwner ID     Name         Breed         Gender      Favorite Food
        BMC          Speedy     Pomeranian        N           Ekanuba
        RTH          Victor      Beagle           M           Chef
        RTH          Killer      Mastiff          N           Purina
        DEL          Ruftero     Poodle           F           Ekanuba
        DEL          Sausage    Dachshund         F           Purina
        ACR          Random      Mastiff          F            Cat
        */

        let owner = theKennel.findDogOwner('BMC')
        owner.addDog(owner, 'Speedy', 'Ekanuba', 'Pomeranian', 'N')
        owner = theKennel.findDogOwner('RTH')
        owner.addDog(owner, 'Victor', 'Chef', 'Beagle', 'M')
        owner.addDog(owner, 'Killer', 'Purina', 'Mastiff', 'N')
        owner = theKennel.findDogOwner('DEL')
        owner.addDog(owner, 'Ruftero', 'Ekanuba', 'Poodle', 'F')
        owner.addDog(owner, 'Sausage', 'Purina', 'Dachshund', 'F')
        owner = theKennel.findDogOwner('ACR')
        owner.addDog(owner, 'Random', 'Cat', 'Mastiff', 'F')

        return theKennel
    }
}
