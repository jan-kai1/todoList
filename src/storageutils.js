//retrieves project list and returns if exists, else return null
export {getProjectList,setProjectList}
function getProjectList()
{
    let projectList = JSON.parse(localStorage.getItem("projectList"))
    //return projectList if exist else null if invalid
    if (projectList && projectList.length != 0)
    {
        console.log("List found")
        return projectList;
    }
    else
    {
        console.log("list not found")
        return null;
    }
}

function setProjectList(list)
{
    localStorage.setItem("projectList", JSON.stringify(list));
    console.log("list set")
}