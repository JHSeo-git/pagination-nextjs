// FIXME: remove
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const baseUrl = 'https://jsonplaceholder.typicode.com';

type ClientOpeion = Omit<RequestInit, 'method'>;

async function request<TResponse>(url: string, config: RequestInit): Promise<TResponse> {
  const response = await fetch(url, config);

  const data = await response.json();

  return data;
}

const client = {
  get: <TResponse>(url: string, option?: ClientOpeion | undefined) => {
    return request<TResponse>(`${baseUrl}${url}`, {
      ...option,
      method: 'GET',
    });
  },
  post: <TResponse>(url: string, body: object, option?: ClientOpeion | undefined) => {
    return request<TResponse>(`${baseUrl}${url}`, {
      ...option,
      headers: {
        ...option?.headers,
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
      method: 'POST',
    });
  },
};

export default client;
