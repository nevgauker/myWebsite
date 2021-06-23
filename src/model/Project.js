class Project {
    
    projectName;
    technologiesNames;
    descriptionText;
    image1;
    image2;
    technologies;
    github;
    link;

    constructor(projectName, technologiesNames, descriptionText, image1,image2,technologies,github,link) {
            this.projectName = projectName;
            this.technologiesNames = technologiesNames;
            this.descriptionText = descriptionText;
            this.image1 = image1;
            this.image2 = image2;
            this.technologies = technologies;
            this.github = github;
            this.link = link;


          }
}

export default Project;

