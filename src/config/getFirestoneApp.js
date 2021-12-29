import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHeYDXGie_jxJjTcirqxZYH1yF6TeyisU",
  authDomain: "ecommerce-86503.firebaseapp.com",
  projectId: "ecommerce-86503",
  storageBucket: "ecommerce-86503.appspot.com",
  messagingSenderId: "297454118906",
  appId: "1:297454118906:web:af096809b83ad941082643"
};

const app = initializeApp(firebaseConfig);

export const getFirestoneApp = () => {
    return app
}