import { helper } from '@ember/component/helper';

export default helper(function fullCaps(value) {
  return value.toString().toUpperCase();
});
