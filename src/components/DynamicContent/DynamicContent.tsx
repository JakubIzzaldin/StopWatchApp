import {ReactElement, ReactNode} from 'react';

export type RenderContent<TData> = (data: TData) => ReactNode;

export type DynamicContentProps<TData> = {
  data?: TData;
  isLoading: boolean;
  isError: boolean;
  renderContent: RenderContent<TData>;
  loadingElement?: ReactNode;
  errorElement?: ReactNode;
};
export const DynamicContent = <TData,>({
  isLoading,
  isError,
  data,
  renderContent,
  loadingElement,
  errorElement,
}: DynamicContentProps<TData>): ReactElement => {
  if (isLoading) {
    if (loadingElement !== undefined) return <>{loadingElement}</>;
    return <p>Loading...</p>;
  }
  if (isError) {
    if (errorElement) return <>{errorElement}</>;
    return <p>Error...</p>;
  }

  const dataEmpty = data === undefined || (data && Object.keys(data).length === 0);

  if (dataEmpty) return <p>no data</p>;

  const content = renderContent(data);
  return <>{content}</>;
};
