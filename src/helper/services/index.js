import API from "./services";

const services = {
    getActors: async (params) => {
        const options = {
            method: 'POST',
            url: 'https://n7b67.sse.codesandbox.io/graphql',
            data: params,
            headers: {
                'Content-Type': 'application/json'
            }
        }
		return await API(options)
	},
}

export default services;