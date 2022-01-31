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

function Home() {
  return (
    <div>
      <Nav />
      <div className="container">
        <h1>Readings</h1>
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
    </div>
  );
}

export default Home;
