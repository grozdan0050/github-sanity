const formatDate = (date) => {
	const newDate = new Date(date)
		.toLocaleDateString("en-UK", {
			year: "numeric",
			month: "short",
			day: "2-digit",
		})
		.toString();

	return newDate;
};

export default formatDate;
