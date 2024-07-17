const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/';

interface FetchConfig extends RequestInit {
  params?: Record<string, string>;
}

const api = {
  request: async (url: string, config: FetchConfig = {}): Promise<Response> => {
    const { params, ...fetchConfig } = config;
    const queryParams = params ? `?${new URLSearchParams(params)}` : '';
    const fullUrl = `${BASE_URL}${url}${queryParams}`;

    const response = await fetch(fullUrl, {
      ...fetchConfig,
      headers: {
        'Content-Type': 'application/json',
        ...fetchConfig.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  },

  get: (url: string, config: FetchConfig = {}) => 
    api.request(url, { ...config, method: 'GET' }),

  delete: (url: string, config: FetchConfig = {}) => 
    api.request(url, { ...config, method: 'DELETE' }),

  post: (url: string, body: unknown, config: FetchConfig = {}) => 
    api.request(url, { ...config, method: 'POST', body: JSON.stringify(body) }),

  patch: (url: string, body: unknown, config: FetchConfig = {}) => 
    api.request(url, { ...config, method: 'PATCH', body: JSON.stringify(body) }),

  put: (url: string, body: unknown, config: FetchConfig = {}) => 
    api.request(url, { ...config, method: 'PUT', body: JSON.stringify(body) }),
};

export default api;