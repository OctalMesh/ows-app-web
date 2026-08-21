const DEFAULT_ERROR_STATUS_CODE = 500;

interface HttpLikeError {
  statusCode?: unknown;
  status?: unknown;
}

export function getErrorStatusCode(error: Error): number {
  const candidate = error as HttpLikeError;
  const statusCode = candidate.statusCode ?? candidate.status;

  return typeof statusCode === "number"
    ? statusCode
    : DEFAULT_ERROR_STATUS_CODE;
}
