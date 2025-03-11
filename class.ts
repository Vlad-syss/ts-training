class Car {
	name: string
	price: number

	constructor(name: string, price: number) {
		this.name = name
		this.price = price
	}

	protected getInfo(): string {
		return `${this.name} - ${this.price}$`
	}
	anything() {
		this.getInfo()
	}
}

class Bus extends Car {
	constructor(name: string, price: number) {
		super(name, price)
	}

	test() {
		this.getInfo()
	}
}

new Car('BMW', 12000).anything()
