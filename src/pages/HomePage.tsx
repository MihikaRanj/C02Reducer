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
                Welcome to the </IonText> <IonText color={warning}>Carb0</IonText> <IonText> app where you will be able to calculate your carbon footprint, learn how to reduce your carbon intake, read about what carbon footprint is and other terms surrounding it, and lastly, find some external information if you’re curious to learn more. The app is meant to let you learn about CO2 emissions and what you can do to prevent them.
                </IonText> 
                <br/><br/>
                <IonText>
                Once you sign in, you will be entered into the calculate your carbon footprint page. Over there you will have four buttons you can press from: vehicle, waste, demographic information, and lastly view your carbon footprint. You can start by pressing one of the first three and filling the information asked. After that, make sure to press the save button and you can exit out of the tab by pressing the back button. 
                </IonText>
                <br/> <br/>
                <IonText>
                Now you can finish the other two the same way and find your results on the view your carbon footprint page. After you are done seeing what your carbon intake is, you can look on the other pages to learn more about carbon footprint and how to reduce it. 
                </IonText> 
                <br/><br/>
                <IonText>
                On the bottom of the screen, small icons will navigate you to other pages by just pressing the icon.
                </IonText>
                <br/><br/>
                <IonText>
                 Now that you have learned how to use this app, you can click on to explore. I hope you enjoy it and learn something new!
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