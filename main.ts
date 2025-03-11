type TypeIsNumber<T> = T extends number ? 'number' : 'no number'

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

type TypeBrand = 'bmw' | 'opel' | 'mercedes'
type TypePrice = '10000$' | '50000$' | '12000$'

type TypeCar = `${TypeBrand} ${TypePrice}`

const car1: TypeCar = 'bmw 50000$'
// const car2: TypeCar = '51000$ bmw'
