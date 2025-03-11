interface IUserAge {
	age: number
}

interface IUser extends IUserAge {
	name: string
	email: string
}

type TypeAge = {
	age: number
}

type UserType = {
	name: string
	email: string
} & TypeAge

const admin: IUser = {
	name: 'Alex',
	email: 'test@test.com',
	age: 23,
}

// const users:IUser[] = [admin,{
// 	age:24
// }]