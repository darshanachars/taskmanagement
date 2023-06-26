import { render } from "@testing-library/react";
import React from "react";


let users={uId:1,uName:"Darshan",uTitle:"presentation",uDescription:"make the presentation today",uStatus:"pending"}
class Taskcomponent extends React.Component{
    


render(){
    console.log("hello boy");
    return(
        <div>
        <h1 className="text-center">Task Management</h1>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Status</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{users.uId}</td>
                </tr>
                <tr>
                    <td>{users.uName}</td>
                </tr>
                <tr>
                    <td>{users.uTitleitle}</td>
                </tr>
                <tr>
                    <td>{users.uDescription}</td>
                </tr>
                <tr>
                    <td>{users.uStatus}</td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}
}
export default new Taskcomponent