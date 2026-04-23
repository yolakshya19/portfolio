import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Data Engineering / Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">FastAPI</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">ETL Pipelines</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Azure Synapse</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">MongoDB/PostgreSQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
