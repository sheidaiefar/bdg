import {AuthParams} from '@app/core/auth/model/authParams.model';
export abstract class AuthParamsInterface {
  get?: (() => AuthParams | null);
  set?: ((authParams: AuthParams) => void);
  remove?: ((params: []) => void);

}
