import { applications } from '@prisma/client';
import { prisma } from './prisma';

export const getAllApplications = async (
	page = 1,
	itemsPerPage = 100
): Promise<applications[]> => {
	const result = await prisma.applications.findMany({
		take: itemsPerPage,
		skip: (page - 1) * itemsPerPage,
	});
	console.log('page: ', page);
	console.log('itemsPerPage: ', itemsPerPage);
	return result;
};
