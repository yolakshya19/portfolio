import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const closeModal = () => {
    setToggleState(0);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Projects</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-brain services__icon"></i>
            <h3 className="services__title">
              RAG Accountability <br /> System
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
            onClick={closeModal}
          >
            <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                RAG Accountability System
              </h3>
              <p className="services__modal-description">
                Built a stateful RAG pipeline with ingestion + retrieval flows,
                using FAISS vector search, SQLite metadata, and Mistral LLM via
                Ollama to generate context-aware structured responses.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Ingestion Pipeline: Document processing and chunking for
                    vector embedding.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Vector Search: FAISS-based semantic similarity search over
                    embeddings.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Metadata Tracking: SQLite storage for document metadata and
                    retrieval context.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    LLM Integration: Mistral model via Ollama for context-aware
                    response generation.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Structured Output: JSON-formatted responses with source
                    accountability.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-chart-pie-alt services__icon"></i>
            <h3 className="services__title">
              Reddit Sentiment <br /> Pipeline 
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
            onClick={closeModal}
          >
            <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">
                Reddit Sentiment Pipeline
              </h3>
              <p className="services__modal-description">
                Developed a FastAPI-based pipeline to ingest Reddit data,
                perform NLP preprocessing, and classify sentiment using
                DistilBERT with aggregated scoring outputs.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Data Ingestion: Reddit API integration for real-time data
                    collection.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    NLP Preprocessing: Text cleaning, tokenization, and
                    normalization.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Sentiment Model: DistilBERT-based classification with
                    confidence scores.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Aggregation Engine: Combined scoring for overall sentiment
                    analysis.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    REST API: FastAPI endpoints for pipeline access and
                    monitoring.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-heart services__icon"></i>
            <h3 className="services__title">
              FitTrack <br /> (MERN App)
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
            onClick={closeModal}
          >
            <div className="services__modal-content" onClick={(e) => e.stopPropagation()}>
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>

              <h3 className="services__modal-title">FitTrack (MERN App)</h3>
              <p className="services__modal-description">
                Full-stack fitness tracking system with MongoDB, Express, React,
                and Node, including dashboard analytics, authentication, and
                API-based data handling.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    User Authentication: JWT-based secure login and registration
                    system.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Dashboard Analytics: Visual charts and progress tracking for
                    fitness metrics.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Data Management: MongoDB schemas for workouts, nutrition,
                    and user stats.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    RESTful API: Node.js/Express backend with CRUD operations.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Responsive UI: React frontend with modern design and mobile
                    support.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
