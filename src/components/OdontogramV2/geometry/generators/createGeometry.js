export function createGeometry({

    width,

    height,

    centerSize

}) {

    const centerX = width / 2;
    const centerY = height / 2;
    const centerHalf = centerSize / 2;

    return {

        top: `${centerHalf},0 ${width - centerHalf},0 ${centerX + centerHalf},${centerY - centerHalf} ${centerX - centerHalf},${centerY - centerHalf}`,

        right: `${width},${centerHalf} ${width},${height - centerHalf} ${centerX + centerHalf},${centerY + centerHalf} ${centerX + centerHalf},${centerY - centerHalf}`,

        bottom: `${centerX - centerHalf},${centerY + centerHalf} ${centerX + centerHalf},${centerY + centerHalf} ${width - centerHalf},${height} ${centerHalf},${height}`,

        left: `0,${centerHalf} ${centerX - centerHalf},${centerY - centerHalf} ${centerX - centerHalf},${centerY + centerHalf} 0,${height - centerHalf}`,

        center: `${centerX - centerHalf},${centerY - centerHalf} ${centerX + centerHalf},${centerY - centerHalf} ${centerX + centerHalf},${centerY + centerHalf} ${centerX - centerHalf},${centerY + centerHalf}`

    };

}