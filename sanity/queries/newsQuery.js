const { groq } = require("next-sanity");

const newsQuery = (getSpecificLanguage) => groq`
*[_type == 'news'] | order(publishDate desc) {
    _type,
    _id,
    ${getSpecificLanguage ? "'title': title[$locale]" : "title"},
    ${getSpecificLanguage ? "'body': body[$locale]" : "body"},
    'link': {${
			getSpecificLanguage ? "'text': linkText[$locale]" : "'text': linkText"
		},
        'url': linkUrl,
    },
    publishDate,
}
`;

export default newsQuery;
