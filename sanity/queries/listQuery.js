import { groq } from "next-sanity";

const listCollapsibleQuery = groq`
    _type == 'listCollapsible' => {
        _type,
        'itemsBackgroundColor':itemsBackgroundColor.hex,
        'backgroundColor': backgroundColor.hex,
        items[]-> {
            _id,
            title,
            body,
        },
    },
`;

const listCollapsibleWithTitleTextAndImageQuery = groq`
    _type == 'listCollapsibleWithTitleTextAndImage' => {
        _type,
        title,
        body,
        'itemsBackgroundColor':itemsBackgroundColor.hex,
        'backgroundColor': backgroundColor.hex,
        items[]-> {
            _id,
            title,
            body,
        },
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
    },
`;

const listImageTextAndTitleQuery = groq`
    _type == 'listImageTextAndTitle' => {
        _type,
        title,
        'backgroundColor': backgroundColor.hex,
        items[]->{
            _id,
            title,
            body,
            'badge': {
                'iconColor': badgeIconColor.hex,
                'backgroundColor': badgeBackgroundColor.hex,
            },
            'image': {
                'url': image.asset->url,
                'width': image.asset->metadata.dimensions.width,
                'height': image.asset->metadata.dimensions.height,
                'alt': image.alt,
            },     
        },
        'link': {
            'text': linkText,
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
        title,
        'image': {
            'url': image.asset->url,
            'width': image.asset->metadata.dimensions.width,
            'height': image.asset->metadata.dimensions.height,
            'alt': image.alt,
        },
        'backgroundColor': backgroundColor.hex,
        items[]->{
            _id,
            title,
            body,
            'backgroundColor': backgroundColor.hex,
            'link': {
                'text': linkText,
                'url': linkUrl,
            },
            publishDate,
        },
        'link': {
            'text': linkText,
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
            title,
            body,
            'link': {
               'url': linkUrl,
                'text': linkText,
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
            title,
            body,
        },
    },
`;

const listTitleAndImagesQuery = groq`  
    _type == 'listTitleAndImages' => {
        _type,
        title,
        'backgroundColor': backgroundColor.hex,
        items[]-> {
            _id,
            'image': {
                'url': image.asset->url,
                'width': image.asset->metadata.dimensions.width,
                'height': image.asset->metadata.dimensions.height,
                'alt': image.alt,
            },
        },
    },
`;

const listTextWithTitleTextAndImageQuery = groq`  
    _type == 'listTextWithTitleTextAndImage' => {
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
