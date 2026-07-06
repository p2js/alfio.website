import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        let post = await import(`../../../../posts/${params.postType}/${params.post}.svx`);

        let section = params.postType === "blog" ? "Posts" : "Things I love";

        if (post.metadata.published) {
            return {
                ...post.metadata,
                type: "article",
                show_nav: false,
                section,
                Content: post.default,
            };
        }
    } catch (err) {
        console.log(err);
    }

    error(404, "Not Found");
}
