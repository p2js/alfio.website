import { redirect } from "@sveltejs/kit";

export function load({ params }) {
    redirect(308, `https://github.com/p2js/${params.repo}`);
}
