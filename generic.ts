function entity<T>(args: T): T {
	return args
}

entity<number>(1)
entity<string>('2')

const entity2 = <T>(args: T): T => {
	return args
}

entity2<number>(1)
entity2<string>('2')

class Channel<T> {
	private name: T

	constructor(name: T) {
		this.name = name
	}

	getName(): T {
		return this.name
	}
}

new Channel<string>('Max').getName()
new Channel<number>(1234).getName()

interface IPair<K, V> {
	key: K
	value: V
}

const pair1: IPair<number, string> = {
	key: 1,
	value: 'Pumpurum',
}

const pair2: IPair<number, number> = {
	key: 1,
	value: 500,
}

type TypeLength = {
	length: number
}

function getNameLength<T extends TypeLength>(name: T): number {
	return name.length
}

getNameLength('243')
getNameLength([1, 2, 3, 4])
