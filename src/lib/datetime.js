export function format(date) {
    return date.split("T")[0].replaceAll("-", "/");
}
