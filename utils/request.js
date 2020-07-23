import { ensureCamel } from 'utils/object';

export async function get(url) {
  const req = await fetch(url, { headers: { Accept: 'application/json' } });
  const res = await req.json();
  return ensureCamel(res);
}

export function getCategories() {
  return get('http://localhost:3001/categories');
}
