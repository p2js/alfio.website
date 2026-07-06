export function load({ url }) {
    let filter = url.searchParams.get("filter");

    return {
        show_nav: true,
        title: "Projects",
        description: "A selection of personal projects I've made.",
        filter,
    };
}
