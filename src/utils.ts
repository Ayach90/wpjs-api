type APIRequest = {
  url: string;
  options?: RequestInit;
  auth?: boolean;
};

export async function apiRequest<T>({
  url,
  options = {},
}: APIRequest): Promise<T> {
  const response = await fetch(url, {
    ...options,
  });
  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
