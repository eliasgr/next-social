import { getAllVacancies } from '../../../lib/vacancy';
import { NextApiRequest, NextApiResponse } from 'next';
import { getAllApplications } from '../../../lib/application';
import { useRouter } from 'next/router';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	let page = parseInt(req.query.page as string);
	let itemsPerPage = parseInt(req.query.itemsPerPage as string);
	switch (req.method) {
		case 'GET': {
			const applications = await getAllApplications(page, itemsPerPage);
			console.log('page: ', page);
			console.log('itemsPerPage: ', itemsPerPage);
			return res.send(applications);
		}
		case 'POST': {
		}
	}
}
