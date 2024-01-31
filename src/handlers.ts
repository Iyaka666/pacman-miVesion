import { rmMeasurement } from './util.ts';
//#
export function handlerMove(
  event: KeyboardEvent, 
  element: HTMLElement,
  factVelocity: number = 1,
  limits?: {top: number, left: number, right: number, bottom: number},
  measurement : string = 'px'
  ) : void
  {
  let newTop = 0;
  let newLeft = 0;
  const style = element.style;
  const isAbsoluteOrFixed = (style : CSSStyleDeclaration) : boolean => 
    style.position === "absolute" || style.position === "fixed";

  if(style.position === "static" || style.position === "initial"){
    throw new Error("The value in property position should be static or initial");
  }

  switch (event.code) 
  {    
    case "ArrowUp":
      {
      newTop = rmMeasurement(style.top, true) as number;
      newTop = isAbsoluteOrFixed(style) ? newTop + factVelocity : newTop - factVelocity;
      //newTop = newTop < 0 ? 0 : newTop;
      style.top = newTop.toString() + measurement;
      }        
      break;
    
    case "ArrowRight":
      {
      newLeft = rmMeasurement(style.left, true) as number;
      newLeft += factVelocity;
      style.left = newLeft.toString() + measurement;
      } 
      break;
    
    case "ArrowDown":
      {
      newTop = rmMeasurement(style.top, true) as number;
      newTop = isAbsoluteOrFixed(style) ? newTop - factVelocity : newTop + factVelocity;
      style.top = newTop.toString() + measurement;
      }
      break;
    
    case "ArrowLeft":
      {
      newLeft = rmMeasurement(style.left, true) as number;
      newLeft -= factVelocity;
      style.left = newLeft.toString() + measurement;
      }
      break;
  }
}