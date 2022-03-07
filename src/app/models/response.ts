import {MetaModel} from "./meta";

export class ResponseModel<T> {
  code: number=0;
  meta: MetaModel=new MetaModel();
  data: T[] | T | null = null;
}
