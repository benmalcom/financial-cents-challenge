import { API_BASE_URL } from '@/helpers/constants';

export const fetchUsers = async (page) => {
  const body = await fetch(`${API_BASE_URL}/users?page=${page}`);
  return await body.json();
};
