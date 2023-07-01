// use lo
import { compareAsc, compareDesc, addDays,subDays } from "date-fns" 
import "./style.css"
import { addResetButton, createProject, indexInit, messageReceiver } from "./utils"
export { createProject }

addResetButton();
indexInit();

document.addEventListener("DOMContentLoaded", function()
{
    window.addEventListener("message", function(e)
    {
        messageReceiver(e);
    })

})
//sort the projectList
// projectList.sort(compareDesc)

