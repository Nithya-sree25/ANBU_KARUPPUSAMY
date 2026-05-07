import React from "react";
import "./ResearchGuidance.css";

function ResearchGuidance() {

  return (
    <section className="research-guidance">

      <h1 className="research-title">
        RESEARCH GUIDANCE
      </h1>
      {/* MOBILE VIEW */}
<div className="mobile-research-card">

  <h3>Ph.D Research Guidance</h3>

  <p>
    <strong>Supervisor ID:</strong>
    2840118
  </p>

  <p>
    <strong>Research Centre No:</strong>
    4730907
  </p>

  <p>
    <strong>Department:</strong>
    ECE / Excel Engineering College
  </p>

  <p>
    <strong>Role:</strong>
    Supervisor / Joint Supervisor
  </p>

  <p>
    <strong>Scholars Pursuing:</strong>
    9
  </p>

  <p>
    <strong>Degree Awarded:</strong>
    9
  </p>

  <p>
    <strong>Submitted Thesis:</strong>
    4
  </p>

</div>
      <div className="research-table-container">

        <table className="research-table">

          <thead>

            <tr>
              <th colSpan="5" className="main-heading">

                Anna University Supervisor ID No:2840118
                <br />

                Anna University Approved Research Centre No:4730907
                <br />

                Department / Centre : ECE /Excel Engineering College

              </th>
            </tr>

            <tr>

              <th rowSpan="2">Program</th>

              <th rowSpan="2">
                Rolls & Responsibilities
              </th>

              <th colSpan="3">
                Anna University Chennai
              </th>

            </tr>

            <tr>

              <th>
                No. of Scholars Pursuing
              </th>

              <th>
                No. of Scholars Awarded Degree
              </th>

              <th>
                No. of Scholars Submitted Thesis
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>
                <strong>Ph.D</strong>
              </td>

              <td>
                Supervisor/Join Supervisor
              </td>

              <td>
                <strong>9</strong>
              </td>

              <td>
                <strong>9</strong>
              </td>

              <td>
                <strong>4</strong>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default ResearchGuidance;