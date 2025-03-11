type TypeUser = {
	name: string
	age?: number
}

type TypeAddress = {
	city: string
	country: string
}

const user: TypeUser = {
	name: 'Sigma',
	age: 24,
}

const address: TypeAddress = {
	city: 'Kyiv',
	country: 'Ukraine',
}

// const common = {
// 	...user,
// 	...address
// }

let common: TypeUser & TypeAddress

common = {
	...address,
	...user,
}
