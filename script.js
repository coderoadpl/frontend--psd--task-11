const names = ['Ala', 'Ola', 'Ela']

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const findByValue = function (value) {
    return function (element, index, array) {
        return element === value
    }
}

const foundElement = names.find(findByValue('Ala'))

console.log(foundElement)

const myOwnFind = function (array, callback) {

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        const index = i

        const result = callback(element, index, array)

        if (result) {
            return element
        }
    }

}

const foundElementByMyOwnFind = myOwnFind(names, findByValue('Ala'))

console.log(foundElementByMyOwnFind)

const foundNumber = numbers.find(findByValue(3))

console.log(foundNumber)