export function renderPage(page) {
    document.getElementById("content").innerHTML = page();
}
