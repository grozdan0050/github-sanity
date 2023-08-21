import { groq } from "next-sanity";

const linkWithImageQuery = groq`
    _type == 'linkWithImage' => {
        _type,
        _id,
        'title': title[$locale],
            'link': {
            'text': linkText[$locale],
            'url': linkUrl,
        }, 
        'backgroundColor': backgroundColor.hex,
        'image': {
            'url': image.asset->url,
            'width': image.asset->metadata.dimensions.width,
            'height': image.asset->metadata.dimensions.height,
            'alt': image.alt[$locale],
        },
    },
`;

const linkQuery = groq`
    ${linkWithImageQuery}
`;

export default linkQuery;
