import "./style.css"
import { createProject,addResetButton } from "./utils";
document.addEventListener("DOMContentLoaded", function()
{
    addResetButton();
    let projectList = JSON.parse(localStorage.getItem('projectList'));
    if (!projectList)
    {
        console.log("no list found")
        projectList=[];
    }
    else
    {
        console.log("list found")
        console.log(projectList);
    }
    let projectForm = document.querySelector("#addprojectform");
    projectForm.addEventListener("submit",function(event){
    event.preventDefault()
    //for project name
    let projectName = document.querySelector("input[name='project-name']").value
    
    let projectDate = document.querySelector("input[name='project-date']").value;
    let projectPriority = document.querySelector("input[name='priority']").value;
    let projectDesc = document.querySelector("textarea[name='project-description']").value;
    console.log(projectDate,projectName,projectPriority,projectDesc);
    
    let newProject = createProject(projectName,projectDate,projectPriority,projectDesc)
    projectList.push(newProject.plainProject());
    console.log("new project:")
    console.log(newProject.getName());
    console.log("new List")
    console.log(projectList)
    localStorage.setItem("projectList",JSON.stringify(projectList));
    })

   

    

})