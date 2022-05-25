import Layout from '../../components/Layout';
import useSWR from 'swr';
import { fetcher } from '../../api-store';

const SubmissionsPage = () => {
    const { data, error } = useSWR('/submissions', fetcher);

    let isLoading = !data;
    if (error) return <div>Sorry, there was an error.</div>;

    return (
        <Layout title="Leadsparkr | Submissions">
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <h1 className="text-2xl font-semibold text-gray-900">Submissions</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    <div className="py-4">
                    </div>
                </div>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table id="submissions-table" className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Form Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Endpoint
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Date
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">View</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {!data || !data.length ?
                                        (
                                            <tr>
                                                <td colSpan={5} className="text-center"><p>{isLoading ? 'Loading...' : 'There is nothing to show here...'}</p></td>
                                            </tr>
                                        ) : data.map((submission) =>
                                            (
                                                <tr key={submission.id}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        {submission.form.name}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {submission.form.endpoint}</td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{submission.createdAt}</td>
                                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                        <a href={"/submissions/" + submission.id} className="view-submission text-indigo-600 hover:text-indigo-900">
                                                            View<span className="sr-only">, {submission.name}</span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </div >
        </Layout>
    );
};

export default SubmissionsPage;
