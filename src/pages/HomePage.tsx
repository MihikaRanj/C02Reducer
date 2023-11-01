import {
    IonPage,
    IonContent,
    IonButton,
    IonText,
    IonCol,
    IonFooter,
    IonRow,
    IonToolbar
} from '@ionic/react'
import { warning } from 'ionicons/icons';

import { Redirect } from 'react-router';


const HomePage: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonText>
                Welcome to the </IonText> <IonText color={warning}>Carbon0</IonText> <IonText> app, where you will be able to calculate your carbon footprint, learn how to reduce your carbon intake, read about what carbon footprint is and other terms surrounding it, and lastly, find some external information if you are curious to learn more. The app is meant to let you learn about CO2 emissions and what you can do to prevent them.
                </IonText> 
                <br/><br/>
                <IonText>
                Once you sign up and log in, you will be entered into the calculate your carbon footprint page. Over there you will have four buttons you can press, from: demographic information, waste information, vehicle information, and lastly, view your carbon footprint. Make sure to enter and save your demographic details, waste management and vehicle usage information, in order for the app to effectively calculate your carbon footprint. 
                </IonText>
                <br/> <br/>
                <IonText>
                Once all the information has been entered, you can press view your carbon footprint button to view your calculated carbon footprint. After you are done seeing what your carbon intake is, you can look on the other pages to gain more knowledge about carbon footprint and how to reduce it. 
                </IonText> 
                <br/><br/>
                <IonText>
                At the bottom of the screen, small icons will navigate you to other pages by just pressing the icon.
                </IonText>
                <br/><br/>
                <IonText>
                  Now that you have learned how to use this app, you can click to get started. I hope you enjoy it and learn something new!
                </IonText>              
            </IonContent>
            <IonFooter >
                <IonToolbar>
                    <IonRow>
                        <IonCol width-33 >
                        </IonCol>
                        <IonCol width-33 >
                            <div>
                            <IonButton expand="block" routerLink="/app">Get Started</IonButton>
                            </div>
                        </IonCol>
                        <IonCol width-33 >
                        </IonCol>
                    </IonRow>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    )
}

export default HomePage;
