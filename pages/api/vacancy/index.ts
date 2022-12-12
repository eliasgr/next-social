import { getAllVacancies } from '../../../lib/vacancy';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(
	req: NextApiRequest,
	res: NextApiResponse
) {
	switch (req.method) {
		case 'GET': {
			const vacancies = await getAllVacancies();
			return res.send(vacancies);
		}
		case 'POST': {
		}
	}
}
