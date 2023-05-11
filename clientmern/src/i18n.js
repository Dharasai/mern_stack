import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
    en: {
        translation: {
            hello: 'Hello',
            login: 'Login',
            submit: 'Submit',
            email: 'Email',
            password: 'Password',
        },
    },
    te: {
        translation: {
            hello: 'హలో',
            login: 'లాగిన్',
            submit: 'అప్పగింతపెట్టుట',
            email: "ఇమెయిల్",
            password: "పాస్వర్డ్",
        },
    },
    sp: {
        translation: {
            hello: 'Hola',
            login: 'acceso',
            submit: 'entregar',
            email: "correo electrónico",
            password: "contraseña",
        },
    },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });
export default i18n;