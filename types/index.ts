export interface IFormData {
    id?: number,
    name: string,
    emailForwardAddress: string,
    botDetection: boolean,
    notificationPreference: string,
    endpoint?: string
};

export interface ISubmissionData {
    form: IFormData,
    createdAt: string,
    data: string
};

export interface IFormResponseData {
    data: {
        id: number,
        name: string,
        endpoint: string,
    }
    success: boolean
}

export interface SubmissionsTableProps {
    data: Array<ISubmissionData>,
    isLoading?: boolean
}