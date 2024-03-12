const axios = require('axios');

// https://equran.id/apidev/v2

axios
	.get('https://equran.id/api/v2/surat')
	.then((response) => {
		const data = response.data;
		console.log(data);
	})
	.catch((error) => {
		console.error(error);
	});
