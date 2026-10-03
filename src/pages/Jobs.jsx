import { useMemo, useState } from "react";
import "./jobs.css";

const companies = [
  {
    id: 1,
    company: "Amazon",
    role: "Frontend Developer",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "React", "DSA"],
    location: "Bangalore / Hyderabad",
    salary: "₹8–18 LPA",
    difficulty: "Hard",
    process: ["Online Assessment", "Technical Interview", "Bar Raiser / Managerial", "HR"],
    topics: ["JavaScript", "React", "HTML/CSS", "DSA", "Frontend System Design", "Web Performance"],
    coding: ["Two Sum", "Longest Substring", "Array & String problems", "Trees", "Graphs"],
    questions: ["Explain event bubbling and capturing.", "What is the React Virtual DOM?", "How would you optimize a slow web page?", "Explain closures and promises."],
    plan: ["Strengthen JavaScript fundamentals", "Practice DSA daily", "Build one production-style React project", "Study frontend system design", "Practice behavioral answers"]
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Software Engineer",
    category: "Full Stack",
    tech: ["C++", "Java", "Python", "JavaScript", "DSA"],
    location: "Hyderabad / Noida",
    salary: "₹10–25 LPA",
    difficulty: "Hard",
    process: ["Online Assessment", "Technical Rounds", "Behavioral / Hiring Manager"],
    topics: ["DSA", "OOP", "DBMS", "OS", "Computer Networks", "Projects"],
    coding: ["Arrays", "Linked Lists", "Trees", "Graphs", "Dynamic Programming"],
    questions: ["Explain OOP principles.", "How does a hash table work?", "Explain process vs thread.", "Walk through your best project."],
    plan: ["Revise DSA patterns", "Master CS fundamentals", "Prepare project deep-dives", "Solve timed coding sets", "Practice behavioral questions"]
  },
  {
    id: 3,
    company: "Google",
    role: "Software / Frontend Engineer",
    category: "Frontend",
    tech: ["JavaScript", "React", "TypeScript", "DSA"],
    location: "Bangalore / Hyderabad",
    salary: "₹12–30 LPA",
    difficulty: "Hard",
    process: ["Online Assessment", "Technical Interviews", "Googleyness / Behavioral"],
    topics: ["DSA", "JavaScript", "React", "System Design", "Algorithms"],
    coding: ["Binary Search", "Sliding Window", "Trees", "Graphs", "DP"],
    questions: ["Explain JavaScript closures.", "How does browser rendering work?", "Design a scalable frontend application.", "Solve a graph problem."],
    plan: ["Complete DSA patterns", "Practice medium/hard problems", "Revise browser fundamentals", "Study scalable UI architecture", "Mock interviews"]
  },
  {
    id: 4,
    company: "Adobe",
    role: "Frontend Developer",
    category: "Frontend",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    location: "Noida / Bangalore",
    salary: "₹8–20 LPA",
    difficulty: "Hard",
    process: ["Online Test", "Technical Interviews", "Managerial / HR"],
    topics: ["JavaScript", "React", "DSA", "UI Development", "Projects"],
    coding: ["Arrays", "Strings", "Hashing", "Recursion", "Trees"],
    questions: ["Difference between let, var and const?", "Explain React hooks.", "How do you make a responsive UI?", "Explain API integration."],
    plan: ["Master JS and React", "Practice DSA", "Improve UI projects", "Prepare resume projects", "Take mock tests"]
  },
  {
    id: 5,
    company: "TCS",
    role: "Software Developer",
    category: "Service-Based",
    tech: ["C++", "Java", "Python", "SQL"],
    location: "Pan India",
    salary: "₹3.5–9 LPA",
    difficulty: "Medium",
    process: ["Aptitude / Coding", "Technical Interview", "Managerial / HR"],
    topics: ["Aptitude", "Pseudocode", "DSA", "OOP", "DBMS", "SQL"],
    coding: ["Arrays", "Strings", "Sorting", "Searching", "Recursion"],
    questions: ["What is OOP?", "Difference between primary and foreign key?", "Explain normalization.", "Write a program to reverse a string."],
    plan: ["Practice aptitude", "Master pseudocode", "Revise OOP/DBMS", "Practice easy-medium DSA", "Prepare HR questions"]
  },
  {
    id: 6,
    company: "Infosys",
    role: "Full Stack Developer",
    category: "Full Stack",
    tech: ["JavaScript", "React", "Node.js", "SQL"],
    location: "Bangalore / Pune / Hyderabad",
    salary: "₹4–10 LPA",
    difficulty: "Medium",
    process: ["Online Assessment", "Technical", "HR"],
    topics: ["Aptitude", "JavaScript", "React", "Node.js", "SQL", "DSA"],
    coding: ["Arrays", "Strings", "Linked Lists", "SQL Queries"],
    questions: ["What is REST API?", "Explain React state.", "What is middleware in Node.js?", "Write SQL joins."],
    plan: ["Revise aptitude", "Build MERN project", "Practice SQL", "Practice DSA", "Mock interview"]
  },
  {
    id: 7,
    company: "Wipro",
    role: "Java / Full Stack Developer",
    category: "Java",
    tech: ["Java", "Spring", "SQL", "DSA"],
    location: "Pan India",
    salary: "₹4–10 LPA",
    difficulty: "Medium",
    process: ["Aptitude", "Coding", "Technical", "HR"],
    topics: ["Java", "OOP", "SQL", "DSA", "Aptitude"],
    coding: ["Strings", "Arrays", "HashMap", "Sorting", "Recursion"],
    questions: ["Interface vs abstract class?", "What is exception handling?", "Explain JVM.", "What are SQL joins?"],
    plan: ["Master Java OOP", "Practice coding", "Revise SQL", "Take aptitude mocks", "Prepare HR"]
  },
  {
    id: 8,
    company: "Accenture",
    role: "Associate Software Engineer",
    category: "Full Stack",
    tech: ["JavaScript", "Java", "Python", "SQL"],
    location: "Pan India",
    salary: "₹4.5–12 LPA",
    difficulty: "Medium",
    process: ["Cognitive / Technical Assessment", "Coding", "Communication", "Interview"],
    topics: ["Aptitude", "Logical Reasoning", "Coding", "SQL", "Communication"],
    coding: ["Arrays", "Strings", "Number problems", "Basic DSA"],
    questions: ["Explain your project.", "What is normalization?", "Difference between GET and POST?", "Explain inheritance."],
    plan: ["Aptitude practice", "Coding fundamentals", "Improve communication", "Revise CS basics", "Mock interview"]
  },
  {
    id: 9,
    company: "Cognizant",
    role: "Programmer Analyst",
    category: "Service-Based",
    tech: ["Java", "Python", "SQL", "Web"],
    location: "Chennai / Pune / Bangalore",
    salary: "₹4–10 LPA",
    difficulty: "Medium",
    process: ["Communication", "Aptitude", "Technical", "HR"],
    topics: ["Quantitative Aptitude", "Logical Reasoning", "Coding", "DBMS", "OOP"],
    coding: ["Arrays", "Strings", "Searching", "Sorting"],
    questions: ["Explain DBMS keys.", "What is polymorphism?", "Write a palindrome program.", "Explain HTTP methods."],
    plan: ["Daily aptitude", "Basic DSA", "CS fundamentals", "Communication practice", "Mock test"]
  },
  {
    id: 10,
    company: "Oracle",
    role: "Backend / Software Engineer",
    category: "Backend",
    tech: ["Java", "SQL", "Python", "DSA"],
    location: "Bangalore / Hyderabad",
    salary: "₹8–22 LPA",
    difficulty: "Hard",
    process: ["Coding Assessment", "Technical Rounds", "Managerial / HR"],
    topics: ["DSA", "Java", "DBMS", "SQL", "System Design"],
    coding: ["Trees", "Graphs", "DP", "Hashing", "SQL"],
    questions: ["Explain indexing.", "What is a transaction?", "Explain Java collections.", "Design a database for a job portal."],
    plan: ["Advanced DSA", "SQL and DBMS", "Java collections", "System design basics", "Mock interviews"]
  },
  {
    id: 11,
    company: "Salesforce",
    role: "Software Engineer",
    category: "Backend",
    tech: ["Java", "JavaScript", "SQL", "Apex"],
    location: "Hyderabad / Bangalore",
    salary: "₹8–20 LPA",
    difficulty: "Hard",
    process: ["Online Assessment", "Technical Rounds", "Behavioral"],
    topics: ["DSA", "OOP", "DBMS", "Java", "Cloud"],
    coding: ["Arrays", "Trees", "Graphs", "Hashing", "DP"],
    questions: ["Explain OOP.", "What is indexing?", "Explain REST APIs.", "Discuss your project architecture."],
    plan: ["DSA patterns", "Java/OOP", "SQL", "Cloud basics", "Behavioral preparation"]
  },
  {
    id: 12,
    company: "Walmart Global Tech",
    role: "Software Engineer",
    category: "Full Stack",
    tech: ["Java", "React", "Node.js", "SQL"],
    location: "Bangalore / Chennai",
    salary: "₹8–22 LPA",
    difficulty: "Hard",
    process: ["Coding", "Technical Interviews", "Managerial / HR"],
    topics: ["DSA", "System Design", "Java", "React", "SQL"],
    coding: ["Sliding Window", "Trees", "Graphs", "DP", "Arrays"],
    questions: ["Design a scalable service.", "Explain React rendering.", "What is database normalization?", "Solve a medium DSA problem."],
    plan: ["DSA", "Full-stack project", "System design", "SQL", "Mock interview"]
  },
  {
    id: 13,
    company: "HCLTech",
    role: "Software Developer",
    category: "Service-Based",
    tech: ["Java", "C++", "Python", "SQL"],
    location: "Noida / Bangalore / Chennai",
    salary: "₹4–10 LPA",
    difficulty: "Medium",
    process: ["Aptitude", "Coding", "Technical", "HR"],
    topics: ["Aptitude", "OOP", "DBMS", "OS", "Networking"],
    coding: ["Arrays", "Strings", "Sorting", "Basic DSA"],
    questions: ["Explain OSI model.", "What is polymorphism?", "Explain SQL joins.", "What is a process?"],
    plan: ["Aptitude", "Core CS", "DSA", "Communication", "Mock interview"]
  },
  {
    id: 14,
    company: "IBM",
    role: "Python / AI Developer",
    category: "AI/ML",
    tech: ["Python", "ML", "SQL", "Cloud"],
    location: "Bangalore / Pune",
    salary: "₹5–16 LPA",
    difficulty: "Medium",
    process: ["Assessment", "Technical", "Managerial / HR"],
    topics: ["Python", "Machine Learning", "Statistics", "SQL", "Projects"],
    coding: ["Python strings", "Arrays", "Data processing", "ML coding"],
    questions: ["Explain supervised learning.", "What is overfitting?", "Explain Python data structures.", "Describe your ML project."],
    plan: ["Python", "ML fundamentals", "SQL", "Build ML project", "Interview practice"]
  },
  {
    id: 15,
    company: "Deloitte",
    role: "Technology Analyst",
    category: "Backend",
    tech: ["Java", "Python", "SQL", "Cloud"],
    location: "Bangalore / Hyderabad / Pune",
    salary: "₹5–14 LPA",
    difficulty: "Medium",
    process: ["Assessment", "Technical", "HR"],
    topics: ["Aptitude", "SQL", "OOP", "Cloud", "Projects"],
    coding: ["Arrays", "Strings", "SQL", "Basic DSA"],
    questions: ["Explain cloud computing.", "What are SQL joins?", "Explain inheritance.", "Describe your project."],
    plan: ["Aptitude", "SQL", "Core CS", "Project explanation", "Mock interview"]
  },
  {
    id: 16,
    company: "Capgemini",
    role: "Software Engineer",
    category: "Service-Based",
    tech: ["Java", "Python", "SQL", "Web"],
    location: "Pan India",
    salary: "₹4–9 LPA",
    difficulty: "Medium",
    process: ["Aptitude", "Coding", "Technical", "HR"],
    topics: ["Aptitude", "Pseudocode", "OOP", "DBMS", "Web"],
    coding: ["Arrays", "Strings", "Searching", "Sorting"],
    questions: ["Explain OOP concepts.", "What is normalization?", "Difference between HTTP and HTTPS?", "Write a sorting program."],
    plan: ["Aptitude", "Pseudocode", "DSA", "Technical MCQs", "HR preparation"]
  }
];

const roles = ["All Roles", "Frontend", "Backend", "Full Stack", "Java", "AI/ML", "Service-Based"];

function Jobs() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All Roles");
  const [difficulty, setDifficulty] = useState("All");
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");

  const filteredJobs = useMemo(() => {
    const query = search.toLowerCase().trim();
    return companies.filter((job) => {
      const matchesSearch =
        !query ||
        [job.company, job.role, job.category, job.location, ...job.tech]
          .join(" ")
          .toLowerCase()
          .includes(query);
      const matchesRole = role === "All Roles" || job.category === role;
      const matchesDifficulty = difficulty === "All" || job.difficulty === difficulty;
      return matchesSearch && matchesRole && matchesDifficulty;
    });
  }, [search, role, difficulty]);

  const openPreparation = (job) => {
    setSelected(job);
    setActiveTab("overview");
  };

  return (
    <div className="jobs-page">
      <div className="jobs-header">
        <span className="jobs-eyebrow">PLACEMENT PREPARATION HUB</span>
        <h1>Jobs & Company Preparation 🚀</h1>
        <p>Find jobs, choose your developer role, and prepare company-wise from one dashboard.</p>
      </div>

      <div className="job-stats">
        <div><strong>{companies.length}+</strong><span>Companies</span></div>
        <div><strong>7</strong><span>Career Tracks</span></div>
        <div><strong>100+</strong><span>Topics</span></div>
        <div><strong>30</strong><span>Day Roadmaps</span></div>
      </div>

      <div className="filters-panel">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search company, role, skill, technology..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="filter-row">
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            {roles.map((item) => <option key={item}>{item}</option>)}
          </select>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option>All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <button className="clear-btn" onClick={() => { setSearch(""); setRole("All Roles"); setDifficulty("All"); }}>
            Reset Filters
          </button>
        </div>
      </div>

      <div className="track-chips">
        {roles.map((item) => (
          <button key={item} className={role === item ? "active" : ""} onClick={() => setRole(item)}>
            {item}
          </button>
        ))}
      </div>

      <div className="results-line">
        <span>{filteredJobs.length} opportunities found</span>
        <span>Click <b>Prepare</b> for the complete company roadmap</span>
      </div>

      <div className="jobs-container">
        {filteredJobs.length > 0 ? filteredJobs.map((job) => (
          <article className="job-card" key={job.id}>
            <div className="card-top">
              <div className="company-logo">{job.company.charAt(0)}</div>
              <span className={`difficulty ${job.difficulty.toLowerCase()}`}>{job.difficulty}</span>
            </div>
            <h2>{job.role}</h2>
            <h3>{job.company}</h3>
            <p className="job-meta">📍 {job.location}</p>
            <p className="salary">💰 {job.salary}</p>
            <div className="tech-list">
              {job.tech.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
            <div className="card-actions">
              <button className="prepare-btn" onClick={() => openPreparation(job)}>Prepare →</button>
              <button className="save-btn" onClick={() => alert(`${job.company} saved to your list!`)}>♡ Save</button>
            </div>
          </article>
        )) : (
          <div className="no-jobs">
            <div className="no-jobs-icon">🔎</div>
            <h2>No matching opportunities</h2>
            <p>Try another company, role, technology, or reset the filters.</p>
          </div>
        )}
      </div>

      {selected && (
        <div className="prep-overlay" onClick={() => setSelected(null)}>
          <div className="prep-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelected(null)}>×</button>
            <div className="prep-hero">
              <div className="company-logo large">{selected.company.charAt(0)}</div>
              <div>
                <span className="jobs-eyebrow">{selected.category} TRACK</span>
                <h2>{selected.company}</h2>
                <p>{selected.role} • {selected.location} • {selected.salary}</p>
              </div>
            </div>

            <div className="prep-tabs">
              {["overview", "topics", "coding", "interview", "roadmap"].map((tab) => (
                <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>
                  {tab === "overview" ? "Overview" : tab === "topics" ? "Topics" : tab === "coding" ? "Coding" : tab === "interview" ? "Interview" : "30-Day Roadmap"}
                </button>
              ))}
            </div>

            {activeTab === "overview" && (
              <div className="prep-content">
                <div className="prep-grid">
                  <section><h3>🎯 Hiring Process</h3><ul>{selected.process.map(x => <li key={x}>{x}</li>)}</ul></section>
                  <section><h3>🧰 Core Skills</h3><div className="tech-list">{selected.tech.map(x => <span key={x}>{x}</span>)}</div></section>
                  <section><h3>📚 Preparation Focus</h3><p>Prepare the role-specific fundamentals first, then combine DSA, projects, technical interviews and behavioral preparation.</p></section>
                  <section><h3>📈 Difficulty</h3><p><b>{selected.difficulty}</b> — use timed practice and mock interviews as you progress.</p></section>
                </div>
              </div>
            )}

            {activeTab === "topics" && (
              <div className="prep-content">
                <h3>📚 Important Topics</h3>
                <div className="topic-grid">{selected.topics.map((x, i) => <div className="topic-item" key={x}><b>0{i + 1}</b><span>{x}</span></div>)}</div>
              </div>
            )}

            {activeTab === "coding" && (
              <div className="prep-content">
                <h3>💻 Coding Practice</h3>
                <p>Practice these patterns before company-specific mock tests.</p>
                <div className="question-list">{selected.coding.map((x, i) => <div key={x}><span>{i + 1}</span>{x}</div>)}</div>
              </div>
            )}

            {activeTab === "interview" && (
              <div className="prep-content">
                <h3>🎤 Interview Questions</h3>
                <div className="question-list">{selected.questions.map((x, i) => <div key={x}><span>{i + 1}</span>{x}</div>)}</div>
              </div>
            )}

            {activeTab === "roadmap" && (
              <div className="prep-content">
                <h3>📅 30-Day Preparation Roadmap</h3>
                <div className="roadmap">
                  {selected.plan.map((x, i) => (
                    <div className="roadmap-item" key={x}>
                      <div className="day">WEEK {i + 1}</div>
                      <div><b>{x}</b><p>Practice consistently, make notes, and finish a small set of timed questions.</p></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="prep-footer">
              <button onClick={() => alert("Preparation checklist started! Keep practicing daily.")}>Start Preparation 🚀</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Jobs;
