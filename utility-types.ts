//=========================================================================
interface ICar {
	id: number
	name: string
	price: number
	yearBuilt: number
}

interface ICarCreate extends Omit<ICar, 'id'> {}
interface ICarId extends Pick<ICar, 'id'> {}
interface ICarOptional extends Partial<ICar> {}
// interface ICarReadonly extends Readonly<ICar> {}
// interface ICarRequired extends Required<ICar> {}
const car1: ICarCreate = {
	name: 'BMW',
	price: 10000,
	yearBuilt: 2010,
}
const car2: ICarId = {
	id: 1,
}
const car3: ICarOptional = {}

//=========================================================================
type TypeCarRecord = Record<'name' | 'price', string | number>
const car4: TypeCarRecord = {
	name: 'BMW',
	price: 10000,
}

type TypeGetName = () => string
type Return = ReturnType<TypeGetName>
type Any = Extract<'ok' | 'neok', 'ok' | 'good'>
type Any1 = Exclude<'neok' | 'ok', 'ok' | 'good'>
type NotNull = NonNullable<string | number | null | undefined>
