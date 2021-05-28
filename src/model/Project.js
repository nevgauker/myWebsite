class Project {
    
    projectName;
    technologiesNames;
    descriptionText;
    image1;
    image2;
    technologies;

    constructor(projectName, technologiesNames, descriptionText, image1,image2,technologies) {
            this.projectName = projectName;
            this.technologiesNames = technologiesNames;
            this.descriptionText = descriptionText;
            this.image1 = image1;
            this.image2 = image2;
            this.technologies = technologies;

          }
}

export default Project;

