const { projectType } = require('../nodeTypes');
const { GraphQLList } = require("graphql");
const ProjectService = require('../../services/ProjectService');

const ProjectsQuery = {
    type: GraphQLList(projectType),
    args: {},
    resolve: async () => {
        const projectService = new ProjectService();
        const projects = await projectService.getAllProjects();

        return projects;
    }
};

module.exports = { ProjectsQuery };