import {StackScreenProps} from '@react-navigation/stack';
import {ParamList} from 'types/routes';

import ROUTES from 'constants/routes';

export type LoginProps = StackScreenProps<ParamList, ROUTES.AUTH_LOGIN>;

export type LoginGeneratedProps = {};
