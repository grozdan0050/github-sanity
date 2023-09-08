const Accordion = ({ children, className }) => {
	return children && <ul className={className}>{children}</ul>;
};

export default Accordion;
