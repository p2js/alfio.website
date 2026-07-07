export function match(param) {
    return getDetails(param) !== undefined;
}

export function getDetails(postType) {
    switch (postType) {
        case "loves":
            return {
                section: "Things I love",
                blurb: "yea",
            };
    }
}
