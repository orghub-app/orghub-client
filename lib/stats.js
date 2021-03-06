import axios from 'axios';
import { authHeader } from './auth';
import { baseUrl } from '../config';

export async function getStats(organization, token) {
  try {
    const headers = authHeader(token);
    const { data } = await axios.get(`${baseUrl}/stats/${organization}`, { headers })
    return data;
  } catch (err) {
    return {
      error: 'Could not load stats'
    };
  }
}