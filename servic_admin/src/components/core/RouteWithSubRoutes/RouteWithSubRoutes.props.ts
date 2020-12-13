import { RouteProps } from 'react-router-dom';

export type RouteWithSubRoutesProps = RouteProps & {
  path: string;
  routes?: Record<string, RouteWithSubRoutesProps>;
};
