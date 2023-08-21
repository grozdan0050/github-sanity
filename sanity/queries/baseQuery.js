import { groq } from "next-sanity";

const textWithTitleQuery = groq`
    _type == 'textWithTitle' => {
        _type,
        'title': title[$locale],
        body,
        'backgroundColor': backgroundColor.hex,
    },
`;

const textWithTitleAndTableQuery = groq`
    _type == 'textWithTitleAndTable' => {
        _type,
        'title': title[$locale],
        body,
        'backgroundColor': backgroundColor.hex,
        'table': {
            'rows': table.rows,
            'oddRowBackgroundColor': oddRowBackgroundColor.hex,
            'evenRowBackgroundColor': evenRowBackgroundColor.hex,
        },
    },
`;

const baseQuery = groq`
    ${textWithTitleQuery}
    ${textWithTitleAndTableQuery}
`;

export default baseQuery;
