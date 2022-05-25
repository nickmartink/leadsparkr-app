import { ArrowLeftIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import { GetServerSideProps } from 'next';
import Link from "next/link";
import api from "../../api-store";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { ISubmissionData } from "../../types";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

type SubmissionDataProps = {
    submission: ISubmissionData
}

const ViewSubmissionPage = ({ submission }: SubmissionDataProps) => {

    let data = JSON.parse(submission.data);
    console.log(data);
    return (
        <Layout title="Leadsparkr | Submissions">
            <div>
                <Link href="/submissions" passHref>
                    <Button><ArrowLeftIcon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300" aria-hidden="true"></ArrowLeftIcon> Back To Submissions</Button>
                </Link>
            </div>
            <div>
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">

                    <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                        <div>
                            <h1 className="text-2xl leading-6 font-medium text-gray-900">View Your Form Submission: {submission.form.name}</h1>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Form Name</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{submission.form.name}</dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Email Forward Address</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{submission.form.emailForwardAddress}</dd>
                            </div>
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Bot detection</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <div className="flex-shrink-0">
                                        {submission.form.botDetection &&
                                            <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                        }
                                        {!submission.form.botDetection &&
                                            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                                        }
                                    </div>
                                </dd>
                            </div>

                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Endpoint</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{submission.form.endpoint}</dd>
                            </div>

                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Date Submitted</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{submission.createdAt}</dd>
                            </div>

                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Data</dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <JSONPretty id="json-pretty" data={submission.data}></JSONPretty>
                                </dd>
                            </div>

                        </dl>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const res = await api(`/submissions/${params.id}`);
    const submission = await res.data;

    return { props: { submission } };
};


export default ViewSubmissionPage;