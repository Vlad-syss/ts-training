type TypeChannelReturn = {
	name: string
}

// function getChannel(name: string): TypeChannelReturn {
// 	return { name: '34235' }
// }

const getChannel = (name: string): TypeChannelReturn => {
	return { name }
}
// getChannel('werfd')

type TypeChannelFunc = (name: string) => TypeChannelReturn

const getChannelName: TypeChannelFunc = name => {
	return { name }
}

const getNumbers = (...numbers: number[]) => {
	return numbers
}

//Перегрузки
function getCar(name: string): string
function getCar(name: string, price: number): string

function getCar(name: string, price?: number): string {
	return price ? `Name: ${name}, Price:${price}` : `Name: ${name}`
}

const car1 = getCar('bmw')
const car2 = getCar('bmw', 10000)
// const car3 = getCar("bmw",10000,'235')
