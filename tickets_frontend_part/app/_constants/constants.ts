export const CONST = {
  apiHost: 'http://localhost:3001',
  apiUrl(url: string): string {
    return `${this.apiHost}${url}`;
  }
};
