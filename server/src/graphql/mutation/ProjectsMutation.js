const { projectType } = require('../nodeTypes');
const {
  GraphQLString,
  GraphQLList,
  GraphQLID
} = require('graphql');
const ProjectService = require('../../services/ProjectService');

const CreateProjectMutation = {
    type: projectType,
    args: {
        image:  {type: GraphQLString},
        title:  {type: GraphQLString},
        link:  {type: GraphQLString},
        description:  {type: GraphQLString},
        years: {type: GraphQLList(GraphQLString)},
        skills: {type: GraphQLList(GraphQLString)},
        group: {type: GraphQLList(GraphQLString)},
        experience:  {type: GraphQLString},
        type:  {type: GraphQLString}
    },
    resolve: async (_, {image, title, link, description, years, skills, group, experience, type}) => {
        const projectService = new ProjectService();
        const newProject = await projectService.createProject({image, title, link, description, years, skills, group, experience, type});

        return newProject;
    }
};

const DeleteProjectMutation = {
    type: GraphQLID,
    args: {
      _id: { type: GraphQLID }
    },
    resolve: async (_, { _id }) => {
      const noteService = new ProjectService();
      const res = await noteService.deleteProject(_id);
  
      if (res.ok) {
        return _id;
      }
    }
};

const UpdateProjectMutation = {
    type: projectType,
    args: {
        _id: { type: GraphQLID },
        image:  {type: GraphQLString},
        title:  {type: GraphQLString},
        link:  {type: GraphQLString},
        description:  {type: GraphQLString},
        years: {type: GraphQLList(GraphQLString)},
        skills: {type: GraphQLList(GraphQLString)},
        group: {type: GraphQLList(GraphQLString)},
        experience:  {type: GraphQLString},
        type:  {type: GraphQLString}
    },
    resolve: async (_, { _id, image, title, link, description, years, skills, group, experience, type }) => {
      const projectService = new ProjectService();
      const updatedProject = await projectService.updateProject(_id, { content });
  
      return updatedProject;
    }
  };

module.exports = { CreateProjectMutation, UpdateProjectMutation, DeleteProjectMutation };