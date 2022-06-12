import { ArrowLeftIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import { GetServerSideProps } from 'next';
import Link from "next/link";
import api from "../../api-store";
import Button from "../../components/Button";
import { IFormData } from "../../types";
import useSWR from 'swr';
import { fetcher } from '../../api-store';
import FormSubmissionsTable from "../../components/Submissions/FormSubmissionsTable";

type FormDataProps = {
    form: IFormData
}

const ViewFormPage = ({ form }: FormDataProps) => {

    const { data: submissions, error } = useSWR('/submissions?formId=' + form.id, fetcher);

    return (
        <>
            <div>
                <Link href="/forms" passHref>
                    <Button><ArrowLeftIcon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true"></ArrowLeftIcon> Back To Forms</Button>
                </Link>
            </div>
            <div>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">

                    <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                        <div>
                            <h1 className="text-2xl leading-6 font-medium text-gray-900">View Your Form: {form.name}</h1>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">This enables an endpoint to receive form submissions.</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Form Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{form.name}</dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email Forward Address</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{form.emailForwardAddress}</dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Bot detection</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <div className="flex-shrink-0">
                                        {form.botDetection &&
                                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                        }
                                        {!form.botDetection &&
                                            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                                        }
                                    </div>
                                </dd>
                            </div>

                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Endpoint</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{form.endpoint}</dd>
                            </div>

                        </dl>
                    </div>
                </div>

                <div>
                    <h2>Form Submissions</h2>
                    <div className="pt-8">
                        {submissions && error}
                        {submissions && <FormSubmissionsTable data={submissions}></FormSubmissionsTable>}
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const res = await api(`/forms/${params.id}`);
    const form = await res.data;

    return { props: { form } };
};


export default ViewFormPage;