import type { Metadata } from "next";
import { pipeline } from "@/data/site";

export const metadata: Metadata = { title: "R&D Pipeline" };

export default function PipelinePage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Science</p>
        <h1>Our R&D Pipeline</h1>
        <p className="lead">
          Research and development is the backbone of our healthcare innovation. Explore marketed
          specialty care and investigational programmes — with urology as a lead franchise.
        </p>
        <div style={{ overflowX: "auto", marginTop: 28 }}>
          <table className="table">
            <thead>
              <tr>
                <th>Programme</th>
                <th>Area</th>
                <th>Stage</th>
                <th>Focus</th>
              </tr>
            </thead>
            <tbody>
              {pipeline.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{row.area}</td>
                  <td>
                    <span className="pill">{row.stage}</span>
                  </td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted" style={{ marginTop: 16 }}>
          Pipeline information is current as of publication and may change. Investigational
          programmes are not approved for the uses under study.
        </p>
      </div>
    </section>
  );
}
