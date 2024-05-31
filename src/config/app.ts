export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const PAYMENT_INTENT_ENDPOINT = import.meta.env
    .VITE_PAYMENT_INTENT_ENDPOINT;

export const SITE = import.meta.env.VITE_DOMAIN;
export const APP_URL = import.meta.env.VITE_APP_URL;
export const DOC_URL = import.meta.env.VITE_DOC_URL;

export const API_ENDPOINTS = {
    login: "/login",
    singup: "/signup",
    devSignUp: "/dev-signup",
    profile: "/profile",
    upgradePlan: "/plan-upgrade",
    createApiKey: "/api-keys",
    listApiKey: "/api-keys",
    deleteApiKey: "api-keys",
    usage: "/usage",
    dailyStats: "/usage/daily-stats",
    reset: {
        verify: "/verify-user",
        password: "/reset-password",
    },
    feedback: "/report-issue",
    prompt: "/prompt",
};

export const ui = {
    backgroundColor: "#f9fafb",
    hederBackgroundColor: "#141420",
    primary: "#fd7e14",
};

export const AUTH_PAGES = {
    LOGIN: "LOGIN",
    REGISTER: "REGISTER",
    RESET: "RESET",
};

export const LEGAL = {
    PRIVACY: SITE + "/privacy-policy",
    REFUND: SITE + "/refund-policy",
    TERMS: SITE + "/terms",
};
