const { groq } = require("next-sanity");

const footerQuery = groq`
    *[_type == 'footer'][0] {
        _type,
        'logo': {
            'url': logo.asset->url,
            'width': logo.asset->metadata.dimensions.width,
            'height': logo.asset->metadata.dimensions.height,
            'alt': logo.alt,
        },
        body,
        chamberOfCommerceNumber,
        copyright,
        navigation[] {
            _key,
            _type,
            'link': {
                'text': linkText,
                'url': linkUrl,
            },
        },
        'backgroundColor': backgroundColor.hex,
   }
`;

export default footerQuery;
