export function load({ params }) {
    console.log(params.type);
    let section = params.type === "blog" ? "Posts" : "Things I love";

    return {
        title: section,
        show_nav: true,
    };
}
