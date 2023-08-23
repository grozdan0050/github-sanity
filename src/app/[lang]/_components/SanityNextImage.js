import Image from "next/image";

const SanityNextImage = ({ data, className }) => {
	const { url, width, height, alt } = data;

	return (
		<Image
			src={url}
			width={width}
			height={height}
			alt={alt}
			className={className}
		/>
	);
};

export default SanityNextImage;
