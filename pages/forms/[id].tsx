import { ArrowLeftIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline";
import { GetServerSideProps } from 'next';
import Link from "next/link";
import api from "../../api-store";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { IFormData } from "../../types";

type FormDataProps = {
    form: IFormData
}

const EditFormPage = ({ form }: FormDataProps) => {

    return (
        <Layout title="Leadsparkr | Forms">
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
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Setup an endpoint to receive form submissions.</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">Name</dt>
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
            </div>
        </Layout>
    );
};

// This also gets called at build time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await api(`/forms/${params.id}`);
    const form = await res.data;

    // Pass post data to the page via props
    return { props: { form } };
};


export default EditFormPage;