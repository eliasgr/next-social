import { vacancy } from '@prisma/client';
import { prisma } from './prisma';

export const getAllVacancies = async (): Promise<vacancy[]> => {
	const result = await prisma.vacancy.findMany();
	return result;
};
