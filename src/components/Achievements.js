import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Achievements.css";

function Achievements() {

  const [achievements, setAchievements] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      const querySnapshot = await getDocs(
        collection(db, "achievements")
      );

      const data = querySnapshot.docs.map(doc => doc.data());

      setAchievements(data);
    };

    fetchData();

  }, []);

  return (
    <section className="achievements">

      <h1 className="achievements-title">
        ACHIEVEMENTS
      </h1>

      <div className="achievements-container">

        {achievements.map((item, index) => (

          <div className="achievement-card" key={index}>

            <div className="achievement-number">
              {index + 1}
            </div>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Achievements;