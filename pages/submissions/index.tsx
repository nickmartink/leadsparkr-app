import Layout from '../../components/Layout';
import useSWR from 'swr';
import { fetcher } from '../../api-store';
import SubmissionsTable from '../../components/Submissions/SubmissionsTable';

const SubmissionsPage = () => {
    const { data, error } = useSWR('/submissions', fetcher);

    let isLoading = !data;
    if (error) return <div>Sorry, there was an error.</div>;

    return (
        <Layout title="Leadsparkr | Submissions">
            <div className="flex justify-between">
                <h1>All Submissions</h1>
            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <SubmissionsTable data={data} isLoading={isLoading}></SubmissionsTable>
                    </div>
                </div >
            </div >
        </Layout>
    );
};

export default SubmissionsPage;
