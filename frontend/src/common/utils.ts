export function ScrollTo(id: string) {
  document.getElementById(id.toLowerCase())?.scrollIntoView();
}
