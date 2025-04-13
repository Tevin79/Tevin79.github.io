export default eventHandler(async () => {
	const edt = await useDrizzle().select().from(tables.edt).all()

	return edt
})
