import { createI18n } from "../../node_modules/vue3-i18n/dist/vue3-i18n";

import en from './en.json'
import es from './es.json'

const messages = {
    en,
    es,
};

const i18n = createI18n({
    locale: "es",
    fallbackLocale: 'en',
    messages,
});

export default i18n;