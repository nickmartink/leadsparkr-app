export interface IFormData {
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