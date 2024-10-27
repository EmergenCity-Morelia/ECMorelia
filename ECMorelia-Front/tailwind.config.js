/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"text-gradient": "linear-gradient(50deg, rgba(0,188,255,1) 0%, rgba(161,0,200,1) 100%)"
			}
		}
	},
	plugins: []
};
