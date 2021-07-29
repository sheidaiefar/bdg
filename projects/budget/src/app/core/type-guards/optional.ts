export type NICICOOptional<T> = T | undefined;

export function isPresent<T>(opt: NICICOOptional<T>): opt is T {
  return opt !== undefined;
}

export function toOptional<T>(val: T | null): NICICOOptional<T> {
  let newVal: NICICOOptional<T>;
  if (val === null) {
    newVal = undefined;
  } else {
    newVal = val;
  }
  return newVal;
}
