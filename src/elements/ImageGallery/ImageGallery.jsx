import React from 'react';
import './imageGallery.scss';

import 'react-image-gallery/styles/scss/image-gallery.scss';
import Gallery from 'react-image-gallery';

const ImageGallery = (props) => {
	const imageList = props?.images.map((image) => {
		return {
			original: image,
			thumbnail: image,
		};
	});
	return (
		<div>
			<Gallery items={imageList} showBullets showThumbnails={true} />
		</div>
	);
};

export default ImageGallery;
