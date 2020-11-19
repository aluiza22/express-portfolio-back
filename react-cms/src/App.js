import './App.css';
import {gql, useQuery} from '@apollo/client';

const query = gql`
query {
  projects {
    image 
    title
    link
    description
    years
    skills
    group
    experience
    type
    _id
  }
}
`;
function App() {
  const {loading, data} = useQuery(query);
  if (loading) return <p>Loading projects...</p>
  console.log(data);

  return (
    <div className="App">
      {data.projects.map((project) => (
        <p>{project.title}</p>
      ))}
    </div>
  );
}

export default App;
