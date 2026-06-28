import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> credentials
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc (Hons) in Computing</h4>
                <h5>Softwarica College of IT & E-Commerce (Affiliated with Coventry University, UK)</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Currently in Semester 2 of 6. Expected Graduation: September 2027. Recipient of a 15% Academic Scholarship in the first semester.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Scrum Master</h4>
                <h5>Student Management System Project</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Served as Scrum Master for a five-member Agile team. Coordinated sprint planning, facilitated tasks, and led core technical implementation including role-based authentication, CRUD database operations, and MVC design using Java Swing, JDBC, and MySQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>NVIDIA, Google for Education, Google Skillshop</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Getting Started with AI on Jetson Nano (NVIDIA, Jan 2026), Gemini Certified Educator (Google, Feb 2026 - Feb 2029), and Google Ads Apps Certification (Google Skillshop, Nov 2025 - Nov 2026).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
