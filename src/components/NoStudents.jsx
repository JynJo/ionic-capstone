import { IonCol, IonRow, IonText } from "@ionic/react";

const NoStudents = () => (

	<IonRow className="ion-text-center ion-justify-content-center">
    <IonCol size="9">
      <IonText class='brand-text' color='primary' style={{ fontSize: '2em' }}>Lourdes College</IonText>
      <img src="/assets/icon2.png" alt="icon" />
      <p>Welcome to<IonText color="primary"> QR Code Attendance System</IonText>. Please click the button in the bottom right to get started.</p>
    </IonCol>
  </IonRow>
);

export default NoStudents;