import React, { useContext } from "react";
import { IonItem, IonLabel, IonButton, IonIcon, IonBadge } from "@ionic/react";
import { personCircle, createOutline, trash } from "ionicons/icons"; // Import icons
import { deleteStudentById } from "../dataservice.tsx";
import { ScannerContext } from "../services/ScannerContext.jsx";

function HomePageStudentList({ name, id, id_number }) {
  const { recorded, setRecorded } = useContext(ScannerContext);

  const deleteStudent = async (id) => {
    try {
      if (
        confirm(
          "Are you sure you want to delete? records will be lost and cannot be recovered."
        )
      ) {
        await deleteStudentById(id);
      }
      setRecorded(!recorded);
    } catch (err) {
      alert("Error deleting: " + err);
    }
  };

  return (
    <IonItem
      lines="none"
      className="ion-no-padding"
      style={{ borderBottom: "1px solid #e0e0e0" }}
    >
      <IonLabel
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1em",
          padding: "12px 16px",
          flexWrap: "wrap", // Allows wrapping for smaller screens
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
            flex: "1 1 auto",
          }}
        >
          <IonIcon
            color="secondary"
            icon={personCircle}
            style={{ fontSize: "2em" }}
          ></IonIcon>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2 style={{ margin: 0, fontSize: ".8em", fontWeight: "500" }}>
              {name}
            </h2>
            <p style={{ margin: 0, color: "gray", fontSize: ".6em" }}>
              {id_number}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "0.5em",
            flexWrap: "wrap", // Allows icons to stack on smaller screens
          }}
        >
          <IonButton
            color="light"
            routerLink={`edit/${id}`}
            // onClick={() => alert("Edit functionality not implemented yet")}
          >
            <IonIcon slot="icon-only" icon={createOutline} />
          </IonButton>
          <IonButton color="light" onClick={() => deleteStudent(id)}>
            <IonIcon slot="icon-only" icon={trash} />
          </IonButton>
        </div>
      </IonLabel>
    </IonItem>
  );
}
export default HomePageStudentList;
