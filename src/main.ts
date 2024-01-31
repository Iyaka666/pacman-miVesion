import './style.css'
import { handlerMove } from './handlers.ts';

const pacman = document.querySelector('.pacman');
const ghosts = Array.from(document.querySelectorAll('.ghost'));
const scenary = document.querySelector("article");
const QUANTITY_PILLS = 244;
const QUANTITY_BLOCKS = 4;  

addEventListener("DOMContentLoaded", () =>
  {
    for (let countPills = 0; countPills < QUANTITY_PILLS; countPills++)
    {
      const pill = document.createElement("section");
      pill.className = "pill";
      pill.appendChild(document.createTextNode(" "));
      scenary?.appendChild(pill);
    }
    for (let countBlocks = 0; countBlocks < QUANTITY_BLOCKS; countBlocks++) 
    {
      const block = document.createElement("section");
      block.className = "block";
      block.appendChild(document.createTextNode(" "));
      scenary?.appendChild(block);      
    }
  }
);

addEventListener("keydown", (event) => 
{
  handlerMove(
  event, 
  pacman as HTMLElement, 
  5);
}
);