import { groq } from "next-sanity";

const pagesQuery = groq`*[_type == 'page']{ uid }`;

export default pagesQuery;
