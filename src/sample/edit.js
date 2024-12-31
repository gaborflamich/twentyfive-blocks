import "./editor.scss";
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, CheckboxControl } from "@wordpress/components";
import { textColors } from "../utils/colors";

export default function Edit({ attributes, setAttributes }) {
	const { buttonText, buttonLink, textColor, isTargetBlank } = attributes;

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
				<PanelBody title={__("Button Settings", "validity-blocks")}>
					<TextControl
						label={__("Button Text", "validity-blocks")}
						value={buttonText}
						onChange={onChangeButtonText}
					/>
					<TextControl
						label={__("Button Link", "validity-blocks")}
						value={buttonLink}
						onChange={onChangeButtonLink}
					/>
					<CheckboxControl
						label={__("Open link in new tab", "validity-blocks")}
						checked={isTargetBlank}
						onChange={onChangeIsTargetBlank}
					/>
				</PanelBody>
				<PanelBody title={__("Text Color", "validity-blocks")}>
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
				style={{ color: textColor }}
				onChange={onChangeButtonText}
				placeholder={__("Add button text...", "validity-blocks")}
				className="readmore-button"
				target={isTargetBlank ? "_blank" : undefined}
				rel={isTargetBlank ? "noopener noreferrer" : undefined}
			/>
		</div>
	);
}
