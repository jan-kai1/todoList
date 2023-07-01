import "./style.css"
import { createProject,addResetButton } from "./utils";
import { setProjectList,getProjectList } from "./storageutils";
document.addEventListener("DOMContentLoaded", function()
{
    addResetButton();
    // let projectList = getProjectList();
    // if (projectList == null)
    // {
    //     projectList = []
    // }
    let projectForm = document.querySelector("#addprojectform");
    projectForm.addEventListener("submit",function(event){
        event.preventDefault()
        //for project name
        let projectName = document.querySelector("input[name='project-name']").value
        
        let projectDate = document.querySelector("input[name='project-date']").value;
        let projectPriority = document.querySelector("input[name='priority']").value;
        let projectDesc = document.querySelector("textarea[name='project-description']").value;
        console.log(projectDate,projectName,projectPriority,projectDesc);
        
        let newProject = createProject(projectName,projectDate,projectPriority,projectDesc).plainProject()


        // projectList.push(newProject.plainProject());
        // console.log("new project:")
        // console.log(newProject.getName());
        // console.log("new List")
        // console.log(projectList)
        // setProjectList(projectList);



        //opens new window of index.html
        let indexWindow = open("index.html", '_blank');
        //postmessage(message,target origin)
        //targetorigin is the url that message is sent to "*" will match any url
        indexWindow.addEventListener("load",function()
        {
            indexWindow.postMessage(newProject,"*");
            console.log('message sent')
        })
       

    })

   

    

})