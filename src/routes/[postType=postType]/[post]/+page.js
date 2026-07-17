import { error } from "@sveltejs/kit";
import { postType } from "../../../params/postType.js";

export async function load({ params }) {
    try {
        let post = await import(`../../../posts/${params.postType}/${params.post}.svx`);

        let { section } = postType[params.postType];

        if (post.metadata.published) {
            return {
                ...post.metadata,
                type: "article",
                show_nav: false,
                section,
                Content: post.default,
                route: `/${params.postType}`,
            };
        }
    } catch (err) {
        console.log(err);
    }

    error(404, "Not Found");
}
