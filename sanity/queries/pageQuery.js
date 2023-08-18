import { groq } from "next-sanity";
import baseQuery from "./baseQuery";
import heroQuery from "./heroQuery";
import linkQuery from "./linkQuery";
import listQuery from "./listQuery";

const pageQuery = (uid) => groq`
    *[_type == 'page' && uid == '${uid}'][0] { 
        uid,
        title,
        body[] {
            ${heroQuery}
            ${listQuery}
            ${linkQuery}
            ${baseQuery}
        },
    }    
`;

export default pageQuery;
