export function match(param) {
    return postType[param] !== undefined;
}

export const postType = {
    // loves: {
    //     section: "Things I love",
    //     description: "Articles about all types of things, big and small, that bring joy to my life.",
    // },
    posts: {
        section: "Posts",
        description: "",
    },
};

const allPosts = Object.entries(import.meta.glob("../posts/*/*"));
for (const [route, post] of allPosts) {
    let [type, identifier] = route.split("/").slice(-2);
    if (!postType[type]) continue;
    let metadata = (await post()).metadata;
    if (!metadata.published) continue;
    postType[type].posts ??= [];
    postType[type].posts.push({ route: identifier.split(".")[0], ...metadata });
}
