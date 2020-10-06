export interface Option<T = unknown> {
  label: string;
  selected: boolean;
  value: T;
}
