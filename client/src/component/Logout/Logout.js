import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { refreshPage } from "../../utils/ajax_helper";

export default function Logout() {
	useEffect(() => {
		localStorage.removeItem("reddit_token");
		refreshPage();
	}, []);	

	return <Navigate to="/login" />;
}

