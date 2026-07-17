export function match(param) {
    return postType[param] !== undefined;
}

export const postType = {
    loves: {
        section: "Things I love",
        blurb: "yea",
    },
};
