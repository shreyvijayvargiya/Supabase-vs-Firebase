import React from "react";
import app from "../utils/firebase";

const MyApp = ({ Component, pageProps }) => {

	React.useEffect(() => {
		app.analytics();
	}, []);
	
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
};
export default MyApp;
