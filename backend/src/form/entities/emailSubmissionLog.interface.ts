export interface EmailSubmissionLog {
  id?: string;
  code?: string;
  exceptionLog?: string;
  confirmationId?: string;
  formId?: string;
  formVersionId?: string;
  emailType?: string;
  submissionUpdatedAt?: Date;
}
