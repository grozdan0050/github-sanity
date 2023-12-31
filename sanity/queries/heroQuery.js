import { groq } from "next-sanity";

const defaultHeroQuery = groq`
    _type == 'defaultHero' => {
        _type,
        'title': title[$locale],
        'body': body[$locale],
        'image': {
            'url': image.asset->url,
            'width': image.asset->metadata.dimensions.width,
            'height': image.asset->metadata.dimensions.height,
            'alt': image.alt[$locale],
        },
        'backgroundColor': backgroundColor.hex,
    },
`;

const animatedHeroQuery = groq`
    _type == 'animatedHero' => {
        _type,
        'title': title[$locale],
        'body': body[$locale],
        'link': {
            'text': linkText[$locale],
            'url': linkUrl,                    
        },
        'image': {
            'url': image.asset->url,
            'width': image.asset->metadata.dimensions.width,
            'height': image.asset->metadata.dimensions.height,
            'alt': image.alt[$locale],
        },
        'backgroundColor': backgroundColor.hex,
    },
`;

// 'title': coalesce(title[$locale], title['en']),

const heroWithFormQuery = groq`
    _type == 'heroWithForm' => {
        _type,
        'title': title[$locale],
        'body': body[$locale],
        'listTitle': listTitle[$locale],
        listBody[]-> {
            _id,
            'body': body[$locale],
        },
        'backgroundColor': backgroundColor.hex,
        'badge': {
            'backgroundColor': badgeBackgroundColor.hex,
            'iconColor': badgeIconColor.hex,
        },
        'formTitle': formTitle[$locale],
        formList[]-> {
            _id,
            'body': body[$locale],
        },
        'formButtonText': formButtonText[$locale],
        'formListBackgroundColor': formListBackgroundColor.hex,
        'formListDotColor': formListDotColor.hex,
    },
`;

const heroQuery = groq`
    ${defaultHeroQuery}
    ${animatedHeroQuery}
    ${heroWithFormQuery}
`;

export default heroQuery;
