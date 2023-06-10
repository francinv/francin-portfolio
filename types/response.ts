export interface DataResponse<K> {
  data: K | undefined;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}
