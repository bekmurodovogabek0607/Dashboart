import axios from 'axios'
import { Https } from '../Https';

export const instance = axios.create({
    baseURL: Https,
    timeout: 10000,
  
  });