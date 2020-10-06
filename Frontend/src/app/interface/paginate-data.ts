export interface PaginatedData<T> {
  total: number;
  skip: number;
  data: T[];
}
