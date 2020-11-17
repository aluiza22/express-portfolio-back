const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");

const projectType = new GraphQLObjectType({
    name: 'Project',
    fields: {
        _id: {type: GraphQLID},
        image:  {type: GraphQLString},
        title:  {type: GraphQLString},
        link:  {type: GraphQLString},
        description:  {type: GraphQLString},
        years: {type: GraphQLList(GraphQLString)},
        skills: {type: GraphQLList(GraphQLString)},
        group: {type: GraphQLList(GraphQLString)},
        experience:  {type: GraphQLString},
        type:  {type: GraphQLString},
    }
});

module.exports = { projectType };