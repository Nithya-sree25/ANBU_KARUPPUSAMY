import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Patent.css";

function Patent() {

  const [patents, setPatents] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      const querySnapshot = await getDocs(
        collection(db, "patents")
      );

      const data = querySnapshot.docs.map(doc => doc.data());

      setPatents(data);
    };

    fetchData();

  }, []);

  return (
    <section className="patent">

      <h1 className="patent-title">PATENT</h1>

      <div className="table-container">

        <table className="patent-table">

          <thead>
            <tr>
              <th>S.NO</th>
              <th>TITLE</th>
              <th>APPLICATION NUMBER</th>
              <th>PUBLISHED / AWARDED</th>
            </tr>
          </thead>

          <tbody>

            {patents.map((item, index) => (

              <tr key={index}>

                <td>{index + 1}</td>

                <td>{item.title}</td>

                <td>{item.applicationNumber}</td>

                <td>{item.published}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default Patent;