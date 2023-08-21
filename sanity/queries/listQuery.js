import { groq } from "next-sanity";

const listCollapsibleQuery = groq`
    _type == 'listCollapsible' => {
        _type,
        'itemsBackgroundColor':itemsBackgroundColor.hex,
        'backgroundColor': backgroundColor.hex,
        items[]-> {
            _id,
            'title': title[$locale],
            body,
        },
    },
`;

const listCollapsibleWithTitleTextAndImageQuery = groq`
    _type == 'listCollapsibleWithTitleTextAndImage' => {
        _type,
        'title': title[$locale],
        body,
        'itemsBackgroundColor':itemsBackgroundColor.hex,
        'backgroundColor': backgroundColor.hex,
        items[]-> {
            _id,
            'title': title[$locale],
            body,
        },
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
    },
`;

const listImageTextAndTitleQuery = groq`
    _type == 'listImageTextAndTitle' => {
        _type,
        'title': title[$locale],
        'backgroundColor': backgroundColor.hex,
        items[]->{
            _id,
            'title': title[$locale],
            body,
            'badge': {
                'iconColor': badgeIconColor.hex,
                'backgroundColor': badgeBackgroundColor.hex,
            },
            'image': {
                'url': image.asset->url,
                'width': image.asset->metadata.dimensions.width,
                'height': image.asset->metadata.dimensions.height,
                'alt': image.alt[$locale],
            },     
        },
        'link': {
            'text': linkText[$locale],
            'url': linkUrl,
        },
        itemsBadgeEnabled,
    },
`;

const listInlineQuery = groq`
    _type == 'listInline' => {
        _type,
        'backgroundColor': backgroundColor.hex,
        items[]->{
            _id,
            body,
            'backgroundColor': backgroundColor.hex,
        },
        'itemsBadge': {
            'iconColor': itemsBadgeIconColor.hex,
            'backgroundColor': itemsBadgeBackgroundColor.hex,
        },
        itemsBadgeEnabled,  
    },
`;

const listLinkTitleTextDateAndImageQuery = groq`
    _type == 'listLinkTitleTextDateAndImage' => {
        _type,
        'title': title[$locale],
        'image': {
            'url': image.asset->url,
            'width': image.asset->metadata.dimensions.width,
            'height': image.asset->metadata.dimensions.height,
            'alt': image.alt[$locale],
        },
        'backgroundColor': backgroundColor.hex,
        items[]->{
            _id,
            'title': title[$locale],
            body,
            'backgroundColor': backgroundColor.hex,
            'link': {
                'text': linkText[$locale],
                'url': linkUrl,
            },
            publishDate,
        },
        'link': {
            'text': linkText[$locale],
            'url': linkUrl,
        },  
    },
`;

const listLinkTitleTextAndDateQuery = groq`  
    _type == 'listLinkTitleTextAndDate' => {
        _type,
        'itemsBackgroundColor':itemsBackgroundColor.hex,
        'backgroundColor': backgroundColor.hex,
        items[]-> {
            _id,
            publishDate,
            'title': title[$locale],
            body,
            'link': {
                'text': linkText[$locale],
                'url': linkUrl,
            },
        }
    },
`;

const listTextWithTitleQuery = groq`  
    _type == 'listTextWithTitle' => {
        _type,
        'backgroundColor': backgroundColor.hex,
        items[]-> {
            _id,
            'title': title[$locale],
            body,
        },
    },
`;

const listTitleAndImagesQuery = groq`  
    _type == 'listTitleAndImages' => {
        _type,
        'title': title[$locale],
        'backgroundColor': backgroundColor.hex,
        items[]-> {
            _id,
            'image': {
                'url': image.asset->url,
                'width': image.asset->metadata.dimensions.width,
                'height': image.asset->metadata.dimensions.height,
                'alt': image.alt[$locale],
            },
        },
    },
`;

const listTextWithTitleTextAndImageQuery = groq`  
    _type == 'listTextWithTitleTextAndImage' => {
        _type,
        'title': title[$locale],
        body,
        'image': {
            'url': image.asset->url,
            'width': image.asset->metadata.dimensions.width,
            'height': image.asset->metadata.dimensions.height,
            'alt': image.alt[$locale],
        },
        'backgroundColor': backgroundColor.hex,
        'badge': {
            'backgroundColor': badgeBackgroundColor.hex,
            'iconColor': badgeIconColor.hex,
        },
        items[]-> {
            _id,
            body,
        },
    },
`;

const listQuery = groq`
    ${listCollapsibleQuery}
    ${listCollapsibleWithTitleTextAndImageQuery}
    ${listImageTextAndTitleQuery}
    ${listInlineQuery}
    ${listLinkTitleTextDateAndImageQuery}
    ${listLinkTitleTextAndDateQuery}
    ${listTextWithTitleQuery}
    ${listTitleAndImagesQuery}
    ${listTextWithTitleTextAndImageQuery}
`;

export default listQuery;
