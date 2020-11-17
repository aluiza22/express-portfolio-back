const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { ProjectsQuery } = require('./query/ProjectsQuery');
const { CreateProjectMutation, UpdateProjectMutation, DeleteProjectMutation } = require('./mutation/ProjectsMutation');

const QueryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        projects: ProjectsQuery
    })
});

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createProject: CreateProjectMutation,
        deleteProject: DeleteProjectMutation,
        updateProject: UpdateProjectMutation,
    })
});

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });

module.exports = schema;