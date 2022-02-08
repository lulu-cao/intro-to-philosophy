import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav.js";
import whatIsPhil from "../files/readings-what-is-philosophy.pdf";
import whatIsReason from "../files/readings-what-is-reason.pdf";
import sciInquiry from "../files/readings-scientific-inquiry.pdf";
import descartes from "../files/readings-meditations-on-first-philosophy.pdf";
import locke from "../files/readings-an-essay-concerning-human-understanding-locke.pdf";
import hume from "../files/readings-readings-an-essay-concerning-human-understanding-hume.pdf";
import kant from "../files/readings-critique-of-pure-reason.pdf";
import nagarjuna from "../files/readings-examination-of-the-senses.pdf";
import Wrapper from "./Wrapper";
import ReadingsCard from "./ReadingsCard";
import readings from "../readings.json";

function Home() {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>Reading List</h1>
        <p>
          <strong>Description:</strong> First two modules' readings are provided
          below. Please purchase your textbook as soon as possible.
        </p>
        <p>
          <a href={whatIsPhil}>“What Is Philosophy?”</a> by Monroe C. Beardsley
          and Elizabeth Lane Beardsley
        </p>
        <p>
          <a href={whatIsReason}>“What Is Reason?”</a> by Steven M. Cahn,
          Patricia Kitcher, and George Sher{" "}
        </p>
        <p>
          <a href={sciInquiry}>“Scientific Inquiry”</a> by Carl G. Hempel{" "}
        </p>
        <p>
          <a href={descartes}>
            Excerpts from <i>Meditations on First Philosophy</i>
          </a>{" "}
          by René Descartes
        </p>
        <p>
          <a href={locke}>
            Excerpts from <i>An Essay Concerning Human Understanding</i>
          </a>{" "}
          by John Locke
        </p>
        <p>
          <a href={hume}>
            Excerpts from <i>An Enquiry Concerning Human Understanding</i>
          </a>{" "}
          by David Hume
        </p>
        <p>
          <a href={kant}>
            Excerpts from <i>Critique of Pure Reason</i>
          </a>{" "}
          by Immanuel Kant
        </p>
        <p>
          <a href={nagarjuna}>“Examination of the Senses”</a> by Nāgārjuna
        </p>
      </div>
      <Wrapper>
        <ReadingsCard
          title={readings[0].title}
          image={readings[0].image}
          author={readings[0].author}
        />
        <ReadingsCard
          title={readings[1].title}
          image={readings[1].image}
          author={readings[1].author}
        />{" "}
        <ReadingsCard
          title={readings[2].title}
          image={readings[2].image}
          author={readings[2].author}
        />
        <ReadingsCard
          title={readings[3].title}
          image={readings[3].image}
          author={readings[3].author}
        />{" "}
        <ReadingsCard
          title={readings[4].title}
          image={readings[4].image}
          author={readings[4].author}
        />
        <ReadingsCard
          title={readings[5].title}
          image={readings[5].image}
          author={readings[5].author}
        />
      </Wrapper>
    </div>
  );
}

export default Home;
