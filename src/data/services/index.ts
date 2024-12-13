import { massageServices } from './massage';
import { facialServices } from './facial';
import { bodyServices } from './body';
import { hairServices } from './hair';
import { makeupServices } from './makeup';
import { cosmetologyServices } from './cosmetology';
import type { Service } from '../../types';

// Combine all services and ensure no duplicates by ID
const allServices: Service[] = [
  ...massageServices,
  ...facialServices,
  ...bodyServices,
  ...hairServices,
  ...makeupServices,
  ...cosmetologyServices
];

// Export deduplicated services array
export const services = Array.from(new Map(allServices.map(service => [service.id, service])).values());