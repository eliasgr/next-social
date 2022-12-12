import React from 'react';
import useSWR, { useSWRConfig } from 'swr';

const fetcher = async (url: string) => {
	const response = await fetch(url);
	return response.json();
};
const List = () => {
	const { mutate } = useSWRConfig();
	const { data } = useSWR('/api/vacancy', fetcher);
	return <div>index</div>;
};

export default List;
