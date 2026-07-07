import { getDetails } from "../../params/postType.js";

export function load({ params }) {
    let { section, blurb } = getDetails(params.postType);
    return {
        title: section,
        blurb,
        show_nav: true,
    };
}
