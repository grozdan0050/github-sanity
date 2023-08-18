import { groq } from "next-sanity";

const linkWithImageQuery = groq`
    _type == 'linkWithImage' => {
        _type,
        _id,
        title,
            'link': {
            'text': linkText,
            'url': linkUrl,
        }, 
        'backgroundColor': backgroundColor.hex,
        'image': {
            'url': image.asset->url,
            'width': image.asset->metadata.dimensions.width,
            'height': image.asset->metadata.dimensions.height,
            'alt': image.alt,
        },
    },
`;

const linkQuery = groq`
    ${linkWithImageQuery}
`;

export default linkQuery;
