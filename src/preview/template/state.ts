import { useStorageState } from "~src/utils/state/storage";
import { SetState } from "~src/utils/state/type";
import * as styles from "./styles/styles";
import { EN_DASH } from "~src/utils/typography";

export const PREVIEW_TEMPLATE_NAMES = ["tailwind", "github", "serif"] as const;

export type PreviewTemplateName = typeof PREVIEW_TEMPLATE_NAMES[number];

export interface PreviewTemplateDetail {
	name: string;
	className: string;
}

export interface PreviewTemplateState {
	previewTemplate: PreviewTemplateName;
	setPreviewTemplate: SetState<PreviewTemplateName>;
}

export const PREVIEW_TEMPLATE_DETAILS: Record<
	PreviewTemplateName,
	PreviewTemplateDetail
> = {
	github: {
		name: `Sans ${EN_DASH} GitHub`,
		className: styles.github.container,
	},
	tailwind: {
		name: `Sans ${EN_DASH} Tailwind`,
		className: styles.tailwind.container,
	},
	serif: {
		name: "Serif",
		className: styles.serif.container,
	},
};

export const usePreviewTemplateState = (): PreviewTemplateState => {
	const [previewTemplate, setPreviewTemplate] =
		useStorageState<PreviewTemplateName>({
			defaultValue: "github",
			storageKey: "preview-template",
		});

	return { previewTemplate, setPreviewTemplate };
};
