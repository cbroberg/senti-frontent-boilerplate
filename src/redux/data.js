
/**
 * Actions
 */

const initialState = {
	favorites: [],
	users: [],
	orgs: [],
	devices: [],
	projects: [],
	collections: [],
	registries: [],
	sensors: [],
	deviceTypes: [],
	gotusers: false,
	gotorgs: false,
	gotdevices: false,
	gotprojects: false,
	gotcollections: false,
}

export const data = (state = initialState, { type, payload }) => {
	switch (type) {
		default:
			return state
	}
}
