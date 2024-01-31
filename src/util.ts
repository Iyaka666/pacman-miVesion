/*#######################################################################
It function input a string that contain a number and measurement 
it make is to remove its measurement
*/

export function rmMeasurement( numberString:string, withNum: boolean = false) 
: string | number
{
  if(numberString === " " || numberString === '') return withNum ? 0:'0';
  
  let result = '';
  
  for (const char of numberString) {
    if (!isNaN(parseInt(char))) result += char;
    else break;
  }
  
  return withNum ? parseInt(result): result;
}
//#######################################################################