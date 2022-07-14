import { createAvatar } from "@dicebear/avatars";
import * as style from '@dicebear/big-ears-neutral';

const svgAvatarGenerator = (seed, config) => {
	let svg = createAvatar(style, {
		seed: seed,
		// mouth: ["variant0403", "variant0503", "variant0502"],
		...config,
	});

	return svg;
};

export default svgAvatarGenerator;
