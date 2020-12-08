export enum ResponseStatus {
  Success = "Success",
  Failure = "Failure",
}

export const createSuccessResponse = ({
  message,
  data = {},
}: {
  message: string;
  data?: any;
}) => {
  const dataField = data ? { data } : {};
  return {
    message,
    status: ResponseStatus.Success,
    ...dataField,
  };
};

export const createFailureResponse = ({
  message,
  data = {},
}: {
  message: string;
  data?: any;
}) => {
  const dataField = data ? { data } : {};
  return {
    message,
    status: ResponseStatus.Failure,
    ...dataField,
  };
};
