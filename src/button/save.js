import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { buttonText, buttonLink, textColor, isTargetBlank } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<RichText.Content
				tagName="a"
				href={buttonLink}
				value={buttonText}
				style={{ color: textColor }}
				className="readmore-button"
				target={isTargetBlank ? "_blank" : undefined}
				rel={isTargetBlank ? "noopener noreferrer" : undefined}
			/>
		</div>
	);
}
