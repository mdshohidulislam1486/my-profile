import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const ProjectsDetails = () => {
    const navigate = useNavigate()
    const {projectid} = useParams()

    const [myProjects, setMyprojects] = useState()
    const [currentProject, setCurrentProject] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/projects')
        .then(res => res.json())
        .then(data => setMyprojects(data))
    },[])

    useEffect(()=>{
        const newProject = myProjects?.find(myProject=> myProject?._id === projectid)
        setCurrentProject(newProject)
        
    },[myProjects])



    return (
        <div>
            <h2>{currentProject?.name} {projectid}</h2>

        </div>
    );
};

export default ProjectsDetails;