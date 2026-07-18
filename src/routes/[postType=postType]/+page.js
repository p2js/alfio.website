import { postType } from "../../params/postType.js";

export async function load({ url, params }) {
    let filter = url.searchParams.get("filter");
    let { section, description, posts } = postType[params.postType];

    return {
        title: section,
        postType: params.postType,
        show_nav: true,
        description,
        filter,
        posts,
    };
}
