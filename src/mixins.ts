export function expand<T extends U, U>(first: T, second: U): T {
    Object.keys(second).forEach((id) => {
        (first as any)[id] = (second as any)[id];
    });
    return first;
}
