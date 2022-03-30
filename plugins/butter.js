import { defineNuxtPlugin } from "#app";
import Butter from "buttercms";

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();

	return {
		provide: {
			// initialise butter with private runtime config
			butter: Butter(config.API_TOKEN),
		},
	};
});
