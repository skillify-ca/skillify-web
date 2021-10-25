// define Food, Truck, Workforce interfaces 

export interface Food {
    name: string 
    unitCost: number
    unitRevenue: number 
    imageUrl: string
    prepTime: number 
    qtyProducedPerWorkerHour: number
}

export interface Truck {
    model: string 
    fixedCost: number
    variableCost: number 
    maxWorkers: number
    allowedItems: Array<Food>
    imageUrl: string
}

export interface Workforce {
    size: number 
    imageUrl: string
}

// define each instance of Food interface

export const hotDog: Food = {
    name: "Hot Dog", 
    unitCost: 1,
    unitRevenue: 4,
    imageUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/57508/hot-dog-emoji-clipart-original.svg',
    prepTime: 1,
    qtyProducedPerWorkerHour: 30
}

export const soupDumplings: Food = {
    name: "Soup Dumplings", 
    unitCost: 3,
    unitRevenue: 10,
    imageUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3390805/xiaolongbao-food-clipart.svg',
    prepTime: 4,
    qtyProducedPerWorkerHour: 15
}

export const curry: Food = {
    name: "Curry", 
    unitCost: 4,
    unitRevenue: 15,
    imageUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36257/cooking-curry-clipart.svg',
    prepTime: 6,
    qtyProducedPerWorkerHour: 10
}

export const kebab: Food = {
    name: "Kebabs", 
    unitCost: 2,
    unitRevenue: 6,
    imageUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/35112/barbecue-barbeque-bbq-clipart.svg',
    prepTime: 6,
    qtyProducedPerWorkerHour: 30
}

export const okonomiyaki: Food = {
    name: "Okonomiyaki", 
    unitCost: 2,
    unitRevenue: 12,
    imageUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3386659/okonomiyaki-japanese-food-clipart.svg',
    prepTime: 6,
    qtyProducedPerWorkerHour: 20
}

export const allFoods = [hotDog, kebab, soupDumplings, okonomiyaki, curry]

// define each instance of Truck interface

export const smallTruck: Truck = {
    model: "Food Cart", 
    fixedCost: 50,
    variableCost: 10,
    maxWorkers: 1,
    allowedItems: [hotDog, kebab],
    imageUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/25675/222-1033-traditional-culinary-vector-up-clipart.svg'
}

export const mediumTruck: Truck = {
    model: "Food Van", 
    fixedCost: 150,
    variableCost: 30,
    maxWorkers: 2,
    allowedItems: [hotDog, soupDumplings, kebab, okonomiyaki],
    imageUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/840327/food-truck-clipart.svg'
}

export const largeTruck: Truck = {
    model: "Food Truck", 
    fixedCost: 300,
    variableCost: 60,
    maxWorkers: 4,
    allowedItems: [hotDog, soupDumplings, curry, kebab, okonomiyaki],
    imageUrl: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1795498/food-truck-clipart.svg'
}

export const allTrucks = [smallTruck, mediumTruck, largeTruck]

// define global constants for simulation

export const minimumWage = 20
export const operatingHours = 8

// define functions to get properties from Truck and Food interfaces
export const getTruck = (model: string) => {
    if (model === 'Food Cart') {
        return smallTruck
    }
    
    else if (model === 'Food Van') {
        return mediumTruck
    }

    else if (model === 'Food Truck') {
        return largeTruck
    }
}

export const getFood = (name: string) => {
    if (name === 'Hot Dog') {
        return hotDog
    }
    
    else if (name === 'Soup Dumplings') {
        return soupDumplings
    }

    else if (name === 'Curry') {
        return curry
    }

    else if (name === 'Kebabs') {
        return kebab
    }

    else if (name === 'Okonomiyaki') {
        return okonomiyaki
    }
}

