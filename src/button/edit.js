import "./editor.scss";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, CheckboxControl } from "@wordpress/components";
import { textColors, backgroundColors } from "../utils/colors";

export default function Edit({ attributes, setAttributes }) {
	const { buttonText, buttonLink, backgroundColor, textColor, isTargetBlank } =
		attributes;

	const onChangeButtonText = (newText) => {
		setAttributes({ buttonText: newText });
	};

	const onChangeButtonLink = (newLink) => {
		setAttributes({ buttonLink: newLink });
	};

	const onChangeIsTargetBlank = (newIsTargetBlank) => {
		setAttributes({ isTargetBlank: newIsTargetBlank });
	};

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__("Button Settings", "twentyfive-blocks")}>
					<TextControl
						label={__("Button Text", "twentyfive-blocks")}
						value={buttonText}
						onChange={onChangeButtonText}
					/>
					<TextControl
						label={__("Button Link", "twentyfive-blocks")}
						value={buttonLink}
						onChange={onChangeButtonLink}
					/>
					<CheckboxControl
						label={__("Open link in new tab", "twentyfive-blocks")}
						checked={isTargetBlank}
						onChange={onChangeIsTargetBlank}
					/>
				</PanelBody>
				<PanelBody title={__("Background Color", "twentyfive-blocks")}>
					<ColorPalette
						colors={backgroundColors}
						value={backgroundColor}
						onChange={(color) => setAttributes({ backgroundColor: color })}
					/>
				</PanelBody>
				<PanelBody title={__("Text Color", "twentyfive-blocks")}>
					<ColorPalette
						colors={textColors}
						value={textColor}
						onChange={(color) => setAttributes({ textColor: color })}
					/>
				</PanelBody>
			</InspectorControls>

			<RichText
				tagName="a"
				href={buttonLink}
				value={buttonText}
				style={{ color: textColor, backgroundColor }}
				onChange={onChangeButtonText}
				placeholder={__("Add button text...", "twentyfive-blocks")}
				className="readmore-button"
				target={isTargetBlank ? "_blank" : undefined}
				rel={isTargetBlank ? "noopener noreferrer" : undefined}
			/>
		</div>
	);
}
