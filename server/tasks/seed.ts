export default defineTask({
	meta: {
		name: 'db:seed',
		description: 'Run database seed task'
	},
	async run() {
		console.log('Running DB seed task...')
		const edt = [
			{
				name: "l3 info",
				url: "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&bgcolor=%23ffffff&showTitle=0&showPrint=0&mode=WEEK&src=N291cjY2a2I5Z3BsZ3Jkb2l0anFiOHEyN3NxdmwwcTFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23E67C73",
			},
			{
				name: "m1 info",
				url: "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FParis&bgcolor=%23ffffff&showTitle=0&showPrint=0&mode=WEEK&src=NmhtMTMzMjZ2azRlczhiMGEwOTExNmNsMWxtbG9qYWNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233F51B5",
			}
		]
		await useDrizzle().insert(tables.edt).values(edt)
		return { result: 'success' }
	}
})
