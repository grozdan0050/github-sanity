import { groq } from "next-sanity";

const defaultHeroQuery = groq`
    _type == 'defaultHero' => {
        _type,
        title,
        body,
        'image': {
            'url': image.asset->url,
            'width': image.asset->metadata.dimensions.width,
            'height': image.asset->metadata.dimensions.height,
            'alt': image.alt,
        },
        'backgroundColor': backgroundColor.hex,
    },
`;

const animatedHeroQuery = groq`
    _type == 'animatedHero' => {
        _type,
        title,
        body,
        'link': {
            'text': linkText,
            'url': linkUrl,                    
        },
        'image': {
            'url': image.asset->url,
            'width': image.asset->metadata.dimensions.width,
            'height': image.asset->metadata.dimensions.height,
            'alt': image.alt,
        },
        'backgroundColor': backgroundColor.hex,
    },
`;

const heroWithFormQuery = groq`
    _type == 'heroWithForm' => {
        _type,
        title,
        body,
        listTitle,
        listBody[]-> {
            _id,
            body,
        },
        'backgroundColor': backgroundColor.hex,
        'badge': {
            'backgroundColor': badgeBackgroundColor.hex,
            'iconColor': badgeIconColor.hex,
        },
        formTitle,
        formList[]-> {
            _id,
            body,
        },
        formButtonText,
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
