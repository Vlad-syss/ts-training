enum EnumRoles {
	ADMIN,
	GUEST,
	USER,
}

interface IUserInt {
	role: EnumRoles
}

const userRole: IUserInt = {
	role: EnumRoles.ADMIN,
}

const enum EnumColors {
	black,
	pink,
	green,
}

interface IUserColor extends IUserInt {
	color: EnumColors
}

const userColor: IUserColor = {
	role: EnumRoles.GUEST,
	color: EnumColors.green,
}
