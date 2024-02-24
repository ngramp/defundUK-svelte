import type { SSTConfig } from 'sst';
import { API } from "./stacks/MyStack";

export default {
	config() {
		return {
			name: 'defundUk',
			region: 'eu-west-1'
		};
	},
	stacks(app) {
		app.stack(API);
	},
} satisfies SSTConfig;
