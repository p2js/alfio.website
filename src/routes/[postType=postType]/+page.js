import { postType } from "../../params/postType.js";

export function load({ params }) {
    let { section, blurb } = postType[params.postType];
    return {
        title: section,
        blurb,
        show_nav: true,
    };
}
