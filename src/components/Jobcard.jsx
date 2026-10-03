function JobCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>

      <p>Company: {props.company}</p>
      <p>Location: {props.location}</p>
      <p>Salary: {props.salary}</p>

      <button>View Job</button>
    </div>
  );
}

export default JobCard;