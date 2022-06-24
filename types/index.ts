export interface IFormData {
    id?: number,
    name: string,
    emailForwardAddress: string,
    botDetection: boolean,
    notificationPreference: string,
    endpoint?: string
};

export interface ISubmissionData {
    id?: string,
    form: IFormData,
    createdAt: string,
    user_ip?: any,
    data: string,
    request: string
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