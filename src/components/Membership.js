import React, { useEffect, useState } from "react";
import "./Membership.css";

import scopus from "../assets/scoups.png";
import orcid from "../assets/orcid.png";
import wos from "../assets/webofscience.png";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Membership() {

  const [memberships, setMemberships] = useState([]);

  useEffect(() => {

    const fetchMemberships = async () => {

      const querySnapshot = await getDocs(
        collection(db, "memberships")
      );

      const data = querySnapshot.docs.map(doc => doc.data());

      setMemberships(data);
    };

    fetchMemberships();

  }, []);

  return (
    <section className="membership">

      <div className="top-ads">

        <div className="ad-box">
          <img src={wos} alt="Web of Science" />
          <p>Scopus Author ID: 57202000286</p>
        </div>

        <div className="ad-box">
          <img src={orcid} alt="ORCID" />

          <a
            href="https://orcid.org/0000-0002-8687-7887"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://orcid.org/0000-0002-8687-7887
          </a>
        </div>

        <div className="ad-box">
          <img src={scopus} alt="Scopus" />

          <a
            href="https://www.webofscience.com/wos/author/record/JDV-8851-2023"
            target="_blank"
            rel="noopener noreferrer"
            className="ad-link"
          >
            Web of Science Profile
          </a>
        </div>

      </div>

      <h1 className="membership-title">
        PROFESSIONAL MEMBERSHIPS
      </h1>

      <div className="membership-grid">

        {memberships.map((item, index) => (

          <div className="membership-box" key={index}>

            <h3>{item.title}</h3>

            {item.type && (
              <p>{item.type}</p>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Membership;