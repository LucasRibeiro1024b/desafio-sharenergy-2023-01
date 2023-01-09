/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-whitespace-before-property */

/**
 * * Apply a mask to a string according to the pattern.
   @param value
 *
   @param pattern "#" is wildcard
 *
   *
     E.g.:
 *
    * value: 11233334444
 *
    * pattern: (##) # #### -####
 *
    * return: (11) 2 3333-4444
  *
 */


export function maskString (value: string, pattern: string) {
  if (!value || !pattern) return '--';
 let i = 0;
  const v = value. toString();
  return pattern. replace(/#/g,(_) => v[i++]).replace(/undefined/g,'');
}
// Usage
// 1.
const maskPhoneDDI = (value: string) =>{
  return maskString(value, '(##) #####- ####'); // +55 (61) 99999-9999
}// 2.
const maskCPF = (value: string) => {
 return  maskString(value, '###.###.###-##'); // 088.000.000-00
}
// 3.
const maskCNPJ = (value: string) =>{
  return maskString(value, '##.###.###/####-##')// 88.000.998/0001-00
}
 // ...


 // eslint-disable-next-line import/no-anonymous-default-export
 export default { maskPhoneDDI,  maskCNPJ, maskCPF }
