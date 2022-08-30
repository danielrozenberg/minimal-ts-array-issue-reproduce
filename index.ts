export function doSomething(obj: object | object[]): boolean {
  if (Array.isArray(obj)) {
    return obj.every((o) => doSomething(o));
  }
  return true;
}
