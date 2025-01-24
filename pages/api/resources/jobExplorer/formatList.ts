// Take a list of strings and format them as a comma-separated list with an "and" before the last item.
export function formatList(strings: string[]): string {
  if (strings.length === 0) {
    return "";
  } else if (strings.length === 1) {
    return strings[0];
  } else {
    const allButLast = strings.slice(0, -1).join(", ");
    const last = strings[strings.length - 1];
    return `${allButLast}, and ${last}`;
  }
}
