export type SearchQuery<T> = { [key in keyof Partial<T>]: keyof T };
