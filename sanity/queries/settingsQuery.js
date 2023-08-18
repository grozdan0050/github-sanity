const { groq } = require("next-sanity");

const settingsQuery = groq`
    *[_type == 'settings'][0] {
        _type,
        'link': {
            'text': linkText,
            'url': linkUrl,
        },
   }
`;

export default settingsQuery;
