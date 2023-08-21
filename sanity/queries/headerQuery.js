const { groq } = require("next-sanity");

const headerQuery = groq`
    *[_type == 'header'][0] {
        _type,
        'logo': {
            'url': logo.asset->url,
            'width': logo.asset->metadata.dimensions.width,
            'height': logo.asset->metadata.dimensions.height,
            'alt': logo.alt[$locale],
        },
        navigation[] {
            _key,
            _type,
            'link': {
                'text': linkText[$locale],
                'url': linkUrl,
            },
        },
   }
`;

export default headerQuery;
