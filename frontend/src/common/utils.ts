export function ScrollTo(id: string) {
  document.getElementById(id.toLowerCase())?.scrollIntoView();
}

export function ToLocaleDateString(date: Date) {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
