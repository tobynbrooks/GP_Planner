import React from "react";

type CompanyLogoProps = {
	/** Width in pixels (height will auto-scale unless explicitly set) */
	width?: number;
	/** Height in pixels (optional; if not provided it scales from width) */
	height?: number;
	/** Additional class names to pass to the underlying img element */
	className?: string;
	/** When true, rotates the logo 90 degrees to the right */
	rotateRight?: boolean;
	/** Optional alt text override */
	alt?: string;
	/**
	 * Optional path override if you save the SVG with a different name or location.
	 * Defaults to the expected path in `public/`.
	 */
	srcPath?: string;
};

/**
 * CompanyLogo
 *
 * Renders the company logo SVG from `/public` and (by default) rotates it 90°
 * to the right. Place your SVG at:
 *   /public/Final-Logo-Best-July-2025.svg
 *
 * Usage:
 *   import { CompanyLogo } from "@/components/CompanyLogo";
 *   <CompanyLogo width={120} />
 */
export function CompanyLogo({
	width = 120,
	height,
	className,
	rotateRight = true,
	alt = "Company logo",
	srcPath = "/Final-Logo-Best-July-2025.svg",
}: CompanyLogoProps) {
	const rotation = rotateRight ? "rotate(90deg)" : "none";

	return (
		<img
			src={srcPath}
			alt={alt}
			width={width}
			height={height}
			style={{ transform: rotation, transformOrigin: "center center", display: "block" }}
			className={className}
		/>
	);
}


