import React, { useEffect, useState } from "react";
import "./Membership.css";


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
          <p>Scopus Author ID: 54684176200</p>
        </div>

        <div className="ad-box">
          <img src={orcid} alt="ORCID" />

          <a
            href="https://orcid.org/0000-0003-0490-4341"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://orcid.org/0000-0003-0490-4341
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