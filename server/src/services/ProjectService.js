const MongoDbRepo = require('../repository/mongoDbRepository');

class ProjectService {
  constructor() {
    this.ProjectRepository = new MongoDbRepo('Projects');
  }

  getAllProjects() {
    return this.ProjectRepository.getAll();
  }

  updateProject(_id, opt) {
    return this.ProjectRepository.updateOne(_id, opt);
  }

  deleteProject(_id) {
    return this.ProjectRepository.deleteOne(_id);
  }

  createProject(opt) {
    return this.ProjectRepository.create(opt);
  }
}

module.exports = ProjectService;