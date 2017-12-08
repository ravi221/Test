import {cloneDeep} from 'lodash';

export default function copyProps(item: any) {
  return cloneDeep(item);
}
