var content = function(e) {
    "use strict";
    function t(e) {
        return new Promise(((t,n)=>{
            chrome.runtime.sendMessage(e, (function(e) {
                e && e.error && n(e),
                t(e)
            }
            ))
        }
        ))
    }
    function n(e, n) {
        return t({
            action: "dlSendNotification",
            payload: {
                type: e,
                options: n
            }
        })
    }
    async function o(e) {
        if (!chrome.tabs)
            return;
        const t = await chrome.tabs.query({
            active: !0,
            currentWindow: !0
        });
        chrome.tabs.sendMessage(t[0].id, e)
    }
    const i = [{
        langCode: "DE",
        langCodeForSpeech: "de-DE",
        supportsFormality: !0
    }, {
        langCode: "EN-GB",
        langCodeForSpeech: "en",
        voice: "Google UK English Male"
    }, {
        langCode: "EN-US",
        langCodeForSpeech: "en",
        voice: "Google UK English Male"
    }, {
        langCode: "FR",
        langCodeForSpeech: "fr-FR",
        voice: "Thomas",
        supportsFormality: !0
    }, {
        langCode: "ES",
        langCodeForSpeech: "es-ES",
        voice: "Google español",
        label: "ES",
        supportsFormality: !0
    }, {
        langCode: "IT",
        langCodeForSpeech: "it-IT",
        supportsFormality: !0
    }, {
        langCode: "ID",
        langCodeForSpeech: "id-ID"
    }, {
        langCode: "PL",
        langCodeForSpeech: "pl-PL",
        supportsFormality: !0
    }, {
        langCode: "NL",
        langCodeForSpeech: "nl-NL",
        voice: "Google Nederlands",
        label: "NL",
        supportsFormality: !0
    }, {
        langCode: "PT-PT",
        langCodeForSpeech: "pt-PT",
        supportsFormality: !0
    }, {
        langCode: "PT-BR",
        langCodeForSpeech: "pt-PT",
        supportsFormality: !0
    }, {
        langCode: "RU",
        langCodeForSpeech: "ru-RU",
        supportsFormality: !0
    }, {
        langCode: "ZH",
        langCodeForSpeech: "zh-CN"
    }, {
        langCode: "JA",
        langCodeForSpeech: "ja-JP",
        supportsFormality: !0
    }, {
        langCode: "BG",
        langCodeForSpeech: "bg-BG"
    }, {
        langCode: "CS",
        langCodeForSpeech: "cs-CZ"
    }, {
        langCode: "DA",
        langCodeForSpeech: "da-DK"
    }, {
        langCode: "ET",
        langCodeForSpeech: "et"
    }, {
        langCode: "FI",
        langCodeForSpeech: "fi-FI",
        voice: "Satu"
    }, {
        langCode: "EL",
        langCodeForSpeech: "el-GR"
    }, {
        langCode: "HU",
        langCodeForSpeech: "hu-HU"
    }, {
        langCode: "LV",
        langCodeForSpeech: "lv"
    }, {
        langCode: "LT",
        langCodeForSpeech: "lt"
    }, {
        langCode: "RO",
        langCodeForSpeech: "ro-RO"
    }, {
        langCode: "SK",
        langCodeForSpeech: "sk-SK"
    }, {
        langCode: "SL",
        langCodeForSpeech: "sl"
    }, {
        langCode: "SV",
        langCodeForSpeech: "sv-SE"
    }, {
        langCode: "TR",
        langCodeForSpeech: "tr-TR"
    }, {
        langCode: "UK",
        langCodeForSpeech: "uk-UA"
    }, {
        langCode: "NB",
        langCodeForSpeech: "nb-NO"
    }, {
        langCode: "KO",
        langCodeForSpeech: "ko-KR"
    }]
      , s = 1
      , a = 2
      , r = {
        none: "",
        ongoingTranslation: "ONGOING_TRANSLATION",
        isTranslationComplete: "IS_TRANLSATION_COMPLETE",
        showOriginal: "SHOW_ORIGINAL",
        ongoingAutoDetection: "ON_GOING_AUTODETECTION",
        anonymousUserMaxCharExceeded: "ANONYMOUS_USER_MAX_CHAR_EXCEEDED"
    }
      , l = 1
      , c = 2
      , d = "inline"
      , u = "automatic"
      , m = "manual"
      , g = {
        notLoggedIn: 1,
        loggedInPro: 2,
        loggedInFree: 3
    }
      , p = 1500
      , h = 5e3
      , f = 1
      , _ = 3
      , w = 1
      , v = 2
      , b = 3
      , $ = 1
      , E = 2
      , y = 1
      , x = 2
      , T = [/[^.]+\.deepl\.com/g, /[^.]+\.figma\.com/g]
      , C = [/docs.google\.com\/spreadsheets/g]
      , S = [/[^.]+\.deepl\.com/g]
      , L = {
        deepl_inline_ui: {
            z_index: 2147483650
        }
    }
      , k = {
        hintKeyboardShortcut: "HINT_KEYBOARD_SHORTCUT",
        inputTranslation: "INPUT_TRANSLATION",
        inlineTranslation: "INLINE_TRANSLATION",
        fullPageTranslation: "FULL_PAGE_TRANSLATION",
        accountSuccessfullyCreated: "ACCOUNT_SUCCESSFULLY_CREATED",
        successfullyLoggedIn: "SUCCESSFULLY_LOGGED_IN"
    }
      , M = {
        green_theme: "green_theme"
    }
      , I = {
        inlineTranslationTriggerIcon: "INLINE_TRANSLATION_TRIGGER_ICON",
        inlineTranslationSettingsIcon: "INLINE_TRANSLATION_SETTINGS_ICON",
        inlineTranslationSettingPopup: "INLINE_TRANSLATION_SETTING_POPUP",
        inputTranslationTriggerIcon: "INPUT_TRANSLATION_TRIGGER_ICON",
        inputTranslationSettingsIcon: "INPUT_TRANSLATION_SETTINGS_ICON",
        inputTranslationSettingPopup: "INPUT_TRANSLATION_SETTING_POPUP",
        settingsPageFPT: "SETTINGS_PAGE_FPT",
        settingsPageReading: "SETTINGS_PAGE_READING",
        settingsPageWriting: "SETTINGS_PAGE_WRITING",
        settingsPageIntegrations: "SETTINGS_PAGE_INTEGRATIONS",
        fptHideModal: "FPT_HIDE_MODAL",
        inputTranslationReadMoreLink: "INPUT_TRANSLATION_READ_MORE_LINK",
        inlineTranslationReadMoreLink: "INLINE_TRANSLATION_READ_MORE_LINK",
        fptTranslationReadMoreLink: "FPT_TRANSLATION_READ_MORE_LINK",
        extensionHubToggleSwitch: "EXTENSION_HUB_TOGGLE_SWITCH",
        hubCustomizeShortcut: "HUB_CUSTOMIZE_SHORTCUT",
        hubLoginButton: "HUB_LOGIN_BUTTON",
        hubUpgradeToProLink: "HUB_UPGRADE_TO_PRO_LINK",
        hubTryProLink: "HUB_TRY_PRO_LINK",
        settingsPageCustomizeShortcutButton: "SETTINGS_PAGE_CUSTOMIZE_SHORTCUT_BUTTON",
        hubFPTEnableCheckbox: "HUB_FPT_ENABLE_CHECKBOX",
        hubFPTDisableCheckbox: "HUB_FPT_DISABLE_CHECKBOX",
        deeplWriteIcon: "DEEPL_WRITE_ICON",
        gmailOnboardingPopup: "gmailOnboardingPopup",
        gmailOnboardingIcon: "gmailOnboardingIcon",
        gmailCharLimitLogin: "gmailCharLimitLogin",
        gmailFeedbackSurvey: "gmailFeedbackSurvey",
        hubViewIntegrations: "HUB_VIEW_INTEGRATIONS",
        hubCloseCustomizationsWidget: "HUB_CLOSE_CUSTOMIZATIONS_WIDGET",
        gslidesFeedbackSurvey: "GSLIDES_FEEDBACK_SURVEY",
        gslidesCharLimitLogin: "GSLIDES_CHAR_LIMIT_LOGIN",
        zendeskTryProLink: "ZENDESK_TRY_PRO_LINK",
        onboardingSignUp: "ONBOARDING_SIGN_UP",
        onboardingSkipSignUp: "ONBOARDING_SKIP_SIGN_UP",
        onboardingLoginLink: "ONBOARDING_LOGIN_LINK",
        onboardingSeeAllIntegrations: "ONBOARDING_SEE_ALL_INTEGRATIONS"
    }
      , A = "trigger-translation"
      , N = "CLICK_ON_SHORTCUT_NOTIFICATION"
      , O = "CLICK_ON_INLINE_TRANSLATION_SHOW_ALTERNATIVES"
      , D = "CLICK_ON_INLINE_TRANSLATION_CLOSE_ICON"
      , R = "CLICK_ON_LOGOUT_MENU_ENTRY"
      , P = {
        disablePerSite: "DISABLE_PER_SITE",
        disableEverywhere: "DISABLE_EVERYWHERE",
        enableEverywhere: "ENABLE_EVERYWHERE",
        enablePerSite: "ENABLE_PER_SITE"
    }
      , H = "INPUT_TRANSLATION"
      , G = "INLINE_TRANSLATION"
      , z = 1
      , B = 2
      , U = {
        unspecified: 0,
        chrome: 1,
        edge: 2,
        local: 3,
        firefox: 4
    }
      , W = {
        chrome: "cofdbpoegempjloogbagkncekinflcnj",
        edge: "fancfknaplihpclbhbpclnmmjcjanbaf",
        local: "ocpdpnakdghopjcifldjidbdmfobmmoi",
        firefox: "firefox-extension@deepl.com"
    }
      , F = {
        deepl: /^(.*\.)?deepl\.com$/gm,
        linguee: /^(.*\.)?linguee\.[a-z]{2,3}$/gm,
        google_translate: /^translate\.google\.com$/gm,
        gmail: /^mail\.google\.com$/gm
    }
      , j = {
        word_365: "euc-word-edit.officeapps.live.com",
        power_point_365: "euc-powerpoint.officeapps.live.com"
    }
      , q = {
        word_365: "WacFrame_Word_0",
        power_point_365: "WacFrame_PowerPoint_0"
    }
      , V = {
        initial: "INITIAL",
        feedback: "FEEDBACK",
        review: "REVIEW",
        gmail: "GMAIL",
        gslides: "GSLIDES",
        customer_segmentation: "CUSTOMER_SEGMENTATION"
    }
      , Z = {
        close_icon: 1,
        deepl_icon: 2,
        outside_click: 3
    }
      , K = {
        default: "DEFAULT",
        gdocs: "GDOCS",
        zendesk: "ZENDESK",
        whatsappWeb: "WHATSAPP_WEB",
        twitter: "TWITTER",
        gmail: "GMAIL",
        gslides: "GSLIDES",
        linkedIn: "LINKEDIN"
    }
      , Y = {
        translate: "translate",
        write: "write"
    }
      , X = ["script", "style"]
      , Q = ["a", "abbr", "acronym", "b", "bdo", "big", "br", "button", "cite", "code", "dfn", "em", "i", "img", "input", "kbd", "label", "map", "object", "q", "samp", "script", "select", "small", "span", "strong", "sub", "sup", "textarea", "time", "tt", "var", "font"]
      , J = "OPEN_TICKET"
      , ee = "DETECT_TICKET_LANGUAGE"
      , te = "SWITCH_TICKET_LANGUAGE"
      , ne = "ENABLE_AUTOTRANSLATE"
      , oe = "DISABLE_AUTOTRANSLATE"
      , ie = "TRANSLATE_MESSAGE"
      , se = "TRANSLATE_INPUT"
      , ae = "ERROR"
      , re = "TICKET"
      , le = "LIVE_CHAT"
      , ce = 50
      , de = {
        free: "free",
        pro: "pro",
        none: "none"
    }
      , ue = "TEXT_REFINEMENT_REQUEST"
      , me = "GDOCS_INSERT_COPY"
      , ge = "GDOCS_DISCARD_COPY"
      , pe = "GDOCS_CHAR_LIMIT_REACHED"
      , he = "RESULT_ACCEPTED"
      , fe = "RESULT_REVERTED"
      , _e = "ERROR"
      , we = "RESULT_ACCEPTED"
      , ve = "RESULT_REVERTED"
      , be = "ALTERNATIVES_OPENED"
      , $e = "SEGMENTATION_SELECTED"
      , Ee = "ALTERNATIVE_SELECTED"
      , ye = "SHOWN"
      , xe = "CLICKED"
      , Te = {
        READING_VIEW_TRANSLATE: "READING_VIEW_TRANSLATE",
        COMPOSE_VIEW_TRANSLATE: "COMPOSE_VIEW_TRANSLATE",
        COMPOSE_VIEW_IMPROVE: "COMPOSE_VIEW_IMPROVE"
    }
      , Ce = "ANONYMOUS_USER_LIMIT_EXCEEDED"
      , Se = "FREE_ACCOUNT_LIMIT_EXCEEDED"
      , Le = "PRO_TRIAL"
      , ke = "LOGIN"
      , Me = "SIGNUP"
      , Ie = "ANONYMOUS"
      , Ae = "FREE"
      , Ne = {
        WORD: "word",
        SENTENCE: "sentence"
    }
      , Oe = ["JA", "ZH"]
      , De = {
        none: "None",
        pro: "Pro",
        free: "Free"
    }
      , Re = {
        chrome: "Chrome",
        edge: "Edge",
        brave: "Brave",
        firefox: "Firefox",
        opera: "Opera",
        safari: "Safari"
    };
    function Pe() {
        return !!window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    function He(e, t) {
        let n;
        try {
            switch (e) {
            case Re.chrome:
            case Re.brave:
                n = t.split("Chrome/")[1].split(" ")[0];
                break;
            case Re.edge:
                n = t.split("Edg/")[1].split(" ")[0];
                break;
            case Re.firefox:
                n = t.split("Firefox/")[1].split(" ")[0];
                break;
            case Re.opera:
                n = t.split("OPR/")[1].split(" ")[0];
                break;
            case Re.safari:
                n = t.split("Version/")[1].split(" ")[0]
            }
        } catch (t) {
            console.error(`Could not get the browsers (${e}) version from user agent`, t)
        }
        try {
            !n && navigator?.userAgentData && function(e) {
                return e === Re.chrome || e === Re.edge || e === Re.brave || e === Re.opera
            }(e) && (n = Ge(e).version)
        } catch (t) {
            console.error(`Could not get the chromium browsers (${e}) version`, t)
        }
        return n && "string" == typeof n ? n : "unknown_browser_version"
    }
    function Ge(e) {
        if (!navigator.userAgentData || !e)
            return;
        const t = new RegExp(`${e}`,"i");
        return navigator.userAgentData.brands.filter((e=>t.test(e.brand)))[0]
    }
    function ze() {
        const e = navigator?.userAgent || "unknown_user_agent"
          , t = navigator?.userAgentData?.platform || navigator?.platform || "unknown_platform";
        let n = "unknown_browser"
          , o = "unknown_browser_version";
        const i = navigator?.language || "unknown_browser_language";
        try {
            const t = e.match(/chrome|chromium|crios/i)
              , i = e.match(/edg/i) || Ge(Re.edge)
              , s = e.match(/firefox|fxios/i)
              , a = e.match(/opr\//i) || Ge(Re.opera)
              , r = e.match(/safari/i)
              , l = Ge(Re.brave);
            t ? (n = Re.chrome,
            i && (n = Re.edge),
            a && (n = Re.opera),
            l && (n = Re.brave)) : i ? n = Re.edge : s ? n = Re.firefox : a ? n = Re.opera : r && (n = Re.safari),
            o = He(n, e)
        } catch (e) {
            console.error("Could not get the name of the brower", e)
        }
        return {
            userAgent: e,
            platform: t,
            browser: n,
            browserVersion: o,
            browserLang: i
        }
    }
    function Be() {
        if ({
            IS_PROD: !0,
            BASE_URLS: {
                dapApi: "https://s.deepl.com/chrome/statistics",
                toolingApiPro: "https://api.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                toolingApi: "https://www2.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                toolingWriteApiPro: "https://write-pro.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                toolingWriteApi: "https://write-free.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                classicApi: "https://www2.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                classicApiPro: "https://api.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                classicApiWrite: "https://write-free.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                classicApiWritePro: "https://write-pro.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                classicApiGlossary: "https://api.deepl.com/termbases/jsonrpc?client=chrome-extension,1.16.1",
                login: "https://www.deepl.com/auth/login",
                token: "https://w.deepl.com/oidc/token",
                logout: "https://www.deepl.com/auth/logout",
                feedbackSurvey: "https://deepl.typeform.com/to/MkMfP2Y6",
                newFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_cMvbeX0WZGvkKGi",
                firefoxFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_eyfDZqQmXuNTFOK",
                uninstallSurvey: "https://deepl.qualtrics.com/jfe/form/SV_eJxAD8c7J5hqSRU",
                gslidesFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_9XBLSAbDmLq5emO",
                deeplPro: "https://www.deepl.com/pro",
                deeplTranslator: "https://www.deepl.com/translator",
                deeplDoctrans: "https://www.deepl.com/translator/files",
                deeplTermsOfServiceFree: "https://www.deepl.com/en/pro-license?tab=free",
                deeplCreateAccount: "https://www.deepl.com/signup",
                extensionStorePage: "https://bit.ly/DeepL-Chrome",
                supportArticle: "https://support.deepl.com/hc/articles/4407580229522",
                deeplSupport: "https://support.deepl.com/hc",
                chromeWebstore: "https://chrome.google.com/webstore/detail/deepl-translate-reading-w/cofdbpoegempjloogbagkncekinflcnj",
                edgeWebstore: "https://microsoftedge.microsoft.com/addons/detail/deepl-translate-reading-/fancfknaplihpclbhbpclnmmjcjanbaf",
                firefoxWebstore: "https://addons.mozilla.org/en-US/firefox/addon/deepl-translate",
                firefoxShortcutDocs: "https://support.mozilla.org/kb/manage-extension-shortcuts-firefox",
                clientStateApi: "https://w.deepl.com/web",
                experimentsEndpoint: "https://s.deepl.com/chrome/experiments",
                gmailFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_db8ItFTmYBcZjYW",
                customerSegmentationSurveyFree: "https://deepl.qualtrics.com/jfe/form/SV_3LbBcdg4mjQuCCq?desc=TG-2071",
                customerSegmentationSurveyPro: "https://deepl.qualtrics.com/jfe/form/SV_3LbBcdg4mjQuCCq?desc=TG-2070"
            },
            APP_VERSION: "1.16.1",
            FEATURE_FLAGS: {
                TRANSLATE_INPUT: !0,
                PAGE_TRANSLATION: !0,
                IMPROVE_WRITING: !0,
                DOCUMENT_TRANSLATION: !0,
                RECOMMEND_TO_A_FRIEND: !0,
                PRO_LOGIN: !0,
                WEBPAGE_CUSTOMIZER: !0,
                GDOCS_INTEGRATION: !0,
                ZENDESK_INTEGRATION: !0,
                GMAIL_INTEGRATION: !0,
                GSLIDES_INTEGRATION: !0,
                ON_INSTALL_ONBOARDING: !0,
                WHATSAPP_TRANSLATE_ALL_CHAT: !1,
                DEEPL_WRITE_GENERAL: !1,
                DEEPL_WRITE_GDOCS: !0,
                SHOW_CUSTOMER_SEGMENTATION_SURVEY: !0
            }
        }.browserBuild)
            return {
                IS_PROD: !0,
                BASE_URLS: {
                    dapApi: "https://s.deepl.com/chrome/statistics",
                    toolingApiPro: "https://api.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                    toolingApi: "https://www2.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                    toolingWriteApiPro: "https://write-pro.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                    toolingWriteApi: "https://write-free.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                    classicApi: "https://www2.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                    classicApiPro: "https://api.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                    classicApiWrite: "https://write-free.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                    classicApiWritePro: "https://write-pro.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                    classicApiGlossary: "https://api.deepl.com/termbases/jsonrpc?client=chrome-extension,1.16.1",
                    login: "https://www.deepl.com/auth/login",
                    token: "https://w.deepl.com/oidc/token",
                    logout: "https://www.deepl.com/auth/logout",
                    feedbackSurvey: "https://deepl.typeform.com/to/MkMfP2Y6",
                    newFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_cMvbeX0WZGvkKGi",
                    firefoxFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_eyfDZqQmXuNTFOK",
                    uninstallSurvey: "https://deepl.qualtrics.com/jfe/form/SV_eJxAD8c7J5hqSRU",
                    gslidesFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_9XBLSAbDmLq5emO",
                    deeplPro: "https://www.deepl.com/pro",
                    deeplTranslator: "https://www.deepl.com/translator",
                    deeplDoctrans: "https://www.deepl.com/translator/files",
                    deeplTermsOfServiceFree: "https://www.deepl.com/en/pro-license?tab=free",
                    deeplCreateAccount: "https://www.deepl.com/signup",
                    extensionStorePage: "https://bit.ly/DeepL-Chrome",
                    supportArticle: "https://support.deepl.com/hc/articles/4407580229522",
                    deeplSupport: "https://support.deepl.com/hc",
                    chromeWebstore: "https://chrome.google.com/webstore/detail/deepl-translate-reading-w/cofdbpoegempjloogbagkncekinflcnj",
                    edgeWebstore: "https://microsoftedge.microsoft.com/addons/detail/deepl-translate-reading-/fancfknaplihpclbhbpclnmmjcjanbaf",
                    firefoxWebstore: "https://addons.mozilla.org/en-US/firefox/addon/deepl-translate",
                    firefoxShortcutDocs: "https://support.mozilla.org/kb/manage-extension-shortcuts-firefox",
                    clientStateApi: "https://w.deepl.com/web",
                    experimentsEndpoint: "https://s.deepl.com/chrome/experiments",
                    gmailFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_db8ItFTmYBcZjYW",
                    customerSegmentationSurveyFree: "https://deepl.qualtrics.com/jfe/form/SV_3LbBcdg4mjQuCCq?desc=TG-2071",
                    customerSegmentationSurveyPro: "https://deepl.qualtrics.com/jfe/form/SV_3LbBcdg4mjQuCCq?desc=TG-2070"
                },
                APP_VERSION: "1.16.1",
                FEATURE_FLAGS: {
                    TRANSLATE_INPUT: !0,
                    PAGE_TRANSLATION: !0,
                    IMPROVE_WRITING: !0,
                    DOCUMENT_TRANSLATION: !0,
                    RECOMMEND_TO_A_FRIEND: !0,
                    PRO_LOGIN: !0,
                    WEBPAGE_CUSTOMIZER: !0,
                    GDOCS_INTEGRATION: !0,
                    ZENDESK_INTEGRATION: !0,
                    GMAIL_INTEGRATION: !0,
                    GSLIDES_INTEGRATION: !0,
                    ON_INSTALL_ONBOARDING: !0,
                    WHATSAPP_TRANSLATE_ALL_CHAT: !1,
                    DEEPL_WRITE_GENERAL: !1,
                    DEEPL_WRITE_GDOCS: !0,
                    SHOW_CUSTOMER_SEGMENTATION_SURVEY: !0
                }
            }.browserBuild.toLowerCase() === Re.firefox.toLowerCase();
        const e = chrome.runtime.getURL("");
        return ze().browser === Re.firefox || /moz-extension:\/\//gm.test(e)
    }
    const Ue = ()=>{
        const e = "https://docs.google.com";
        return window.location.href.substr(0, 23) === e
    }
      , We = ()=>{
        const e = document.querySelector(".docs-texteventtarget-iframe")?.contentWindow;
        return {
            iFrame: e,
            editable: e && e.document.querySelector("[contenteditable=true]")
        }
    }
      , Fe = ()=>{
        const {iFrame: e, editable: t} = We();
        if (!e || !t)
            return;
        const n = new e.ClipboardEvent("copy",{
            bubbles: !0,
            clipboardData: new e.DataTransfer
        });
        t.dispatchEvent(n)
    }
      , je = ()=>{
        const {iFrame: e, editable: t} = We();
        if (!e || !t)
            return;
        const n = new e.CustomEvent("copy",{
            bubbles: !0
        });
        t.dispatchEvent(n);
        const o = (e=>{
            if (0 === e.length)
                return !0;
            for (let t = 0; t < e.length; t++)
                if (8203 !== e.charCodeAt(t))
                    return !1;
            return !0
        }
        )(t.innerText.trim());
        return {
            html: o ? "" : t.innerHTML,
            text: o ? "" : t.innerText
        }
    }
      , qe = ()=>{
        const e = document.querySelector("deepl-gdocs-icon")?.shadowRoot.querySelector(".dl-gdocs-icon");
        if (!e)
            return void console.error("GDocs Icon was not present while trying to get the coordinates");
        const t = e.getBoundingClientRect()
          , n = document.body.parentNode.getBoundingClientRect()
          , {top: o, left: i, right: s, bottom: a, height: r, width: l} = t;
        return {
            x: i - n.left,
            y: a - n.top,
            selectedTop: o,
            selectedBottom: a,
            selectedRight: n.width - s,
            selectedLeft: i + window.scrollX,
            selectedWidth: l,
            height: r
        }
    }
      , Ve = ()=>{
        const e = document.querySelector("#docs-instant-bubble")
          , t = document.querySelector(".kix-appview-editor")
          , n = document.querySelector(".kix-page-paginated")
          , o = 120
          , i = 40
          , s = t.getBoundingClientRect();
        let a = !1;
        const r = {
            top: 0,
            left: 0
        };
        try {
            if (!e)
                throw new Error;
            const t = e.getBoundingClientRect();
            if (t.left <= 0)
                throw new Error;
            const n = Math.round(t.top + 134 || 0);
            r.left = t.left,
            r.top = n ? n + 20 : 0,
            r.top + o / 2 < s.top + 10 && (r.top = s.top + 10),
            r.top - o / 2 > s.bottom && (a = !0)
        } catch (e) {
            if (n) {
                const e = n.getBoundingClientRect();
                r.left = e.right - i / 2,
                r.top = s.top + 30
            }
        }
        return r.left + i / 2 > s.right && (a = !0),
        {
            shouldBeOutOfViewport: a,
            newPosition: r
        }
    }
      , Ze = ()=>!!document.querySelector("#docs-toolbar-wrapper")
      , Ke = e=>{
        const t = e.clipboardData.getData("application/x-vnd.google-docs-document-slice-clip+wrapped")
          , n = JSON.parse(t)
          , o = JSON.parse(n.data).resolved
          , i = [];
        let s = "";
        for (let e = 0; e < o.dsl_spacers.length; e++) {
            const t = o.dsl_spacers[e];
            o.dsl_styleslices.forEach((t=>{
                if (t.stsl_styles.length > 0 && t.stsl_styles[e]) {
                    const n = `a${i.length + 1}`;
                    i.push({
                        entity_type: t.stsl_type,
                        entity_abbreviation: n,
                        entity: t.stsl_styles[e]
                    }),
                    s += `<${n}>`
                }
            }
            )),
            s += t
        }
        const a = []
          , r = s.split("\n").map((e=>{
            const t = e.replace(/<a\d+>/g, "").trim().length > 0;
            if (t) {
                const {leading: n, trailing: o, processedLine: i} = Ye(e);
                return a.push(i),
                {
                    isTranslatable: t,
                    index: a.length - 1,
                    leading: n,
                    trailing: o
                }
            }
            return {
                isTranslatable: t,
                line: e
            }
        }
        ));
        return {
            textLines: a,
            entities: i,
            contentReference: r,
            originalObject: n,
            originalText: o.dsl_spacers
        }
    }
      , Ye = e=>{
        const {leadingEntities: t, processedLine: n} = Xe(e)
          , {trailingEntities: o, processedLine: i} = Qe(n);
        return {
            leading: t,
            trailing: o,
            processedLine: i
        }
    }
      , Xe = e=>{
        let t = ""
          , n = ""
          , o = ""
          , i = !0;
        for (const s of e) {
            if (i) {
                const e = o[o.length - 1];
                if ("<" === s && 0 === o.length) {
                    o = "<";
                    continue
                }
                if (">" === s && o.length > 0 && e.match(/\d/)) {
                    t = t + o + ">",
                    o = "";
                    continue
                }
                if ("a" === s && o.length > 0 && "<" === e) {
                    o += "a";
                    continue
                }
                if (s.match(/\d/) && o.length > 0 && ("a" === e || e.match(/\d/))) {
                    o += s;
                    continue
                }
                if (Je(s) && 0 === o.length) {
                    t += s;
                    continue
                }
                i = !1,
                o = ""
            }
            n += s
        }
        return {
            processedLine: n,
            leadingEntities: t
        }
    }
      , Qe = e=>{
        let t = ""
          , n = ""
          , o = ""
          , i = !0;
        for (const s of e.split("").reverse()) {
            if (i) {
                if (">" === s && 0 === o.length) {
                    o = ">";
                    continue
                }
                if ("<" === s && o.length > 0 && "a" === o[0]) {
                    t = "<" + o + t,
                    o = "";
                    continue
                }
                if ("a" === s && o.length > 0 && o[0].match(/\d/)) {
                    o = "a" + o;
                    continue
                }
                if (s.match(/\d/) && o.length > 0 && (">" === o[0] || o[0].match(/\d/))) {
                    o = s + o;
                    continue
                }
                if (Je(s) && 0 === o.length) {
                    t = s + t;
                    continue
                }
                i = !1,
                o = ""
            }
            n = s + n
        }
        return {
            processedLine: n,
            trailingEntities: t
        }
    }
      , Je = e=>[16, 17, 18, 28].includes(e.charCodeAt(0))
      , et = ({textLines: e, entities: t, contentReference: n})=>{
        console.log({
            textLines: e,
            contentReference: n
        });
        let o = n.map((t=>t.isTranslatable ? `${t.leading}${Array.isArray(e[t.index]) ? e[t.index].join("") : e[t.index]}${t.trailing}` : t.line)).join("\n");
        o = o.replace(/<\/a(\d+)>/g, "<a$1>");
        let i = ""
          , s = []
          , a = 0
          , r = 0;
        for (; a + r < o.length; ) {
            const e = a + r;
            if ("<" === o[e] && "a" === o[e + 1]) {
                let n = "<a"
                  , i = !0
                  , l = !1
                  , c = !0;
                for (; c; ) {
                    const t = o[e + n.length];
                    ">" === t ? (n += t,
                    l || (i = !1),
                    c = !1) : t.match(/\d/) ? (n += t,
                    l = !0) : (i = !1,
                    c = !1)
                }
                if (i) {
                    r += n.length;
                    const e = t.find((e=>`<${e.entity_abbreviation}>` === n));
                    s.push({
                        ...e,
                        new_position: a
                    });
                    continue
                }
            }
            i += o[e],
            a++
        }
        return {
            processedText: i,
            processedEntities: s
        }
    }
      , tt = e=>e.replace(/<(\/)?a(\d+)>/g, "")
      , nt = e=>{
        const {characterMappings: t, cleanSentence: n} = it(e)
          , o = /[^\s.,:;!?"()*｟｠｡｢｣､･、。〈〉《》「」『』【】〔〕〖〗〘〙〚〛〝〞〟 〪 〫 〬 〭]/
          , i = [];
        let s = ""
          , a = 0
          , r = !1;
        for (let e = 0; e < n.length; e++) {
            const l = n[e]
              , c = o.test(l);
            c !== r && s.length > 0 && (i.push({
                text: s,
                isWord: r,
                offsetStart: a,
                offsetLength: s.length,
                offsetStartRaw: t[a],
                offsetLengthRaw: t[a + s.length]
            }),
            s = ""),
            r = c,
            s += l,
            1 === s.length && (a = e)
        }
        return s && i.push({
            text: s,
            isWord: r,
            offsetStart: a,
            offsetLength: s.length,
            offsetStartRaw: t[a],
            offsetLengthRaw: t[a + s.length]
        }),
        i
    }
      , ot = ({entities: e, text: t, originalObject: n})=>{
        const o = st({
            entities: e,
            text: t,
            originalObject: n
        });
        at(o)
    }
      , it = e=>{
        const t = [];
        let n = "";
        const o = e.split(/(<a\d+>)/g);
        let i = 0;
        for (let e = 0; e < o.length; e++) {
            const s = o[e];
            if (!/^<a\d+>$/.test(s)) {
                n += s;
                for (let e = 0; e < s.length; e++)
                    t.push(i + e)
            }
            i += s.length
        }
        return {
            characterMappings: t,
            cleanSentence: n
        }
    }
      , st = ({entities: e, text: t, originalObject: n})=>{
        const o = JSON.parse(n.data)
          , i = o.resolved.dsl_styleslices.map((t=>{
            const n = e.filter((e=>e.entity_type === t.stsl_type));
            if (0 === n.length)
                return t;
            const o = {};
            let i = 0;
            n.forEach((e=>{
                i = e.new_position > i ? e.new_position : i,
                o[`${e.new_position}`] = e.entity
            }
            ));
            const s = [];
            for (let e = 0; e <= i; e++)
                s.push(o[`${e}`] || null);
            return {
                ...t,
                stsl_styles: s
            }
        }
        ))
          , s = {
            ...o.resolved,
            dsl_spacers: t,
            dsl_styleslices: i
        }
          , a = {
            ...n,
            data: JSON.stringify({
                ...o,
                resolved: s
            })
        };
        return JSON.stringify(a)
    }
      , at = e=>{
        const {editable: t} = We();
        let n;
        const o = "application/x-vnd.google-docs-document-slice-clip+wrapped";
        if (Be())
            n = new ClipboardEvent("paste",{
                dataType: o,
                data: e
            });
        else {
            const t = new DataTransfer;
            t.setData(o, e),
            n = new ClipboardEvent("paste",{
                bubbles: !0,
                clipboardData: t
            })
        }
        t.dispatchEvent(n)
    }
    ;
    function rt(e, t) {
        return ct(e) === t
    }
    function lt(e) {
        return !!e && (["EN"].includes(e) ? e = "EN-GB" : ["PT"].includes(e) && (e = "PT-PT"),
        i.map((e=>e.langCode)).includes(e))
    }
    const ct = e=>e.substring(0, 2).toUpperCase();
    async function dt(e) {
        let t = "";
        const n = await chrome.i18n.detectLanguage(e);
        return n && n.languages?.length > 0 && (t = n.languages.sort(((e,t)=>t.percentage - e.percentage))[0].language.substr(0, 2).toUpperCase()),
        t
    }
    const ut = ()=>{
        let e, t, n = !1;
        return i.map((o=>{
            let i;
            return n = ["EN-US", "EN-GB", "PT-PT", "PT-BR"].includes(o.langCode),
            n && (({optionLabel: e, selectedLabel: t} = function(e) {
                switch (e.langCode) {
                case "EN-US":
                    return {
                        optionLabel: chrome.i18n.getMessage("supported_languages_EN_US"),
                        selectedLabel: chrome.i18n.getMessage("selected_languages_EN_US")
                    };
                case "EN-GB":
                    return {
                        optionLabel: chrome.i18n.getMessage("supported_languages_EN_UK"),
                        selectedLabel: chrome.i18n.getMessage("selected_languages_EN_UK")
                    };
                case "PT-PT":
                    return {
                        optionLabel: chrome.i18n.getMessage("supported_languages_PT_PT"),
                        selectedLabel: chrome.i18n.getMessage("selected_languages_PT_PT")
                    };
                case "PT-BR":
                    return {
                        optionLabel: chrome.i18n.getMessage("supported_languages_PT_BR"),
                        selectedLabel: chrome.i18n.getMessage("selected_languages_PT_BR")
                    };
                default:
                    return {
                        optionLabel: chrome.i18n.getMessage("supported_languages_undefined"),
                        selectedLabel: chrome.i18n.getMessage("supported_languages_undefined")
                    }
                }
            }(o)),
            i = o.langCode.slice(0, 2).toLowerCase() + o.langCode.slice(2)),
            {
                value: o.langCode,
                label: n ? e : chrome.i18n.getMessage(`supported_languages_${o.langCode}`),
                selectedOptionLabel: n ? t : chrome.i18n.getMessage(`supported_languages_${o.langCode}`),
                regionalVariant: i
            }
        }
        )).sort(((e,t)=>e.label.localeCompare(t.label, chrome.i18n.getUILanguage())))
    }
    ;
    function mt(e) {
        return "EN" === e ? "EN-GB" : "PT" === e ? "PT-PT" : e
    }
    function gt(e, t, n) {
        return "EN" === e ? t["EN-GB"] === n || t["EN-US"] === n : "PT" === e ? t["PT-PT"] === n || t["PT-BR"] === n : t[e] === n
    }
    const pt = e=>["DE", "EN"].includes(e?.substr(0, 2).toUpperCase())
      , ht = ()=>{
        const e = "https://docs.google.com";
        return window.location.href.substr(0, 23) === e && !!document.querySelector("#sketchy-hidden-iframe")
    }
      , ft = async()=>{
        const e = []
          , t = n=>{
            const o = []
              , i = [];
            for (let e = 0; e < n.children.length; e++) {
                const t = n.children[e];
                "text" === t.tagName.toLowerCase() ? o.push(t) : "g" === t.tagName.toLowerCase() && i.push(t)
            }
            o.length > 0 && e.push(o.map((e=>e.textContent)).join(" "));
            for (const e of i)
                t(e)
        }
          , n = bt();
        if (n) {
            t(n);
            const o = e.join("\n");
            return await dt(o)
        }
    }
      , _t = async()=>{
        const e = bt()
          , t = document.querySelector("#canvas-container").getBoundingClientRect();
        if (e) {
            const n = t.left - 2
              , o = t.top - 2
              , i = t.right + 2
              , s = t.bottom + 2
              , a = new MouseEvent("mousedown",{
                bubbles: !0,
                cancelable: !0,
                view: window,
                clientX: n,
                clientY: o
            });
            e.dispatchEvent(a);
            for (let t = 1; t <= 10; t++) {
                const a = new MouseEvent("mousemove",{
                    bubbles: !0,
                    cancelable: !0,
                    view: window,
                    clientX: n + t / 10 * (i - n),
                    clientY: o + t / 10 * (s - o)
                });
                e.dispatchEvent(a),
                await new Promise((e=>setTimeout(e, 25)))
            }
            const r = new MouseEvent("mouseup",{
                bubbles: !0,
                cancelable: !0,
                view: window,
                clientX: i,
                clientY: s
            });
            e.dispatchEvent(r)
        }
    }
      , wt = e=>{
        const t = []
          , n = [];
        for (const n of e) {
            const e = n[0]
              , o = n[1];
            if (15 === e) {
                const e = n[4];
                if ("" === e.trim())
                    continue;
                if (t.find((e=>e.id === o)))
                    continue;
                const i = {
                    id: o,
                    originalContent: e,
                    translatedContent: "",
                    sentencesIndexes: [],
                    originalSentences: [],
                    translatedSentences: [],
                    modifiers: [],
                    secondaryModifiers: [],
                    entity: n,
                    orphanModifiers: [],
                    orphanModifiersIntegrityCheck: []
                };
                t.push(i)
            } else if (17 === e) {
                const e = t.find((e=>e.id === o));
                if (!e)
                    continue;
                e.modifiers.push(n)
            } else if (41 === e) {
                const e = t.find((e=>e.id === o));
                if (!e)
                    continue;
                e.secondaryModifiers.push(n)
            }
        }
        for (let e = 0; e < t.length; e++) {
            const o = t[e];
            o.orphanModifiers = $t(o);
            const {originalSentences: i, orphanModifiersIntegrityCheck: s} = xt(o);
            o.originalSentences = i,
            o.orphanModifiersIntegrityCheck = s;
            for (const e of o.originalSentences)
                o.sentencesIndexes.push(n.length),
                n.push(e)
        }
        return {
            entities: t,
            sentencesToTranslate: n
        }
    }
      , vt = ({entity: e, translatedSentences: t, modifiersToDelete: n})=>{
        e.translatedSentences = e.sentencesIndexes.map((e=>t[e]));
        const {translatedContent: o, orphanModifiersMappingEquivalences: i} = Tt(e);
        if (e.translatedContent = o,
        !e.translatedContent || e.translatedContent === e.originalContent)
            return;
        e.entity[4] = e.translatedContent;
        const s = Ct(i, e);
        for (let t = 0; t < e.modifiers.length; t++) {
            const o = e.modifiers[t];
            let i = !1;
            if (St(o, s)) {
                const {start: e, end: t} = Lt(o, s);
                t <= e ? i = !0 : (o[3] = e,
                o[4] = t)
            } else
                i = !0;
            i && n.push(o)
        }
    }
      , bt = ()=>Array.from(document.querySelectorAll("#pages svg")).find((e=>"none" !== getComputedStyle(e).display))
      , $t = ({originalContent: e, modifiers: t})=>{
        const n = yt(e);
        return Et(t).filter((e=>!n.includes(e)))
    }
      , Et = e=>{
        const t = [];
        for (const n of e)
            t.includes(n[3]) || t.push(n[3]),
            t.includes(n[4]) || t.push(n[4]);
        return t
    }
      , yt = e=>{
        const t = e.split("\n")
          , n = [0];
        let o = 0;
        for (const e of t) {
            const t = o + e.length;
            n.includes(t) || n.push(t),
            n.includes(t + 1) || n.push(t + 1),
            o = t + 1
        }
        return n
    }
      , xt = ({originalContent: e, orphanModifiers: t})=>{
        let n = 0;
        const o = {}
          , i = e.split("\n").map((e=>{
            let i = "";
            for (let s = 0; s < e.length; s++) {
                const a = n + s;
                if (t.includes(a)) {
                    const n = t.indexOf(a);
                    /\s/.test(e[s]) && (o[`${n}`] = e[s]),
                    i += `<a${n}>`
                }
                i += e[s]
            }
            return n += e.length + 1,
            i
        }
        ));
        return {
            orphanModifiersIntegrityCheck: o,
            originalSentences: i
        }
    }
      , Tt = e=>{
        let t = {}
          , n = 0;
        return {
            translatedContent: e.translatedSentences.map((o=>{
                const i = {};
                let s = 0;
                const a = o.replace(/<a\d+>/g, ((t,a)=>{
                    const r = t.match(/<a(\d+)>/);
                    if (r) {
                        const l = r[1]
                          , c = t.length
                          , d = e.orphanModifiers[Number(l)];
                        void 0 !== d && (i[`${d}`] = s + n + a - c * Object.keys(i).length);
                        const u = o.charAt(a + c);
                        if (u && void 0 !== e.orphanModifiersIntegrityCheck[`${l}`] && e.orphanModifiersIntegrityCheck[`${l}`] !== u)
                            return s++,
                            e.orphanModifiersIntegrityCheck[`${l}`]
                    }
                    return ""
                }
                ));
                return t = {
                    ...t,
                    ...i
                },
                n += a.length + 1,
                a
            }
            )).join("\n"),
            orphanModifiersMappingEquivalences: t
        }
    }
      , Ct = (e={},{originalContent: t, translatedContent: n})=>{
        const o = yt(t)
          , i = yt(n)
          , s = {};
        for (let e = 0; e < o.length; e++)
            s[`${o[e]}`] = i[e];
        return {
            ...e,
            ...s
        }
    }
      , St = (e,t)=>{
        const n = e[3]
          , o = e[4];
        return void 0 !== t[`${n}`] && void 0 !== t[`${o}`]
    }
      , Lt = (e,t)=>{
        const n = e[3]
          , o = e[4];
        return {
            start: t[`${n}`],
            end: t[`${o}`]
        }
    }
      , kt = (e=25,t=null)=>new Promise((n=>setTimeout((()=>n(t)), e)));
    const Mt = {
        prod: "production",
        dev: "development",
        test: "testing"
    };
    function It() {
        return Mt.prod === Mt.dev
    }
    function At(e) {
        chrome.runtime.sendMessage({
            action: "dlTrackError",
            errorMessage: e
        })
    }
    const Nt = "PROTOCOL_ERROR"
      , Ot = "NETWORK_ERROR"
      , Dt = "FULL_PAGE_SERVER_ERROR"
      , Rt = "-32003"
      , Pt = "429"
      , Ht = "403"
      , Gt = "1045601"
      , zt = "1042902"
      , Bt = "ENTRY_NOT_FOUND"
      , Ut = "SERVER_ERROR"
      , Wt = "TRANSLATED_INPUT_NOT_SET"
      , Ft = "HTML_NODE_CHAR_LENGTH_TOO_LONG"
      , jt = "FREE_ACCOUNT_LIMIT_EXCEEDED"
      , qt = "ANONYMOUS_LIMIT_EXCEEDED";
    class Vt extends Error {
        constructor(e, t) {
            super(t),
            this.name = jt,
            this.limit = e,
            this.message = t
        }
    }
    class Zt extends Error {
        constructor(e, t) {
            super(t),
            this.name = qt,
            this.limit = e,
            this.message = t
        }
    }
    function Kt() {}
    const Yt = e=>e;
    function Xt(e) {
        return e()
    }
    function Qt() {
        return Object.create(null)
    }
    function Jt(e) {
        e.forEach(Xt)
    }
    function en(e) {
        return "function" == typeof e
    }
    function tn(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }
    function nn(e, ...t) {
        if (null == e)
            return Kt;
        const n = e.subscribe(...t);
        return n.unsubscribe ? ()=>n.unsubscribe() : n
    }
    function on(e, t, n) {
        e.$$.on_destroy.push(nn(t, n))
    }
    function sn(e, t, n, o) {
        if (e) {
            const i = an(e, t, n, o);
            return e[0](i)
        }
    }
    function an(e, t, n, o) {
        return e[1] && o ? function(e, t) {
            for (const n in t)
                e[n] = t[n];
            return e
        }(n.ctx.slice(), e[1](o(t))) : n.ctx
    }
    function rn(e, t, n, o) {
        if (e[2] && o) {
            const i = e[2](o(n));
            if (void 0 === t.dirty)
                return i;
            if ("object" == typeof i) {
                const e = []
                  , n = Math.max(t.dirty.length, i.length);
                for (let o = 0; o < n; o += 1)
                    e[o] = t.dirty[o] | i[o];
                return e
            }
            return t.dirty | i
        }
        return t.dirty
    }
    function ln(e, t, n, o, i, s) {
        if (i) {
            const a = an(t, n, o, s);
            e.p(a, i)
        }
    }
    function cn(e) {
        if (e.ctx.length > 32) {
            const t = []
              , n = e.ctx.length / 32;
            for (let e = 0; e < n; e++)
                t[e] = -1;
            return t
        }
        return -1
    }
    function dn(e) {
        return null == e ? "" : e
    }
    function un(e, t, n) {
        return e.set(n),
        t
    }
    function mn(e) {
        return e && en(e.destroy) ? e.destroy : Kt
    }
    function gn(e) {
        const t = "string" == typeof e && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
        return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"]
    }
    const pn = "undefined" != typeof window;
    let hn = pn ? ()=>window.performance.now() : ()=>Date.now()
      , fn = pn ? e=>requestAnimationFrame(e) : Kt;
    const _n = new Set;
    function wn(e) {
        _n.forEach((t=>{
            t.c(e) || (_n.delete(t),
            t.f())
        }
        )),
        0 !== _n.size && fn(wn)
    }
    function vn(e) {
        let t;
        return 0 === _n.size && fn(wn),
        {
            promise: new Promise((n=>{
                _n.add(t = {
                    c: e,
                    f: n
                })
            }
            )),
            abort() {
                _n.delete(t)
            }
        }
    }
    function bn(e, t) {
        e.appendChild(t)
    }
    function $n(e) {
        if (!e)
            return document;
        const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument
    }
    function En(e) {
        const t = Cn("style");
        return function(e, t) {
            bn(e.head || e, t),
            t.sheet
        }($n(e), t),
        t.sheet
    }
    function yn(e, t, n) {
        e.insertBefore(t, n || null)
    }
    function xn(e) {
        e.parentNode && e.parentNode.removeChild(e)
    }
    function Tn(e, t) {
        for (let n = 0; n < e.length; n += 1)
            e[n] && e[n].d(t)
    }
    function Cn(e) {
        return document.createElement(e)
    }
    function Sn(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }
    function Ln(e) {
        return document.createTextNode(e)
    }
    function kn() {
        return Ln(" ")
    }
    function Mn() {
        return Ln("")
    }
    function In(e, t, n, o) {
        return e.addEventListener(t, n, o),
        ()=>e.removeEventListener(t, n, o)
    }
    function An(e) {
        return function(t) {
            return t.preventDefault(),
            e.call(this, t)
        }
    }
    function Nn(e) {
        return function(t) {
            return t.stopPropagation(),
            e.call(this, t)
        }
    }
    function On(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }
    function Dn(e, t) {
        t = "" + t,
        e.data !== t && (e.data = t)
    }
    function Rn(e, t) {
        e.value = null == t ? "" : t
    }
    function Pn(e, t, n, o) {
        null == n ? e.style.removeProperty(t) : e.style.setProperty(t, n, o ? "important" : "")
    }
    function Hn(e, t, n) {
        for (let n = 0; n < e.options.length; n += 1) {
            const o = e.options[n];
            if (o.__value === t)
                return void (o.selected = !0)
        }
        n && void 0 === t || (e.selectedIndex = -1)
    }
    function Gn(e, t, n) {
        e.classList[n ? "add" : "remove"](t)
    }
    function zn(e, t, {bubbles: n=!1, cancelable: o=!1}={}) {
        const i = document.createEvent("CustomEvent");
        return i.initCustomEvent(e, n, o, t),
        i
    }
    class Bn {
        constructor(e=!1) {
            this.is_svg = !1,
            this.is_svg = e,
            this.e = this.n = null
        }
        c(e) {
            this.h(e)
        }
        m(e, t, n=null) {
            this.e || (this.is_svg ? this.e = Sn(t.nodeName) : this.e = Cn(11 === t.nodeType ? "TEMPLATE" : t.nodeName),
            this.t = "TEMPLATE" !== t.tagName ? t : t.content,
            this.c(e)),
            this.i(n)
        }
        h(e) {
            this.e.innerHTML = e,
            this.n = Array.from("TEMPLATE" === this.e.nodeName ? this.e.content.childNodes : this.e.childNodes)
        }
        i(e) {
            for (let t = 0; t < this.n.length; t += 1)
                yn(this.t, this.n[t], e)
        }
        p(e) {
            this.d(),
            this.h(e),
            this.i(this.a)
        }
        d() {
            this.n.forEach(xn)
        }
    }
    function Un(e, t) {
        return new e(t)
    }
    const Wn = new Map;
    let Fn, jn = 0;
    function qn(e, t, n, o, i, s, a, r=0) {
        const l = 16.666 / o;
        let c = "{\n";
        for (let e = 0; e <= 1; e += l) {
            const o = t + (n - t) * s(e);
            c += 100 * e + `%{${a(o, 1 - o)}}\n`
        }
        const d = c + `100% {${a(n, 1 - n)}}\n}`
          , u = `__svelte_${function(e) {
            lett = 5381
              , n = e.length;
            for (; n--; )
                t = (t << 5) - t ^ e.charCodeAt(n);
            return t >>> 0
        }(d)}_${r}`
          , m = $n(e)
          , {stylesheet: g, rules: p} = Wn.get(m) || function(e, t) {
            const n = {
                stylesheet: En(t),
                rules: {}
            };
            return Wn.set(e, n),
            n
        }(m, e);
        p[u] || (p[u] = !0,
        g.insertRule(`@keyframes ${u} ${d}`, g.cssRules.length));
        const h = e.style.animation || "";
        return e.style.animation = `${h ? `${h}, ` : ""}${u} ${o}ms linear ${i}ms 1 both`,
        jn += 1,
        u
    }
    function Vn(e, t) {
        const n = (e.style.animation || "").split(", ")
          , o = n.filter(t ? e=>e.indexOf(t) < 0 : e=>-1 === e.indexOf("__svelte"))
          , i = n.length - o.length;
        i && (e.style.animation = o.join(", "),
        jn -= i,
        jn || fn((()=>{
            jn || (Wn.forEach((e=>{
                const {ownerNode: t} = e.stylesheet;
                t && xn(t)
            }
            )),
            Wn.clear())
        }
        )))
    }
    function Zn(e) {
        Fn = e
    }
    function Kn() {
        if (!Fn)
            throw new Error("Function called outside component initialization");
        return Fn
    }
    function Yn(e) {
        Kn().$$.on_mount.push(e)
    }
    function Xn(e) {
        Kn().$$.on_destroy.push(e)
    }
    function Qn() {
        const e = Kn();
        return (t,n,{cancelable: o=!1}={})=>{
            const i = e.$$.callbacks[t];
            if (i) {
                const s = zn(t, n, {
                    cancelable: o
                });
                return i.slice().forEach((t=>{
                    t.call(e, s)
                }
                )),
                !s.defaultPrevented
            }
            return !0
        }
    }
    function Jn(e, t) {
        return Kn().$$.context.set(e, t),
        t
    }
    function eo(e) {
        return Kn().$$.context.get(e)
    }
    function to(e, t) {
        const n = e.$$.callbacks[t.type];
        n && n.slice().forEach((e=>e.call(this, t)))
    }
    const no = []
      , oo = [];
    let io = [];
    const so = []
      , ao = Promise.resolve();
    let ro = !1;
    function lo() {
        ro || (ro = !0,
        ao.then(ho))
    }
    function co(e) {
        io.push(e)
    }
    function uo(e) {
        so.push(e)
    }
    const mo = new Set;
    let go, po = 0;
    function ho() {
        if (0 !== po)
            return;
        const e = Fn;
        do {
            try {
                for (; po < no.length; ) {
                    const e = no[po];
                    po++,
                    Zn(e),
                    fo(e.$$)
                }
            } catch (e) {
                throw no.length = 0,
                po = 0,
                e
            }
            for (Zn(null),
            no.length = 0,
            po = 0; oo.length; )
                oo.pop()();
            for (let e = 0; e < io.length; e += 1) {
                const t = io[e];
                mo.has(t) || (mo.add(t),
                t())
            }
            io.length = 0
        } while (no.length);
        for (; so.length; )
            so.pop()();
        ro = !1,
        mo.clear(),
        Zn(e)
    }
    function fo(e) {
        if (null !== e.fragment) {
            e.update(),
            Jt(e.before_update);
            const t = e.dirty;
            e.dirty = [-1],
            e.fragment && e.fragment.p(e.ctx, t),
            e.after_update.forEach(co)
        }
    }
    function _o() {
        return go || (go = Promise.resolve(),
        go.then((()=>{
            go = null
        }
        ))),
        go
    }
    function wo(e, t, n) {
        e.dispatchEvent(zn(`${t ? "intro" : "outro"}${n}`))
    }
    const vo = new Set;
    let bo;
    function $o() {
        bo = {
            r: 0,
            c: [],
            p: bo
        }
    }
    function Eo() {
        bo.r || Jt(bo.c),
        bo = bo.p
    }
    function yo(e, t) {
        e && e.i && (vo.delete(e),
        e.i(t))
    }
    function xo(e, t, n, o) {
        if (e && e.o) {
            if (vo.has(e))
                return;
            vo.add(e),
            bo.c.push((()=>{
                vo.delete(e),
                o && (n && e.d(1),
                o())
            }
            )),
            e.o(t)
        } else
            o && o()
    }
    const To = {
        duration: 0
    };
    function Co(e, t, n) {
        const o = {
            direction: "in"
        };
        let i, s, a = t(e, n, o), r = !1, l = 0;
        function c() {
            i && Vn(e, i)
        }
        function d() {
            const {delay: t=0, duration: n=300, easing: o=Yt, tick: d=Kt, css: u} = a || To;
            u && (i = qn(e, 0, 1, n, t, o, u, l++)),
            d(0, 1);
            const m = hn() + t
              , g = m + n;
            s && s.abort(),
            r = !0,
            co((()=>wo(e, !0, "start"))),
            s = vn((t=>{
                if (r) {
                    if (t >= g)
                        return d(1, 0),
                        wo(e, !0, "end"),
                        c(),
                        r = !1;
                    if (t >= m) {
                        const e = o((t - m) / n);
                        d(e, 1 - e)
                    }
                }
                return r
            }
            ))
        }
        let u = !1;
        return {
            start() {
                u || (u = !0,
                Vn(e),
                en(a) ? (a = a(o),
                _o().then(d)) : d())
            },
            invalidate() {
                u = !1
            },
            end() {
                r && (c(),
                r = !1)
            }
        }
    }
    function So(e, t, n) {
        const o = {
            direction: "out"
        };
        let i, s = t(e, n, o), a = !0;
        const r = bo;
        function l() {
            const {delay: t=0, duration: n=300, easing: o=Yt, tick: l=Kt, css: c} = s || To;
            c && (i = qn(e, 1, 0, n, t, o, c));
            const d = hn() + t
              , u = d + n;
            co((()=>wo(e, !1, "start"))),
            vn((t=>{
                if (a) {
                    if (t >= u)
                        return l(0, 1),
                        wo(e, !1, "end"),
                        --r.r || Jt(r.c),
                        !1;
                    if (t >= d) {
                        const e = o((t - d) / n);
                        l(1 - e, e)
                    }
                }
                return a
            }
            ))
        }
        return r.r += 1,
        en(s) ? _o().then((()=>{
            s = s(o),
            l()
        }
        )) : l(),
        {
            end(t) {
                t && s.tick && s.tick(1, 0),
                a && (i && Vn(e, i),
                a = !1)
            }
        }
    }
    function Lo(e, t, n, o) {
        const i = {
            direction: "both"
        };
        let s = t(e, n, i)
          , a = o ? 0 : 1
          , r = null
          , l = null
          , c = null;
        function d() {
            c && Vn(e, c)
        }
        function u(e, t) {
            const n = e.b - a;
            return t *= Math.abs(n),
            {
                a: a,
                b: e.b,
                d: n,
                duration: t,
                start: e.start,
                end: e.start + t,
                group: e.group
            }
        }
        function m(t) {
            const {delay: n=0, duration: o=300, easing: i=Yt, tick: m=Kt, css: g} = s || To
              , p = {
                start: hn() + n,
                b: t
            };
            t || (p.group = bo,
            bo.r += 1),
            r || l ? l = p : (g && (d(),
            c = qn(e, a, t, o, n, i, g)),
            t && m(0, 1),
            r = u(p, o),
            co((()=>wo(e, t, "start"))),
            vn((t=>{
                if (l && t > l.start && (r = u(l, o),
                l = null,
                wo(e, r.b, "start"),
                g && (d(),
                c = qn(e, a, r.b, r.duration, 0, i, s.css))),
                r)
                    if (t >= r.end)
                        m(a = r.b, 1 - a),
                        wo(e, r.b, "end"),
                        l || (r.b ? d() : --r.group.r || Jt(r.group.c)),
                        r = null;
                    else if (t >= r.start) {
                        const e = t - r.start;
                        a = r.a + r.d * i(e / r.duration),
                        m(a, 1 - a)
                    }
                return !(!r && !l)
            }
            )))
        }
        return {
            run(e) {
                en(s) ? _o().then((()=>{
                    s = s(i),
                    m(e)
                }
                )) : m(e)
            },
            end() {
                d(),
                r = l = null
            }
        }
    }
    function ko(e, t, n) {
        const o = e.$$.props[t];
        void 0 !== o && (e.$$.bound[o] = n,
        n(e.$$.ctx[o]))
    }
    function Mo(e) {
        e && e.c()
    }
    function Io(e, t, n, o) {
        const {fragment: i, after_update: s} = e.$$;
        i && i.m(t, n),
        o || co((()=>{
            const t = e.$$.on_mount.map(Xt).filter(en);
            e.$$.on_destroy ? e.$$.on_destroy.push(...t) : Jt(t),
            e.$$.on_mount = []
        }
        )),
        s.forEach(co)
    }
    function Ao(e, t) {
        const n = e.$$;
        null !== n.fragment && (!function(e) {
            const t = []
              , n = [];
            io.forEach((o=>-1 === e.indexOf(o) ? t.push(o) : n.push(o))),
            n.forEach((e=>e())),
            io = t
        }(n.after_update),
        Jt(n.on_destroy),
        n.fragment && n.fragment.d(t),
        n.on_destroy = n.fragment = null,
        n.ctx = [])
    }
    function No(e, t, n, o, i, s, a, r=[-1]) {
        const l = Fn;
        Zn(e);
        const c = e.$$ = {
            fragment: null,
            ctx: [],
            props: s,
            update: Kt,
            not_equal: i,
            bound: Qt(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(t.context || (l ? l.$$.context : [])),
            callbacks: Qt(),
            dirty: r,
            skip_bound: !1,
            root: t.target || l.$$.root
        };
        a && a(c.root);
        let d = !1;
        if (c.ctx = n ? n(e, t.props || {}, ((t,n,...o)=>{
            const s = o.length ? o[0] : n;
            return c.ctx && i(c.ctx[t], c.ctx[t] = s) && (!c.skip_bound && c.bound[t] && c.bound[t](s),
            d && function(e, t) {
                -1 === e.$$.dirty[0] && (no.push(e),
                lo(),
                e.$$.dirty.fill(0)),
                e.$$.dirty[t / 31 | 0] |= 1 << t % 31
            }(e, t)),
            n
        }
        )) : [],
        c.update(),
        d = !0,
        Jt(c.before_update),
        c.fragment = !!o && o(c.ctx),
        t.target) {
            if (t.hydrate) {
                const e = function(e) {
                    return Array.from(e.childNodes)
                }(t.target);
                c.fragment && c.fragment.l(e),
                e.forEach(xn)
            } else
                c.fragment && c.fragment.c();
            t.intro && yo(e.$$.fragment),
            Io(e, t.target, t.anchor, t.customElement),
            ho()
        }
        Zn(l)
    }
    class Oo {
        $destroy() {
            Ao(this, 1),
            this.$destroy = Kt
        }
        $on(e, t) {
            if (!en(t))
                return Kt;
            const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return n.push(t),
            ()=>{
                const e = n.indexOf(t);
                -1 !== e && n.splice(e, 1)
            }
        }
        $set(e) {
            var t;
            this.$$set && (t = e,
            0 !== Object.keys(t).length) && (this.$$.skip_bound = !0,
            this.$$set(e),
            this.$$.skip_bound = !1)
        }
    }
    const Do = [];
    function Ro(e, t=Kt) {
        let n;
        const o = new Set;
        function i(t) {
            if (tn(e, t) && (e = t,
            n)) {
                const t = !Do.length;
                for (const t of o)
                    t[1](),
                    Do.push(t, e);
                if (t) {
                    for (let e = 0; e < Do.length; e += 2)
                        Do[e][0](Do[e + 1]);
                    Do.length = 0
                }
            }
        }
        return {
            set: i,
            update: function(t) {
                i(t(e))
            },
            subscribe: function(s, a=Kt) {
                const r = [s, a];
                return o.add(r),
                1 === o.size && (n = t(i) || Kt),
                s(e),
                ()=>{
                    o.delete(r),
                    0 === o.size && n && (n(),
                    n = null)
                }
            }
        }
    }
    const Po = function() {
        const {subscribe: e, set: t, update: n} = Ro({});
        return chrome.storage.sync.get(null, (e=>{
            t(e),
            chrome.storage.local.get(["isLoggedIn", "isProUser", "translatorServiceType", "apiServiceType", "docTranslatorServiceType", "browserInstanceId", "featureSet"], (e=>{
                n((t=>({
                    ...t,
                    ...e
                })))
            }
            ))
        }
        )),
        chrome.storage.onChanged.addListener((e=>{
            const t = ["a_t", "r_t", "i_t", "accountId"];
            let o = {};
            for (const [n,i] of Object.entries(e))
                !1 === t.includes(n) && (o[n] = i.newValue);
            if (It()) {
                const e = "background-color: #324054;padding: 3px; font-size:12px;color:#e1e8c3; font-weight:600";
                console.log(`%c${(new Date).toISOString()} UPDATE USER SETTINGS`, e, o)
            }
            n((e=>({
                ...e,
                ...o
            })))
        }
        )),
        {
            subscribe: e,
            set: e=>chrome.storage.sync.set(e)
        }
    }()
      , Ho = function() {
        const {subscribe: e, update: t} = Ro({});
        return chrome.runtime.onMessage.addListener((function(e, n) {
            switch (e.action) {
            case "newWebsiteState":
                e.payload && t((t=>({
                    ...t,
                    [n.tab.id]: {
                        ...t[n.tab.id],
                        ...e.payload,
                        error: e.payload.error ? e.payload.error : void 0
                    }
                })));
                break;
            case "resetWebsiteState":
                e.payload && t((t=>({
                    ...t,
                    [n.tab.id]: {
                        ...e.payload
                    }
                })))
            }
        }
        )),
        {
            subscribe: e,
            fetchCurrentWebsiteSettings: ()=>{
                chrome.tabs && chrome.tabs.query({
                    active: !0,
                    currentWindow: !0
                }, (function(e) {
                    chrome.tabs.sendMessage(e[0].id, {
                        action: "dlGetWebsiteData"
                    }, (function(n) {
                        t((t=>({
                            ...t,
                            [e[0].id]: {
                                ...t[e[0].id],
                                ...n
                            }
                        })))
                    }
                    ))
                }
                ))
            }
        }
    }();
    function Go(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "dl-zendesk-icon svelte-1tytp0d")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    !function(e, t, n) {
        const o = !Array.isArray(e)
          , i = o ? [e] : e
          , s = t.length < 2;
        Ro(n, (e=>{
            let n = !1;
            const a = [];
            let r = 0
              , l = Kt;
            const c = ()=>{
                if (r)
                    return;
                l();
                const n = t(o ? a[0] : a, e);
                s ? e(n) : l = en(n) ? n : Kt
            }
              , d = i.map(((e,t)=>nn(e, (e=>{
                a[t] = e,
                r &= ~(1 << t),
                n && c()
            }
            ), (()=>{
                r |= 1 << t
            }
            ))));
            return n = !0,
            c(),
            function() {
                Jt(d),
                l(),
                n = !1
            }
        }
        )).subscribe
    }(Ho, (async(e,t)=>{
        if (!chrome.tabs)
            return;
        t(e[(await chrome.tabs.query({
            active: !0,
            currentWindow: !0
        }))[0].id])
    }
    )),
    function() {
        const {subscribe: e, set: n} = Ro([]);
        t({
            action: "dlGetExperiments",
            payload: {
                forceFetch: !1
            }
        }).then((e=>n(e))),
        chrome.runtime.onMessage.addListener((function(e) {
            if ("dlExperimentsUpdated" === e.action)
                e.payload && n(e.payload.experiments)
        }
        ))
    }();
    function zo(e, t, n) {
        let o, i, s;
        on(e, Po, (e=>n(1, o = e)));
        const a = ()=>{
            const e = window.location.pathname
              , t = sl(e);
            if (t) {
                const e = al();
                if (!e)
                    return;
                const n = rl(e) || ll(e, t);
                n && n.processRefreshUI()
            }
        }
          , r = async e=>{
            if ("dlChangeActiveTabStatus" === e.action)
                e.payload.isActive ? l() : c()
        }
          , l = ()=>{
            i && clearInterval(i),
            i = setInterval(a, 800)
        }
          , c = ()=>{
            clearInterval(i)
        }
        ;
        Yn((()=>{
            const e = o.zendeskSuccessfulTranslations >= ce;
            n(0, s = o?.featureSet?.customizations?.includes("zendesk")),
            e && !s && un(Po, o.isZendeskEnabled = !1, o),
            d()
        }
        ));
        const d = ()=>{
            l(),
            chrome.runtime.onMessage.addListener(r)
        }
        ;
        return Xn((()=>{
            i && c(),
            chrome.runtime.onMessage.removeListener(r),
            dl()
        }
        )),
        e.$$.update = ()=>{
            2 & e.$$.dirty && !o?.featureSet?.customizations?.includes("zendesk") && o.zendeskSuccessfulTranslations >= ce && (un(Po, o.isZendeskEnabled = !1, o),
            ul()),
            3 & e.$$.dirty && !1 === s && o?.featureSet?.customizations?.includes("zendesk") && (n(0, s = !0),
            un(Po, o.isZendeskEnabled = !0, o),
            l()),
            2 & e.$$.dirty && (o.isZendeskEnabled ? l() : ul())
        }
        ,
        [s, o]
    }
    class Bo extends Oo {
        constructor(e) {
            super(),
            No(this, e, zo, Go, tn, {})
        }
    }
    class Uo {
        static HTML_TAG_NAME = "deepl-zendesk-controller";
        static createElement = (e=document)=>{
            const t = e.createElement(Uo.HTML_TAG_NAME)
              , n = new Uo(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.showOnboarding = n.showOnboarding,
            t.getActiveTermbases = n.getActiveTermbases,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer)
        }
        createDOM = ()=>{
            this.domElement.mainComponent = new Bo({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: this
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
        ;
        showOnboarding = ()=>{
            this.domElement.mainComponent.showOnboarding()
        }
        ;
        getActiveTermbases = ()=>this.domElement.mainComponent.getActiveTermbases()
    }
    function Wo(e) {
        const t = e - 1;
        return t * t * t + 1
    }
    function Fo(e, {delay: t=0, duration: n=400, easing: o=Yt}={}) {
        const i = +getComputedStyle(e).opacity;
        return {
            delay: t,
            duration: n,
            easing: o,
            css: e=>"opacity: " + e * i
        }
    }
    function jo(e, {delay: t=0, duration: n=400, easing: o=Wo, x: i=0, y: s=0, opacity: a=0}={}) {
        const r = getComputedStyle(e)
          , l = +r.opacity
          , c = "none" === r.transform ? "" : r.transform
          , d = l * (1 - a)
          , [u,m] = gn(i)
          , [g,p] = gn(s);
        return {
            delay: t,
            duration: n,
            easing: o,
            css: (e,t)=>`\n\t\t\ttransform: ${c} translate(${(1 - e) * u}${m}, ${(1 - e) * g}${p});\n\t\t\topacity: ${l - d * t}`
        }
    }
    function qo(e, t) {
        if (!e || !t)
            return !1;
        const n = /[\n\r\s]+/gm
          , o = e.replace(n, "")
          , i = t.replace(n, "");
        return o.includes(i)
    }
    function Vo(e, t, n) {
        let o = {
            block: "end",
            position: e.length
        };
        return t.forEach((t=>{
            const i = e.indexOf(`<${t}>`, n);
            i > -1 && i < o.position && (o = {
                block: t,
                position: i
            })
        }
        )),
        [o.block, o.position]
    }
    function Zo(e, t=[]) {
        const n = [];
        let o = 0
          , i = !1;
        for (; !i; ) {
            const [s,a] = Vo(e, t, o);
            if ("end" === s && (i = !0),
            o < a && n.push({
                block: "main",
                text: e.substring(o, a)
            }),
            i)
                break;
            const r = e.indexOf(`</${s}>`, a);
            -1 === r ? (n.push({
                block: s,
                text: e.substring(a + `<${s}>`.length)
            }),
            i = !0) : (n.push({
                block: s,
                text: e.substring(a + `<${s}>`.length, r)
            }),
            o = r + `</${s}>`.length)
        }
        return n
    }
    function Ko(e) {
        return e.match(/[^\s.,:;'"]+|[.,:;'"]|\s+/g) || []
    }
    function Yo(e, t) {
        const n = Ko(e)
          , o = Ko(t)
          , i = function(e, t, n) {
            const o = n || ((e,t)=>e === t)
              , i = (()=>{
                let n = 0;
                for (; o(e[n], t[n]) && n < e.length; )
                    ++n;
                return n
            }
            )();
            if (i === e.length && e.length === t.length)
                return [i];
            const s = (()=>{
                let n = e.length - 1
                  , s = t.length - 1;
                for (; o(e[n], t[s]) && n > i && s > i; )
                    --n,
                    --s;
                return e.length - n - 1
            }
            )()
              , a = e.length - i - s + 1
              , r = t.length - i - s + 1
              , l = a + r
              , c = new Map
              , d = new Map;
            c.set(1, 0),
            d.set(1, null);
            for (let n = 0; n <= l; ++n)
                for (let l = -n; l <= n; l += 2) {
                    let u, m, g;
                    for (l == -n || l != n && c.get(l - 1) < c.get(l + 1) ? (u = c.get(l + 1),
                    g = [d.get(l + 1), void 0, void 0]) : (u = c.get(l - 1) + 1,
                    g = [d.get(l - 1), void 0, void 0]),
                    m = u - l; u < a && m < r && o(e[u + i], t[m + i]); )
                        ++u,
                        ++m;
                    if (u >= a && m >= r) {
                        g[1] = a + s - 1,
                        g[2] = r + s - 1;
                        let e = -1
                          , t = -1;
                        const n = [];
                        for (; g; )
                            n.push([g[1], g[2]]),
                            g = g[0];
                        let o = []
                          , l = null;
                        for (; n.length; ) {
                            const i = n.pop()
                              , s = i[0]
                              , a = i[1]
                              , r = s - e
                              , c = a - t
                              , d = Math.min(r, c);
                            r > d && (l ? l[0] += r - d : (l = [r - d, 0],
                            o.push(l))),
                            c > d && (l ? l[1] += c - d : (l = [0, c - d],
                            o.push(l))),
                            d > 0 && (o.push(d),
                            l = null),
                            e = s,
                            t = a
                        }
                        return o[0] = o[0] - 1 + i,
                        o
                    }
                    c.set(l, u),
                    g[1] = u,
                    g[2] = m,
                    d.set(l, g)
                }
            throw new Error("[diff]","should not happen?")
        }(n, o)
          , s = [];
        let a = 0
          , r = 0
          , l = 0;
        for (; a < i.length; ) {
            const e = i[a];
            let t = 0;
            for (let o = r + e - 1; o >= r; o -= 1)
                t += n[o]?.match(/^\s/) ? 2 : 1;
            r += e,
            l += e;
            let c = 0
              , d = 0;
            if (r < n.length && l < o.length && n[r]?.match(/^\s/) && o[l]?.match(/^\s/) && (c -= 1,
            d -= 1,
            t += 1),
            s.push(t),
            a += 1,
            a < i.length) {
                const [e,t] = i[a];
                for (let t = r + e - 1; t >= r; t -= 1)
                    c += n[t]?.match(/^\s/) ? 2 : 1;
                for (let e = l + t - 1; e >= l; e -= 1)
                    d += o[e]?.match(/^\s/) ? 2 : 1;
                s.push([Math.max(c, 0), Math.max(d, 0)]),
                a += 1,
                r += e,
                l += t
            }
        }
        return [s, n, o, i]
    }
    function Xo(e, t) {
        let n = 0;
        const o = function(e, t) {
            const n = Yo(t, e)
              , o = [];
            let i = 0
              , s = 0
              , a = 0
              , r = 0;
            return n[3].forEach((e=>{
                if (Array.isArray(e) && "number" == typeof e[0] && "number" == typeof e[1]) {
                    if (0 !== e[1]) {
                        const t = n[2].slice(s, s + e[1]).join("")
                          , l = n[1].slice(i, i + e[0]).join("")
                          , c = {
                            original: l,
                            replace: t
                        };
                        c.changeLength = t.length,
                        c.changeOffset = a,
                        c.originalLength = l.length,
                        c.originalOffset = r,
                        a += t.length,
                        r += l.length,
                        o.push(c)
                    }
                    i += e[0],
                    s += e[1]
                } else {
                    let t = 0;
                    n[2].slice(s, s + e).forEach((e=>t += e.length)),
                    a += t;
                    let o = 0;
                    n[1].slice(i, i + e).forEach((e=>o += e.length)),
                    r += o,
                    i += e,
                    s += e
                }
            }
            )),
            o
        }(e, t)
          , i = [];
        for (let t of o) {
            t.changeOffset > n && i.push({
                isHighlighted: !1,
                text: e.substring(n, t.changeOffset)
            });
            const o = t.changeOffset + t.changeLength;
            i.push({
                isHighlighted: !0,
                text: e.substring(t.changeOffset, o)
            }),
            n = o
        }
        return n < e.length && i.push({
            isHighlighted: !1,
            text: e.substring(n, e.length)
        }),
        i
    }
    function Qo(e) {
        return "IFRAME" === e.nodeName.toUpperCase() ? ti(e) : e.ownerDocument === document ? window : e.ownerDocument
    }
    function Jo(e) {
        return e.ownerDocument === document ? document : e.ownerDocument
    }
    function ei(e) {
        return "IFRAME" !== e.nodeName.toUpperCase() ? e : ti(e).body
    }
    function ti(e) {
        return e.contentDocument || e.contentWindow.document
    }
    function ni(e) {
        if ("IFRAME" === e.nodeName.toUpperCase())
            return window;
        if (e.ownerDocument !== document) {
            const t = e?.ownerDocument?.defaultView?.frameElement?.contentWindow;
            if (t)
                return t
        }
        return window
    }
    function oi(e) {
        return "IFRAME" === e.nodeName.toUpperCase() ? ti(e) : e.ownerDocument === document ? document : e.ownerDocument
    }
    function ii(e) {
        return new Promise(((t,n)=>{
            requestAnimationFrame((()=>{
                const n = Jo(e).createRange();
                n.selectNodeContents(ei(e));
                const o = Qo(e).getSelection();
                o.removeAllRanges(),
                o.addRange(n),
                t(o)
            }
            ))
        }
        ))
    }
    const si = async(e,t)=>{
        await kt(10);
        const n = new ClipboardEvent("paste");
        n.clipboardData.setData("text/html", t.html),
        n.clipboardData.setData("text/plain", t.text),
        e.dispatchEvent(n),
        await kt(10)
    }
      , ai = async(e,t)=>{
        await kt(10);
        const n = new ClipboardEvent("paste",{
            dataType: "text/html",
            data: t.html
        });
        e.dispatchEvent(n),
        await kt(10)
    }
      , ri = async(e,t)=>{
        await kt(10);
        const n = new ClipboardEvent("paste",{
            dataType: "text/plain",
            data: t.text
        });
        e.dispatchEvent(n),
        await kt(10)
    }
      , li = async(e,t)=>{
        await kt(10),
        document.execCommand("insertText", !1, t.text),
        await kt(10)
    }
      , ci = async(e,t)=>{
        await kt(10),
        document.execCommand("insertHTML", !1, t.html),
        await kt(10)
    }
      , di = async(e,t)=>{
        const n = ni(e);
        await kt(10);
        const o = new DataTransfer;
        o.setData("text/html", t.html),
        o.setData("text/plain", t.text),
        e.dispatchEvent(new n.ClipboardEvent("paste",{
            clipboardData: o,
            bubbles: !0,
            cancelable: !0
        })),
        o.clearData(),
        await kt(10)
    }
      , ui = async(e,t)=>{
        const n = oi(e)
          , o = ni(e)
          , i = n.createEvent("TextEvent");
        i.initTextEvent("textInput", !0, !0, o, t.text),
        e.dispatchEvent(i),
        await kt(10)
    }
      , mi = async(e,t)=>{
        const n = oi(e);
        e.value && e.select(),
        n.execCommand("insertHTML", !1, t.html),
        await kt(20),
        (e.value || "" === e.value) && (e.value = t.text)
    }
      , gi = async(e,n,o)=>{
        const i = Be();
        o || e.focus();
        const s = ei(e).innerText
          , a = ei(e).value
          , r = [...i ? [{
            method: si,
            isSuccessful: ()=>pi(s, e.innerText, n.text)
        }, {
            method: ai,
            isSuccessful: ()=>pi(s, e.innerText, n.text)
        }, {
            method: ri,
            isSuccessful: ()=>pi(s, e.innerText, n.text)
        }, {
            method: li,
            isSuccessful: ()=>pi(s, e.innerText, n.text)
        }, {
            method: ci,
            isSuccessful: ()=>pi(s, e.innerText, n.text) || pi(a, e.value, n.text)
        }] : [], {
            method: di,
            isSuccessful: ()=>pi(s, ei(e).innerText, n.text)
        }, {
            method: ui,
            isSuccessful: ()=>pi(s, ei(e).innerText, n.text)
        }, {
            method: mi,
            isSuccessful: ()=>pi(s, ei(e).innerText, n.text) || pi(a, ei(e).value, n.text)
        }];
        for (const t of r)
            if (i && It() && console.log(`trying paste event: ${t.method.name}`),
            await t.method(e, n),
            t.isSuccessful())
                return void (i && It() && console.log("attempt was successful: ", t.method.name));
        throw await kt(1e3),
        t({
            action: "dlTranslatedInputTextNotSet",
            payload: window.location.hostname
        }),
        new Error({
            error: Wt
        })
    }
      , pi = (e,t,n)=>{
        let o = !0;
        return (e && !t || !qo(e, n) && e === t || !qo(t, n)) && (o = !1),
        o
    }
      , hi = (e,t)=>{
        const n = new (ni(t).KeyboardEvent)(e,{
            bubbles: !0,
            cancelable: !0,
            keyCode: 8,
            which: 8,
            location: 0,
            key: "Backspace"
        });
        return t.dispatchEvent(n)
    }
      , fi = (e,t)=>{
        const n = new MouseEvent(e,{
            bubbles: !0,
            cancelable: !1
        });
        return t.dispatchEvent(n)
    }
      , _i = e=>{
        const t = ni(e)
          , n = Jo(e);
        if (hi("keydown", e)) {
            const o = new t.InputEvent("beforeinput",{
                bubbles: !0,
                cancelable: !0,
                inputType: "deleteContent"
            });
            e.dispatchEvent(o) && n.execCommand("delete", !1)
        }
        hi("keyup", e)
    }
    ;
    function wi(e, {isShadow: t=!1, exceptions: n=[]}={}) {
        const o = o=>{
            const i = t ? o.composedPath()[0] : o.target;
            !e || e.contains(i) || o.defaultPrevented || function(e, t) {
                for (let n of t)
                    if (e.closest(n))
                        return !0;
                return !1
            }(i, n) || e.dispatchEvent(new CustomEvent("click_outside",e))
        }
        ;
        return document.addEventListener("click", o, !0),
        {
            destroy() {
                document.removeEventListener("click", o, !0)
            }
        }
    }
    function vi(e) {
        document.addEventListener("deepl-reset-event", e)
    }
    function bi(e) {
        let t, n;
        const o = e[8].default
          , i = sn(o, e, e[7], null);
        return {
            c() {
                t = Cn("div"),
                i && i.c()
            },
            m(e, o) {
                yn(e, t, o),
                i && i.m(t, null),
                n = !0
            },
            p(e, t) {
                i && i.p && (!n || 128 & t) && ln(i, o, e, e[7], n ? rn(o, e[7], t, null) : cn(e[7]), null)
            },
            i(e) {
                n || (yo(i, e),
                n = !0)
            },
            o(e) {
                xo(i, e),
                n = !1
            },
            d(e) {
                e && xn(t),
                i && i.d(e)
            }
        }
    }
    function $i(e) {
        let t, n, o;
        const i = e[8].default
          , s = sn(i, e, e[7], null);
        return {
            c() {
                t = Cn("div"),
                s && s.c(),
                On(t, "data-tooltip", e[0]),
                On(t, "style", n = `z-index: ${e[2]}; ${e[5]}`),
                On(t, "class", "svelte-1e5qaj6"),
                Gn(t, "multiline", e[1]),
                Gn(t, "isFlexItem", e[4])
            },
            m(e, n) {
                yn(e, t, n),
                s && s.m(t, null),
                o = !0
            },
            p(e, a) {
                s && s.p && (!o || 128 & a) && ln(s, i, e, e[7], o ? rn(i, e[7], a, null) : cn(e[7]), null),
                (!o || 1 & a) && On(t, "data-tooltip", e[0]),
                (!o || 36 & a && n !== (n = `z-index: ${e[2]}; ${e[5]}`)) && On(t, "style", n),
                (!o || 2 & a) && Gn(t, "multiline", e[1]),
                (!o || 16 & a) && Gn(t, "isFlexItem", e[4])
            },
            i(e) {
                o || (yo(s, e),
                o = !0)
            },
            o(e) {
                xo(s, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                s && s.d(e)
            }
        }
    }
    function Ei(e) {
        let t, n, o, i;
        const s = [$i, bi]
          , a = [];
        function r(e, t) {
            return e[3] ? 0 : 1
        }
        return t = r(e),
        n = a[t] = s[t](e),
        {
            c() {
                n.c(),
                o = Mn()
            },
            m(e, n) {
                a[t].m(e, n),
                yn(e, o, n),
                i = !0
            },
            p(e, [i]) {
                let l = t;
                t = r(e),
                t === l ? a[t].p(e, i) : ($o(),
                xo(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                Eo(),
                n = a[t],
                n ? n.p(e, i) : (n = a[t] = s[t](e),
                n.c()),
                yo(n, 1),
                n.m(o.parentNode, o))
            },
            i(e) {
                i || (yo(n),
                i = !0)
            },
            o(e) {
                xo(n),
                i = !1
            },
            d(e) {
                a[t].d(e),
                e && xn(o)
            }
        }
    }
    function yi(e, t, n) {
        let o, {$$slots: i={}, $$scope: s} = t;
        const {deepl_inline_ui: a} = L;
        let {tooltip: r=!1} = t
          , {multiline: l=!1} = t
          , {zIndex: c=a.z_index} = t
          , {isEnabled: d=!0} = t
          , {isFlexItem: u=!1} = t
          , {width: m=null} = t;
        return e.$$set = e=>{
            "tooltip"in e && n(0, r = e.tooltip),
            "multiline"in e && n(1, l = e.multiline),
            "zIndex"in e && n(2, c = e.zIndex),
            "isEnabled"in e && n(3, d = e.isEnabled),
            "isFlexItem"in e && n(4, u = e.isFlexItem),
            "width"in e && n(6, m = e.width),
            "$$scope"in e && n(7, s = e.$$scope)
        }
        ,
        e.$$.update = ()=>{
            64 & e.$$.dirty && n(5, o = m ? `width: ${m}px` : "")
        }
        ,
        [r, l, c, d, u, o, m, s, i]
    }
    class xi extends Oo {
        constructor(e) {
            super(),
            No(this, e, yi, Ei, tn, {
                tooltip: 0,
                multiline: 1,
                zIndex: 2,
                isEnabled: 3,
                isFlexItem: 4,
                width: 6
            })
        }
    }
    const Ti = (e,t)=>{
        const n = new ResizeObserver((()=>{
            const n = {
                clientHeight: e.clientHeight,
                clientWidth: e.clientWidth,
                offsetHeight: e.offsetHeight,
                offsetWidth: e.offsetWidth
            };
            t(n)
        }
        ));
        return n.observe(e),
        ()=>{
            n.disconnect()
        }
    }
    ;
    function Ci(e, t, n) {
        const o = e.slice();
        return o[41] = t[n],
        o
    }
    function Si(e) {
        let t, n, o, i = e[3], s = [];
        for (let t = 0; t < i.length; t += 1)
            s[t] = Mi(Ci(e, i, t));
        return {
            c() {
                t = Cn("ul");
                for (let e = 0; e < s.length; e += 1)
                    s[e].c();
                On(t, "id", "dropdown_list"),
                On(t, "class", "dropdown__list svelte-n6zims"),
                On(t, "role", "listbox"),
                On(t, "aria-labelledby", "dropdown_option"),
                On(t, "tabindex", "-1"),
                On(t, "style", n = "up" === e[12] ? "bottom: 30px" : `height: ${e[16].height}; top: ${e[16].top};`),
                On(t, "data-qa", e[6]),
                Gn(t, "alternate-dropdown-list", "sm" === e[8]),
                Gn(t, "align-right", e[9])
            },
            m(e, n) {
                yn(e, t, n);
                for (let e = 0; e < s.length; e += 1)
                    s[e] && s[e].m(t, null)
            },
            p(e, o) {
                if (1056779 & o[0]) {
                    let n;
                    for (i = e[3],
                    n = 0; n < i.length; n += 1) {
                        const a = Ci(e, i, n);
                        s[n] ? s[n].p(a, o) : (s[n] = Mi(a),
                        s[n].c(),
                        s[n].m(t, null))
                    }
                    for (; n < s.length; n += 1)
                        s[n].d(1);
                    s.length = i.length
                }
                69632 & o[0] && n !== (n = "up" === e[12] ? "bottom: 30px" : `height: ${e[16].height}; top: ${e[16].top};`) && On(t, "style", n),
                64 & o[0] && On(t, "data-qa", e[6]),
                256 & o[0] && Gn(t, "alternate-dropdown-list", "sm" === e[8]),
                512 & o[0] && Gn(t, "align-right", e[9])
            },
            i(e) {
                o || co((()=>{
                    o = Co(t, jo, {
                        y: -5,
                        duration: 500
                    }),
                    o.start()
                }
                ))
            },
            o: Kt,
            d(e) {
                e && xn(t),
                Tn(s, e)
            }
        }
    }
    function Li(e) {
        let t, n = e[41].label + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p(e, o) {
                8 & o[0] && n !== (n = e[41].label + "") && Dn(t, n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function ki(e) {
        let t, n, o = e[41].label + "";
        return {
            c() {
                t = new Bn(!1),
                n = Mn(),
                t.a = n
            },
            m(e, i) {
                t.m(o, e, i),
                yn(e, n, i)
            },
            p(e, n) {
                8 & n[0] && o !== (o = e[41].label + "") && t.p(o)
            },
            d(e) {
                e && xn(n),
                e && t.d()
            }
        }
    }
    function Mi(e) {
        let t, n, o, i, s, a, r;
        function l(e, t) {
            return e[13] ? ki : Li
        }
        let c = l(e)
          , d = c(e);
        function u() {
            return e[32](e[41])
        }
        return {
            c() {
                t = Cn("li"),
                d.c(),
                n = kn(),
                On(t, "role", "option"),
                On(t, "data-option-value", o = e[41].value),
                On(t, "data-option-regionalvariant", i = e[41].regionalVariant),
                On(t, "aria-selected", s = e[0] === e[41]),
                On(t, "class", "svelte-n6zims"),
                Gn(t, "selected", e[0] === e[41])
            },
            m(o, i) {
                yn(o, t, i),
                d.m(t, null),
                bn(t, n),
                a || (r = [In(t, "click", u), In(t, "mousedown", Nn(An(e[29])))],
                a = !0)
            },
            p(a, r) {
                c === (c = l(e = a)) && d ? d.p(e, r) : (d.d(1),
                d = c(e),
                d && (d.c(),
                d.m(t, n))),
                8 & r[0] && o !== (o = e[41].value) && On(t, "data-option-value", o),
                8 & r[0] && i !== (i = e[41].regionalVariant) && On(t, "data-option-regionalvariant", i),
                9 & r[0] && s !== (s = e[0] === e[41]) && On(t, "aria-selected", s),
                9 & r[0] && Gn(t, "selected", e[0] === e[41])
            },
            d(e) {
                e && xn(t),
                d.d(),
                a = !1,
                Jt(r)
            }
        }
    }
    function Ii(e) {
        let t, n, o, i, s, a, r, l = e[1] && Si(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("button"),
                o = Ln(e[17]),
                i = kn(),
                l && l.c(),
                On(n, "aria-haspopup", "listbox"),
                On(n, "id", "dropdown_button"),
                On(n, "aria-labelledby", "dropdown_option dropdown_button"),
                On(n, "aria-expanded", e[1]),
                On(n, "data-qa", e[5]),
                On(n, "class", "svelte-n6zims"),
                Gn(n, "dropdown-label", "original" === e[7]),
                Gn(n, "dropdown-label-alternate", "alternate" === e[7]),
                Gn(n, "dropdown-label-zendesk", "zendesk" === e[7]),
                Gn(n, "dropdown-label-full-width", e[10]),
                Gn(n, "dropdown-label-borderless", e[11]),
                Gn(n, "dropup", "up" === e[12]),
                Gn(n, "extra-padding", e[14]),
                On(t, "class", s = dn(`dropdown__wrapper ${e[4]}`) + " svelte-n6zims"),
                On(t, "style", e[19]),
                Gn(t, "disabled", e[2])
            },
            m(s, c) {
                yn(s, t, c),
                bn(t, n),
                bn(n, o),
                e[31](n),
                bn(t, i),
                l && l.m(t, null),
                e[34](t),
                a || (r = [In(n, "click", e[21]), In(n, "mousedown", Nn(An(e[30]))), mn(wi.call(null, t, {
                    isShadow: !0
                })), In(t, "click_outside", e[33])],
                a = !0)
            },
            p(e, i) {
                131072 & i[0] && Dn(o, e[17]),
                2 & i[0] && On(n, "aria-expanded", e[1]),
                32 & i[0] && On(n, "data-qa", e[5]),
                128 & i[0] && Gn(n, "dropdown-label", "original" === e[7]),
                128 & i[0] && Gn(n, "dropdown-label-alternate", "alternate" === e[7]),
                128 & i[0] && Gn(n, "dropdown-label-zendesk", "zendesk" === e[7]),
                1024 & i[0] && Gn(n, "dropdown-label-full-width", e[10]),
                2048 & i[0] && Gn(n, "dropdown-label-borderless", e[11]),
                4096 & i[0] && Gn(n, "dropup", "up" === e[12]),
                16384 & i[0] && Gn(n, "extra-padding", e[14]),
                e[1] ? l ? (l.p(e, i),
                2 & i[0] && yo(l, 1)) : (l = Si(e),
                l.c(),
                yo(l, 1),
                l.m(t, null)) : l && (l.d(1),
                l = null),
                16 & i[0] && s !== (s = dn(`dropdown__wrapper ${e[4]}`) + " svelte-n6zims") && On(t, "class", s),
                524288 & i[0] && On(t, "style", e[19]),
                20 & i[0] && Gn(t, "disabled", e[2])
            },
            i(e) {
                yo(l)
            },
            o: Kt,
            d(n) {
                n && xn(t),
                e[31](null),
                l && l.d(),
                e[34](null),
                a = !1,
                Jt(r)
            }
        }
    }
    function Ai(e, t, n) {
        let {isOpen: o=!1} = t
          , {disabled: i=!1} = t
          , {items: s=[]} = t
          , {placeholder: a=""} = t
          , {customClass: r=""} = t
          , {selectedOption: l} = t
          , {defaultOption: c} = t
          , {dataQaButton: d="dl-dropdown-button"} = t
          , {dataQaList: u="dl-dropdown-list"} = t
          , {variant: m="original"} = t
          , {fontSize: g="default"} = t
          , {alignRight: p=!0} = t
          , {extraText: h=""} = t
          , {isFullWidth: f=!1} = t
          , {isBorderless: _=!1} = t
          , {direction: w="down"} = t
          , {allowLabelHtml: v=!1} = t
          , {showSortCode: b=!1} = t
          , {extraPadding: $=!1} = t
          , {dropdownMaxHeight: E=300} = t;
        const y = eo("deepl_settings");
        let x, T, C, S, L = 0, k = {}, M = {}, I = {}, A = "visibility: hidden; opacity:0; height:0;";
        const N = Qn();
        function O() {
            k.spaceAbove = Math.abs(x.getBoundingClientRect().top),
            k.spaceBelow = Math.abs(window.innerHeight - x.getBoundingClientRect().bottom)
        }
        c && (l = c),
        Yn((()=>{
            setTimeout((()=>{
                n(19, A = "")
            }
            ), 100),
            S = Ti(C, (({clientWidth: e})=>{
                n(27, L = e)
            }
            ))
        }
        )),
        Xn((()=>{
            S && S()
        }
        ));
        return e.$$set = e=>{
            "isOpen"in e && n(1, o = e.isOpen),
            "disabled"in e && n(2, i = e.disabled),
            "items"in e && n(3, s = e.items),
            "placeholder"in e && n(22, a = e.placeholder),
            "customClass"in e && n(4, r = e.customClass),
            "selectedOption"in e && n(0, l = e.selectedOption),
            "defaultOption"in e && n(23, c = e.defaultOption),
            "dataQaButton"in e && n(5, d = e.dataQaButton),
            "dataQaList"in e && n(6, u = e.dataQaList),
            "variant"in e && n(7, m = e.variant),
            "fontSize"in e && n(8, g = e.fontSize),
            "alignRight"in e && n(9, p = e.alignRight),
            "extraText"in e && n(24, h = e.extraText),
            "isFullWidth"in e && n(10, f = e.isFullWidth),
            "isBorderless"in e && n(11, _ = e.isBorderless),
            "direction"in e && n(12, w = e.direction),
            "allowLabelHtml"in e && n(13, v = e.allowLabelHtml),
            "showSortCode"in e && n(25, b = e.showSortCode),
            "extraPadding"in e && n(14, $ = e.extraPadding),
            "dropdownMaxHeight"in e && n(26, E = e.dropdownMaxHeight)
        }
        ,
        e.$$.update = ()=>{
            402653185 & e.$$.dirty[0] && (l && (I?.value === l?.value && I?.regionalVariant === l?.regionalVariant || (n(28, I = l),
            N("valueselected", {
                selectedOption: l
            }))),
            L && O()),
            54525953 & e.$$.dirty[0] && n(17, T = l ? `${b ? l.value : l.selectedOptionLabel}${h ? ` ${h}` : ""}` : `${a}${h ? ` ${h}` : ""}`)
        }
        ,
        [l, o, i, s, r, d, u, m, g, p, f, _, w, v, $, x, M, T, C, A, y, function() {
            "down" === w && function() {
                if (O(),
                n(16, M.top = "auto", M),
                n(16, M.height = `${E}px`, M),
                k.spaceBelow > k.spaceAbove)
                    k.spaceBelow <= E && n(16, M.height = Math.ceil(.8 * k.spaceBelow) + "px", M);
                else {
                    let e = E;
                    k.spaceAbove <= E && (e = Math.ceil(.8 * k.spaceAbove)),
                    n(16, M.height = `${e}px`, M),
                    n(16, M.top = "-" + (e + 2) + "px", M)
                }
            }(),
            n(1, o = !o),
            function() {
                let e = x.getRootNode().querySelector("ul li[aria-selected=true]");
                setTimeout((()=>{
                    e?.scrollIntoView({
                        block: "nearest"
                    })
                }
                ), 0)
            }()
        }
        , a, c, h, b, E, L, I, function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                x = e,
                n(15, x)
            }
            ))
        }
        , e=>{
            n(1, o = !1),
            n(0, l = e),
            y.set({
                regionalVariant: e.regionalVariant || ""
            })
        }
        , ()=>{
            n(1, o = !1)
        }
        , function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                C = e,
                n(18, C)
            }
            ))
        }
        ]
    }
    class Ni extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ai, Ii, tn, {
                isOpen: 1,
                disabled: 2,
                items: 3,
                placeholder: 22,
                customClass: 4,
                selectedOption: 0,
                defaultOption: 23,
                dataQaButton: 5,
                dataQaList: 6,
                variant: 7,
                fontSize: 8,
                alignRight: 9,
                extraText: 24,
                isFullWidth: 10,
                isBorderless: 11,
                direction: 12,
                allowLabelHtml: 13,
                showSortCode: 25,
                extraPadding: 14,
                dropdownMaxHeight: 26
            }, null, [-1, -1])
        }
    }
    function Oi(e) {
        let t, n, o, i, s;
        return n = new Ni({
            props: {
                items: e[1],
                selectedOption: e[2],
                alignRight: !1,
                dataQaButton: "deepl-formality-selection-button",
                dataQaList: "deepl-formality-selection-list",
                variant: "zendesk",
                isFullWidth: e[0],
                direction: "up"
            }
        }),
        n.$on("valueselected", e[3]),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment)
            },
            m(a, r) {
                yn(a, t, r),
                Io(n, t, null),
                o = !0,
                i || (s = In(t, "mousedown", Nn(An(e[5]))),
                i = !0)
            },
            p(e, [t]) {
                const o = {};
                2 & t && (o.items = e[1]),
                4 & t && (o.selectedOption = e[2]),
                1 & t && (o.isFullWidth = e[0]),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n),
                i = !1,
                s()
            }
        }
    }
    function Di(e, t, n) {
        let o, i;
        const s = Qn();
        let {value: a} = t
          , {isFullWidth: r=!1} = t;
        return e.$$set = e=>{
            "value"in e && n(4, a = e.value),
            "isFullWidth"in e && n(0, r = e.isFullWidth)
        }
        ,
        e.$$.update = ()=>{
            18 & e.$$.dirty && n(2, i = a ? o.find((e=>e.value === a)) : o.find((e=>"auto" === e.value)))
        }
        ,
        n(1, o = [{
            value: "auto",
            label: chrome.i18n.getMessage("ui_formality_automatic"),
            selectedOptionLabel: chrome.i18n.getMessage("ui_formality_automatic")
        }, {
            value: "formal",
            label: chrome.i18n.getMessage("ui_formality_formal"),
            selectedOptionLabel: chrome.i18n.getMessage("ui_formality_formal")
        }, {
            value: "informal",
            label: chrome.i18n.getMessage("ui_formality_informal"),
            selectedOptionLabel: chrome.i18n.getMessage("ui_formality_informal")
        }]),
        [r, o, i, function(e) {
            e.detail.selectedOption.value !== a && s("selection", e.detail)
        }
        , a, function(t) {
            to.call(this, e, t)
        }
        ]
    }
    class Ri extends Oo {
        constructor(e) {
            super(),
            No(this, e, Di, Oi, tn, {
                value: 4,
                isFullWidth: 0
            })
        }
    }
    const Pi = "ACCESS_DENIED"
      , Hi = "INVALID_REQUEST"
      , Gi = "INVALID_GRANT"
      , zi = "INVALID_NONCE"
      , Bi = "PROTOCOL_ERROR"
      , Ui = "NETWORK_ERROR"
      , Wi = "FULL_PAGE_SERVER_ERROR"
      , Fi = "-32003"
      , ji = "429"
      , qi = "403"
      , Vi = "1045601"
      , Zi = "1042902";
    function Ki() {
        return !!chrome && !!chrome.tabs
    }
    const Yi = Ro(!1);
    function Xi(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                t.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L13 1M1 1L13 13" stroke="#DA5E5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                On(t, "class", "dl-close-icon svelte-qdqw71")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", (function() {
                    en(e[0]) && e[0].apply(this, arguments)
                }
                )),
                n = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function Qi(e) {
        let t, n, o, i, s, a;
        const r = e[2].default
          , l = sn(r, e, e[1], null);
        let c = e[0] && Xi(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                n.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12L10 10M10 10L12 8M10 10L8 8M10 10L12 12M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#DA5E5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                o = kn(),
                i = Cn("div"),
                l && l.c(),
                s = kn(),
                c && c.c(),
                On(n, "class", "icon-container svelte-qdqw71"),
                On(i, "class", "message svelte-qdqw71"),
                On(t, "class", "error-msg svelte-qdqw71")
            },
            m(e, r) {
                yn(e, t, r),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                l && l.m(i, null),
                bn(t, s),
                c && c.m(t, null),
                a = !0
            },
            p(e, [n]) {
                l && l.p && (!a || 2 & n) && ln(l, r, e, e[1], a ? rn(r, e[1], n, null) : cn(e[1]), null),
                e[0] ? c ? c.p(e, n) : (c = Xi(e),
                c.c(),
                c.m(t, null)) : c && (c.d(1),
                c = null)
            },
            i(e) {
                a || (yo(l, e),
                a = !0)
            },
            o(e) {
                xo(l, e),
                a = !1
            },
            d(e) {
                e && xn(t),
                l && l.d(e),
                c && c.d()
            }
        }
    }
    function Ji(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {close: s} = t;
        return e.$$set = e=>{
            "close"in e && n(0, s = e.close),
            "$$scope"in e && n(1, i = e.$$scope)
        }
        ,
        [s, i, o]
    }
    class es extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ji, Qi, tn, {
                close: 0
            })
        }
    }
    function ts(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                t.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L13 1M1 1L13 13" stroke="#ECBA82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                On(t, "class", "dl-close-icon svelte-1jf0jj0")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", (function() {
                    en(e[0]) && e[0].apply(this, arguments)
                }
                )),
                n = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function ns(e) {
        let t, n, o, i, s, a;
        const r = e[2].default
          , l = sn(r, e, e[1], null);
        let c = e[0] && ts(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                n.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6V10M10 14H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#ECBA82" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                o = kn(),
                i = Cn("div"),
                l && l.c(),
                s = kn(),
                c && c.c(),
                On(n, "class", "icon-container svelte-1jf0jj0"),
                On(i, "class", "message svelte-1jf0jj0"),
                On(t, "class", "warn-msg svelte-1jf0jj0")
            },
            m(e, r) {
                yn(e, t, r),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                l && l.m(i, null),
                bn(t, s),
                c && c.m(t, null),
                a = !0
            },
            p(e, [n]) {
                l && l.p && (!a || 2 & n) && ln(l, r, e, e[1], a ? rn(r, e[1], n, null) : cn(e[1]), null),
                e[0] ? c ? c.p(e, n) : (c = ts(e),
                c.c(),
                c.m(t, null)) : c && (c.d(1),
                c = null)
            },
            i(e) {
                a || (yo(l, e),
                a = !0)
            },
            o(e) {
                xo(l, e),
                a = !1
            },
            d(e) {
                e && xn(t),
                l && l.d(e),
                c && c.d()
            }
        }
    }
    function os(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {close: s} = t;
        return e.$$set = e=>{
            "close"in e && n(0, s = e.close),
            "$$scope"in e && n(1, i = e.$$scope)
        }
        ,
        [s, i, o]
    }
    class is extends Oo {
        constructor(e) {
            super(),
            No(this, e, os, ns, tn, {
                close: 0
            })
        }
    }
    function ss(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                t.textContent = `${chrome.i18n.getMessage("error_message_generic_error")}`,
                On(t, "data-qa", "error-message-generic")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    class as extends Oo {
        constructor(e) {
            super(),
            No(this, e, null, ss, tn, {})
        }
    }
    function rs(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                t.textContent = `${chrome.i18n.getMessage("error_message_internet_connection")}`
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    class ls extends Oo {
        constructor(e) {
            super(),
            No(this, e, null, rs, tn, {})
        }
    }
    function cs(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                t.textContent = `${chrome.i18n.getMessage("full_page_translation_error_service_not_available")}`
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    class ds extends Oo {
        constructor(e) {
            super(),
            No(this, e, null, cs, tn, {})
        }
    }
    const us = "DOCS_GOOGLE_COM_FEEDBACK_FORM"
      , ms = "NEW_FEEDBACK_FORM"
      , gs = "DEEPL_COM_PRO"
      , ps = "DEEPL_COM_TRANSLATOR"
      , hs = "DEEPL_COM_HOMEPAGE"
      , fs = "DEEPL_COM_WRITE"
      , _s = "SHORTCUT_SETTINGS"
      , ws = "CHROME_WRITE_A_REVIEW"
      , vs = "EDGE_WRITE_A_REVIEW"
      , bs = "GMAIL_FEEDBACK_SURVEY"
      , $s = "GSLIDES_FEEDBACK_SURVEY"
      , Es = "FIREFOX_WRITE_A_REVIEW"
      , ys = "DEEPL_SUPPORT"
      , xs = "FIREFOX_FEEDBACK_SURVEY"
      , Ts = "CUSTOMER_SEGMENTATION_SURVEY_FREE"
      , Cs = "CUSTOMER_SEGMENTATION_SURVEY_PRO";
    function Ss(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                n.textContent = `${chrome.i18n.getMessage("warning_message_different_subscription_needed")}`,
                o = kn(),
                i = Cn("div"),
                i.textContent = `${chrome.i18n.getMessage("link_get_pro_license")}`,
                On(i, "class", "link svelte-1mpkjv7"),
                On(t, "class", "container svelte-1mpkjv7")
            },
            m(r, l) {
                yn(r, t, l),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                s || (a = In(i, "click", e[0]),
                s = !0)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                s = !1,
                a()
            }
        }
    }
    function Ls(e) {
        return [function() {
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: gs,
                    utmContent: "warning_user_unauthorised"
                }
            })
        }
        ]
    }
    class ks extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ls, Ss, tn, {})
        }
    }
    function Ms(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                n.textContent = `${chrome.i18n.getMessage("warning_message_free_usage_limit_reached")}`,
                o = kn(),
                i = Cn("div"),
                i.textContent = `${chrome.i18n.getMessage("link_try_deepl")}`,
                On(i, "class", "link svelte-1mpkjv7"),
                On(t, "class", "container svelte-1mpkjv7")
            },
            m(r, l) {
                yn(r, t, l),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                s || (a = In(i, "click", e[0]),
                s = !0)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                s = !1,
                a()
            }
        }
    }
    function Is(e) {
        return [function() {
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: gs,
                    utmContent: "warning_user_blocked"
                }
            })
        }
        ]
    }
    class As extends Oo {
        constructor(e) {
            super(),
            No(this, e, Is, Ms, tn, {})
        }
    }
    function Ns(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                t.textContent = `${chrome.i18n.getMessage("error_message_please_login")}`
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    class Os extends Oo {
        constructor(e) {
            super(),
            No(this, e, null, Ns, tn, {})
        }
    }
    function Ds(e, t, n) {
        const o = e.slice();
        return o[1] = t[n],
        o
    }
    function Rs(e) {
        let t, n = e[1].text + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Ps(e) {
        let t, n, o, i, s, a = e[1].text + "";
        return {
            c() {
                t = Cn("span"),
                n = Ln(a),
                o = kn(),
                On(t, "class", "link svelte-1mpkjv7")
            },
            m(a, r) {
                yn(a, t, r),
                bn(t, n),
                bn(t, o),
                i || (s = In(t, "click", e[0]),
                i = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                i = !1,
                s()
            }
        }
    }
    function Hs(e) {
        let t;
        let n = function(e, t) {
            return "deeplSupportLink" === e[1].block ? Ps : Rs
        }(e)
          , o = n(e);
        return {
            c() {
                o.c(),
                t = Mn()
            },
            m(e, n) {
                o.m(e, n),
                yn(e, t, n)
            },
            p(e, t) {
                o.p(e, t)
            },
            d(e) {
                o.d(e),
                e && xn(t)
            }
        }
    }
    function Gs(e) {
        let t, n = Zo(chrome.i18n.getMessage("warning_message_account_limit_reached"), ["deeplSupportLink"]), o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = Hs(Ds(e, n, t));
        return {
            c() {
                t = Cn("div");
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                On(t, "class", "container svelte-1mpkjv7")
            },
            m(e, n) {
                yn(e, t, n);
                for (let e = 0; e < o.length; e += 1)
                    o[e] && o[e].m(t, null)
            },
            p(e, [i]) {
                if (1 & i) {
                    let s;
                    for (n = Zo(chrome.i18n.getMessage("warning_message_account_limit_reached"), ["deeplSupportLink"]),
                    s = 0; s < n.length; s += 1) {
                        const a = Ds(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = Hs(a),
                        o[s].c(),
                        o[s].m(t, null))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                Tn(o, e)
            }
        }
    }
    function zs(e) {
        return [function() {
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: ys
                }
            })
        }
        ]
    }
    class Bs extends Oo {
        constructor(e) {
            super(),
            No(this, e, zs, Gs, tn, {})
        }
    }
    function Us(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                t.textContent = `${chrome.i18n.getMessage("error_message_technical_issue")}`
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    class Ws extends Oo {
        constructor(e) {
            super(),
            No(this, e, null, Us, tn, {})
        }
    }
    function Fs(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                t.textContent = `${chrome.i18n.getMessage("error_message_session_expired")}`
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    class js extends Oo {
        constructor(e) {
            super(),
            No(this, e, null, Fs, tn, {})
        }
    }
    function qs(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                t.textContent = `${chrome.i18n.getMessage("full_page_translation_error_exceeds_char_limit")}`
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    class Vs extends Oo {
        constructor(e) {
            super(),
            No(this, e, null, qs, tn, {})
        }
    }
    function Zs(e, t, n) {
        const o = e.slice();
        return o[5] = t[n],
        o
    }
    function Ks(e) {
        let t, n = e[5].text + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p(e, o) {
                4 & o && n !== (n = e[5].text + "") && Dn(t, n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function Ys(e) {
        let t, n, o = e[5].text + "";
        return {
            c() {
                t = Cn("strong"),
                n = Ln(o)
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                4 & t && o !== (o = e[5].text + "") && Dn(n, o)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function Xs(e) {
        let t;
        function n(e, t) {
            return "strong" === e[5].block ? Ys : Ks
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = Mn()
            },
            m(e, n) {
                i.m(e, n),
                yn(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && xn(t)
            }
        }
    }
    function Qs(e) {
        let t, n, o, i;
        return {
            c() {
                t = Sn("svg"),
                n = Sn("path"),
                On(n, "d", "M4 12L12 4M4 4L12 12"),
                On(n, "stroke", "white"),
                On(n, "stroke-width", "1.5"),
                On(n, "stroke-linecap", "round"),
                On(n, "stroke-linejoin", "round"),
                On(t, "width", "16"),
                On(t, "height", "16"),
                On(t, "viewBox", "0 0 16 16"),
                On(t, "fill", "none"),
                On(t, "xmlns", "http://www.w3.org/2000/svg"),
                On(t, "class", "svelte-qakpwd")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                o || (i = In(t, "click", (function() {
                    en(e[1]) && e[1].apply(this, arguments)
                }
                )),
                o = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function Js(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p = Zo(chrome.i18n.getMessage("notification_anonymous_user_limit_exceeded_description", e[2]), ["strong"]), h = [];
        for (let t = 0; t < p.length; t += 1)
            h[t] = Xs(Zs(e, p, t));
        let f = e[1] && Qs(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("h1"),
                o.textContent = `${chrome.i18n.getMessage("notification_anonymous_user_limit_exceeded_headline")}`,
                i = kn(),
                s = Cn("p");
                for (let e = 0; e < h.length; e += 1)
                    h[e].c();
                a = kn(),
                r = Cn("div"),
                l = Cn("button"),
                l.textContent = `${chrome.i18n.getMessage("notification_anonymous_user_limit_exceeded_login_button")}`,
                c = kn(),
                d = Cn("button"),
                d.textContent = `${chrome.i18n.getMessage("notification_anonymous_user_limit_exceeded_signup_button")}`,
                u = kn(),
                f && f.c(),
                On(o, "class", "svelte-qakpwd"),
                On(s, "class", "description svelte-qakpwd"),
                On(n, "class", "messages svelte-qakpwd"),
                Gn(n, "small", e[0].small),
                On(l, "class", "log-in svelte-qakpwd"),
                On(d, "class", "sign-up svelte-qakpwd"),
                On(r, "class", "actions svelte-qakpwd"),
                Gn(r, "small", e[0].small),
                On(t, "class", "container svelte-qakpwd"),
                On(t, "data-testid", "error-message-anonymous-limit-exceeded"),
                Gn(t, "small", e[0].small)
            },
            m(p, _) {
                yn(p, t, _),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s);
                for (let e = 0; e < h.length; e += 1)
                    h[e] && h[e].m(s, null);
                bn(t, a),
                bn(t, r),
                bn(r, l),
                bn(r, c),
                bn(r, d),
                bn(t, u),
                f && f.m(t, null),
                m || (g = [In(l, "click", e[3]), In(d, "click", e[4])],
                m = !0)
            },
            p(e, [o]) {
                if (4 & o) {
                    let t;
                    for (p = Zo(chrome.i18n.getMessage("notification_anonymous_user_limit_exceeded_description", e[2]), ["strong"]),
                    t = 0; t < p.length; t += 1) {
                        const n = Zs(e, p, t);
                        h[t] ? h[t].p(n, o) : (h[t] = Xs(n),
                        h[t].c(),
                        h[t].m(s, null))
                    }
                    for (; t < h.length; t += 1)
                        h[t].d(1);
                    h.length = p.length
                }
                1 & o && Gn(n, "small", e[0].small),
                1 & o && Gn(r, "small", e[0].small),
                e[1] ? f ? f.p(e, o) : (f = Qs(e),
                f.c(),
                f.m(t, null)) : f && (f.d(1),
                f = null),
                1 & o && Gn(t, "small", e[0].small)
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                Tn(h, e),
                f && f.d(),
                m = !1,
                Jt(g)
            }
        }
    }
    function ea(e, n, o) {
        let {config: i} = n
          , {close: s} = n
          , a = "";
        return Yn((()=>{
            t({
                action: "dlGetUsersCharacterLimit"
            }).then((e=>o(2, a = e.toString()))),
            t({
                action: "dlTrackUpgradeNotificationIsDisplayed",
                payload: {
                    type: Ce
                }
            })
        }
        )),
        Xn((()=>{
            t({
                action: "dlTrackUpgradeNotificationClosed",
                payload: {
                    type: Ce
                }
            })
        }
        )),
        e.$$set = e=>{
            "config"in e && o(0, i = e.config),
            "close"in e && o(1, s = e.close)
        }
        ,
        [i, s, a, function() {
            t({
                action: "dlRequestLogin"
            }).then((()=>{}
            )).catch((e=>{
                console.log(e)
            }
            )),
            t({
                action: "dlTrackUpgradeNotificationAction",
                payload: {
                    type: Ce,
                    cta: ke
                }
            })
        }
        , function() {
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: gs,
                    utmContent: "notification_anonymous_user_limit_exceeded"
                }
            }),
            t({
                action: "dlTrackUpgradeNotificationAction",
                payload: {
                    type: Ce,
                    cta: Me
                }
            })
        }
        ]
    }
    class ta extends Oo {
        constructor(e) {
            super(),
            No(this, e, ea, Js, tn, {
                config: 0,
                close: 1
            })
        }
    }
    function na(e, t, n) {
        const o = e.slice();
        return o[4] = t[n],
        o
    }
    function oa(e) {
        let t, n = e[4].text + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p(e, o) {
                4 & o && n !== (n = e[4].text + "") && Dn(t, n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function ia(e) {
        let t, n, o = e[4].text + "";
        return {
            c() {
                t = Cn("strong"),
                n = Ln(o)
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                4 & t && o !== (o = e[4].text + "") && Dn(n, o)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function sa(e) {
        let t;
        function n(e, t) {
            return "strong" === e[4].block ? ia : oa
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = Mn()
            },
            m(e, n) {
                i.m(e, n),
                yn(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && xn(t)
            }
        }
    }
    function aa(e) {
        let t, n, o, i;
        return {
            c() {
                t = Sn("svg"),
                n = Sn("path"),
                On(n, "d", "M4 12L12 4M4 4L12 12"),
                On(n, "stroke", "white"),
                On(n, "stroke-width", "1.5"),
                On(n, "stroke-linecap", "round"),
                On(n, "stroke-linejoin", "round"),
                On(t, "width", "16"),
                On(t, "height", "16"),
                On(t, "viewBox", "0 0 16 16"),
                On(t, "fill", "none"),
                On(t, "xmlns", "http://www.w3.org/2000/svg"),
                On(t, "class", "svelte-135gstb")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                o || (i = In(t, "click", (function() {
                    en(e[1]) && e[1].apply(this, arguments)
                }
                )),
                o = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function ra(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m = Zo(chrome.i18n.getMessage("notification_free_account_limit_exceeded_description", e[2]), ["strong"]), g = [];
        for (let t = 0; t < m.length; t += 1)
            g[t] = sa(na(e, m, t));
        let p = e[1] && aa(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("h1"),
                o.textContent = `${chrome.i18n.getMessage("notification_free_account_limit_exceeded_headline")}`,
                i = kn(),
                s = Cn("p");
                for (let e = 0; e < g.length; e += 1)
                    g[e].c();
                a = kn(),
                r = Cn("div"),
                l = Cn("button"),
                l.textContent = `${chrome.i18n.getMessage("notification_free_account_limit_exceeded_signup_button")}`,
                c = kn(),
                p && p.c(),
                On(o, "class", "svelte-135gstb"),
                On(s, "class", "description svelte-135gstb"),
                On(n, "class", "messages svelte-135gstb"),
                Gn(n, "small", e[0].small),
                On(l, "class", "sign-up svelte-135gstb"),
                On(r, "class", "actions svelte-135gstb"),
                Gn(r, "small", e[0].small),
                On(t, "class", "container svelte-135gstb"),
                On(t, "data-testid", "error-message-free-account-limit-exceeded"),
                Gn(t, "small", e[0].small)
            },
            m(m, h) {
                yn(m, t, h),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s);
                for (let e = 0; e < g.length; e += 1)
                    g[e] && g[e].m(s, null);
                bn(t, a),
                bn(t, r),
                bn(r, l),
                bn(t, c),
                p && p.m(t, null),
                d || (u = In(l, "click", e[3]),
                d = !0)
            },
            p(e, [o]) {
                if (4 & o) {
                    let t;
                    for (m = Zo(chrome.i18n.getMessage("notification_free_account_limit_exceeded_description", e[2]), ["strong"]),
                    t = 0; t < m.length; t += 1) {
                        const n = na(e, m, t);
                        g[t] ? g[t].p(n, o) : (g[t] = sa(n),
                        g[t].c(),
                        g[t].m(s, null))
                    }
                    for (; t < g.length; t += 1)
                        g[t].d(1);
                    g.length = m.length
                }
                1 & o && Gn(n, "small", e[0].small),
                1 & o && Gn(r, "small", e[0].small),
                e[1] ? p ? p.p(e, o) : (p = aa(e),
                p.c(),
                p.m(t, null)) : p && (p.d(1),
                p = null),
                1 & o && Gn(t, "small", e[0].small)
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                Tn(g, e),
                p && p.d(),
                d = !1,
                u()
            }
        }
    }
    function la(e, n, o) {
        let {config: i} = n
          , {close: s} = n
          , a = "";
        return Yn((()=>{
            t({
                action: "dlGetUsersCharacterLimit"
            }).then((e=>o(2, a = e.toString()))),
            t({
                action: "dlTrackUpgradeNotificationIsDisplayed",
                payload: {
                    type: Se
                }
            })
        }
        )),
        Xn((()=>{
            t({
                action: "dlTrackUpgradeNotificationClosed",
                payload: {
                    type: Se
                }
            })
        }
        )),
        e.$$set = e=>{
            "config"in e && o(0, i = e.config),
            "close"in e && o(1, s = e.close)
        }
        ,
        [i, s, a, function() {
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: gs,
                    utmContent: "notification_free_account_limit_exceeded"
                }
            }),
            t({
                action: "dlTrackUpgradeNotificationAction",
                payload: {
                    type: Se,
                    cta: Le
                }
            })
        }
        ]
    }
    class ca extends Oo {
        constructor(e) {
            super(),
            No(this, e, la, ra, tn, {
                config: 0,
                close: 1
            })
        }
    }
    function da(e) {
        let t, n, o;
        var i = e[2];
        function s(e) {
            return {
                props: {
                    config: e[1],
                    close: e[0]
                }
            }
        }
        return i && (t = Un(i, s(e))),
        {
            c() {
                t && Mo(t.$$.fragment),
                n = Mn()
            },
            m(e, i) {
                t && Io(t, e, i),
                yn(e, n, i),
                o = !0
            },
            p(e, o) {
                const a = {};
                if (2 & o && (a.config = e[1]),
                1 & o && (a.close = e[0]),
                4 & o && i !== (i = e[2])) {
                    if (t) {
                        $o();
                        const e = t;
                        xo(e.$$.fragment, 1, 0, (()=>{
                            Ao(e, 1)
                        }
                        )),
                        Eo()
                    }
                    i ? (t = Un(i, s(e)),
                    Mo(t.$$.fragment),
                    yo(t.$$.fragment, 1),
                    Io(t, n.parentNode, n)) : t = null
                } else
                    i && t.$set(a)
            },
            i(e) {
                o || (t && yo(t.$$.fragment, e),
                o = !0)
            },
            o(e) {
                t && xo(t.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(n),
                t && Ao(t, e)
            }
        }
    }
    function ua(e) {
        let t, n;
        return t = new is({
            props: {
                close: e[0],
                config: e[1],
                $$slots: {
                    default: [ga]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.close = e[0]),
                2 & n && (o.config = e[1]),
                260 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function ma(e) {
        let t, n;
        return t = new es({
            props: {
                close: e[0],
                config: e[1],
                $$slots: {
                    default: [pa]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.close = e[0]),
                2 & n && (o.config = e[1]),
                260 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function ga(e) {
        let t, n, o;
        var i = e[2];
        return i && (t = Un(i, {})),
        {
            c() {
                t && Mo(t.$$.fragment),
                n = Mn()
            },
            m(e, i) {
                t && Io(t, e, i),
                yn(e, n, i),
                o = !0
            },
            p(e, o) {
                if (4 & o && i !== (i = e[2])) {
                    if (t) {
                        $o();
                        const e = t;
                        xo(e.$$.fragment, 1, 0, (()=>{
                            Ao(e, 1)
                        }
                        )),
                        Eo()
                    }
                    i ? (t = Un(i, {}),
                    Mo(t.$$.fragment),
                    yo(t.$$.fragment, 1),
                    Io(t, n.parentNode, n)) : t = null
                }
            },
            i(e) {
                o || (t && yo(t.$$.fragment, e),
                o = !0)
            },
            o(e) {
                t && xo(t.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(n),
                t && Ao(t, e)
            }
        }
    }
    function pa(e) {
        let t, n, o;
        var i = e[2];
        return i && (t = Un(i, {})),
        {
            c() {
                t && Mo(t.$$.fragment),
                n = Mn()
            },
            m(e, i) {
                t && Io(t, e, i),
                yn(e, n, i),
                o = !0
            },
            p(e, o) {
                if (4 & o && i !== (i = e[2])) {
                    if (t) {
                        $o();
                        const e = t;
                        xo(e.$$.fragment, 1, 0, (()=>{
                            Ao(e, 1)
                        }
                        )),
                        Eo()
                    }
                    i ? (t = Un(i, {}),
                    Mo(t.$$.fragment),
                    yo(t.$$.fragment, 1),
                    Io(t, n.parentNode, n)) : t = null
                }
            },
            i(e) {
                o || (t && yo(t.$$.fragment, e),
                o = !0)
            },
            o(e) {
                t && xo(t.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(n),
                t && Ao(t, e)
            }
        }
    }
    function ha(e) {
        let t, n, o, i;
        const s = [ma, ua, da]
          , a = [];
        function r(e, t) {
            return e[3] === e[4].SERIOUS || e[3] === e[4].UNKNOWN ? 0 : e[3] === e[4].WARNING ? 1 : e[3] === e[4].CUSTOM ? 2 : -1
        }
        return ~(t = r(e)) && (n = a[t] = s[t](e)),
        {
            c() {
                n && n.c(),
                o = Mn()
            },
            m(e, n) {
                ~t && a[t].m(e, n),
                yn(e, o, n),
                i = !0
            },
            p(e, [i]) {
                let l = t;
                t = r(e),
                t === l ? ~t && a[t].p(e, i) : (n && ($o(),
                xo(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                Eo()),
                ~t ? (n = a[t],
                n ? n.p(e, i) : (n = a[t] = s[t](e),
                n.c()),
                yo(n, 1),
                n.m(o.parentNode, o)) : n = null)
            },
            i(e) {
                i || (yo(n),
                i = !0)
            },
            o(e) {
                xo(n),
                i = !1
            },
            d(e) {
                ~t && a[t].d(e),
                e && xn(o)
            }
        }
    }
    function fa(e, t, n) {
        let i, s, {error: a} = t, {close: r} = t, {config: l={}} = t;
        const c = {
            UNKNOWN: 1,
            WARNING: 2,
            SERIOUS: 3,
            CUSTOM: 4
        }
          , d = {
            [Nt]: as,
            [Ot]: ls,
            [Dt]: ds,
            [Ht]: Os,
            [Pi]: js,
            [Gi]: js,
            [Hi]: js,
            [zi]: js,
            [Pt]: As,
            [zt]: As,
            [Ft]: Vs,
            [Rt]: ks,
            [Gt]: Bs,
            [Wt]: Ws,
            [jt]: ca,
            [qt]: ta,
            [Bi]: as,
            [Ui]: ls,
            [Wi]: ds,
            [qi]: Os,
            [ji]: As,
            [Zi]: As,
            [Fi]: ks,
            [Vi]: Bs
        };
        return Yn((()=>{
            Ki() ? o({
                action: "dlErrorVisibility",
                payload: {
                    state: !0
                }
            }) : Yi.set(!0)
        }
        )),
        Xn((()=>{
            Ki() ? o({
                action: "dlErrorVisibility",
                payload: {
                    state: !1
                }
            }) : Yi.set(!1)
        }
        )),
        e.$$set = e=>{
            "error"in e && n(5, a = e.error),
            "close"in e && n(0, r = e.close),
            "config"in e && n(1, l = e.config)
        }
        ,
        e.$$.update = ()=>{
            32 & e.$$.dirty && n(3, i = function(e) {
                switch (e) {
                case Nt:
                case Ot:
                case Dt:
                case Ht:
                case Bi:
                case Ui:
                case Wi:
                case qi:
                case Pi:
                case Gi:
                case Hi:
                case zi:
                case Wt:
                    return c.SERIOUS;
                case Pt:
                case zt:
                case ji:
                case Zi:
                case Ft:
                case Rt:
                case Gt:
                case Fi:
                case Vi:
                    return c.WARNING;
                case jt:
                case qt:
                    return c.CUSTOM;
                default:
                    return c.UNKNOWN
                }
            }(a ? a.error : "")),
            32 & e.$$.dirty && n(2, s = a && d[a.error] || as)
        }
        ,
        [r, l, s, i, c, a]
    }
    class _a extends Oo {
        constructor(e) {
            super(),
            No(this, e, fa, ha, tn, {
                error: 5,
                close: 0,
                config: 1
            })
        }
    }
    function wa(e) {
        let t, n, o, i, s, a, r, l, c;
        return i = new _a({
            props: {
                error: e[3]
            }
        }),
        {
            c() {
                t = Cn("div"),
                n = Cn("button"),
                o = kn(),
                Mo(i.$$.fragment),
                On(n, "class", "close-button svelte-1od1jv7"),
                On(t, "class", "dl-zendesk-error-message svelte-1od1jv7")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                bn(t, o),
                Io(i, t, null),
                r = !0,
                l || (c = [In(n, "click", e[8]), mn(wi.call(null, t, {
                    isShadow: !0
                })), In(t, "click_outside", e[8])],
                l = !0)
            },
            p(e, t) {
                const n = {};
                8 & t[0] && (n.error = e[3]),
                i.$set(n)
            },
            i(e) {
                r || (yo(i.$$.fragment, e),
                co((()=>{
                    r && (a && a.end(1),
                    s = Co(t, jo, {
                        y: -5,
                        duration: 300
                    }),
                    s.start())
                }
                )),
                r = !0)
            },
            o(e) {
                xo(i.$$.fragment, e),
                s && s.invalidate(),
                a = So(t, jo, {
                    y: -5,
                    duration: 300
                }),
                r = !1
            },
            d(e) {
                e && xn(t),
                Ao(i),
                e && a && a.end(),
                l = !1,
                Jt(c)
            }
        }
    }
    function va(e) {
        let t, n;
        return t = new Ri({
            props: {
                value: e[6].zendeskFormality
            }
        }),
        t.$on("selection", e[9]),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                64 & n[0] && (o.value = e[6].zendeskFormality),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function ba(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                t.innerHTML = '<span class="svelte-1od1jv7"></span>',
                On(t, "class", "dl-zendesk-input-icon svelte-1od1jv7"),
                Gn(t, "is-active", e[1]),
                Gn(t, "is-loading", e[2]),
                Gn(t, "is-language-mismatching", e[0])
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", e[7]),
                n = !0)
            },
            p(e, n) {
                2 & n[0] && Gn(t, "is-active", e[1]),
                4 & n[0] && Gn(t, "is-loading", e[2]),
                1 & n[0] && Gn(t, "is-language-mismatching", e[0])
            },
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function $a(e) {
        let t, n, o, i, s, a = e[3] && wa(e), r = e[4] && va(e);
        return i = new xi({
            props: {
                tooltip: e[5],
                zIndex: "0",
                $$slots: {
                    default: [ba]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                a && a.c(),
                t = kn(),
                n = Cn("div"),
                r && r.c(),
                o = kn(),
                Mo(i.$$.fragment),
                On(n, "class", "dl-icons-holder svelte-1od1jv7"),
                Gn(n, "has-formality", e[4])
            },
            m(e, l) {
                a && a.m(e, l),
                yn(e, t, l),
                yn(e, n, l),
                r && r.m(n, null),
                bn(n, o),
                Io(i, n, null),
                s = !0
            },
            p(e, l) {
                e[3] ? a ? (a.p(e, l),
                8 & l[0] && yo(a, 1)) : (a = wa(e),
                a.c(),
                yo(a, 1),
                a.m(t.parentNode, t)) : a && ($o(),
                xo(a, 1, 1, (()=>{
                    a = null
                }
                )),
                Eo()),
                e[4] ? r ? (r.p(e, l),
                16 & l[0] && yo(r, 1)) : (r = va(e),
                r.c(),
                yo(r, 1),
                r.m(n, o)) : r && ($o(),
                xo(r, 1, 1, (()=>{
                    r = null
                }
                )),
                Eo());
                const c = {};
                32 & l[0] && (c.tooltip = e[5]),
                7 & l[0] | 4 & l[1] && (c.$$scope = {
                    dirty: l,
                    ctx: e
                }),
                i.$set(c),
                (!s || 16 & l[0]) && Gn(n, "has-formality", e[4])
            },
            i(e) {
                s || (yo(a),
                yo(r),
                yo(i.$$.fragment, e),
                s = !0)
            },
            o(e) {
                xo(a),
                xo(r),
                xo(i.$$.fragment, e),
                s = !1
            },
            d(e) {
                a && a.d(e),
                e && xn(t),
                e && xn(n),
                r && r.d(),
                Ao(i)
            }
        }
    }
    function Ea(e, n, o) {
        let s, a, r;
        on(e, Po, (e=>o(6, r = e)));
        let l, c, d, u, {controller: m} = n, {editable: g} = n, p = !1, h = !1, f = !1, _ = !1, w = "", v = "", b = !1;
        const $ = ()=>{
            o(1, p = !0)
        }
          , E = ()=>{
            o(1, p = !1)
        }
        ;
        async function y(e, n, o) {
            if ("dlTriggerTranslationShortcut" === e.action) {
                if (document.activeElement !== g)
                    return;
                try {
                    t({
                        action: "dlTrackUseOfShortcut",
                        payload: {
                            shortcutType: A,
                            location: I.inputTranslationTriggerIcon
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
                await x(),
                o()
            }
        }
        const x = async()=>{
            if (_)
                return;
            const e = Be()
              , t = ()=>{
                if (e) {
                    const e = window.getSelection().toString();
                    navigator.clipboard.writeText(e).then((()=>{
                        T(e)
                    }
                    )).catch((e=>{
                        console.error("Unable to copy text to clipboard", e)
                    }
                    ))
                } else {
                    const e = new ClipboardEvent("copy",{
                        bubbles: !0,
                        clipboardData: new DataTransfer
                    });
                    h = !0,
                    g.dispatchEvent(e)
                }
            }
              , n = window.getSelection();
            let o;
            o = e ? n && n.anchorNode && "#text" == n.anchorNode.nodeName && "Range" == n.type && g.contains(n.anchorNode) : n && n.baseNode && "#text" == n.baseNode.nodeName && "Range" == n.type && g.contains(n.baseNode),
            0 !== g.innerText.trim().length && (o ? t() : (await ii(g),
            setTimeout(t, 300)))
        }
          , T = async e=>{
            h = !1,
            o(2, _ = !0),
            o(0, b = !1);
            const t = m.getTicketLanguageInformation()?.language
              , n = m.getInputWorkingArea();
            n.innerHTML = e;
            const [i,a] = await Ov({
                element: n,
                targetLang: t,
                ...s && ["formal", "informal"].includes(r.zendeskFormality) && {
                    formality: r.zendeskFormality
                }
            });
            a ? (console.error({
                e: a
            }),
            o(3, d = a),
            qv({
                eventType: ae,
                controller: m,
                error: a.error || a.message
            })) : i && L(i, e),
            o(2, _ = !1)
        }
          , C = async e=>{
            if (!h)
                return;
            h = !1,
            o(2, _ = !0),
            o(0, b = !1);
            const t = m.getTicketLanguageInformation()?.language
              , n = e.clipboardData.getData("text/html")
              , i = m.getInputWorkingArea();
            i.innerHTML = n;
            const [a,l] = await Ov({
                element: i,
                targetLang: t,
                ...s && ["formal", "informal"].includes(r.zendeskFormality) && {
                    formality: r.zendeskFormality
                }
            });
            l ? (console.error({
                e: l
            }),
            o(3, d = l),
            qv({
                eventType: ae,
                controller: m,
                error: l.error || l.message
            })) : a && L(a, n),
            o(2, _ = !1)
        }
          , S = ()=>{
            if (!f)
                return;
            f = !1;
            window.getSelection().collapse(null)
        }
          , L = (e,t)=>{
            if (Be())
                document.execCommand("insertText", !1, e),
                f = !0;
            else {
                const t = new DataTransfer;
                t.setData("text/html", e);
                const n = new ClipboardEvent("paste",{
                    bubbles: !0,
                    clipboardData: t
                });
                f = !0,
                g.dispatchEvent(n)
            }
            qv({
                eventType: se,
                controller: m,
                sourceTextLength: t.length,
                targetTextLength: e.length
            })
        }
          , k = ()=>{
            const e = g.innerText;
            e !== v && (v = e,
            u && (clearTimeout(u),
            u = void 0),
            u = setTimeout(M, 400))
        }
          , M = async()=>{
            const e = m.getTicketLanguageInformation();
            if (!e || !e.isSupported || !e.isDetected)
                return;
            const t = g.innerText;
            if (t.trim()) {
                console.log("There has content: ", `${t.trim()}`);
                let n = await dt(t)
                  , i = e.language;
                n = mt(n),
                i = mt(i);
                let s = !1;
                n && i && n !== i && (s = !0),
                b !== s && o(0, b = s)
            } else
                console.log("There is no content"),
                o(0, b = !1),
                N()
        }
          , N = ()=>{
            l && l.resetTooltip()
        }
        ;
        return Yn((()=>{
            chrome.runtime.onMessage.addListener(y),
            t({
                action: "dlCheckCommandShortcuts"
            }).then((e=>{
                o(14, w = e ? e.filter((e=>e.name == A))[0].shortcut : "")
            }
            )),
            g.addEventListener("focus", $),
            g.addEventListener("blur", E),
            g.addEventListener("copy", C),
            g.addEventListener("paste", S),
            g.addEventListener("keydown", k),
            l = Nl(m),
            document.activeElement === g && $()
        }
        )),
        Xn((()=>{
            chrome.runtime.onMessage.removeListener(y),
            g && (g.removeEventListener("focus", $),
            g.removeEventListener("blur", E),
            g.removeEventListener("copy", C),
            g.removeEventListener("paste", S),
            g.removeEventListener("keydown", k),
            l && (l.cleanupDOM(),
            l.remove()))
        }
        )),
        e.$$set = e=>{
            "controller"in e && o(10, m = e.controller),
            "editable"in e && o(11, g = e.editable)
        }
        ,
        e.$$.update = ()=>{
            32768 & e.$$.dirty[0] && o(4, s = (e=>{
                const t = i.find((t=>t.langCode === e));
                return t && t.supportsFormality
            }
            )(c)),
            49152 & e.$$.dirty[0] && o(5, a = i.find((e=>e.langCode === c)) ? chrome.i18n.getMessage("ui_zendesk_input_tooltip") + (w ? ` (${w})` : "") : ""),
            1 & e.$$.dirty[0] && l && l.setIsLanguageMismatching(b)
        }
        ,
        [b, p, _, d, s, a, r, x, ()=>{
            o(3, d = void 0)
        }
        , e=>{
            const t = e.detail.selectedOption.value;
            un(Po, r.zendeskFormality = t, r)
        }
        , m, g, e=>{
            o(15, c = e)
        }
        , ()=>{
            const e = window.getSelection();
            return e && e.baseNode && "#text" == e.baseNode.nodeName && "Range" == e.type && g.contains(e.baseNode)
        }
        , w, c]
    }
    class ya extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ea, $a, tn, {
                controller: 10,
                editable: 11,
                updateTargetLanguage: 12,
                getInputHasSelection: 13
            }, null, [-1, -1])
        }
        get updateTargetLanguage() {
            return this.$$.ctx[12]
        }
        get getInputHasSelection() {
            return this.$$.ctx[13]
        }
    }
    class xa {
        static HTML_TAG_NAME = "deepl-zendesk-input-icon";
        static createElement = (e=document)=>{
            const t = e.createElement(xa.HTML_TAG_NAME)
              , n = new xa(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.getInputHasSelection = n.getInputHasSelection,
            t.updateTargetLanguage = n.updateTargetLanguage,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer)
        }
        createDOM = ({controller: e, editable: t})=>{
            this.domElement.mainComponent = new ya({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: e,
                    editable: t
                }
            })
        }
        ;
        getInputHasSelection = ()=>this.domElement.mainComponent.getInputHasSelection();
        updateTargetLanguage = e=>{
            this.domElement.mainComponent?.updateTargetLanguage(e)
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function Ta(e, t, n) {
        const o = e.slice();
        return o[16] = t[n],
        o[18] = n,
        o
    }
    function Ca(e) {
        let t, n, o = !e[0] && La(e), i = e[3], s = [];
        for (let t = 0; t < i.length; t += 1)
            s[t] = Ia(Ta(e, i, t));
        return {
            c() {
                t = Cn("div"),
                o && o.c(),
                n = kn();
                for (let e = 0; e < s.length; e += 1)
                    s[e].c();
                On(t, "class", "dl-zendesk-translation-placeholder svelte-8fc29l"),
                Gn(t, "loading-skeleton", e[0])
            },
            m(e, i) {
                yn(e, t, i),
                o && o.m(t, null),
                bn(t, n);
                for (let e = 0; e < s.length; e += 1)
                    s[e] && s[e].m(t, null)
            },
            p(e, a) {
                if (e[0] ? o && (o.d(1),
                o = null) : o ? o.p(e, a) : (o = La(e),
                o.c(),
                o.m(t, n)),
                8 & a) {
                    let n;
                    for (i = e[3],
                    n = 0; n < i.length; n += 1) {
                        const o = Ta(e, i, n);
                        s[n] ? s[n].p(o, a) : (s[n] = Ia(o),
                        s[n].c(),
                        s[n].m(t, null))
                    }
                    for (; n < s.length; n += 1)
                        s[n].d(1);
                    s.length = i.length
                }
                1 & a && Gn(t, "loading-skeleton", e[0])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                o && o.d(),
                Tn(s, e)
            }
        }
    }
    function Sa(e) {
        let t, n, o;
        return n = new _a({
            props: {
                error: e[2],
                close: e[6]
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "dl-zendesk-translation-placeholder has-error svelte-8fc29l")
            },
            m(e, i) {
                yn(e, t, i),
                Io(n, t, null),
                o = !0
            },
            p(e, t) {
                const o = {};
                4 & t && (o.error = e[2]),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function La(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                On(t, "class", "close-button svelte-8fc29l")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", e[5]),
                n = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function ka(e) {
        let t, n, o = e[16] + "";
        return {
            c() {
                t = Cn("span"),
                n = Ln(o),
                On(t, "class", "svelte-8fc29l")
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                8 & t && o !== (o = e[16] + "") && Dn(n, o)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function Ma(e) {
        let t;
        return {
            c() {
                t = Cn("br")
            },
            m(e, n) {
                yn(e, t, n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function Ia(e) {
        let t, n, o = e[16] && ka(e), i = e[18] < e[3].length - 1 && Ma();
        return {
            c() {
                o && o.c(),
                t = kn(),
                i && i.c(),
                n = Mn()
            },
            m(e, s) {
                o && o.m(e, s),
                yn(e, t, s),
                i && i.m(e, s),
                yn(e, n, s)
            },
            p(e, s) {
                e[16] ? o ? o.p(e, s) : (o = ka(e),
                o.c(),
                o.m(t.parentNode, t)) : o && (o.d(1),
                o = null),
                e[18] < e[3].length - 1 ? i || (i = Ma(),
                i.c(),
                i.m(n.parentNode, n)) : i && (i.d(1),
                i = null)
            },
            d(e) {
                o && o.d(e),
                e && xn(t),
                i && i.d(e),
                e && xn(n)
            }
        }
    }
    function Aa(e) {
        let t, n, o, i, s, a, r, l, c;
        const d = [Sa, Ca]
          , u = [];
        function m(e, t) {
            return e[2] ? 0 : e[1] || e[0] ? 1 : -1
        }
        return ~(i = m(e)) && (s = u[i] = d[i](e)),
        {
            c() {
                t = Cn("div"),
                n = Cn("button"),
                n.textContent = `${chrome.i18n.getMessage("ui_zendesk_message_translate")}`,
                o = kn(),
                s && s.c(),
                a = Mn(),
                On(n, "class", "dl-zendesk-translate-this-ticket svelte-8fc29l")
            },
            m(s, d) {
                yn(s, t, d),
                bn(t, n),
                yn(s, o, d),
                ~i && u[i].m(s, d),
                yn(s, a, d),
                r = !0,
                l || (c = In(n, "click", e[4]),
                l = !0)
            },
            p(e, [t]) {
                let n = i;
                i = m(e),
                i === n ? ~i && u[i].p(e, t) : (s && ($o(),
                xo(u[n], 1, 1, (()=>{
                    u[n] = null
                }
                )),
                Eo()),
                ~i ? (s = u[i],
                s ? s.p(e, t) : (s = u[i] = d[i](e),
                s.c()),
                yo(s, 1),
                s.m(a.parentNode, a)) : s = null)
            },
            i(e) {
                r || (yo(s),
                r = !0)
            },
            o(e) {
                xo(s),
                r = !1
            },
            d(e) {
                e && xn(t),
                e && xn(o),
                ~i && u[i].d(e),
                e && xn(a),
                l = !1,
                c()
            }
        }
    }
    function Na(e, t, n) {
        let o, i;
        on(e, Po, (e=>n(14, i = e)));
        let s, {controller: a} = t, {message: r} = t, l = !1, c = !1, d = !1, g = "", p = !1;
        const h = async({trigger: e})=>{
            n(1, d = !1),
            n(0, l = !0),
            n(2, s = void 0);
            let t = bl(r).innerText;
            n(11, g = t);
            const [o,c] = await Dv({
                targetLang: i.selectedTargetLanguage,
                sourceLang: a.getTicketLanguageInformation()?.language,
                text: t,
                trigger: e
            });
            if (c)
                n(11, g = ""),
                n(1, d = !1),
                n(2, s = c),
                p = !0,
                qv({
                    eventType: ae,
                    controller: a,
                    error: c.error || c.message
                });
            else if (o) {
                n(11, g = o),
                n(1, d = !0),
                qv({
                    eventType: ie,
                    controller: a,
                    sourceTextLength: t.length,
                    targetTextLength: g.length
                })
            } else
                n(1, d = !0);
            n(0, l = !1)
        }
        ;
        return e.$$set = e=>{
            "controller"in e && n(7, a = e.controller),
            "message"in e && n(8, r = e.message)
        }
        ,
        e.$$.update = ()=>{
            2048 & e.$$.dirty && n(3, o = g.split("\n"))
        }
        ,
        [l, d, s, o, ()=>{
            l || h({
                trigger: m
            })
        }
        , ()=>{
            n(1, d = !1),
            n(0, l = !1),
            n(11, g = ""),
            a.getIsAutoTranslatedEnabled() && (c = !0)
        }
        , ()=>{
            n(2, s = void 0)
        }
        , a, r, ()=>{
            !a.getIsAutoTranslatedEnabled() || d || l || c || p || h({
                trigger: u
            })
        }
        , ()=>{
            !d || l || c || h({
                trigger: m
            })
        }
        , g]
    }
    class Oa extends Oo {
        constructor(e) {
            super(),
            No(this, e, Na, Aa, tn, {
                controller: 7,
                message: 8,
                processRefreshUI: 9,
                triggerTranslateAgain: 10
            })
        }
        get processRefreshUI() {
            return this.$$.ctx[9]
        }
        get triggerTranslateAgain() {
            return this.$$.ctx[10]
        }
    }
    class Da {
        static HTML_TAG_NAME = "deepl-zendesk-message-controller";
        static createElement = (e=document)=>{
            const t = e.createElement(Da.HTML_TAG_NAME)
              , n = new Da(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.processRefreshUI = n.processRefreshUI,
            t.triggerTranslateAgain = n.triggerTranslateAgain,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer)
        }
        createDOM = ({controller: e, message: t})=>{
            this.domElement.mainComponent = new Oa({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: e,
                    message: t
                }
            })
        }
        ;
        processRefreshUI = ()=>{
            this.domElement.mainComponent.processRefreshUI()
        }
        ;
        triggerTranslateAgain = ()=>{
            this.domElement.mainComponent.triggerTranslateAgain()
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function Ra(e) {
        let t, n, o, i, s, a, r, l, c, d = chrome.i18n.getMessage("ui_zendesk_input_language_mismatch") + "";
        return {
            c() {
                t = Cn("div"),
                n = Cn("button"),
                o = kn(),
                i = Ln(d),
                On(n, "class", "dismiss-tooltip svelte-1iaywdp"),
                On(t, "class", "dl-zendesk-submit-button-tooltip svelte-1iaywdp"),
                Pn(t, "max-width", (e[1].width || 0) + "px"),
                Pn(t, "bottom", e[0].height + 12 + "px")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                r = !0,
                l || (c = In(n, "click", e[4]),
                l = !0)
            },
            p(e, n) {
                (!r || 2 & n) && Pn(t, "max-width", (e[1].width || 0) + "px"),
                (!r || 1 & n) && Pn(t, "bottom", e[0].height + 12 + "px")
            },
            i(e) {
                r || (co((()=>{
                    r && (a && a.end(1),
                    s = Co(t, jo, {
                        y: -5,
                        duration: 500
                    }),
                    s.start())
                }
                )),
                r = !0)
            },
            o(e) {
                s && s.invalidate(),
                a = So(t, jo, {
                    y: -5,
                    duration: 500
                }),
                r = !1
            },
            d(e) {
                e && xn(t),
                e && a && a.end(),
                l = !1,
                c()
            }
        }
    }
    function Pa(e) {
        let t, n, o = e[2] && !e[3] && Ra(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[2] && !e[3] ? o ? (o.p(e, n),
                12 & n && yo(o, 1)) : (o = Ra(e),
                o.c(),
                yo(o, 1),
                o.m(t.parentNode, t)) : o && ($o(),
                xo(o, 1, 1, (()=>{
                    o = null
                }
                )),
                Eo())
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function Ha(e, t, n) {
        let {coords: o} = t
          , {containerCoords: i} = t
          , s = !1
          , a = !1;
        return e.$$set = e=>{
            "coords"in e && n(0, o = e.coords),
            "containerCoords"in e && n(1, i = e.containerCoords)
        }
        ,
        [o, i, s, a, ()=>{
            n(3, a = !0)
        }
        , e=>{
            n(2, s = e)
        }
        , ()=>{
            console.log("Resetting tooltip..."),
            n(2, s = !1),
            n(3, a = !1)
        }
        ]
    }
    class Ga extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ha, Pa, tn, {
                coords: 0,
                containerCoords: 1,
                setIsLanguageMismatching: 5,
                resetTooltip: 6
            })
        }
        get setIsLanguageMismatching() {
            return this.$$.ctx[5]
        }
        get resetTooltip() {
            return this.$$.ctx[6]
        }
    }
    class za {
        static HTML_TAG_NAME = "deepl-zendesk-submit-button-tooltip";
        static createElement = (e=document)=>{
            const t = e.createElement(za.HTML_TAG_NAME)
              , n = new za(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.setIsLanguageMismatching = n.setIsLanguageMismatching,
            t.resetTooltip = n.resetTooltip,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer)
        }
        createDOM = ({coords: e, containerCoords: t})=>{
            this.domElement.mainComponent = new Ga({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    coords: e,
                    containerCoords: t
                }
            })
        }
        ;
        setIsLanguageMismatching = e=>{
            this.domElement.mainComponent?.setIsLanguageMismatching(e)
        }
        ;
        resetTooltip = ()=>{
            this.domElement.mainComponent?.resetTooltip()
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function Ba(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("div"),
                n = kn(),
                o = Cn("div"),
                On(t, "class", "dl-zendesk-icon svelte-i3vxpb"),
                On(o, "class", "dl-zendesk-working-area svelte-i3vxpb")
            },
            m(e, i) {
                yn(e, t, i),
                yn(e, n, i),
                yn(e, o, i)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                e && xn(n),
                e && xn(o)
            }
        }
    }
    function Ua(e, t, n) {
        let o;
        on(e, Po, (e=>n(17, o = e)));
        let {pane: s} = t
          , {ticketId: a} = t
          , {controller: r} = t;
        const l = {
            language: "",
            isDetected: !1,
            isSupported: !1,
            hasAttemptedLanguageDetection: !1
        };
        let c, d = !1;
        const u = {
            inputIconLanguageUpdate: void 0,
            topIconLanguageUpdate: void 0,
            toolbarLanguageUpdate: void 0,
            toolbarAutoTranslateStatus: void 0,
            ticketTypeDetection: void 0
        }
          , m = (e,t)=>{
            u[e] = t
        }
          , g = ()=>{
            for (const e of Object.keys(u))
                if (u[e]) {
                    u[e]() && (u[e] = void 0)
                }
        }
          , p = async()=>{
            if (!c)
                return;
            let e;
            try {
                switch (c) {
                case re:
                    e = await $l(s);
                    break;
                case le:
                    e = await El(s)
                }
            } catch (e) {
                It() && console.error({
                    e: e
                })
            }
            e && (e = mt(e),
            n(13, l.hasAttemptedLanguageDetection = !0, l),
            n(13, l.language = e, l),
            n(13, l.isDetected = !0, l),
            n(13, l.isSupported = !!i.find((t=>t.langCode === e)), l),
            qv({
                eventType: ee,
                controller: r
            }),
            Ol(s))
        }
        ;
        return Yn((()=>{
            qv({
                eventType: J,
                controller: r
            }),
            m("ticketTypeDetection", (()=>{
                const e = fl(s);
                return !!e && (c = e,
                p(),
                !0)
            }
            ))
        }
        )),
        e.$$set = e=>{
            "pane"in e && n(0, s = e.pane),
            "ticketId"in e && n(1, a = e.ticketId),
            "controller"in e && n(2, r = e.controller)
        }
        ,
        e.$$.update = ()=>{
            8193 & e.$$.dirty && m("toolbarLanguageUpdate", (()=>yl(s, {
                language: l.language,
                isDetected: l.isDetected,
                isSupported: l.isSupported
            }))),
            8193 & e.$$.dirty && (m("inputIconLanguageUpdate", (()=>Cl(s, l.language))),
            m("topIconLanguageUpdate", (()=>Tl(s)))),
            16385 & e.$$.dirty && m("toolbarAutoTranslateStatus", (()=>{
                xl(s, {
                    isEnabled: d
                })
            }
            ))
        }
        ,
        [s, a, r, ()=>s, ()=>a, ()=>l, ()=>d, e=>{
            n(13, l.language = e.language, l),
            n(13, l.isDetected = e.isDetected, l),
            n(13, l.isSupported = e.isSupported, l)
        }
        , e=>{
            n(14, d = e)
        }
        , ()=>c, e=>{
            c = e
        }
        , async()=>{
            if (l.hasAttemptedLanguageDetection || await p(),
            cl(r, o.isZendeskEnabled),
            l.isSupported && o.isZendeskEnabled) {
                Sl(r);
                for (const e of _l(s)) {
                    const t = Ll(e);
                    t && t.processRefreshUI()
                }
            }
            Il(s),
            g()
        }
        , ()=>{
            Al(s)
        }
        , l, d]
    }
    class Wa extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ua, Ba, tn, {
                pane: 0,
                ticketId: 1,
                controller: 2,
                getPane: 3,
                getTicketId: 4,
                getTicketLanguageInformation: 5,
                getIsAutoTranslatedEnabled: 6,
                setLanguageInformation: 7,
                setIsAutoTranslateEnabled: 8,
                getTicketType: 9,
                setTicketType: 10,
                processRefreshUI: 11,
                getInputHasSelection: 12
            })
        }
        get getPane() {
            return this.$$.ctx[3]
        }
        get getTicketId() {
            return this.$$.ctx[4]
        }
        get getTicketLanguageInformation() {
            return this.$$.ctx[5]
        }
        get getIsAutoTranslatedEnabled() {
            return this.$$.ctx[6]
        }
        get setLanguageInformation() {
            return this.$$.ctx[7]
        }
        get setIsAutoTranslateEnabled() {
            return this.$$.ctx[8]
        }
        get getTicketType() {
            return this.$$.ctx[9]
        }
        get setTicketType() {
            return this.$$.ctx[10]
        }
        get processRefreshUI() {
            return this.$$.ctx[11]
        }
        get getInputHasSelection() {
            return this.$$.ctx[12]
        }
    }
    class Fa {
        static HTML_TAG_NAME = "deepl-zendesk-ticket-controller";
        static createElement = (e=document)=>{
            const t = e.createElement(Fa.HTML_TAG_NAME)
              , n = new Fa(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.getTicketId = n.getTicketId,
            t.getPane = n.getPane,
            t.getTicketLanguageInformation = n.getTicketLanguageInformation,
            t.getIsAutoTranslatedEnabled = n.getIsAutoTranslatedEnabled,
            t.setIsAutoTranslateEnabled = n.setIsAutoTranslateEnabled,
            t.getInputWorkingArea = n.getInputWorkingArea,
            t.setLanguageInformation = n.setLanguageInformation,
            t.getTicketType = n.getTicketType,
            t.setTicketType = n.setTicketType,
            t.processRefreshUI = n.processRefreshUI,
            t.getInputHasSelection = n.getInputHasSelection,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer)
        }
        createDOM = ({ticketId: e, pane: t})=>{
            this.domElement.mainComponent = new Wa({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: this.domElement,
                    ticketId: e,
                    pane: t
                }
            })
        }
        ;
        getTicketId = ()=>this.domElement.mainComponent?.getTicketId();
        getPane = ()=>this.domElement.mainComponent?.getPane();
        getTicketLanguageInformation = ()=>this.domElement.mainComponent?.getTicketLanguageInformation();
        getIsAutoTranslatedEnabled = ()=>this.domElement.mainComponent?.getIsAutoTranslatedEnabled();
        setIsAutoTranslateEnabled = e=>{
            this.domElement.mainComponent?.setIsAutoTranslateEnabled(e)
        }
        ;
        getInputWorkingArea = ()=>this.domElement.shadowContainer.querySelector(".dl-zendesk-working-area");
        setLanguageInformation = e=>{
            this.domElement.mainComponent?.setLanguageInformation(e)
        }
        ;
        getTicketType = ()=>this.domElement.mainComponent?.getTicketType();
        setTicketType = e=>{
            this.domElement.mainComponent?.setTicketType(e)
        }
        ;
        processRefreshUI = ()=>{
            this.domElement.mainComponent.processRefreshUI()
        }
        ;
        getInputHasSelection = ()=>this.domElement.mainComponent?.getInputHasSelection();
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function ja(e) {
        let t, n, o, i, s;
        return n = new Ni({
            props: {
                items: e[3],
                selectedOption: e[2],
                alignRight: !1,
                dataQaButton: "deepl-language-selection-button",
                dataQaList: "deepl-language-selection-list",
                variant: "zendesk",
                isFullWidth: e[1],
                extraText: e[0] ? chrome.i18n.getMessage("ui_zendesk_language_detected") : ""
            }
        }),
        n.$on("valueselected", e[4]),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment)
            },
            m(a, r) {
                yn(a, t, r),
                Io(n, t, null),
                o = !0,
                i || (s = In(t, "mousedown", Nn(An(e[7]))),
                i = !0)
            },
            p(e, [t]) {
                const o = {};
                8 & t && (o.items = e[3]),
                4 & t && (o.selectedOption = e[2]),
                2 & t && (o.isFullWidth = e[1]),
                1 & t && (o.extraText = e[0] ? chrome.i18n.getMessage("ui_zendesk_language_detected") : ""),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n),
                i = !1,
                s()
            }
        }
    }
    function qa(e, t, n) {
        let o, i;
        const s = Qn()
          , a = ut();
        let {value: r} = t
          , {isDetected: l=!1} = t
          , {isSupported: c=!0} = t
          , {isFullWidth: d=!1} = t;
        const u = {
            label: chrome.i18n.getMessage("writing_config_tab_language_selector_empty"),
            selectedOptionLabel: chrome.i18n.getMessage("writing_config_tab_language_selector_empty"),
            value: "NOT_SUPPORTED"
        };
        return e.$$set = e=>{
            "value"in e && n(5, r = e.value),
            "isDetected"in e && n(0, l = e.isDetected),
            "isSupported"in e && n(6, c = e.isSupported),
            "isFullWidth"in e && n(1, d = e.isFullWidth)
        }
        ,
        e.$$.update = ()=>{
            64 & e.$$.dirty && n(3, o = [...c ? [] : [u], ...a]),
            96 & e.$$.dirty && n(2, i = c ? r ? a.find((e=>e.value === r)) : void 0 : u)
        }
        ,
        [l, d, i, o, function(e) {
            e.detail.selectedOption.value !== r && s("selection", e.detail)
        }
        , r, c, function(t) {
            to.call(this, e, t)
        }
        ]
    }
    class Va extends Oo {
        constructor(e) {
            super(),
            No(this, e, qa, ja, tn, {
                value: 5,
                isDetected: 0,
                isSupported: 6,
                isFullWidth: 1
            })
        }
    }
    function Za(e) {
        let t, n, o, i;
        function s(e, t) {
            return e[1] ? Xa : Ya
        }
        let a = s(e)
          , r = a(e);
        return {
            c() {
                t = Cn("button"),
                r.c(),
                On(t, "class", "translate-all svelte-9eqwft"),
                t.disabled = n = !e[0].isSupported
            },
            m(n, s) {
                yn(n, t, s),
                r.m(t, null),
                o || (i = In(t, "click", e[6]),
                o = !0)
            },
            p(e, o) {
                a === (a = s(e)) && r ? r.p(e, o) : (r.d(1),
                r = a(e),
                r && (r.c(),
                r.m(t, null))),
                1 & o && n !== (n = !e[0].isSupported) && (t.disabled = n)
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                r.d(),
                o = !1,
                i()
            }
        }
    }
    function Ka(e) {
        let t, n;
        return t = new xi({
            props: {
                tooltip: chrome.i18n.getMessage(e[1] ? "ui_zendesk_autotranslate_stop" : "ui_zendesk_autotranslate_start"),
                $$slots: {
                    default: [Qa]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                2 & n && (o.tooltip = chrome.i18n.getMessage(e[1] ? "ui_zendesk_autotranslate_stop" : "ui_zendesk_autotranslate_start")),
                131073 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Ya(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_autotranslate_start") + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Xa(e) {
        let t, n = chrome.i18n.getMessage("ui_zendesk_autotranslate_stop") + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Qa(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("button"),
                On(t, "class", "translate-all btn-icon svelte-9eqwft"),
                t.disabled = n = !e[0].isSupported
            },
            m(n, s) {
                yn(n, t, s),
                o || (i = In(t, "click", e[6]),
                o = !0)
            },
            p(e, o) {
                1 & o && n !== (n = !e[0].isSupported) && (t.disabled = n)
            },
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function Ja(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f;
        c = new Va({
            props: {
                value: e[0].language,
                isDetected: e[0].isDetected,
                isSupported: e[0].isSupported,
                isFullWidth: "lg" !== e[4]
            }
        }),
        c.$on("selection", e[5]);
        const _ = [Ka, Za]
          , w = [];
        function v(e, t) {
            return "sm" === e[4] ? 0 : 1
        }
        return m = v(e),
        g = w[m] = _[m](e),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("button"),
                i = kn(),
                s = Cn("div"),
                a = Cn("div"),
                a.textContent = `${chrome.i18n.getMessage("ui_zendesk_senders_language")}`,
                r = kn(),
                l = Cn("div"),
                Mo(c.$$.fragment),
                d = kn(),
                u = Cn("div"),
                g.c(),
                On(o, "class", "senders-language-toggle svelte-9eqwft"),
                On(a, "class", "label svelte-9eqwft"),
                On(l, "class", "dropdown-container svelte-9eqwft"),
                On(s, "class", "container svelte-9eqwft"),
                Gn(s, "show", e[3]),
                On(n, "class", "senders-language svelte-9eqwft"),
                On(u, "class", "translate-all-container"),
                On(t, "class", "dl-zendesk-toolbar svelte-9eqwft"),
                Gn(t, "toolbar-sm", "sm" === e[4]),
                Gn(t, "toolbar-md", "md" === e[4]),
                Gn(t, "toolbar-lg", "lg" === e[4])
            },
            m(g, _) {
                yn(g, t, _),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s),
                bn(s, a),
                bn(s, r),
                bn(s, l),
                Io(c, l, null),
                bn(t, d),
                bn(t, u),
                w[m].m(u, null),
                e[13](t),
                p = !0,
                h || (f = [In(o, "click", e[7]), mn(wi.call(null, n, {
                    isShadow: !0
                })), In(n, "click_outside", e[12])],
                h = !0)
            },
            p(e, [n]) {
                const o = {};
                1 & n && (o.value = e[0].language),
                1 & n && (o.isDetected = e[0].isDetected),
                1 & n && (o.isSupported = e[0].isSupported),
                16 & n && (o.isFullWidth = "lg" !== e[4]),
                c.$set(o),
                (!p || 8 & n) && Gn(s, "show", e[3]);
                let i = m;
                m = v(e),
                m === i ? w[m].p(e, n) : ($o(),
                xo(w[i], 1, 1, (()=>{
                    w[i] = null
                }
                )),
                Eo(),
                g = w[m],
                g ? g.p(e, n) : (g = w[m] = _[m](e),
                g.c()),
                yo(g, 1),
                g.m(u, null)),
                (!p || 16 & n) && Gn(t, "toolbar-sm", "sm" === e[4]),
                (!p || 16 & n) && Gn(t, "toolbar-md", "md" === e[4]),
                (!p || 16 & n) && Gn(t, "toolbar-lg", "lg" === e[4])
            },
            i(e) {
                p || (yo(c.$$.fragment, e),
                yo(g),
                p = !0)
            },
            o(e) {
                xo(c.$$.fragment, e),
                xo(g),
                p = !1
            },
            d(n) {
                n && xn(t),
                Ao(c),
                w[m].d(),
                e[13](null),
                h = !1,
                Jt(f)
            }
        }
    }
    function er(e, t, n) {
        let o;
        const i = [{
            key: "sm",
            max: 300
        }, {
            key: "md",
            min: 301,
            max: 650
        }, {
            key: "lg",
            min: 651,
            isDefault: !0
        }];
        let {controller: s} = t;
        const a = {
            language: "",
            isDetected: !1,
            isSupported: !1
        };
        let r, l, c, d = !1, u = !1;
        Yn((()=>{
            c = Ti(r, (e=>{
                n(11, l = e.clientWidth)
            }
            ))
        }
        )),
        Xn((()=>{
            c && c()
        }
        ));
        return e.$$set = e=>{
            "controller"in e && n(8, s = e.controller)
        }
        ,
        e.$$.update = ()=>{
            2048 & e.$$.dirty && n(4, o = (e=>{
                const t = i.find((e=>e.isDefault));
                for (const t of i)
                    if (!(t.min && t.min > e || t.max && t.max < e))
                        return t.key;
                return t.key
            }
            )(l))
        }
        ,
        [a, d, r, u, o, e=>{
            const t = e.detail.selectedOption.value;
            s.setLanguageInformation({
                language: t,
                isDetected: !1,
                isSupported: !0
            }),
            qv({
                eventType: te,
                controller: s,
                metaDataOverride: {
                    ticketLanguage: t,
                    isTicketLanguageAutodetected: !1
                }
            })
        }
        , ()=>{
            const e = !d;
            s.setIsAutoTranslateEnabled(e),
            qv({
                eventType: e ? ne : oe,
                controller: s,
                metaDataOverride: {
                    isAutoTranslateEnabled: e
                }
            })
        }
        , ()=>{
            n(3, u = !u)
        }
        , s, ({language: e, isDetected: t, isSupported: o})=>{
            n(0, a.language = e, a),
            n(0, a.isDetected = t, a),
            n(0, a.isSupported = o, a)
        }
        , e=>{
            n(1, d = e)
        }
        , l, ()=>n(3, u = !1), function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                r = e,
                n(2, r)
            }
            ))
        }
        ]
    }
    class tr extends Oo {
        constructor(e) {
            super(),
            No(this, e, er, Ja, tn, {
                controller: 8,
                updateLanguageInformation: 9,
                updateAutoTranslateStatus: 10
            })
        }
        get updateLanguageInformation() {
            return this.$$.ctx[9]
        }
        get updateAutoTranslateStatus() {
            return this.$$.ctx[10]
        }
    }
    class nr {
        static HTML_TAG_NAME = "deepl-zendesk-toolbar";
        static createElement = (e=document)=>{
            const t = e.createElement(nr.HTML_TAG_NAME)
              , n = new nr(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.updateLanguageInformation = n.updateLanguageInformation,
            t.updateAutoTranslateStatus = n.updateAutoTranslateStatus,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer)
        }
        createDOM = ({controller: e})=>{
            this.domElement.mainComponent = new tr({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: e
                }
            })
        }
        ;
        updateLanguageInformation = e=>{
            this.domElement.mainComponent.updateLanguageInformation(e)
        }
        ;
        updateAutoTranslateStatus = e=>{
            this.domElement.mainComponent.updateAutoTranslateStatus(e)
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function or(e) {
        let t, n, o, i, s;
        return n = new _a({
            props: {
                error: e[1],
                close: e[2]
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "container svelte-1wstx56")
            },
            m(e, o) {
                yn(e, t, o),
                Io(n, t, null),
                s = !0
            },
            p(e, t) {
                const o = {};
                2 & t && (o.error = e[1]),
                4 & t && (o.close = e[2]),
                n.$set(o)
            },
            i(e) {
                s || (yo(n.$$.fragment, e),
                co((()=>{
                    s && (i && i.end(1),
                    o = Co(t, jo, {
                        x: 100,
                        duration: 1e3
                    }),
                    o.start())
                }
                )),
                s = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o && o.invalidate(),
                i = So(t, jo, {
                    x: 100,
                    duration: 1e3
                }),
                s = !1
            },
            d(e) {
                e && xn(t),
                Ao(n),
                e && i && i.end()
            }
        }
    }
    function ir(e) {
        let t, n, o = e[3] && !1 === e[0] && or(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[3] && !1 === e[0] ? o ? (o.p(e, n),
                9 & n && yo(o, 1)) : (o = or(e),
                o.c(),
                yo(o, 1),
                o.m(t.parentNode, t)) : o && ($o(),
                xo(o, 1, 1, (()=>{
                    o = null
                }
                )),
                Eo())
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function sr(e, t, n) {
        let o;
        on(e, Yi, (e=>n(4, o = e)));
        let {error: i} = t
          , {close: s} = t
          , {errorAlreadyShown: a} = t
          , r = !1;
        return Yn((()=>{
            setTimeout((()=>{
                n(3, r = !0),
                n(0, a = o)
            }
            ), 100)
        }
        )),
        e.$$set = e=>{
            "error"in e && n(1, i = e.error),
            "close"in e && n(2, s = e.close),
            "errorAlreadyShown"in e && n(0, a = e.errorAlreadyShown)
        }
        ,
        [a, i, s, r]
    }
    class ar extends Oo {
        constructor(e) {
            super(),
            No(this, e, sr, ir, tn, {
                error: 1,
                close: 2,
                errorAlreadyShown: 0
            })
        }
    }
    class rr {
        static HTML_TAG_NAME = "deepl-alert";
        static createElement = (e=document)=>{
            const t = e.createElement(rr.HTML_TAG_NAME)
              , n = new rr(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent = void 0;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = e=>{
            this.domElement.shadowContainer.style.cssText = `position: fixed; top: 20px; right: 20px; z-index: ${L.deepl_inline_ui.z_index}`,
            this.domElement.mainComponent = new ar({
                target: this.domElement.shadowContainer,
                props: {
                    error: e,
                    close: this.cleanupDOM
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy(),
            this.domElement.remove()
        }
    }
    function lr(e) {
        try {
            const t = rr.createElement();
            document.documentElement.appendChild(t),
            t.createDOM(e),
            vi((()=>t.cleanupDOM))
        } catch (e) {
            It() && console.log(e)
        }
    }
    const cr = function() {
        let e = {
            isDarkMode: Pe()
        };
        const {subscribe: t, update: n} = Ro(e);
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (()=>{
            n((e=>({
                ...e,
                isDarkMode: Pe()
            })))
        }
        )),
        {
            subscribe: t,
            update: e=>{
                if (It()) {
                    const t = "background-color: #403f3e;padding: 3px; font-size:12px;color:#c8e0c1; font-weight:600";
                    console.log(`%c${(new Date).toISOString()} UPDATE WEBSITE STATE`, t, e)
                }
                n((t=>(e && e.error ? lr(e.error) : Yi.set(!1),
                {
                    ...t,
                    ...e,
                    error: e.error ? e.error : void 0
                })))
            }
        }
    }();
    e.websiteData = void 0;
    const dr = cr.subscribe((n=>{
        e.websiteData = {
            ...n
        },
        n && Object.keys(n).length > 0 && t({
            action: "newWebsiteState",
            payload: {
                ...n
            }
        })
    }
    ));
    function ur(e, t, n) {
        const o = e.slice();
        return o[21] = t[n],
        o
    }
    function mr(e) {
        let t, n, o, i, s;
        return n = new Ni({
            props: {
                disabled: e[0],
                items: e[15],
                defaultOption: e[16],
                placeholder: e[13],
                dataQaButton: "deepl-language-selection-button",
                dataQaList: "deepl-language-selection-list",
                customClass: e[3],
                variant: e[5],
                fontSize: e[6],
                alignRight: e[7],
                isBorderless: e[8],
                showSortCode: e[9],
                extraPadding: e[10],
                dropdownMaxHeight: e[11]
            }
        }),
        n.$on("valueselected", e[14]),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment)
            },
            m(a, r) {
                yn(a, t, r),
                Io(n, t, null),
                o = !0,
                i || (s = In(t, "mousedown", Nn(An(e[19]))),
                i = !0)
            },
            p(e, t) {
                const o = {};
                1 & t && (o.disabled = e[0]),
                8 & t && (o.customClass = e[3]),
                32 & t && (o.variant = e[5]),
                64 & t && (o.fontSize = e[6]),
                128 & t && (o.alignRight = e[7]),
                256 & t && (o.isBorderless = e[8]),
                512 & t && (o.showSortCode = e[9]),
                1024 & t && (o.extraPadding = e[10]),
                2048 & t && (o.dropdownMaxHeight = e[11]),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n),
                i = !1,
                s()
            }
        }
    }
    function gr(e) {
        let t, n, o, i, s, a, r, l = e[2] && pr(), c = e[15], d = [];
        for (let t = 0; t < c.length; t += 1)
            d[t] = hr(ur(e, c, t));
        return {
            c() {
                t = Cn("div"),
                n = Cn("select"),
                l && l.c(),
                o = Mn();
                for (let e = 0; e < d.length; e += 1)
                    d[e].c();
                i = Ln(">"),
                On(n, "data-qa", "deepl-language-selection"),
                On(n, "class", "svelte-1kkwbs3"),
                On(t, "class", s = dn("alternate" === e[5] ? "language-selector-alternate" : "language-selector") + " svelte-1kkwbs3")
            },
            m(s, c) {
                yn(s, t, c),
                bn(t, n),
                l && l.m(n, null),
                bn(n, o);
                for (let e = 0; e < d.length; e += 1)
                    d[e] && d[e].m(n, null);
                bn(n, i),
                Hn(n, e[1]),
                a || (r = In(n, "change", An(e[20])),
                a = !0)
            },
            p(e, a) {
                if (e[2] ? l ? l.p(e, a) : (l = pr(),
                l.c(),
                l.m(n, o)) : l && (l.d(1),
                l = null),
                32768 & a) {
                    let t;
                    for (c = e[15],
                    t = 0; t < c.length; t += 1) {
                        const o = ur(e, c, t);
                        d[t] ? d[t].p(o, a) : (d[t] = hr(o),
                        d[t].c(),
                        d[t].m(n, i))
                    }
                    for (; t < d.length; t += 1)
                        d[t].d(1);
                    d.length = c.length
                }
                32770 & a && Hn(n, e[1]),
                32 & a && s !== (s = dn("alternate" === e[5] ? "language-selector-alternate" : "language-selector") + " svelte-1kkwbs3") && On(t, "class", s)
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                l && l.d(),
                Tn(d, e),
                a = !1,
                r()
            }
        }
    }
    function pr(e) {
        let t, n, o, i = chrome.i18n.getMessage("supported_languages_undefined") + "";
        return {
            c() {
                t = Cn("option"),
                n = Ln(i),
                o = kn(),
                t.__value = void 0,
                t.value = t.__value,
                On(t, "data-option-regionalvariant", void 0)
            },
            m(e, i) {
                yn(e, t, i),
                bn(t, n),
                bn(t, o)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function hr(e) {
        let t, n, o, i = e[21].label + "";
        return {
            c() {
                t = Cn("option"),
                n = Ln(i),
                o = kn(),
                t.__value = e[21].value,
                t.value = t.__value,
                On(t, "data-option-regionalvariant", e[21].regionalVariant)
            },
            m(e, i) {
                yn(e, t, i),
                bn(t, n),
                bn(t, o)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function fr(e) {
        let t, n, o, i;
        const s = [gr, mr]
          , a = [];
        return t = Ki() ? 0 : 1,
        n = a[t] = s[t](e),
        {
            c() {
                n.c(),
                o = Mn()
            },
            m(e, n) {
                a[t].m(e, n),
                yn(e, o, n),
                i = !0
            },
            p(e, [t]) {
                n.p(e, t)
            },
            i(e) {
                i || (yo(n),
                i = !0)
            },
            o(e) {
                xo(n),
                i = !1
            },
            d(e) {
                a[t].d(e),
                e && xn(o)
            }
        }
    }
    function _r(e, t, n) {
        let o, s = Kt, a = ()=>(s(),
        s = nn(m, (e=>n(18, o = e))),
        m);
        e.$$.on_destroy.push((()=>s()));
        const l = Qn();
        let {value: c} = t
          , {showChooseLanguageOption: d=!1} = t
          , {customClass: u=""} = t
          , {websiteSettings: m} = t;
        a();
        let {disabled: g=!1} = t
          , {variant: p="original"} = t
          , {fontSize: h="default"} = t
          , {alignRight: f=!1} = t
          , {isBorderless: _=!1} = t
          , {showSortCode: w=!1} = t
          , {extraPadding: v=!1} = t
          , {showRegionalVariants: b=!0} = t
          , {dropdownMaxHeight: $=300} = t
          , E = d ? chrome.i18n.getMessage("supported_languages_undefined") : void 0;
        const y = b ? ut() : i.filter((e=>!["PT-BR", "EN-US"].includes(e.langCode))).map((e=>"EN-GB" === e.langCode ? {
            ...e,
            langCode: "EN"
        } : "PT-PT" === e.langCode ? {
            ...e,
            langCode: "PT"
        } : e)).map((e=>({
            value: e.langCode,
            label: chrome.i18n.getMessage(`supported_languages_${e.langCode}`),
            selectedOptionLabel: chrome.i18n.getMessage(`supported_languages_${e.langCode}`)
        }))).sort(((e,t)=>e.label.localeCompare(t.label, chrome.i18n.getUILanguage())));
        let x = c ? y.find((e=>e.value === c)) : void 0;
        return e.$$set = e=>{
            "value"in e && n(1, c = e.value),
            "showChooseLanguageOption"in e && n(2, d = e.showChooseLanguageOption),
            "customClass"in e && n(3, u = e.customClass),
            "websiteSettings"in e && a(n(4, m = e.websiteSettings)),
            "disabled"in e && n(0, g = e.disabled),
            "variant"in e && n(5, p = e.variant),
            "fontSize"in e && n(6, h = e.fontSize),
            "alignRight"in e && n(7, f = e.alignRight),
            "isBorderless"in e && n(8, _ = e.isBorderless),
            "showSortCode"in e && n(9, w = e.showSortCode),
            "extraPadding"in e && n(10, v = e.extraPadding),
            "showRegionalVariants"in e && n(17, b = e.showRegionalVariants),
            "dropdownMaxHeight"in e && n(11, $ = e.dropdownMaxHeight)
        }
        ,
        e.$$.update = ()=>{
            262144 & e.$$.dirty && (o && o.translationState === r.ongoingTranslation ? n(0, g = !0) : o && o.translationState === r.none && n(0, g = !1))
        }
        ,
        [g, c, d, u, m, p, h, f, _, w, v, $, l, E, function(e) {
            g || l("selection", e.detail)
        }
        , y, x, b, o, function(t) {
            to.call(this, e, t)
        }
        , e=>{
            if (g)
                return;
            const t = e.target.options[e.target.selectedIndex].getAttribute("data-option-regionalVariant") || void 0;
            l("selection", {
                selectedOption: {
                    value: e.target.value,
                    regionalVariant: t
                }
            })
        }
        ]
    }
    class wr extends Oo {
        constructor(e) {
            super(),
            No(this, e, _r, fr, tn, {
                value: 1,
                showChooseLanguageOption: 2,
                customClass: 3,
                websiteSettings: 4,
                disabled: 0,
                variant: 5,
                fontSize: 6,
                alignRight: 7,
                isBorderless: 8,
                showSortCode: 9,
                extraPadding: 10,
                showRegionalVariants: 17,
                dropdownMaxHeight: 11
            })
        }
    }
    function vr(e) {
        let t, n, o, i;
        return {
            c() {
                t = Sn("svg"),
                n = Sn("path"),
                On(n, "d", "M1 7L5 11L15 1"),
                On(n, "stroke", o = e[0] ? e[3] : e[4]),
                On(n, "stroke-width", "2"),
                On(n, "stroke-linecap", "round"),
                On(n, "stroke-linejoin", "round"),
                On(n, "class", "svelte-mrm8jk"),
                On(t, "width", e[2]),
                On(t, "height", e[1]),
                On(t, "class", "checkmark svelte-mrm8jk"),
                On(t, "viewBox", "0 0 16 12"),
                On(t, "fill", "none"),
                On(t, "xmlns", "http://www.w3.org/2000/svg"),
                On(t, "style", i = `padding: ${e[6]};`),
                Gn(t, "enableHover", e[5])
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, [s]) {
                25 & s && o !== (o = e[0] ? e[3] : e[4]) && On(n, "stroke", o),
                4 & s && On(t, "width", e[2]),
                2 & s && On(t, "height", e[1]),
                64 & s && i !== (i = `padding: ${e[6]};`) && On(t, "style", i),
                32 & s && Gn(t, "enableHover", e[5])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function br(e, t, n) {
        let {disabled: o=!1} = t
          , {height: i="16px"} = t
          , {width: s="16px"} = t
          , {disabledColor: a="#727A83"} = t
          , {enabledColor: r="#007E5E"} = t
          , {enableHover: l=!1} = t
          , {padding: c} = t;
        return e.$$set = e=>{
            "disabled"in e && n(0, o = e.disabled),
            "height"in e && n(1, i = e.height),
            "width"in e && n(2, s = e.width),
            "disabledColor"in e && n(3, a = e.disabledColor),
            "enabledColor"in e && n(4, r = e.enabledColor),
            "enableHover"in e && n(5, l = e.enableHover),
            "padding"in e && n(6, c = e.padding)
        }
        ,
        [o, i, s, a, r, l, c]
    }
    class $r extends Oo {
        constructor(e) {
            super(),
            No(this, e, br, vr, tn, {
                disabled: 0,
                height: 1,
                width: 2,
                disabledColor: 3,
                enabledColor: 4,
                enableHover: 5,
                padding: 6
            })
        }
    }
    function Er(e, t, n) {
        const o = e.slice();
        return o[19] = t[n],
        o[21] = n,
        o
    }
    function yr(e, t, n) {
        const o = e.slice();
        return o[22] = t[n],
        o
    }
    function xr(e, t, n) {
        const o = e.slice();
        return o[25] = t[n],
        o
    }
    function Tr(e) {
        let t, n, o, i, s, a, r, l, c, d, u = e[5].name + "", m = e[5].termDictionaries, g = [];
        for (let t = 0; t < m.length; t += 1)
            g[t] = Cr(xr(e, m, t));
        let p = e[5].hasAdditionalPairs && Sr(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                i = Ln(u),
                s = kn();
                for (let e = 0; e < g.length; e += 1)
                    g[e].c();
                a = kn(),
                p && p.c(),
                r = kn(),
                l = Cn("div"),
                l.textContent = "Remove",
                On(o, "class", "title"),
                On(l, "class", "remove-button svelte-1ium3jp"),
                On(n, "class", "glossary-menu-active-glossary-display svelte-1ium3jp"),
                On(t, "class", "glossary-menu-active-glossary-display-container svelte-1ium3jp")
            },
            m(u, m) {
                yn(u, t, m),
                bn(t, n),
                bn(n, o),
                bn(o, i),
                bn(n, s);
                for (let e = 0; e < g.length; e += 1)
                    g[e] && g[e].m(n, null);
                bn(n, a),
                p && p.m(n, null),
                bn(n, r),
                bn(n, l),
                c || (d = In(l, "click", e[9]),
                c = !0)
            },
            p(e, t) {
                if (32 & t && u !== (u = e[5].name + "") && Dn(i, u),
                2080 & t) {
                    let o;
                    for (m = e[5].termDictionaries,
                    o = 0; o < m.length; o += 1) {
                        const i = xr(e, m, o);
                        g[o] ? g[o].p(i, t) : (g[o] = Cr(i),
                        g[o].c(),
                        g[o].m(n, a))
                    }
                    for (; o < g.length; o += 1)
                        g[o].d(1);
                    g.length = m.length
                }
                e[5].hasAdditionalPairs ? p ? p.p(e, t) : (p = Sr(e),
                p.c(),
                p.m(n, r)) : p && (p.d(1),
                p = null)
            },
            d(e) {
                e && xn(t),
                Tn(g, e),
                p && p.d(),
                c = !1,
                d()
            }
        }
    }
    function Cr(e) {
        let t, n = e[11](e[25].languagePair) + "";
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "lang-pair svelte-1ium3jp")
            },
            m(e, o) {
                yn(e, t, o),
                t.innerHTML = n
            },
            p(e, o) {
                32 & o && n !== (n = e[11](e[25].languagePair) + "") && (t.innerHTML = n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function Sr(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("div"),
                t.textContent = "Show more...",
                On(t, "class", "show-more svelte-1ium3jp")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", e[13]),
                n = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function Lr(e) {
        let t;
        function n(e, t) {
            return e[0] ? e[3] || 0 !== e[1].length ? kr : Mr : Ir
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = Mn()
            },
            m(e, n) {
                i.m(e, n),
                yn(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && xn(t)
            }
        }
    }
    function kr(e) {
        let t, n = e[6], o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = Dr(Er(e, n, t));
        return {
            c() {
                t = Cn("div");
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                On(t, "class", "glossary-list svelte-1ium3jp")
            },
            m(e, n) {
                yn(e, t, n);
                for (let e = 0; e < o.length; e += 1)
                    o[e] && o[e].m(t, null)
            },
            p(e, i) {
                if (3270 & i) {
                    let s;
                    for (n = e[6],
                    s = 0; s < n.length; s += 1) {
                        const a = Er(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = Dr(a),
                        o[s].c(),
                        o[s].m(t, null))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                e && xn(t),
                Tn(o, e)
            }
        }
    }
    function Mr(e) {
        let t, n, o, i, s;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                o.innerHTML = '<div class="icon svelte-1ium3jp"></div>',
                i = kn(),
                s = Cn("div"),
                s.textContent = `${chrome.i18n.getMessage("zendesk_no_glossaries_found")}`,
                On(o, "class", "icon-container svelte-1ium3jp"),
                On(s, "class", "content svelte-1ium3jp"),
                On(n, "class", "container svelte-1ium3jp"),
                On(t, "class", "glossary-not-found svelte-1ium3jp")
            },
            m(e, a) {
                yn(e, t, a),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Ir(e) {
        let t, n, o, i, s;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                o.innerHTML = '<div class="icon svelte-1ium3jp"></div>',
                i = kn(),
                s = Cn("div"),
                s.textContent = `${chrome.i18n.getMessage("zendesk_not_pro_user_body")}`,
                On(o, "class", "icon-container svelte-1ium3jp"),
                On(s, "class", "content svelte-1ium3jp"),
                On(n, "class", "container svelte-1ium3jp"),
                On(t, "class", "glossary-not-found svelte-1ium3jp")
            },
            m(e, a) {
                yn(e, t, a),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Ar(e) {
        let t, n, o = e[11](e[22].languagePair) + "";
        return {
            c() {
                t = Cn("div"),
                n = Ln(o),
                On(t, "class", "lang-pair svelte-1ium3jp")
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                64 & t && o !== (o = e[11](e[22].languagePair) + "") && Dn(n, o)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function Nr(e) {
        let t, n, o;
        function i() {
            return e[14](e[19])
        }
        return {
            c() {
                t = Cn("div"),
                t.textContent = "Show more...",
                On(t, "class", "show-more svelte-1ium3jp")
            },
            m(e, s) {
                yn(e, t, s),
                n || (o = In(t, "click", i),
                n = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function Or(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "divider svelte-1ium3jp")
            },
            m(e, n) {
                yn(e, t, n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function Dr(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h = e[19].name + "", f = e[19].termDictionaries, _ = [];
        for (let t = 0; t < f.length; t += 1)
            _[t] = Ar(yr(e, f, t));
        let w = e[19].hasAdditionalPairs && Nr(e);
        function v() {
            return e[15](e[19])
        }
        let b = e[21] < e[1].length - 1 && Or();
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                i = Ln(h),
                s = kn();
                for (let e = 0; e < _.length; e += 1)
                    _[e].c();
                a = kn(),
                w && w.c(),
                r = kn(),
                l = Cn("div"),
                c = Cn("input"),
                u = kn(),
                b && b.c(),
                m = Mn(),
                On(o, "class", "name"),
                On(n, "class", "info svelte-1ium3jp"),
                On(c, "type", "radio"),
                c.checked = d = e[2]?.zendeskActiveTermbase?.id === e[19].id,
                On(c, "class", "svelte-1ium3jp"),
                On(l, "class", "radio-container svelte-1ium3jp"),
                On(t, "class", "glossary-item svelte-1ium3jp")
            },
            m(e, d) {
                yn(e, t, d),
                bn(t, n),
                bn(n, o),
                bn(o, i),
                bn(n, s);
                for (let e = 0; e < _.length; e += 1)
                    _[e] && _[e].m(n, null);
                bn(n, a),
                w && w.m(n, null),
                bn(t, r),
                bn(t, l),
                bn(l, c),
                yn(e, u, d),
                b && b.m(e, d),
                yn(e, m, d),
                g || (p = In(c, "click", v),
                g = !0)
            },
            p(t, o) {
                if (e = t,
                64 & o && h !== (h = e[19].name + "") && Dn(i, h),
                2112 & o) {
                    let t;
                    for (f = e[19].termDictionaries,
                    t = 0; t < f.length; t += 1) {
                        const i = yr(e, f, t);
                        _[t] ? _[t].p(i, o) : (_[t] = Ar(i),
                        _[t].c(),
                        _[t].m(n, a))
                    }
                    for (; t < _.length; t += 1)
                        _[t].d(1);
                    _.length = f.length
                }
                e[19].hasAdditionalPairs ? w ? w.p(e, o) : (w = Nr(e),
                w.c(),
                w.m(n, null)) : w && (w.d(1),
                w = null),
                68 & o && d !== (d = e[2]?.zendeskActiveTermbase?.id === e[19].id) && (c.checked = d),
                e[21] < e[1].length - 1 ? b || (b = Or(),
                b.c(),
                b.m(m.parentNode, m)) : b && (b.d(1),
                b = null)
            },
            d(e) {
                e && xn(t),
                Tn(_, e),
                w && w.d(),
                e && xn(u),
                b && b.d(e),
                e && xn(m),
                g = !1,
                p()
            }
        }
    }
    function Rr(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m = e[5] && Tr(e), g = e[4] && Lr(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                i = Cn("div"),
                i.textContent = "Glossary",
                s = kn(),
                a = Cn("div"),
                r = kn(),
                m && m.c(),
                l = kn(),
                g && g.c(),
                c = Mn(),
                On(i, "class", "glossary-menu-text"),
                On(a, "class", "glossary-menu-toggle svelte-1ium3jp"),
                Gn(a, "isGlossaryListExpanded", e[4]),
                On(o, "class", "glossary-menu-toggle-container svelte-1ium3jp"),
                On(n, "class", "glossary-menu"),
                On(t, "class", "glossary-menu-container svelte-1ium3jp"),
                Gn(t, "isGlossaryListExpanded", e[4])
            },
            m(p, h) {
                yn(p, t, h),
                bn(t, n),
                bn(n, o),
                bn(o, i),
                bn(o, s),
                bn(o, a),
                bn(n, r),
                m && m.m(n, null),
                yn(p, l, h),
                g && g.m(p, h),
                yn(p, c, h),
                d || (u = In(o, "click", e[8]),
                d = !0)
            },
            p(e, [o]) {
                16 & o && Gn(a, "isGlossaryListExpanded", e[4]),
                e[5] ? m ? m.p(e, o) : (m = Tr(e),
                m.c(),
                m.m(n, null)) : m && (m.d(1),
                m = null),
                16 & o && Gn(t, "isGlossaryListExpanded", e[4]),
                e[4] ? g ? g.p(e, o) : (g = Lr(e),
                g.c(),
                g.m(c.parentNode, c)) : g && (g.d(1),
                g = null)
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                m && m.d(),
                e && xn(l),
                g && g.d(e),
                e && xn(c),
                d = !1,
                u()
            }
        }
    }
    function Pr(e, n, o) {
        let i;
        on(e, Po, (e=>o(2, i = e)));
        let {userHasZendeskPermissions: s} = n
          , a = []
          , r = !0
          , l = !1
          , c = []
          , d = null
          , u = [];
        const m = e=>{
            o(12, c = [...c, e])
        }
          , g = e=>{
            const n = a.find((t=>t.id === e));
            n && (un(Po, i.zendeskActiveTermbase = n, i),
            t({
                action: "dlTrackGlossaryEnabled",
                payload: {
                    nicheIntegration: K.zendesk
                }
            }))
        }
          , p = async()=>{
            o(3, r = !0);
            try {
                const [e] = await Rv();
                o(1, a = e),
                (()=>{
                    if (!i.zendeskActiveTermbase)
                        return;
                    if (!a || 0 === a.length)
                        return void un(Po, i.zendeskActiveTermbase = null, i);
                    const e = a.map((e=>e.id));
                    if (i.zendeskActiveTermbase && e.includes(i.zendeskActiveTermbase.id)) {
                        const e = a.find((e=>e.id === i.zendeskActiveTermbase.id));
                        un(Po, i.zendeskActiveTermbase = e, i)
                    } else
                        un(Po, i.zendeskActiveTermbase = null, i)
                }
                )()
            } catch (e) {
                It() && console.error(e)
            } finally {
                o(3, r = !1)
            }
        }
          , h = async e=>{
            if ("dlChangeActiveTabStatus" === e.action)
                e.payload.isActive && p()
        }
        ;
        Yn((()=>{
            p(),
            chrome.runtime.onMessage.addListener(h)
        }
        )),
        Xn((()=>{
            chrome.runtime.onMessage.removeListener(h)
        }
        ));
        return e.$$set = e=>{
            "userHasZendeskPermissions"in e && o(0, s = e.userHasZendeskPermissions)
        }
        ,
        e.$$.update = ()=>{
            4098 & e.$$.dirty && o(6, u = a.map((e=>c.includes(e.id) || e.termDictionaries.length <= 3 ? e : {
                ...e,
                termDictionaries: e.termDictionaries.slice(0, 3),
                hasAdditionalPairs: !0
            }))),
            4 & e.$$.dirty && (i.zendeskActiveTermbase || o(5, d = null)),
            4100 & e.$$.dirty && i.zendeskActiveTermbase && (c.includes(i.zendeskActiveTermbase.id) || i.zendeskActiveTermbase.termDictionaries.length <= 3 ? o(5, d = i.zendeskActiveTermbase) : o(5, d = {
                ...i.zendeskActiveTermbase,
                termDictionaries: i.zendeskActiveTermbase.termDictionaries.slice(0, 3),
                hasAdditionalPairs: !0
            }))
        }
        ,
        [s, a, i, r, l, d, u, m, ()=>{
            o(4, l = !l),
            l && (s || t({
                action: "dlTrackZendeskGlossaryOpened",
                payload: {
                    glossaryConfigOpenedWithoutGlossaryPermissions: !0
                }
            }),
            s && !r && 0 == a.length && t({
                action: "dlTrackZendeskGlossaryOpened",
                payload: {
                    glossaryConfigOpenedWithNoGlossariesFound: !0
                }
            }))
        }
        , ()=>{
            un(Po, i.zendeskActiveTermbase = null, i),
            t({
                action: "dlTrackGlossaryDisabled",
                payload: {
                    nicheIntegration: K.zendesk
                }
            })
        }
        , g, e=>{
            if (!e || !e.includes(">"))
                return chrome.i18n.getMessage("supported_languages_undefined");
            const [t,n] = e.split(">");
            return `${chrome.i18n.getMessage(`supported_languages_${t.toUpperCase()}`)} → ${chrome.i18n.getMessage(`supported_languages_${n.toUpperCase()}`)}`
        }
        , c, ()=>{
            m(d.id)
        }
        , e=>{
            m(e.id)
        }
        , e=>g(e.id)]
    }
    class Hr extends Oo {
        constructor(e) {
            super(),
            No(this, e, Pr, Rr, tn, {
                userHasZendeskPermissions: 0
            })
        }
    }
    function Gr(e, t, n) {
        const o = e.slice();
        return o[16] = t[n],
        o
    }
    function zr(e) {
        let t, n, o, i, s, a;
        const r = [Fr, Wr, Ur, Br]
          , l = [];
        function c(e, t) {
            return "onboarding" === e[4] ? 0 : "user_has_reached_limit" === e[4] ? 1 : "language_not_supported" === e[4] ? 2 : 3
        }
        n = c(e),
        o = l[n] = r[n](e);
        let d = !e[1] && "onboarding" !== e[4] && qr(e)
          , u = (!e[2].isZendeskEnabled || "default" === e[4] || "onboarding" === e[4]) && !e[5] && Xr(e);
        return {
            c() {
                t = Cn("div"),
                o.c(),
                i = kn(),
                d && d.c(),
                s = kn(),
                u && u.c(),
                On(t, "class", "dl-zendesk-modal svelte-1ybvr9c"),
                Gn(t, "onboarding", "onboarding" === e[4])
            },
            m(e, o) {
                yn(e, t, o),
                l[n].m(t, null),
                bn(t, i),
                d && d.m(t, null),
                bn(t, s),
                u && u.m(t, null),
                a = !0
            },
            p(e, m) {
                let g = n;
                n = c(e),
                n === g ? l[n].p(e, m) : ($o(),
                xo(l[g], 1, 1, (()=>{
                    l[g] = null
                }
                )),
                Eo(),
                o = l[n],
                o ? o.p(e, m) : (o = l[n] = r[n](e),
                o.c()),
                yo(o, 1),
                o.m(t, i)),
                e[1] || "onboarding" === e[4] ? d && (d.d(1),
                d = null) : d ? d.p(e, m) : (d = qr(e),
                d.c(),
                d.m(t, s)),
                e[2].isZendeskEnabled && "default" !== e[4] && "onboarding" !== e[4] || e[5] ? u && (u.d(1),
                u = null) : u ? u.p(e, m) : (u = Xr(e),
                u.c(),
                u.m(t, null)),
                (!a || 16 & m) && Gn(t, "onboarding", "onboarding" === e[4])
            },
            i(e) {
                a || (yo(o),
                a = !0)
            },
            o(e) {
                xo(o),
                a = !1
            },
            d(e) {
                e && xn(t),
                l[n].d(),
                d && d.d(),
                u && u.d()
            }
        }
    }
    function Br(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w, v = chrome.i18n.getMessage("ui_zendesk_modal_deepl_translate_into") + "", b = chrome.i18n.getMessage("ui_zendesk_modal_ok") + "";
        n = new Hr({
            props: {
                userHasZendeskPermissions: e[1]
            }
        });
        let $ = !e[1] && jr(e);
        return d = new wr({
            props: {
                value: e[2].selectedTargetLanguage,
                websiteSettings: cr,
                disabled: !e[2].isZendeskEnabled,
                customClass: "dropdown__zendesk-top-icon",
                fontSize: "md",
                dropdownMaxHeight: 150
            }
        }),
        d.$on("selection", e[13]),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                o = kn(),
                $ && $.c(),
                i = kn(),
                s = Cn("div"),
                a = Ln(v),
                r = kn(),
                l = Cn("div"),
                c = Cn("div"),
                Mo(d.$$.fragment),
                u = kn(),
                m = Cn("div"),
                g = Cn("button"),
                p = Ln(b),
                On(t, "class", "modal-section glossary svelte-1ybvr9c"),
                On(c, "class", "dropdown svelte-1ybvr9c"),
                On(g, "class", "btn-primary svelte-1ybvr9c"),
                g.disabled = h = !e[2].isZendeskEnabled,
                On(m, "class", "right svelte-1ybvr9c"),
                On(l, "class", "dropdown-container svelte-1ybvr9c"),
                On(s, "class", "modal-section language-selector svelte-1ybvr9c")
            },
            m(h, v) {
                yn(h, t, v),
                Io(n, t, null),
                yn(h, o, v),
                $ && $.m(h, v),
                yn(h, i, v),
                yn(h, s, v),
                bn(s, a),
                bn(s, r),
                bn(s, l),
                bn(l, c),
                Io(d, c, null),
                bn(l, u),
                bn(l, m),
                bn(m, g),
                bn(g, p),
                f = !0,
                _ || (w = In(g, "click", e[14]),
                _ = !0)
            },
            p(e, t) {
                const o = {};
                2 & t && (o.userHasZendeskPermissions = e[1]),
                n.$set(o),
                e[1] ? $ && ($.d(1),
                $ = null) : $ ? $.p(e, t) : ($ = jr(e),
                $.c(),
                $.m(i.parentNode, i));
                const s = {};
                4 & t && (s.value = e[2].selectedTargetLanguage),
                4 & t && (s.disabled = !e[2].isZendeskEnabled),
                d.$set(s),
                (!f || 4 & t && h !== (h = !e[2].isZendeskEnabled)) && (g.disabled = h)
            },
            i(e) {
                f || (yo(n.$$.fragment, e),
                yo(d.$$.fragment, e),
                f = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                xo(d.$$.fragment, e),
                f = !1
            },
            d(e) {
                e && xn(t),
                Ao(n),
                e && xn(o),
                $ && $.d(e),
                e && xn(i),
                e && xn(s),
                Ao(d),
                _ = !1,
                w()
            }
        }
    }
    function Ur(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("div"),
                t.textContent = `${chrome.i18n.getMessage("ui_zendesk_modal_language_not_supported_line_1")}`,
                n = kn(),
                o = Cn("div"),
                o.textContent = `${chrome.i18n.getMessage("ui_zendesk_modal_language_not_supported_line_2")}`,
                On(t, "class", "modal-section language-not-supported svelte-1ybvr9c"),
                On(o, "class", "modal-section secondary-text svelte-1ybvr9c")
            },
            m(e, i) {
                yn(e, t, i),
                yn(e, n, i),
                yn(e, o, i)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                e && xn(n),
                e && xn(o)
            }
        }
    }
    function Wr(e) {
        let t, n, o, i, s;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                i = kn(),
                s = Cn("div"),
                s.textContent = `${chrome.i18n.getMessage("zendesk_limit_reached_infobox")}`,
                On(o, "class", "icon svelte-1ybvr9c"),
                On(s, "class", "text svelte-1ybvr9c"),
                On(n, "class", "upgrade-infobox svelte-1ybvr9c"),
                On(t, "class", "modal-section reached-limit svelte-1ybvr9c")
            },
            m(e, a) {
                yn(e, t, a),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Fr(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w, v, b = chrome.i18n.getMessage("zendesk_onboarding_content_one", [ce]) + "", $ = chrome.i18n.getMessage("zendesk_onboarding_content_two") + "", E = chrome.i18n.getMessage("zendesk_onboarding_content_three") + "";
        return a = new $r({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }),
        u = new $r({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }),
        f = new $r({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                n.textContent = `${chrome.i18n.getMessage("ui_zendesk_modal_welcome")}`,
                o = kn(),
                i = Cn("div"),
                s = Cn("div"),
                Mo(a.$$.fragment),
                r = kn(),
                l = Cn("div"),
                c = kn(),
                d = Cn("div"),
                Mo(u.$$.fragment),
                m = kn(),
                g = Cn("div"),
                p = kn(),
                h = Cn("div"),
                Mo(f.$$.fragment),
                _ = kn(),
                w = Cn("div"),
                On(n, "class", "welcome svelte-1ybvr9c"),
                On(l, "class", "copy-text svelte-1ybvr9c"),
                On(s, "class", "copy svelte-1ybvr9c"),
                On(g, "class", "copy-text svelte-1ybvr9c"),
                On(d, "class", "copy svelte-1ybvr9c"),
                On(w, "class", "copy-text svelte-1ybvr9c"),
                On(h, "class", "copy svelte-1ybvr9c"),
                On(i, "class", "body svelte-1ybvr9c"),
                On(t, "class", "modal-section onboarding svelte-1ybvr9c")
            },
            m(e, y) {
                yn(e, t, y),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                bn(i, s),
                Io(a, s, null),
                bn(s, r),
                bn(s, l),
                l.innerHTML = b,
                bn(i, c),
                bn(i, d),
                Io(u, d, null),
                bn(d, m),
                bn(d, g),
                g.innerHTML = $,
                bn(i, p),
                bn(i, h),
                Io(f, h, null),
                bn(h, _),
                bn(h, w),
                w.innerHTML = E,
                v = !0
            },
            p: Kt,
            i(e) {
                v || (yo(a.$$.fragment, e),
                yo(u.$$.fragment, e),
                yo(f.$$.fragment, e),
                v = !0)
            },
            o(e) {
                xo(a.$$.fragment, e),
                xo(u.$$.fragment, e),
                xo(f.$$.fragment, e),
                v = !1
            },
            d(e) {
                e && xn(t),
                Ao(a),
                Ao(u),
                Ao(f)
            }
        }
    }
    function jr(e) {
        let t, n, o, i, s, a = chrome.i18n.getMessage("zendesk_popup_char_limit_label", [e[6]]) + "", r = chrome.i18n.getMessage("zendesk_popup_char_limit_content") + "";
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Ln(a),
                i = kn(),
                s = Ln(r),
                On(n, "class", "translation-count svelte-1ybvr9c"),
                On(t, "class", "modal-section svelte-1ybvr9c")
            },
            m(e, a) {
                yn(e, t, a),
                bn(t, n),
                bn(n, o),
                bn(t, i),
                bn(t, s)
            },
            p(e, t) {
                64 & t && a !== (a = chrome.i18n.getMessage("zendesk_popup_char_limit_label", [e[6]]) + "") && Dn(o, a)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function qr(e) {
        let t, n, o, i, s, a, r, l = e[5] && Vr(), c = Zo(chrome.i18n.getMessage("zendesk_try_pro_log_in_link"), ["loginLink"]), d = [];
        for (let t = 0; t < c.length; t += 1)
            d[t] = Yr(Gr(e, c, t));
        return {
            c() {
                t = Cn("div"),
                l && l.c(),
                n = kn(),
                o = Cn("button"),
                o.textContent = `${chrome.i18n.getMessage("zendesk_try_pro_advanced_button")}`,
                i = kn(),
                s = Cn("div");
                for (let e = 0; e < d.length; e += 1)
                    d[e].c();
                On(o, "class", "upgrade-button svelte-1ybvr9c"),
                On(s, "class", "login-text svelte-1ybvr9c"),
                On(t, "class", "modal-section upgrade-button-container svelte-1ybvr9c")
            },
            m(c, u) {
                yn(c, t, u),
                l && l.m(t, null),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                bn(t, s);
                for (let e = 0; e < d.length; e += 1)
                    d[e] && d[e].m(s, null);
                a || (r = In(o, "click", e[10]),
                a = !0)
            },
            p(e, o) {
                if (e[5] ? l ? l.p(e, o) : (l = Vr(),
                l.c(),
                l.m(t, n)) : l && (l.d(1),
                l = null),
                512 & o) {
                    let t;
                    for (c = Zo(chrome.i18n.getMessage("zendesk_try_pro_log_in_link"), ["loginLink"]),
                    t = 0; t < c.length; t += 1) {
                        const n = Gr(e, c, t);
                        d[t] ? d[t].p(n, o) : (d[t] = Yr(n),
                        d[t].c(),
                        d[t].m(s, null))
                    }
                    for (; t < d.length; t += 1)
                        d[t].d(1);
                    d.length = c.length
                }
            },
            d(e) {
                e && xn(t),
                l && l.d(),
                Tn(d, e),
                a = !1,
                r()
            }
        }
    }
    function Vr(e) {
        let t, n = chrome.i18n.getMessage("zendesk_limit_reached_content") + "";
        return {
            c() {
                t = Cn("span"),
                On(t, "class", "svelte-1ybvr9c")
            },
            m(e, o) {
                yn(e, t, o),
                t.innerHTML = n
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Zr(e) {
        let t, n, o = e[16].text + "";
        return {
            c() {
                t = new Bn(!1),
                n = Mn(),
                t.a = n
            },
            m(e, i) {
                t.m(o, e, i),
                yn(e, n, i)
            },
            p: Kt,
            d(e) {
                e && xn(n),
                e && t.d()
            }
        }
    }
    function Kr(e) {
        let t, n, o, i = e[16].text + "";
        return {
            c() {
                t = Cn("span"),
                On(t, "class", "upgrade-link svelte-1ybvr9c")
            },
            m(s, a) {
                yn(s, t, a),
                t.innerHTML = i,
                n || (o = In(t, "click", e[9]),
                n = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function Yr(e) {
        let t;
        let n = function(e, t) {
            return "loginLink" === e[16].block ? Kr : Zr
        }(e)
          , o = n(e);
        return {
            c() {
                o.c(),
                t = Mn()
            },
            m(e, n) {
                o.m(e, n),
                yn(e, t, n)
            },
            p(e, t) {
                o.p(e, t)
            },
            d(e) {
                o.d(e),
                e && xn(t)
            }
        }
    }
    function Xr(e) {
        let t, n, o, i, s, a, r;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                n.textContent = `${chrome.i18n.getMessage("zendesk_popup_on_off_label")}`,
                o = kn(),
                i = Cn("div"),
                s = Cn("span"),
                s.innerHTML = '<span class="svelte-1ybvr9c"></span>',
                On(n, "class", "text svelte-1ybvr9c"),
                On(s, "class", "on-off-switch svelte-1ybvr9c"),
                Gn(s, "on", e[2].isZendeskEnabled),
                On(i, "class", "switch"),
                On(t, "class", "modal-section switch-container svelte-1ybvr9c")
            },
            m(l, c) {
                yn(l, t, c),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                bn(i, s),
                a || (r = In(s, "click", e[8]),
                a = !0)
            },
            p(e, t) {
                4 & t && Gn(s, "on", e[2].isZendeskEnabled)
            },
            d(e) {
                e && xn(t),
                a = !1,
                r()
            }
        }
    }
    function Qr(e) {
        let t, n, o, i, s, a, r = e[3] && zr(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("button"),
                o = kn(),
                r && r.c(),
                On(n, "class", "dl-zendesk-top-icon svelte-1ybvr9c")
            },
            m(l, c) {
                yn(l, t, c),
                bn(t, n),
                bn(t, o),
                r && r.m(t, null),
                i = !0,
                s || (a = [In(n, "click", e[12]), mn(wi.call(null, t, {
                    isShadow: !0
                })), In(t, "click_outside", e[7])],
                s = !0)
            },
            p(e, [n]) {
                e[3] ? r ? (r.p(e, n),
                8 & n && yo(r, 1)) : (r = zr(e),
                r.c(),
                yo(r, 1),
                r.m(t, null)) : r && ($o(),
                xo(r, 1, 1, (()=>{
                    r = null
                }
                )),
                Eo())
            },
            i(e) {
                i || (yo(r),
                i = !0)
            },
            o(e) {
                xo(r),
                i = !1
            },
            d(e) {
                e && xn(t),
                r && r.d(),
                s = !1,
                Jt(a)
            }
        }
    }
    function Jr(e, n, o) {
        let i;
        on(e, Po, (e=>o(2, i = e)));
        let s, {controller: a} = n, r = !1, l = "default", c = !1, d = !1;
        const u = ()=>{
            c ? o(4, l = "user_has_reached_limit") : i.isZendeskOnboarded ? a.getTicketLanguageInformation().isSupported ? (o(3, r = !1),
            o(4, l = "default")) : (o(4, l = "language_not_supported"),
            o(3, r = i.isZendeskEnabled && a.getTicketLanguageInformation().hasAttemptedLanguageDetection)) : (o(4, l = "onboarding"),
            o(3, r = !0))
        }
          , m = ()=>{
            "onboarding" === l && (un(Po, i.isZendeskOnboarded = !0, i),
            o(4, l = "default")),
            "welcome" === l && o(4, l = "default"),
            o(3, r = !1)
        }
        ;
        Yn((()=>{
            u(),
            i.isZendeskEnabled && i.zendeskActiveTermbase && (async()=>{
                if (!i.zendeskActiveTermbase)
                    return;
                let e = [];
                try {
                    const [t] = await Rv();
                    e = t
                } catch (e) {
                    It() && console.error(e)
                }
                if (!e || 0 === e.length)
                    return void un(Po, i.zendeskActiveTermbase = null, i);
                const t = e.map((e=>e.id));
                if (i.zendeskActiveTermbase && t.includes(i.zendeskActiveTermbase.id)) {
                    const t = e.find((e=>e.id === i.zendeskActiveTermbase.id));
                    un(Po, i.zendeskActiveTermbase = t, i)
                } else
                    un(Po, i.zendeskActiveTermbase = null, i)
            }
            )()
        }
        ));
        return e.$$set = e=>{
            "controller"in e && o(0, a = e.controller)
        }
        ,
        e.$$.update = ()=>{
            4 & e.$$.dirty && o(1, d = i?.featureSet?.customizations?.includes("zendesk")),
            4 & e.$$.dirty && o(6, s = ce - i.zendeskSuccessfulTranslations),
            6 & e.$$.dirty && i.zendeskSuccessfulTranslations >= ce && !d && (o(5, c = !0),
            u()),
            2 & e.$$.dirty && d && (o(5, c = !1),
            o(4, l = "default"))
        }
        ,
        [a, d, i, r, l, c, s, m, ()=>{
            un(Po, i.isZendeskEnabled = !i.isZendeskEnabled, i)
        }
        , ()=>{
            t({
                action: "dlRequestLogin"
            })
        }
        , function() {
            t({
                action: "dlTrackUILocationClicked",
                payload: I.zendeskTryProLink
            }),
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: gs,
                    utmContent: "zendesk_customization"
                }
            })
        }
        , u, ()=>{
            r ? m() : o(3, r = !0)
        }
        , e=>{
            un(Po, i.selectedTargetLanguage = e.detail.selectedOption.value, i),
            Ml(a)
        }
        , ()=>{
            i.isZendeskEnabled && m()
        }
        ]
    }
    class el extends Oo {
        constructor(e) {
            super(),
            No(this, e, Jr, Qr, tn, {
                controller: 0,
                updateIconSettings: 11
            })
        }
        get updateIconSettings() {
            return this.$$.ctx[11]
        }
    }
    class tl {
        static HTML_TAG_NAME = "deepl-zendesk-top-icon";
        static createElement = (e=document)=>{
            const t = e.createElement(tl.HTML_TAG_NAME)
              , n = new tl(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.triggerUpdateIconSettings = n.triggerUpdateIconSettings,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer)
        }
        createDOM = ({controller: e})=>{
            this.domElement.mainComponent = new el({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    controller: e
                }
            })
        }
        ;
        triggerUpdateIconSettings = ()=>{
            this.domElement.mainComponent.updateIconSettings()
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    const nl = ()=>{
        const e = window.location.hostname.split(".");
        if (e.length < 2)
            return !1;
        return "zendesk.com" === `${e[e.length - 2]}.${e[e.length - 1]}`
    }
      , ol = ()=>document.querySelector("deepl-zendesk-controller")
      , il = ()=>Uo.createElement()
      , sl = e=>{
        const t = e.match(/^\/agent\/tickets\/(\d+)$/);
        if (t)
            return t[1]
    }
      , al = ()=>{
        const e = document.querySelector("#main_panes");
        if (e)
            return Array.from(e.children).find((e=>"hidden" !== window.getComputedStyle(e).visibility && "none" !== window.getComputedStyle(e).display))
    }
      , rl = e=>e.querySelector("deepl-zendesk-ticket-controller")
      , ll = (e,t)=>{
        const n = Fa.createElement();
        return e.appendChild(n),
        n.createDOM({
            pane: e,
            ticketId: t
        }),
        n
    }
      , cl = (e,t)=>{
        try {
            const n = e.getPane();
            if (n.querySelector("deepl-zendesk-top-icon") || gl(n, e),
            !t)
                return;
            e.getTicketLanguageInformation().isSupported ? (n.querySelector("deepl-zendesk-toolbar") || pl(n, e),
            n.querySelector("deepl-zendesk-input-icon") || hl(n, e)) : n.querySelector("deepl-zendesk-toolbar") || pl(n, e)
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
      , dl = ()=>{
        ml(["deepl-zendesk-ticket-controller", "deepl-zendesk-top-icon", "deepl-zendesk-toolbar", "deepl-zendesk-input-icon", "deepl-zendesk-message-controller", "deepl-zendesk-submit-button-tooltip", "deepl-zendesk-onboarding-modal"])
    }
      , ul = ()=>{
        ml(["deepl-zendesk-toolbar", "deepl-zendesk-input-icon", "deepl-zendesk-message-controller", "deepl-zendesk-onboarding-modal"]);
        const e = Array.from(document.getElementsByTagName("deepl-zendesk-ticket-controller"));
        for (const t of e)
            t.setIsAutoTranslateEnabled(!1)
    }
      , ml = e=>{
        try {
            for (const t of e)
                if (t) {
                    const e = Array.from(document.getElementsByTagName(t));
                    for (const t of e)
                        t.cleanupDOM(),
                        t.remove()
                }
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
      , gl = (e,t)=>{
        const n = tl.createElement()
          , o = e.querySelector('[data-test-id="omni-header-filter-trigger"],[data-test-id="omni-header-ticket-actions-trigger"]');
        if (!o)
            return;
        const i = o.parentElement;
        return i ? (i.prepend(n),
        n.createDOM({
            controller: t
        }),
        n) : void 0
    }
      , pl = (e,t)=>{
        const n = nr.createElement()
          , o = e.querySelector('[data-test-id="ticket-call-controls-action-bar"]');
        if (o)
            return o.after(n),
            n.createDOM({
                controller: t
            }),
            n.updateLanguageInformation(t.getTicketLanguageInformation()),
            n
    }
      , hl = (e,t)=>{
        const n = xa.createElement()
          , o = e.querySelector('div[data-test-id="omnichannel-composer-toolbar"] ul')
          , i = e.querySelector('div[data-test-id="ticket-rich-text-editor"] [contenteditable="true"]');
        if (i && o && o)
            return o.append(n),
            n.createDOM({
                controller: t,
                editable: i
            }),
            n
    }
      , fl = e=>{
        const t = e.querySelector('div[data-test-id="omnichannel-composer-toolbar"] ul[data-test-id="ticket-editor-app-icon-view"][data-cy="ticket-editor-app-icon-view"]')
          , n = e.querySelector('div[data-test-id="omnichannel-composer-toolbar"] ul');
        return t ? re : n ? le : void 0
    }
      , _l = e=>Array.from(e.querySelectorAll('article[data-test-id="omni-log-comment-item"]'))
      , wl = e=>{
        const t = _l(e);
        if (!(t.length < 1))
            return t.sort(((e,t)=>{
                const n = e.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime")
                  , o = t.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime");
                return n === o ? 0 : new Date(n) < Date(o) ? -1 : 1
            }
            )),
            t[0]
    }
      , vl = (e,t)=>{
        const n = _l(e);
        if (n.length < 1)
            return;
        n.sort(((e,t)=>{
            const n = e.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime")
              , o = t.querySelector('time[data-test-id="timestamp-relative"]').getAttribute("datetime");
            return n === o ? 0 : new Date(n) < Date(o) ? -1 : 1
        }
        ));
        const o = [];
        for (let e = 0; e < t; e++)
            n[e] && o.push(n[e]);
        return o
    }
      , bl = e=>e.querySelector('[data-test-id="omni-log-item-message"]')
      , $l = async e=>{
        const t = wl(e);
        if (t) {
            const e = t ? bl(t).innerText : "";
            return await dt(e)
        }
    }
      , El = async e=>{
        const t = vl(e, 12)
          , n = [];
        for (const e in t)
            try {
                const o = t[e]
                  , i = o ? bl(o).innerText : ""
                  , s = o.querySelector('[data-test-id="omni-log-item-sender"] a')?.getAttribute("href")
                  , a = o.querySelector('[data-test-id="omni-log-item-sender"] a strong').innerText;
                if (0 == i.length)
                    continue;
                let r = n.find((e=>e.id === s));
                const l = i.includes(`: ${a}`) && i.indexOf(`: ${a}`) + `: ${a}`.length === i.length
                  , c = 0 === Number(e);
                r || (r = {
                    id: s,
                    name: a,
                    messages: [],
                    isLikelyCustomer: !1,
                    isFirstMessage: !1
                },
                n.push(r)),
                l && (r.isLikelyCustomer = !0),
                c && (r.isFirstMessage = !0),
                r.messages.push({
                    message: i,
                    shouldBeSkipped: l || i.length <= 3
                })
            } catch (e) {
                It() && console.log("Dev debug: unable to read message content in detectTicketLanguageInLiveChat")
            }
        const o = (1 === n.filter((e=>e.isLikelyCustomer)).length ? n.find((e=>e.isLikelyCustomer)) : n.find((e=>!e.isFirstMessage))).messages.filter((e=>!e.shouldBeSkipped)).map((e=>e.message));
        o.sort(((e,t)=>e.length > t.length ? -1 : e.length < t.length ? 1 : 0));
        const i = o[0];
        if (i)
            return await dt(i)
    }
      , yl = (e,t)=>{
        const n = e.querySelector("deepl-zendesk-toolbar");
        return !!n && (n.updateLanguageInformation(t),
        !0)
    }
      , xl = (e,{isEnabled: t})=>{
        const n = e.querySelector("deepl-zendesk-toolbar");
        return !!n && (n.updateAutoTranslateStatus(t),
        !0)
    }
      , Tl = e=>{
        const t = e.querySelector("deepl-zendesk-top-icon");
        return !!t && (t.triggerUpdateIconSettings(),
        !0)
    }
      , Cl = (e,t)=>{
        const n = e.querySelector("deepl-zendesk-input-icon");
        return !!n && (n.updateTargetLanguage(t),
        !0)
    }
      , Sl = e=>{
        try {
            const t = e.getPane()
              , n = _l(t);
            for (const t of n)
                Ll(t) || kl(t, e)
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
      , Ll = e=>e.querySelector("deepl-zendesk-message-controller")
      , kl = (e,t)=>{
        const n = Da.createElement();
        return bl(e).parentNode.after(n),
        n.createDOM({
            controller: t,
            message: e
        }),
        n
    }
      , Ml = e=>{
        const t = Array.from(e.getPane().querySelectorAll("deepl-zendesk-message-controller"));
        for (const e of t)
            e.triggerTranslateAgain()
    }
      , Il = e=>{
        const t = Array.from(e.querySelectorAll("iframe"));
        for (const e of t)
            e.contentWindow.postMessage("dl-zendesk-welcome-screen", "*")
    }
      , Al = e=>{
        const t = e.querySelector("deepl-zendesk-input-icon");
        return !!t && t.getInputHasSelection()
    }
      , Nl = e=>{
        const t = e.getPane().querySelector('[data-test-id="submit_button-button"]')
          , n = t.closest('[data-garden-id="buttons.button_group_view"]')
          , o = t.getBoundingClientRect()
          , i = n.getBoundingClientRect()
          , s = za.createElement();
        return s.createDOM({
            controller: e,
            coords: o,
            containerCoords: i
        }),
        n.prepend(s),
        s
    }
      , Ol = e=>{
        const t = e.querySelector('[data-test-id="conversation-translator-language-detection-prompt"]');
        t && t.remove()
    }
      , Dl = ()=>{
        const e = "https://mail.google.com";
        return window.location.href.substr(0, 23) === e
    }
      , Rl = e=>e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement && ["text", "search"].includes(e.type)
      , Pl = e=>e.selectionStart < e.selectionEnd
      , Hl = async(e,t,n)=>{
        if (!Rl(e))
            return n || (e=>{
                fi("mousedown", e);
                const t = window.getSelection();
                t.removeAllRanges();
                const n = new Range;
                n.setStart(e, 0),
                n.collapse(!1),
                t.addRange(n),
                fi("mouseup", e)
            }
            )(e),
            await gi(e, t, !0);
        if (Pl(e) || ((e,{start: t, end: n})=>{
            e.selectionStart = t,
            e.selectionEnd = n
        }
        )(e, {
            start: 0,
            end: e.value.length
        }),
        !document.execCommand("insertText", !1, t.text)) {
            const n = e.value.substring(0, e.selectionStart) + t.text + e.value.substring(e.selectionEnd);
            e.value = n
        }
    }
    ;
    function Gl(e, t) {
        if (!t)
            return !1;
        const n = t.getBoundingClientRect();
        if (Rl(e))
            return function(e, t) {
                const n = function(e) {
                    const t = document.createElement("div");
                    document.body.appendChild(t);
                    var n = window.getComputedStyle(e);
                    t.style.whiteSpace = "pre-wrap",
                    t.style.wordWrap = "break-word",
                    t.style.position = "fixed",
                    t.style.overflow = "hidden",
                    ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"].forEach((function(e) {
                        t.style[e] = n[e]
                    }
                    ));
                    const o = e.getBoundingClientRect();
                    return t.style.top = Math.round(o.top) + "px",
                    t.style.left = Math.round(o.left) + "px",
                    t.innerText = e.value,
                    t
                }(e);
                let o = !1;
                try {
                    o = zl(n, t)
                } catch (e) {}
                return n.remove(),
                o
            }(e, n);
        {
            const t = Qo(e).getSelection()
              , o = function(e) {
                return "IFRAME" === e.nodeName.toUpperCase() ? e.getBoundingClientRect() : {
                    top: 0,
                    left: 0
                }
            }(e);
            if (t.rangeCount)
                return zl(ei(e), n, o)
        }
        return !1
    }
    function zl(e, t, n={
        top: 0,
        left: 0
    }) {
        const o = Qo(e).getSelection();
        for (const a of e.childNodes)
            if ("#text" === a.nodeName.toLowerCase()) {
                const e = o.getRangeAt(0).cloneRange();
                e.setStart(a, 0),
                e.setEnd(a, a.textContent.length);
                const r = e.getClientRects();
                if (!r.length)
                    continue;
                for (const e of r) {
                    const o = {
                        left: e.left + n.left,
                        right: e.right + n.left,
                        top: e.top + n.top,
                        bottom: e.bottom + n.top
                    };
                    if (s = t,
                    (i = o).left <= s.right && i.right >= s.left && i.top <= s.bottom && i.bottom >= s.top)
                        return !0
                }
            } else if (e.childNodes.length && zl(a, t, n))
                return !0;
        var i, s;
        return !1
    }
    function Bl(e, t) {
        const n = t.filter((t=>new RegExp(t).exec(e)));
        return n && n.length > 0
    }
    function Ul(e) {
        let t;
        try {
            t = new URL(e)
        } catch (e) {
            return !1
        }
        return "http:" === t.protocol || "https:" === t.protocol
    }
    function Wl(e, t) {
        if (e && t && "string" == typeof e && Array.isArray(t)) {
            if (0 === t.length)
                return e;
            for (const n of t)
                e.substr(0, n.length) === n && (e = e.substr(n.length));
            return e
        }
    }
    function Fl(e) {
        try {
            return new URL(e),
            !0
        } catch (e) {
            return !1
        }
    }
    function jl(e) {
        const t = e || window.getSelection().getRangeAt(0)
          , n = t.getBoundingClientRect()
          , o = document.body.parentNode.getBoundingClientRect()
          , {top: i, left: s, right: a, bottom: r, height: l, width: c} = n
          , d = {
            x: s - o.left,
            y: r - o.top,
            selectedTop: i,
            selectedBottom: r,
            selectedRight: o.width - a,
            selectedLeft: s + window.pageXOffset,
            selectedWidth: c,
            height: l
        };
        if (t.collapsed) {
            const e = t.commonAncestorContainer;
            d.x = e.getBoundingClientRect().left,
            d.y = e.getBoundingClientRect().top + e.offsetHeight
        }
        return d
    }
    function ql(e) {
        let t = e.childNodes[0];
        for (let n of Array.from(e.childNodes))
            if (t.getBoundingClientRect || (t = n),
            n.getBoundingClientRect && (n.getBoundingClientRect().right > t.getBoundingClientRect().right && (t = n),
            n.hasChildNodes())) {
                const e = ql(n);
                if (e && e.getBoundingClientRect) {
                    const o = n.getBoundingClientRect()
                      , i = e.getBoundingClientRect();
                    o.right < i.right && (t = e)
                }
            }
        return t
    }
    const Vl = e=>{
        const t = []
          , n = [];
        return Yl({
            domElements: t,
            strings: n,
            element: e
        }),
        {
            domElements: t,
            strings: n
        }
    }
    ;
    function Zl(e) {
        for (var t = 0; t < e.childNodes.length; ++t) {
            const n = e.childNodes[t];
            if ("#text" != n.nodeName && "#comment" != n.nodeName) {
                if ("block" == window.getComputedStyle(n).display)
                    return !0;
                if (Zl(n))
                    return !0
            }
        }
        return !1
    }
    const Kl = ({strings: e, domElements: t})=>{
        for (const n in t)
            t[n].innerHTML = e[n]
    }
      , Yl = ({domElements: e, strings: t, element: n})=>{
        if ("#text" != n.nodeName && "#comment" != n.nodeName)
            if (ec(n))
                e.push(n),
                t.push(n.innerHTML);
            else
                for (const o of n.childNodes)
                    Yl({
                        domElements: e,
                        strings: t,
                        element: o
                    })
    }
      , Xl = ({domElements: e, strings: t, element: n, tmpElementMap: o})=>{
        if ("#text" != n.nodeName && "#comment" != n.nodeName)
            if (ec(n))
                void 0 !== o && Ql({
                    topElement: n,
                    element: n,
                    tmpElementMap: o
                }),
                e.push(n),
                t.push(n.innerHTML);
            else
                for (const i of n.childNodes)
                    Xl({
                        domElements: e,
                        strings: t,
                        element: i,
                        tmpElementMap: o
                    })
    }
      , Ql = ({topElement: e, element: t, tmpElementMap: n})=>{
        Array.from(t.children).forEach((t=>{
            Ql({
                topElement: e,
                element: t,
                tmpElementMap: n
            })
        }
        )),
        t !== e && Jl(t, n)
    }
      , Jl = (e,t)=>{
        const n = Object.keys(t).length + 1
          , o = e.tagName.toLowerCase()
          , i = {};
        Array.from(e.attributes).forEach((e=>{
            i[e.name] = e.value
        }
        ));
        const s = `a${n}`
          , a = document.createElement(s);
        a.innerHTML = e.innerHTML,
        e.replaceWith(a),
        t[s] = {
            originalTagName: o,
            originalAttributes: i
        }
    }
    ;
    function ec(e) {
        if (tc(e) || oc(e))
            return !1;
        for (const t of e.childNodes)
            if ("#text" == t.nodeName && "" != t.wholeText.trim() || "font" == t.nodeName)
                return !0;
        for (const t of e.childNodes)
            if (!tc(t) && (!nc(t) || oc(t) || "inline" != window.getComputedStyle(t).display || Zl(e)))
                return !1;
        if (void 0 === e.innerText || "" == e.innerText.trim())
            return !1;
        if (1 === e.childNodes.length) {
            const t = e.childNodes[0];
            return tc(t)
        }
        return !0
    }
    const tc = e=>"#text" == e.nodeName || "#comment" == e.nodeName
      , nc = e=>Q.includes(e.nodeName.toLowerCase())
      , oc = e=>X.includes(e.nodeName.toLowerCase());
    function ic(e) {
        for (var t = []; null != e.parentNode; ) {
            for (var n = 0, o = 0, i = 0; i < e.parentNode.childNodes.length; i++) {
                var s = e.parentNode.childNodes[i];
                s.nodeName === e.nodeName && (s === e && (o = n),
                n++)
            }
            e.hasAttribute("id") && "" != e.id ? t.unshift(e.nodeName.toLowerCase() + "#" + e.id) : n > 1 ? t.unshift(e.nodeName.toLowerCase() + ":nth-child(" + (o + 1) + ")") : t.unshift(e.nodeName.toLowerCase()),
            e = e.parentNode
        }
        return t.slice(1)
    }
    function sc(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "loader svelte-c65fyl"),
                Gn(t, "small", e[0])
            },
            m(e, n) {
                yn(e, t, n)
            },
            p(e, [n]) {
                1 & n && Gn(t, "small", e[0])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function ac(e, t, n) {
        let {small: o=!1} = t;
        return e.$$set = e=>{
            "small"in e && n(0, o = e.small)
        }
        ,
        [o]
    }
    class rc extends Oo {
        constructor(e) {
            super(),
            No(this, e, ac, sc, tn, {
                small: 0
            })
        }
    }
    const lc = {
        developer_tools: "DEVELOPER_TOOLS",
        settings_page: "SETTINGS_PAGE",
        settings_writing: "SETTINGS_WRITING",
        settings_reading: "SETTINGS_READING",
        settings_customizations: "SETTINGS_CUSTOMIZATIONS",
        onboarding: "ONBOARDING",
        onboarding_after_successful_login: "ONBOARDING_AFTER_SUCCESSFUL_LOGIN",
        firefox_first_run: "FIREFOX_FIRST_RUN",
        privacy_policy: "PRIVACY_POLICY",
        create_account: "CREATE_ACCOUNT"
    };
    function cc(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = Cn("div"),
                n = Cn("span"),
                n.textContent = `${chrome.i18n.getMessage("inline_translation_link_more_settings")}`,
                o = kn(),
                i = Cn("span"),
                On(i, "class", "icon icon-external-link svelte-19b270"),
                On(t, "class", "settings-link svelte-19b270")
            },
            m(r, l) {
                yn(r, t, l),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                s || (a = In(t, "click", Nn(An(e[0]))),
                s = !0)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                s = !1,
                a()
            }
        }
    }
    function dc(e, n, o) {
        let {page: i=lc.settings_page} = n;
        return e.$$set = e=>{
            "page"in e && o(1, i = e.page)
        }
        ,
        [function() {
            t({
                action: "dlOpenInternalPage",
                payload: {
                    destination: i
                }
            })
        }
        , i]
    }
    class uc extends Oo {
        constructor(e) {
            super(),
            No(this, e, dc, cc, tn, {
                page: 1
            })
        }
    }
    function mc(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                On(t, "type", "button"),
                On(t, "class", "close-icon svelte-nskp1z")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", e[0]),
                n = !0)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function gc(e) {
        return [function(t) {
            to.call(this, e, t)
        }
        ]
    }
    class pc extends Oo {
        constructor(e) {
            super(),
            No(this, e, gc, mc, tn, {})
        }
    }
    function hc(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g;
        return i = new pc({}),
        i.$on("click", e[2]),
        c = new wr({
            props: {
                value: e[0].selectedTargetLanguage
            }
        }),
        c.$on("selection", e[3]),
        m = new uc({}),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                Mo(i.$$.fragment),
                s = kn(),
                a = Cn("div"),
                r = Cn("p"),
                r.textContent = `${chrome.i18n.getMessage("whatsapp_web_settings_languageswitch_label")}`,
                l = kn(),
                Mo(c.$$.fragment),
                d = kn(),
                u = Cn("div"),
                Mo(m.$$.fragment),
                On(o, "class", "close-icon-container svelte-1xs7ag1"),
                On(n, "class", "header"),
                On(r, "class", "label-language-switch svelte-1xs7ag1"),
                On(a, "class", "body svelte-1xs7ag1"),
                On(u, "class", "footer svelte-1xs7ag1"),
                On(t, "class", "container svelte-1xs7ag1")
            },
            m(e, p) {
                yn(e, t, p),
                bn(t, n),
                bn(n, o),
                Io(i, o, null),
                bn(t, s),
                bn(t, a),
                bn(a, r),
                bn(a, l),
                Io(c, a, null),
                bn(t, d),
                bn(t, u),
                Io(m, u, null),
                g = !0
            },
            p(e, [t]) {
                const n = {};
                1 & t && (n.value = e[0].selectedTargetLanguage),
                c.$set(n)
            },
            i(e) {
                g || (yo(i.$$.fragment, e),
                yo(c.$$.fragment, e),
                yo(m.$$.fragment, e),
                g = !0)
            },
            o(e) {
                xo(i.$$.fragment, e),
                xo(c.$$.fragment, e),
                xo(m.$$.fragment, e),
                g = !1
            },
            d(e) {
                e && xn(t),
                Ao(i),
                Ao(c),
                Ao(m)
            }
        }
    }
    function fc(e, t, n) {
        let o;
        const i = eo("deepl_settings");
        on(e, i, (e=>n(0, o = e)));
        const s = Qn();
        return [o, i, function() {
            s("close")
        }
        , e=>i.set({
            selectedTargetLanguage: e.detail.selectedOption.value,
            isTargetLanguageConfirmed: !0,
            regionalVariant: e.detail.selectedOption.regionalVariant || ""
        })]
    }
    class _c extends Oo {
        constructor(e) {
            super(),
            No(this, e, fc, hc, tn, {})
        }
    }
    function wc(e) {
        return /\bdark\b/gm.test(e)
    }
    const vc = function() {
        let e = {
            isDarkMode: wc(document.body.className)
        };
        const {subscribe: t, update: n} = Ro(e);
        let o = new MutationObserver((e=>{
            e.forEach((e=>{
                "attributes" === e.type && "class" === e.attributeName && n((e=>({
                    ...e,
                    isDarkMode: wc(document.body.className)
                })))
            }
            ))
        }
        ));
        return o.observe(document.body, {
            attributes: !0
        }),
        setTimeout((()=>{
            vi((()=>{
                o.disconnect()
            }
            ))
        }
        )),
        {
            subscribe: t
        }
    }();
    function bc(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p;
        const h = [Ec, $c]
          , f = [];
        function _(e, t) {
            return e[2] ? 0 : 1
        }
        return n = _(e),
        o = f[n] = h[n](e),
        {
            c() {
                t = Cn("div"),
                o.c(),
                i = kn(),
                s = Cn("div"),
                s.textContent = `${chrome.i18n.getMessage("whatsapp_web_show_alternatives_link")}`,
                a = kn(),
                r = Cn("button"),
                l = Sn("svg"),
                c = Sn("path"),
                On(s, "class", "show-alternatives svelte-1csju44"),
                Gn(s, "dark", e[5]),
                On(c, "d", "M3 9L9 3M3 3L9 9"),
                On(c, "stroke", d = e[3] && e[3].isDarkMode ? "#F2F4F7" : "#037171"),
                On(c, "stroke-width", "1.5"),
                On(c, "stroke-linecap", "round"),
                On(c, "stroke-linejoin", "round"),
                On(l, "width", "12"),
                On(l, "height", "12"),
                On(l, "viewBox", "0 0 12 12"),
                On(l, "fill", "none"),
                On(l, "xmlns", "http://www.w3.org/2000/svg"),
                On(r, "class", "svelte-1csju44"),
                On(t, "class", "container svelte-1csju44"),
                Gn(t, "dark", e[5])
            },
            m(o, d) {
                yn(o, t, d),
                f[n].m(t, null),
                bn(t, i),
                bn(t, s),
                bn(t, a),
                bn(t, r),
                bn(r, l),
                bn(l, c),
                m = !0,
                g || (p = [In(s, "click", e[6]), In(r, "click", (function() {
                    en(e[1]) && e[1].apply(this, arguments)
                }
                ))],
                g = !0)
            },
            p(a, r) {
                let l = n;
                n = _(e = a),
                n === l ? f[n].p(e, r) : ($o(),
                xo(f[l], 1, 1, (()=>{
                    f[l] = null
                }
                )),
                Eo(),
                o = f[n],
                o ? o.p(e, r) : (o = f[n] = h[n](e),
                o.c()),
                yo(o, 1),
                o.m(t, i)),
                (!m || 32 & r) && Gn(s, "dark", e[5]),
                (!m || 8 & r && d !== (d = e[3] && e[3].isDarkMode ? "#F2F4F7" : "#037171")) && On(c, "stroke", d),
                (!m || 32 & r) && Gn(t, "dark", e[5])
            },
            i(e) {
                m || (yo(o),
                u || co((()=>{
                    u = Co(t, jo, {
                        y: -10,
                        duration: 200
                    }),
                    u.start()
                }
                )),
                m = !0)
            },
            o(e) {
                xo(o),
                m = !1
            },
            d(e) {
                e && xn(t),
                f[n].d(),
                g = !1,
                Jt(p)
            }
        }
    }
    function $c(e) {
        let t, n;
        return {
            c() {
                t = Cn("span"),
                n = Ln(e[0]),
                On(t, "class", "translatedText svelte-1csju44")
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                1 & t && Dn(n, e[0])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Ec(e) {
        let t, n;
        return t = new _a({
            props: {
                error: e[2]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.error = e[2]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function yc(e) {
        let t, n, o = e[4] && bc(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[4] ? o ? (o.p(e, n),
                16 & n && yo(o, 1)) : (o = bc(e),
                o.c(),
                yo(o, 1),
                o.m(t.parentNode, t)) : o && ($o(),
                xo(o, 1, 1, (()=>{
                    o = null
                }
                )),
                Eo())
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function xc(e, n, o) {
        let i, s, a;
        on(e, Po, (e=>o(8, s = e))),
        on(e, vc, (e=>o(3, a = e)));
        let r, l, {translatedText: c} = n, {sourceText: d} = n, {onClose: u} = n, {error: m} = n, g = !1;
        return setTimeout((()=>o(4, g = !0)), 50),
        e.$$set = e=>{
            "translatedText"in e && o(0, c = e.translatedText),
            "sourceText"in e && o(7, d = e.sourceText),
            "onClose"in e && o(1, u = e.onClose),
            "error"in e && o(2, m = e.error)
        }
        ,
        e.$$.update = ()=>{
            8 & e.$$.dirty && o(5, i = a && a.isDarkMode),
            128 & e.$$.dirty && dt(d).then((e=>{
                r = e
            }
            )),
            256 & e.$$.dirty && (l = s.selectedTargetLanguage)
        }
        ,
        [c, u, m, a, g, i, function() {
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: ps,
                    sourceLang: r,
                    targetLang: l,
                    textToShare: d
                }
            })
        }
        , d, s]
    }
    class Tc extends Oo {
        constructor(e) {
            super(),
            No(this, e, xc, yc, tn, {
                translatedText: 0,
                sourceText: 7,
                onClose: 1,
                error: 2
            })
        }
    }
    class Cc {
        static HTML_TAG_NAME = "deepl-whatsapp-translated-message";
        static createElement = (e=document)=>{
            const t = e.createElement(Cc.HTML_TAG_NAME)
              , n = new Cc(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = (e,t,n,o)=>{
            this.domElement.mainComponent = new Tc({
                target: this.domElement.shadowContainer,
                props: {
                    translatedText: e,
                    onClose: n,
                    sourceText: t,
                    error: o
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function Sc(e) {
        let t, n, o, i;
        t = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("whatsapp_web_tooltip_translate_button"),
                multiline: !0,
                zIndex: "0",
                $$slots: {
                    default: [kc]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let s = e[7] && Mc(e);
        return {
            c() {
                Mo(t.$$.fragment),
                n = kn(),
                s && s.c(),
                o = Mn()
            },
            m(e, a) {
                Io(t, e, a),
                yn(e, n, a),
                s && s.m(e, a),
                yn(e, o, a),
                i = !0
            },
            p(e, n) {
                const i = {};
                134217856 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(i),
                e[7] ? s ? (s.p(e, n),
                128 & n && yo(s, 1)) : (s = Mc(e),
                s.c(),
                yo(s, 1),
                s.m(o.parentNode, o)) : s && ($o(),
                xo(s, 1, 1, (()=>{
                    s = null
                }
                )),
                Eo())
            },
            i(e) {
                i || (yo(t.$$.fragment, e),
                yo(s),
                i = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                xo(s),
                i = !1
            },
            d(e) {
                Ao(t, e),
                e && xn(n),
                s && s.d(e),
                e && xn(o)
            }
        }
    }
    function Lc(e) {
        let t, n;
        return t = new rc({
            props: {
                small: !0
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p: Kt,
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function kc(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("div"),
                t.innerHTML = '<svg width="15" height="15" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ptnx4w"><g clip-path="url(#clip0)"><path d="M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z" fill="#0F2B46"></path><path d="M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z" fill="white"></path><path d="M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z" fill="white"></path></g><defs><clipPath id="clip0"><rect width="18.5294" height="19" fill="white" transform="matrix(-1 0 0 1 18.5294 0)"></rect></clipPath></defs></svg>',
                On(t, "class", "translateTrigger svelte-ptnx4w")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = [In(t, "mouseover", e[20]), In(t, "click", e[13])],
                n = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                Jt(o)
            }
        }
    }
    function Mc(e) {
        let t, n;
        return t = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("whatsapp_web_tooltip_settings_button"),
                multiline: !0,
                zIndex: "0",
                $$slots: {
                    default: [Ic]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                134217792 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Ic(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("div"),
                t.innerHTML = '<svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-ptnx4w"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.11001 16.2439H10.71L11.025 14.0488C11.565 13.8732 12.015 13.6098 12.465 13.2585L14.58 14.0488L16.38 10.9756L14.625 9.57073C14.67 9.30732 14.67 9.0439 14.67 8.78049C14.67 8.51707 14.67 8.25366 14.625 7.99024L16.38 6.58537L14.58 3.5122L12.465 4.30244C12.015 3.99512 11.52 3.73171 11.025 3.5122L10.665 1.31707H7.06501L6.70501 3.5122C6.16501 3.68781 5.71501 3.95122 5.26501 4.30244L3.15001 3.5122L1.35001 6.58537L3.10501 7.99024C3.06001 8.25366 3.06001 8.51707 3.06001 8.78049C3.06001 9.0439 3.06001 9.30732 3.10501 9.57073L1.35001 10.9756L3.15001 14.0488L5.31001 13.2585C5.76001 13.5659 6.25501 13.8293 6.75001 14.0488L7.11001 16.2439ZM9.94501 15.3659H7.83001L7.51501 13.3463L7.24501 13.2585C6.66001 13.0829 6.12001 12.7756 5.67001 12.3805L5.44501 12.2049L3.55501 12.9073L2.52001 11.1512L4.09501 9.87805L4.05001 9.61463C4.00501 9.30732 3.96001 9 3.96001 8.73659C3.96001 8.47317 4.00501 8.16585 4.05001 7.85854L4.09501 7.63902L2.52001 6.36585L3.55501 4.60976L5.44501 5.3122L5.67001 5.09268C6.12001 4.69756 6.66001 4.43415 7.24501 4.21463L7.51501 4.12683L7.83001 2.19512H9.94501L10.26 4.21463L10.53 4.30244C11.115 4.47805 11.655 4.78537 12.105 5.18049L12.285 5.3561L14.175 4.65366L15.21 6.40976L13.635 7.68293L13.68 7.94634C13.725 8.25366 13.77 8.56098 13.77 8.82439C13.77 9.08781 13.725 9.39512 13.68 9.70244L13.635 9.96585L15.21 11.239L14.175 12.9951L12.285 12.2927L12.105 12.4683C11.655 12.8634 11.115 13.1268 10.53 13.3463L10.26 13.4341L9.94501 15.3659ZM6.03018 8.78047C6.03018 10.3171 7.29018 11.5463 8.86518 11.5463C10.4402 11.5463 11.7002 10.3171 11.7002 8.78047C11.7002 7.24388 10.4402 6.01461 8.86518 6.01461C7.29018 6.01461 6.03018 7.24388 6.03018 8.78047ZM6.93018 8.78047C6.93018 7.72681 7.78518 6.89266 8.86518 6.89266C9.94518 6.89266 10.8002 7.72681 10.8002 8.78047C10.8002 9.83413 9.94518 10.6683 8.86518 10.6683C7.78518 10.6683 6.93018 9.83413 6.93018 8.78047Z" fill="#0F2B46"></path></svg>',
                On(t, "class", "settingsTrigger svelte-ptnx4w")
            },
            m(n, s) {
                yn(n, t, s),
                o || (i = [In(t, "click", e[21]), In(t, "mousedown", Nn(An(e[19])))],
                o = !0)
            },
            p: Kt,
            i(e) {
                n || co((()=>{
                    n = Co(t, jo, {
                        x: -8,
                        duration: 600
                    }),
                    n.start()
                }
                ))
            },
            o: Kt,
            d(e) {
                e && xn(t),
                o = !1,
                Jt(i)
            }
        }
    }
    function Ac(e) {
        let t, n, o, i, s;
        return n = new _c({}),
        n.$on("close", e[22]),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "settingsContainer svelte-ptnx4w"),
                Gn(t, "isTop", !e[9]),
                Gn(t, "isLeft", !e[10])
            },
            m(e, o) {
                yn(e, t, o),
                Io(n, t, null),
                s = !0
            },
            p(e, n) {
                (!s || 512 & n) && Gn(t, "isTop", !e[9]),
                (!s || 1024 & n) && Gn(t, "isLeft", !e[10])
            },
            i(e) {
                s || (yo(n.$$.fragment, e),
                co((()=>{
                    s && (i && i.end(1),
                    o = Co(t, jo, {
                        y: -10,
                        duration: 600
                    }),
                    o.start())
                }
                )),
                s = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o && o.invalidate(),
                i = So(t, jo, {
                    y: -10,
                    duration: 600
                }),
                s = !1
            },
            d(e) {
                e && xn(t),
                Ao(n),
                e && i && i.end()
            }
        }
    }
    function Nc(e) {
        let t, n, o, i, s, a, r, l;
        const c = [Lc, Sc]
          , d = [];
        function u(e, t) {
            return e[3] ? 0 : 1
        }
        n = u(e),
        o = d[n] = c[n](e);
        let m = e[6] && Ac(e);
        return {
            c() {
                t = Cn("div"),
                o.c(),
                i = kn(),
                m && m.c(),
                On(t, "class", "container svelte-ptnx4w"),
                On(t, "style", s = `top: ${e[5]}px; left: ${e[4]}px; z-index: ${e[12]}; opacity: ${e[11]};`),
                Gn(t, "isTranslated", e[2]),
                Gn(t, "isHidden", e[0]),
                Gn(t, "messageHasReactionIcon", e[8]),
                Gn(t, "isExpanded", e[7])
            },
            m(o, s) {
                yn(o, t, s),
                d[n].m(t, null),
                bn(t, i),
                m && m.m(t, null),
                e[23](t),
                a = !0,
                r || (l = [In(t, "mouseleave", e[24]), mn(wi.call(null, t, {
                    isShadow: !0
                })), In(t, "click_outside", e[14]), In(t, "mousedown", Nn(An(e[18])))],
                r = !0)
            },
            p(e, [r]) {
                let l = n;
                n = u(e),
                n === l ? d[n].p(e, r) : ($o(),
                xo(d[l], 1, 1, (()=>{
                    d[l] = null
                }
                )),
                Eo(),
                o = d[n],
                o ? o.p(e, r) : (o = d[n] = c[n](e),
                o.c()),
                yo(o, 1),
                o.m(t, i)),
                e[6] ? m ? (m.p(e, r),
                64 & r && yo(m, 1)) : (m = Ac(e),
                m.c(),
                yo(m, 1),
                m.m(t, null)) : m && ($o(),
                xo(m, 1, 1, (()=>{
                    m = null
                }
                )),
                Eo()),
                (!a || 2096 & r && s !== (s = `top: ${e[5]}px; left: ${e[4]}px; z-index: ${e[12]}; opacity: ${e[11]};`)) && On(t, "style", s),
                (!a || 4 & r) && Gn(t, "isTranslated", e[2]),
                (!a || 1 & r) && Gn(t, "isHidden", e[0]),
                (!a || 256 & r) && Gn(t, "messageHasReactionIcon", e[8]),
                (!a || 128 & r) && Gn(t, "isExpanded", e[7])
            },
            i(e) {
                a || (yo(o),
                yo(m),
                a = !0)
            },
            o(e) {
                xo(o),
                xo(m),
                a = !1
            },
            d(o) {
                o && xn(t),
                d[n].d(),
                m && m.d(),
                e[23](null),
                r = !1,
                Jt(l)
            }
        }
    }
    function Oc(e, n, o) {
        Jn("deepl_settings", Po),
        Jn("deepl_website_settings", cr);
        let {textElement: i} = n
          , {messageContainer: s} = n;
        const a = 265
          , r = 150
          , l = 220;
        let c, d, u, m = !1, g = !0, p = 0, h = 0, f = !1, _ = !1, w = !1, v = L.deepl_inline_ui.z_index, b = !0, $ = !0, E = 0;
        function y() {
            const e = c.parentNode.getBoundingClientRect()
              , t = ql(s);
            o(5, h = s.getBoundingClientRect().height / 2),
            o(4, p = t.getBoundingClientRect().right - e.left),
            setTimeout((()=>{
                const t = s.querySelector('[data-icon="react"]');
                t && (o(4, p = t.getBoundingClientRect().right - e.left),
                o(17, u = !0)),
                o(11, E = 1)
            }
            ), r);
            const n = s.querySelector('[data-a8n="reaction-bubble"]')
              , i = s.querySelector('[data-testid="reaction-bubble"]');
            o(8, w = !(!n && !i)),
            window.innerHeight - e.bottom < l + h ? o(9, b = !1) : o(9, b = !0),
            s.getBoundingClientRect().right - t.getBoundingClientRect().right < a ? o(10, $ = !1) : o(10, $ = !0)
        }
        s.addEventListener("mouseover", (()=>{
            o(0, g = !1)
        }
        ), !1),
        s.addEventListener("mouseout", (()=>{
            f || o(0, g = !0)
        }
        ), !1);
        return e.$$set = e=>{
            "textElement"in e && o(16, i = e.textElement),
            "messageContainer"in e && o(15, s = e.messageContainer)
        }
        ,
        e.$$.update = ()=>{
            131073 & e.$$.dirty && (g || u || y())
        }
        ,
        [g, c, d, m, p, h, f, _, w, b, $, E, v, async function() {
            if (d)
                return;
            o(3, m = !0),
            o(6, f = !1);
            let e, n, a = "";
            try {
                a = await dt(i.innerText)
            } catch (e) {
                console.log(e)
            }
            try {
                n = await t({
                    action: "dlRequestWhatsAppMessageTranslation",
                    payload: {
                        message: i.innerText,
                        messageLang: a,
                        domainName: window.location.hostname
                    }
                })
            } catch (t) {
                e = t,
                console.error(e)
            }
            o(2, d = e ? "" : n[0].text),
            o(3, m = !1);
            const r = Cc.createElement();
            r.createDOM(d, i.innerText, (()=>{
                o(15, s.dataset.dlIsTranslated = "false", s),
                setTimeout((()=>o(2, d = "")), 600),
                r.cleanupDOM(),
                r.remove()
            }
            ), e),
            i.appendChild(r),
            o(15, s.dataset.dlIsTranslated = "true", s)
        }
        , function() {
            o(6, f = !1)
        }
        , s, i, u, function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , ()=>o(7, _ = !0), ()=>o(6, f = !f), ()=>o(6, f = !1), function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                c = e,
                o(1, c)
            }
            ))
        }
        , ()=>{
            f || o(7, _ = !1)
        }
        ]
    }
    class Dc extends Oo {
        constructor(e) {
            super(),
            No(this, e, Oc, Nc, tn, {
                textElement: 16,
                messageContainer: 15
            })
        }
    }
    class Rc {
        static HTML_TAG_NAME = "deepl-whatsapp-message-in-translator";
        static createElement = (e=document)=>{
            const t = e.createElement(Rc.HTML_TAG_NAME)
              , n = new Rc(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = (e,t)=>{
            this.domElement.mainComponent = new Dc({
                target: this.domElement.shadowContainer,
                props: {
                    textElement: e,
                    messageContainer: t
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function Pc() {
        const e = document.querySelector("deepl-whatsapp-messages-in-translator");
        if (e) {
            const t = document.body.querySelector("[data-testid=conversation-panel-messages]")
              , n = document.querySelector("footer").getBoundingClientRect()
              , o = t.getBoundingClientRect();
            return e.style.left = o.right - 58 + "px",
            void (e.style.top = n.top - 55 + "px")
        }
    }
    function Hc() {
        let e = new MutationObserver((()=>{
            !function() {
                const e = document.body.querySelectorAll(".message-in");
                for (let t of e)
                    if ("true" !== t.dataset.dlHasMessageTranslator && "true" !== t.dataset.dlIsTranslated) {
                        t.dataset.dlHasMessageTranslator = "true";
                        const e = t.querySelector(".selectable-text.copyable-text");
                        if (e && e.innerText && !Fl(e.innerText)) {
                            const n = Rc.createElement();
                            n.createDOM(e, t),
                            n.style.position = "absolute",
                            n.style.top = "0px",
                            t.appendChild(n)
                        }
                    }
            }()
        }
        ));
        e.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
        }),
        window.addEventListener("resize", Pc),
        vi((()=>{
            window.removeEventListener("resize", Pc),
            e.disconnect()
        }
        ))
    }
    class Gc {
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowContainer.addEventListener("mouseup", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.domElement.shadowContainer.addEventListener("mousedown", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.domElement.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = ()=>{
            throw new Error("createDOM must be defined in the child component")
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
        ;
        bindChildFunctions = (e=[])=>{
            ["createDOM", "cleanupDOM", ...e].forEach((e=>{
                this.domElement[e] = this[e]
            }
            ))
        }
    }
    const zc = "rgb(0, 0, 0)"
      , Bc = "rgb(21, 32, 43)";
    function Uc(e) {
        return e === zc || e === Bc
    }
    const Wc = function() {
        let e = {
            isDarkMode: Uc(document.body.style.backgroundColor)
        };
        const {subscribe: t, update: n} = Ro(e);
        let o = new MutationObserver((e=>{
            e.forEach((e=>{
                "attributes" === e.type && "style" === e.attributeName && n((e=>({
                    ...e,
                    isDarkMode: Uc(document.body.style.backgroundColor)
                })))
            }
            ))
        }
        ));
        return o.observe(document.body, {
            attributes: !0
        }),
        setTimeout((()=>{
            vi((()=>{
                o.disconnect()
            }
            ))
        }
        )),
        {
            subscribe: t
        }
    }();
    function Fc(e) {
        let t, n;
        return {
            c() {
                t = Cn("span"),
                n = Ln(e[0]),
                On(t, "class", "translatedText svelte-1twhl12")
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                1 & t && Dn(n, e[0])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function jc(e) {
        let t, n;
        return t = new _a({
            props: {
                error: e[2]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.error = e[2]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function qc(e) {
        let t, n, o = function(e) {
            let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h;
            const f = [jc, Fc]
              , _ = [];
            function w(e, t) {
                return e[2] ? 0 : 1
            }
            return o = w(e),
            i = _[o] = f[o](e),
            {
                c() {
                    t = Cn("div"),
                    n = Cn("div"),
                    i.c(),
                    s = kn(),
                    a = Cn("div"),
                    a.textContent = `${chrome.i18n.getMessage("twitter_web_alternatives_link")}`,
                    r = kn(),
                    l = Cn("button"),
                    c = Sn("svg"),
                    d = Sn("path"),
                    On(a, "class", "show-alternatives svelte-1twhl12"),
                    Gn(a, "dark", e[3]),
                    On(d, "d", "M3 9L9 3M3 3L9 9"),
                    On(d, "stroke", u = e[3] ? "white" : "#037171"),
                    On(d, "stroke-width", "1.5"),
                    On(d, "stroke-linecap", "round"),
                    On(d, "stroke-linejoin", "round"),
                    On(c, "width", "12"),
                    On(c, "height", "12"),
                    On(c, "viewBox", "0 0 12 12"),
                    On(c, "fill", "none"),
                    On(c, "xmlns", "http://www.w3.org/2000/svg"),
                    On(l, "class", "svelte-1twhl12"),
                    On(t, "class", "container svelte-1twhl12"),
                    Gn(t, "dark", e[3])
                },
                m(i, u) {
                    yn(i, t, u),
                    bn(t, n),
                    _[o].m(n, null),
                    bn(n, s),
                    bn(n, a),
                    bn(t, r),
                    bn(t, l),
                    bn(l, c),
                    bn(c, d),
                    g = !0,
                    p || (h = [In(a, "click", e[4]), In(l, "click", (function() {
                        en(e[1]) && e[1].apply(this, arguments)
                    }
                    ))],
                    p = !0)
                },
                p(r, l) {
                    let c = o;
                    o = w(e = r),
                    o === c ? _[o].p(e, l) : ($o(),
                    xo(_[c], 1, 1, (()=>{
                        _[c] = null
                    }
                    )),
                    Eo(),
                    i = _[o],
                    i ? i.p(e, l) : (i = _[o] = f[o](e),
                    i.c()),
                    yo(i, 1),
                    i.m(n, s)),
                    (!g || 8 & l) && Gn(a, "dark", e[3]),
                    (!g || 8 & l && u !== (u = e[3] ? "white" : "#037171")) && On(d, "stroke", u),
                    (!g || 8 & l) && Gn(t, "dark", e[3])
                },
                i(e) {
                    g || (yo(i),
                    m || co((()=>{
                        m = Co(t, jo, {
                            y: -10,
                            duration: 200
                        }),
                        m.start()
                    }
                    )),
                    g = !0)
                },
                o(e) {
                    xo(i),
                    g = !1
                },
                d(e) {
                    e && xn(t),
                    _[o].d(),
                    p = !1,
                    Jt(h)
                }
            }
        }(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, [t]) {
                o.p(e, t)
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function Vc(e, n, o) {
        let i, s, a;
        on(e, Po, (e=>o(6, s = e))),
        on(e, Wc, (e=>o(7, a = e)));
        let r, l, {translatedText: c} = n, {sourceText: d} = n, {onClose: u} = n, {error: m} = n;
        return e.$$set = e=>{
            "translatedText"in e && o(0, c = e.translatedText),
            "sourceText"in e && o(5, d = e.sourceText),
            "onClose"in e && o(1, u = e.onClose),
            "error"in e && o(2, m = e.error)
        }
        ,
        e.$$.update = ()=>{
            128 & e.$$.dirty && o(3, i = a && a.isDarkMode),
            32 & e.$$.dirty && dt(d).then((e=>{
                r = e
            }
            )),
            64 & e.$$.dirty && (l = s.selectedTargetLanguage)
        }
        ,
        [c, u, m, i, function() {
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: ps,
                    sourceLang: r,
                    targetLang: l,
                    textToShare: d
                }
            })
        }
        , d, s, a]
    }
    class Zc extends Oo {
        constructor(e) {
            super(),
            No(this, e, Vc, qc, tn, {
                translatedText: 0,
                sourceText: 5,
                onClose: 1,
                error: 2
            })
        }
    }
    class Kc extends Gc {
        static HTML_TAG_NAME = "deepl-twitter-translated-tweet";
        constructor(e) {
            super(e),
            this.bindChildFunctions()
        }
        static createElement = (e=document)=>{
            const t = e.createElement(Kc.HTML_TAG_NAME);
            return new Kc(t),
            t
        }
        ;
        createDOM = (e,t,n,o)=>{
            this.domElement.mainComponent = new Zc({
                target: this.domElement.shadowContainer,
                props: {
                    translatedText: e,
                    onClose: n,
                    sourceText: t,
                    error: o
                }
            })
        }
    }
    function Yc(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p;
        return {
            c() {
                t = Cn("button"),
                n = Cn("div"),
                n.textContent = `${chrome.i18n.getMessage("twitter_web_translate_tweet_link")}`,
                o = kn(),
                i = Sn("svg"),
                s = Sn("g"),
                a = Sn("path"),
                r = Sn("path"),
                l = Sn("path"),
                c = Sn("defs"),
                d = Sn("clipPath"),
                u = Sn("rect"),
                On(n, "class", "copy svelte-1wes5l4"),
                On(a, "d", "M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z"),
                On(a, "class", "deepl-icon svelte-1wes5l4"),
                On(r, "d", "M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z"),
                On(r, "fill", "white"),
                On(l, "d", "M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z"),
                On(l, "fill", "white"),
                On(s, "clip-path", "url(#clip0)"),
                On(u, "width", "18.5294"),
                On(u, "height", "19"),
                On(u, "fill", "white"),
                On(u, "transform", "matrix(-1 0 0 1 18.5294 0)"),
                On(d, "id", "clip0"),
                On(i, "width", "15"),
                On(i, "height", "15"),
                On(i, "viewBox", "0 0 19 19"),
                On(i, "fill", "none"),
                On(i, "xmlns", "http://www.w3.org/2000/svg"),
                On(i, "class", "svelte-1wes5l4"),
                On(t, "class", "tweetLink svelte-1wes5l4"),
                t.disabled = m = !!e[0],
                Gn(t, "dark", e[3])
            },
            m(m, h) {
                yn(m, t, h),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                bn(i, s),
                bn(s, a),
                bn(s, r),
                bn(s, l),
                bn(i, c),
                bn(c, d),
                bn(d, u),
                g || (p = [In(t, "keydown", e[4]), In(t, "click", e[4])],
                g = !0)
            },
            p(e, n) {
                1 & n && m !== (m = !!e[0]) && (t.disabled = m),
                8 & n && Gn(t, "dark", e[3])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                g = !1,
                Jt(p)
            }
        }
    }
    function Xc(e) {
        let t, n;
        return t = new rc({
            props: {
                small: !0
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p: Kt,
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Qc(e) {
        let t, n, o, i;
        const s = [Xc, Yc]
          , a = [];
        function r(e, t) {
            return e[1] ? 0 : e[2] ? 1 : -1
        }
        return ~(t = r(e)) && (n = a[t] = s[t](e)),
        {
            c() {
                n && n.c(),
                o = Mn()
            },
            m(e, n) {
                ~t && a[t].m(e, n),
                yn(e, o, n),
                i = !0
            },
            p(e, [i]) {
                let l = t;
                t = r(e),
                t === l ? ~t && a[t].p(e, i) : (n && ($o(),
                xo(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                Eo()),
                ~t ? (n = a[t],
                n ? n.p(e, i) : (n = a[t] = s[t](e),
                n.c()),
                yo(n, 1),
                n.m(o.parentNode, o)) : n = null)
            },
            i(e) {
                i || (yo(n),
                i = !0)
            },
            o(e) {
                xo(n),
                i = !1
            },
            d(e) {
                ~t && a[t].d(e),
                e && xn(o)
            }
        }
    }
    function Jc(e, n, o) {
        let i, s, a;
        on(e, Po, (e=>o(6, s = e))),
        on(e, Wc, (e=>o(7, a = e))),
        Jn("deepl_settings", Po),
        Jn("deepl_website_settings", cr);
        let r, l, {tweetTextNode: c} = n, d = !1;
        return e.$$set = e=>{
            "tweetTextNode"in e && o(5, c = e.tweetTextNode)
        }
        ,
        e.$$.update = ()=>{
            if (128 & e.$$.dirty && o(3, i = a && a.isDarkMode),
            64 & e.$$.dirty) {
                const e = s.blacklistDomainsForReading.includes(window.location.hostname);
                !s.enableInlineTranslation || e ? o(2, l = !1) : s.selectedTargetLanguage && async function() {
                    const e = c.innerText;
                    if (e.length < 20)
                        return !1;
                    const t = await dt(e);
                    return ct(chrome.i18n.getUILanguage()) !== t && ct(s.selectedTargetLanguage) !== t
                }().then((e=>o(2, l = e))).catch((()=>o(2, l = !1)))
            }
        }
        ,
        [r, d, l, i, async function() {
            if (r)
                return;
            o(1, d = !0);
            let e, n, i = "";
            try {
                i = await dt(c.innerText),
                i = mt(i)
            } catch (e) {
                console.log(e)
            }
            try {
                n = await t({
                    action: "dlRequestTwitterTweetTranslation",
                    payload: {
                        message: c.innerText,
                        messageLang: i,
                        domainName: window.location.hostname
                    }
                })
            } catch (t) {
                e = t,
                console.error(e)
            }
            o(0, r = e ? "" : n[0].text),
            o(1, d = !1);
            const s = Kc.createElement();
            s.createDOM(r, c.innerText, (()=>{
                o(0, r = ""),
                s.cleanupDOM()
            }
            ), e),
            c.appendChild(s)
        }
        , c, s, a]
    }
    class ed extends Oo {
        constructor(e) {
            super(),
            No(this, e, Jc, Qc, tn, {
                tweetTextNode: 5
            })
        }
    }
    class td extends Gc {
        static HTML_TAG_NAME = "deepl-twitter-tweet-link";
        static createElement = (e=document)=>{
            const t = e.createElement(td.HTML_TAG_NAME);
            return new td(t),
            t
        }
        ;
        constructor(e) {
            super(e),
            this.bindChildFunctions()
        }
        createDOM = e=>{
            this.domElement.mainComponent = new ed({
                target: this.domElement.shadowContainer,
                props: {
                    tweetTextNode: e
                }
            })
        }
    }
    function nd() {
        console.log("customizing for twitter");
        let e = new MutationObserver((()=>{
            !function() {
                const e = document.body.querySelectorAll("[data-testid='tweetText']");
                for (let t of e)
                    if ("true" !== t.dataset.dlHasMessageTranslator && (t.dataset.dlHasMessageTranslator = "true",
                    t && t.innerText)) {
                        const e = td.createElement();
                        return e.createDOM(t),
                        void t.appendChild(e)
                    }
            }()
        }
        ));
        e.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
        }),
        vi((()=>e.disconnect()))
    }
    function od(e) {
        let t, n;
        return {
            c() {
                t = Cn("span"),
                n = Ln(e[0]),
                On(t, "class", "translatedText svelte-1cloi0a")
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                1 & t && Dn(n, e[0])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function id(e) {
        let t, n;
        return t = new _a({
            props: {
                error: e[2]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.error = e[2]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function sd(e) {
        let t, n, o = function(e) {
            let t, n, o, i, s, a, r, l, c, d, u, m;
            const g = [id, od]
              , p = [];
            function h(e, t) {
                return e[2] ? 0 : 1
            }
            return o = h(e),
            i = p[o] = g[o](e),
            {
                c() {
                    t = Cn("div"),
                    n = Cn("div"),
                    i.c(),
                    s = kn(),
                    a = Cn("div"),
                    a.textContent = `${chrome.i18n.getMessage("ui_inline_translation_see_alternatives_v2")}`,
                    r = kn(),
                    l = Cn("button"),
                    l.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9L9 3M3 3L9 9" stroke="#363F4A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
                    On(a, "class", "show-alternatives svelte-1cloi0a"),
                    On(l, "class", "svelte-1cloi0a"),
                    On(t, "class", "container svelte-1cloi0a")
                },
                m(i, c) {
                    yn(i, t, c),
                    bn(t, n),
                    p[o].m(n, null),
                    bn(n, s),
                    bn(n, a),
                    bn(t, r),
                    bn(t, l),
                    d = !0,
                    u || (m = [In(a, "click", e[3]), In(l, "click", (function() {
                        en(e[1]) && e[1].apply(this, arguments)
                    }
                    ))],
                    u = !0)
                },
                p(t, a) {
                    let r = o;
                    o = h(e = t),
                    o === r ? p[o].p(e, a) : ($o(),
                    xo(p[r], 1, 1, (()=>{
                        p[r] = null
                    }
                    )),
                    Eo(),
                    i = p[o],
                    i ? i.p(e, a) : (i = p[o] = g[o](e),
                    i.c()),
                    yo(i, 1),
                    i.m(n, s))
                },
                i(e) {
                    d || (yo(i),
                    c || co((()=>{
                        c = Co(t, jo, {
                            y: -10,
                            duration: 200
                        }),
                        c.start()
                    }
                    )),
                    d = !0)
                },
                o(e) {
                    xo(i),
                    d = !1
                },
                d(e) {
                    e && xn(t),
                    p[o].d(),
                    u = !1,
                    Jt(m)
                }
            }
        }(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, [t]) {
                o.p(e, t)
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function ad(e, n, o) {
        let i;
        on(e, Po, (e=>o(5, i = e)));
        let s, a, {translatedText: r} = n, {sourceText: l} = n, {onClose: c} = n, {error: d} = n;
        return e.$$set = e=>{
            "translatedText"in e && o(0, r = e.translatedText),
            "sourceText"in e && o(4, l = e.sourceText),
            "onClose"in e && o(1, c = e.onClose),
            "error"in e && o(2, d = e.error)
        }
        ,
        e.$$.update = ()=>{
            16 & e.$$.dirty && dt(l).then((e=>{
                s = e
            }
            )),
            32 & e.$$.dirty && (a = i.selectedTargetLanguage)
        }
        ,
        [r, c, d, function() {
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: ps,
                    sourceLang: s,
                    targetLang: a,
                    textToShare: l
                }
            });
            try {
                t({
                    action: "dlTrackUiAction",
                    payload: {
                        uiAction: O,
                        nicheIntegration: K.linkedIn
                    }
                })
            } catch (e) {
                console.error(e)
            }
        }
        , l, i]
    }
    class rd extends Oo {
        constructor(e) {
            super(),
            No(this, e, ad, sd, tn, {
                translatedText: 0,
                sourceText: 4,
                onClose: 1,
                error: 2
            })
        }
    }
    class ld {
        static HTML_TAG_NAME = "deepl-linkedin-translated-post";
        static createElement = (e=document)=>{
            const t = e.createElement(ld.HTML_TAG_NAME)
              , n = new ld(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent = null;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = (e,t,n,o)=>{
            this.domElement.mainComponent = new rd({
                target: this.domElement.shadowContainer,
                props: {
                    translatedText: e,
                    onClose: n,
                    sourceText: t,
                    error: o
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function cd(e) {
        let t, n, o = {
            ctx: e,
            current: null,
            token: null,
            hasCatch: !1,
            pending: pd,
            then: ud,
            catch: dd,
            value: 11,
            blocks: [, , , ]
        };
        return function(e, t) {
            const n = t.token = {};
            function o(e, o, i, s) {
                if (t.token !== n)
                    return;
                t.resolved = s;
                let a = t.ctx;
                void 0 !== i && (a = a.slice(),
                a[i] = s);
                const r = e && (t.current = e)(a);
                let l = !1;
                t.block && (t.blocks ? t.blocks.forEach(((e,n)=>{
                    n !== o && e && ($o(),
                    xo(e, 1, 1, (()=>{
                        t.blocks[n] === e && (t.blocks[n] = null)
                    }
                    )),
                    Eo())
                }
                )) : t.block.d(1),
                r.c(),
                yo(r, 1),
                r.m(t.mount(), t.anchor),
                l = !0),
                t.block = r,
                t.blocks && (t.blocks[o] = r),
                l && ho()
            }
            if (!(i = e) || "object" != typeof i && "function" != typeof i || "function" != typeof i.then) {
                if (t.current !== t.then)
                    return o(t.then, 1, t.value, e),
                    !0;
                t.resolved = e
            } else {
                const n = Kn();
                if (e.then((e=>{
                    Zn(n),
                    o(t.then, 1, t.value, e),
                    Zn(null)
                }
                ), (e=>{
                    if (Zn(n),
                    o(t.catch, 2, t.error, e),
                    Zn(null),
                    !t.hasCatch)
                        throw e
                }
                )),
                t.current !== t.pending)
                    return o(t.pending, 0),
                    !0
            }
            var i
        }(e[3](), o),
        {
            c() {
                t = Mn(),
                o.block.c()
            },
            m(e, i) {
                yn(e, t, i),
                o.block.m(e, o.anchor = i),
                o.mount = ()=>t.parentNode,
                o.anchor = t,
                n = !0
            },
            p(t, n) {
                !function(e, t, n) {
                    const o = t.slice()
                      , {resolved: i} = e;
                    e.current === e.then && (o[e.value] = i),
                    e.current === e.catch && (o[e.error] = i),
                    e.block.p(o, n)
                }(o, e = t, n)
            },
            i(e) {
                n || (yo(o.block),
                n = !0)
            },
            o(e) {
                for (let e = 0; e < 3; e += 1) {
                    xo(o.blocks[e])
                }
                n = !1
            },
            d(e) {
                e && xn(t),
                o.block.d(e),
                o.token = null,
                o = null
            }
        }
    }
    function dd(e) {
        return {
            c: Kt,
            m: Kt,
            p: Kt,
            i: Kt,
            o: Kt,
            d: Kt
        }
    }
    function ud(e) {
        let t, n, o = e[11] && function(e) {
            let t, n, o, i;
            const s = [gd, md]
              , a = [];
            function r(e, t) {
                return e[0] ? 0 : 1
            }
            return t = r(e),
            n = a[t] = s[t](e),
            {
                c() {
                    n.c(),
                    o = Mn()
                },
                m(e, n) {
                    a[t].m(e, n),
                    yn(e, o, n),
                    i = !0
                },
                p(e, i) {
                    let l = t;
                    t = r(e),
                    t === l ? a[t].p(e, i) : ($o(),
                    xo(a[l], 1, 1, (()=>{
                        a[l] = null
                    }
                    )),
                    Eo(),
                    n = a[t],
                    n ? n.p(e, i) : (n = a[t] = s[t](e),
                    n.c()),
                    yo(n, 1),
                    n.m(o.parentNode, o))
                },
                i(e) {
                    i || (yo(n),
                    i = !0)
                },
                o(e) {
                    xo(n),
                    i = !1
                },
                d(e) {
                    a[t].d(e),
                    e && xn(o)
                }
            }
        }(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, t) {
                e[11] && o.p(e, t)
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function md(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("button"),
                n = Cn("div"),
                n.textContent = `${chrome.i18n.getMessage("linkedin_web_translate_post_link")}`,
                On(n, "class", "copy svelte-4estld"),
                Gn(n, "active", e[1]),
                On(t, "class", "linkedin-link svelte-4estld")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                o || (i = [In(t, "keydown", e[4]), In(t, "click", e[4])],
                o = !0)
            },
            p(e, t) {
                2 & t && Gn(n, "active", e[1])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                o = !1,
                Jt(i)
            }
        }
    }
    function gd(e) {
        let t, n, o;
        return n = new rc({
            props: {
                small: !0
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "spinner svelte-4estld")
            },
            m(e, i) {
                yn(e, t, i),
                Io(n, t, null),
                o = !0
            },
            p: Kt,
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function pd(e) {
        return {
            c: Kt,
            m: Kt,
            p: Kt,
            i: Kt,
            o: Kt,
            d: Kt
        }
    }
    function hd(e) {
        let t, n, o = e[2] && e[2][K.linkedIn] && cd(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[2] && e[2][K.linkedIn] ? o ? (o.p(e, n),
                4 & n && yo(o, 1)) : (o = cd(e),
                o.c(),
                yo(o, 1),
                o.m(t.parentNode, t)) : o && ($o(),
                xo(o, 1, 1, (()=>{
                    o = null
                }
                )),
                Eo())
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function fd(e, n, o) {
        let i, s, a;
        on(e, Po, (e=>o(6, a = e))),
        Jn("deepl_settings", Po),
        Jn("deepl_website_settings", cr);
        let r, {linkedInPostNode: l} = n, c = !1, d = l.querySelector(".update-components-text").innerText;
        return e.$$set = e=>{
            "linkedInPostNode"in e && o(5, l = e.linkedInPostNode)
        }
        ,
        e.$$.update = ()=>{
            64 & e.$$.dirty && o(2, s = a.customizationsActiveStates)
        }
        ,
        o(1, i = !0),
        [c, i, s, async function() {
            if (d.length < 20)
                return !1;
            const e = await dt(d);
            return t = e,
            ct(chrome.i18n.getUILanguage()) !== t && (e=>ct(a.selectedTargetLanguage) !== e)(e);
            var t
        }
        , async function() {
            if (r)
                return;
            o(0, c = !0);
            let e, n, s = "";
            try {
                s = await dt(d),
                s = mt(s)
            } catch (e) {
                console.log(e)
            }
            try {
                n = await t({
                    action: "dlRequestLinkedInPostTranslation",
                    payload: {
                        message: d,
                        messageLang: s,
                        domainName: window.location.hostname,
                        trigger: m
                    }
                })
            } catch (t) {
                e = t,
                console.error(e)
            }
            r = e ? "" : n[0].text,
            o(0, c = !1);
            const a = ld.createElement();
            a.createDOM(r, l.innerText, (()=>{
                r = "",
                o(1, i = !0),
                a.cleanupDOM(),
                a.remove()
            }
            ), e),
            l.appendChild(a),
            o(1, i = !1)
        }
        , l, a]
    }
    class _d extends Oo {
        constructor(e) {
            super(),
            No(this, e, fd, hd, tn, {
                linkedInPostNode: 5
            })
        }
    }
    class wd {
        static HTML_TAG_NAME = "deepl-linkedin-post-link";
        static createElement = (e=document)=>{
            const t = e.createElement(wd.HTML_TAG_NAME)
              , n = new wd(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent = null;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = e=>{
            this.domElement.mainComponent = new _d({
                target: this.domElement.shadowContainer,
                props: {
                    linkedInPostNode: e
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    const vd = ()=>document.body.querySelectorAll(".feed-shared-update-v2__description-wrapper")
      , bd = e=>{
        const t = wd.createElement();
        t.createDOM(e),
        e.appendChild(t)
    }
    ;
    function $d() {
        let e = new MutationObserver((()=>{
            !function() {
                const e = vd();
                for (let t of e)
                    if ("true" !== t.dataset.dlHasMessageTranslator && (t.dataset.dlHasMessageTranslator = "true",
                    t && t.innerText))
                        return void bd(t)
            }()
        }
        ));
        e.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0
        }),
        vi((()=>e.disconnect()))
    }
    function Ed(e) {
        try {
            return JSON.parse(atob(e.split(".")[1]))
        } catch (e) {
            return null
        }
    }
    function yd(e) {
        switch (e) {
        case I.inputTranslationTriggerIcon:
            return 1;
        case I.inlineTranslationTriggerIcon:
            return 2;
        case I.inlineTranslationSettingPopup:
            return 3;
        case I.inputTranslationSettingPopup:
            return 4;
        case I.settingsPageFPT:
            return 5;
        case I.settingsPageReading:
            return 6;
        case I.settingsPageWriting:
            return 7;
        case I.fptHideModal:
            return 8;
        case I.inputTranslationSettingsIcon:
            return 9;
        case I.inlineTranslationSettingsIcon:
            return 10;
        case I.inputTranslationReadMoreLink:
            return 11;
        case I.inlineTranslationReadMoreLink:
            return 12;
        case I.fptTranslationReadMoreLink:
            return 13;
        case I.extensionHubToggleSwitch:
            return 14;
        case I.hubCustomizeShortcut:
            return 15;
        case I.hubLoginButton:
            return 16;
        case I.hubUpgradeToProLink:
            return 17;
        case I.hubTryProLink:
            return 18;
        case I.settingsPageCustomizeShortcutButton:
            return 19;
        case I.hubFPTEnableCheckbox:
            return 20;
        case I.hubFPTDisableCheckbox:
            return 21;
        case I.deeplWriteIcon:
            return 22;
        case I.hubViewIntegrations:
            return 23;
        case I.hubCloseCustomizationsWidget:
            return 24;
        case I.gmailOnboardingPopup:
            return 25;
        case I.gmailOnboardingIcon:
            return 26;
        case I.gmailCharLimitLogin:
            return 27;
        case I.gmailFeedbackSurvey:
            return 28;
        case I.gslidesFeedbackSurvey:
            return 29;
        case I.gslidesCharLimitLogin:
            return 30;
        case I.zendeskTryProLink:
            return 31;
        case I.settingsPageIntegrations:
            return 32;
        case I.onboardingSignUp:
            return 33;
        case I.onboardingSkipSignUp:
            return 34;
        case I.onboardingLoginLink:
            return 35;
        case I.onboardingSeeAllIntegrations:
            return 36;
        default:
            return 0
        }
    }
    function xd(e) {
        switch (e) {
        case W.chrome:
            return U.chrome;
        case W.edge:
            return U.edge;
        case W.firefox:
            return U.firefox;
        case W.local:
            return U.local;
        default:
            return U.unspecified
        }
    }
    function Td(e) {
        switch (e) {
        case de.free:
            return 1;
        case de.pro:
            return 2;
        case de.none:
            return 3;
        default:
            return 0
        }
    }
    function Cd(e) {
        switch (e) {
        case Te.READING_VIEW_TRANSLATE:
            return 1;
        case Te.COMPOSE_VIEW_TRANSLATE:
            return 2;
        case Te.COMPOSE_VIEW_IMPROVE:
            return 3;
        default:
            return 0
        }
    }
    function Sd(e) {
        switch (e) {
        case De.none:
            return 1;
        case De.pro:
            return 2;
        case De.free:
            return 3;
        default:
            return 0
        }
    }
    async function Ld(e) {
        let t, n, o, i, s, a, r, l, c = !1;
        try {
            const e = await Nd(["session", "installationId"]);
            n = e.session.id,
            t = e.installationId
        } catch (e) {
            console.error(`DAP: Failed to fetch settings. Error: ${e.message}`)
        }
        try {
            const e = await async function() {
                return await chrome.storage.local.get(["isLoggedIn", "isProUser", "sessionType", "translatorServiceType", "apiServiceType", "docTranslatorServiceType", "accountId"])
            }();
            c = !!e.accountId,
            o = Td(e.translatorServiceType),
            i = Td(e.apiServiceType),
            s = Td(e.docTranslatorServiceType),
            r = c ? 2 === o || 2 === i || 2 === s ? g.loggedInPro : g.loggedInFree : g.notLoggedIn,
            l = e.sessionType ? Sd(e.sessionType) : Sd(De.none)
        } catch (e) {
            console.error(`DAP: Failed to fetch user information. Error: ${e.message}`)
        }
        try {
            a = await async function() {
                return (await chrome.storage.local.get(["browserInstanceId"])).browserInstanceId
            }()
        } catch (e) {
            console.error(e)
        }
        const d = ze()
          , u = await async function() {
            let e = [];
            try {
                e = await async function() {
                    try {
                        const e = await async function(e, t) {
                            Md || await new Promise(((e,t)=>{
                                let n = indexedDB.open(Id, 1);
                                n.onerror = function() {
                                    t("Error creating database.")
                                }
                                ,
                                n.onsuccess = function(t) {
                                    Md = t.target.result,
                                    e()
                                }
                                ,
                                n.onupgradeneeded = function(t) {
                                    Md = t.target.result,
                                    Md.objectStoreNames.contains(Ad) || Md.createObjectStore(Ad, {
                                        keyPath: "id"
                                    }),
                                    e()
                                }
                            }
                            ));
                            return new Promise(((n,o)=>{
                                let i = Md.transaction(t, "readonly").objectStore(t).get(e);
                                i.onerror = function(e) {
                                    o(e)
                                }
                                ,
                                i.onsuccess = function() {
                                    i.result ? n(i.result) : n(null)
                                }
                            }
                            ))
                        }("dlexperiments", Ad);
                        return e && e.meta && e.data ? e.data : []
                    } catch (e) {
                        return []
                    }
                }()
            } catch (e) {}
            if (!e || 0 === e.length)
                return [];
            return e.map((e=>({
                id: e.id,
                variant: e.variant,
                breakout: e.breakout
            })))
        }()
          , m = {
            eventId: void 0,
            extensionVersion: "1.16.1",
            sessionId: n,
            sessionType: l,
            installationId: t,
            browserInstanceId: a,
            originStore: xd(chrome.runtime.id),
            userInfos: {
                userType: r,
                translatorServiceType: o,
                apiServiceType: i,
                docTranslatorServiceType: s
            },
            userAgent: d.userAgent,
            platform: d.platform,
            browser: d.browser,
            browserVersion: d.browserVersion,
            browserLang: d.browserLang,
            clientExperiments: u
        }
          , p = e ? e(m) : m;
        return fetch("https://s.deepl.com/chrome/statistics", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(p)
        }).then((e=>{
            e.ok || console.log(`DAP ${p.eventId} request failed: ${e}`)
        }
        ))
    }
    async function kd() {
        if (!await async function() {
            const e = await chrome.storage.local.get(["isLoggedIn"]);
            return !(!e || !e.isLoggedIn)
        }())
            return;
        const e = await async function() {
            const e = await chrome.storage.local.get(["accountId", "a_t", "i_t"]);
            if (e && e.accountId)
                return e.accountId;
            if (e && e.a_t) {
                const t = Ed(e.a_t)
                  , n = Ed(e.i_t);
                return t.sub || n.sub
            }
        }();
        return Ld((t=>({
            ...t,
            eventId: 60067,
            accountData: {
                accountUuid: e
            }
        })))
    }
    let Md;
    const Id = "dlBrowserExtension"
      , Ad = "dlCache";
    async function Nd(e) {
        if (e.includes("session")) {
            const e = await chrome.storage.sync.get(["session"]);
            e && !e.session && await async function() {
                const e = crypto.randomUUID();
                await chrome.storage.sync.set({
                    session: {
                        id: e,
                        timestamp: Date.now()
                    }
                });
                try {
                    await kd()
                } catch (e) {
                    console.error(e)
                }
            }()
        }
        return new Promise(((t,n)=>{
            chrome.storage.sync.get(e, (o=>{
                o ? t(o) : n(`Can not get ${e}`)
            }
            ))
        }
        ))
    }
    function Od(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                On(t, "type", "button"),
                On(t, "class", "dl-menu-icon dl-menu-icon--user svelte-10ld15e")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "mousedown", An(e[13])),
                n = !0)
            },
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function Dd(e) {
        let t, n, o, i, s, a, r, l, c, d = It();
        function u(e, t) {
            return !0 === e[1].isLoggedIn ? Pd : Rd
        }
        let m = u(e)
          , g = m && m(e)
          , p = d && function(e) {
            let t, n, o;
            return {
                c() {
                    t = Cn("div"),
                    t.textContent = "DEV_TOOLS",
                    On(t, "class", "dl-menu-item svelte-10ld15e")
                },
                m(i, s) {
                    yn(i, t, s),
                    n || (o = In(t, "click", e[8]),
                    n = !0)
                },
                p: Kt,
                d(e) {
                    e && xn(t),
                    n = !1,
                    o()
                }
            }
        }(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                n.innerHTML = '<span class="dl-menu-link dl-feedback-link svelte-10ld15e"><div>Share feedback</div> \n          \n          \n          <div class="dl-feedback-icon svelte-10ld15e"></div></span>',
                o = kn(),
                i = Cn("div"),
                i.textContent = `${chrome.i18n.getMessage("menu_settings_label")}`,
                s = kn(),
                g && g.c(),
                a = kn(),
                p && p.c(),
                On(n, "class", "dl-menu-item svelte-10ld15e"),
                On(i, "class", "dl-menu-item svelte-10ld15e"),
                On(t, "class", "dl-menu-list svelte-10ld15e")
            },
            m(r, d) {
                yn(r, t, d),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                bn(t, s),
                g && g.m(t, null),
                bn(t, a),
                p && p.m(t, null),
                l || (c = [In(n, "click", e[6]), In(i, "click", e[9])],
                l = !0)
            },
            p(e, n) {
                m === (m = u(e)) && g ? g.p(e, n) : (g && g.d(1),
                g = m && m(e),
                g && (g.c(),
                g.m(t, a))),
                d && p.p(e, n)
            },
            i(e) {
                r || co((()=>{
                    r = Co(t, jo, {
                        y: -5,
                        duration: 500
                    }),
                    r.start()
                }
                ))
            },
            o: Kt,
            d(e) {
                e && xn(t),
                g && g.d(),
                p && p.d(),
                l = !1,
                Jt(c)
            }
        }
    }
    function Rd(e) {
        let t, n, o, i, s, a, r, l, c;
        return {
            c() {
                t = Cn("div"),
                t.innerHTML = '<div class="divider svelte-10ld15e"></div>',
                n = kn(),
                o = Cn("div"),
                i = Cn("span"),
                i.textContent = `${chrome.i18n.getMessage("menu_login_label")}`,
                s = kn(),
                a = Cn("div"),
                r = Cn("span"),
                r.textContent = `${chrome.i18n.getMessage("menu_trial_label")}`,
                On(t, "class", "dl-menu-item dl-menu-item--divider svelte-10ld15e"),
                On(o, "class", "dl-menu-item svelte-10ld15e"),
                On(r, "class", "dl-menu-link link svelte-10ld15e"),
                On(a, "class", "dl-menu-item svelte-10ld15e")
            },
            m(d, u) {
                yn(d, t, u),
                yn(d, n, u),
                yn(d, o, u),
                bn(o, i),
                yn(d, s, u),
                yn(d, a, u),
                bn(a, r),
                l || (c = [In(o, "click", e[4]), In(a, "click", e[5])],
                l = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(n),
                e && xn(o),
                e && xn(s),
                e && xn(a),
                l = !1,
                Jt(c)
            }
        }
    }
    function Pd(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = Cn("div"),
                t.innerHTML = '<div class="divider svelte-10ld15e"></div>',
                n = kn(),
                o = Cn("div"),
                i = Cn("span"),
                i.textContent = `${chrome.i18n.getMessage("menu_logout_label")}`,
                On(t, "class", "dl-menu-item dl-menu-item--divider svelte-10ld15e"),
                On(o, "class", "dl-menu-item svelte-10ld15e")
            },
            m(r, l) {
                yn(r, t, l),
                yn(r, n, l),
                yn(r, o, l),
                bn(o, i),
                s || (a = In(o, "click", e[3]),
                s = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(n),
                e && xn(o),
                s = !1,
                a()
            }
        }
    }
    function Hd(e) {
        let t, n, o, i, s, a, r, l = !0 === e[1].isLoggedIn && Od(e), c = e[0] && Dd(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                l && l.c(),
                o = kn(),
                i = Cn("button"),
                s = kn(),
                c && c.c(),
                On(i, "type", "button"),
                On(i, "class", "dl-menu-icon dl-menu-icon--hamburger svelte-10ld15e"),
                Gn(i, "isOpen", e[0]),
                On(n, "class", "dl-menu-icon-wrapper svelte-10ld15e"),
                On(t, "class", "dl-container-menu svelte-10ld15e")
            },
            m(d, u) {
                yn(d, t, u),
                bn(t, n),
                l && l.m(n, null),
                bn(n, o),
                bn(n, i),
                bn(t, s),
                c && c.m(t, null),
                a || (r = [In(i, "mousedown", An(e[12])), In(n, "click", e[14]), In(n, "mousedown", Nn(An(e[11]))), mn(wi.call(null, t, {
                    isShadow: !0
                })), In(t, "click_outside", e[7]), In(t, "mousedown", Nn(An(e[10])))],
                a = !0)
            },
            p(e, [s]) {
                !0 === e[1].isLoggedIn ? l || (l = Od(e),
                l.c(),
                l.m(n, o)) : l && (l.d(1),
                l = null),
                1 & s && Gn(i, "isOpen", e[0]),
                e[0] ? c ? (c.p(e, s),
                1 & s && yo(c, 1)) : (c = Dd(e),
                c.c(),
                yo(c, 1),
                c.m(t, null)) : c && (c.d(1),
                c = null)
            },
            i(e) {
                yo(c)
            },
            o: Kt,
            d(e) {
                e && xn(t),
                l && l.d(),
                c && c.d(),
                a = !1,
                Jt(r)
            }
        }
    }
    function Gd(e, n, o) {
        let i;
        const s = eo("deepl_settings");
        on(e, s, (e=>o(1, i = e)));
        let a = !1;
        function r() {
            o(0, a = !1)
        }
        return [a, i, s, function() {
            t({
                action: "dlRequestLogout"
            }),
            t({
                action: "dlTrackUiAction",
                payload: {
                    uiAction: R
                }
            }),
            r()
        }
        , function() {
            t({
                action: "dlRequestLogin"
            }),
            r()
        }
        , function() {
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: gs,
                    utmContent: "menu"
                }
            }),
            r()
        }
        , function() {
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Be() ? xs : ms
                }
            }),
            r()
        }
        , r, function() {
            t({
                action: "dlOpenInternalPage",
                payload: {
                    destination: lc.developer_tools
                }
            }),
            r()
        }
        , function() {
            t({
                action: "dlOpenInternalPage",
                payload: {
                    destination: lc.settings_page
                }
            }),
            r()
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , ()=>{
            o(0, a = !a)
        }
        ]
    }
    class zd extends Oo {
        constructor(e) {
            super(),
            No(this, e, Gd, Hd, tn, {})
        }
    }
    function Bd(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "dl-logo svelte-10vss2x")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Ud(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "dl-logo dl-logo--clickable svelte-10vss2x")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", e[12]),
                n = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function Wd(e) {
        let t, n, o, i, s, a;
        return s = new wr({
            props: {
                value: e[9].selectedTargetLanguage,
                websiteSettings: e[4],
                customClass: "dropdown__wrapper--header",
                fontSize: "sm"
            }
        }),
        s.$on("selection", e[16]),
        {
            c() {
                t = Cn("div"),
                n = Cn("span"),
                n.textContent = `${chrome.i18n.getMessage("layout_header_label_language_switch_v2")}`,
                o = kn(),
                i = Cn("div"),
                Mo(s.$$.fragment),
                On(n, "class", "dl-actions-language-selector__label svelte-10vss2x"),
                On(i, "class", "dl-actions-language-selector__dropdown svelte-10vss2x"),
                On(t, "class", "dl-actions-language-selector svelte-10vss2x")
            },
            m(e, r) {
                yn(e, t, r),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                Io(s, i, null),
                a = !0
            },
            p(e, t) {
                const n = {};
                512 & t && (n.value = e[9].selectedTargetLanguage),
                16 & t && (n.websiteSettings = e[4]),
                s.$set(n)
            },
            i(e) {
                a || (yo(s.$$.fragment, e),
                a = !0)
            },
            o(e) {
                xo(s.$$.fragment, e),
                a = !1
            },
            d(e) {
                e && xn(t),
                Ao(s)
            }
        }
    }
    function Fd(e) {
        let t;
        function n(e, t) {
            return null == e[8] || e[8].translationState === r.ongoingTranslation ? qd : jd
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = Mn()
            },
            m(e, n) {
                i.m(e, n),
                yn(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && xn(t)
            }
        }
    }
    function jd(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                t.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_done")}`,
                On(t, "class", "dl-write-heading svelte-10vss2x")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function qd(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                t.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_loading")}`,
                On(t, "class", "dl-write-heading svelte-10vss2x")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Vd(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                On(t, "class", "dl-settings-icon svelte-10vss2x"),
                On(t, "data-qa", "deepl-layour-header-settings-link")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", e[13]),
                n = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function Zd(e) {
        let t, n;
        return t = new zd({}),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Kd(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                On(t, "type", "button"),
                On(t, "class", "dl-close-icon svelte-10vss2x")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", (function() {
                    en(e[0]) && e[0].apply(this, arguments)
                }
                )),
                n = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function Yd(e) {
        let t, n, o, i, s, a, r, l, c, d, u;
        let m = function(e, t) {
            return e[12] ? Ud : Bd
        }(e)
          , g = m(e)
          , p = e[6] === Y.translate && e[2] && e[9] && e[4] && Wd(e)
          , h = e[6] === Y.write && Fd(e)
          , f = e[7] && Vd(e)
          , _ = e[1] && Zd()
          , w = e[0] && Kd(e);
        return {
            c() {
                t = Cn("div"),
                g.c(),
                n = kn(),
                o = Cn("div"),
                p && p.c(),
                i = kn(),
                h && h.c(),
                s = kn(),
                f && f.c(),
                a = kn(),
                _ && _.c(),
                r = kn(),
                w && w.c(),
                On(o, "class", "dl-actions svelte-10vss2x"),
                On(t, "class", l = dn("dl-header " + (e[2] ? "dl-header--with-lang-selector" : "")) + " svelte-10vss2x")
            },
            m(l, m) {
                yn(l, t, m),
                g.m(t, null),
                bn(t, n),
                bn(t, o),
                p && p.m(o, null),
                bn(o, i),
                h && h.m(o, null),
                bn(o, s),
                f && f.m(o, null),
                bn(o, a),
                _ && _.m(o, null),
                bn(o, r),
                w && w.m(o, null),
                c = !0,
                d || (u = In(t, "mousedown", Nn(An(e[15]))),
                d = !0)
            },
            p(e, [n]) {
                g.p(e, n),
                e[6] === Y.translate && e[2] && e[9] && e[4] ? p ? (p.p(e, n),
                596 & n && yo(p, 1)) : (p = Wd(e),
                p.c(),
                yo(p, 1),
                p.m(o, i)) : p && ($o(),
                xo(p, 1, 1, (()=>{
                    p = null
                }
                )),
                Eo()),
                e[6] === Y.write ? h ? h.p(e, n) : (h = Fd(e),
                h.c(),
                h.m(o, s)) : h && (h.d(1),
                h = null),
                e[7] ? f ? f.p(e, n) : (f = Vd(e),
                f.c(),
                f.m(o, a)) : f && (f.d(1),
                f = null),
                e[1] ? _ ? 2 & n && yo(_, 1) : (_ = Zd(),
                _.c(),
                yo(_, 1),
                _.m(o, r)) : _ && ($o(),
                xo(_, 1, 1, (()=>{
                    _ = null
                }
                )),
                Eo()),
                e[0] ? w ? w.p(e, n) : (w = Kd(e),
                w.c(),
                w.m(o, null)) : w && (w.d(1),
                w = null),
                (!c || 4 & n && l !== (l = dn("dl-header " + (e[2] ? "dl-header--with-lang-selector" : "")) + " svelte-10vss2x")) && On(t, "class", l)
            },
            i(e) {
                c || (yo(p),
                yo(_),
                c = !0)
            },
            o(e) {
                xo(p),
                xo(_),
                c = !1
            },
            d(e) {
                e && xn(t),
                g.d(),
                p && p.d(),
                h && h.d(),
                f && f.d(),
                _ && _.d(),
                w && w.d(),
                d = !1,
                u()
            }
        }
    }
    function Xd(e, n, o) {
        let i, s, a = Kt, l = ()=>(a(),
        a = nn(f, (e=>o(8, i = e))),
        f), c = Kt, u = ()=>(c(),
        c = nn(h, (e=>o(9, s = e))),
        h);
        e.$$.on_destroy.push((()=>a())),
        e.$$.on_destroy.push((()=>c()));
        let {closeWindow: m} = n
          , {showMenu: g=!1} = n
          , {showLangSelect: p=!1} = n
          , {settings: h} = n;
        u();
        let {websiteSettings: f} = n;
        l();
        let {extensionContext: _=0} = n
          , {platformBehaviour: w=K.default} = n
          , {textProcessingMode: v=Y.translate} = n
          , {showSettingsIcon: b=!0} = n;
        async function $(e) {
            await h.set({
                selectedTargetLanguage: e.value,
                isTargetLanguageConfirmed: !0,
                regionalVariant: e.regionalVariant || ""
            }),
            f.update({
                translationState: r.ongoingTranslation
            }),
            t({
                action: "dlRequestInlineTranslation",
                payload: {
                    requests: [{
                        text: i.originalSnippet
                    }],
                    domainName: window.location.hostname,
                    trigger: d,
                    sourceLang: "auto",
                    websiteLanguage: i.websiteLanguage
                }
            }).then((e=>{
                f.update({
                    translationState: r.none,
                    translatedSnippet: e[0].text,
                    snippetDetectedSourceLang: e[0].detected_source_language,
                    websiteLanguage: e[0].detected_source_language
                })
            }
            )).catch((e=>{
                f.update({
                    translationState: r.none,
                    translatedSnippet: "",
                    snippetDetectedSourceLang: "",
                    error: e.message ? e.message : e
                })
            }
            ))
        }
        async function E(e) {
            await h.set({
                selectedTargetLanguage: e.value,
                isTargetLanguageConfirmed: !0,
                regionalVariant: e.regionalVariant || ""
            });
            const t = document.getElementsByTagName("deepl-gdocs-icon")[0];
            t && t.requestNewTranslation(e.value)
        }
        return e.$$set = e=>{
            "closeWindow"in e && o(0, m = e.closeWindow),
            "showMenu"in e && o(1, g = e.showMenu),
            "showLangSelect"in e && o(2, p = e.showLangSelect),
            "settings"in e && u(o(3, h = e.settings)),
            "websiteSettings"in e && l(o(4, f = e.websiteSettings)),
            "extensionContext"in e && o(14, _ = e.extensionContext),
            "platformBehaviour"in e && o(5, w = e.platformBehaviour),
            "textProcessingMode"in e && o(6, v = e.textProcessingMode),
            "showSettingsIcon"in e && o(7, b = e.showSettingsIcon)
        }
        ,
        [m, g, p, h, f, w, v, b, i, s, $, E, function() {
            let e = hs;
            t({
                action: "dlTrackLogoClickedEvent",
                payload: {
                    extensionContext: _
                }
            }),
            v === Y.write && (e = fs),
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: e,
                    utmContent: "gdocs_logo"
                }
            })
        }
        , function() {
            t({
                action: "dlOpenInternalPage",
                payload: {
                    destination: lc.settings_page
                }
            })
        }
        , _, function(t) {
            to.call(this, e, t)
        }
        , e=>{
            switch (w) {
            case K.gdocs:
                E(e.detail.selectedOption);
                break;
            case K.default:
            default:
                $(e.detail.selectedOption)
            }
        }
        ]
    }
    class Qd extends Oo {
        constructor(e) {
            super(),
            No(this, e, Xd, Yd, tn, {
                closeWindow: 0,
                showMenu: 1,
                showLangSelect: 2,
                settings: 3,
                websiteSettings: 4,
                extensionContext: 14,
                platformBehaviour: 5,
                textProcessingMode: 6,
                showSettingsIcon: 7
            })
        }
    }
    function Jd(e) {
        let t, n;
        return t = new Qd({
            props: {
                websiteSettings: e[5],
                settings: e[4],
                showLangSelect: e[2],
                showMenu: e[1],
                closeWindow: e[0],
                extensionContext: e[6],
                platformBehaviour: e[7],
                textProcessingMode: e[8],
                showSettingsIcon: e[9]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                32 & n && (o.websiteSettings = e[5]),
                16 & n && (o.settings = e[4]),
                4 & n && (o.showLangSelect = e[2]),
                2 & n && (o.showMenu = e[1]),
                1 & n && (o.closeWindow = e[0]),
                64 & n && (o.extensionContext = e[6]),
                128 & n && (o.platformBehaviour = e[7]),
                256 & n && (o.textProcessingMode = e[8]),
                512 & n && (o.showSettingsIcon = e[9]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function eu(e) {
        let t, n, o, i, s, a = e[3] && Jd(e);
        const r = e[11].default
          , l = sn(r, e, e[10], null);
        return {
            c() {
                t = Cn("div"),
                a && a.c(),
                n = kn(),
                o = Cn("div"),
                l && l.c(),
                On(o, "class", "dl-content svelte-1dtlgso"),
                On(t, "class", i = dn(`dl-layout ${e[2] && "dl-layout--with-lang-selector"}`) + " svelte-1dtlgso"),
                On(t, "translate", "no")
            },
            m(e, i) {
                yn(e, t, i),
                a && a.m(t, null),
                bn(t, n),
                bn(t, o),
                l && l.m(o, null),
                s = !0
            },
            p(e, [o]) {
                e[3] ? a ? (a.p(e, o),
                8 & o && yo(a, 1)) : (a = Jd(e),
                a.c(),
                yo(a, 1),
                a.m(t, n)) : a && ($o(),
                xo(a, 1, 1, (()=>{
                    a = null
                }
                )),
                Eo()),
                l && l.p && (!s || 1024 & o) && ln(l, r, e, e[10], s ? rn(r, e[10], o, null) : cn(e[10]), null),
                (!s || 4 & o && i !== (i = dn(`dl-layout ${e[2] && "dl-layout--with-lang-selector"}`) + " svelte-1dtlgso")) && On(t, "class", i)
            },
            i(e) {
                s || (yo(a),
                yo(l, e),
                s = !0)
            },
            o(e) {
                xo(a),
                xo(l, e),
                s = !1
            },
            d(e) {
                e && xn(t),
                a && a.d(),
                l && l.d(e)
            }
        }
    }
    function tu(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {closeWindow: s} = t
          , {showMenu: a=!1} = t
          , {showLangSelect: r=!1} = t
          , {withHeader: l=!0} = t
          , {settings: c} = t
          , {websiteSettings: d} = t
          , {extensionContext: u} = t
          , {platformBehaviour: m=K.default} = t
          , {textProcessingMode: g=Y.translate} = t
          , {showSettingsIcon: p=!0} = t;
        return e.$$set = e=>{
            "closeWindow"in e && n(0, s = e.closeWindow),
            "showMenu"in e && n(1, a = e.showMenu),
            "showLangSelect"in e && n(2, r = e.showLangSelect),
            "withHeader"in e && n(3, l = e.withHeader),
            "settings"in e && n(4, c = e.settings),
            "websiteSettings"in e && n(5, d = e.websiteSettings),
            "extensionContext"in e && n(6, u = e.extensionContext),
            "platformBehaviour"in e && n(7, m = e.platformBehaviour),
            "textProcessingMode"in e && n(8, g = e.textProcessingMode),
            "showSettingsIcon"in e && n(9, p = e.showSettingsIcon),
            "$$scope"in e && n(10, i = e.$$scope)
        }
        ,
        [s, a, r, l, c, d, u, m, g, p, i, o]
    }
    class nu extends Oo {
        constructor(e) {
            super(),
            No(this, e, tu, eu, tn, {
                closeWindow: 0,
                showMenu: 1,
                showLangSelect: 2,
                withHeader: 3,
                settings: 4,
                websiteSettings: 5,
                extensionContext: 6,
                platformBehaviour: 7,
                textProcessingMode: 8,
                showSettingsIcon: 9
            })
        }
    }
    function ou(e) {
        let t, n, o, i, s, a, r, l, c, d;
        return {
            c() {
                t = Cn("div"),
                n = Cn("input"),
                o = kn(),
                i = Cn("div"),
                s = kn(),
                a = Cn("label"),
                r = Ln(e[3]),
                On(n, "id", e[1]),
                On(n, "name", e[4]),
                On(n, "type", "radio"),
                n.checked = e[2],
                On(n, "data-qa", e[6]),
                On(n, "class", "svelte-12100kl"),
                On(i, "class", "radio-icon svelte-12100kl"),
                On(a, "for", e[1]),
                On(a, "class", "svelte-12100kl"),
                On(t, "class", l = dn(`radio ${e[5]} ${e[2] ? "radio--checked" : ""}`) + " svelte-12100kl")
            },
            m(l, u) {
                yn(l, t, u),
                bn(t, n),
                Rn(n, e[0]),
                bn(t, o),
                bn(t, i),
                bn(t, s),
                bn(t, a),
                bn(a, r),
                c || (d = [In(n, "change", e[10]), In(n, "change", e[8]), In(n, "mousedown", Nn(An(e[9]))), In(t, "click", e[7])],
                c = !0)
            },
            p(e, [o]) {
                2 & o && On(n, "id", e[1]),
                16 & o && On(n, "name", e[4]),
                4 & o && (n.checked = e[2]),
                64 & o && On(n, "data-qa", e[6]),
                1 & o && Rn(n, e[0]),
                8 & o && Dn(r, e[3]),
                2 & o && On(a, "for", e[1]),
                36 & o && l !== (l = dn(`radio ${e[5]} ${e[2] ? "radio--checked" : ""}`) + " svelte-12100kl") && On(t, "class", l)
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                c = !1,
                Jt(d)
            }
        }
    }
    function iu(e, t, n) {
        let {id: o} = t
          , {checked: i=!1} = t
          , {label: s=""} = t
          , {value: a=""} = t
          , {name: r=""} = t
          , {cssClassName: l=""} = t
          , {dataQa: c="deepl-radio-button"} = t;
        return e.$$set = e=>{
            "id"in e && n(1, o = e.id),
            "checked"in e && n(2, i = e.checked),
            "label"in e && n(3, s = e.label),
            "value"in e && n(0, a = e.value),
            "name"in e && n(4, r = e.name),
            "cssClassName"in e && n(5, l = e.cssClassName),
            "dataQa"in e && n(6, c = e.dataQa)
        }
        ,
        [a, o, i, s, r, l, c, function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function() {
            a = this.value,
            n(0, a)
        }
        ]
    }
    class su extends Oo {
        constructor(e) {
            super(),
            No(this, e, iu, ou, tn, {
                id: 1,
                checked: 2,
                label: 3,
                value: 0,
                name: 4,
                cssClassName: 5,
                dataQa: 6
            })
        }
    }
    function au(e) {
        let t, n, o;
        return n = new nu({
            props: {
                withHeader: !1,
                $$slots: {
                    default: [ru]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment)
            },
            m(e, i) {
                yn(e, t, i),
                Io(n, t, null),
                o = !0
            },
            p(e, t) {
                const o = {};
                524297 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function ru(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w, v, b, $ = chrome.i18n.getMessage("inline_translation_setting_button_ok") + "";
        return l = new su({
            props: {
                name: "disable_inline_translation",
                id: P.disablePerSite,
                value: P.disablePerSite,
                cssClassName: "radio--with-border",
                checked: e[3] === P.disablePerSite,
                label: chrome.i18n.getMessage("inline_translation_setting_radio_disable_per_site"),
                dataQa: "disable-per-site-radio-button"
            }
        }),
        l.$on("change", e[7]),
        l.$on("click", e[12]),
        d = new su({
            props: {
                name: "disable_inline_translation",
                id: P.disableEverywhere,
                value: P.disableEverywhere,
                cssClassName: "radio--with-border",
                checked: e[3] === P.disableEverywhere,
                label: chrome.i18n.getMessage("inline_translation_setting_radio_disable_everywhere"),
                dataQa: "disable-everywhere-radio-button"
            }
        }),
        d.$on("change", e[7]),
        d.$on("click", e[13]),
        {
            c() {
                t = Cn("div"),
                n = Cn("button"),
                o = kn(),
                i = Cn("div"),
                s = Cn("p"),
                s.textContent = `${chrome.i18n.getMessage("inline_translation_setting_label_title_v2")}`,
                a = kn(),
                r = Cn("div"),
                Mo(l.$$.fragment),
                c = kn(),
                Mo(d.$$.fragment),
                u = kn(),
                m = Cn("div"),
                g = Cn("span"),
                g.textContent = `${chrome.i18n.getMessage("inline_translation_setting_link_cancel")}`,
                p = kn(),
                h = Cn("button"),
                f = Ln($),
                On(n, "type", "button"),
                On(n, "class", "close-icon svelte-128qkr"),
                On(t, "class", "header svelte-128qkr"),
                On(s, "class", "font-bold svelte-128qkr"),
                On(r, "class", "option-container svelte-128qkr"),
                On(g, "class", "link svelte-128qkr"),
                On(g, "data-qa", "close-settings-popup-link"),
                On(h, "class", _ = dn("btn btn-primary " + (e[3] ? "" : "disabled")) + " svelte-128qkr"),
                On(h, "data-qa", "save-settings-change-button"),
                On(m, "class", "action-container svelte-128qkr"),
                On(i, "class", "dl-widget svelte-128qkr")
            },
            m(_, $) {
                yn(_, t, $),
                bn(t, n),
                yn(_, o, $),
                yn(_, i, $),
                bn(i, s),
                bn(i, a),
                bn(i, r),
                Io(l, r, null),
                bn(r, c),
                Io(d, r, null),
                bn(i, u),
                bn(i, m),
                bn(m, g),
                bn(m, p),
                bn(m, h),
                bn(h, f),
                w = !0,
                v || (b = [In(n, "click", Nn(An((function() {
                    en(e[0]) && e[0].apply(this, arguments)
                }
                )))), In(t, "mousedown", Nn(An(e[11]))), In(g, "click", (function() {
                    en(e[0]) && e[0].apply(this, arguments)
                }
                )), In(h, "click", Nn(An(e[6]))), In(i, "mousedown", Nn(An(e[10])))],
                v = !0)
            },
            p(t, n) {
                e = t;
                const o = {};
                8 & n && (o.checked = e[3] === P.disablePerSite),
                l.$set(o);
                const i = {};
                8 & n && (i.checked = e[3] === P.disableEverywhere),
                d.$set(i),
                (!w || 8 & n && _ !== (_ = dn("btn btn-primary " + (e[3] ? "" : "disabled")) + " svelte-128qkr")) && On(h, "class", _)
            },
            i(e) {
                w || (yo(l.$$.fragment, e),
                yo(d.$$.fragment, e),
                w = !0)
            },
            o(e) {
                xo(l.$$.fragment, e),
                xo(d.$$.fragment, e),
                w = !1
            },
            d(e) {
                e && xn(t),
                e && xn(o),
                e && xn(i),
                Ao(l),
                Ao(d),
                v = !1,
                Jt(b)
            }
        }
    }
    function lu(e) {
        let t, n, o, i, s = e[4].enableInlineTranslation && au(e);
        return {
            c() {
                t = Cn("div"),
                s && s.c(),
                On(t, "class", "tooltip-wrapper tooltip-wrapper--settings svelte-128qkr"),
                On(t, "data-qa", "deepl-inline-settings-tooltip"),
                On(t, "style", e[2])
            },
            m(a, r) {
                yn(a, t, r),
                s && s.m(t, null),
                e[14](t),
                n = !0,
                o || (i = [mn(wi.call(null, t, {
                    isShadow: !0
                })), In(t, "click_outside", e[15])],
                o = !0)
            },
            p(e, [o]) {
                e[4].enableInlineTranslation ? s ? (s.p(e, o),
                16 & o && yo(s, 1)) : (s = au(e),
                s.c(),
                yo(s, 1),
                s.m(t, null)) : s && ($o(),
                xo(s, 1, 1, (()=>{
                    s = null
                }
                )),
                Eo()),
                (!n || 4 & o) && On(t, "style", e[2])
            },
            i(e) {
                n || (yo(s),
                n = !0)
            },
            o(e) {
                xo(s),
                n = !1
            },
            d(n) {
                n && xn(t),
                s && s.d(),
                e[14](null),
                o = !1,
                Jt(i)
            }
        }
    }
    function cu(e, n, o) {
        let i;
        on(e, Po, (e=>o(4, i = e)));
        let s, a, r, {closeTooltip: l} = n, {replaceElement: c} = n, d = "visibility: hidden; opacity:0; height:0;", u = "";
        function m(e) {
            o(3, u = e)
        }
        Yn((()=>{
            setTimeout((()=>{
                o(2, d = "")
            }
            ), 100),
            r = Ti(s, (({clientHeight: e})=>{
                o(9, a = e)
            }
            ))
        }
        )),
        Xn((()=>{
            r && r()
        }
        ));
        return e.$$set = e=>{
            "closeTooltip"in e && o(0, l = e.closeTooltip),
            "replaceElement"in e && o(8, c = e.replaceElement)
        }
        ,
        e.$$.update = ()=>{
            768 & e.$$.dirty && c(a)
        }
        ,
        [l, s, d, u, i, m, function() {
            if (!u)
                return;
            switch (u) {
            case P.disableEverywhere:
                Po.set({
                    enableInlineTranslation: !1
                }),
                t({
                    action: "dlTrackSettingChanged",
                    payload: {
                        settingType: P.disableEverywhere,
                        domainName: window.location.hostname,
                        uiFunction: G,
                        uiLocation: I.inlineTranslationSettingPopup
                    }
                });
                break;
            case P.disablePerSite:
                !function() {
                    let e = i.blacklistDomainsForReading;
                    e && !e.includes(window.location.hostname) && (e.push(window.location.hostname),
                    Po.set({
                        blacklistDomainsForReading: e
                    }),
                    t({
                        action: "dlTrackSettingChanged",
                        payload: {
                            settingType: P.disablePerSite,
                            domainName: window.location.hostname,
                            uiFunction: G,
                            uiLocation: I.inlineTranslationSettingPopup
                        }
                    }))
                }()
            }
            let e = Wl(window.location.hostname, ["www."]);
            l(),
            t({
                action: "dlSendNotification",
                payload: {
                    type: k.inlineTranslation,
                    options: {
                        theme: M.green_theme,
                        currentDomain: e,
                        saveAction: u,
                        settingsPageURL: lc.settings_reading
                    }
                }
            })
        }
        , function(e) {
            o(3, u = e.currentTarget.value)
        }
        , c, a, function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , ()=>m(P.disablePerSite), ()=>m(P.disableEverywhere), function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                s = e,
                o(1, s)
            }
            ))
        }
        , ()=>l()]
    }
    class du extends Oo {
        constructor(e) {
            super(),
            No(this, e, cu, lu, tn, {
                closeTooltip: 0,
                replaceElement: 8
            })
        }
    }
    class uu {
        static HTML_TAG_NAME = "deepl-inline-translate-settings-tooltip";
        static createElement = (e=document)=>{
            const t = e.createElement(uu.HTML_TAG_NAME)
              , n = new uu(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.container = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer)
        }
        createDOM = (e,t)=>{
            const {deepl_inline_ui: n} = L;
            this.domElement.shadowContainer && this.domElement.shadowContainer.childElementCount > 0 && this.cleanupDOM();
            const o = 300;
            this.domElement.shadowContainer.appendChild(this.domElement.container);
            const i = e?.top
              , s = window.innerHeight - (e?.bottom || 0);
            let a = "position: absolute; top: 0px; left: 0px; width: 100%; z-index: " + (n.z_index - 100)
              , r = `position: absolute; top: 0px; left: 0px; z-index: ${n.z_index - 100};`
              , l = e.y
              , c = e.x;
            this.domElement.shadowContainer.style.cssText = a,
            this.domElement.container.style.cssText = r,
            this.domElement.mainComponent = new du({
                target: this.domElement.container,
                props: {
                    closeTooltip: t,
                    replaceElement: t=>{
                        const d = i > o;
                        s > o ? l = e.y + 8 : d && (l = e.y - 30 - t - 4),
                        s < o && i < o && (a = `position: fixed; top:50%; left:50%; transform:translate(-50%,-50%); z-index: ${n.z_index - 100}; max-height:90vh;`,
                        r = `z-index: ${n.z_index - 100};`,
                        c = 0,
                        l = 0),
                        e.right < 260 ? c = e.left - 260 + 60 : e.left < 260 && (c = e.left),
                        this.domElement.container.style.top = `${parseInt(l)}px`,
                        this.domElement.container.style.left = `${parseInt(c)}px`
                    }
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.container.remove(),
            this.domElement.shadowContainer.remove(),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.container = document.createElement("div"),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    const mu = {
        TRIGGER_HEIGHT: 25,
        TRIGGER_WIDTH: 25,
        TRIGGER_EXPENDED_WIDTH: 60
    }
      , gu = e=>({
        top: e?.selectedTop,
        bottom: window.innerHeight - e?.selectedBottom,
        right: e?.selectedRight,
        left: e?.selectedLeft
    })
      , pu = e=>{
        const {coords: t, clientHeight: n} = e
          , o = gu(t)
          , i = {
            top: {
                position: t.y - t.height,
                isPossible: o.top >= 0
            },
            bottom: {
                position: t.y - n,
                isPossible: o.bottom >= 0
            },
            middle: {
                position: window.pageYOffset + window.innerHeight / 2 - n / 2,
                isPossible: !0
            }
        };
        for (const e of Object.values(i))
            if (e.isPossible)
                return e.position
    }
      , hu = ({coords: e, TOOLTIP_WIDTH: t})=>{
        const n = {
            right: {
                position: e.x,
                isPossible: e.x + t <= window.innerWidth
            },
            left: {
                position: e.x + e.selectedWidth - t,
                isPossible: e.x + e.selectedWidth - t >= 0
            },
            middle: {
                position: window.innerWidth / 2 - t / 2,
                isPossible: !0
            }
        };
        for (const e of Object.values(n))
            if (e.isPossible)
                return e.position
    }
      , fu = (e,t)=>{
        const {coords: n, clientHeight: o, style: i, TOOLTIP_WIDTH: s, TRIGGER_MENU_ICON_HEIGHT: a} = t;
        switch (e) {
        case "top":
            i.top = n.y - n.height - o - 2 - a + "px",
            i.left = `${hu(t)}px`;
            break;
        case "bottom":
            i.top = `${n.y + 2 + a}px`,
            i.left = `${hu(t)}px`;
            break;
        case "left":
            i.top = `${pu(t)}px`,
            i.left = n.x - s - 2 + "px";
            break;
        case "right":
            i.top = `${pu(t)}px`,
            i.left = `${n.x + n.selectedWidth + 2}px`;
            break;
        default:
            i.top = window.pageYOffset + window.innerHeight / 2 - o / 2 + "px",
            i.left = window.innerWidth / 2 - s / 2 + "px"
        }
    }
      , _u = (e,t)=>{
        const {coords: n, clientHeight: o, TOOLTIP_WIDTH: i, style: s} = t;
        switch (s.left = n.x - i - 10 + "px",
        e) {
        case "top":
            s.top = n.y - o + "px";
            break;
        case "bottom":
            s.top = n.y - n.height + "px";
            break;
        default:
            s.top = window.pageYOffset + window.innerHeight / 2 - o / 2 + "px"
        }
    }
      , wu = (e,t)=>{
        const n = vu(t);
        switch (e) {
        case "top":
        case "bottom":
        case "left":
        case "right":
            return n[e];
        default:
            return !0
        }
    }
      , vu = e=>{
        const {TOOLTIP_WIDTH: t, clientHeight: n, coords: o} = e
          , i = gu(o);
        return {
            left: i.left > t,
            right: i.right > t,
            bottom: i.bottom > n,
            top: i.top > n
        }
    }
    ;
    function bu(e) {
        let t, n, o, i, s, a, r, l, c;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                n.textContent = `${chrome.i18n.getMessage("ui_inline_translation_listen_to_translation")}`,
                o = kn(),
                i = Cn("button"),
                i.textContent = `${chrome.i18n.getMessage("ui_inline_translation_listen_to_original")}`,
                On(n, "class", "list-entry svelte-12gdpba"),
                On(n, "data-qa", "dl-toolbar-listener-button-target-lang"),
                Gn(n, "dl-entry-notAvaiable", !e[0]),
                On(i, "class", "list-entry svelte-12gdpba"),
                On(i, "data-qa", "dl-toolbar-listener-button-source-lang"),
                Gn(i, "dl-entry-notAvaiable", !e[1]),
                On(t, "class", "listen-list svelte-12gdpba"),
                On(t, "data-qa", "dl-toolbar-listener-element-langs")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                r = !0,
                l || (c = [In(n, "click", (function() {
                    en(e[3](e[4].translatedSnippet, e[5].selectedTargetLanguage)) && e[3](e[4].translatedSnippet, e[5].selectedTargetLanguage).apply(this, arguments)
                }
                )), In(i, "click", (function() {
                    en(e[3](e[4].originalSnippet, e[4].websiteLanguage)) && e[3](e[4].originalSnippet, e[4].websiteLanguage).apply(this, arguments)
                }
                ))],
                l = !0)
            },
            p(t, [o]) {
                e = t,
                (!r || 1 & o) && Gn(n, "dl-entry-notAvaiable", !e[0]),
                (!r || 2 & o) && Gn(i, "dl-entry-notAvaiable", !e[1])
            },
            i(e) {
                r || (co((()=>{
                    r && (a && a.end(1),
                    s = Co(t, jo, {
                        y: -5,
                        duration: 500
                    }),
                    s.start())
                }
                )),
                r = !0)
            },
            o(e) {
                s && s.invalidate(),
                a = So(t, jo, {
                    y: -5,
                    duration: 500
                }),
                r = !1
            },
            d(e) {
                e && xn(t),
                e && a && a.end(),
                l = !1,
                Jt(c)
            }
        }
    }
    function $u(e, t, n) {
        let o, i, s = Kt, a = ()=>(s(),
        s = nn(c, (e=>n(4, o = e))),
        c);
        on(e, Po, (e=>n(5, i = e))),
        e.$$.on_destroy.push((()=>s()));
        let {isAvailableSelectedTargetLang: r} = t
          , {isAvailableSourceLang: l} = t
          , {websiteSettings: c} = t;
        a();
        let {listen: d=(()=>{}
        )} = t;
        return e.$$set = e=>{
            "isAvailableSelectedTargetLang"in e && n(0, r = e.isAvailableSelectedTargetLang),
            "isAvailableSourceLang"in e && n(1, l = e.isAvailableSourceLang),
            "websiteSettings"in e && a(n(2, c = e.websiteSettings)),
            "listen"in e && n(3, d = e.listen)
        }
        ,
        [r, l, c, d, o, i]
    }
    class Eu extends Oo {
        constructor(e) {
            super(),
            No(this, e, $u, bu, tn, {
                isAvailableSelectedTargetLang: 0,
                isAvailableSourceLang: 1,
                websiteSettings: 2,
                listen: 3
            })
        }
    }
    function yu(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("button"),
                On(t, "type", "button"),
                On(t, "class", "dl-replace-button svelte-9vlams"),
                t.disabled = n = e[3] || !e[2] || e[4]
            },
            m(n, s) {
                yn(n, t, s),
                o || (i = In(t, "click", e[5]),
                o = !0)
            },
            p(e, o) {
                12 & o && n !== (n = e[3] || !e[2] || e[4]) && (t.disabled = n)
            },
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function xu(e) {
        let t, n;
        return t = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("ui_gdocs_replace_cta"),
                multiline: !0,
                zIndex: "0",
                isEnabled: !e[3] && e[2] && !e[4],
                $$slots: {
                    default: [yu]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, [n]) {
                const o = {};
                12 & n && (o.isEnabled = !e[3] && e[2] && !e[4]),
                268 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Tu(e, n, o) {
        let i, s, a = Kt, l = ()=>(a(),
        a = nn(u, (e=>o(6, i = e))),
        u), c = Kt, d = ()=>(c(),
        c = nn(g, (e=>o(7, s = e))),
        g);
        e.$$.on_destroy.push((()=>a())),
        e.$$.on_destroy.push((()=>c()));
        let {websiteSettings: u} = n;
        l();
        let m, {settings: g} = n;
        d();
        let p = !1
          , h = i.translationState === r.anonymousUserMaxCharExceeded;
        return Yn((()=>{
            o(2, m = Ze())
        }
        )),
        e.$$set = e=>{
            "websiteSettings"in e && l(o(0, u = e.websiteSettings)),
            "settings"in e && d(o(1, g = e.settings))
        }
        ,
        [u, g, m, p, h, function() {
            const e = je().text;
            o(3, p = !0);
            const n = document.querySelector("deepl-gdocs-icon");
            n && (n.applyReplacement(),
            t({
                action: "dlTrackGDocsReplaceText",
                payload: {
                    sourceLang: i.websiteLanguage,
                    targetLang: s.selectedTargetLanguage,
                    sourceLength: e.length,
                    targetLength: i.translatedSnippet.length
                }
            }))
        }
        ]
    }
    class Cu extends Oo {
        constructor(e) {
            super(),
            No(this, e, Tu, xu, tn, {
                websiteSettings: 0,
                settings: 1
            })
        }
    }
    function Su(e) {
        let t, n;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                On(t, "class", "tooltip-linguee svelte-18gmpv0"),
                On(t, "style", `z-index: ${e[15].z_index}`)
            },
            m(o, i) {
                yn(o, t, i),
                bn(t, n),
                n.innerHTML = e[13]
            },
            p(e, t) {
                8192 & t[0] && (n.innerHTML = e[13])
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function Lu(e) {
        let t, n, o, i, s;
        return n = new xi({
            props: {
                tooltip: e[12],
                $$slots: {
                    default: [Mu]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = Cn("fragment"),
                Mo(n.$$.fragment)
            },
            m(a, r) {
                yn(a, t, r),
                Io(n, t, null),
                o = !0,
                i || (s = [In(t, "mouseover", e[21]), In(t, "mouseleave", e[25])],
                i = !0)
            },
            p(e, t) {
                const o = {};
                4096 & t[0] && (o.tooltip = e[12]),
                3841 & t[0] | 1 & t[1] && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n),
                i = !1,
                Jt(s)
            }
        }
    }
    function ku(e) {
        let t, n;
        return t = new Eu({
            props: {
                websiteSettings: e[0],
                isAvailableSelectedTargetLang: e[10],
                isAvailableSourceLang: e[11],
                listen: e[17]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n[0] && (o.websiteSettings = e[0]),
                1024 & n[0] && (o.isAvailableSelectedTargetLang = e[10]),
                2048 & n[0] && (o.isAvailableSourceLang = e[11]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Mu(e) {
        let t, n, o, i, s, a, r = e[9] && ku(e);
        return {
            c() {
                t = Cn("button"),
                t.innerHTML = '<span class="dl-icon dl-icon-listen svelte-18gmpv0"></span>',
                n = kn(),
                r && r.c(),
                o = Mn(),
                On(t, "type", "button"),
                On(t, "class", "dl-btn svelte-18gmpv0"),
                On(t, "data-qa", "dl-toolbar-listener-button"),
                Gn(t, "dl-btn-active", e[8]),
                Gn(t, "dl-btn-hovered", e[9])
            },
            m(l, c) {
                yn(l, t, c),
                yn(l, n, c),
                r && r.m(l, c),
                yn(l, o, c),
                i = !0,
                s || (a = In(t, "click", e[18]),
                s = !0)
            },
            p(e, n) {
                (!i || 256 & n[0]) && Gn(t, "dl-btn-active", e[8]),
                (!i || 512 & n[0]) && Gn(t, "dl-btn-hovered", e[9]),
                e[9] ? r ? (r.p(e, n),
                512 & n[0] && yo(r, 1)) : (r = ku(e),
                r.c(),
                yo(r, 1),
                r.m(o.parentNode, o)) : r && ($o(),
                xo(r, 1, 1, (()=>{
                    r = null
                }
                )),
                Eo())
            },
            i(e) {
                i || (yo(r),
                i = !0)
            },
            o(e) {
                xo(r),
                i = !1
            },
            d(e) {
                e && xn(t),
                e && xn(n),
                r && r.d(e),
                e && xn(o),
                s = !1,
                a()
            }
        }
    }
    function Iu(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                t.innerHTML = '<span class="dl-icon dl-icon-copy svelte-18gmpv0"></span>',
                On(t, "type", "button"),
                On(t, "class", "dl-btn svelte-18gmpv0"),
                On(t, "data-qa", "dl-toolbar-copy-button"),
                Gn(t, "dl-btn-active", e[14])
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = [In(t, "click", e[19]), In(t, "mouseleave", e[20])],
                n = !0)
            },
            p(e, n) {
                16384 & n[0] && Gn(t, "dl-btn-active", e[14])
            },
            d(e) {
                e && xn(t),
                n = !1,
                Jt(o)
            }
        }
    }
    function Au(e) {
        let t, n;
        return t = new Cu({
            props: {
                websiteSettings: e[0],
                settings: Po
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n[0] && (o.websiteSettings = e[0]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Nu(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w, v, b, $, E, y, x, T = !e[3] || !e[2]() || !e[5] || e[6], C = T && Su(e), S = (e[10] || e[11]) && Lu(e);
        b = new xi({
            props: {
                tooltip: chrome.i18n.getMessage(e[14] ? "ui_inline_translation_copied" : "ui_inline_translation_copy"),
                $$slots: {
                    default: [Iu]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let L = e[7] === K.gdocs && Au(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("button"),
                i = Cn("span"),
                i.textContent = `${chrome.i18n.getMessage("ui_inline_translation_see_alternatives_v2")}`,
                s = kn(),
                a = Cn("span"),
                r = kn(),
                l = Cn("fragment"),
                c = Cn("div"),
                d = Cn("div"),
                d.textContent = `${chrome.i18n.getMessage("ui_inline_translation_dictionary")}`,
                u = kn(),
                m = Cn("div"),
                g = kn(),
                p = Cn("div"),
                f = kn(),
                C && C.c(),
                _ = kn(),
                w = Cn("div"),
                S && S.c(),
                v = kn(),
                Mo(b.$$.fragment),
                $ = kn(),
                L && L.c(),
                On(a, "class", "icon icon-external-link svelte-18gmpv0"),
                On(o, "type", "button"),
                On(o, "class", "link svelte-18gmpv0"),
                On(n, "class", "dl-link-container"),
                On(d, "class", "dict-text svelte-18gmpv0"),
                On(m, "class", "img_book svelte-18gmpv0"),
                Gn(m, "shown-dict", e[4] && e[3] && e[5]),
                On(p, "class", "img_arrow svelte-18gmpv0"),
                Gn(p, "shown-dict", e[4] && e[3] && e[5]),
                On(c, "class", h = "dl-dictionary " + (e[3] && e[2]() && e[5] && !e[6] ? "" : "disable") + " " + (e[4] && e[3] ? "shown-dict" : "") + " svelte-18gmpv0"),
                On(c, "data-qa", "dl-toolbar-dictionary-button"),
                Pn(l, "position", "relative"),
                On(w, "class", "dl-btn-group svelte-18gmpv0"),
                On(t, "class", "dl-toolbar svelte-18gmpv0")
            },
            m(h, T) {
                yn(h, t, T),
                bn(t, n),
                bn(n, o),
                bn(o, i),
                bn(o, s),
                bn(o, a),
                bn(t, r),
                bn(t, l),
                bn(l, c),
                bn(c, d),
                bn(c, u),
                bn(c, m),
                bn(c, g),
                bn(c, p),
                bn(l, f),
                C && C.m(l, null),
                bn(t, _),
                bn(t, w),
                S && S.m(w, null),
                bn(w, v),
                Io(b, w, null),
                bn(w, $),
                L && L.m(w, null),
                E = !0,
                y || (x = [In(o, "click", e[16]), In(c, "click", (function() {
                    en(e[1]) && e[1].apply(this, arguments)
                }
                )), In(c, "mouseenter", e[22])],
                y = !0)
            },
            p(t, n) {
                e = t,
                (!E || 56 & n[0]) && Gn(m, "shown-dict", e[4] && e[3] && e[5]),
                (!E || 56 & n[0]) && Gn(p, "shown-dict", e[4] && e[3] && e[5]),
                (!E || 124 & n[0] && h !== (h = "dl-dictionary " + (e[3] && e[2]() && e[5] && !e[6] ? "" : "disable") + " " + (e[4] && e[3] ? "shown-dict" : "") + " svelte-18gmpv0")) && On(c, "class", h),
                108 & n[0] && (T = !e[3] || !e[2]() || !e[5] || e[6]),
                T ? C ? C.p(e, n) : (C = Su(e),
                C.c(),
                C.m(l, null)) : C && (C.d(1),
                C = null),
                e[10] || e[11] ? S ? (S.p(e, n),
                3072 & n[0] && yo(S, 1)) : (S = Lu(e),
                S.c(),
                yo(S, 1),
                S.m(w, v)) : S && ($o(),
                xo(S, 1, 1, (()=>{
                    S = null
                }
                )),
                Eo());
                const o = {};
                16384 & n[0] && (o.tooltip = chrome.i18n.getMessage(e[14] ? "ui_inline_translation_copied" : "ui_inline_translation_copy")),
                16384 & n[0] | 1 & n[1] && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                b.$set(o),
                e[7] === K.gdocs ? L ? (L.p(e, n),
                128 & n[0] && yo(L, 1)) : (L = Au(e),
                L.c(),
                yo(L, 1),
                L.m(w, null)) : L && ($o(),
                xo(L, 1, 1, (()=>{
                    L = null
                }
                )),
                Eo())
            },
            i(e) {
                E || (yo(S),
                yo(b.$$.fragment, e),
                yo(L),
                E = !0)
            },
            o(e) {
                xo(S),
                xo(b.$$.fragment, e),
                xo(L),
                E = !1
            },
            d(e) {
                e && xn(t),
                C && C.d(),
                S && S.d(),
                Ao(b),
                L && L.d(),
                y = !1,
                Jt(x)
            }
        }
    }
    function Ou(e, n, o) {
        let i, s, a = Kt, r = ()=>(a(),
        a = nn(l, (e=>o(23, i = e))),
        l);
        on(e, Po, (e=>o(24, s = e))),
        e.$$.on_destroy.push((()=>a()));
        let {websiteSettings: l} = n;
        r();
        let c, d, u, m, {switchVisibilityDictionary: g} = n, {isSingleWord: p} = n, {dictionaryHTML: h} = n, {showDictionary: f=!1} = n, {langPair: _} = n, {errorMessageDict: w} = n, {platformBehaviour: v=K.default} = n, b = !1, y = !1;
        const {deepl_inline_ui: x} = L;
        let T = !1;
        function C() {
            t({
                action: "dlStopSpeech"
            }),
            o(8, u = !1)
        }
        function S(e) {
            try {
                t({
                    action: "dlTrackInlineListen",
                    payload: e
                })
            } catch (e) {
                console.error(e)
            }
        }
        async function k(e, t, n) {
            if ("dlVoiceOverStopped" === e.action)
                o(8, u = !1),
                n()
        }
        function M(e) {
            try {
                t({
                    action: "dlTrackVoiceOverStops",
                    payload: e
                })
            } catch (e) {
                console.error(e)
            }
        }
        chrome.runtime.onMessage.addListener(k),
        Xn((()=>{
            u && M({
                targetLang: s.selectedTargetLanguage,
                targetLength: i.translatedSnippet.length,
                triggerType: E,
                nicheIntegration: v
            }),
            C(),
            chrome.runtime.onMessage.removeListener(k)
        }
        ));
        return e.$$set = e=>{
            "websiteSettings"in e && r(o(0, l = e.websiteSettings)),
            "switchVisibilityDictionary"in e && o(1, g = e.switchVisibilityDictionary),
            "isSingleWord"in e && o(2, p = e.isSingleWord),
            "dictionaryHTML"in e && o(3, h = e.dictionaryHTML),
            "showDictionary"in e && o(4, f = e.showDictionary),
            "langPair"in e && o(5, _ = e.langPair),
            "errorMessageDict"in e && o(6, w = e.errorMessageDict),
            "platformBehaviour"in e && o(7, v = e.platformBehaviour)
        }
        ,
        e.$$.update = ()=>{
            if (25166592 & e.$$.dirty[0] && (s.selectedTargetLanguage && t({
                action: "dlGetSupportedVoices"
            }).then((e=>{
                o(10, c = e.includes(["EN-US", "EN-GB"].includes(s.selectedTargetLanguage) ? "EN" : ["PT-PT", "PT-BR"].includes(s.selectedTargetLanguage) ? "PT" : s.selectedTargetLanguage)),
                o(11, d = e.includes(i.websiteLanguage))
            }
            )),
            !b && u ? setTimeout((()=>{
                o(12, y = chrome.i18n.getMessage("ui_inline_translation_listen_stop"))
            }
            ), 1e3) : o(12, y = !1)),
            100 & e.$$.dirty[0] && (w ? o(13, m = w) : p() ? o(13, m = _ ? chrome.i18n.getMessage("ui_inline_translation_problem_loading_dictionary") : chrome.i18n.getMessage("ui_inline_translation_unavailable_lang_pair")) : o(13, m = chrome.i18n.getMessage("ui_inline_translation_translate_only_one_word"))),
            16 & e.$$.dirty[0] && f)
                try {
                    t({
                        action: "dlTrackOpenDictionarySection",
                        payload: {}
                    })
                } catch (e) {
                    console.log(e)
                }
        }
        ,
        [l, g, p, h, f, _, w, v, u, b, c, d, y, m, T, x, function() {
            const e = {};
            i && s && (e.sourceLang = i.websiteLanguage,
            e.targetLang = s.selectedTargetLanguage,
            e.textToShare = i.originalSnippet),
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: ps,
                    ...e
                }
            });
            try {
                t({
                    action: "dlTrackUiAction",
                    payload: {
                        uiAction: O,
                        nicheIntegration: v
                    }
                })
            } catch (e) {
                console.error(e)
            }
        }
        , async function(e, n) {
            u || (t({
                action: "dlTextToSpeech",
                payload: {
                    text: e,
                    lang: n
                }
            }),
            o(8, u = !0),
            S({
                targetLang: s.selectedTargetLanguage,
                targetLength: i.translatedSnippet.length,
                actionType: z,
                nicheIntegration: v
            }),
            o(9, b = !1))
        }
        , function() {
            u ? (C(),
            o(8, u = !1),
            M({
                targetLang: s.selectedTargetLanguage,
                targetLength: i.translatedSnippet.length,
                triggerType: $,
                nicheIntegration: v
            }),
            S({
                targetLang: s.selectedTargetLanguage,
                targetLength: i.translatedSnippet.length,
                actionType: B,
                nicheIntegration: v
            })) : o(9, b = !0)
        }
        , function() {
            navigator.clipboard.writeText(i.translatedSnippet).then((function() {
                o(14, T = !0)
            }
            ), (function(e) {
                console.error(e)
            }
            )),
            function(e) {
                try {
                    t({
                        action: "dlTrackInlineCopy",
                        payload: e
                    })
                } catch (e) {
                    console.error(e)
                }
            }({
                targetLang: s.selectedTargetLanguage,
                targetLength: i.translatedSnippet.length,
                nicheIntegration: v
            })
        }
        , function() {
            setTimeout((()=>{
                o(14, T = !1)
            }
            ), 300)
        }
        , function() {
            u || o(9, b = !0)
        }
        , function() {
            if (!h || !p())
                try {
                    t({
                        action: "dlTrackDisabledDictionaryHover",
                        payload: {}
                    })
                } catch (e) {
                    console.log(e)
                }
        }
        , i, s, ()=>o(9, b = !1)]
    }
    class Du extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ou, Nu, tn, {
                websiteSettings: 0,
                switchVisibilityDictionary: 1,
                isSingleWord: 2,
                dictionaryHTML: 3,
                showDictionary: 4,
                langPair: 5,
                errorMessageDict: 6,
                platformBehaviour: 7
            }, null, [-1, -1])
        }
    }
    function Ru(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = Cn("div"),
                n = Cn("button"),
                n.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_accept")}`,
                o = kn(),
                i = Cn("button"),
                i.textContent = `${chrome.i18n.getMessage("ui_gdocs_write_cancel")}`,
                On(n, "class", "btn-primary svelte-6ctj0p"),
                On(i, "class", "btn-secondary svelte-6ctj0p"),
                On(t, "class", "dl-toolbar svelte-6ctj0p")
            },
            m(r, l) {
                yn(r, t, l),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                s || (a = [In(n, "click", e[0]), In(i, "click", e[1])],
                s = !0)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                s = !1,
                Jt(a)
            }
        }
    }
    function Pu(e, t, n) {
        let {onClose: o} = t;
        return e.$$set = e=>{
            "onClose"in e && n(2, o = e.onClose)
        }
        ,
        [()=>{
            const e = document.getElementsByTagName("deepl-gdocs-icon")[0];
            e && (e.applyReplacement(),
            e.trackDeeplWriteInsertCopy()),
            o()
        }
        , ()=>{
            const e = document.getElementsByTagName("deepl-gdocs-icon")[0];
            e && e.trackDeeplWriteDiscardCopy(),
            o()
        }
        , o]
    }
    class Hu extends Oo {
        constructor(e) {
            super(),
            No(this, e, Pu, Ru, tn, {
                onClose: 2
            })
        }
    }
    function Gu(e) {
        let t, n, o, i, s, a = JSON.stringify(e[1](), void 0, 2) + "";
        return {
            c() {
                t = Cn("p"),
                n = Ln(e[0]),
                o = kn(),
                i = Cn("pre"),
                s = Ln(a),
                On(i, "class", "debug-settings svelte-mu7va1")
            },
            m(e, a) {
                yn(e, t, a),
                bn(t, n),
                yn(e, o, a),
                yn(e, i, a),
                bn(i, s)
            },
            p(e, [t]) {
                1 & t && Dn(n, e[0]),
                2 & t && a !== (a = JSON.stringify(e[1](), void 0, 2) + "") && Dn(s, a)
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                e && xn(o),
                e && xn(i)
            }
        }
    }
    function zu(e, t, n) {
        let {headline: o="JSON block"} = t
          , {jsonData: i=(()=>{}
        )} = t;
        return e.$$set = e=>{
            "headline"in e && n(0, o = e.headline),
            "jsonData"in e && n(1, i = e.jsonData)
        }
        ,
        [o, i]
    }
    class Bu extends Oo {
        constructor(e) {
            super(),
            No(this, e, zu, Gu, tn, {
                headline: 0,
                jsonData: 1
            })
        }
    }
    function Uu(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("div"),
                n = Cn("style"),
                n.textContent = '.lmt__dict {\n  background-color: white;\n  text-align: left;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  position: relative;\n  font-weight: 400;\n  font-family: "Open Sans", sans-serif;\n  padding: 0 24px;\n  border: 0;\n  width: 100%;\n  font-size: 14px;\n}\n.lmt__dict #dictionary .dict_headline_for_0 {\n  display: none;\n}\n.lmt__dict #dictionary .dict_headline_for_1 {\n  display: none;\n}\n.lmt__dict h1 {\n  font-family: "Open Sans", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.1;\n  font-size: 15px;\n}\n.lmt__dict h1.didyoumean {\n  display: none;\n}\n.lmt__dict #spelling_message_pane {\n  display: none;\n}\n.lmt__dict a {\n  text-decoration: none;\n  pointer-events: none;\n  font-family: "Open Sans", sans-serif;\n  color: #333;\n}\n.lmt__dict.lmt--hidden {\n  display: none;\n}\n.lmt__dict .semantic_field,\n.lmt__dict .sem,\n.lmt__dict .othertempora {\n  font-style: italic;\n  color: #999;\n  position: relative;\n  font-size: 12px;\n}\n.lmt__dict noindex:-o-prefocus,\n.lmt__dict .semantic_field,\n.lmt__dict .sem {\n  position: static;\n  z-index: 1;\n}\n.lmt__dict .placeholder {\n  font-size: smaller;\n}\n.lmt__dict #dictionary,\n.lmt__dict .dictionary {\n  font-weight: 400;\n  font-style: italic;\n  font-size: 15px;\n  color: #999;\n  line-height: 1.35em;\n  position: relative;\n}\n.lmt__dict #dictionary .inexact {\n  font-weight: 400;\n  font-style: italic;\n  font-size: 13px;\n  color: #999;\n  margin-top: 18px;\n}\n.lmt__dict .lemma {\n  vertical-align: top;\n  margin: 10px 0 25px 0;\n}\n.lmt__dict .lemma.last {\n  background: none;\n}\n.lmt__dict .lemma_desc {\n  padding: 0 0 10px 0;\n}\n.lmt__dict #dictionary h2.lemma_desc {\n  margin: 0px;\n}\n.lmt__dict .lemma_content {\n  padding: 0 0 0 0;\n  position: relative;\n  margin-bottom: 8px;\n}\n.lmt__dict .translation_group {\n  position: relative;\n  padding-top: 8px;\n}\n.lmt__dict .lemma_content .translation_group_line.with_pie {\n  padding-left: 18px;\n  text-indent: -18px;\n}\n.lmt__dict .exact .translation.featured {\n  margin-bottom: 8px;\n  clear: both;\n}\n.lmt__dict .translation_desc {\n  padding: 2px 0 0 0;\n  display: inline-block;\n}\n.lmt__dict h3.translation_desc {\n  margin: 0;\n  font-weight: 400;\n}\n.lmt__dict #dictionary h3.translation_desc {\n  margin-bottom: 0;\n}\n.lmt__dict .group_line .translation_desc {\n  text-indent: 0;\n  display: inline;\n  padding: 2px 10px 1px 0;\n  padding-left: 0;\n}\n.lmt__dict .comment {\n  margin: 15px 0 15px 0;\n  padding: 0 0 0 10px;\n}\n.lmt__dict .lemma_content {\n  padding-left: 40px;\n}\n.lmt__dict .meaninggroup_description_inner {\n  margin-left: -20px;\n  width: 20px;\n  display: inline-block;\n}\n.lmt__dict .meaninggroup_descriptions {\n  margin-left: -20px;\n  display: inline-block;\n}\n.lmt__dict .tag_t {\n  color: #333;\n  font-style: normal;\n}\n.lmt__dict .tag_s {\n  color: #006494;\n  font-style: normal;\n}\n.lmt__dict .tag_lemma {\n  font-size: 16px;\n  font-weight: 400;\n  color: #006494;\n  font-style: normal;\n}\n.lmt__dict .tag_lemma a {\n  color: #006494;\n}\n.lmt__dict .inexact .tag_lemma {\n  font-size: 14px;\n}\n.lmt__dict .tag_type,\n.lmt__dict .tag_wordtype {\n  font-style: italic;\n  font-size: 14px;\n  margin-right: 2px;\n  color: #999;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_type,\n.lmt__dict .inexact .tag_wordtype,\n.lmt__dict .example_lines .tag_type,\n.lmt__dict .example_lines .tag_wordtype,\n.lmt__dict .tag_forms .tag_wordtype {\n  font-size: 14px;\n}\n.lmt__dict .tag_wordtype {\n  font-size: 14px;\n  margin-left: 0;\n}\n.lmt__dict .tag_area,\n.lmt__dict .tag_usage {\n  color: #999;\n  font-style: italic;\n  font-size: 14px;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_area,\n.lmt__dict .inexact .tag_usage,\n.lmt__dict .inexact .tag_forms {\n  font-size: 10px;\n}\n.lmt__dict .tag_c {\n  color: #999;\n  font-size: 15px;\n  font-style: italic;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_c {\n  font-size: 13px;\n}\n.lmt__dict .tag_forms {\n  font-size: 13px;\n  color: #999;\n  font-weight: 400;\n}\n.lmt__dict .inexact .tag_forms {\n  display: none;\n}\n.lmt__dict .lemma_desc .tag_forms {\n  display: none;\n  padding-left: 3px;\n}\n.lmt__dict .tag_trans_src_context {\n  color: #006494;\n  font-style: normal;\n  padding-right: 10px;\n  font-size: 14px;\n}\n.lmt__dict .tag_trans_src_context:before {\n  content: "(";\n}\n.lmt__dict .tag_trans_src_context:after {\n  content: ")";\n}\n.lmt__dict .tag_lemma_context {\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 14px;\n}\n.lmt__dict .inexact .tag_lemma_context {\n  padding-left: 5px;\n  font-size: 13px;\n}\n.lmt__dict .tag_lemma_context .placeholder {\n  font-size: inherit;\n}\n.lmt__dict #dictionary .tag_forms h3 {\n  display: inline;\n  padding-right: 10px;\n  font-size: 12px;\n  margin: 0 0 0 0;\n  color: #999;\n}\n.lmt__dict .tag_formname {\n  color: #999;\n}\n.lmt__dict .tag_c,\n.lmt__dict .tag_t,\n.lmt__dict .tag_s,\n.lmt__dict .tag_area,\n.lmt__dict .tag_usage {\n  font-size: 14px;\n}\n.lmt__dict .tag_trans {\n  font-size: 14px;\n  color: #333;\n  font-style: normal;\n  display: inline-block;\n  min-height: 20px;\n}\n.lmt__dict .inexact .tag_trans {\n  font-size: 14px;\n  color: #333;\n  font-style: normal;\n}\n.lmt__dict .inexact .tag_trans a {\n  color: #333;\n}\n.lmt__dict .exact .tag_trans a.featured {\n  line-height: 24px;\n}\n.lmt__dict .meaninggroup_notfirst {\n  padding-top: 8px;\n}\n.lmt__dict .meaninggroup_editing.meaninggroup_notfirst {\n  padding-top: 20px;\n}\n.lmt__dict .meaning_class_header {\n  padding-left: 5px;\n  padding-top: 5px;\n}\n.lmt__dict .meaninggroup_outer_list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  display: inline;\n}\n.lmt__dict .meaninggroup_inner_list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.lmt__dict .meaninggroup_inner_list li {\n  display: inline;\n}\n.lmt__dict .meaninggroup_problematic .meaninggroup_description {\n  color: #e00;\n}\n.lmt__dict .meaninggroup_problematic .meaninggroup_description_index {\n  color: #e00;\n}\n.lmt__dict .isForeignTerm .meaninggroup_synonym,\n.lmt__dict .isForeignTerm .meaninggroup_valency,\n.lmt__dict .isForeignTerm .meaninggroup_valency,\n.lmt__dict .meaninggroup_descriptions {\n  color: #333;\n}\n.lmt__dict .isMainTerm .meaninggroup_synonym,\n.lmt__dict .isMainTerm .meaninggroup_valency,\n.lmt__dict .isMainTerm .meaninggroup_valency,\n.lmt__dict .meaninggroup_descriptions {\n  color: #265182;\n}\n.lmt__dict .meaninggroup_synonym {\n  font-size: 15px;\n  font-weight: 400;\n  font-style: normal;\n}\n.lmt__dict .meaninggroup_preliminary {\n  font-size: 15px;\n  font-weight: 400;\n  font-style: normal;\n  color: green;\n}\n.lmt__dict .meaninggroup_descriptions {\n  font-size: 15px;\n  font-weight: 400;\n  font-style: normal;\n}\n.lmt__dict .meaninggroup_valency {\n  font-size: 15px;\n  font-weight: 400;\n  color: #333;\n  font-style: normal;\n}\n.lmt__dict .meaninggroup_usage {\n  color: #999;\n}\n.lmt__dict .meaninggroup_areas {\n  color: #999;\n  font-style: italic;\n}\n.lmt__dict .meaninggroup_editing .meaninggroup_descriptions,\n.lmt__dict .meaninggroup_editing .meaninggroup_synonym,\n.lmt__dict .meaninggroup_editing .meaninggroup_usage,\n.lmt__dict .meaninggroup_editing .meaninggroup_synonym,\n.lmt__dict .meaninggroup_editing .meaninggroup_description_index,\n.lmt__dict .meaninggroup_editing .meaninggroup_preliminary {\n  font-weight: 600;\n}\n.lmt__dict .meaninggroups_remark {\n  margin-left: -20px;\n}\n.lmt__dict .inflectioninfo,\n.lmt__dict .inflectioninfo .tag_c {\n  color: #006494;\n  font-style: normal;\n  font-size: 13px;\n}\n.lmt__dict .isForeignTerm .inflectioninfo {\n  color: #333;\n}\n.lmt__dict .isForeignTerm .tag_lemma,\n.lmt__dict .isForeignTerm .tag_lemma a,\n.lmt__dict .isForeignTerm .tag_s,\n.lmt__dict .isForeignTerm .tag_s a,\n.lmt__dict .isForeignTerm .tag_trans_src_context {\n  color: #333;\n}\n.lmt__dict .isForeignTerm .tag_trans,\n.lmt__dict .isForeignTerm .tag_trans a,\n.lmt__dict .isForeignTerm .tag_t,\n.lmt__dict .isForeignTerm .tag_t a,\n.lmt__dict .isForeignTerm .tag_trans {\n  color: #006494;\n}\n.lmt__dict .spell_suggestion.isForeignTerm,\n.lmt__dict .spell_suggestion.isForeignTerm .corrected {\n  color: #333;\n}\n.lmt__dict .spell_suggestion,\n.lmt__dict .spell_suggestion .corrected {\n  color: #006494;\n}\n.lmt__dict .line .translation {\n  display: inline-block;\n  line-height: 1em;\n  text-indent: 0;\n}\n.lmt__dict .line.inflectioninfo {\n  display: none;\n}\n.lmt__dict .sep {\n  font-size: 12px;\n  padding-right: 10px;\n  color: #6e6e6e;\n}\n.lmt__dict .tag_forms .sep {\n  padding-left: 5px;\n}\n.lmt__dict .inexact .sep {\n  font-size: 9px;\n}\n.lmt__dict .dash {\n  padding-right: 10px;\n}\n.lmt__dict .exact .lemma_desc .dash {\n  display: none;\n}\n.lmt__dict .lemma_desc .dash {\n  font-size: 14px;\n  font-style: normal;\n  color: #999;\n  padding-left: 7px;\n  padding-right: 7px;\n}\n.lmt__dict .inexact .lemma_desc {\n  padding: 0 0 0 0;\n}\n.lmt__dict .inexact .translation_lines,\n.lmt__dict .inexact .translation_group,\n.lmt__dict .inexact .line {\n  display: inline;\n}\n.lmt__dict .inexact .lemma_content {\n  display: inline;\n}\n.lmt__dict .inexact .lemma_desc,\n.lmt__dict #dictionary .inexact h2.lemma_desc {\n  display: inline-block;\n  padding-right: 0;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n}\n.lmt__dict .inexact .lemma_content {\n  padding-left: 0;\n}\n.lmt__dict .inexact .lemma {\n  margin: 1px 0 0 0;\n  text-indent: -10px;\n  padding-left: 20px;\n}\n.lmt__dict .inexact div.singleline {\n  text-indent: 0;\n  padding-left: 0;\n}\n.lmt__dict #dictionary > .expandable > .versionShort > .example_lines {\n  padding-bottom: 15px;\n}\n.lmt__dict #dictionary h3 {\n  margin-bottom: 2px;\n  font-size: 14px;\n}\n.lmt__dict a.audio {\n  display: none;\n  position: relative;\n  cursor: pointer;\n  top: 3px;\n  width: 19px;\n  height: 17px;\n  background-position: -40px -38px;\n  opacity: 0.5;\n}\n.lmt__dict .ie7 a.audio,\n.lmt__dict .ie8 a.audio {\n  filter: alpha(opacity=50);\n  background-position: -120px -92px;\n}\n.lmt__dict .inexact a.audio {\n  display: none;\n}\n.lmt__dict .inexact .lemma_desc a.audio,\n.lmt__dict .inexact .translation.expanded a.audio,\n.lmt__dict .inexact .translation.contracting a.audio {\n  display: inline-block;\n}\n.lmt__dict .exact .tag_lemma a.audio {\n  top: 2px;\n}\n.lmt__dict .mouse_device a.audio {\n  opacity: 0.45;\n}\n.lmt__dict .mouse_device a.audio:hover,\n.lmt__dict .mouse_device a.expand_i:hover {\n  opacity: 1;\n}\n.lmt__dict .grammar_info {\n  position: relative;\n  top: -4px;\n  vertical-align: middle;\n  font-size: 0.7em;\n  color: #999;\n  font-style: italic;\n  margin-left: 1px;\n  display: inline-block;\n  text-indent: 0;\n}\n.lmt__dict .exact .grammar_info {\n  top: -5px;\n  margin-left: 2px;\n}\n.lmt__dict #dictionary h2,\n.lmt__dict #dictionary h3 {\n  color: #333;\n  font-weight: 400;\n}\n.lmt__dict #dictionary h2 {\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.lmt__dict #dictionary .tag_forms h2 {\n  font-size: 14px;\n}\n.lmt__dict .translation_row.singleline {\n  height: 20px;\n}\n.lmt__dict .singleline {\n  position: relative;\n  padding-right: 20px;\n  height: 20px;\n  overflow: hidden;\n}\n.lmt__dict .singleline > * {\n  line-height: 50px;\n  position: relative;\n  top: -15px;\n}\n.lmt__dict .ie8 .singleline > * {\n  top: -13px;\n  height: 22px;\n}\n.lmt__dict .singleline .tag_s {\n  white-space: nowrap;\n}\n.lmt__dict .expandable {\n  position: relative;\n}\n.lmt__dict .example_lines .expandM,\n.lmt__dict .inexact .expandM {\n  display: block;\n  height: 15px;\n  padding-left: 0px;\n  opacity: 0.7;\n}\n.lmt__dict a.expand_i {\n  width: 17px;\n  height: 17px;\n  position: relative;\n  top: 4px;\n  display: inline-block;\n  background-position: -20px -36px;\n  cursor: pointer;\n  opacity: 0.55;\n  filter: alpha(opacity=55);\n}\n.lmt__dict .translation a.expand_i {\n  background-color: white;\n}\n.lmt__dict .example {\n  padding-left: 45px;\n  margin-top: 8px;\n  margin-bottom: 12px;\n}\n.lmt__dict .expertmode .example {\n  padding-left: 50px;\n}\n.lmt__dict .example .tag_e {\n  display: block;\n  position: relative;\n  max-width: 700px;\n  line-height: 1.1em;\n}\n.lmt__dict .example .tag_s {\n  width: 47%;\n  float: left;\n}\n.lmt__dict .example .tag_t {\n  width: 50%;\n  float: right;\n}\n.lmt__dict .example .tag_e_end {\n  display: block;\n  clear: both;\n}\n.lmt__dict .example .dash {\n  display: none;\n}\n.lmt__dict #soundFlags {\n  display: none;\n}\n.lmt__dict .hidden,\n.lmt__dict #lingueecontent .hidden,\n.lmt__dict #attribution.hidden {\n  display: none;\n}\n.lmt__dict .notascommon {\n  display: block;\n  padding-right: 10px;\n  font-size: 14px;\n  line-height: 1.4em;\n}\n.lmt__dict .tag_wordtype {\n  display: inline-block;\n}\n.lmt__dict .tag_forms {\n  display: inline-block;\n}\n.lmt__dict .inexact .lemma {\n  padding-left: 20px;\n}\n.lmt__dict .example_lines > .expandable > .versionshort > .expandM {\n  margin-left: 0;\n}\n.lmt__dict .source_url_spacer {\n  margin-left: 0;\n}\n.lmt__dict .example {\n  padding-left: 30px;\n}\n.lmt__dict .translation_desc {\n  padding-bottom: 0;\n}\n.lmt__dict .translation a.expand_i,\n.lmt__dict .translation a.audio,\n.lmt__dict .inexact .lemma_desc a.audio,\n.lmt__dict .inexact .translation.expanded a.audio {\n  display: none;\n}\n.lmt__dict .inexact .lemma {\n  padding-left: 20px;\n}\n.lmt__dict .example_lines > .expandable > .versionshort > .expandM {\n  margin-left: 0;\n}\n.lmt__dict .source_url_spacer {\n  margin-left: 0;\n}\n.lmt__dict .example {\n  padding-left: 24px;\n}\n.lmt__dict .lemma_desc {\n  margin: 0;\n}\n.lmt__dict .lemma {\n  margin-top: 0;\n}\n.lmt__dict .source {\n  font-size: 24px;\n  color: #d0d0d0;\n}\n.lmt__dict .source .tag_lemma {\n  font-size: 20px;\n  font-weight: 400;\n}\n.lmt__dict .lemma_content {\n  padding-left: 20px;\n  padding-right: 0px;\n}\n.lmt__dict .source .tag_s,\n.lmt__dict .source .tag_usage,\n.lmt__dict .source .tag_formname,\n.lmt__dict .source .formlink,\n.lmt__dict .source .tag_forms,\n.lmt__dict .source .grammar_info {\n  color: #999 !important;\n}\n.lmt__dict .translation:first-of-type h3 {\n  line-height: 1;\n}\n.lmt__dict .translation:first-of-type h3 .dictlink {\n  font-size: 20px;\n}\n.lmt__dict .source {\n  position: relative;\n}\n.lmt__dict .sourceHint {\n  display: none;\n}\n.lmt__dict .notascommon {\n  color: #aaa;\n}\n.lmt__dict .tag_type,\n.lmt__dict .tag_wordtype,\n.lmt__dict .source .tag_s,\n.lmt__dict .source .tag_usage,\n.lmt__dict .source .tag_formname,\n.lmt__dict .source .tag_wordtype,\n.lmt__dict .source .formlink,\n.lmt__dict .source .tag_forms,\n.lmt__dict .source .grammar_info,\n.lmt__dict .tag_c {\n  font-style: normal;\n}\n.lmt__dict .tag_forms {\n  font-style: normal;\n}\n.lmt__dict .tag_forms .tag_s {\n  padding-left: 0px;\n  margin-right: -19px;\n}\n\n#LMT__dict_right {\n  margin-left: 59px;\n}\n\n@keyframes lmt__dict__appear_animation {\n  0% {\n    transform: scale(0.99) translateY(-5px);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.lmt__dict.lmt--is-dict-ready {\n  display: block;\n}\n.lmt__dict .lmt__dict__empty_state {\n  display: none;\n  padding: 16px 24px;\n  color: #6e6e6e;\n  font-size: 16px;\n}\n.lmt__dict #result_container,\n.lmt__dict #wikipedia-body,\n.lmt__dict #wikipedia-header,\n.lmt__dict .copyrightLineOuter,\n.lmt__dict .openTriangle,\n.lmt__dict .expandM {\n  display: none !important;\n}',
                o = kn(),
                i = new Bn(!1),
                On(n, "lang", "scss"),
                i.a = null
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                bn(t, o),
                i.m(e[0], t)
            },
            p(e, [t]) {
                1 & t && i.p(e[0])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Wu(e, t, n) {
        let {html: o} = t;
        return e.$$set = e=>{
            "html"in e && n(0, o = e.html)
        }
        ,
        [o]
    }
    class Fu extends Oo {
        constructor(e) {
            super(),
            No(this, e, Wu, Uu, tn, {
                html: 0
            })
        }
    }
    function ju(e, t, n) {
        const o = e.slice();
        return o[29] = t[n],
        o
    }
    function qu(e, t, n) {
        const o = e.slice();
        return o[32] = t[n],
        o
    }
    function Vu(e, t, n) {
        const o = e.slice();
        return o[35] = t[n],
        o
    }
    function Zu(e) {
        let t, n, o, i, s, a, r, l, c = !Oe.includes(e[4].selectedTargetLanguage), d = c && Yu(e), u = e[4].gDocsSegmentation === Ne.SENTENCE && void 0 !== e[0] && Xu(e), m = e[4].gDocsSegmentation === Ne.WORD && em(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                d && d.c(),
                o = kn(),
                i = Cn("button"),
                i.textContent = `${chrome.i18n.getMessage("ui_alternatives_segmentation_sentence")}`,
                s = kn(),
                u && u.c(),
                a = kn(),
                m && m.c(),
                On(i, "class", "segmentation-button sentence svelte-11zfbej"),
                Gn(i, "active", e[4].gDocsSegmentation === Ne.SENTENCE),
                On(n, "class", "dl-segmentation-selector svelte-11zfbej")
            },
            m(c, g) {
                yn(c, t, g),
                bn(t, n),
                d && d.m(n, null),
                bn(n, o),
                bn(n, i),
                bn(t, s),
                u && u.m(t, null),
                bn(t, a),
                m && m.m(t, null),
                r || (l = In(i, "click", e[21]),
                r = !0)
            },
            p(e, s) {
                16 & s[0] && (c = !Oe.includes(e[4].selectedTargetLanguage)),
                c ? d ? d.p(e, s) : (d = Yu(e),
                d.c(),
                d.m(n, o)) : d && (d.d(1),
                d = null),
                16 & s[0] && Gn(i, "active", e[4].gDocsSegmentation === Ne.SENTENCE),
                e[4].gDocsSegmentation === Ne.SENTENCE && void 0 !== e[0] ? u ? u.p(e, s) : (u = Xu(e),
                u.c(),
                u.m(t, a)) : u && (u.d(1),
                u = null),
                e[4].gDocsSegmentation === Ne.WORD ? m ? m.p(e, s) : (m = em(e),
                m.c(),
                m.m(t, null)) : m && (m.d(1),
                m = null)
            },
            d(e) {
                e && xn(t),
                d && d.d(),
                u && u.d(),
                m && m.d(),
                r = !1,
                l()
            }
        }
    }
    function Ku(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                t.innerHTML = '<div class="skeleton-item svelte-11zfbej"><div class="skeleton-subitem svelte-11zfbej"></div></div> \n      <div class="skeleton-item svelte-11zfbej"><div class="skeleton-subitem svelte-11zfbej"></div></div> \n      <div class="skeleton-item svelte-11zfbej"><div class="skeleton-subitem svelte-11zfbej"></div> \n        <div class="skeleton-subitem is-short-line svelte-11zfbej"></div></div>',
                On(t, "class", "dl-alternatives-loading-skeleton svelte-11zfbej")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Yu(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                t.textContent = `${chrome.i18n.getMessage("ui_alternatives_segmentation_word")}`,
                On(t, "class", "segmentation-button word svelte-11zfbej"),
                Gn(t, "active", e[4].gDocsSegmentation === Ne.WORD)
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", e[20]),
                n = !0)
            },
            p(e, n) {
                16 & n[0] && Gn(t, "active", e[4].gDocsSegmentation === Ne.WORD)
            },
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function Xu(e) {
        let t, n = e[2], o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = Ju(qu(e, n, t));
        return {
            c() {
                t = Cn("div");
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                On(t, "class", "alternatives svelte-11zfbej")
            },
            m(e, n) {
                yn(e, t, n);
                for (let e = 0; e < o.length; e += 1)
                    o[e] && o[e].m(t, null)
            },
            p(e, i) {
                if (132 & i[0]) {
                    let s;
                    for (n = e[2],
                    s = 0; s < n.length; s += 1) {
                        const a = qu(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = Ju(a),
                        o[s].c(),
                        o[s].m(t, null))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                e && xn(t),
                Tn(o, e)
            }
        }
    }
    function Qu(e) {
        let t, n, o = tt(e[35].text) + "";
        return {
            c() {
                t = Cn("span"),
                n = Ln(o),
                On(t, "class", "svelte-11zfbej"),
                Gn(t, "highlighted-text-chunk", e[35].isHighlighted)
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, i) {
                4 & i[0] && o !== (o = tt(e[35].text) + "") && Dn(n, o),
                4 & i[0] && Gn(t, "highlighted-text-chunk", e[35].isHighlighted)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function Ju(e) {
        let t, n, o, i, s = e[32].textChunks, a = [];
        for (let t = 0; t < s.length; t += 1)
            a[t] = Qu(Vu(e, s, t));
        function r() {
            return e[22](e[32])
        }
        return {
            c() {
                t = Cn("div");
                for (let e = 0; e < a.length; e += 1)
                    a[e].c();
                n = kn(),
                On(t, "class", "sentence-alternatives alternative svelte-11zfbej")
            },
            m(e, s) {
                yn(e, t, s);
                for (let e = 0; e < a.length; e += 1)
                    a[e] && a[e].m(t, null);
                bn(t, n),
                o || (i = In(t, "click", r),
                o = !0)
            },
            p(o, i) {
                if (e = o,
                4 & i[0]) {
                    let o;
                    for (s = e[32].textChunks,
                    o = 0; o < s.length; o += 1) {
                        const r = Vu(e, s, o);
                        a[o] ? a[o].p(r, i) : (a[o] = Qu(r),
                        a[o].c(),
                        a[o].m(t, n))
                    }
                    for (; o < a.length; o += 1)
                        a[o].d(1);
                    a.length = s.length
                }
            },
            d(e) {
                e && xn(t),
                Tn(a, e),
                o = !1,
                i()
            }
        }
    }
    function em(e) {
        let t, n = e[3], o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = tm(ju(e, n, t));
        return {
            c() {
                t = Cn("div");
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                On(t, "class", "alternatives svelte-11zfbej")
            },
            m(e, n) {
                yn(e, t, n);
                for (let e = 0; e < o.length; e += 1)
                    o[e] && o[e].m(t, null)
            },
            p(e, i) {
                if (264 & i[0]) {
                    let s;
                    for (n = e[3],
                    s = 0; s < n.length; s += 1) {
                        const a = ju(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = tm(a),
                        o[s].c(),
                        o[s].m(t, null))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                e && xn(t),
                Tn(o, e)
            }
        }
    }
    function tm(e) {
        let t, n, o, i, s, a = tt(e[29].text) + "";
        function r() {
            return e[23](e[29])
        }
        return {
            c() {
                t = Cn("div"),
                n = Ln(a),
                o = kn(),
                On(t, "class", "word-alternative alternative svelte-11zfbej")
            },
            m(e, a) {
                yn(e, t, a),
                bn(t, n),
                bn(t, o),
                i || (s = In(t, "click", r),
                i = !0)
            },
            p(t, o) {
                e = t,
                8 & o[0] && a !== (a = tt(e[29].text) + "") && Dn(n, a)
            },
            d(e) {
                e && xn(t),
                i = !1,
                s()
            }
        }
    }
    function nm(e) {
        let t, n, o, i, s;
        function a(e, t) {
            return e[5] ? Ku : e[1] ? Zu : void 0
        }
        let r = a(e)
          , l = r && r(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("button"),
                n.textContent = `${chrome.i18n.getMessage("ui_alternatives_title")}`,
                o = kn(),
                l && l.c(),
                On(n, "class", "dl-toggle-show-alternatives svelte-11zfbej"),
                Gn(n, "is-showing", e[1]),
                On(t, "class", "dl-alternatives-container svelte-11zfbej")
            },
            m(a, r) {
                yn(a, t, r),
                bn(t, n),
                bn(t, o),
                l && l.m(t, null),
                i || (s = In(n, "click", e[19]),
                i = !0)
            },
            p(e, o) {
                2 & o[0] && Gn(n, "is-showing", e[1]),
                r === (r = a(e)) && l ? l.p(e, o) : (l && l.d(1),
                l = r && r(e),
                l && (l.c(),
                l.m(t, null)))
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                l && l.d(),
                i = !1,
                s()
            }
        }
    }
    function om(e, n, o) {
        let i;
        const s = eo("deepl_settings");
        on(e, s, (e=>o(4, i = e)));
        let {textProcessingMode: a=Y.translate} = n
          , {contentProcessBuildingBlocks: r} = n
          , {buildAndSetReplaceData: l} = n
          , {activeSentence: c} = n
          , {activeWord: d} = n
          , {shouldMarkWordOrSentenceAsActive: u} = n
          , {registerAlternativesCallbacks: m} = n
          , {clearAlternativesCallbacks: g} = n
          , p = !1
          , h = !1
          , f = []
          , _ = [];
        const w = async e=>{
            if (i.gDocsSegmentation === Ne.SENTENCE) {
                o(0, c = e),
                o(1, p = !0),
                o(2, f = []),
                o(5, h = !0);
                try {
                    const n = await t({
                        action: "dlRequestGDocsSentenceAlternatives",
                        payload: {
                            mode: a,
                            sourceLang: r.detectedSourceLanguage,
                            targetLang: r.targetLang,
                            sentence: r.sentences[e],
                            contextBefore: e > 0 && r.sentences[e - 1].text,
                            contextAfter: e < r.sentences.length - 1 && r.sentences[e + 1].text
                        }
                    });
                    for (const t of n.result.translations[0].beams)
                        t.sentences[0].text !== r.processedSentences[e].text && f.length < 4 && o(2, f = [...f, {
                            text: t.sentences[0].text,
                            textChunks: Xo(t.sentences[0].text, r.processedSentences[e].text)
                        }]);
                    C(Ne.SENTENCE)
                } catch (e) {
                    console.error(e)
                }
                o(5, h = !1)
            }
        }
          , v = async(e,n,s)=>{
            if (i.gDocsSegmentation === Ne.WORD) {
                o(0, c = e),
                o(13, d = n),
                o(1, p = !0),
                o(3, _ = []),
                o(5, h = !0);
                try {
                    const n = await t({
                        action: "dlRequestGDocsWordAlternatives",
                        payload: {
                            mode: a,
                            sourceLang: r.detectedSourceLanguage,
                            targetLang: r.targetLang,
                            sentence: r.sentences[e],
                            contextBefore: e > 0 && r.sentences[e - 1].text,
                            contextAfter: e < r.sentences.length - 1 && r.sentences[e + 1].text,
                            partialTranslation: r.processedSentences[e].text.substring(0, s.offsetStartRaw)
                        }
                    });
                    for (const t of n.result.translations[0].beams)
                        if (t.sentences[0].text !== r.processedSentences[e].text.substring(0, s.offsetStartRaw + s.offsetLengthRaw) && _.length < 4) {
                            const e = t.sentences[0].text.substring(s.offsetStartRaw);
                            e.trim().length > 0 && o(3, _ = [..._, {
                                text: `${e}...`,
                                partialTranslation: t.sentences[0].text
                            }])
                        }
                    C(Ne.WORD)
                } catch (e) {
                    console.error(e)
                }
                o(5, h = !1)
            }
        }
          , b = e=>{
            o(12, r.processedSentences[c].text = e, r),
            o(2, f = []),
            l(),
            T(Ne.SENTENCE)
        }
          , $ = async e=>{
            o(12, r.processedSentences[c].text = e, r),
            o(3, _ = []);
            try {
                const n = await t({
                    action: "dlRequestGDocsSentenceFromPartialTranslation",
                    payload: {
                        mode: a,
                        sourceLang: r.detectedSourceLanguage,
                        targetLang: r.targetLang,
                        sentence: r.sentences[c],
                        contextBefore: c > 0 && r.sentences[c - 1].text,
                        contextAfter: c < r.sentences.length - 1 && r.sentences[c + 1].text,
                        partialTranslation: e
                    }
                });
                o(12, r.processedSentences[c].text = n.result.translations[0].beams[0].sentences[0].text, r),
                l(),
                T(Ne.WORD)
            } catch (e) {
                console.error(e)
            }
        }
          , E = ()=>{
            un(s, i.gDocsSegmentation = Ne.SENTENCE, i),
            o(0, c = void 0),
            o(13, d = void 0),
            x(Ne.SENTENCE)
        }
          , y = ()=>{
            un(s, i.gDocsSegmentation = Ne.WORD, i),
            o(0, c = void 0),
            o(13, d = void 0),
            x(Ne.WORD)
        }
          , x = async e=>await S({
            eventType: $e,
            alternativesSegmentation: e
        })
          , T = async e=>await S({
            eventType: Ee,
            alternativesSegmentation: e
        })
          , C = async e=>await S({
            eventType: be,
            alternativesSegmentation: e
        })
          , S = async({eventType: e, alternativesSegmentation: n})=>await t({
            action: "dlTrackAlternativesEvent",
            payload: {
                eventType: e,
                alternativesMetaData: {
                    sourceLang: r.detectedSourceLanguage,
                    targetLang: r.targetLang,
                    nicheIntegration: K.gdocs,
                    contentProcessingMode: a,
                    alternativesSegmentation: n
                }
            }
        });
        Yn((()=>{
            m({
                showSentenceAlternatives: w,
                showWordAlternatives: v
            })
        }
        )),
        Xn((()=>{
            g()
        }
        ));
        return e.$$set = e=>{
            "textProcessingMode"in e && o(15, a = e.textProcessingMode),
            "contentProcessBuildingBlocks"in e && o(12, r = e.contentProcessBuildingBlocks),
            "buildAndSetReplaceData"in e && o(16, l = e.buildAndSetReplaceData),
            "activeSentence"in e && o(0, c = e.activeSentence),
            "activeWord"in e && o(13, d = e.activeWord),
            "shouldMarkWordOrSentenceAsActive"in e && o(14, u = e.shouldMarkWordOrSentenceAsActive),
            "registerAlternativesCallbacks"in e && o(17, m = e.registerAlternativesCallbacks),
            "clearAlternativesCallbacks"in e && o(18, g = e.clearAlternativesCallbacks)
        }
        ,
        e.$$.update = ()=>{
            30 & e.$$.dirty[0] && o(14, u = p && (i.gDocsSegmentation === Ne.WORD && _ || i.gDocsSegmentation === Ne.SENTENCE && f))
        }
        ,
        [c, p, f, _, i, h, s, b, $, E, y, C, r, d, u, a, l, m, g, ()=>{
            o(1, p = !p),
            C()
        }
        , ()=>y(), ()=>E(), e=>b(e.text), e=>$(e.partialTranslation)]
    }
    class im extends Oo {
        constructor(e) {
            super(),
            No(this, e, om, nm, tn, {
                textProcessingMode: 15,
                contentProcessBuildingBlocks: 12,
                buildAndSetReplaceData: 16,
                activeSentence: 0,
                activeWord: 13,
                shouldMarkWordOrSentenceAsActive: 14,
                registerAlternativesCallbacks: 17,
                clearAlternativesCallbacks: 18
            }, null, [-1, -1])
        }
    }
    function sm(e, t, n) {
        const o = e.slice();
        return o[27] = t[n],
        o
    }
    function am(e, t, n) {
        const o = e.slice();
        return o[30] = t[n],
        o
    }
    function rm(e, t, n) {
        const o = e.slice();
        return o[33] = t[n],
        o[35] = n,
        o
    }
    function lm(e) {
        let t, n = e[10].contentReference, o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = _m(sm(e, n, t));
        return {
            c() {
                t = Cn("div");
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                On(t, "class", "preview-text-scroller svelte-15vt8hb")
            },
            m(e, n) {
                yn(e, t, n);
                for (let e = 0; e < o.length; e += 1)
                    o[e] && o[e].m(t, null)
            },
            p(e, i) {
                if (65024 & i[0]) {
                    let s;
                    for (n = e[10].contentReference,
                    s = 0; s < n.length; s += 1) {
                        const a = sm(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = _m(a),
                        o[s].c(),
                        o[s].m(t, null))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                e && xn(t),
                Tn(o, e)
            }
        }
    }
    function cm(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "dl-untranslatable-line svelte-15vt8hb")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function dm(e) {
        let t, n, o = e[10].textLinesComponents[e[27].index], i = [];
        for (let t = 0; t < o.length; t += 1)
            i[t] = fm(am(e, o, t));
        return {
            c() {
                t = Cn("div");
                for (let e = 0; e < i.length; e += 1)
                    i[e].c();
                n = kn(),
                On(t, "class", "dl-translatable-line svelte-15vt8hb"),
                Gn(t, "is-sentence-segmentation", e[9].gDocsSegmentation === Ne.SENTENCE),
                Gn(t, "is-word-segmentation", e[9].gDocsSegmentation === Ne.WORD)
            },
            m(e, o) {
                yn(e, t, o);
                for (let e = 0; e < i.length; e += 1)
                    i[e] && i[e].m(t, null);
                bn(t, n)
            },
            p(e, s) {
                if (65024 & s[0]) {
                    let a;
                    for (o = e[10].textLinesComponents[e[27].index],
                    a = 0; a < o.length; a += 1) {
                        const r = am(e, o, a);
                        i[a] ? i[a].p(r, s) : (i[a] = fm(r),
                        i[a].c(),
                        i[a].m(t, n))
                    }
                    for (; a < i.length; a += 1)
                        i[a].d(1);
                    i.length = o.length
                }
                512 & s[0] && Gn(t, "is-sentence-segmentation", e[9].gDocsSegmentation === Ne.SENTENCE),
                512 & s[0] && Gn(t, "is-word-segmentation", e[9].gDocsSegmentation === Ne.WORD)
            },
            d(e) {
                e && xn(t),
                Tn(i, e)
            }
        }
    }
    function um(e) {
        let t, n = tt(e[10].processedSentences[e[30]].text) + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p(e, o) {
                1024 & o[0] && n !== (n = tt(e[10].processedSentences[e[30]].text) + "") && Dn(t, n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function mm(e) {
        let t, n = nt(e[10].processedSentences[e[30]].text), o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = hm(rm(e, n, t));
        return {
            c() {
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                t = Mn()
            },
            m(e, n) {
                for (let t = 0; t < o.length; t += 1)
                    o[t] && o[t].m(e, n);
                yn(e, t, n)
            },
            p(e, i) {
                if (48128 & i[0]) {
                    let s;
                    for (n = nt(e[10].processedSentences[e[30]].text),
                    s = 0; s < n.length; s += 1) {
                        const a = rm(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = hm(a),
                        o[s].c(),
                        o[s].m(t.parentNode, t))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                Tn(o, e),
                e && xn(t)
            }
        }
    }
    function gm(e) {
        let t, n, o = e[33].text + "";
        return {
            c() {
                t = Cn("span"),
                n = Ln(o)
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                1024 & t[0] && o !== (o = e[33].text + "") && Dn(n, o)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function pm(e) {
        let t, n, o, i, s = e[33].text + "";
        function a() {
            return e[20](e[30], e[35], e[33])
        }
        return {
            c() {
                t = Cn("span"),
                n = Ln(s),
                On(t, "class", "word-text svelte-15vt8hb"),
                Gn(t, "active-word", e[30] === e[11] && e[12] === e[35] && e[13])
            },
            m(e, s) {
                yn(e, t, s),
                bn(t, n),
                o || (i = In(t, "click", a),
                o = !0)
            },
            p(o, i) {
                e = o,
                1024 & i[0] && s !== (s = e[33].text + "") && Dn(n, s),
                15360 & i[0] && Gn(t, "active-word", e[30] === e[11] && e[12] === e[35] && e[13])
            },
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function hm(e) {
        let t;
        function n(e, t) {
            return e[33].isWord ? pm : gm
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = Mn()
            },
            m(e, n) {
                i.m(e, n),
                yn(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && xn(t)
            }
        }
    }
    function fm(e) {
        let t, n, o, i, s, a, r, l = e[10].processedSentences[e[30]].prefix + "", c = e[9].gDocsSegmentation === Ne.SENTENCE && um(e), d = e[9].gDocsSegmentation === Ne.WORD && mm(e);
        function u() {
            return e[21](e[30])
        }
        return {
            c() {
                t = Cn("span"),
                n = Ln(l),
                o = kn(),
                i = Cn("span"),
                c && c.c(),
                s = kn(),
                d && d.c(),
                On(t, "class", "sentence-prefix"),
                On(i, "class", "sentence-text svelte-15vt8hb"),
                Gn(i, "active-sentence", e[11] === e[30] && e[13])
            },
            m(e, l) {
                yn(e, t, l),
                bn(t, n),
                yn(e, o, l),
                yn(e, i, l),
                c && c.m(i, null),
                bn(i, s),
                d && d.m(i, null),
                a || (r = In(i, "click", u),
                a = !0)
            },
            p(t, o) {
                e = t,
                1024 & o[0] && l !== (l = e[10].processedSentences[e[30]].prefix + "") && Dn(n, l),
                e[9].gDocsSegmentation === Ne.SENTENCE ? c ? c.p(e, o) : (c = um(e),
                c.c(),
                c.m(i, s)) : c && (c.d(1),
                c = null),
                e[9].gDocsSegmentation === Ne.WORD ? d ? d.p(e, o) : (d = mm(e),
                d.c(),
                d.m(i, null)) : d && (d.d(1),
                d = null),
                11264 & o[0] && Gn(i, "active-sentence", e[11] === e[30] && e[13])
            },
            d(e) {
                e && xn(t),
                e && xn(o),
                e && xn(i),
                c && c.d(),
                d && d.d(),
                a = !1,
                r()
            }
        }
    }
    function _m(e) {
        let t;
        function n(e, t) {
            return e[27].isTranslatable ? dm : cm
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = Mn()
            },
            m(e, n) {
                i.m(e, n),
                yn(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && xn(t)
            }
        }
    }
    function wm(e) {
        let t, n, o;
        return n = new Du({
            props: {
                platformBehaviour: K.gdocs,
                websiteSettings: e[1],
                showDictionary: e[2],
                errorMessageDict: e[3],
                dictionaryHTML: e[4],
                langPair: e[5],
                switchVisibilityDictionary: e[6],
                isSingleWord: e[7]
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "dl-inline-translate-toolbar-frame svelte-15vt8hb")
            },
            m(e, i) {
                yn(e, t, i),
                Io(n, t, null),
                o = !0
            },
            p(e, t) {
                const o = {};
                2 & t[0] && (o.websiteSettings = e[1]),
                4 & t[0] && (o.showDictionary = e[2]),
                8 & t[0] && (o.errorMessageDict = e[3]),
                16 & t[0] && (o.dictionaryHTML = e[4]),
                32 & t[0] && (o.langPair = e[5]),
                64 & t[0] && (o.switchVisibilityDictionary = e[6]),
                128 & t[0] && (o.isSingleWord = e[7]),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function vm(e) {
        let t, n;
        return t = new Hu({
            props: {
                onClose: e[8]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                256 & n[0] && (o.onClose = e[8]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function bm(e) {
        let t, n, o, i, s, a;
        function r(t) {
            e[22](t)
        }
        function l(t) {
            e[23](t)
        }
        function c(t) {
            e[24](t)
        }
        function d(t) {
            e[25](t)
        }
        let u = {
            textProcessingMode: e[0],
            buildAndSetReplaceData: e[17],
            registerAlternativesCallbacks: e[18],
            clearAlternativesCallbacks: e[19]
        };
        return void 0 !== e[10] && (u.contentProcessBuildingBlocks = e[10]),
        void 0 !== e[11] && (u.activeSentence = e[11]),
        void 0 !== e[12] && (u.activeWord = e[12]),
        void 0 !== e[13] && (u.shouldMarkWordOrSentenceAsActive = e[13]),
        t = new im({
            props: u
        }),
        oo.push((()=>ko(t, "contentProcessBuildingBlocks", r))),
        oo.push((()=>ko(t, "activeSentence", l))),
        oo.push((()=>ko(t, "activeWord", c))),
        oo.push((()=>ko(t, "shouldMarkWordOrSentenceAsActive", d))),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, n) {
                Io(t, e, n),
                a = !0
            },
            p(e, a) {
                const r = {};
                1 & a[0] && (r.textProcessingMode = e[0]),
                !n && 1024 & a[0] && (n = !0,
                r.contentProcessBuildingBlocks = e[10],
                uo((()=>n = !1))),
                !o && 2048 & a[0] && (o = !0,
                r.activeSentence = e[11],
                uo((()=>o = !1))),
                !i && 4096 & a[0] && (i = !0,
                r.activeWord = e[12],
                uo((()=>i = !1))),
                !s && 8192 & a[0] && (s = !0,
                r.shouldMarkWordOrSentenceAsActive = e[13],
                uo((()=>s = !1))),
                t.$set(r)
            },
            i(e) {
                a || (yo(t.$$.fragment, e),
                a = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                a = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function $m(e) {
        let t, n, o, i, s, a, r = e[10] && e[10].contentReference && lm(e), l = e[0] === Y.translate && wm(e), c = e[0] === Y.write && vm(e), d = e[10] && bm(e);
        return {
            c() {
                t = Cn("div"),
                r && r.c(),
                n = kn(),
                l && l.c(),
                o = kn(),
                c && c.c(),
                i = kn(),
                s = Cn("div"),
                d && d.c(),
                On(s, "class", "dl-alternatives-frame svelte-15vt8hb")
            },
            m(e, u) {
                yn(e, t, u),
                r && r.m(t, null),
                bn(t, n),
                l && l.m(t, null),
                bn(t, o),
                c && c.m(t, null),
                bn(t, i),
                bn(t, s),
                d && d.m(s, null),
                a = !0
            },
            p(e, a) {
                e[10] && e[10].contentReference ? r ? r.p(e, a) : (r = lm(e),
                r.c(),
                r.m(t, n)) : r && (r.d(1),
                r = null),
                e[0] === Y.translate ? l ? (l.p(e, a),
                1 & a[0] && yo(l, 1)) : (l = wm(e),
                l.c(),
                yo(l, 1),
                l.m(t, o)) : l && ($o(),
                xo(l, 1, 1, (()=>{
                    l = null
                }
                )),
                Eo()),
                e[0] === Y.write ? c ? (c.p(e, a),
                1 & a[0] && yo(c, 1)) : (c = vm(e),
                c.c(),
                yo(c, 1),
                c.m(t, i)) : c && ($o(),
                xo(c, 1, 1, (()=>{
                    c = null
                }
                )),
                Eo()),
                e[10] ? d ? (d.p(e, a),
                1024 & a[0] && yo(d, 1)) : (d = bm(e),
                d.c(),
                yo(d, 1),
                d.m(s, null)) : d && ($o(),
                xo(d, 1, 1, (()=>{
                    d = null
                }
                )),
                Eo())
            },
            i(e) {
                a || (yo(l),
                yo(c),
                yo(d),
                a = !0)
            },
            o(e) {
                xo(l),
                xo(c),
                xo(d),
                a = !1
            },
            d(e) {
                e && xn(t),
                r && r.d(),
                l && l.d(),
                c && c.d(),
                d && d.d()
            }
        }
    }
    function Em(e, t, n) {
        let o;
        const i = eo("deepl_settings");
        on(e, i, (e=>n(9, o = e)));
        let s, a, r, l, {textProcessingMode: c=Y.translate} = t, {websiteSettings: d} = t, {showDictionary: u} = t, {errorMessageDict: m} = t, {dictionaryHTML: g} = t, {langPair: p} = t, {switchVisibilityDictionary: h} = t, {isSingleWord: f} = t, {onClose: _} = t, w = !1, v = ()=>{}
        , b = ()=>{}
        ;
        const $ = ()=>{
            if (a)
                try {
                    const {processedText: e, processedEntities: t} = et({
                        textLines: a.textLinesComponents.map((e=>e.map((e=>a.processedSentences[e].prefix + a.processedSentences[e].text)))),
                        entities: a.entities,
                        contentReference: a.contentReference
                    });
                    d.update({
                        translatedSnippet: e
                    }),
                    s && s.setReplaceData({
                        entities: t,
                        text: e,
                        originalObject: a.originalObject
                    })
                } catch (e) {
                    console.error(e)
                }
        }
        ;
        Yn((()=>{
            s = document.querySelector("deepl-gdocs-icon"),
            n(10, a = s.getContentProcessBuildingBlocks()),
            $()
        }
        ));
        return e.$$set = e=>{
            "textProcessingMode"in e && n(0, c = e.textProcessingMode),
            "websiteSettings"in e && n(1, d = e.websiteSettings),
            "showDictionary"in e && n(2, u = e.showDictionary),
            "errorMessageDict"in e && n(3, m = e.errorMessageDict),
            "dictionaryHTML"in e && n(4, g = e.dictionaryHTML),
            "langPair"in e && n(5, p = e.langPair),
            "switchVisibilityDictionary"in e && n(6, h = e.switchVisibilityDictionary),
            "isSingleWord"in e && n(7, f = e.isSingleWord),
            "onClose"in e && n(8, _ = e.onClose)
        }
        ,
        e.$$.update = ()=>{
            512 & e.$$.dirty[0] && Oe.includes(o.selectedTargetLanguage) && un(i, o.gDocsSegmentation = Ne.SENTENCE, o)
        }
        ,
        [c, d, u, m, g, p, h, f, _, o, a, r, l, w, v, b, i, $, e=>{
            n(14, v = e.showSentenceAlternatives),
            n(15, b = e.showWordAlternatives)
        }
        , ()=>{
            n(14, v = ()=>{}
            ),
            n(15, b = ()=>{}
            )
        }
        , (e,t,n)=>b(e, t, n), e=>v(e), function(e) {
            a = e,
            n(10, a)
        }
        , function(e) {
            r = e,
            n(11, r)
        }
        , function(e) {
            l = e,
            n(12, l)
        }
        , function(e) {
            w = e,
            n(13, w)
        }
        ]
    }
    class ym extends Oo {
        constructor(e) {
            super(),
            No(this, e, Em, $m, tn, {
                textProcessingMode: 0,
                websiteSettings: 1,
                showDictionary: 2,
                errorMessageDict: 3,
                dictionaryHTML: 4,
                langPair: 5,
                switchVisibilityDictionary: 6,
                isSingleWord: 7,
                onClose: 8
            }, null, [-1, -1])
        }
    }
    function xm(e) {
        return e && function(e) {
            return e.replace(/./gm, (function(e) {
                return e.match(/[a-z0-9\s]+/i) ? e : "&#" + e.charCodeAt(0) + ";"
            }
            ))
        }(e).replaceAll("\n", "<br />")
    }
    const Tm = new Set(["BG", "CS", "DA", "DE", "EL", "EN", "ES", "ET", "FI", "FR", "FR_CA", "HU", "IT", "JA", "KO", "LT", "LV", "MT", "NL", "PL", "PT", "PT_BR", "PT_PT", "RO", "RU", "SK", "SL", "SV", "ZH"])
      , Cm = new Map([["ZH_EN", "chinese-english"], ["EN_ZH", "english-chinese"], ["NL_EN", "dutch-english"], ["EN_NL", "english-dutch"], ["FR_EN", "french-english"], ["EN_FR", "english-french"], ["FR_DE", "french-german"], ["DE_FR", "german-french"], ["FR_PT", "french-portuguese"], ["PT_FR", "portuguese-french"], ["FR_ES", "french-spanish"], ["ES_FR", "spanish-french"], ["DE_EN", "german-english"], ["EN_DE", "english-german"], ["DE_PT", "german-portuguese"], ["PT_DE", "portuguese-german"], ["DE_ES", "german-spanish"], ["ES_DE", "spanish-german"], ["IT_EN", "italian-english"], ["EN_IT", "english-italian"], ["JA_EN", "japanese-english"], ["EN_JA", "english-japanese"], ["PL_EN", "polish-english"], ["EN_PL", "english-polish"], ["PT_EN", "portuguese-english"], ["EN_PT", "english-portuguese"], ["PT_ES", "portuguese-spanish"], ["ES_PT", "spanish-portuguese"], ["RU_EN", "russian-english"], ["EN_RU", "english-russian"], ["ES_EN", "spanish-english"], ["EN_ES", "english-spanish"]]);
    function Sm(e) {
        let t, n, o, i;
        return t = new Bu({
            props: {
                headline: "Response - Translated DOM",
                jsonData: e[18]
            }
        }),
        o = new Bu({
            props: {
                headline: "Request - Original DOM",
                jsonData: e[19]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment),
                n = kn(),
                Mo(o.$$.fragment)
            },
            m(e, s) {
                Io(t, e, s),
                yn(e, n, s),
                Io(o, e, s),
                i = !0
            },
            p(e, n) {
                const i = {};
                32 & n && (i.jsonData = e[18]),
                t.$set(i);
                const s = {};
                32 & n && (s.jsonData = e[19]),
                o.$set(s)
            },
            i(e) {
                i || (yo(t.$$.fragment, e),
                yo(o.$$.fragment, e),
                i = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                xo(o.$$.fragment, e),
                i = !1
            },
            d(e) {
                Ao(t, e),
                e && xn(n),
                Ao(o, e)
            }
        }
    }
    function Lm(e) {
        let t, n, o, i, s, a = xm(e[5].translatedSnippet) + "", r = e[3] === Y.translate && Nm(e), l = e[3] === Y.write && Om(e);
        return {
            c() {
                t = Cn("div"),
                n = kn(),
                r && r.c(),
                o = kn(),
                l && l.c(),
                i = Mn(),
                On(t, "class", "result-frame svelte-1a37brm")
            },
            m(e, c) {
                yn(e, t, c),
                t.innerHTML = a,
                yn(e, n, c),
                r && r.m(e, c),
                yn(e, o, c),
                l && l.m(e, c),
                yn(e, i, c),
                s = !0
            },
            p(e, n) {
                (!s || 32 & n) && a !== (a = xm(e[5].translatedSnippet) + "") && (t.innerHTML = a),
                e[3] === Y.translate ? r ? (r.p(e, n),
                8 & n && yo(r, 1)) : (r = Nm(e),
                r.c(),
                yo(r, 1),
                r.m(o.parentNode, o)) : r && ($o(),
                xo(r, 1, 1, (()=>{
                    r = null
                }
                )),
                Eo()),
                e[3] === Y.write ? l ? (l.p(e, n),
                8 & n && yo(l, 1)) : (l = Om(e),
                l.c(),
                yo(l, 1),
                l.m(i.parentNode, i)) : l && ($o(),
                xo(l, 1, 1, (()=>{
                    l = null
                }
                )),
                Eo())
            },
            i(e) {
                s || (yo(r),
                yo(l),
                s = !0)
            },
            o(e) {
                xo(r),
                xo(l),
                s = !1
            },
            d(e) {
                e && xn(t),
                e && xn(n),
                r && r.d(e),
                e && xn(o),
                l && l.d(e),
                e && xn(i)
            }
        }
    }
    function km(e) {
        let t, n;
        return t = new ym({
            props: {
                textProcessingMode: e[3],
                websiteSettings: e[1],
                showDictionary: e[6],
                errorMessageDict: e[8],
                dictionaryHTML: e[7],
                langPair: e[4],
                switchVisibilityDictionary: e[12],
                isSingleWord: e[10],
                onClose: e[0]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                8 & n && (o.textProcessingMode = e[3]),
                2 & n && (o.websiteSettings = e[1]),
                64 & n && (o.showDictionary = e[6]),
                256 & n && (o.errorMessageDict = e[8]),
                128 & n && (o.dictionaryHTML = e[7]),
                16 & n && (o.langPair = e[4]),
                1 & n && (o.onClose = e[0]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Mm(e) {
        let t, n;
        return t = new _a({
            props: {
                error: e[5].error
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                32 & n && (o.error = e[5].error),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Im(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p = e[5].originalSnippet.length + "";
        function h(e, t) {
            return e[3] === Y.translate ? Rm : Dm
        }
        let f = h(e)
          , _ = f(e);
        function w(e, t) {
            return e[3] === Y.translate ? Hm : Pm
        }
        let v = w(e)
          , b = v(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("p"),
                o = Ln(p),
                i = Ln("/5000"),
                s = kn(),
                a = Cn("div"),
                r = Cn("h2"),
                _.c(),
                l = kn(),
                b.c(),
                c = kn(),
                d = Cn("div"),
                u = Cn("button"),
                u.textContent = `${chrome.i18n.getMessage("link_try_deepl")}`,
                On(n, "class", "counter svelte-1a37brm"),
                On(r, "class", "svelte-1a37brm"),
                On(u, "class", "svelte-1a37brm"),
                On(d, "class", "button-row svelte-1a37brm"),
                On(a, "class", "box svelte-1a37brm"),
                On(t, "class", "anonymous-user-max-char-exceeded svelte-1a37brm")
            },
            m(p, h) {
                yn(p, t, h),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(t, s),
                bn(t, a),
                bn(a, r),
                _.m(r, null),
                bn(a, l),
                b.m(a, null),
                bn(a, c),
                bn(a, d),
                bn(d, u),
                m || (g = In(u, "click", e[13]),
                m = !0)
            },
            p(e, t) {
                32 & t && p !== (p = e[5].originalSnippet.length + "") && Dn(o, p),
                f === (f = h(e)) && _ ? _.p(e, t) : (_.d(1),
                _ = f(e),
                _ && (_.c(),
                _.m(r, null))),
                v === (v = w(e)) && b ? b.p(e, t) : (b.d(1),
                b = v(e),
                b && (b.c(),
                b.m(a, c)))
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                _.d(),
                b.d(),
                m = !1,
                g()
            }
        }
    }
    function Am(e) {
        let t, n, o;
        return n = new rc({}),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "loading-spinner-container svelte-1a37brm")
            },
            m(e, i) {
                yn(e, t, i),
                Io(n, t, null),
                o = !0
            },
            p: Kt,
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function Nm(e) {
        let t, n;
        return t = new Du({
            props: {
                platformBehaviour: e[2],
                websiteSettings: e[1],
                showDictionary: e[6],
                errorMessageDict: e[8],
                dictionaryHTML: e[7],
                langPair: e[4],
                switchVisibilityDictionary: e[12],
                isSingleWord: e[10]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n && (o.platformBehaviour = e[2]),
                2 & n && (o.websiteSettings = e[1]),
                64 & n && (o.showDictionary = e[6]),
                256 & n && (o.errorMessageDict = e[8]),
                128 & n && (o.dictionaryHTML = e[7]),
                16 & n && (o.langPair = e[4]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Om(e) {
        let t, n;
        return t = new Hu({
            props: {
                onClose: e[0]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n && (o.onClose = e[0]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Dm(e) {
        let t, n = chrome.i18n.getMessage("inline_gdocs_max_chars_exceeded_improvement_title") + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Rm(e) {
        let t, n = chrome.i18n.getMessage("inline_gdocs_max_chars_exceeded_title") + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Pm(e) {
        let t;
        return {
            c() {
                t = Cn("p"),
                t.textContent = `${chrome.i18n.getMessage("inline_gdocs_max_chars_exceeded_body_write")}`
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Hm(e) {
        let t;
        return {
            c() {
                t = Cn("p"),
                t.textContent = `${chrome.i18n.getMessage("inline_gdocs_max_chars_exceeded_body")}`
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Gm(e) {
        let t, n, o, i;
        return n = new Fu({
            props: {
                html: e[7]
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "dl__dictionary svelte-1a37brm")
            },
            m(e, o) {
                yn(e, t, o),
                Io(n, t, null),
                i = !0
            },
            p(e, t) {
                const o = {};
                128 & t && (o.html = e[7]),
                n.$set(o)
            },
            i(e) {
                i || (yo(n.$$.fragment, e),
                o || co((()=>{
                    o = Co(t, jo, {
                        y: -50,
                        duration: 700
                    }),
                    o.start()
                }
                )),
                i = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                i = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function zm(e) {
        let t, n, o, i, s, a, l;
        const c = [Am, Im, Mm, km, Lm, Sm]
          , d = [];
        function u(e, t) {
            return 32 & t && (n = null),
            null == e[5] || e[5].translationState === r.ongoingTranslation ? 0 : e[5].translationState === r.anonymousUserMaxCharExceeded ? 1 : e[5].error ? 2 : e[2] === K.gdocs ? 3 : e[5].translatedSnippet ? 4 : (null == n && (n = !(!It() || !e[5].translatedDOMSnippet)),
            n ? 5 : -1)
        }
        ~(o = u(e, -1)) && (i = d[o] = c[o](e));
        let m = e[6] && e[7] && Gm(e);
        return {
            c() {
                t = Cn("div"),
                i && i.c(),
                s = kn(),
                m && m.c(),
                a = Mn(),
                On(t, "class", "tooltip-container svelte-1a37brm"),
                On(t, "data-qa", "deepl-inline-translation-result-container"),
                Gn(t, "error", e[5].error)
            },
            m(e, n) {
                yn(e, t, n),
                ~o && d[o].m(t, null),
                yn(e, s, n),
                m && m.m(e, n),
                yn(e, a, n),
                l = !0
            },
            p(e, n) {
                let s = o;
                o = u(e, n),
                o === s ? ~o && d[o].p(e, n) : (i && ($o(),
                xo(d[s], 1, 1, (()=>{
                    d[s] = null
                }
                )),
                Eo()),
                ~o ? (i = d[o],
                i ? i.p(e, n) : (i = d[o] = c[o](e),
                i.c()),
                yo(i, 1),
                i.m(t, null)) : i = null),
                (!l || 32 & n) && Gn(t, "error", e[5].error),
                e[6] && e[7] ? m ? (m.p(e, n),
                192 & n && yo(m, 1)) : (m = Gm(e),
                m.c(),
                yo(m, 1),
                m.m(a.parentNode, a)) : m && ($o(),
                xo(m, 1, 1, (()=>{
                    m = null
                }
                )),
                Eo())
            },
            i(e) {
                l || (yo(i),
                yo(m),
                l = !0)
            },
            o(e) {
                xo(i),
                xo(m),
                l = !1
            },
            d(e) {
                e && xn(t),
                ~o && d[o].d(),
                e && xn(s),
                m && m.d(e),
                e && xn(a)
            }
        }
    }
    function Bm(e) {
        let t, n, o;
        return n = new nu({
            props: {
                closeWindow: e[11],
                showLangSelect: !e[5].error,
                settings: Po,
                websiteSettings: e[1],
                extensionContext: e[9],
                platformBehaviour: e[2],
                textProcessingMode: e[3],
                showSettingsIcon: !0,
                $$slots: {
                    default: [zm]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment)
            },
            m(e, i) {
                yn(e, t, i),
                Io(n, t, null),
                o = !0
            },
            p(e, [t]) {
                const o = {};
                32 & t && (o.showLangSelect = !e[5].error),
                2 & t && (o.websiteSettings = e[1]),
                4 & t && (o.platformBehaviour = e[2]),
                8 & t && (o.textProcessingMode = e[3]),
                33554943 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function Um(e, n, o) {
        let i, s, a = Kt, l = ()=>(a(),
        a = nn(d, (e=>o(5, i = e))),
        d);
        on(e, Po, (e=>o(17, s = e))),
        e.$$.on_destroy.push((()=>a()));
        let {closeTooltip: c} = n
          , {websiteSettings: d} = n;
        l();
        let u, m, g, p, {platformBehaviour: h=K.default} = n, {textProcessingMode: f=Y.translate} = n, {setPositioningStatus: w} = n, v = "", b = "", $ = "", E = _;
        function T() {
            return !!p && 1 === p.trim().split(" ").length
        }
        function C() {
            const e = v && g && T() ? y : x;
            if (i.originalSnippet && i.originalSnippet !== $) {
                $ = i.originalSnippet;
                try {
                    t({
                        action: "dltrackDictionaryStatus",
                        payload: {
                            status: e,
                            langPair: g
                        }
                    })
                } catch (e) {
                    console.log(e)
                }
            }
        }
        async function S() {
            let e = chrome.i18n.getUILanguage();
            var n;
            e && (n = e,
            Tm.has(n.toUpperCase())) || (e = "EN"),
            e = e.substring(0, 2).toUpperCase(),
            o(8, b = ""),
            await (lo(),
            ao),
            t({
                action: "dlGetDictionary",
                payload: {
                    interfaceLang: e,
                    sourceLang: i.websiteLanguage,
                    targetLang: s.selectedTargetLanguage,
                    text: p
                }
            }).then((e=>{
                o(7, v = e)
            }
            )).catch((e=>{
                switch (t({
                    action: "dlTrackLingueeErrorData",
                    payload: {
                        lingueeError: e.error
                    }
                }),
                e.error) {
                case Ut:
                    o(8, b = chrome.i18n.getMessage("ui_inline_translation_problem_loading_dictionary"));
                    break;
                case Bt:
                    o(8, b = chrome.i18n.getMessage("ui_inline_translation_no_entry_dictionary", p));
                    break;
                default:
                    o(8, b = chrome.i18n.getMessage("ui_inline_translation_problem_loading_dictionary"))
                }
            }
            )).finally((()=>{
                C(),
                o(6, u = !1)
            }
            ))
        }
        async function L(e) {
            switch (f) {
            case Y.translate:
                {
                    const n = await dt(i.originalSnippet);
                    let o;
                    e === ye && (o = "dlTrackGdocsMaxCharExceededShown"),
                    e === xe && (o = "dlTrackGDocsMaxCharExceededTryProClicked"),
                    t({
                        action: o,
                        payload: {
                            sourceLang: n,
                            targetLang: s.selectedTargetLanguage,
                            sourceLength: i.originalSnippet.length
                        }
                    })
                }
                break;
            case Y.write:
                {
                    const t = document.getElementsByTagName("deepl-gdocs-icon")[0];
                    t && t.trackMaxCharExceeded(e)
                }
            }
        }
        return e.$$set = e=>{
            "closeTooltip"in e && o(0, c = e.closeTooltip),
            "websiteSettings"in e && l(o(1, d = e.websiteSettings)),
            "platformBehaviour"in e && o(2, h = e.platformBehaviour),
            "textProcessingMode"in e && o(3, f = e.textProcessingMode),
            "setPositioningStatus"in e && o(14, w = e.setPositioningStatus)
        }
        ,
        e.$$.update = ()=>{
            if (36 & e.$$.dirty && h === K.gdocs && i.translationState === r.anonymousUserMaxCharExceeded && i.originalSnippet.length > 0 && L(ye),
            131104 & e.$$.dirty && i && s && (i.websiteLanguage,
            s.selectedTargetLanguage,
            i.originalSnippet),
            33 & e.$$.dirty && i && (!i.isTranslationTooltipInjected || i.translationState !== r.none || i.translatedSnippet || i.error || i.translatedDOMSnippet || c()),
            16420 & e.$$.dirty && !i.translationState && h === K.default && w && (w(!0),
            setTimeout((()=>{
                w(!1)
            }
            ), 600)),
            196656 & e.$$.dirty) {
                if (s.selectedTargetLanguage !== i.snippetDetectedSourceLang && i.snippetDetectedSourceLang) {
                    let e = i.snippetDetectedSourceLang
                      , t = s.selectedTargetLanguage;
                    ["EN-GB", "EN-US"].includes(e) && (e = "EN"),
                    ["EN-GB", "EN-US"].includes(t) && (t = "EN"),
                    ["PT-PT", "PT-BR"].includes(e) && (e = "PT"),
                    ["PT-PT", "PT-BR"].includes(t) && (t = "PT"),
                    o(4, g = function(e, t) {
                        const n = `${e.toUpperCase()}_${t.toUpperCase()}`;
                        return Cm.get(n)
                    }(e, t))
                } else
                    o(4, g = "");
                i.originalSnippet && i.originalSnippet.trim() !== p ? (o(16, p = i.originalSnippet.trim()),
                o(8, b = ""),
                g && T() ? (o(15, m = g),
                S()) : (o(7, v = ""),
                C(),
                o(6, u = !1))) : o(6, u = !1)
            }
            32784 & e.$$.dirty && g != m && g && T() && S()
        }
        ,
        [c, d, h, f, g, i, u, v, b, E, T, function() {
            t({
                action: "dlTrackUiAction",
                payload: {
                    uiAction: D,
                    nicheIntegration: h
                }
            }),
            c()
        }
        , function() {
            g && T() && v && !b && o(6, u = !u)
        }
        , function() {
            L(xe),
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: gs,
                    utmContent: "gdocs_customization"
                }
            })
        }
        , w, m, p, s, ()=>i.translatedDOMSnippet, ()=>i.originalSnippet]
    }
    class Wm extends Oo {
        constructor(e) {
            super(),
            No(this, e, Um, Bm, tn, {
                closeTooltip: 0,
                websiteSettings: 1,
                platformBehaviour: 2,
                textProcessingMode: 3,
                setPositioningStatus: 14
            })
        }
    }
    function Fm(e) {
        let t, n, o, i, s, a, r, l;
        return s = new Wm({
            props: {
                closeTooltip: e[0],
                websiteSettings: e[1],
                platformBehaviour: e[2],
                textProcessingMode: e[3],
                setPositioningStatus: e[7]
            }
        }),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = kn(),
                i = Cn("div"),
                Mo(s.$$.fragment),
                On(n, "class", "tooltip-drag-handle svelte-1ix4va4"),
                On(i, "class", "tooltip-body svelte-1ix4va4"),
                On(t, "class", "tooltip-wrapper svelte-1ix4va4"),
                On(t, "style", e[6]),
                On(t, "draggable", e[5])
            },
            m(c, d) {
                yn(c, t, d),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                Io(s, i, null),
                e[18](t),
                a = !0,
                r || (l = [In(n, "mouseover", e[8]), In(n, "mouseout", e[9]), mn(wi.call(null, t, {
                    isShadow: !0
                })), In(t, "click_outside", e[17]), In(t, "dragstart", e[10])],
                r = !0)
            },
            p(e, [n]) {
                const o = {};
                1 & n && (o.closeTooltip = e[0]),
                2 & n && (o.websiteSettings = e[1]),
                4 & n && (o.platformBehaviour = e[2]),
                8 & n && (o.textProcessingMode = e[3]),
                s.$set(o),
                (!a || 64 & n) && On(t, "style", e[6]),
                (!a || 32 & n) && On(t, "draggable", e[5])
            },
            i(e) {
                a || (yo(s.$$.fragment, e),
                a = !0)
            },
            o(e) {
                xo(s.$$.fragment, e),
                a = !1
            },
            d(n) {
                n && xn(t),
                Ao(s),
                e[18](null),
                r = !1,
                Jt(l)
            }
        }
    }
    function jm(e) {
        return e.preventDefault(),
        !1
    }
    function qm(e, n, o) {
        let i;
        on(e, Po, (e=>o(16, i = e))),
        Jn("deepl_settings", Po);
        let s, a, r, l, {closeTooltip: c} = n, {websiteSettings: d} = n, {replaceElement: u} = n, {actualPosition: m} = n, {dragContainerTo: g} = n, {platformBehaviour: p=K.default} = n, {textProcessingMode: h=Y.translate} = n, f = !1, _ = !1, w = "visibility: hidden; opacity:0; height:0;";
        let v = {
            x: 0,
            y: 0
        };
        function b(e) {
            e.preventDefault(),
            0 !== e.y && 0 !== e.x && g({
                x: e.pageX - v.x,
                y: e.pageY - v.y
            })
        }
        Yn((()=>{
            o(15, l = i.isLoggedIn),
            setTimeout((()=>{
                o(6, w = "")
            }
            ), 100),
            document.addEventListener("dragover", jm),
            document.addEventListener("drop", b),
            r = Ti(s, (({clientHeight: e})=>{
                o(14, a = e)
            }
            ))
        }
        )),
        Xn((()=>{
            document.removeEventListener("dragover", jm),
            document.removeEventListener("drop", b),
            r && r()
        }
        ));
        return e.$$set = e=>{
            "closeTooltip"in e && o(0, c = e.closeTooltip),
            "websiteSettings"in e && o(1, d = e.websiteSettings),
            "replaceElement"in e && o(12, u = e.replaceElement),
            "actualPosition"in e && o(11, m = e.actualPosition),
            "dragContainerTo"in e && o(13, g = e.dragContainerTo),
            "platformBehaviour"in e && o(2, p = e.platformBehaviour),
            "textProcessingMode"in e && o(3, h = e.textProcessingMode)
        }
        ,
        e.$$.update = ()=>{
            var t, n;
            98305 & e.$$.dirty && !1 === l && !0 === i.isLoggedIn && c(),
            65536 & e.$$.dirty && o(11, (t = i.inlineTranslateTooltipPosition,
            m = u(a, t))),
            16384 & e.$$.dirty && o(11, (n = a,
            m = _ || p === K.gdocs ? u(n, i.inlineTranslateTooltipPosition) : m))
        }
        ,
        [c, d, p, h, s, f, w, e=>{
            _ = e
        }
        , function() {
            o(5, f = !0)
        }
        , function() {
            o(5, f = !1)
        }
        , function(e) {
            const n = e.target.getBoundingClientRect()
              , o = e.clientX - n.left
              , i = e.clientY - n.top;
            v.x = o > 0 ? o : 0,
            v.y = i > 0 ? i : 0,
            function() {
                try {
                    t({
                        action: "dlTrackInlineDragStart",
                        payload: {
                            nicheIntegration: p
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
            }()
        }
        , m, u, g, a, l, i, ()=>c(), function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                s = e,
                o(4, s)
            }
            ))
        }
        ]
    }
    class Vm extends Oo {
        constructor(e) {
            super(),
            No(this, e, qm, Fm, tn, {
                closeTooltip: 0,
                websiteSettings: 1,
                replaceElement: 12,
                actualPosition: 11,
                dragContainerTo: 13,
                platformBehaviour: 2,
                textProcessingMode: 3
            })
        }
    }
    class Zm {
        static HTML_TAG_NAME = "deepl-inline-translate-tooltip";
        static createElement = (e=document)=>{
            const t = e.createElement(Zm.HTML_TAG_NAME)
              , n = new Zm(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.dragContainerTo = n.dragContainerTo,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.platformBehaviour = K.default,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.container = document.createElement("div"),
            this.domElement.mainComponent,
            this.domElement.selectionRange;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer)
        }
        createDOM = (e,t,n)=>{
            const {deepl_inline_ui: o} = L;
            this.domElement.shadowContainer && this.domElement.shadowContainer.childElementCount > 0 && this.cleanupDOM(),
            this.domElement.platformBehaviour === K.default && (this.domElement.selectionRange = window.getSelection().getRangeAt(0));
            let i = e(this.domElement.selectionRange);
            this.domElement.shadowContainer.appendChild(this.domElement.container);
            let s = "position: absolute; top: 0px; left: 0px; width: 100%; z-index: " + (o.z_index - 100)
              , a = `position: absolute; top: ${i.y}px; left: ${i.x - 200}px; z-index: ${o.z_index - 100};`;
            switch (this.domElement.platformBehaviour) {
            case K.gdocs:
                a += "top: 600px; left: 10px;";
                break;
            case K.default:
            default:
                a += ""
            }
            this.domElement.shadowContainer.style.cssText = s,
            this.domElement.container.style.cssText = a,
            this.domElement.mainComponent = new Vm({
                target: this.domElement.container,
                props: {
                    closeTooltip: t,
                    websiteSettings: n,
                    replaceElement: (t,n)=>{
                        i = e(this.domElement.selectionRange);
                        const o = {
                            coords: i,
                            clientHeight: t,
                            TOOLTIP_WIDTH: 550,
                            TRIGGER_MENU_ICON_HEIGHT: 30,
                            style: this.domElement.container.style
                        };
                        let s = n;
                        const a = vu(o)
                          , [r,l] = (e=>{
                            const t = ["bottom", "top", "left", "right", "middle"];
                            return t.sort(((t,n)=>t === e ? -1 : n === e ? 1 : 0)),
                            [t, ["bottom", "top", "middle"]]
                        }
                        )(n);
                        if (this.domElement.platformBehaviour === K.gdocs) {
                            for (const e of l)
                                if (wu(e, o)) {
                                    _u(e, o);
                                    break
                                }
                        } else
                            for (const e of r)
                                if (wu(e, o)) {
                                    s = "middle" !== e ? e : void 0,
                                    fu(e, o);
                                    break
                                }
                        return {
                            ...a,
                            current: s
                        }
                    }
                    ,
                    platformBehaviour: this.domElement.platformBehaviour,
                    textProcessingMode: this.domElement.textProcessingMode,
                    dragContainerTo: this.dragContainerTo
                }
            })
        }
        ;
        dragContainerTo = e=>{
            this.domElement.container.style.top = `${e.y}px`,
            this.domElement.container.style.left = `${e.x}px`
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.container.remove(),
            this.domElement.shadowContainer.remove(),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.container = document.createElement("div"),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function Km(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                i = Cn("div"),
                s = kn(),
                a = Cn("div"),
                r = Cn("div"),
                r.textContent = `${chrome.i18n.getMessage("inline_translation_highlighter_tooltip_headline")}`,
                l = kn(),
                c = Cn("div"),
                c.textContent = `${chrome.i18n.getMessage("inline_translation_highlighter_tooltip_text")}`,
                d = kn(),
                u = Cn("button"),
                On(i, "class", "logo svelte-1biae0"),
                On(r, "class", "headline svelte-1biae0"),
                On(c, "class", "text svelte-1biae0"),
                On(a, "class", "text-wrapper svelte-1biae0"),
                On(o, "class", "content svelte-1biae0"),
                On(u, "class", "close-icon svelte-1biae0"),
                On(n, "class", m = dn(`body body__${e[1]}`) + " svelte-1biae0"),
                On(t, "class", g = dn(`container container__${e[1]}`) + " svelte-1biae0")
            },
            m(m, g) {
                yn(m, t, g),
                bn(t, n),
                bn(n, o),
                bn(o, i),
                bn(o, s),
                bn(o, a),
                bn(a, r),
                bn(a, l),
                bn(a, c),
                bn(n, d),
                bn(n, u),
                f = !0,
                _ || (w = In(u, "click", e[3]),
                _ = !0)
            },
            p(e, [o]) {
                (!f || 2 & o && m !== (m = dn(`body body__${e[1]}`) + " svelte-1biae0")) && On(n, "class", m),
                (!f || 2 & o && g !== (g = dn(`container container__${e[1]}`) + " svelte-1biae0")) && On(t, "class", g)
            },
            i(e) {
                f || (co((()=>{
                    f && (h && h.end(1),
                    p = Co(t, jo, {
                        x: 100,
                        duration: 1e3
                    }),
                    p.start())
                }
                )),
                f = !0)
            },
            o(e) {
                p && p.invalidate(),
                h = So(t, jo, {
                    x: 100,
                    duration: 1e3
                }),
                f = !1
            },
            d(e) {
                e && xn(t),
                e && h && h.end(),
                _ = !1,
                w()
            }
        }
    }
    function Ym(n, o, i) {
        let {closeInlineHighlighter: s=(()=>{}
        )} = o
          , {el: a} = o
          , r = "topLeft";
        Yn((async()=>{
            try {
                t({
                    action: "dltrackOpenInlineHighlighter",
                    payload: {
                        domainName: e.websiteData.hostname
                    }
                })
            } catch (e) {
                console.error(e)
            }
        }
        ));
        return n.$$set = e=>{
            "closeInlineHighlighter"in e && i(0, s = e.closeInlineHighlighter),
            "el"in e && i(2, a = e.el)
        }
        ,
        n.$$.update = ()=>{
            if (4 & n.$$.dirty && a) {
                const e = a.getBoundingClientRect();
                let t = e.x > 387
                  , n = window.innerWidth - e.right > 387
                  , o = window.innerHeight - e.bottom > 150
                  , s = e.y > 150;
                s && t ? i(1, r = "topLeft") : s && n ? i(1, r = "topRight") : o && t ? i(1, r = "bottomLeft") : o && n && i(1, r = "bottomRight")
            }
        }
        ,
        [s, r, a, ()=>s(Z.close_icon)]
    }
    class Xm extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ym, Km, tn, {
                closeInlineHighlighter: 0,
                el: 2
            })
        }
    }
    function Qm(e) {
        let t, n, o, i, s, a, r, l, c, d = e[3] && !e[1].isInlineHighlighterShown && Jm(e);
        return o = new xi({
            props: {
                tooltip: e[2],
                $$slots: {
                    default: [eg]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        s = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("inline_translation_tooltip_turnoff"),
                $$slots: {
                    default: [tg]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                d && d.c(),
                t = kn(),
                n = Cn("div"),
                Mo(o.$$.fragment),
                i = kn(),
                Mo(s.$$.fragment),
                On(n, "class", "icon-container svelte-1b84pdq"),
                On(n, "data-qa", "deepl-inline-translate-icon-container")
            },
            m(a, u) {
                d && d.m(a, u),
                yn(a, t, u),
                yn(a, n, u),
                Io(o, n, null),
                bn(n, i),
                Io(s, n, null),
                e[24](n),
                r = !0,
                l || (c = [In(n, "blur", e[15]), In(n, "mouseenter", e[7]), In(n, "mouseleave", e[8])],
                l = !0)
            },
            p(e, n) {
                e[3] && !e[1].isInlineHighlighterShown ? d ? (d.p(e, n),
                10 & n && yo(d, 1)) : (d = Jm(e),
                d.c(),
                yo(d, 1),
                d.m(t.parentNode, t)) : d && ($o(),
                xo(d, 1, 1, (()=>{
                    d = null
                }
                )),
                Eo());
                const i = {};
                4 & n && (i.tooltip = e[2]),
                67108864 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                o.$set(i);
                const a = {};
                67108880 & n && (a.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                s.$set(a)
            },
            i(e) {
                r || (yo(d),
                yo(o.$$.fragment, e),
                yo(s.$$.fragment, e),
                a || co((()=>{
                    a = Co(n, jo, {
                        x: -5,
                        duration: 300
                    }),
                    a.start()
                }
                )),
                r = !0)
            },
            o(e) {
                xo(d),
                xo(o.$$.fragment, e),
                xo(s.$$.fragment, e),
                r = !1
            },
            d(i) {
                d && d.d(i),
                i && xn(t),
                i && xn(n),
                Ao(o),
                Ao(s),
                e[24](null),
                l = !1,
                Jt(c)
            }
        }
    }
    function Jm(e) {
        let t, n;
        return t = new Xm({
            props: {
                closeInlineHighlighter: e[11],
                el: e[3]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                8 & n && (o.el = e[3]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function eg(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "dl-logo svelte-1b84pdq"),
                On(t, "data-qa", "deepl-inline-translate-menu-icon")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = [In(t, "click", Nn(An(e[6]))), In(t, "focus", e[19]), In(t, "mouseup", Nn(An(e[20]))), In(t, "mousedown", Nn(An(e[21]))), In(t, "mouseenter", e[22])],
                n = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                Jt(o)
            }
        }
    }
    function tg(e) {
        let t, n, o, i, s;
        return {
            c() {
                t = Cn("div"),
                On(t, "data-qa", "deepl-inline-translate-turnoff-icon"),
                On(t, "class", n = dn(`dl-turnoff-inline-icon ${e[4] ? "" : "hidden"} `) + " svelte-1b84pdq")
            },
            m(n, o) {
                yn(n, t, o),
                i || (s = [In(t, "click", Nn(An(e[9]))), In(t, "focus", e[16]), In(t, "mousedown", Nn(An(e[17]))), In(t, "mouseup", Nn(An(e[18]))), In(t, "mouseenter", e[23])],
                i = !0)
            },
            p(e, o) {
                16 & o && n !== (n = dn(`dl-turnoff-inline-icon ${e[4] ? "" : "hidden"} `) + " svelte-1b84pdq") && On(t, "class", n)
            },
            i(e) {
                o || co((()=>{
                    o = Co(t, jo, {
                        x: -5,
                        duration: 300
                    }),
                    o.start()
                }
                ))
            },
            o: Kt,
            d(e) {
                e && xn(t),
                i = !1,
                Jt(s)
            }
        }
    }
    function ng(e) {
        let t, n, o = !e[5] && Qm(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[5] ? o && ($o(),
                xo(o, 1, 1, (()=>{
                    o = null
                }
                )),
                Eo()) : o ? (o.p(e, n),
                32 & n && yo(o, 1)) : (o = Qm(e),
                o.c(),
                yo(o, 1),
                o.m(t.parentNode, t))
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function og(e, o, i) {
        let s, a, r, l = Kt, c = ()=>(l(),
        l = nn(d, (e=>i(14, r = e))),
        d);
        on(e, Po, (e=>i(1, a = e))),
        e.$$.on_destroy.push((()=>l())),
        Jn("deepl_settings", Po);
        let {websiteSettings: d} = o;
        c();
        let u, m, {platformBehaviour: g=K.default} = o, p = "", h = !1;
        function f() {
            N_(),
            w(),
            t({
                action: "dlTriggerTranslateInline"
            }),
            p || n(k.hintKeyboardShortcut),
            b(Z.deepl_icon)
        }
        async function _(e, n, o) {
            if ("dlTriggerTranslationShortcut" === e.action)
                f(),
                t({
                    action: "dlTrackUseOfShortcut",
                    payload: {
                        shortcutType: A,
                        location: I.inlineTranslationTriggerIcon,
                        nicheIntegration: g
                    }
                }),
                o()
        }
        function w() {
            r && r.isInlineTranslateSettingsTooltipInjected || i(4, h = !1)
        }
        function v(e) {
            t({
                action: "dlTrackIconHover",
                payload: {
                    uiLocation: e,
                    domainName: window.location.host,
                    nicheIntegration: g
                }
            })
        }
        function b(e) {
            if (!a.isInlineHighlighterShown) {
                Po.set({
                    isInlineHighlighterShown: !0
                });
                try {
                    t({
                        action: "dltrackCloseInlineHighlighter",
                        payload: {
                            trigger: e
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
            }
        }
        t({
            action: "dlCheckCommandShortcuts"
        }).then((e=>i(13, p = e ? e.filter((e=>e.name == A))[0].shortcut : ""))),
        chrome.runtime.onMessage.addListener(_),
        Xn((()=>{
            chrome.runtime.onMessage.removeListener(_)
        }
        ));
        return e.$$set = e=>{
            "websiteSettings"in e && c(i(0, d = e.websiteSettings)),
            "platformBehaviour"in e && i(12, g = e.platformBehaviour)
        }
        ,
        e.$$.update = ()=>{
            if (2 & e.$$.dirty && i(5, s = a.blacklistDomainsForReading && a.blacklistDomainsForReading.includes(window.location.hostname) || !a.enableInlineTranslation),
            24576 & e.$$.dirty) {
                let e;
                e = chrome.i18n.getMessage("context_menus_translate_section"),
                i(2, u = p ? `${e} (${p})` : e),
                !1 === r.isInlineTranslateSettingsTooltipInjected && i(4, h = !1)
            }
        }
        ,
        [d, a, u, m, h, s, f, function() {
            i(4, h = !0)
        }
        , w, function() {
            r && !r.isInlineTranslateSettingsTooltipInjected && (i(4, h = !0),
            A_(g),
            t({
                action: "dlTrackInlineSettingOpened",
                payload: {
                    uiFunction: G,
                    uiLocation: I.inlineTranslationTriggerIcon,
                    nicheIntegration: g
                }
            })),
            b(Z.deepl_icon)
        }
        , v, b, g, p, r, function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , ()=>v(I.inlineTranslationTriggerIcon), ()=>v(I.inlineTranslationSettingsIcon), function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                m = e,
                i(3, m)
            }
            ))
        }
        ]
    }
    class ig extends Oo {
        constructor(e) {
            super(),
            No(this, e, og, ng, tn, {
                websiteSettings: 0,
                platformBehaviour: 12
            })
        }
    }
    class sg {
        static HTML_TAG_NAME = "deepl-inline-trigger";
        static createElement = (e=document)=>{
            const t = e.createElement(sg.HTML_TAG_NAME)
              , n = new sg(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.addChangeEvents = n.addChangeEvents,
            t.removeChangeEvents = n.removeChangeEvents,
            t.repositionContainer = n.repositionContainer,
            t.cachedReposition = n.cachedReposition,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.container = document.createElement("div"),
            this.domElement.mainComponent,
            this.domElement.cachedMouseEvent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowRoot.addEventListener("mouseup", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.domElement.shadowRoot.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.domElement.shadowRoot.addEventListener("mousedown", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = (e,t)=>{
            this.domElement.shadowContainer && this.domElement.shadowContainer.childElementCount > 0 && this.domElement.cleanupDOM(),
            this.domElement.repositionContainer(t),
            this.domElement.shadowContainer.appendChild(this.domElement.container),
            this.domElement.mainComponent = new ig({
                target: this.domElement.container,
                props: {
                    websiteSettings: e
                }
            }),
            this.domElement.addChangeEvents(),
            this.domElement.cachedMouseEvent = t
        }
        ;
        repositionContainer = e=>{
            if (window.getSelection() && !window.getSelection().toString())
                return void this.domElement.cleanupDOM();
            const {deepl_inline_ui: t} = L
              , n = jl();
            let o = `position: absolute; top: 0px; left: 0px; width: 100%; z-index: ${t.z_index}`
              , i = `position: absolute; z-index: ${t.z_index};`;
            this.domElement.shadowContainer.style.cssText = o,
            this.domElement.container.style.cssText = i;
            const s = function(e, t) {
                let n = {
                    containerStyleTop: t.y > 0 ? t.y : 0,
                    containerStyleLeft: t.x > 0 ? t.x : 0
                };
                if (!e || !t)
                    return n;
                const {TRIGGER_EXPENDED_WIDTH: o, TRIGGER_WIDTH: i, TRIGGER_HEIGHT: s} = mu
                  , a = e?.detail;
                if (1 === a) {
                    if (e.isOutsideOfView)
                        return n;
                    let a = parseInt(window.getComputedStyle(window.getSelection().anchorNode.parentElement, null).getPropertyValue("font-size"));
                    const r = document.body.parentNode.getBoundingClientRect();
                    let l = e.pageY + .5 * a
                      , c = t.selectedTop + t.height - a - r.y;
                    if (t.height < 1.5 * a) {
                        n.containerStyleLeft = e.clientX;
                        const s = t.x + t.selectedWidth;
                        e.clientX > s ? n.containerStyleLeft = t.selectedRight > o ? s : s - o : e.clientX - t.x < i && e.clientX < t.x && (n.containerStyleLeft = t.selectedLeft > o ? t.x : t.x + o)
                    } else
                        l > c ? n.containerStyleLeft = e.clientX : l < c && (n.containerStyleTop = t.y - t.height - s - 5,
                        n.containerStyleLeft = e.clientX)
                } else if (2 === a) {
                    n.containerStyleLeft = t.x + t.selectedWidth - i;
                    let e = parseInt(window.getComputedStyle(window.getSelection().anchorNode.parentElement, null).getPropertyValue("font-size"));
                    parseInt(t.height / 2) > e && (n.containerStyleTop = t.y - t.height + e + 2)
                }
                const r = window.innerWidth || document.documentElement.innerWidth
                  , l = window.scrollHeight || document.documentElement.scrollHeight;
                return n.containerStyleLeft + o > r && (n.containerStyleLeft = n.containerStyleLeft - o),
                (n.containerStyleTop + s > l || n.containerStyleTop < 0) && (n.containerStyleTop = t.y - s),
                n
            }(e, n);
            this.domElement.container.style.top = `${parseInt(s.containerStyleTop)}px`,
            this.domElement.container.style.left = `${parseInt(s.containerStyleLeft)}px`
        }
        ;
        cachedReposition = ()=>this.domElement.repositionContainer(this.domElement.cachedMouseEvent);
        addChangeEvents = ()=>{
            window.addEventListener("scroll", this.domElement.cachedReposition),
            window.addEventListener("resize", this.domElement.cachedReposition)
        }
        ;
        removeChangeEvents = ()=>{
            window.removeEventListener("scroll", this.domElement.cachedReposition),
            window.removeEventListener("resize", this.domElement.cachedReposition)
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.container.remove(),
            this.domElement.shadowContainer.remove(),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.container = document.createElement("div"),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy(),
            this.domElement.removeChangeEvents()
        }
    }
    function ag(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "container svelte-1dicgbw")
            },
            m(i, s) {
                yn(i, t, s),
                t.innerHTML = e[1],
                n || (o = In(t, "click", e[0]),
                n = !0)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function rg(e) {
        return [function() {
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: _s
                }
            }),
            t({
                action: "dlTrackUiAction",
                payload: {
                    uiAction: N
                }
            })
        }
        , chrome.i18n.getMessage("notification_keyboard_shortcut_hint", `<span style="color: #006494; text-decoration: underline;">${chrome.i18n.getMessage("notification_keyboard_shortcut_hint_placeholder")}</span>`)]
    }
    class lg extends Oo {
        constructor(e) {
            super(),
            No(this, e, rg, ag, tn, {})
        }
    }
    function cg(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "container svelte-1dicgbw"),
                On(t, "data-qa", "deepl-notification-open-settings-page-writing-link")
            },
            m(i, s) {
                yn(i, t, s),
                t.innerHTML = e[0],
                n || (o = In(t, "click", e[1]),
                n = !0)
            },
            p(e, [n]) {
                1 & n && (t.innerHTML = e[0])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function dg(e, n, o) {
        let {options: i} = n
          , s = i?.settingsPageURL ? i?.settingsPageURL : lc.settings_page;
        let a = ""
          , r = i?.currentDomain ? i.currentDomain : "";
        switch (i.saveAction) {
        case P.disableEverywhere:
            a = chrome.i18n.getMessage("notification_input_translation_disabled_everywhere", `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_input_translation_link_to_settings_placeholder")}</span>`);
            break;
        case P.disablePerSite:
            a = chrome.i18n.getMessage("notification_input_translation_disabled_per_site", [r, `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_input_translation_link_to_settings_placeholder")}</span>`])
        }
        return e.$$set = e=>{
            "options"in e && o(2, i = e.options)
        }
        ,
        [a, function() {
            t({
                action: "dlOpenInternalPage",
                payload: {
                    destination: s
                }
            })
        }
        , i]
    }
    class ug extends Oo {
        constructor(e) {
            super(),
            No(this, e, dg, cg, tn, {
                options: 2
            })
        }
    }
    function mg(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "container svelte-1dicgbw"),
                On(t, "data-qa", "deepl-notification-open-settings-page-reading-link")
            },
            m(i, s) {
                yn(i, t, s),
                t.innerHTML = e[0],
                n || (o = In(t, "click", e[1]),
                n = !0)
            },
            p(e, [n]) {
                1 & n && (t.innerHTML = e[0])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function gg(e, n, o) {
        let {options: i} = n
          , s = i?.settingsPageURL ? i?.settingsPageURL : lc.settings_page;
        let a = ""
          , r = i?.currentDomain ? i.currentDomain : "";
        switch (i.saveAction) {
        case P.disableEverywhere:
            a = chrome.i18n.getMessage("notification_inline_translation_disabled_everywhere", `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_inline_translation_link_to_settings_placeholder")}</span>`);
            break;
        case P.disablePerSite:
            a = chrome.i18n.getMessage("notification_inline_translation_disabled_per_site", [r, `<span style="text-decoration: underline;">${chrome.i18n.getMessage("notification_inline_translation_link_to_settings_placeholder")}</span>`])
        }
        return e.$$set = e=>{
            "options"in e && o(2, i = e.options)
        }
        ,
        [a, function() {
            t({
                action: "dlOpenInternalPage",
                payload: {
                    destination: s
                }
            })
        }
        , i]
    }
    class pg extends Oo {
        constructor(e) {
            super(),
            No(this, e, gg, mg, tn, {
                options: 2
            })
        }
    }
    function hg(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("div"),
                t.textContent = `${chrome.i18n.getMessage("ui_notification_fpt_hide")}`,
                On(t, "class", "container svelte-1hyr8dx"),
                On(t, "data-qa", "deepl-notification-open-settings-page-reading-link")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", e[0]),
                n = !0)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function fg(e) {
        return [function() {
            t({
                action: "dlOpenInternalPage",
                payload: {
                    destination: lc.settings_page
                }
            })
        }
        ]
    }
    class _g extends Oo {
        constructor(e) {
            super(),
            No(this, e, fg, hg, tn, {})
        }
    }
    function wg(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                t.textContent = `${chrome.i18n.getMessage("onboarding_account_successfully_created")}`,
                On(t, "class", "dl-account-created svelte-nuwktw")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    class vg extends Oo {
        constructor(e) {
            super(),
            No(this, e, null, wg, tn, {})
        }
    }
    function bg(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                t.textContent = `${chrome.i18n.getMessage("onboarding_successful_login_notification")}`,
                On(t, "class", "dl-account-created svelte-nuwktw")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    class $g extends Oo {
        constructor(e) {
            super(),
            No(this, e, null, bg, tn, {})
        }
    }
    function Eg(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p;
        var h = e[5];
        function f(e) {
            return {
                props: {
                    options: e[1]
                }
            }
        }
        return h && (r = Un(h, f(e))),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("button"),
                s = kn(),
                a = Cn("div"),
                r && Mo(r.$$.fragment),
                On(o, "class", i = "dl-close-icon " + e[4] + " svelte-yx90c2"),
                On(n, "class", "header"),
                On(n, "notificationtheme", e[4]),
                On(a, "class", l = "body " + e[4] + " svelte-yx90c2"),
                On(t, "class", c = "container " + e[4] + " svelte-yx90c2"),
                Gn(t, "contrast", e[0] === k.fullPageTranslation),
                Gn(t, "success", e[0] === k.accountSuccessfullyCreated || e[0] === k.successfullyLoggedIn)
            },
            m(i, l) {
                yn(i, t, l),
                bn(t, n),
                bn(n, o),
                bn(t, s),
                bn(t, a),
                r && Io(r, a, null),
                m = !0,
                g || (p = In(o, "click", (function() {
                    en(e[2]) && e[2].apply(this, arguments)
                }
                )),
                g = !0)
            },
            p(s, d) {
                e = s,
                (!m || 16 & d && i !== (i = "dl-close-icon " + e[4] + " svelte-yx90c2")) && On(o, "class", i),
                (!m || 16 & d) && On(n, "notificationtheme", e[4]);
                const u = {};
                if (2 & d && (u.options = e[1]),
                32 & d && h !== (h = e[5])) {
                    if (r) {
                        $o();
                        const e = r;
                        xo(e.$$.fragment, 1, 0, (()=>{
                            Ao(e, 1)
                        }
                        )),
                        Eo()
                    }
                    h ? (r = Un(h, f(e)),
                    Mo(r.$$.fragment),
                    yo(r.$$.fragment, 1),
                    Io(r, a, null)) : r = null
                } else
                    h && r.$set(u);
                (!m || 16 & d && l !== (l = "body " + e[4] + " svelte-yx90c2")) && On(a, "class", l),
                (!m || 16 & d && c !== (c = "container " + e[4] + " svelte-yx90c2")) && On(t, "class", c),
                (!m || 17 & d) && Gn(t, "contrast", e[0] === k.fullPageTranslation),
                (!m || 17 & d) && Gn(t, "success", e[0] === k.accountSuccessfullyCreated || e[0] === k.successfullyLoggedIn)
            },
            i(e) {
                m || (r && yo(r.$$.fragment, e),
                co((()=>{
                    m && (u && u.end(1),
                    d = Co(t, jo, {
                        x: 100,
                        duration: 1e3
                    }),
                    d.start())
                }
                )),
                m = !0)
            },
            o(e) {
                r && xo(r.$$.fragment, e),
                d && d.invalidate(),
                u = So(t, jo, {
                    x: 100,
                    duration: 1e3
                }),
                m = !1
            },
            d(e) {
                e && xn(t),
                r && Ao(r),
                e && u && u.end(),
                g = !1,
                p()
            }
        }
    }
    function yg(e) {
        let t, n, o = e[3] && Eg(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[3] ? o ? (o.p(e, n),
                8 & n && yo(o, 1)) : (o = Eg(e),
                o.c(),
                yo(o, 1),
                o.m(t.parentNode, t)) : o && ($o(),
                xo(o, 1, 1, (()=>{
                    o = null
                }
                )),
                Eo())
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function xg(e, t, n) {
        let o, i, {type: s} = t, {options: a} = t, {close: r} = t, l = !1;
        const c = {
            [k.hintKeyboardShortcut]: lg,
            [k.inputTranslation]: ug,
            [k.inlineTranslation]: pg,
            [k.fullPageTranslation]: _g,
            [k.accountSuccessfullyCreated]: vg,
            [k.successfullyLoggedIn]: $g
        };
        return Yn((()=>{
            setTimeout((()=>n(3, l = !0)), 100),
            setTimeout((()=>n(3, l = !1)), 10100),
            setTimeout((()=>r()), 11100)
        }
        )),
        e.$$set = e=>{
            "type"in e && n(0, s = e.type),
            "options"in e && n(1, a = e.options),
            "close"in e && n(2, r = e.close)
        }
        ,
        e.$$.update = ()=>{
            1 & e.$$.dirty && n(5, o = c[s]),
            2 & e.$$.dirty && n(4, i = M[a?.theme] ? M[a?.theme] : "")
        }
        ,
        [s, a, r, l, i, o]
    }
    class Tg extends Oo {
        constructor(e) {
            super(),
            No(this, e, xg, yg, tn, {
                type: 0,
                options: 1,
                close: 2
            })
        }
    }
    class Cg {
        static HTML_TAG_NAME = "deepl-notification";
        static createElement = (e=document)=>{
            const t = e.createElement(Cg.HTML_TAG_NAME)
              , n = new Cg(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = (e,t)=>{
            this.domElement.shadowContainer.style.cssText = `position: fixed; top: 20px; right: 20px; z-index: ${L.deepl_inline_ui.z_index}`,
            this.domElement.mainComponent = new Tg({
                target: this.domElement.shadowContainer,
                props: {
                    type: e,
                    options: t,
                    close: this.cleanupDOM
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy(),
            this.domElement.remove()
        }
    }
    function Sg(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                On(n, "class", "close-button svelte-1jm9kej"),
                On(t, "class", "close-button-container svelte-1jm9kej")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                o || (i = In(n, "click", (function() {
                    en(e[0]) && e[0].apply(this, arguments)
                }
                )),
                o = !0)
            },
            p(t, n) {
                e = t
            },
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function Lg(e) {
        let t, n, o, i, s, a = e[0] && Sg(e);
        const r = e[2].default
          , l = sn(r, e, e[1], null);
        return {
            c() {
                a && a.c(),
                t = kn(),
                n = Cn("div"),
                o = Cn("div"),
                i = kn(),
                l && l.c(),
                On(o, "class", "logo svelte-1jm9kej"),
                On(n, "class", "body svelte-1jm9kej")
            },
            m(e, r) {
                a && a.m(e, r),
                yn(e, t, r),
                yn(e, n, r),
                bn(n, o),
                bn(n, i),
                l && l.m(n, null),
                s = !0
            },
            p(e, [n]) {
                e[0] ? a ? a.p(e, n) : (a = Sg(e),
                a.c(),
                a.m(t.parentNode, t)) : a && (a.d(1),
                a = null),
                l && l.p && (!s || 2 & n) && ln(l, r, e, e[1], s ? rn(r, e[1], n, null) : cn(e[1]), null)
            },
            i(e) {
                s || (yo(l, e),
                s = !0)
            },
            o(e) {
                xo(l, e),
                s = !1
            },
            d(e) {
                a && a.d(e),
                e && xn(t),
                e && xn(n),
                l && l.d(e)
            }
        }
    }
    function kg(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {onClose: s} = t;
        return e.$$set = e=>{
            "onClose"in e && n(0, s = e.onClose),
            "$$scope"in e && n(1, i = e.$$scope)
        }
        ,
        [s, i, o]
    }
    class Mg extends Oo {
        constructor(e) {
            super(),
            No(this, e, kg, Lg, tn, {
                onClose: 0
            })
        }
    }
    function Ig(e) {
        let t, n;
        return {
            c() {
                t = Cn("div"),
                n = Ln(e[0]),
                On(t, "class", "info-msg svelte-17qaccl")
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, [t]) {
                1 & t && Dn(n, e[0])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Ag(e, t, n) {
        let {message: o} = t;
        return e.$$set = e=>{
            "message"in e && n(0, o = e.message)
        }
        ,
        [o]
    }
    class Ng extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ag, Ig, tn, {
                message: 0
            })
        }
    }
    function Og(e) {
        let t, n, o, i, s;
        const a = e[7].default
          , r = sn(a, e, e[6], null);
        return {
            c() {
                t = Cn("button"),
                r && r.c(),
                On(t, "type", "button"),
                On(t, "class", n = dn(e[0]) + " svelte-kw3dl6"),
                t.disabled = e[1],
                On(t, "id", e[5]),
                On(t, "data-qa", e[4]),
                Gn(t, "disabled", e[1]),
                Gn(t, "font-size-sm", "sm" === e[2]),
                Gn(t, "padding-x-md", "md" === e[3]),
                Gn(t, "padding-x-none", "none" === e[3])
            },
            m(n, a) {
                yn(n, t, a),
                r && r.m(t, null),
                o = !0,
                i || (s = [In(t, "click", e[8]), In(t, "mousedown", Nn(An(e[9])))],
                i = !0)
            },
            p(e, [i]) {
                r && r.p && (!o || 64 & i) && ln(r, a, e, e[6], o ? rn(a, e[6], i, null) : cn(e[6]), null),
                (!o || 1 & i && n !== (n = dn(e[0]) + " svelte-kw3dl6")) && On(t, "class", n),
                (!o || 2 & i) && (t.disabled = e[1]),
                (!o || 32 & i) && On(t, "id", e[5]),
                (!o || 16 & i) && On(t, "data-qa", e[4]),
                (!o || 3 & i) && Gn(t, "disabled", e[1]),
                (!o || 5 & i) && Gn(t, "font-size-sm", "sm" === e[2]),
                (!o || 9 & i) && Gn(t, "padding-x-md", "md" === e[3]),
                (!o || 9 & i) && Gn(t, "padding-x-none", "none" === e[3])
            },
            i(e) {
                o || (yo(r, e),
                o = !0)
            },
            o(e) {
                xo(r, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                r && r.d(e),
                i = !1,
                Jt(s)
            }
        }
    }
    function Dg(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {className: s="button-primary"} = t
          , {disabled: a=!1} = t
          , {fontSize: r="default"} = t
          , {paddingX: l} = t
          , {dataQa: c="dl-button"} = t
          , {id: d=""} = t;
        return e.$$set = e=>{
            "className"in e && n(0, s = e.className),
            "disabled"in e && n(1, a = e.disabled),
            "fontSize"in e && n(2, r = e.fontSize),
            "paddingX"in e && n(3, l = e.paddingX),
            "dataQa"in e && n(4, c = e.dataQa),
            "id"in e && n(5, d = e.id),
            "$$scope"in e && n(6, i = e.$$scope)
        }
        ,
        [s, a, r, l, c, d, i, o, function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        ]
    }
    class Rg extends Oo {
        constructor(e) {
            super(),
            No(this, e, Dg, Og, tn, {
                className: 0,
                disabled: 1,
                fontSize: 2,
                paddingX: 3,
                dataQa: 4,
                id: 5
            })
        }
    }
    function Pg(e) {
        let t, n = chrome.i18n.getMessage("ui_fpt_hide_cancel") + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Hg(e) {
        let t, n = chrome.i18n.getMessage("ui_fpt_hide_confirm") + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Gg(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w, v, b, $, E, y, x, T, C, S, L, k, M, I, A, N;
        return S = new Rg({
            props: {
                className: "button-link",
                paddingX: "none",
                $$slots: {
                    default: [Pg]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        S.$on("click", (function() {
            en(e[0]) && e[0].apply(this, arguments)
        }
        )),
        k = new Rg({
            props: {
                className: "button-primary",
                $$slots: {
                    default: [Hg]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        k.$on("click", e[4]),
        I = function(e) {
            let t;
            return {
                p(...n) {
                    t = n,
                    t.forEach((t=>e.push(t)))
                },
                r() {
                    t.forEach((t=>e.splice(e.indexOf(t), 1)))
                }
            }
        }(e[7][0]),
        {
            c() {
                t = Cn("div"),
                n = Cn("p"),
                n.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_heading")}`,
                o = kn(),
                i = Cn("div"),
                s = Cn("div"),
                a = Cn("label"),
                r = Cn("span"),
                l = Cn("input"),
                c = kn(),
                d = Cn("span"),
                d.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_option_domain")}`,
                u = kn(),
                m = Cn("div"),
                g = Cn("label"),
                p = Cn("span"),
                h = Cn("input"),
                f = kn(),
                _ = Cn("span"),
                _.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_option_lang")}`,
                w = kn(),
                v = Cn("div"),
                b = Cn("label"),
                $ = Cn("span"),
                E = Cn("input"),
                y = kn(),
                x = Cn("span"),
                x.textContent = `${chrome.i18n.getMessage("ui_fpt_hide_option_fpt")}`,
                T = kn(),
                C = Cn("div"),
                Mo(S.$$.fragment),
                L = kn(),
                Mo(k.$$.fragment),
                On(n, "class", "font-bold svelte-8fn8ut"),
                On(l, "id", "option-website"),
                On(l, "name", "option"),
                On(l, "type", "radio"),
                l.__value = "website",
                l.value = l.__value,
                On(l, "class", "svelte-8fn8ut"),
                On(d, "class", "label svelte-8fn8ut"),
                On(a, "for", "option-website"),
                On(a, "class", "svelte-8fn8ut"),
                On(s, "class", "option svelte-8fn8ut"),
                On(h, "id", "option-lang"),
                On(h, "type", "radio"),
                On(h, "name", "option"),
                h.__value = "lang",
                h.value = h.__value,
                On(h, "class", "svelte-8fn8ut"),
                On(_, "class", "label svelte-8fn8ut"),
                On(g, "for", "option-lang"),
                On(g, "class", "svelte-8fn8ut"),
                On(m, "class", "option svelte-8fn8ut"),
                On(E, "id", "option-fpt"),
                On(E, "type", "radio"),
                On(E, "name", "option"),
                E.__value = "fpt",
                E.value = E.__value,
                On(E, "class", "svelte-8fn8ut"),
                On(x, "class", "label svelte-8fn8ut"),
                On(b, "for", "option-fpt"),
                On(b, "class", "svelte-8fn8ut"),
                On(v, "class", "option svelte-8fn8ut"),
                On(i, "class", "cancel-container svelte-8fn8ut"),
                On(t, "class", "cancel-translation-body svelte-8fn8ut"),
                On(C, "class", "cancel-translation-footer svelte-8fn8ut"),
                I.p(l, h, E)
            },
            m(I, O) {
                yn(I, t, O),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                bn(i, s),
                bn(s, a),
                bn(a, r),
                bn(r, l),
                l.checked = l.__value === e[1],
                bn(a, c),
                bn(a, d),
                bn(i, u),
                bn(i, m),
                bn(m, g),
                bn(g, p),
                bn(p, h),
                h.checked = h.__value === e[1],
                bn(g, f),
                bn(g, _),
                bn(i, w),
                bn(i, v),
                bn(v, b),
                bn(b, $),
                bn($, E),
                E.checked = E.__value === e[1],
                bn(b, y),
                bn(b, x),
                yn(I, T, O),
                yn(I, C, O),
                Io(S, C, null),
                bn(C, L),
                Io(k, C, null),
                M = !0,
                A || (N = [In(l, "change", e[6]), In(h, "change", e[8]), In(E, "change", e[9])],
                A = !0)
            },
            p(t, [n]) {
                e = t,
                2 & n && (l.checked = l.__value === e[1]),
                2 & n && (h.checked = h.__value === e[1]),
                2 & n && (E.checked = E.__value === e[1]);
                const o = {};
                65536 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                S.$set(o);
                const i = {};
                65536 & n && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                k.$set(i)
            },
            i(e) {
                M || (yo(S.$$.fragment, e),
                yo(k.$$.fragment, e),
                M = !0)
            },
            o(e) {
                xo(S.$$.fragment, e),
                xo(k.$$.fragment, e),
                M = !1
            },
            d(e) {
                e && xn(t),
                e && xn(T),
                e && xn(C),
                Ao(S),
                Ao(k),
                I.r(),
                A = !1,
                Jt(N)
            }
        }
    }
    function zg(e, n, o) {
        let i, s;
        const r = eo("deepl_settings");
        on(e, r, (e=>o(11, s = e)));
        const l = eo("deepl_website_settings");
        on(e, l, (e=>o(10, i = e)));
        let {onClose: c} = n
          , {onCancel: d} = n
          , u = "fpt";
        return e.$$set = e=>{
            "onClose"in e && o(5, c = e.onClose),
            "onCancel"in e && o(0, d = e.onCancel)
        }
        ,
        [d, u, r, l, ()=>{
            const e = {
                hideOption: void 0,
                sourceLang: i.websiteLanguage,
                domainName: i.hostname,
                uiLocation: yd(I.fptHideModal)
            };
            switch (u) {
            case "website":
                un(r, s.blacklistDomains = [...s.blacklistDomains, i.hostname], s),
                e.hideOption = w;
                break;
            case "lang":
                n = i.websiteLanguage,
                o = a,
                "EN" === n ? (un(r, s.languagesForTranslation = {
                    ...s.languagesForTranslation,
                    "EN-GB": o
                }, s),
                un(r, s.languagesForTranslation = {
                    ...s.languagesForTranslation,
                    "EN-US": o
                }, s)) : "PT" === n ? (un(r, s.languagesForTranslation = {
                    ...s.languagesForTranslation,
                    "PT-PT": o
                }, s),
                un(r, s.languagesForTranslation = {
                    ...s.languagesForTranslation,
                    "PT-BR": o
                }, s)) : un(r, s.languagesForTranslation = {
                    ...s.languagesForTranslation,
                    [n]: o
                }, s),
                e.hideOption = v;
                break;
            default:
                e.hideOption = b,
                r.set({
                    enableFullPageTranslation: !1
                })
            }
            var n, o;
            (()=>{
                const e = s.notificationsViewed;
                e && e.fullPageTranslation || (K_(k.fullPageTranslation),
                r.set({
                    notificationsViewed: {
                        ...e,
                        fullPageTranslation: !0
                    }
                }))
            }
            )(),
            t({
                action: "dlTrackFptHide",
                payload: e
            }),
            c()
        }
        , c, function() {
            u = this.__value,
            o(1, u)
        }
        , [[]], function() {
            u = this.__value,
            o(1, u)
        }
        , function() {
            u = this.__value,
            o(1, u)
        }
        ]
    }
    class Bg extends Oo {
        constructor(e) {
            super(),
            No(this, e, zg, Gg, tn, {
                onClose: 5,
                onCancel: 0
            })
        }
    }
    function Ug(e, t, n) {
        const o = e.slice();
        return o[18] = t[n],
        o
    }
    function Wg(e, t, n) {
        const o = e.slice();
        return o[18] = t[n],
        o
    }
    function Fg(e, t, n) {
        const o = e.slice();
        return o[18] = t[n],
        o
    }
    function jg(e, t, n) {
        const o = e.slice();
        return o[18] = t[n],
        o
    }
    function qg(e, t, n) {
        const o = e.slice();
        return o[18] = t[n],
        o
    }
    function Vg(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m = chrome.i18n.getMessage("ui_fpt_hide_checkbox") + "";
        t = new Mg({
            props: {
                onClose: e[0],
                $$slots: {
                    default: [op]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let g = e[6] && ip(e);
        return {
            c() {
                Mo(t.$$.fragment),
                n = kn(),
                g && g.c(),
                o = kn(),
                i = Cn("div"),
                s = Cn("label"),
                a = Cn("input"),
                r = kn(),
                l = Ln(m),
                On(a, "type", "checkbox"),
                a.disabled = e[6],
                On(a, "class", "svelte-4orid1"),
                On(s, "class", "svelte-4orid1"),
                On(i, "class", "footer svelte-4orid1"),
                Gn(i, "hasError", e[6])
            },
            m(m, p) {
                Io(t, m, p),
                yn(m, n, p),
                g && g.m(m, p),
                yn(m, o, p),
                yn(m, i, p),
                bn(i, s),
                bn(s, a),
                bn(s, r),
                bn(s, l),
                c = !0,
                d || (u = In(s, "click", e[15]),
                d = !0)
            },
            p(e, n) {
                const s = {};
                1 & n && (s.onClose = e[0]),
                536870932 & n && (s.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(s),
                e[6] ? g ? (g.p(e, n),
                64 & n && yo(g, 1)) : (g = ip(e),
                g.c(),
                yo(g, 1),
                g.m(o.parentNode, o)) : g && ($o(),
                xo(g, 1, 1, (()=>{
                    g = null
                }
                )),
                Eo()),
                (!c || 64 & n) && (a.disabled = e[6]),
                (!c || 64 & n) && Gn(i, "hasError", e[6])
            },
            i(e) {
                c || (yo(t.$$.fragment, e),
                yo(g),
                c = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                xo(g),
                c = !1
            },
            d(e) {
                Ao(t, e),
                e && xn(n),
                g && g.d(e),
                e && xn(o),
                e && xn(i),
                d = !1,
                u()
            }
        }
    }
    function Zg(e) {
        let t, n, o, i;
        return t = new Mg({
            props: {
                onClose: e[0]
            }
        }),
        o = new Bg({
            props: {
                onClose: e[0],
                onCancel: e[13]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment),
                n = kn(),
                Mo(o.$$.fragment)
            },
            m(e, s) {
                Io(t, e, s),
                yn(e, n, s),
                Io(o, e, s),
                i = !0
            },
            p(e, n) {
                const i = {};
                1 & n && (i.onClose = e[0]),
                t.$set(i);
                const s = {};
                1 & n && (s.onClose = e[0]),
                8 & n && (s.onCancel = e[13]),
                o.$set(s)
            },
            i(e) {
                i || (yo(t.$$.fragment, e),
                yo(o.$$.fragment, e),
                i = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                xo(o.$$.fragment, e),
                i = !1
            },
            d(e) {
                Ao(t, e),
                e && xn(n),
                Ao(o, e)
            }
        }
    }
    function Kg(e) {
        let t, n;
        return t = new Mg({
            props: {
                $$slots: {
                    default: [$p]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870966 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Yg(e) {
        let t, n;
        return t = new Mg({
            props: {
                $$slots: {
                    default: [Cp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870928 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Xg(e) {
        let t, n;
        return t = new Mg({
            props: {
                $$slots: {
                    default: [Sp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Qg(e) {
        let t, n;
        return t = new Mg({
            props: {
                $$slots: {
                    default: [Lp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Jg(e) {
        let t, n;
        return t = new Mg({
            props: {
                $$slots: {
                    default: [kp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function ep(e) {
        let t, n;
        return t = new Mg({
            props: {
                $$slots: {
                    default: [Mp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function tp(e) {
        let t, n;
        return t = new Mg({
            props: {
                $$slots: {
                    default: [Ip]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                536870912 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function np(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                t.textContent = `${chrome.i18n.getMessage("ui_fpt_translate_button")}`,
                On(t, "class", "svelte-4orid1")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function op(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m;
        return l = new wr({
            props: {
                value: e[2].selectedTargetLanguage,
                variant: "alternate",
                alignRight: !1
            }
        }),
        l.$on("selection", e[14]),
        u = new Rg({
            props: {
                className: "btn-primary",
                paddingX: "md",
                dataQa: "dl-button-translate-page",
                $$slots: {
                    default: [np]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        u.$on("click", e[10]),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Ln(e[4]),
                i = kn(),
                s = Cn("div"),
                a = kn(),
                r = Cn("div"),
                Mo(l.$$.fragment),
                c = kn(),
                d = Cn("div"),
                Mo(u.$$.fragment),
                On(n, "class", "website-lang svelte-4orid1"),
                On(s, "class", "translate-to-arrow svelte-4orid1"),
                On(r, "class", "language-switch svelte-4orid1"),
                On(t, "class", "language-selection svelte-4orid1"),
                On(d, "class", "translate-button svelte-4orid1")
            },
            m(e, g) {
                yn(e, t, g),
                bn(t, n),
                bn(n, o),
                bn(t, i),
                bn(t, s),
                bn(t, a),
                bn(t, r),
                Io(l, r, null),
                yn(e, c, g),
                yn(e, d, g),
                Io(u, d, null),
                m = !0
            },
            p(e, t) {
                (!m || 16 & t) && Dn(o, e[4]);
                const n = {};
                4 & t && (n.value = e[2].selectedTargetLanguage),
                l.$set(n);
                const i = {};
                536870912 & t && (i.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                u.$set(i)
            },
            i(e) {
                m || (yo(l.$$.fragment, e),
                yo(u.$$.fragment, e),
                m = !0)
            },
            o(e) {
                xo(l.$$.fragment, e),
                xo(u.$$.fragment, e),
                m = !1
            },
            d(e) {
                e && xn(t),
                Ao(l),
                e && xn(c),
                e && xn(d),
                Ao(u)
            }
        }
    }
    function ip(e) {
        let t, n, o;
        return n = new _a({
            props: {
                error: e[1].error
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "error-container svelte-4orid1")
            },
            m(e, i) {
                yn(e, t, i),
                Io(n, t, null),
                o = !0
            },
            p(e, t) {
                const o = {};
                2 & t && (o.error = e[1].error),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function sp(e) {
        let t, n = Zo(chrome.i18n.getMessage("ui_notice_no_translate_language", e[4]), ["strong"]), o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = cp(Wg(e, n, t));
        return {
            c() {
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                t = Mn()
            },
            m(e, n) {
                for (let t = 0; t < o.length; t += 1)
                    o[t] && o[t].m(e, n);
                yn(e, t, n)
            },
            p(e, i) {
                if (16 & i) {
                    let s;
                    for (n = Zo(chrome.i18n.getMessage("ui_notice_no_translate_language", e[4]), ["strong"]),
                    s = 0; s < n.length; s += 1) {
                        const a = Wg(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = cp(a),
                        o[s].c(),
                        o[s].m(t.parentNode, t))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                Tn(o, e),
                e && xn(t)
            }
        }
    }
    function ap(e) {
        let t;
        function n(e, t) {
            return e[5] ? up : dp
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = Mn()
            },
            m(e, n) {
                i.m(e, n),
                yn(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && xn(t)
            }
        }
    }
    function rp(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p(e, o) {
                16 & o && n !== (n = e[18].text + "") && Dn(t, n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function lp(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = Cn("strong"),
                n = Ln(o),
                On(t, "class", "svelte-4orid1")
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                16 & t && o !== (o = e[18].text + "") && Dn(n, o)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function cp(e) {
        let t;
        function n(e, t) {
            return "strong" === e[18].block ? lp : rp
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = Mn()
            },
            m(e, n) {
                i.m(e, n),
                yn(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && xn(t)
            }
        }
    }
    function dp(e) {
        let t, n = Zo(chrome.i18n.getMessage("ui_notice_no_translate_website", e[1].hostname), ["strong"]), o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = pp(Fg(e, n, t));
        return {
            c() {
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                t = Mn()
            },
            m(e, n) {
                for (let t = 0; t < o.length; t += 1)
                    o[t] && o[t].m(e, n);
                yn(e, t, n)
            },
            p(e, i) {
                if (2 & i) {
                    let s;
                    for (n = Zo(chrome.i18n.getMessage("ui_notice_no_translate_website", e[1].hostname), ["strong"]),
                    s = 0; s < n.length; s += 1) {
                        const a = Fg(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = pp(a),
                        o[s].c(),
                        o[s].m(t.parentNode, t))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                Tn(o, e),
                e && xn(t)
            }
        }
    }
    function up(e) {
        let t, n = Zo(chrome.i18n.getMessage("ui_notice_no_translate_website_and_language", [e[1].hostname, e[4]]), ["strong"]), o = [];
        for (let t = 0; t < n.length; t += 1)
            o[t] = _p(jg(e, n, t));
        return {
            c() {
                for (let e = 0; e < o.length; e += 1)
                    o[e].c();
                t = Mn()
            },
            m(e, n) {
                for (let t = 0; t < o.length; t += 1)
                    o[t] && o[t].m(e, n);
                yn(e, t, n)
            },
            p(e, i) {
                if (18 & i) {
                    let s;
                    for (n = Zo(chrome.i18n.getMessage("ui_notice_no_translate_website_and_language", [e[1].hostname, e[4]]), ["strong"]),
                    s = 0; s < n.length; s += 1) {
                        const a = jg(e, n, s);
                        o[s] ? o[s].p(a, i) : (o[s] = _p(a),
                        o[s].c(),
                        o[s].m(t.parentNode, t))
                    }
                    for (; s < o.length; s += 1)
                        o[s].d(1);
                    o.length = n.length
                }
            },
            d(e) {
                Tn(o, e),
                e && xn(t)
            }
        }
    }
    function mp(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p(e, o) {
                2 & o && n !== (n = e[18].text + "") && Dn(t, n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function gp(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = Cn("strong"),
                n = Ln(o),
                On(t, "class", "svelte-4orid1")
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                2 & t && o !== (o = e[18].text + "") && Dn(n, o)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function pp(e) {
        let t;
        function n(e, t) {
            return "strong" === e[18].block ? gp : mp
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = Mn()
            },
            m(e, n) {
                i.m(e, n),
                yn(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && xn(t)
            }
        }
    }
    function hp(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p(e, o) {
                18 & o && n !== (n = e[18].text + "") && Dn(t, n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function fp(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = Cn("strong"),
                n = Ln(o),
                On(t, "class", "svelte-4orid1")
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                18 & t && o !== (o = e[18].text + "") && Dn(n, o)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function _p(e) {
        let t;
        function n(e, t) {
            return "strong" === e[18].block ? fp : hp
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = Mn()
            },
            m(e, n) {
                i.m(e, n),
                yn(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && xn(t)
            }
        }
    }
    function wp(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function vp(e) {
        let t, n, o, i, s = e[18].text + "";
        return {
            c() {
                t = Cn("span"),
                n = Ln(s),
                On(t, "class", "link svelte-4orid1")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                o || (i = In(t, "click", e[9]),
                o = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function bp(e) {
        let t;
        let n = function(e, t) {
            return "settingsLink" === e[18].block ? vp : wp
        }(e)
          , o = n(e);
        return {
            c() {
                o.c(),
                t = Mn()
            },
            m(e, n) {
                o.m(e, n),
                yn(e, t, n)
            },
            p(e, t) {
                o.p(e, t)
            },
            d(e) {
                o.d(e),
                e && xn(t)
            }
        }
    }
    function $p(e) {
        let t, n, o, i, s;
        function a(e, t) {
            return 6 & t && (o = null),
            null == o && (o = !!e[2].blacklistDomains.includes(e[1].hostname)),
            o ? ap : e[5] ? sp : void 0
        }
        let r = a(e, -1)
          , l = r && r(e)
          , c = Zo(chrome.i18n.getMessage("ui_notice_no_translate_change_option"), ["settingsLink"])
          , d = [];
        for (let t = 0; t < c.length; t += 1)
            d[t] = bp(Ug(e, c, t));
        return {
            c() {
                t = Cn("div"),
                n = Cn("p"),
                l && l.c(),
                i = kn(),
                s = Cn("p");
                for (let e = 0; e < d.length; e += 1)
                    d[e].c();
                On(n, "class", "svelte-4orid1"),
                On(s, "class", "svelte-4orid1")
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n),
                l && l.m(n, null),
                bn(t, i),
                bn(t, s);
                for (let e = 0; e < d.length; e += 1)
                    d[e] && d[e].m(s, null)
            },
            p(e, t) {
                if (r === (r = a(e, t)) && l ? l.p(e, t) : (l && l.d(1),
                l = r && r(e),
                l && (l.c(),
                l.m(n, null))),
                512 & t) {
                    let n;
                    for (c = Zo(chrome.i18n.getMessage("ui_notice_no_translate_change_option"), ["settingsLink"]),
                    n = 0; n < c.length; n += 1) {
                        const o = Ug(e, c, n);
                        d[n] ? d[n].p(o, t) : (d[n] = bp(o),
                        d[n].c(),
                        d[n].m(s, null))
                    }
                    for (; n < d.length; n += 1)
                        d[n].d(1);
                    d.length = c.length
                }
            },
            d(e) {
                e && xn(t),
                l && l.d(),
                Tn(d, e)
            }
        }
    }
    function Ep(e) {
        let t, n = e[18].text + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p(e, o) {
                16 & o && n !== (n = e[18].text + "") && Dn(t, n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function yp(e) {
        let t, n, o = e[18].text + "";
        return {
            c() {
                t = Cn("strong"),
                n = Ln(o),
                On(t, "class", "svelte-4orid1")
            },
            m(e, o) {
                yn(e, t, o),
                bn(t, n)
            },
            p(e, t) {
                16 & t && o !== (o = e[18].text + "") && Dn(n, o)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function xp(e) {
        let t;
        function n(e, t) {
            return "strong" === e[18].block ? yp : Ep
        }
        let o = n(e)
          , i = o(e);
        return {
            c() {
                i.c(),
                t = Mn()
            },
            m(e, n) {
                i.m(e, n),
                yn(e, t, n)
            },
            p(e, s) {
                o === (o = n(e)) && i ? i.p(e, s) : (i.d(1),
                i = o(e),
                i && (i.c(),
                i.m(t.parentNode, t)))
            },
            d(e) {
                i.d(e),
                e && xn(t)
            }
        }
    }
    function Tp(e) {
        let t, n = chrome.i18n.getMessage("full_page_translation_show_original") + "";
        return {
            c() {
                t = Ln(n)
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Cp(e) {
        let t, n, o, i, s, a, r = Zo(chrome.i18n.getMessage("ui_translated_automatically", e[4]), ["strong"]), l = [];
        for (let t = 0; t < r.length; t += 1)
            l[t] = xp(qg(e, r, t));
        return s = new Rg({
            props: {
                className: "button-reload",
                $$slots: {
                    default: [Tp]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        s.$on("click", e[11]),
        {
            c() {
                t = Cn("div"),
                n = Cn("p");
                for (let e = 0; e < l.length; e += 1)
                    l[e].c();
                o = kn(),
                i = Cn("p"),
                Mo(s.$$.fragment),
                On(n, "class", "mb-none svelte-4orid1"),
                On(i, "class", "svelte-4orid1")
            },
            m(e, r) {
                yn(e, t, r),
                bn(t, n);
                for (let e = 0; e < l.length; e += 1)
                    l[e] && l[e].m(n, null);
                bn(t, o),
                bn(t, i),
                Io(s, i, null),
                a = !0
            },
            p(e, t) {
                if (16 & t) {
                    let o;
                    for (r = Zo(chrome.i18n.getMessage("ui_translated_automatically", e[4]), ["strong"]),
                    o = 0; o < r.length; o += 1) {
                        const i = qg(e, r, o);
                        l[o] ? l[o].p(i, t) : (l[o] = xp(i),
                        l[o].c(),
                        l[o].m(n, null))
                    }
                    for (; o < l.length; o += 1)
                        l[o].d(1);
                    l.length = r.length
                }
                const o = {};
                536870912 & t && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                s.$set(o)
            },
            i(e) {
                a || (yo(s.$$.fragment, e),
                a = !0)
            },
            o(e) {
                xo(s.$$.fragment, e),
                a = !1
            },
            d(e) {
                e && xn(t),
                Tn(l, e),
                Ao(s)
            }
        }
    }
    function Sp(e) {
        let t;
        return {
            c() {
                t = Cn("p"),
                t.textContent = `${chrome.i18n.getMessage("full_page_translation_ongoing_translation")}`,
                On(t, "class", "translation-in-progress svelte-4orid1")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Lp(e) {
        let t;
        return {
            c() {
                t = Cn("p"),
                t.textContent = `${chrome.i18n.getMessage("full_page_translation_auto_detect_lang")}`,
                On(t, "class", "translation-in-progress svelte-4orid1")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function kp(e) {
        let t, n;
        return t = new Ng({
            props: {
                message: chrome.i18n.getMessage("full_page_translation_info_google_translate")
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p: Kt,
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Mp(e) {
        let t, n;
        return t = new Ng({
            props: {
                message: chrome.i18n.getMessage("full_page_translation_no_website_data")
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p: Kt,
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Ip(e) {
        let t, n, o;
        return n = new rc({}),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "translation-in-progress svelte-4orid1")
            },
            m(e, i) {
                yn(e, t, i),
                Io(n, t, null),
                o = !0
            },
            p: Kt,
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function Ap(e) {
        let t, n, o, i, s, a;
        const l = [tp, ep, Jg, Qg, Xg, Yg, Kg, Zg, Vg]
          , c = [];
        function d(e, t) {
            return 2 & t && (n = null),
            38 & t && (o = null),
            null == e[1] ? 0 : (null == n && (n = !(0 !== Object.keys(e[1]).length)),
            n ? 1 : e[1].isGoogleTranslatedActive ? 2 : e[1].translationState === r.ongoingAutoDetection ? 3 : e[1].translationState === r.ongoingTranslation ? 4 : e[1].translationState === r.isTranslationComplete ? 5 : (null == o && (o = !(!e[2].blacklistDomains.includes(e[1].hostname) && !e[5])),
            o ? 6 : e[3] ? 7 : e[1].websiteLanguage ? 8 : -1))
        }
        return ~(i = d(e, -1)) && (s = c[i] = l[i](e)),
        {
            c() {
                t = Cn("div"),
                s && s.c(),
                On(t, "class", "full-page-translation svelte-4orid1")
            },
            m(e, n) {
                yn(e, t, n),
                ~i && c[i].m(t, null),
                a = !0
            },
            p(e, [n]) {
                let o = i;
                i = d(e, n),
                i === o ? ~i && c[i].p(e, n) : (s && ($o(),
                xo(c[o], 1, 1, (()=>{
                    c[o] = null
                }
                )),
                Eo()),
                ~i ? (s = c[i],
                s ? s.p(e, n) : (s = c[i] = l[i](e),
                s.c()),
                yo(s, 1),
                s.m(t, null)) : s = null)
            },
            i(e) {
                a || (yo(s),
                a = !0)
            },
            o(e) {
                xo(s),
                a = !1
            },
            d(e) {
                e && xn(t),
                ~i && c[i].d()
            }
        }
    }
    function Np(e, n, o) {
        let i, s, l, c;
        const d = eo("deepl_settings");
        on(e, d, (e=>o(2, c = e)));
        const u = eo("deepl_website_settings");
        on(e, u, (e=>o(1, l = e)));
        let g = f
          , {onClose: p} = n;
        let h, _, w = !1;
        return e.$$set = e=>{
            "onClose"in e && o(0, p = e.onClose)
        }
        ,
        e.$$.update = ()=>{
            2 & e.$$.dirty && o(6, i = l && l.error),
            6 & e.$$.dirty && o(5, s = gt(l.websiteLanguage, c.languagesForTranslation, a)),
            6 & e.$$.dirty && l && c && rt(c.selectedTargetLanguage, l.websiteLanguage),
            2 & e.$$.dirty && l && (l.isSupportedLanguage ? o(4, h = chrome.i18n.getMessage(`supported_languages_${l.websiteLanguage}`)) : o(4, h = chrome.i18n.getMessage("supported_languages_EN"))),
            4098 & e.$$.dirty && l && l.hostname && l.hostname !== _ && (o(12, _ = l.hostname),
            t({
                action: "dlTrackExtensionOpenedEvent",
                payload: {
                    domainName: _,
                    extensionContext: g
                }
            }))
        }
        ,
        [p, l, c, w, h, s, i, d, u, function() {
            t({
                action: "dlOpenInternalPage",
                payload: {
                    destination: lc.settings_page
                }
            })
        }
        , function() {
            0 == c.isTargetLanguageConfirmed && d.set({
                isTargetLanguageConfirmed: !0
            }),
            Sv(l.websiteLanguage, m)
        }
        , ()=>{
            u.update({
                translationState: r.showOriginal
            })
        }
        , _, ()=>{
            o(3, w = !1)
        }
        , e=>d.set({
            selectedTargetLanguage: e.detail.selectedOption.value,
            isTargetLanguageConfirmed: !0,
            regionalVariant: e.detail.selectedOption.regionalVariant
        }), ()=>{
            i || o(3, w = !w)
        }
        ]
    }
    class Op extends Oo {
        constructor(e) {
            super(),
            No(this, e, Np, Ap, tn, {
                onClose: 0
            })
        }
    }
    function Dp(e) {
        let t, n, o;
        return n = new Op({
            props: {
                onClose: e[0]
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "app-popup svelte-1u84xsz"),
                On(t, "style", `z-index: ${e[3].z_index}`)
            },
            m(e, i) {
                yn(e, t, i),
                Io(n, t, null),
                o = !0
            },
            p(e, t) {
                const o = {};
                1 & t && (o.onClose = e[0]),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function Rp(e) {
        let t, n, o = !0 === e[1].isLoggedIn && !0 === e[1].isProUser && e[2] && e[2].isValidUrlForPopup && Dp(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, [n]) {
                !0 === e[1].isLoggedIn && !0 === e[1].isProUser && e[2] && e[2].isValidUrlForPopup ? o ? (o.p(e, n),
                6 & n && yo(o, 1)) : (o = Dp(e),
                o.c(),
                yo(o, 1),
                o.m(t.parentNode, t)) : o && ($o(),
                xo(o, 1, 1, (()=>{
                    o = null
                }
                )),
                Eo())
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function Pp(e, t, n) {
        let o, i;
        on(e, Po, (e=>n(1, o = e))),
        on(e, cr, (e=>n(2, i = e))),
        Jn("deepl_settings", Po),
        Jn("deepl_website_settings", cr);
        let {onClose: s} = t;
        const {deepl_inline_ui: a} = L;
        return e.$$set = e=>{
            "onClose"in e && n(0, s = e.onClose)
        }
        ,
        [s, o, i, a]
    }
    class Hp extends Oo {
        constructor(e) {
            super(),
            No(this, e, Pp, Rp, tn, {
                onClose: 0
            })
        }
    }
    class Gp {
        static HTML_TAG_NAME = "deepl-page-load-popup";
        static createElement = (e=document)=>{
            const t = e.createElement(Gp.HTML_TAG_NAME)
              , n = new Gp(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = ()=>{
            this.domElement.mainComponent = new Hp({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.cleanupDOM
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    const zp = e=>({})
      , Bp = e=>({})
      , Up = e=>({})
      , Wp = e=>({})
      , Fp = e=>({})
      , jp = e=>({})
      , qp = e=>({})
      , Vp = e=>({})
      , Zp = e=>({})
      , Kp = e=>({})
      , Yp = e=>({})
      , Xp = e=>({});
    function Qp(e) {
        let t, n;
        const o = e[3].warning
          , i = sn(o, e, e[2], Xp);
        return {
            c() {
                t = Cn("div"),
                i && i.c(),
                On(t, "class", "alert-warning svelte-j33vxw")
            },
            m(e, o) {
                yn(e, t, o),
                i && i.m(t, null),
                n = !0
            },
            p(e, t) {
                i && i.p && (!n || 4 & t) && ln(i, o, e, e[2], n ? rn(o, e[2], t, Yp) : cn(e[2]), Xp)
            },
            i(e) {
                n || (yo(i, e),
                n = !0)
            },
            o(e) {
                xo(i, e),
                n = !1
            },
            d(e) {
                e && xn(t),
                i && i.d(e)
            }
        }
    }
    function Jp(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w, v, b, $, E = e[1] && Qp(e);
        const y = e[3].header
          , x = sn(y, e, e[2], Kp)
          , T = e[3].usp1
          , C = sn(T, e, e[2], Vp)
          , S = e[3].usp2
          , L = sn(S, e, e[2], jp)
          , k = e[3].usp3
          , M = sn(k, e, e[2], Wp)
          , I = e[3].graphics
          , A = sn(I, e, e[2], Bp);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("span"),
                i = kn(),
                s = Cn("button"),
                a = kn(),
                E && E.c(),
                r = kn(),
                l = Cn("h2"),
                x && x.c(),
                c = kn(),
                d = Cn("ul"),
                u = Cn("li"),
                C && C.c(),
                m = kn(),
                g = Cn("li"),
                L && L.c(),
                p = kn(),
                h = Cn("li"),
                M && M.c(),
                f = kn(),
                _ = Cn("div"),
                A && A.c(),
                On(o, "class", "logo svelte-j33vxw"),
                On(s, "class", "close-button svelte-j33vxw"),
                On(n, "class", "header svelte-j33vxw"),
                On(l, "class", "header svelte-j33vxw"),
                On(u, "class", "svelte-j33vxw"),
                On(g, "class", "svelte-j33vxw"),
                On(h, "class", "svelte-j33vxw"),
                On(d, "class", "ups svelte-j33vxw"),
                On(_, "class", "graphics"),
                On(t, "class", "dl-onboarding-container svelte-j33vxw")
            },
            m(w, y) {
                yn(w, t, y),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s),
                bn(t, a),
                E && E.m(t, null),
                bn(t, r),
                bn(t, l),
                x && x.m(l, null),
                bn(t, c),
                bn(t, d),
                bn(d, u),
                C && C.m(u, null),
                bn(d, m),
                bn(d, g),
                L && L.m(g, null),
                bn(d, p),
                bn(d, h),
                M && M.m(h, null),
                bn(t, f),
                bn(t, _),
                A && A.m(_, null),
                v = !0,
                b || ($ = In(s, "click", (function() {
                    en(e[0]) && e[0].apply(this, arguments)
                }
                )),
                b = !0)
            },
            p(n, [o]) {
                (e = n)[1] ? E ? (E.p(e, o),
                2 & o && yo(E, 1)) : (E = Qp(e),
                E.c(),
                yo(E, 1),
                E.m(t, r)) : E && ($o(),
                xo(E, 1, 1, (()=>{
                    E = null
                }
                )),
                Eo()),
                x && x.p && (!v || 4 & o) && ln(x, y, e, e[2], v ? rn(y, e[2], o, Zp) : cn(e[2]), Kp),
                C && C.p && (!v || 4 & o) && ln(C, T, e, e[2], v ? rn(T, e[2], o, qp) : cn(e[2]), Vp),
                L && L.p && (!v || 4 & o) && ln(L, S, e, e[2], v ? rn(S, e[2], o, Fp) : cn(e[2]), jp),
                M && M.p && (!v || 4 & o) && ln(M, k, e, e[2], v ? rn(k, e[2], o, Up) : cn(e[2]), Wp),
                A && A.p && (!v || 4 & o) && ln(A, I, e, e[2], v ? rn(I, e[2], o, zp) : cn(e[2]), Bp)
            },
            i(e) {
                v || (yo(E),
                yo(x, e),
                yo(C, e),
                yo(L, e),
                yo(M, e),
                yo(A, e),
                w || co((()=>{
                    w = Co(t, jo, {
                        y: -5,
                        duration: 500
                    }),
                    w.start()
                }
                )),
                v = !0)
            },
            o(e) {
                xo(E),
                xo(x, e),
                xo(C, e),
                xo(L, e),
                xo(M, e),
                xo(A, e),
                v = !1
            },
            d(e) {
                e && xn(t),
                E && E.d(),
                x && x.d(e),
                C && C.d(e),
                L && L.d(e),
                M && M.d(e),
                A && A.d(e),
                b = !1,
                $()
            }
        }
    }
    function eh(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t
          , {onClose: s} = t
          , {hasWarning: a} = t;
        return e.$$set = e=>{
            "onClose"in e && n(0, s = e.onClose),
            "hasWarning"in e && n(1, a = e.hasWarning),
            "$$scope"in e && n(2, i = e.$$scope)
        }
        ,
        [s, a, i, o]
    }
    class th extends Oo {
        constructor(e) {
            super(),
            No(this, e, eh, Jp, tn, {
                onClose: 0,
                hasWarning: 1
            })
        }
    }
    function nh(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_title") + "";
        return {
            c() {
                t = Cn("span"),
                On(t, "slot", "header")
            },
            m(e, o) {
                yn(e, t, o),
                t.innerHTML = n
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function oh(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_usp_1") + "";
        return {
            c() {
                t = Cn("span"),
                On(t, "slot", "usp1")
            },
            m(e, o) {
                yn(e, t, o),
                t.innerHTML = n
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function ih(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_usp_2") + "";
        return {
            c() {
                t = Cn("span"),
                On(t, "slot", "usp2")
            },
            m(e, o) {
                yn(e, t, o),
                t.innerHTML = n
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function sh(e) {
        let t, n = chrome.i18n.getMessage("ui_gdocs_onboarding_usp_3") + "";
        return {
            c() {
                t = Cn("span"),
                On(t, "slot", "usp3")
            },
            m(e, o) {
                yn(e, t, o),
                t.innerHTML = n
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function ah(e) {
        let t, n, o = chrome.i18n.getMessage("ui_gdocs_onboarding_image_text") + "";
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                On(n, "class", "text-box svelte-9mu2ye"),
                On(t, "slot", "graphics"),
                On(t, "class", "onboarding-graphics svelte-9mu2ye")
            },
            m(e, i) {
                yn(e, t, i),
                bn(t, n),
                n.innerHTML = o
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function rh(e) {
        let t, n;
        return t = new th({
            props: {
                onClose: e[0],
                $$slots: {
                    graphics: [ah],
                    usp3: [sh],
                    usp2: [ih],
                    usp1: [oh],
                    header: [nh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, [n]) {
                const o = {};
                1 & n && (o.onClose = e[0]),
                4 & n && (o.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function lh(e, n, o) {
        let {onClose: i} = n;
        return Yn((()=>{
            t({
                action: "dlTrackOnboardingModalShown",
                payload: {
                    nicheIntegration: K.gdocs
                }
            })
        }
        )),
        e.$$set = e=>{
            "onClose"in e && o(0, i = e.onClose)
        }
        ,
        [i]
    }
    class ch extends Oo {
        constructor(e) {
            super(),
            No(this, e, lh, rh, tn, {
                onClose: 0
            })
        }
    }
    function dh(e) {
        let t, n, o, i, s, a, r, l, c, d, u;
        o = new xi({
            props: {
                tooltip: e[4],
                zIndex: "10000000000",
                $$slots: {
                    default: [uh]
                },
                $$scope: {
                    ctx: e
                }
            }
        });
        let m = e[3] && mh(e);
        return r = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("ui_gdocs_turn_off"),
                zIndex: "10000000000",
                $$slots: {
                    default: [ph]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = Cn("div"),
                n = Cn("button"),
                Mo(o.$$.fragment),
                i = kn(),
                m && m.c(),
                s = kn(),
                a = Cn("button"),
                Mo(r.$$.fragment),
                On(n, "class", "dl-icon-circle dl-icon svelte-82gmye"),
                On(a, "class", "dl-icon-circle dl-on-off-icon svelte-82gmye"),
                On(a, "data-qa", "deepl-inline-translate-menu-icon"),
                On(t, "class", "dl-gdocs-icon svelte-82gmye"),
                Pn(t, "top", e[5].top),
                Pn(t, "left", e[5].left),
                Gn(t, "has-deepl-write", e[3])
            },
            m(l, g) {
                yn(l, t, g),
                bn(t, n),
                Io(o, n, null),
                bn(t, i),
                m && m.m(t, null),
                bn(t, s),
                bn(t, a),
                Io(r, a, null),
                c = !0,
                d || (u = [In(n, "click", e[7]), In(n, "mouseenter", e[24]), In(a, "click", e[10]), In(a, "mouseenter", e[27])],
                d = !0)
            },
            p(e, n) {
                const i = {};
                16 & n[0] && (i.tooltip = e[4]),
                16777216 & n[1] && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                o.$set(i),
                e[3] ? m ? (m.p(e, n),
                8 & n[0] && yo(m, 1)) : (m = mh(e),
                m.c(),
                yo(m, 1),
                m.m(t, s)) : m && ($o(),
                xo(m, 1, 1, (()=>{
                    m = null
                }
                )),
                Eo());
                const a = {};
                16777216 & n[1] && (a.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                r.$set(a),
                (!c || 32 & n[0]) && Pn(t, "top", e[5].top),
                (!c || 32 & n[0]) && Pn(t, "left", e[5].left),
                (!c || 8 & n[0]) && Gn(t, "has-deepl-write", e[3])
            },
            i(e) {
                c || (yo(o.$$.fragment, e),
                yo(m),
                yo(r.$$.fragment, e),
                l || co((()=>{
                    l = Co(t, Fo, {
                        x: -5,
                        duration: 300
                    }),
                    l.start()
                }
                )),
                c = !0)
            },
            o(e) {
                xo(o.$$.fragment, e),
                xo(m),
                xo(r.$$.fragment, e),
                c = !1
            },
            d(e) {
                e && xn(t),
                Ao(o),
                m && m.d(),
                Ao(r),
                d = !1,
                Jt(u)
            }
        }
    }
    function uh(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                On(t, "class", "svelte-82gmye")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function mh(e) {
        let t, n, o, i, s;
        return n = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("ui_gdocs_deepl_write"),
                zIndex: "10000000000",
                $$slots: {
                    default: [gh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = Cn("button"),
                Mo(n.$$.fragment),
                On(t, "class", "dl-icon-circle dl-write-icon svelte-82gmye")
            },
            m(a, r) {
                yn(a, t, r),
                Io(n, t, null),
                o = !0,
                i || (s = [In(t, "click", e[25]), In(t, "mouseenter", e[26])],
                i = !0)
            },
            p(e, t) {
                const o = {};
                16777216 & t[1] && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n),
                i = !1,
                Jt(s)
            }
        }
    }
    function gh(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                On(t, "class", "svelte-82gmye")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function ph(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                On(t, "class", "svelte-82gmye")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function hh(e) {
        let t, n;
        return t = new ch({
            props: {
                onClose: e[28]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n[0] && (o.onClose = e[28]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function fh(e) {
        let t, n, o, i = e[6] && !e[0] && !e[1] && dh(e), s = e[2] && hh(e);
        return {
            c() {
                i && i.c(),
                t = kn(),
                s && s.c(),
                n = Mn()
            },
            m(e, a) {
                i && i.m(e, a),
                yn(e, t, a),
                s && s.m(e, a),
                yn(e, n, a),
                o = !0
            },
            p(e, o) {
                !e[6] || e[0] || e[1] ? i && ($o(),
                xo(i, 1, 1, (()=>{
                    i = null
                }
                )),
                Eo()) : i ? (i.p(e, o),
                67 & o[0] && yo(i, 1)) : (i = dh(e),
                i.c(),
                yo(i, 1),
                i.m(t.parentNode, t)),
                e[2] ? s ? (s.p(e, o),
                4 & o[0] && yo(s, 1)) : (s = hh(e),
                s.c(),
                yo(s, 1),
                s.m(n.parentNode, n)) : s && ($o(),
                xo(s, 1, 1, (()=>{
                    s = null
                }
                )),
                Eo())
            },
            i(e) {
                o || (yo(i),
                yo(s),
                o = !0)
            },
            o(e) {
                xo(i),
                xo(s),
                o = !1
            },
            d(e) {
                i && i.d(e),
                e && xn(t),
                s && s.d(e),
                e && xn(n)
            }
        }
    }
    function _h(e, n, o) {
        let i, s;
        on(e, Po, (e=>o(23, s = e))),
        Jn("deepl_settings", Po),
        Jn("deepl_website_settings", cr);
        let a, r, l, c, d, u, {replaceData: m} = n, {contentProcessBuildingBlocks: g} = n, {deeplWriteTrackingData: p={
            lang: "",
            sourceLength: 0,
            targetLength: 0,
            nicheIntegration: K.gdocs,
            error: ""
        }} = n, h = !0, f = !1, _ = !1, w = "", v = "", b = !1, $ = "", E = {
            top: 0,
            left: 0
        };
        async function y(e, n, o) {
            if ("dlTriggerTranslationShortcut" === e.action)
                T(),
                t({
                    action: "dlTrackUseOfShortcut",
                    payload: {
                        shortcutType: A,
                        location: I.inlineTranslationTriggerIcon,
                        nicheIntegration: K.gdocs
                    }
                }),
                o()
        }
        const x = e=>{
            c = Y.translate,
            e && (d = e),
            Fe()
        }
          , T = ()=>{
            x(s.selectedTargetLanguage)
        }
          , C = ()=>{
            c = Y.write,
            Fe()
        }
          , S = ()=>{
            const {shouldBeOutOfViewport: e, newPosition: {left: t, top: n}} = Ve();
            e !== f && o(1, f = e),
            o(5, E.left = `${Math.round(t)}px`, E),
            o(5, E.top = `${Math.round(n)}px`, E)
        }
        ;
        function L(e) {
            t({
                action: "dlTrackIconHover",
                payload: {
                    uiLocation: e,
                    domainName: window.location.host,
                    nicheIntegration: K.gdocs
                }
            })
        }
        const k = ()=>{
            a = setInterval((()=>{
                const e = je()
                  , n = !e.text;
                !n && h && S(),
                n && !h && (()=>{
                    if (!s.isInlineHighlighterShown) {
                        Po.set({
                            isInlineHighlighterShown: !0
                        });
                        try {
                            t({
                                action: "dltrackCloseInlineHighlighter",
                                payload: {
                                    trigger: Z.outside_click
                                }
                            })
                        } catch (e) {
                            console.error(e)
                        }
                    }
                }
                )(),
                o(0, h = n),
                w !== e.text && o(21, w = e.text)
            }
            ), 300)
        }
          , M = ()=>{
            const e = document.querySelector("#docs-instant-bubble");
            l = new MutationObserver((()=>{
                S()
            }
            ));
            return l.observe(e, {
                attributes: !0,
                childList: !1,
                characterData: !1
            }),
            ()=>l.unobserve()
        }
          , N = async e=>{
            if (c && ("ClipboardEvent" === e.constructor.name || e.constructor.toString().includes("ClipboardEvent"))) {
                switch (c) {
                case Y.translate:
                    Mv({
                        event: e,
                        targetLang: d
                    });
                    break;
                case Y.write:
                    Iv({
                        event: e,
                        lang: v
                    })
                }
                c = void 0
            }
        }
          , O = ()=>{
            k(),
            (()=>{
                const e = document.querySelector("#kix-appview");
                r = new MutationObserver((()=>{
                    document.querySelector("#docs-instant-bubble") && (S(),
                    M())
                }
                )),
                r.observe(e, {
                    attributes: !1,
                    childList: !0,
                    characterData: !1
                })
            }
            )(),
            (()=>{
                const e = new ResizeObserver((()=>{
                    S()
                }
                ));
                e.observe(document.body)
            }
            )(),
            document.querySelector("#kix-appview .kix-appview-editor").addEventListener("scroll", S),
            (()=>{
                const {editable: e} = We();
                e.addEventListener("copy", N)
            }
            )()
        }
          , D = ()=>{
            r && r.disconnect(),
            l && l.disconnect(),
            a && clearInterval(a),
            document.querySelector("#kix-appview .kix-appview-editor").removeEventListener("scroll", S),
            (()=>{
                const {editable: e} = We();
                e.removeEventListener("copy", N)
            }
            )()
        }
        ;
        Yn((()=>{
            O(),
            s.isGDocsOnboardingShown || (o(2, _ = !0),
            un(Po, s.isGDocsOnboardingShown = !0, s)),
            chrome.runtime.onMessage.addListener(y),
            t({
                action: "dlCheckCommandShortcuts"
            }).then((e=>o(22, $ = e ? e.filter((e=>e.name == A))[0].shortcut : "")))
        }
        )),
        Xn((()=>{
            D()
        }
        ));
        return e.$$set = e=>{
            "replaceData"in e && o(12, m = e.replaceData),
            "contentProcessBuildingBlocks"in e && o(11, g = e.contentProcessBuildingBlocks),
            "deeplWriteTrackingData"in e && o(13, p = e.deeplWriteTrackingData)
        }
        ,
        e.$$.update = ()=>{
            if (8388608 & e.$$.dirty[0] && o(6, i = !s.blacklistDomainsForReading.includes("docs.google.com") && s.enableInlineTranslation),
            2097152 & e.$$.dirty[0] && (async e=>{
                const t = await dt(e);
                v = t,
                o(3, b = pt(v))
            }
            )(w),
            4194304 & e.$$.dirty[0]) {
                let e = chrome.i18n.getMessage("ui_gdocs_translate_tooltip_2");
                o(4, u = $ ? `${e} (${$})` : e)
            }
        }
        ,
        [h, f, _, b, u, E, i, T, C, L, ()=>{
            A_(K.gdocs),
            t({
                action: "dlTrackInlineSettingOpened",
                payload: {
                    uiFunction: G,
                    uiLocation: I.inlineTranslationTriggerIcon,
                    nicheIntegration: K.gdocs
                }
            })
        }
        , g, m, p, e=>{
            o(11, g = e)
        }
        , ()=>g, ()=>{
            m && ot(m)
        }
        , x, ()=>{
            Vv({
                eventType: me,
                ...p
            })
        }
        , ()=>{
            Vv({
                eventType: ge,
                ...p
            })
        }
        , e=>{
            switch (e) {
            case ye:
                Vv({
                    eventType: pe,
                    ...p
                });
                break;
            case xe:
                t({
                    action: "dlTrackGDocsMaxCharExceededTryProClicked",
                    payload: {
                        sourceLang: p.lang,
                        targetLang: p.lang,
                        sourceLength: p.sourceLength
                    }
                })
            }
        }
        , w, $, s, ()=>L(I.inlineTranslationTriggerIcon), ()=>C(), ()=>L(I.deeplWriteIcon), ()=>L(I.inlineTranslationSettingsIcon), ()=>o(2, _ = !1)]
    }
    class wh extends Oo {
        constructor(e) {
            super(),
            No(this, e, _h, fh, tn, {
                replaceData: 12,
                contentProcessBuildingBlocks: 11,
                deeplWriteTrackingData: 13,
                setContentProcessBuildingBlocks: 14,
                getContentProcessBuildingBlocks: 15,
                applyReplacement: 16,
                requestTranslation: 17,
                trackDeeplWriteInsertCopy: 18,
                trackDeeplWriteDiscardCopy: 19,
                trackMaxCharExceeded: 20
            }, null, [-1, -1])
        }
        get setContentProcessBuildingBlocks() {
            return this.$$.ctx[14]
        }
        get getContentProcessBuildingBlocks() {
            return this.$$.ctx[15]
        }
        get applyReplacement() {
            return this.$$.ctx[16]
        }
        get requestTranslation() {
            return this.$$.ctx[17]
        }
        get trackDeeplWriteInsertCopy() {
            return this.$$.ctx[18]
        }
        get trackDeeplWriteDiscardCopy() {
            return this.$$.ctx[19]
        }
        get trackMaxCharExceeded() {
            return this.$$.ctx[20]
        }
    }
    class vh {
        static HTML_TAG_NAME = "deepl-gdocs-icon";
        static createElement = (e=document)=>{
            const t = e.createElement(vh.HTML_TAG_NAME)
              , n = new vh(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.setReplaceData = n.setReplaceData,
            t.applyReplacement = n.applyReplacement,
            t.requestNewTranslation = n.requestNewTranslation,
            t.setDeeplWriteTrackingData = n.setDeeplWriteTrackingData,
            t.trackDeeplWriteInsertCopy = n.trackDeeplWriteInsertCopy,
            t.trackDeeplWriteDiscardCopy = n.trackDeeplWriteDiscardCopy,
            t.trackMaxCharExceeded = n.trackMaxCharExceeded,
            t.setContentProcessBuildingBlocks = n.setContentProcessBuildingBlocks,
            t.getContentProcessBuildingBlocks = n.getContentProcessBuildingBlocks,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowRoot.addEventListener("mouseup", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.domElement.shadowRoot.addEventListener("mousedown", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = ()=>{
            this.domElement.mainComponent = new wh({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.domElement.cleanupDOM
                }
            })
        }
        ;
        setReplaceData = e=>{
            this.domElement.mainComponent.$$set({
                replaceData: e
            })
        }
        ;
        setDeeplWriteTrackingData = e=>{
            this.domElement.mainComponent.$$set({
                deeplWriteTrackingData: e
            })
        }
        ;
        trackDeeplWriteInsertCopy = ()=>this.domElement.mainComponent.trackDeeplWriteInsertCopy();
        trackDeeplWriteDiscardCopy = ()=>this.domElement.mainComponent.trackDeeplWriteDiscardCopy();
        trackMaxCharExceeded = e=>this.domElement.mainComponent.trackMaxCharExceeded(e);
        applyReplacement = ()=>{
            this.domElement.mainComponent.applyReplacement()
        }
        ;
        requestNewTranslation = e=>{
            this.domElement.mainComponent.requestTranslation(e)
        }
        ;
        setContentProcessBuildingBlocks = e=>this.domElement.mainComponent.setContentProcessBuildingBlocks(e);
        getContentProcessBuildingBlocks = ()=>this.domElement.mainComponent.getContentProcessBuildingBlocks();
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function bh(e) {
        let t, n, o, i, s, a = chrome.i18n.getMessage("ui_gslides_write_cta") + "";
        return {
            c() {
                t = Cn("button"),
                n = Ln(a),
                On(t, "class", "action-button svelte-11lof0z"),
                t.disabled = o = !pt(e[3])
            },
            m(o, a) {
                yn(o, t, a),
                bn(t, n),
                i || (s = In(t, "click", (function() {
                    en(e[1]) && e[1].apply(this, arguments)
                }
                )),
                i = !0)
            },
            p(n, i) {
                e = n,
                8 & i && o !== (o = !pt(e[3])) && (t.disabled = o)
            },
            d(e) {
                e && xn(t),
                i = !1,
                s()
            }
        }
    }
    function $h(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w, v;
        return a = new wr({
            props: {
                disabled: e[2],
                websiteSettings: e[6],
                value: e[3],
                showSortCode: !0,
                showRegionalVariants: !1,
                extraPadding: !0
            }
        }),
        a.$on("selection", e[10]),
        u = new wr({
            props: {
                disabled: e[2],
                websiteSettings: e[6],
                value: e[4].selectedTargetLanguage,
                extraPadding: !0
            }
        }),
        u.$on("selection", e[11]),
        f = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("ui_gslides_write_tooltip"),
                zIndex: "10000000000",
                multiline: !0,
                $$slots: {
                    default: [bh]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("p"),
                o.textContent = `${chrome.i18n.getMessage("ui_gslides_translate_from")}`,
                i = kn(),
                s = Cn("div"),
                Mo(a.$$.fragment),
                r = kn(),
                l = Cn("p"),
                l.textContent = `${chrome.i18n.getMessage("ui_gslides_translate_into")}`,
                c = kn(),
                d = Cn("div"),
                Mo(u.$$.fragment),
                m = kn(),
                g = Cn("button"),
                g.textContent = `${chrome.i18n.getMessage("ui_gslides_translate_cta")}`,
                p = kn(),
                h = Cn("div"),
                Mo(f.$$.fragment),
                On(o, "class", "svelte-11lof0z"),
                On(s, "class", "dropdown svelte-11lof0z"),
                On(l, "class", "svelte-11lof0z"),
                On(d, "class", "dropdown svelte-11lof0z"),
                On(g, "class", "action-button svelte-11lof0z"),
                On(n, "class", "translate-container svelte-11lof0z"),
                On(h, "class", "write-container svelte-11lof0z"),
                On(t, "class", "dl-gslides-toolbar svelte-11lof0z")
            },
            m(b, $) {
                yn(b, t, $),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s),
                Io(a, s, null),
                bn(n, r),
                bn(n, l),
                bn(n, c),
                bn(n, d),
                Io(u, d, null),
                bn(n, m),
                bn(n, g),
                bn(t, p),
                bn(t, h),
                Io(f, h, null),
                _ = !0,
                w || (v = In(g, "click", (function() {
                    en(e[0]) && e[0].apply(this, arguments)
                }
                )),
                w = !0)
            },
            p(t, [n]) {
                e = t;
                const o = {};
                4 & n && (o.disabled = e[2]),
                8 & n && (o.value = e[3]),
                a.$set(o);
                const i = {};
                4 & n && (i.disabled = e[2]),
                16 & n && (i.value = e[4].selectedTargetLanguage),
                u.$set(i);
                const s = {};
                4106 & n && (s.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                f.$set(s)
            },
            i(e) {
                _ || (yo(a.$$.fragment, e),
                yo(u.$$.fragment, e),
                yo(f.$$.fragment, e),
                _ = !0)
            },
            o(e) {
                xo(a.$$.fragment, e),
                xo(u.$$.fragment, e),
                xo(f.$$.fragment, e),
                _ = !1
            },
            d(e) {
                e && xn(t),
                Ao(a),
                Ao(u),
                Ao(f),
                w = !1,
                v()
            }
        }
    }
    function Eh(e, t, n) {
        let o;
        const i = eo("deepl_settings");
        on(e, i, (e=>n(4, o = e)));
        const s = eo("deepl_website_settings");
        let {onTranslateSelection: a} = t
          , {onImproveSelection: r} = t
          , {isLoading: l} = t
          , {sourceLang: c} = t
          , {manualSourceLang: d} = t;
        const u = e=>{
            n(9, d = e)
        }
          , m = e=>{
            un(i, o.selectedTargetLanguage = e, o)
        }
        ;
        return e.$$set = e=>{
            "onTranslateSelection"in e && n(0, a = e.onTranslateSelection),
            "onImproveSelection"in e && n(1, r = e.onImproveSelection),
            "isLoading"in e && n(2, l = e.isLoading),
            "sourceLang"in e && n(3, c = e.sourceLang),
            "manualSourceLang"in e && n(9, d = e.manualSourceLang)
        }
        ,
        [a, r, l, c, o, i, s, u, m, d, e=>{
            u(e.detail.selectedOption.value)
        }
        , e=>{
            m(e.detail.selectedOption.value)
        }
        ]
    }
    class yh extends Oo {
        constructor(e) {
            super(),
            No(this, e, Eh, $h, tn, {
                onTranslateSelection: 0,
                onImproveSelection: 1,
                isLoading: 2,
                sourceLang: 3,
                manualSourceLang: 9
            })
        }
    }
    function xh(e) {
        let t, n, o, i, s, a, r;
        function l(t) {
            e[12](t)
        }
        let c = {
            onTranslateSelection: e[7],
            onImproveSelection: e[8],
            isLoading: e[4],
            sourceLang: e[1]
        };
        return void 0 !== e[0] && (c.manualSourceLang = e[0]),
        n = new yh({
            props: c
        }),
        oo.push((()=>ko(n, "manualSourceLang", l))),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "dl-gslides-toolbar svelte-1mendym")
            },
            m(o, i) {
                yn(o, t, i),
                Io(n, t, null),
                s = !0,
                a || (r = [mn(wi.call(null, t, {
                    isShadow: !0
                })), In(t, "click_outside", e[13])],
                a = !0)
            },
            p(e, t) {
                const i = {};
                16 & t && (i.isLoading = e[4]),
                2 & t && (i.sourceLang = e[1]),
                !o && 1 & t && (o = !0,
                i.manualSourceLang = e[0],
                uo((()=>o = !1))),
                n.$set(i)
            },
            i(e) {
                s || (yo(n.$$.fragment, e),
                co((()=>{
                    s && (i || (i = Lo(t, Fo, {}, !0)),
                    i.run(1))
                }
                )),
                s = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                i || (i = Lo(t, Fo, {}, !1)),
                i.run(0),
                s = !1
            },
            d(e) {
                e && xn(t),
                Ao(n),
                e && i && i.end(),
                a = !1,
                Jt(r)
            }
        }
    }
    function Th(e) {
        let t, n;
        return t = new rc({
            props: {
                small: !0
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Ch(e) {
        let t, n, o, i, s, a, r, l = e[3] && xh(e), c = e[4] && Th();
        return {
            c() {
                t = Cn("div"),
                l && l.c(),
                n = kn(),
                o = Cn("button"),
                c && c.c(),
                On(o, "class", "dl-gslides-button svelte-1mendym"),
                On(o, "title", "Translate with DeepL"),
                Gn(o, "is-loading", e[4]),
                On(t, "class", "dl-gslides-icon svelte-1mendym"),
                Pn(t, "bottom", e[2].bottom + "px"),
                Pn(t, "right", e[2].right + "px")
            },
            m(i, d) {
                yn(i, t, d),
                l && l.m(t, null),
                bn(t, n),
                bn(t, o),
                c && c.m(o, null),
                s = !0,
                a || (r = In(o, "click", e[6]),
                a = !0)
            },
            p(e, [i]) {
                e[3] ? l ? (l.p(e, i),
                8 & i && yo(l, 1)) : (l = xh(e),
                l.c(),
                yo(l, 1),
                l.m(t, n)) : l && ($o(),
                xo(l, 1, 1, (()=>{
                    l = null
                }
                )),
                Eo()),
                e[4] ? c ? 16 & i && yo(c, 1) : (c = Th(),
                c.c(),
                yo(c, 1),
                c.m(o, null)) : c && ($o(),
                xo(c, 1, 1, (()=>{
                    c = null
                }
                )),
                Eo()),
                (!s || 16 & i) && Gn(o, "is-loading", e[4]),
                (!s || 4 & i) && Pn(t, "bottom", e[2].bottom + "px"),
                (!s || 4 & i) && Pn(t, "right", e[2].right + "px")
            },
            i(e) {
                s || (yo(l),
                yo(c),
                co((()=>{
                    s && (i || (i = Lo(o, Fo, {}, !0)),
                    i.run(1))
                }
                )),
                s = !0)
            },
            o(e) {
                xo(l),
                xo(c),
                i || (i = Lo(o, Fo, {}, !1)),
                i.run(0),
                s = !1
            },
            d(e) {
                e && xn(t),
                l && l.d(),
                c && c.d(),
                e && i && i.end(),
                a = !1,
                r()
            }
        }
    }
    const Sh = "application/x-vnd.google-docs-drawings-object+wrapped"
      , Lh = "application/x-vnd.google-docs-document-slice-clip+wrapped";
    function kh(e, t, n) {
        let o;
        const i = eo("deepl_settings");
        on(e, i, (e=>n(15, o = e)));
        let s, {registerActionIconCallbacks: a} = t, {clearActionIconCallbacks: r} = t, {sourceLang: l} = t, {manualSourceLang: c} = t, {charLimitError: d} = t, u = {
            bottom: 0,
            right: 0
        }, m = !1, g = !1;
        const p = ()=>{
            const e = document.querySelector("#canvas-container");
            if (e) {
                const t = e.getBoundingClientRect()
                  , o = t.right > window.innerWidth ? 0 : window.innerWidth - t.right
                  , i = t.bottom > window.innerHeight ? 0 : window.innerHeight - t.bottom;
                n(2, u = {
                    bottom: i + 16,
                    right: o + 16
                })
            } else
                n(2, u = {
                    bottom: 16,
                    right: 16
                })
        }
          , h = async(e,t)=>{
            try {
                let i = e.clipboardData.getData(Sh)
                  , a = e.clipboardData.getData(Lh);
                if (i) {
                    n(4, g = !0);
                    const e = await (async(e,t)=>{
                        const n = JSON.parse(e)
                          , i = JSON.parse(n.data)
                          , s = i.unresolved
                          , {entities: a, sentencesToTranslate: r} = wt(s)
                          , c = await Av({
                            targetLang: o.selectedTargetLanguage,
                            sourceLang: l,
                            sentences: r,
                            mode: t
                        })
                          , d = [];
                        for (let e = 0; e < a.length; e++)
                            vt({
                                entity: a[e],
                                translatedSentences: c,
                                modifiersToDelete: d
                            });
                        return i.unresolved = i.unresolved.filter((e=>!d.includes(e))),
                        n.data = JSON.stringify(i),
                        JSON.stringify(n)
                    }
                    )(i, t);
                    hi("keydown", document.querySelector("svg > g > g[pointer-events=visiblePainted]")),
                    f(e),
                    n(4, g = !1)
                } else if (a) {
                    n(4, g = !0);
                    const i = await (async(e,t)=>await Nv({
                        event: e,
                        sourceLang: l,
                        targetLang: o.selectedTargetLanguage,
                        mode: t
                    }))(e, t);
                    hi("keydown", document.querySelector("svg > g > g[pointer-events=visiblePainted]")),
                    _(i),
                    n(4, g = !1)
                } else
                    await _t(),
                    s = t,
                    n(3, m = !1),
                    Fe()
            } catch (e) {
                e.name === qt ? n(9, d = Ie) : e.name === jt && n(9, d = Ae),
                console.error(e),
                n(4, g = !1)
            }
        }
          , f = e=>{
            const {editable: t} = We();
            let n;
            if (Be())
                n = new ClipboardEvent("paste",{
                    dataType: Sh,
                    data: e
                });
            else {
                const t = new DataTransfer;
                t.setData(Sh, e),
                n = new ClipboardEvent("paste",{
                    bubbles: !0,
                    clipboardData: t
                })
            }
            t.dispatchEvent(n)
        }
          , _ = e=>{
            const {editable: t} = We();
            let n;
            if (Be())
                n = new ClipboardEvent("paste",{
                    dataType: Lh,
                    data: e
                });
            else {
                const t = new DataTransfer;
                t.setData(Lh, e),
                n = new ClipboardEvent("paste",{
                    bubbles: !0,
                    clipboardData: t
                })
            }
            t.dispatchEvent(n)
        }
        ;
        Yn((()=>{
            setTimeout((()=>{
                const {editable: e} = We();
                e.addEventListener("copy", (e=>{
                    if (s) {
                        const t = s;
                        s = void 0,
                        h(e, t)
                    }
                }
                ))
            }
            ), 2e3),
            a({
                repositionActionIcon: p
            })
        }
        )),
        Xn((()=>{
            r()
        }
        ));
        return e.$$set = e=>{
            "registerActionIconCallbacks"in e && n(10, a = e.registerActionIconCallbacks),
            "clearActionIconCallbacks"in e && n(11, r = e.clearActionIconCallbacks),
            "sourceLang"in e && n(1, l = e.sourceLang),
            "manualSourceLang"in e && n(0, c = e.manualSourceLang),
            "charLimitError"in e && n(9, d = e.charLimitError)
        }
        ,
        [c, l, u, m, g, i, ()=>{
            n(3, m = !m)
        }
        , ()=>{
            s = Y.translate,
            n(3, m = !1),
            Fe()
        }
        , ()=>{
            s = Y.write,
            n(3, m = !1),
            Fe()
        }
        , d, a, r, function(e) {
            c = e,
            n(0, c)
        }
        , ()=>{
            n(3, m = !1)
        }
        ]
    }
    class Mh extends Oo {
        constructor(e) {
            super(),
            No(this, e, kh, Ch, tn, {
                registerActionIconCallbacks: 10,
                clearActionIconCallbacks: 11,
                sourceLang: 1,
                manualSourceLang: 0,
                charLimitError: 9
            })
        }
    }
    function Ih(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("button"),
                n = Cn("span"),
                On(n, "class", "svelte-1s97uq0"),
                On(t, "class", "switch svelte-1s97uq0"),
                On(t, "data-qa", e[1]),
                Gn(t, "checked", e[0])
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                o || (i = In(t, "click", e[2]),
                o = !0)
            },
            p(e, [n]) {
                2 & n && On(t, "data-qa", e[1]),
                1 & n && Gn(t, "checked", e[0])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function Ah(e, t, n) {
        let {checked: o=!1} = t
          , {qaRoot: i="dl-switch"} = t;
        const s = Qn();
        return e.$$set = e=>{
            "checked"in e && n(0, o = e.checked),
            "qaRoot"in e && n(1, i = e.qaRoot)
        }
        ,
        [o, i, function() {
            s("change", {
                checked: !o
            })
        }
        ]
    }
    class Nh extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ah, Ih, tn, {
                checked: 0,
                qaRoot: 1
            })
        }
    }
    function Oh(e) {
        let t, n, o, i, s, a, r, l, c, d, u = e[1] && Dh();
        return r = new Nh({
            props: {
                checked: e[3].isGSlidesEnabled
            }
        }),
        r.$on("change", e[8]),
        {
            c() {
                t = Cn("div"),
                u && u.c(),
                n = kn(),
                o = Cn("div"),
                i = Cn("div"),
                i.textContent = `${chrome.i18n.getMessage("ui_gslides_toggle_customization")}`,
                s = kn(),
                a = Cn("div"),
                Mo(r.$$.fragment),
                On(i, "class", "legend"),
                On(a, "class", "switch svelte-xn8ifx"),
                On(o, "class", "turn-on-off-panel svelte-xn8ifx"),
                On(t, "class", "dl-gslides-top-icon-modal svelte-xn8ifx"),
                Pn(t, "left", e[2] + "px")
            },
            m(m, g) {
                yn(m, t, g),
                u && u.m(t, null),
                bn(t, n),
                bn(t, o),
                bn(o, i),
                bn(o, s),
                bn(o, a),
                Io(r, a, null),
                l = !0,
                c || (d = [mn(wi.call(null, t, {
                    isShadow: !0
                })), In(t, "click_outside", e[9])],
                c = !0)
            },
            p(e, o) {
                e[1] ? u ? u.p(e, o) : (u = Dh(),
                u.c(),
                u.m(t, n)) : u && (u.d(1),
                u = null);
                const i = {};
                8 & o && (i.checked = e[3].isGSlidesEnabled),
                r.$set(i),
                (!l || 4 & o) && Pn(t, "left", e[2] + "px")
            },
            i(e) {
                l || (yo(r.$$.fragment, e),
                l = !0)
            },
            o(e) {
                xo(r.$$.fragment, e),
                l = !1
            },
            d(e) {
                e && xn(t),
                u && u.d(),
                Ao(r),
                c = !1,
                Jt(d)
            }
        }
    }
    function Dh(e) {
        let t, n, o, i, s, a, r, l, c, d;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("p"),
                o.textContent = `${chrome.i18n.getMessage("ui_gslides_onboarding_title")}`,
                i = kn(),
                s = Cn("div"),
                s.textContent = `${chrome.i18n.getMessage("ui_gslides_onboarding_label_beta")}`,
                a = kn(),
                r = Cn("div"),
                l = Cn("div"),
                l.textContent = `${chrome.i18n.getMessage("ui_gslides_onboarding_ups_1")}`,
                c = kn(),
                d = Cn("div"),
                d.textContent = `${chrome.i18n.getMessage("ui_gslides_onboarding_ups_2")}`,
                On(o, "class", "svelte-xn8ifx"),
                On(s, "class", "beta-label svelte-xn8ifx"),
                On(n, "class", "header svelte-xn8ifx"),
                On(l, "class", "ups-item svelte-xn8ifx"),
                On(d, "class", "ups-item svelte-xn8ifx"),
                On(r, "class", "ups-list"),
                On(t, "class", "onboarding svelte-xn8ifx")
            },
            m(e, u) {
                yn(e, t, u),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s),
                bn(t, a),
                bn(t, r),
                bn(r, l),
                bn(r, c),
                bn(r, d)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Rh(e) {
        let t, n, o, i, s, a, r = e[0] && Oh(e);
        return {
            c() {
                t = Cn("button"),
                n = kn(),
                r && r.c(),
                o = Mn(),
                On(t, "class", "dl-gslides-top-icon svelte-xn8ifx"),
                Pn(t, "left", e[2] + "px"),
                Gn(t, "onboarding-pending", !e[3].isGSlidesOnboardingShown)
            },
            m(l, c) {
                yn(l, t, c),
                yn(l, n, c),
                r && r.m(l, c),
                yn(l, o, c),
                i = !0,
                s || (a = In(t, "click", e[7]),
                s = !0)
            },
            p(e, [n]) {
                (!i || 4 & n) && Pn(t, "left", e[2] + "px"),
                (!i || 8 & n) && Gn(t, "onboarding-pending", !e[3].isGSlidesOnboardingShown),
                e[0] ? r ? (r.p(e, n),
                1 & n && yo(r, 1)) : (r = Oh(e),
                r.c(),
                yo(r, 1),
                r.m(o.parentNode, o)) : r && ($o(),
                xo(r, 1, 1, (()=>{
                    r = null
                }
                )),
                Eo())
            },
            i(e) {
                i || (yo(r),
                i = !0)
            },
            o(e) {
                xo(r),
                i = !1
            },
            d(e) {
                e && xn(t),
                e && xn(n),
                r && r.d(e),
                e && xn(o),
                s = !1,
                a()
            }
        }
    }
    function Ph(e, n, o) {
        let i;
        const s = eo("deepl_settings");
        on(e, s, (e=>o(3, i = e)));
        let a, {registerTopIconCallbacks: r} = n, {clearTopIconCallbacks: l} = n, c = !1, d = !1;
        const u = ()=>{
            const e = document.querySelector(".docs-titlebar-buttons #docs-presence-container");
            if (e) {
                const t = e.getBoundingClientRect();
                o(2, a = t.left - 45)
            }
        }
        ;
        Yn((()=>{
            u(),
            r({
                repositionTopIcon: u
            })
        }
        )),
        Xn((()=>{
            l()
        }
        ));
        return e.$$set = e=>{
            "registerTopIconCallbacks"in e && o(5, r = e.registerTopIconCallbacks),
            "clearTopIconCallbacks"in e && o(6, l = e.clearTopIconCallbacks)
        }
        ,
        e.$$.update = ()=>{
            3 & e.$$.dirty && c && d && t({
                action: "dlTrackOnboardingModalShown",
                payload: {
                    nicheIntegration: K.gslides
                }
            })
        }
        ,
        [c, d, a, i, s, r, l, ()=>{
            o(0, c = !0),
            i.isGSlidesOnboardingShown || (un(s, i.isGSlidesOnboardingShown = !0, i),
            o(1, d = !0))
        }
        , e=>un(s, i.isGSlidesEnabled = e.detail.checked, i), ()=>{
            o(1, d = !1),
            o(0, c = !1)
        }
        ]
    }
    class Hh extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ph, Rh, tn, {
                registerTopIconCallbacks: 5,
                clearTopIconCallbacks: 6
            })
        }
    }
    function Gh(e) {
        let t, n, o, i, s, a, r, l, c, d;
        return {
            c() {
                t = Cn("h2"),
                t.textContent = `${chrome.i18n.getMessage("ui_gslides_limit_reached_anonymous_title")}`,
                n = kn(),
                o = Cn("p"),
                o.textContent = `${chrome.i18n.getMessage("ui_gslides_limit_reached_anonymous_content")}`,
                i = kn(),
                s = Cn("div"),
                a = Cn("button"),
                a.textContent = `${chrome.i18n.getMessage("ui_gslides_limit_reached_anonymous_cta_login")}`,
                r = kn(),
                l = Cn("button"),
                l.textContent = `${chrome.i18n.getMessage("ui_gslides_limit_reached_anonymous_cta_signup")}`,
                On(t, "class", "svelte-zcwhek"),
                On(o, "class", "svelte-zcwhek"),
                On(a, "class", "btn-secondary svelte-zcwhek"),
                On(l, "class", "btn-primary svelte-zcwhek"),
                On(s, "class", "buttons-row svelte-zcwhek")
            },
            m(u, m) {
                yn(u, t, m),
                yn(u, n, m),
                yn(u, o, m),
                yn(u, i, m),
                yn(u, s, m),
                bn(s, a),
                bn(s, r),
                bn(s, l),
                c || (d = [In(a, "click", e[3]), In(l, "click", e[2])],
                c = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(n),
                e && xn(o),
                e && xn(i),
                e && xn(s),
                c = !1,
                Jt(d)
            }
        }
    }
    function zh(e) {
        let t, n, o, i, s, a, r, l;
        return {
            c() {
                t = Cn("h2"),
                t.textContent = `${chrome.i18n.getMessage("ui_gslides_limit_reached_logged_in_title")}`,
                n = kn(),
                o = Cn("p"),
                o.textContent = `${chrome.i18n.getMessage("ui_gslides_limit_reached_logged_in_content")}`,
                i = kn(),
                s = Cn("div"),
                a = Cn("button"),
                a.textContent = `${chrome.i18n.getMessage("ui_gslides_limit_reached_logged_in_cta")}`,
                On(t, "class", "svelte-zcwhek"),
                On(o, "class", "svelte-zcwhek"),
                On(a, "class", "btn-primary svelte-zcwhek"),
                On(s, "class", "buttons-row svelte-zcwhek")
            },
            m(c, d) {
                yn(c, t, d),
                yn(c, n, d),
                yn(c, o, d),
                yn(c, i, d),
                yn(c, s, d),
                bn(s, a),
                r || (l = In(a, "click", e[2]),
                r = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(n),
                e && xn(o),
                e && xn(i),
                e && xn(s),
                r = !1,
                l()
            }
        }
    }
    function Bh(e) {
        let t, n, o, i, s, a;
        function r(e, t) {
            return e[0] === Ae ? zh : e[0] === Ie ? Gh : void 0
        }
        let l = r(e)
          , c = l && l(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("button"),
                i = kn(),
                c && c.c(),
                On(o, "class", "close-button svelte-zcwhek"),
                On(n, "class", "dl-char-limit-error-container svelte-zcwhek"),
                On(t, "class", "dl-char-limit-error-overlay svelte-zcwhek")
            },
            m(r, l) {
                yn(r, t, l),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                c && c.m(n, null),
                s || (a = [In(o, "click", (function() {
                    en(e[1]) && e[1].apply(this, arguments)
                }
                )), mn(wi.call(null, n, {
                    isShadow: !0
                })), In(n, "click_outside", (function() {
                    en(e[1]) && e[1].apply(this, arguments)
                }
                ))],
                s = !0)
            },
            p(t, [o]) {
                l === (l = r(e = t)) && c ? c.p(e, o) : (c && c.d(1),
                c = l && l(e),
                c && (c.c(),
                c.m(n, null)))
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                c && c.d(),
                s = !1,
                Jt(a)
            }
        }
    }
    function Uh(e, n, o) {
        let {charLimitError: i} = n
          , {closeModal: s} = n;
        let a = !1;
        return e.$$set = e=>{
            "charLimitError"in e && o(0, i = e.charLimitError),
            "closeModal"in e && o(1, s = e.closeModal)
        }
        ,
        [i, s, ()=>{
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: gs,
                    utmContent: "gslides_customization"
                }
            }),
            s()
        }
        , ()=>{
            a || (t({
                action: "dlTrackUILocationClicked",
                payload: I.gslidesCharLimitLogin
            }),
            a = !0,
            t({
                action: "dlRequestLogin"
            }).then((()=>{
                a = !1,
                s()
            }
            )).catch((()=>{
                a = !1
            }
            )))
        }
        ]
    }
    class Wh extends Oo {
        constructor(e) {
            super(),
            No(this, e, Uh, Bh, tn, {
                charLimitError: 0,
                closeModal: 1
            })
        }
    }
    function Fh(e) {
        let t, n;
        return t = new Wh({
            props: {
                charLimitError: e[1],
                closeModal: e[9]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                2 & n && (o.charLimitError = e[1]),
                2 & n && (o.closeModal = e[9]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function jh(e) {
        let t, n, o, i;
        function s(t) {
            e[10](t)
        }
        function a(t) {
            e[11](t)
        }
        let r = {
            registerActionIconCallbacks: e[6],
            clearActionIconCallbacks: e[7],
            sourceLang: e[2]
        };
        return void 0 !== e[0] && (r.manualSourceLang = e[0]),
        void 0 !== e[1] && (r.charLimitError = e[1]),
        t = new Mh({
            props: r
        }),
        oo.push((()=>ko(t, "manualSourceLang", s))),
        oo.push((()=>ko(t, "charLimitError", a))),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, n) {
                Io(t, e, n),
                i = !0
            },
            p(e, i) {
                const s = {};
                4 & i && (s.sourceLang = e[2]),
                !n && 1 & i && (n = !0,
                s.manualSourceLang = e[0],
                uo((()=>n = !1))),
                !o && 2 & i && (o = !0,
                s.charLimitError = e[1],
                uo((()=>o = !1))),
                t.$set(s)
            },
            i(e) {
                i || (yo(t.$$.fragment, e),
                i = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                i = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function qh(e) {
        let t, n, o, i, s;
        t = new Hh({
            props: {
                registerTopIconCallbacks: e[4],
                clearTopIconCallbacks: e[5]
            }
        });
        let a = e[1] && Fh(e)
          , r = e[3].isGSlidesEnabled && jh(e);
        return {
            c() {
                Mo(t.$$.fragment),
                n = kn(),
                a && a.c(),
                o = kn(),
                r && r.c(),
                i = Mn()
            },
            m(e, l) {
                Io(t, e, l),
                yn(e, n, l),
                a && a.m(e, l),
                yn(e, o, l),
                r && r.m(e, l),
                yn(e, i, l),
                s = !0
            },
            p(e, [t]) {
                e[1] ? a ? (a.p(e, t),
                2 & t && yo(a, 1)) : (a = Fh(e),
                a.c(),
                yo(a, 1),
                a.m(o.parentNode, o)) : a && ($o(),
                xo(a, 1, 1, (()=>{
                    a = null
                }
                )),
                Eo()),
                e[3].isGSlidesEnabled ? r ? (r.p(e, t),
                8 & t && yo(r, 1)) : (r = jh(e),
                r.c(),
                yo(r, 1),
                r.m(i.parentNode, i)) : r && ($o(),
                xo(r, 1, 1, (()=>{
                    r = null
                }
                )),
                Eo())
            },
            i(e) {
                s || (yo(t.$$.fragment, e),
                yo(a),
                yo(r),
                s = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                xo(a),
                xo(r),
                s = !1
            },
            d(e) {
                Ao(t, e),
                e && xn(n),
                a && a.d(e),
                e && xn(o),
                r && r.d(e),
                e && xn(i)
            }
        }
    }
    function Vh(e, t, n) {
        let o, i, s, a, r, l, c, d;
        on(e, Po, (e=>n(3, i = e))),
        Jn("deepl_settings", Po),
        Jn("deepl_website_settings", cr);
        const u = async e=>{
            if ("dlChangeActiveTabStatus" === e.action)
                e.payload.isActive ? m() : g()
        }
          , m = ()=>{
            s && clearInterval(s),
            s = setInterval(p, 800)
        }
          , g = ()=>{
            clearInterval(s)
        }
          , p = ()=>{
            a && a(),
            r && r(),
            c || h()
        }
          , h = async()=>{
            n(8, l = await ft() || "EN-US")
        }
        ;
        Yn((()=>{
            m(),
            chrome.runtime.onMessage.addListener(u)
        }
        )),
        Xn((()=>{
            s && g(),
            chrome.runtime.onMessage.removeListener(u)
        }
        ));
        return e.$$.update = ()=>{
            257 & e.$$.dirty && n(2, o = c || l)
        }
        ,
        [c, d, o, i, e=>{
            a = e.repositionTopIcon
        }
        , ()=>{
            a = void 0
        }
        , e=>{
            r = e.repositionActionIcon
        }
        , ()=>{
            r = void 0
        }
        , l, ()=>n(1, d = void 0), function(e) {
            c = e,
            n(0, c)
        }
        , function(e) {
            d = e,
            n(1, d)
        }
        ]
    }
    class Zh extends Oo {
        constructor(e) {
            super(),
            No(this, e, Vh, qh, tn, {})
        }
    }
    class Kh {
        static HTML_TAG_NAME = "deepl-gslides-controller";
        static createElement = (e=document)=>{
            const t = e.createElement(Kh.HTML_TAG_NAME)
              , n = new Kh(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowRoot.addEventListener("mouseup", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.domElement.shadowRoot.addEventListener("mousedown", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = ()=>{
            this.domElement.mainComponent = new Zh({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.domElement.cleanupDOM
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function Yh(e) {
        let t;
        return {
            c() {
                t = Cn("p"),
                t.textContent = `${chrome.i18n.getMessage("segmentation_survey_copy")}`,
                On(t, "class", "svelte-1gbr840")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function Xh(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("p"),
                n = Cn("strong"),
                n.textContent = `${chrome.i18n.getMessage("ui_gslides_feedback_title")}`,
                o = kn(),
                i = Cn("p"),
                i.textContent = `${chrome.i18n.getMessage("ui_gslides_feedback_content")}`,
                On(n, "class", "svelte-1gbr840"),
                On(t, "class", "svelte-1gbr840"),
                On(i, "class", "svelte-1gbr840")
            },
            m(e, s) {
                yn(e, t, s),
                bn(t, n),
                yn(e, o, s),
                yn(e, i, s)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(o),
                e && xn(i)
            }
        }
    }
    function Qh(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("p"),
                n = Cn("strong"),
                n.textContent = `${chrome.i18n.getMessage("ui_toaster_gmail_feedback_title")}`,
                o = kn(),
                i = Cn("p"),
                i.textContent = `${chrome.i18n.getMessage("ui_toaster_gmail_feedback_content")}`,
                On(n, "class", "svelte-1gbr840"),
                On(t, "class", "svelte-1gbr840"),
                On(i, "class", "svelte-1gbr840")
            },
            m(e, s) {
                yn(e, t, s),
                bn(t, n),
                yn(e, o, s),
                yn(e, i, s)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(o),
                e && xn(i)
            }
        }
    }
    function Jh(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("p"),
                n = Cn("strong"),
                n.textContent = `${chrome.i18n.getMessage("ui_toaster_feedback_form_line_1")}`,
                o = kn(),
                i = Cn("p"),
                i.textContent = `${chrome.i18n.getMessage("ui_toaster_feedback_form_line_2")}`,
                On(n, "class", "svelte-1gbr840"),
                On(t, "class", "svelte-1gbr840"),
                On(i, "class", "svelte-1gbr840")
            },
            m(e, s) {
                yn(e, t, s),
                bn(t, n),
                yn(e, o, s),
                yn(e, i, s)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(o),
                e && xn(i)
            }
        }
    }
    function ef(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("p"),
                n = Cn("strong"),
                n.textContent = `${chrome.i18n.getMessage("ui_toaster_write_a_review_line_1")}`,
                o = kn(),
                i = Cn("p"),
                i.textContent = `${Be() ? chrome.i18n.getMessage("ui_toaster_write_a_review_line_2_firefox") : chrome.i18n.getMessage("ui_toaster_write_a_review_line_2")}`,
                On(n, "class", "svelte-1gbr840"),
                On(t, "class", "svelte-1gbr840"),
                On(i, "class", "svelte-1gbr840")
            },
            m(e, s) {
                yn(e, t, s),
                bn(t, n),
                yn(e, o, s),
                yn(e, i, s)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(o),
                e && xn(i)
            }
        }
    }
    function tf(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("p"),
                t.textContent = `${Be() ? chrome.i18n.getMessage("ui_toaster_how_was_your_experience_line_1_firefox") : chrome.i18n.getMessage("ui_toaster_how_was_your_experience_line_1")}`,
                n = kn(),
                o = Cn("p"),
                i = Cn("strong"),
                i.textContent = `${Be() ? chrome.i18n.getMessage("ui_toaster_how_was_your_experience_line_2_firefox") : chrome.i18n.getMessage("ui_toaster_how_was_your_experience_line_2")}`,
                On(t, "class", "svelte-1gbr840"),
                On(i, "class", "svelte-1gbr840"),
                On(o, "class", "svelte-1gbr840")
            },
            m(e, s) {
                yn(e, t, s),
                yn(e, n, s),
                yn(e, o, s),
                bn(o, i)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(n),
                e && xn(o)
            }
        }
    }
    function nf(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("button"),
                n = Cn("span"),
                n.textContent = `${chrome.i18n.getMessage("segmentation_survey_button")}`,
                On(t, "class", "svelte-1gbr840")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                o || (i = In(t, "click", e[8]),
                o = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function of(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("button"),
                n = Cn("span"),
                n.textContent = `${chrome.i18n.getMessage("ui_gslides_feedback_cta")}`,
                On(t, "class", "svelte-1gbr840")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                o || (i = In(t, "click", e[7]),
                o = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function sf(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("button"),
                n = Cn("span"),
                n.textContent = `${chrome.i18n.getMessage("ui_toaster_gmail_feedback_button")}`,
                On(t, "class", "svelte-1gbr840")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                o || (i = In(t, "click", e[6]),
                o = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function af(e) {
        let t, n, o, i;
        return {
            c() {
                t = Cn("button"),
                n = Cn("span"),
                n.textContent = `${chrome.i18n.getMessage("ui_toaster_write_a_review_cta")}`,
                On(t, "class", "svelte-1gbr840")
            },
            m(s, a) {
                yn(s, t, a),
                bn(t, n),
                o || (i = In(t, "click", e[5]),
                o = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                o = !1,
                i()
            }
        }
    }
    function rf(e) {
        let t, n, o, i, s, a, r, l, c, d, u;
        return {
            c() {
                t = Cn("button"),
                n = Cn("i"),
                o = kn(),
                i = Cn("span"),
                i.textContent = `${chrome.i18n.getMessage("ui_toaster_how_was_your_experience_bad")}`,
                s = kn(),
                a = Cn("button"),
                r = Cn("i"),
                l = kn(),
                c = Cn("span"),
                c.textContent = `${chrome.i18n.getMessage("ui_toaster_how_was_your_experience_good")}`,
                On(n, "class", "icon-bad svelte-1gbr840"),
                On(t, "class", "svelte-1gbr840"),
                On(r, "class", "icon-good svelte-1gbr840"),
                On(a, "class", "svelte-1gbr840")
            },
            m(m, g) {
                yn(m, t, g),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                yn(m, s, g),
                yn(m, a, g),
                bn(a, r),
                bn(a, l),
                bn(a, c),
                d || (u = [In(t, "click", e[3]), In(a, "click", e[4])],
                d = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(s),
                e && xn(a),
                d = !1,
                Jt(u)
            }
        }
    }
    function lf(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g;
        function p(e, t) {
            return e[0] === V.initial ? tf : e[0] === V.review ? ef : e[0] === V.feedback ? Jh : e[0] === V.gmail ? Qh : e[0] === V.gslides ? Xh : e[0] === V.customer_segmentation ? Yh : void 0
        }
        let h = p(e)
          , f = h && h(e)
          , _ = e[2] && function(e) {
            let t;
            function n(e, t) {
                return e[0] === V.initial ? rf : e[0] === V.review ? af : e[0] === V.gmail ? sf : e[0] === V.gslides ? of : e[0] === V.customer_segmentation ? nf : void 0
            }
            let o = n(e)
              , i = o && o(e);
            return {
                c() {
                    t = Cn("div"),
                    i && i.c(),
                    On(t, "class", "buttons svelte-1gbr840")
                },
                m(e, n) {
                    yn(e, t, n),
                    i && i.m(t, null)
                },
                p(e, s) {
                    o === (o = n(e)) && i ? i.p(e, s) : (i && i.d(1),
                    i = o && o(e),
                    i && (i.c(),
                    i.m(t, null)))
                },
                d(e) {
                    e && xn(t),
                    i && i.d()
                }
            }
        }(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                i = kn(),
                s = Cn("div"),
                a = Cn("button"),
                r = kn(),
                f && f.c(),
                l = kn(),
                _ && _.c(),
                On(o, "class", "logo svelte-1gbr840"),
                On(a, "class", "close-icon svelte-1gbr840"),
                On(s, "class", "content svelte-1gbr840"),
                On(n, "class", "body svelte-1gbr840"),
                On(t, "class", "container svelte-1gbr840")
            },
            m(c, d) {
                yn(c, t, d),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s),
                bn(s, a),
                bn(s, r),
                f && f.m(s, null),
                bn(t, l),
                _ && _.m(t, null),
                u = !0,
                m || (g = In(a, "click", (function() {
                    en(e[1]) && e[1].apply(this, arguments)
                }
                )),
                m = !0)
            },
            p(t, [n]) {
                h === (h = p(e = t)) && f ? f.p(e, n) : (f && f.d(1),
                f = h && h(e),
                f && (f.c(),
                f.m(s, null))),
                e[2] && _.p(e, n)
            },
            i(e) {
                u || (co((()=>{
                    u && (d && d.end(1),
                    c = Co(t, fly, {
                        x: 100,
                        duration: 1e3
                    }),
                    c.start())
                }
                )),
                u = !0)
            },
            o(e) {
                c && c.invalidate(),
                d = So(t, fly, {
                    x: 100,
                    duration: 1e3
                }),
                u = !1
            },
            d(e) {
                e && xn(t),
                f && f.d(),
                _ && _.d(),
                e && d && d.end(),
                m = !1,
                g()
            }
        }
    }
    function cf(e, n, o) {
        let i;
        on(e, Po, (e=>o(9, i = e))),
        Jn("deepl_settings", Po),
        Jn("deepl_website_settings", cr);
        let {onClose: s} = n
          , {reviewStage: a=V.initial} = n;
        const r = [V.initial, V.review, V.gmail, V.gslides, V.customer_segmentation].includes(a);
        return e.$$set = e=>{
            "onClose"in e && o(1, s = e.onClose),
            "reviewStage"in e && o(0, a = e.reviewStage)
        }
        ,
        [a, s, r, function() {
            Po.set({
                shouldDisplayFeedbackPopup: !0
            }),
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Be() ? xs : us
                }
            }),
            s()
        }
        , function() {
            o(0, a = V.review)
        }
        , function() {
            let e = ws;
            chrome.runtime.id === W.edge && (e = vs),
            Be() && (e = Es),
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: e
                }
            }),
            s()
        }
        , function() {
            t({
                action: "dlTrackUILocationClicked",
                payload: I.gmailFeedbackSurvey
            }),
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: bs
                }
            }),
            s()
        }
        , function() {
            t({
                action: "dlTrackUILocationClicked",
                payload: I.gslidesFeedbackSurvey
            }),
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: $s
                }
            }),
            s()
        }
        , function() {
            i.isLoggedIn && i.isProUser ? t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Cs
                }
            }) : t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: Ts
                }
            }),
            s()
        }
        ]
    }
    class df extends Oo {
        constructor(e) {
            super(),
            No(this, e, cf, lf, tn, {
                onClose: 1,
                reviewStage: 0
            })
        }
    }
    class uf {
        static HTML_TAG_NAME = "deepl-ask-for-review-popup";
        static createElement = (e=document)=>{
            const t = e.createElement(uf.HTML_TAG_NAME)
              , n = new uf(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowContainer.addEventListener("click", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = ({reviewStage: e})=>{
            this.domElement.shadowContainer.style.cssText = `position: fixed; bottom: 32px; right: 32px; z-index: ${L.deepl_inline_ui.z_index}`,
            this.domElement.mainComponent = new df({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.cleanupDOM,
                    reviewStage: e
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    const mf = async e=>{
        const t = Be();
        let n, o = e.ownerDocument, i = Qo(e).getSelection();
        n = t ? i && i.anchorNode && "#text" == i.anchorNode.nodeName && "Range" == i.type && e.contains(i.anchorNode) : i && i.baseNode && "#text" == i.baseNode.nodeName && "Range" == i.type && (e.contains(i.baseNode) || function(e, t) {
            return "IFRAME" === e.nodeName.toUpperCase() && ti(e) === t.ownerDocument
        }(e, i.baseNode)),
        n || (e.focus(),
        await ii(e)),
        i = Qo(e).getSelection();
        const {domElements: s, strings: a, container: r} = function({thisDocument: e, selection: t}) {
            let n;
            t.getRangeAt ? n = t.getRangeAt(0) : (n = e.createRange(),
            n.setStart(t.anchorNode, t.anchorOffset),
            n.setEnd(t.focusNode, t.focusOffset));
            const o = n.cloneContents()
              , i = document.createElement("div");
            i.appendChild(o),
            i.style.display = "block",
            i.style.position = "fixed",
            i.style.height = "0px",
            i.style.width = "0px",
            i.style.top = "-500px",
            i.style.left = "-500px",
            i.style.overflow = "hidden",
            document.body.appendChild(i);
            const {domElements: s, strings: a} = Vl(i);
            return {
                domElements: s,
                strings: a,
                container: i
            }
        }({
            thisDocument: o,
            selection: i
        });
        return {
            domElements: s,
            strings: a,
            container: r,
            isSubtextSelected: n
        }
    }
    ;
    const gf = e=>{
        const {domElements: t, strings: n, cloneContainer: o} = function(e) {
            const t = e.cloneNode(!0)
              , n = document.createElement("div");
            n.appendChild(t),
            n.style.display = "none",
            document.body.appendChild(n);
            const {domElements: o, strings: i} = Vl(n);
            return {
                domElements: o,
                strings: i,
                cloneContainer: n
            }
        }(e);
        return {
            domElements: t,
            strings: n,
            cloneContainer: o
        }
    }
    ;
    async function pf(e, n) {
        const {isWriteRequest: o, targetLang: i, nicheIntegration: s, sourceLang: a, isHtml: r, clearInnerHTML: l} = {
            isWriteRequest: !1,
            targetLang: null,
            nicheIntegration: null,
            sourceLang: null,
            isHtml: null,
            clearInnerHTML: null,
            ...n
        };
        let c, d = {}, u = [];
        const m = !Rl(e);
        if (m)
            d = await mf(e),
            u = d.strings.map((e=>({
                text: e
            })));
        else {
            const t = e.value;
            Pl(e) && (d.isSubtextSelected = !0),
            c = d.isSubtextSelected ? t.substring(e.selectionStart, e.selectionEnd) : t,
            u.push({
                text: c
            })
        }
        if (0 === u.length)
            return;
        let g, p;
        if (a)
            g = a;
        else
            try {
                g = document.documentElement.lang
            } catch (e) {
                console.error(e)
            }
        p = o ? await t({
            action: "dlRequestImproveWriting",
            payload: {
                requests: u,
                domainName: window.location.hostname,
                websiteLanguage: g,
                sourceLang: a,
                ...r && {
                    isHtml: !0
                }
            }
        }) : await t({
            action: "dlRequestInputTranslation",
            payload: {
                requests: u,
                domainName: window.location.hostname,
                websiteLanguage: g,
                targetLang: i,
                platformBehavior: s
            }
        });
        const h = {
            text: "",
            html: ""
        };
        m ? (Kl({
            strings: p[0]?.texts,
            domElements: d.domElements
        }),
        h.text = d.container.innerText,
        h.html = d.container.innerHTML,
        d.container.remove()) : (h.text = p[0].text,
        h.html = p[0].text),
        m && !d.isSubtextSelected && _i(e),
        l && !d.isSubtextSelected && (e.innerHTML = ""),
        await Hl(e, h, d.isSubtextSelected)
    }
    function hf(e, t, n) {
        let o = {
            block: "end",
            position: e.length
        };
        return t.forEach((t=>{
            const i = e.indexOf(`<${t}>`, n);
            i > -1 && i < o.position && (o = {
                block: t,
                position: i
            })
        }
        )),
        [o.block, o.position]
    }
    function ff(e) {
        return e.match(/[^\s.,:;'"]+|[.,:;'"]|\s+/g) || []
    }
    function _f(e, t) {
        const n = ff(e)
          , o = ff(t)
          , i = function(e, t, n) {
            const o = n || ((e,t)=>e === t)
              , i = (()=>{
                let n = 0;
                for (; o(e[n], t[n]) && n < e.length; )
                    ++n;
                return n
            }
            )();
            if (i === e.length && e.length === t.length)
                return [i];
            const s = (()=>{
                let n = e.length - 1
                  , s = t.length - 1;
                for (; o(e[n], t[s]) && n > i && s > i; )
                    --n,
                    --s;
                return e.length - n - 1
            }
            )()
              , a = e.length - i - s + 1
              , r = t.length - i - s + 1
              , l = a + r
              , c = new Map
              , d = new Map;
            c.set(1, 0),
            d.set(1, null);
            for (let n = 0; n <= l; ++n)
                for (let l = -n; l <= n; l += 2) {
                    let u, m, g;
                    for (l == -n || l != n && c.get(l - 1) < c.get(l + 1) ? (u = c.get(l + 1),
                    g = [d.get(l + 1), void 0, void 0]) : (u = c.get(l - 1) + 1,
                    g = [d.get(l - 1), void 0, void 0]),
                    m = u - l; u < a && m < r && o(e[u + i], t[m + i]); )
                        ++u,
                        ++m;
                    if (u >= a && m >= r) {
                        g[1] = a + s - 1,
                        g[2] = r + s - 1;
                        let e = -1
                          , t = -1;
                        const n = [];
                        for (; g; )
                            n.push([g[1], g[2]]),
                            g = g[0];
                        let o = []
                          , l = null;
                        for (; n.length; ) {
                            const i = n.pop()
                              , s = i[0]
                              , a = i[1]
                              , r = s - e
                              , c = a - t
                              , d = Math.min(r, c);
                            r > d && (l ? l[0] += r - d : (l = [r - d, 0],
                            o.push(l))),
                            c > d && (l ? l[1] += c - d : (l = [0, c - d],
                            o.push(l))),
                            d > 0 && (o.push(d),
                            l = null),
                            e = s,
                            t = a
                        }
                        return o[0] = o[0] - 1 + i,
                        o
                    }
                    c.set(l, u),
                    g[1] = u,
                    g[2] = m,
                    d.set(l, g)
                }
            throw new Error("[diff]","should not happen?")
        }(n, o)
          , s = [];
        let a = 0
          , r = 0
          , l = 0;
        for (; a < i.length; ) {
            const e = i[a];
            let t = 0;
            for (let o = r + e - 1; o >= r; o -= 1)
                t += n[o]?.match(/^\s/) ? 2 : 1;
            r += e,
            l += e;
            let c = 0
              , d = 0;
            if (r < n.length && l < o.length && n[r]?.match(/^\s/) && o[l]?.match(/^\s/) && (c -= 1,
            d -= 1,
            t += 1),
            s.push(t),
            a += 1,
            a < i.length) {
                const [e,t] = i[a];
                for (let t = r + e - 1; t >= r; t -= 1)
                    c += n[t]?.match(/^\s/) ? 2 : 1;
                for (let e = l + t - 1; e >= l; e -= 1)
                    d += o[e]?.match(/^\s/) ? 2 : 1;
                s.push([Math.max(c, 0), Math.max(d, 0)]),
                a += 1,
                r += e,
                l += t
            }
        }
        return [s, n, o, i]
    }
    function wf(e, t) {
        const n = _f(t, e)
          , o = [];
        let i = 0
          , s = 0
          , a = 0
          , r = 0;
        return n[3].forEach((e=>{
            if (Array.isArray(e) && "number" == typeof e[0] && "number" == typeof e[1]) {
                if (0 !== e[1]) {
                    const t = n[2].slice(s, s + e[1]).join("")
                      , l = n[1].slice(i, i + e[0]).join("")
                      , c = {
                        original: l,
                        replace: t
                    };
                    c.changeLength = t.length,
                    c.changeOffset = a,
                    c.originalLength = l.length,
                    c.originalOffset = r,
                    a += t.length,
                    r += l.length,
                    o.push(c)
                }
                i += e[0],
                s += e[1]
            } else {
                let t = 0;
                n[2].slice(s, s + e).forEach((e=>t += e.length)),
                a += t;
                let o = 0;
                n[1].slice(i, i + e).forEach((e=>o += e.length)),
                r += o,
                i += e,
                s += e
            }
        }
        )),
        o
    }
    const vf = (e,t,n,o,i)=>{
        const s = document.createRange();
        if ("#text" === e.nodeName)
            s.setStart(e, t),
            s.setEnd(e, t + n);
        else {
            if (!e.firstChild || "#text" !== e.firstChild.nodeName)
                return console.error("Invalid textNode with no child text node."),
                null;
            {
                const o = e.firstChild;
                s.setStart(o, t),
                s.setEnd(o, t + n)
            }
        }
        const a = s.getBoundingClientRect();
        return {
            top: a.top,
            left: a.left,
            right: a.right,
            bottom: a.bottom,
            original: o,
            replace: i,
            textNode: e,
            changeIndex: t,
            changeLength: n
        }
    }
      , bf = "deepl-writing-ui-added"
      , $f = 5e3;
    function Ef(e) {
        let t, n, o, i, s, a, r, l;
        return {
            c() {
                t = Sn("svg"),
                n = Sn("g"),
                o = Sn("path"),
                i = Sn("path"),
                s = Sn("path"),
                a = Sn("defs"),
                r = Sn("clipPath"),
                l = Sn("rect"),
                On(o, "d", "M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z"),
                On(o, "fill", "#0F2B46"),
                On(i, "d", "M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z"),
                On(i, "fill", "white"),
                On(s, "d", "M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z"),
                On(s, "fill", "white"),
                On(n, "clip-path", "url(#clip0)"),
                On(l, "width", "18.5294"),
                On(l, "height", "19"),
                On(l, "fill", "white"),
                On(l, "transform", "matrix(-1 0 0 1 18.5294 0)"),
                On(r, "id", "clip0"),
                On(t, "width", e[1]),
                On(t, "height", e[0]),
                On(t, "class", "deepl-logo-icon"),
                On(t, "viewBox", "0 0 24 24"),
                On(t, "fill", "none"),
                On(t, "xmlns", "http://www.w3.org/2000/svg")
            },
            m(e, c) {
                yn(e, t, c),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s),
                bn(t, a),
                bn(a, r),
                bn(r, l)
            },
            p(e, [n]) {
                2 & n && On(t, "width", e[1]),
                1 & n && On(t, "height", e[0])
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function yf(e, t, n) {
        let {height: o="16px"} = t
          , {width: i="16px"} = t;
        return e.$$set = e=>{
            "height"in e && n(0, o = e.height),
            "width"in e && n(1, i = e.width)
        }
        ,
        [o, i]
    }
    class xf extends Oo {
        constructor(e) {
            super(),
            No(this, e, yf, Ef, tn, {
                height: 0,
                width: 1
            })
        }
    }
    function Tf(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g = chrome.i18n.getMessage("gmail_char_limit_logged_in_body") + "";
        return {
            c() {
                t = Cn("div"),
                n = kn(),
                o = Cn("div"),
                o.textContent = `${chrome.i18n.getMessage("gmail_char_limit_anon_title")}`,
                i = kn(),
                s = Cn("div"),
                a = kn(),
                r = Cn("div"),
                l = Cn("button"),
                l.textContent = `${chrome.i18n.getMessage("gmail_char_limit_anon_login_button")}`,
                c = kn(),
                d = Cn("button"),
                d.textContent = `${chrome.i18n.getMessage("gmail_char_limit_anon_sign_up_button")}`,
                On(t, "class", "close-icon svelte-t52sug"),
                On(o, "class", "title svelte-t52sug"),
                On(s, "class", "body svelte-t52sug"),
                On(l, "class", "secondary svelte-t52sug"),
                On(d, "class", "primary svelte-t52sug"),
                On(r, "class", "footer svelte-t52sug")
            },
            m(p, h) {
                yn(p, t, h),
                yn(p, n, h),
                yn(p, o, h),
                yn(p, i, h),
                yn(p, s, h),
                s.innerHTML = g,
                yn(p, a, h),
                yn(p, r, h),
                bn(r, l),
                bn(r, c),
                bn(r, d),
                u || (m = [In(t, "click", e[1]), In(l, "click", e[2]), In(d, "click", e[3])],
                u = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(n),
                e && xn(o),
                e && xn(i),
                e && xn(s),
                e && xn(a),
                e && xn(r),
                u = !1,
                Jt(m)
            }
        }
    }
    function Cf(e) {
        let t, n, o, i, s, a, r, l, c, d, u = chrome.i18n.getMessage("gmail_char_limit_logged_in_body") + "";
        return {
            c() {
                t = Cn("div"),
                n = kn(),
                o = Cn("div"),
                o.textContent = `${chrome.i18n.getMessage("gmail_char_limit_logged_in_title")}`,
                i = kn(),
                s = Cn("div"),
                a = kn(),
                r = Cn("div"),
                l = Cn("button"),
                l.textContent = `${chrome.i18n.getMessage("gmail_char_limit_logged_in_cta_button")}`,
                On(t, "class", "close-icon svelte-t52sug"),
                On(o, "class", "title svelte-t52sug"),
                On(s, "class", "body svelte-t52sug"),
                On(l, "class", "primary svelte-t52sug"),
                On(r, "class", "footer svelte-t52sug")
            },
            m(m, g) {
                yn(m, t, g),
                yn(m, n, g),
                yn(m, o, g),
                yn(m, i, g),
                yn(m, s, g),
                s.innerHTML = u,
                yn(m, a, g),
                yn(m, r, g),
                bn(r, l),
                c || (d = [In(t, "click", e[1]), In(l, "click", e[3])],
                c = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(n),
                e && xn(o),
                e && xn(i),
                e && xn(s),
                e && xn(a),
                e && xn(r),
                c = !1,
                Jt(d)
            }
        }
    }
    function Sf(e) {
        let t, n, o;
        function i(e, t) {
            return e[0] ? Cf : Tf
        }
        let s = i(e)
          , a = s(e);
        return {
            c() {
                t = Cn("div"),
                a.c(),
                On(t, "class", "dl-gmail-character-limit-popup svelte-t52sug")
            },
            m(i, s) {
                yn(i, t, s),
                a.m(t, null),
                n || (o = [mn(wi.call(null, t, {
                    isShadow: !0,
                    exceptions: [".deepl-gmail-message-container", ".deepl-gmail-write-toolbar"]
                })), In(t, "click_outside", e[7])],
                n = !0)
            },
            p(e, [n]) {
                s === (s = i(e)) && a ? a.p(e, n) : (a.d(1),
                a = s(e),
                a && (a.c(),
                a.m(t, null)))
            },
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                a.d(),
                n = !1,
                Jt(o)
            }
        }
    }
    function Lf(e, n, o) {
        let i;
        on(e, Po, (e=>o(6, i = e)));
        let {onCloseCharLimitPopup: s} = n
          , {cleanUpDOM: a} = n
          , r = !1
          , l = !1;
        const c = ()=>{
            s && s(),
            a && a()
        }
        ;
        return e.$$set = e=>{
            "onCloseCharLimitPopup"in e && o(4, s = e.onCloseCharLimitPopup),
            "cleanUpDOM"in e && o(5, a = e.cleanUpDOM)
        }
        ,
        e.$$.update = ()=>{
            64 & e.$$.dirty && o(0, l = !0 === i.isLoggedIn)
        }
        ,
        [l, c, ()=>{
            r || (t({
                action: "dlTrackUILocationClicked",
                payload: I.gmailCharLimitLogin
            }),
            r = !0,
            t({
                action: "dlRequestLogin"
            }).then((()=>{
                r = !1,
                c()
            }
            )).catch((()=>{
                r = !1
            }
            )))
        }
        , ()=>{
            t({
                action: "dlExternalURLRedirect",
                payload: {
                    destination: gs,
                    utmContent: "gmail_customization"
                }
            }),
            c()
        }
        , s, a, i, ()=>{
            c()
        }
        ]
    }
    class kf extends Oo {
        constructor(e) {
            super(),
            No(this, e, Lf, Sf, tn, {
                onCloseCharLimitPopup: 4,
                cleanUpDOM: 5
            })
        }
    }
    class Mf {
        static HTML_TAG_NAME = "deepl-gmail-character-limit-popup";
        static createElement = (e=document)=>{
            const t = e.createElement(Mf.HTML_TAG_NAME)
              , n = new Mf(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.container = document.createElement("div"),
            this.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowRoot.addEventListener("mouseup", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.domElement.shadowRoot.addEventListener("mousedown", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = ({onCloseCharLimitPopup: e})=>{
            this.mainComponent = new kf({
                target: this.domElement.shadowContainer,
                props: {
                    cleanUpDOM: this.domElement.cleanupDOM,
                    onCloseCharLimitPopup: e
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function If(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w, v, b, $, E, y, x, T, C, S = chrome.i18n.getMessage("gmail_compose_translate_button") + "";
        return a = new Ni({
            props: {
                selectedOption: e[1],
                items: e[8],
                placeholder: "...",
                allowLabelHtml: !0
            }
        }),
        a.$on("valueselected", e[20]),
        g = new wr({
            props: {
                value: e[12] || e[2].targetLanguageUserInput,
                disabled: !1,
                fontSize: "sm"
            }
        }),
        g.$on("selection", e[21]),
        y = new xi({
            props: {
                isEnabled: !0,
                tooltip: chrome.i18n.getMessage("gmail_compose_improve_tooltip"),
                zIndex: e[13].z_index,
                multiline: !0,
                $$slots: {
                    default: [Nf]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                o.textContent = `${chrome.i18n.getMessage("gmail_compose_translate_from")}`,
                i = kn(),
                s = Cn("div"),
                Mo(a.$$.fragment),
                r = kn(),
                l = Cn("div"),
                c = Cn("div"),
                c.textContent = `${chrome.i18n.getMessage("gmail_compose_translate_into")}`,
                d = kn(),
                u = Cn("div"),
                m = Cn("div"),
                Mo(g.$$.fragment),
                p = kn(),
                h = Cn("div"),
                f = Cn("button"),
                _ = Ln(S),
                v = kn(),
                b = Cn("div"),
                $ = kn(),
                E = Cn("div"),
                Mo(y.$$.fragment),
                On(o, "class", "translation-label svelte-16fkh9y"),
                On(s, "class", "wrapper shortcode-wrapper svelte-16fkh9y"),
                On(n, "class", "translation-selection-wrapper svelte-16fkh9y"),
                On(c, "class", "translation-label svelte-16fkh9y"),
                On(m, "class", "dropdown"),
                On(u, "class", "wrapper language-wrapper svelte-16fkh9y"),
                On(l, "class", "translation-selection-wrapper svelte-16fkh9y"),
                f.disabled = w = e[6] || !e[12],
                On(f, "class", "svelte-16fkh9y"),
                Gn(f, "isTranslating", e[6]),
                On(h, "class", "wrapper button-wrapper"),
                On(b, "class", "divider svelte-16fkh9y"),
                On(E, "class", "wrapper button-wrapper"),
                On(t, "class", "dl-gmail-translate-toolbar svelte-16fkh9y"),
                Gn(t, "hasLoaded", e[4]),
                Gn(t, "isExpanded", e[5])
            },
            m(w, S) {
                yn(w, t, S),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s),
                Io(a, s, null),
                bn(t, r),
                bn(t, l),
                bn(l, c),
                bn(l, d),
                bn(l, u),
                bn(u, m),
                Io(g, m, null),
                bn(t, p),
                bn(t, h),
                bn(h, f),
                bn(f, _),
                bn(t, v),
                bn(t, b),
                bn(t, $),
                bn(t, E),
                Io(y, E, null),
                x = !0,
                T || (C = In(f, "mousedown", Nn(An(e[14]))),
                T = !0)
            },
            p(e, n) {
                const o = {};
                2 & n[0] && (o.selectedOption = e[1]),
                256 & n[0] && (o.items = e[8]),
                a.$set(o);
                const i = {};
                4100 & n[0] && (i.value = e[12] || e[2].targetLanguageUserInput),
                g.$set(i),
                (!x || 4160 & n[0] && w !== (w = e[6] || !e[12])) && (f.disabled = w),
                (!x || 64 & n[0]) && Gn(f, "isTranslating", e[6]);
                const s = {};
                192 & n[0] | 64 & n[2] && (s.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                y.$set(s),
                (!x || 16 & n[0]) && Gn(t, "hasLoaded", e[4]),
                (!x || 32 & n[0]) && Gn(t, "isExpanded", e[5])
            },
            i(e) {
                x || (yo(a.$$.fragment, e),
                yo(g.$$.fragment, e),
                yo(y.$$.fragment, e),
                x = !0)
            },
            o(e) {
                xo(a.$$.fragment, e),
                xo(g.$$.fragment, e),
                xo(y.$$.fragment, e),
                x = !1
            },
            d(e) {
                e && xn(t),
                Ao(a),
                Ao(g),
                Ao(y),
                T = !1,
                C()
            }
        }
    }
    function Af(e) {
        let t, n, o, i, s, a, r, l, c;
        return o = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_compose_undo_icon"),
                zIndex: e[13].z_index,
                $$slots: {
                    default: [Of]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        a = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_compose_accept_icon"),
                zIndex: e[13].z_index,
                $$slots: {
                    default: [Df]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                Mo(o.$$.fragment),
                i = kn(),
                s = Cn("div"),
                Mo(a.$$.fragment),
                On(n, "class", "wrapper undo-wrapper svelte-16fkh9y"),
                On(s, "class", "wrapper accept-wrapper svelte-16fkh9y"),
                On(t, "class", "accept-changes svelte-16fkh9y")
            },
            m(d, u) {
                yn(d, t, u),
                bn(t, n),
                Io(o, n, null),
                bn(t, i),
                bn(t, s),
                Io(a, s, null),
                r = !0,
                l || (c = [mn(wi.call(null, t, {
                    isShadow: !0,
                    exceptions: [".deepl-gmail-message-container"]
                })), In(t, "click_outside", e[16])],
                l = !0)
            },
            p(e, t) {
                const n = {};
                64 & t[2] && (n.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                o.$set(n);
                const i = {};
                64 & t[2] && (i.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                a.$set(i)
            },
            i(e) {
                r || (yo(o.$$.fragment, e),
                yo(a.$$.fragment, e),
                r = !0)
            },
            o(e) {
                xo(o.$$.fragment, e),
                xo(a.$$.fragment, e),
                r = !1
            },
            d(e) {
                e && xn(t),
                Ao(o),
                Ao(a),
                l = !1,
                Jt(c)
            }
        }
    }
    function Nf(e) {
        let t, n, o, i, s, a = chrome.i18n.getMessage("gmail_compose_improve_button") + "";
        return {
            c() {
                t = Cn("button"),
                n = Ln(a),
                t.disabled = o = e[6] || !e[7],
                On(t, "class", "svelte-16fkh9y"),
                Gn(t, "isTranslating", e[6])
            },
            m(o, a) {
                yn(o, t, a),
                bn(t, n),
                i || (s = In(t, "mousedown", Nn(An(e[15]))),
                i = !0)
            },
            p(e, n) {
                192 & n[0] && o !== (o = e[6] || !e[7]) && (t.disabled = o),
                64 & n[0] && Gn(t, "isTranslating", e[6])
            },
            d(e) {
                e && xn(t),
                i = !1,
                s()
            }
        }
    }
    function Of(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                t.innerHTML = '<svg height="32px" width="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 8.33398H10.8333C14.5152 8.33398 17.5 11.3188 17.5 15.0007V16.6673M2.5 8.33398L7.5 13.334M2.5 8.33398L7.5 3.33398" stroke="#727A83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-16fkh9y"></path></svg>',
                On(t, "class", "confirm-button svelte-16fkh9y")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", Nn(An(e[17]))),
                n = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function Df(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("button"),
                t.innerHTML = '<svg width="24px" height="24px" class="checkmark" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L5 11L15 1" stroke="#727A83" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svelte-16fkh9y"></path></svg>',
                On(t, "class", "confirm-button right svelte-16fkh9y")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = In(t, "click", Nn(An(e[16]))),
                n = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                o()
            }
        }
    }
    function Rf(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m;
        const g = [Af, If]
          , p = [];
        function h(e, t) {
            return e[3] ? 0 : 1
        }
        return o = h(e),
        i = p[o] = g[o](e),
        l = new xf({
            props: {
                height: "24px",
                width: "24px"
            }
        }),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                i.c(),
                s = kn(),
                a = Cn("div"),
                r = Cn("div"),
                Mo(l.$$.fragment),
                On(r, "class", "wrapper icon-wrapper svelte-16fkh9y"),
                On(a, "class", "dl-toolbar-closed svelte-16fkh9y"),
                On(n, "class", "dl-toolbar-positioner svelte-16fkh9y"),
                On(t, "class", "deepl-gmail-write-toolbar svelte-16fkh9y"),
                On(t, "style", c = `top: ${e[9]}px; left: ${e[10]}px`)
            },
            m(i, c) {
                yn(i, t, c),
                bn(t, n),
                p[o].m(n, null),
                bn(n, s),
                bn(n, a),
                bn(a, r),
                Io(l, r, null),
                d = !0,
                u || (m = [In(r, "click", e[22]), In(t, "click", Nn(An(e[23]))), mn(wi.call(null, t, {
                    isShadow: !0,
                    exceptions: [".deepl-gmail-message-container"]
                })), In(t, "click_outside", e[24])],
                u = !0)
            },
            p(e, a) {
                let r = o;
                o = h(e),
                o === r ? p[o].p(e, a) : ($o(),
                xo(p[r], 1, 1, (()=>{
                    p[r] = null
                }
                )),
                Eo(),
                i = p[o],
                i ? i.p(e, a) : (i = p[o] = g[o](e),
                i.c()),
                yo(i, 1),
                i.m(n, s)),
                (!d || 1536 & a[0] && c !== (c = `top: ${e[9]}px; left: ${e[10]}px`)) && On(t, "style", c)
            },
            i(e) {
                d || (yo(i),
                yo(l.$$.fragment, e),
                d = !0)
            },
            o(e) {
                xo(i),
                xo(l.$$.fragment, e),
                d = !1
            },
            d(e) {
                e && xn(t),
                p[o].d(),
                Ao(l),
                u = !1,
                Jt(m)
            }
        }
    }
    function Pf(e) {
        const t = [];
        return e && function e(n) {
            if (n && n.nodeType === Node.TEXT_NODE)
                t.push(n);
            else if (n && n.nodeType === Node.ELEMENT_NODE)
                for (let t = 0; t < n.childNodes.length; t++)
                    e(n.childNodes[t])
        }(e),
        t
    }
    function Hf(e, n, o) {
        let i;
        on(e, Po, (e=>o(2, i = e)));
        const {deepl_inline_ui: s} = L;
        let {messageContainer: a} = n
          , {updateLockStatus: r} = n
          , {subjectInput: l} = n;
        const c = "WRITE"
          , d = "TRANSLATE";
        let u, m, g, p, h, f, _, w, v, b, $, E, y, x, T, C, S, k, M = null, I = !1, A = !1, N = !1, O = !1;
        Jn("deepl_settings", Po),
        Yn((async()=>{
            a && (a.addEventListener("input", R),
            a.addEventListener("paste", R),
            a.classList.add("deepl-gmail-message-container"),
            D(),
            l && l.value && (_ = l.value)),
            o(8, h = m_()),
            o(12, T = i.targetLanguageUserInput),
            j(),
            X(),
            window.addEventListener("popstate", G)
        }
        )),
        Xn((()=>{
            window.removeEventListener("popstate", G),
            a.removeEventListener("input", R),
            a.removeEventListener("paste", R),
            a.classList.remove("deepl-gmail-message-container"),
            q()
        }
        ));
        const D = async()=>{
            const e = a.innerHTML
              , t = e.replace(/<[^>]+>/g, "");
            const n = await dt(t);
            n.length && (e=>{
                const t = h.find((t=>t.value === e));
                t && o(1, M = t)
            }
            )(n)
        }
          , R = ()=>{
            I && (H(!1),
            oe()),
            P()
        }
          , P = ()=>{
            D()
        }
          , H = (e,t)=>{
            if (!e)
                return o(3, I = !1),
                m = null,
                void (u = null);
            o(3, I = !0),
            m = t
        }
          , G = ()=>{
            document.querySelectorAll(Mf.HTML_TAG_NAME).forEach((e=>{
                e.cleanupDOM,
                e.remove()
            }
            ))
        }
          , z = (e,t=!0)=>{
            for (; null !== e; ) {
                const n = e.getAttribute("role");
                if ("TABLE" === e.tagName && ("dialog" === n || "presentation" === n))
                    return t ? e.parentElement : e;
                e = e.parentElement
            }
            return null
        }
          , B = ()=>{
            const e = z(a);
            e && (w = Mf.createElement(),
            w.createDOM({
                onCloseCharLimitPopup: G
            }),
            e.appendChild(w))
        }
          , U = (e=!0)=>{
            if (!a)
                return;
            a.classList.add("deepl-loading-skeleton");
            const t = document.createElement("style");
            t.textContent = "\n        ::selection {\n          color: transparent !important;\n        }\n      ",
            document.head.appendChild(t),
            v = t,
            e && l && l.classList.add("deepl-selection-loading-skeleton-subject")
        }
          , W = ()=>{
            a && (a.classList.remove("deepl-loading-skeleton"),
            document.head.removeChild(v),
            v = null,
            l && l.classList.remove("deepl-selection-loading-skeleton-subject"))
        }
          , F = e=>{
            cr.update({
                error: e.message ? e.message : e
            })
        }
          , j = ()=>{
            b = setInterval(V, 100)
        }
          , q = ()=>{
            clearInterval(b)
        }
          , V = ()=>{
            const e = JSON.stringify(a.getBoundingClientRect());
            e !== $ && ($ = e,
            X())
        }
          , Z = ()=>{
            const e = z(a)
              , t = e.getBoundingClientRect();
            if (!e || !t)
                return;
            return e.querySelector("[role=toolbar]")
        }
          , Y = ()=>{
            const e = z(a)
              , t = e.getBoundingClientRect();
            if (!e || !t)
                return;
            const n = e.querySelector("[role='group']")
              , o = n.querySelectorAll("[role='button']");
            if (!n || !o)
                return;
            const i = Array.from(o);
            return i[i.length - 1]
        }
          , X = ()=>{
            const e = z(a)
              , t = e.getBoundingClientRect();
            if (!e || !t)
                return;
            const n = Z()
              , i = Y();
            if (n && 0 !== n.getBoundingClientRect().top) {
                const e = n.getBoundingClientRect();
                return i && i.getBoundingClientRect() ? (o(9, E = e.top - 10),
                void o(10, y = i.getBoundingClientRect().right - 30)) : (o(9, E = e.top - 10),
                void o(10, y = t.right - 45))
            }
            if (!i || !i.getBoundingClientRect())
                return;
            const s = i.getBoundingClientRect();
            o(9, E = s.top - 18),
            o(10, y = s.right - 30)
        }
          , Q = ({lang: e, sourceLength: t, targetLang: n, targetLength: o})=>{
            u = {
                lang: e,
                sourceLength: t,
                targetLang: n,
                targetLength: o,
                nicheIntegration: K.gmail
            }
        }
          , J = ({sourceLang: e, sourceLength: t, targetLang: n, targetLength: o})=>{
            u = {
                sourceLang: e,
                sourceLength: t,
                targetLang: n,
                targetLength: o,
                nicheIntegration: K.gmail
            }
        }
          , ee = e=>{
            t({
                action: "dlTrackTranslateAcceptOrRevertEvent",
                payload: {
                    eventType: e ? we : ve,
                    acceptOrRevertMetadata: u
                }
            })
        }
          , te = e=>{
            t({
                action: "dlTrackGmailCharLimitReached",
                payload: {
                    gmailActionType: Cd(e)
                }
            })
        }
          , ne = e=>/^[\n\s]*$/.test(e)
          , oe = ()=>{
            k = !1,
            S = null,
            C && (document.body.removeChild(C),
            C = null)
        }
          , ie = ()=>{
            (()=>{
                if (!C)
                    return;
                C.getContext("2d").clearRect(0, 0, C.width, C.height)
            }
            )();
            const e = (e=>{
                const t = z(a, !1)
                  , n = Z();
                let o, i;
                if (n && 0 !== n.getBoundingClientRect().top && (o = n.getBoundingClientRect().top),
                !o) {
                    const e = Y();
                    if (!e)
                        return;
                    o = e.getBoundingClientRect().top - 21
                }
                const s = t.querySelector("[name='subjectbox']").getBoundingClientRect();
                if (0 === s.bottom) {
                    const e = t.querySelector('table[role="presentation"]');
                    e && (i = e.getBoundingClientRect().bottom)
                } else
                    i = s.bottom;
                return e.filter((e=>e.top > i && e.bottom < o))
            }
            )(((e,t)=>{
                const n = Pf(e)
                  , o = Pf(t)
                  , i = n.filter((e=>!ne(e.nodeValue)))
                  , s = o.filter((e=>!ne(e.nodeValue)))
                  , a = [];
                return i.forEach(((e,t)=>{
                    const n = s[t];
                    if (!n)
                        return;
                    const o = e.nodeValue
                      , i = n.nodeValue;
                    if (!o || !i)
                        return;
                    let r = [];
                    r = wf(o, i);
                    const l = r.map((t=>vf(e, t.changeOffset, t.changeLength, t.original, t.replace)));
                    a.push([e, r, l])
                }
                )),
                a.map((e=>e[2])).flat()
            }
            )(a, S))
              , t = (e=>{
                const {top: t, left: n} = a.getBoundingClientRect();
                return e.map((e=>({
                    ...e,
                    top: e.top - t,
                    bottom: e.bottom - t,
                    right: e.right - n,
                    left: e.left - n
                })))
            }
            )(e);
            ae(t),
            k && setTimeout((()=>{
                requestAnimationFrame(ie)
            }
            ), 1e3 / 30)
        }
          , se = ()=>{
            C || (C = document.createElement("canvas"),
            document.body.appendChild(C));
            const e = a.getBoundingClientRect()
              , t = window.devicePixelRatio || 1
              , n = e.width * t
              , o = e.height * t;
            C.width = n,
            C.height = o,
            C.style.backgroundColor = "transparent",
            C.style.pointerEvents = "none",
            C.style.position = "fixed",
            C.style.top = `${e.top}px`,
            C.style.left = `${e.left}px`,
            C.style.width = `${n}px`,
            C.style.height = `${o}px`,
            C.style.zIndex = "100"
        }
          , ae = e=>{
            se();
            const t = C.getContext("2d");
            t.strokeStyle = "#006494",
            t.lineWidth = 2,
            e.forEach((({left: e, bottom: n, right: o})=>{
                t.beginPath(),
                t.moveTo(e, n),
                t.lineTo(o, n),
                t.stroke()
            }
            ))
        }
        ;
        return e.$$set = e=>{
            "messageContainer"in e && o(18, a = e.messageContainer),
            "updateLockStatus"in e && o(0, r = e.updateLockStatus),
            "subjectInput"in e && o(19, l = e.subjectInput)
        }
        ,
        e.$$.update = ()=>{
            2 & e.$$.dirty[0] && o(8, h = m_(M)),
            4 & e.$$.dirty[0] && (g = !0 === i.isLoggedIn && !0 === i.isProUser),
            2 & e.$$.dirty[0] && M && M.value && o(7, O = ["EN", "DE"].includes(M.value))
        }
        ,
        [r, M, i, I, A, N, p, O, h, E, y, x, T, s, async()=>{
            if (!a)
                return;
            f = a.innerHTML;
            const e = l && l.value;
            e && (_ = l.value);
            const n = a.innerText
              , i = n.length > $f;
            if (!g && i)
                return B(),
                void te(Te.COMPOSE_VIEW_TRANSLATE);
            U();
            const s = x ? x.value : M.value;
            try {
                if (await pf(a, {
                    targetLang: T,
                    nicheIntegration: K.gmail,
                    isHtml: !0,
                    clearInnerHTML: !0
                }),
                e) {
                    const e = await t({
                        action: "dlRequestInputTranslation",
                        payload: {
                            requests: [{
                                text: l.value
                            }],
                            domainName: window.location.hostname,
                            websiteLanguage: s,
                            targetLang: T,
                            skipDapReporting: !0
                        }
                    });
                    if (e[0]?.text) {
                        const t = e[0]?.text;
                        o(19, l.value = t, l)
                    }
                }
                o(6, p = !1),
                H(!0, d),
                W(),
                J({
                    sourceLang: s,
                    targetLang: T,
                    sourceLength: n.length,
                    targetLength: a.innerText.length
                })
            } catch (e) {
                F(e),
                W(),
                o(6, p = !1),
                H(!1)
            }
        }
        , async()=>{
            if (!a)
                return;
            const e = l && l.value;
            f = a.innerHTML,
            S = a.cloneNode(!0),
            se(),
            e && (_ = l.value);
            const n = a.innerText
              , i = n.length > $f;
            if (!g && i)
                return B(),
                void te(Te.COMPOSE_VIEW_IMPROVE);
            o(6, p = !0),
            U();
            const s = M.value;
            let r = !1;
            try {
                if (Vv({
                    eventType: ue,
                    lang: M.value,
                    sourceLength: n.length,
                    nicheIntegration: K.gmail
                }),
                await pf(a, {
                    isWriteRequest: !0,
                    sourceLang: s,
                    nicheIntegration: K.gmail,
                    isHtml: !0,
                    clearInnerHTML: !0
                }),
                e) {
                    const e = await t({
                        action: "dlRequestImproveWriting",
                        payload: {
                            requests: [{
                                text: l.value
                            }],
                            domainName: window.location.hostname,
                            websiteLanguage: s,
                            sourceLang: s
                        }
                    });
                    if (e[0]?.text) {
                        const t = e[0]?.text;
                        o(19, l.value = t, l)
                    }
                }
                Q({
                    lang: s,
                    sourceLength: n.length,
                    targetLength: a.innerText.length
                }),
                o(6, p = !1),
                H(!0, c),
                W(),
                k = !0,
                r = !0
            } catch (e) {
                F(e),
                W(),
                o(6, p = !1),
                H(!1)
            }
            if (r)
                try {
                    k = !0,
                    ie()
                } catch (e) {
                    oe()
                }
        }
        , ()=>{
            m === d ? ee(!0) : Vv({
                eventType: he,
                ...u
            }),
            f = null,
            _ = null,
            H(!1),
            D(),
            o(5, N = !1),
            oe()
        }
        , ()=>{
            m === d ? ee(!1) : Vv({
                eventType: fe,
                ...u
            }),
            o(18, a.innerHTML = f, a),
            l && _ && o(19, l.value = _, l),
            D(),
            H(!1),
            oe()
        }
        , a, l, e=>{
            o(11, x = e.detail.selectedOption)
        }
        , async e=>{
            o(12, T = e.detail.selectedOption.value)
        }
        , ()=>{
            r(!0),
            o(5, N = !N),
            o(4, A = !0)
        }
        , ()=>{
            r(!0)
        }
        , ()=>{
            r(!1),
            o(5, N = !1)
        }
        ]
    }
    class Gf extends Oo {
        constructor(e) {
            super(),
            No(this, e, Hf, Rf, tn, {
                messageContainer: 18,
                updateLockStatus: 0,
                subjectInput: 19
            }, null, [-1, -1, -1])
        }
    }
    class zf {
        static HTML_TAG_NAME = "deepl-gmail-message-write-ui";
        static createElement = (e=document)=>{
            const t = e.createElement(zf.HTML_TAG_NAME)
              , n = new zf(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowRoot.addEventListener("mouseup", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.domElement.shadowRoot.addEventListener("mousedown", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = ({container: e, subjectInput: t, updateLockStatus: n})=>{
            this.mainComponent = new Gf({
                target: this.domElement.shadowContainer,
                props: {
                    messageContainer: e,
                    updateLockStatus: n,
                    subjectInput: t
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function Bf(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w, v, b, $, E, y, x, T, C, S, L, k, M, I, A, N, O, D, R, P = chrome.i18n.getMessage("gmail_reading_translate_button") + "", H = chrome.i18n.getMessage("gmail_reading_forward_button") + "", G = null != e[4] && Uf(e);
        return l = new wr({
            props: {
                disabled: e[0],
                websiteSettings: cr,
                value: e[1].selectedTargetLanguage
            }
        }),
        l.$on("selection", e[14]),
        x = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("gmail_reading_view_original_button"),
                multiline: !1,
                zIndex: 2,
                $$slots: {
                    default: [Wf]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                i = kn(),
                s = Cn("div"),
                G && G.c(),
                a = kn(),
                r = Cn("div"),
                Mo(l.$$.fragment),
                c = kn(),
                d = Cn("div"),
                u = Cn("button"),
                m = Sn("svg"),
                g = Sn("g"),
                p = Sn("path"),
                h = Sn("path"),
                f = Sn("path"),
                _ = Sn("defs"),
                w = Sn("clipPath"),
                v = Sn("rect"),
                b = kn(),
                $ = Ln(P),
                E = kn(),
                y = Cn("div"),
                Mo(x.$$.fragment),
                T = kn(),
                C = Cn("div"),
                S = Cn("button"),
                L = Sn("svg"),
                k = Sn("path"),
                I = kn(),
                A = Ln(H),
                On(o, "class", "language-icon svelte-dm08r0"),
                On(s, "class", "language-selection-wrapper svelte-dm08r0"),
                On(r, "class", "language-selection-wrapper svelte-dm08r0"),
                On(p, "d", "M1.85295 4.86015V12.4035C1.85295 12.7953 2.05334 13.1545 2.38029 13.3504L8.70832 17.1167C8.72427 17.1262 8.7404 17.1353 8.75668 17.1439L11.8727 19L11.8621 17.3672L11.8685 16.4605L11.8717 16.4747V16.1699C11.8717 15.9893 11.9613 15.8272 12.0993 15.7262L12.3015 15.6059L12.3991 15.5494L12.394 15.5508L16.091 13.3504C16.418 13.1545 16.6184 12.7953 16.6184 12.4035V4.86015C16.6184 4.46829 16.418 4.10909 16.091 3.91316L9.76299 0.146947C9.43604 -0.0489825 9.03527 -0.0489825 8.70832 0.146947L2.38029 3.92404C2.05334 4.11997 1.85295 4.47918 1.85295 4.86015Z"),
                On(p, "class", "deepl-icon"),
                On(h, "d", "M6.68257 5.19787C7.10444 4.77336 7.77943 4.77336 8.2013 5.19787C8.50446 5.49621 8.60497 5.92588 8.50281 6.3113L11.4143 8.05411C11.4193 8.04902 11.4243 8.04396 11.4294 8.03894C11.8513 7.61442 12.5263 7.61442 12.9481 8.03894C13.4017 8.48522 13.4017 9.2254 12.9481 9.67168C12.5263 10.0962 11.8513 10.0962 11.4294 9.67168C11.111 9.35838 11.0162 8.90024 11.1448 8.50062L11.1341 8.50683L8.24372 6.78659C8.23005 6.80156 8.21591 6.81624 8.2013 6.83062C7.77943 7.25514 7.10444 7.25514 6.68257 6.83062C6.22906 6.38434 6.22906 5.64416 6.68257 5.19787Z"),
                On(h, "fill", "#0f2b46"),
                On(f, "d", "M8.50819 11.5811L11.3455 9.88917L10.8182 9.58439L8.2574 11.1016C8.23971 11.0816 8.2212 11.062 8.20187 11.043C7.78 10.6185 7.10501 10.6185 6.68314 11.043C6.22963 11.4893 6.22963 12.2295 6.68314 12.6757C7.10501 13.1003 7.78 13.1003 8.20187 12.6757C8.50012 12.3822 8.60222 11.9616 8.50819 11.5811Z"),
                On(f, "fill", "#0f2b46"),
                On(g, "clip-path", "url(#clip0)"),
                On(v, "width", "18.5294"),
                On(v, "height", "19"),
                On(v, "fill", "white"),
                On(v, "transform", "matrix(-1 0 0 1 18.5294 0)"),
                On(w, "id", "clip0"),
                On(m, "width", "15"),
                On(m, "height", "15"),
                On(m, "viewBox", "0 0 19 19"),
                On(m, "fill", "white"),
                On(m, "xmlns", "http://www.w3.org/2000/svg"),
                On(m, "class", "deepl-logo-svg svelte-dm08r0"),
                On(u, "class", "translate-button svelte-dm08r0"),
                u.disabled = e[0],
                On(u, "paddingx", "none"),
                On(n, "class", "left-side svelte-dm08r0"),
                On(k, "d", "M15 1L19 5M19 5L15 9M19 5L1 5"),
                On(k, "stroke", M = e[2] ? "#0F2B46" : "#848F9B"),
                On(k, "stroke-width", "1.5"),
                On(k, "stroke-linecap", "round"),
                On(k, "stroke-linejoin", "round"),
                On(L, "width", "20"),
                On(L, "height", "10"),
                On(L, "viewBox", "0 0 20 10"),
                On(L, "fill", "none"),
                On(L, "xmlns", "http://www.w3.org/2000/svg"),
                On(L, "class", "svelte-dm08r0"),
                S.disabled = N = !e[2],
                On(S, "class", "forward-button svelte-dm08r0"),
                On(S, "paddingx", "none"),
                On(C, "class", "right-side svelte-dm08r0"),
                On(t, "class", "dl-gmail-email-toolbar svelte-dm08r0")
            },
            m(M, N) {
                yn(M, t, N),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s),
                G && G.m(s, null),
                bn(n, a),
                bn(n, r),
                Io(l, r, null),
                bn(n, c),
                bn(n, d),
                bn(d, u),
                bn(u, m),
                bn(m, g),
                bn(g, p),
                bn(g, h),
                bn(g, f),
                bn(m, _),
                bn(_, w),
                bn(w, v),
                bn(u, b),
                bn(u, $),
                bn(n, E),
                bn(n, y),
                Io(x, y, null),
                bn(t, T),
                bn(t, C),
                bn(C, S),
                bn(S, L),
                bn(L, k),
                bn(S, I),
                bn(S, A),
                O = !0,
                D || (R = [In(u, "click", Nn(An(e[8]))), In(S, "click", e[9])],
                D = !0)
            },
            p(e, t) {
                null != e[4] ? G ? (G.p(e, t),
                16 & t[0] && yo(G, 1)) : (G = Uf(e),
                G.c(),
                yo(G, 1),
                G.m(s, null)) : G && ($o(),
                xo(G, 1, 1, (()=>{
                    G = null
                }
                )),
                Eo());
                const n = {};
                1 & t[0] && (n.disabled = e[0]),
                2 & t[0] && (n.value = e[1].selectedTargetLanguage),
                l.$set(n),
                (!O || 1 & t[0]) && (u.disabled = e[0]);
                const o = {};
                4 & t[0] | 4 & t[1] && (o.$$scope = {
                    dirty: t,
                    ctx: e
                }),
                x.$set(o),
                (!O || 4 & t[0] && M !== (M = e[2] ? "#0F2B46" : "#848F9B")) && On(k, "stroke", M),
                (!O || 4 & t[0] && N !== (N = !e[2])) && (S.disabled = N)
            },
            i(e) {
                O || (yo(G),
                yo(l.$$.fragment, e),
                yo(x.$$.fragment, e),
                O = !0)
            },
            o(e) {
                xo(G),
                xo(l.$$.fragment, e),
                xo(x.$$.fragment, e),
                O = !1
            },
            d(e) {
                e && xn(t),
                G && G.d(),
                Ao(l),
                Ao(x),
                D = !1,
                Jt(R)
            }
        }
    }
    function Uf(e) {
        let t, n;
        return t = new wr({
            props: {
                disabled: e[0],
                value: e[4],
                websiteSettings: cr,
                customClass: "borderless",
                fontSize: "sm"
            }
        }),
        t.$on("selection", e[13]),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                1 & n[0] && (o.disabled = e[0]),
                16 & n[0] && (o.value = e[4]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Wf(e) {
        let t, n, o, i, s, a;
        return {
            c() {
                t = Cn("button"),
                n = Sn("svg"),
                o = Sn("path"),
                On(o, "d", "M7 16L3 12M3 12L7 8M3 12L21 12"),
                On(o, "stroke", i = e[2] ? "#000" : "#848F9B"),
                On(o, "stroke-width", "2"),
                On(o, "stroke-linecap", "round"),
                On(o, "stroke-linejoin", "round"),
                On(n, "height", "20px"),
                On(n, "width", "20px"),
                On(n, "viewBox", "0 0 24 24"),
                On(n, "fill", "none"),
                On(n, "xmlns", "http://www.w3.org/2000/svg"),
                On(t, "class", "show-original-button svelte-dm08r0"),
                On(t, "paddingx", "none"),
                Gn(t, "enabled", e[2])
            },
            m(i, r) {
                yn(i, t, r),
                bn(t, n),
                bn(n, o),
                s || (a = In(t, "click", Nn(An(e[7]))),
                s = !0)
            },
            p(e, n) {
                4 & n[0] && i !== (i = e[2] ? "#000" : "#848F9B") && On(o, "stroke", i),
                4 & n[0] && Gn(t, "enabled", e[2])
            },
            d(e) {
                e && xn(t),
                s = !1,
                a()
            }
        }
    }
    function Ff(e) {
        let t, n, o = e[5] && e[6] && Bf(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, n) {
                e[5] && e[6] ? o ? (o.p(e, n),
                96 & n[0] && yo(o, 1)) : (o = Bf(e),
                o.c(),
                yo(o, 1),
                o.m(t.parentNode, t)) : o && ($o(),
                xo(o, 1, 1, (()=>{
                    o = null
                }
                )),
                Eo())
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function jf(e, n, o) {
        let i, s, a, r, l, c, d, u, m;
        on(e, Po, (e=>o(1, i = e)));
        let g, p, h, f, _ = !1, w = !1, v = !1, b = !1, $ = !1, {container: E} = n;
        Yn((async()=>{
            L(),
            k(),
            await C(),
            o(3, g = i.selectedTargetLanguage),
            setTimeout((()=>{
                o(6, $ = !0)
            }
            ), 250),
            window.addEventListener("popstate", T)
        }
        )),
        Xn((()=>{
            window.removeEventListener("popstate", T)
        }
        ));
        const y = ()=>{
            s.innerText = a.innerText,
            s.innerHTML = a.innerHTML,
            d.innerText = c,
            o(11, w = !1)
        }
          , x = e=>{
            d && (e ? d.classList.add("deepl-gmail-loading-skeleton") : d.classList.remove("deepl-gmail-loading-skeleton"))
        }
          , T = ()=>{
            document.querySelectorAll(Mf.HTML_TAG_NAME).forEach((e=>{
                e.cleanupDOM,
                e.remove()
            }
            ))
        }
          , C = async()=>{
            if (!r)
                return;
            if (u = await dt(r),
            o(5, f = lt(u)),
            !f)
                return;
            const e = mt(ct(u));
            o(4, h = e)
        }
          , S = async()=>{
            const e = `<a href="https://www.deepl.com/pro" target="_blank">${chrome.i18n.getMessage("gmail_forwarding_link")}</a>`;
            let t;
            if (_)
                t = s.innerHTML;
            else {
                const n = `<p style="text-align: center;">${chrome.i18n.getMessage("gmail_forwarding_title")} ${e}</p>`;
                t = `${s.innerHTML}<br>${n}`
            }
            const n = {
                html: t,
                text: (new DOMParser).parseFromString(t, "text/html").body.textContent
            }
              , i = document.querySelector("[contenteditable='true']");
            i.focus(),
            setTimeout((()=>{
                i.focus(),
                gi(i, n, !1),
                o(12, b = !1)
            }
            ), 300)
        }
          , L = ()=>{
            const e = Array.from(E.children).filter((e=>"div" === e.tagName.toLowerCase()));
            if (3 !== e.length)
                return;
            const t = e[1];
            if (!t)
                return;
            const n = Array.from(t.children).filter((e=>"div" === e.tagName.toLowerCase()));
            if (!n || !n.length)
                return;
            const o = n[2];
            o && (a = o.cloneNode(!0),
            s = o,
            o.innerHTML,
            r = o.innerText)
        }
          , k = ()=>{
            const e = document.querySelector("[data-thread-perm-id]");
            e && (d = e,
            l = e.innerText,
            c = e.innerText)
        }
        ;
        return e.$$set = e=>{
            "container"in e && o(10, E = e.container)
        }
        ,
        e.$$.update = ()=>{
            6145 & e.$$.dirty[0] && o(2, m = w && !v && !b),
            2 & e.$$.dirty[0] && (_ = !0 === i.isLoggedIn && !0 === i.isProUser)
        }
        ,
        [v, i, m, g, h, f, $, y, async()=>{
            if (!s)
                return;
            const {domElements: e, strings: n, cloneContainer: i} = gf(s)
              , a = n.reduce(((e,t)=>e + t.length), 0);
            if (!_ && a > $f)
                return t({
                    action: "dlTrackGmailCharLimitReached",
                    payload: {
                        gmailActionType: Cd(Te.READING_VIEW_TRANSLATE)
                    }
                }),
                p = Mf.createElement(),
                p.createDOM({
                    onCloseCharLimitPopup: T
                }),
                void document.body.appendChild(p);
            o(0, v = !0);
            const r = n.map((e=>({
                text: e
            })))
              , c = [{
                text: l
            }];
            (e=>{
                if (!e)
                    return;
                const {height: t} = e.getBoundingClientRect()
                  , n = Math.floor(t / 20)
                  , o = [];
                for (let e = 0; e < n; e++)
                    o.push(`<div style="width: ${i = 35,
                    s = 99,
                    Math.floor(Math.random() * (s - i + 1)) + i}%" class="deepl-gmail-loading-skeleton">line</div>`);
                var i, s;
                e.innerHTML = o.join("")
            }
            )(s),
            x(!0);
            try {
                const [n,a] = await Promise.all([t({
                    action: "dlRequestGmailReceivedEmailTranslation",
                    payload: {
                        targetLang: g,
                        sourceLang: h,
                        requests: r,
                        domainName: window.location.hostname
                    }
                }), t({
                    action: "dlRequestGmailReceivedEmailTranslation",
                    payload: {
                        targetLang: g,
                        sourceLang: h,
                        requests: c,
                        domainName: window.location.hostname
                    }
                })]);
                if (Kl({
                    strings: n[0]?.texts,
                    domElements: e
                }),
                s.innerText = i.innerText,
                s.innerHTML = i.innerHTML,
                x(!1),
                a[0]?.text) {
                    const e = a[0]?.text;
                    l = e,
                    d.innerText = e
                }
                o(0, v = !1),
                o(11, w = !0)
            } catch (e) {
                (e=>{
                    cr.update({
                        error: e.message ? e.message : e
                    })
                }
                )(e),
                o(0, v = !1),
                y()
            }
        }
        , ()=>{
            o(12, b = !0);
            if (!__())
                return void o(12, b = !1);
            const e = w_();
            e ? (e.scrollIntoView(),
            setTimeout((()=>{
                h_(e),
                f_("[contenteditable='true']", S)
            }
            ), 300)) : o(12, b = !1)
        }
        , E, w, b, e=>{
            o(4, h = e.detail.selectedOption.value)
        }
        , e=>{
            o(3, g = e.detail.selectedOption.value)
        }
        ]
    }
    class qf extends Oo {
        constructor(e) {
            super(),
            No(this, e, jf, Ff, tn, {
                container: 10
            }, null, [-1, -1])
        }
    }
    class Vf {
        static HTML_TAG_NAME = "deepl-gmail-translate-email-toolbar";
        static createElement = (e=document)=>{
            const t = e.createElement(Vf.HTML_TAG_NAME)
              , n = new Vf(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.container = document.createElement("div"),
            this.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowRoot.addEventListener("mouseup", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.domElement.shadowRoot.addEventListener("mousedown", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = ({container: e})=>{
            this.mainComponent = new qf({
                target: this.domElement.shadowContainer,
                props: {
                    container: e
                }
            })
        }
        ;
        cleanupDOM() {
            this.shadowContainer.remove(),
            this.mainComponent && this.mainComponent.$destroy()
        }
    }
    function Zf(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "dot svelte-137wg5b")
            },
            m(e, n) {
                yn(e, t, n)
            },
            d(e) {
                e && xn(t)
            }
        }
    }
    function Kf(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g = !e[2] && !e[0].wasGmailOnboardingShown && Yf();
        return c = new Nh({
            props: {
                checked: e[0].isGmailEnabled
            }
        }),
        c.$on("change", e[7]),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                g && g.c(),
                o = kn(),
                i = Cn("div"),
                s = Cn("div"),
                a = Cn("div"),
                a.textContent = `${chrome.i18n.getMessage("gmail_onboarding_toggle")}`,
                r = kn(),
                l = Cn("div"),
                Mo(c.$$.fragment),
                On(n, "class", "svelte-137wg5b"),
                Gn(n, "content", !e[2] && !e[0].wasGmailOnboardingShown),
                On(a, "class", "switch-content svelte-137wg5b"),
                On(l, "class", "switch"),
                On(s, "class", "switch-container svelte-137wg5b"),
                Gn(s, "topBorder", !e[0].wasGmailOnboardingShown),
                On(i, "class", "footer"),
                On(t, "class", "onboarding-popup svelte-137wg5b")
            },
            m(p, h) {
                yn(p, t, h),
                bn(t, n),
                g && g.m(n, null),
                bn(t, o),
                bn(t, i),
                bn(i, s),
                bn(s, a),
                bn(s, r),
                bn(s, l),
                Io(c, l, null),
                d = !0,
                u || (m = [mn(wi.call(null, t, {
                    isShadow: !0,
                    exceptions: ["#dl-gmail-settings-icon"]
                })), In(t, "click_outside", e[8])],
                u = !0)
            },
            p(e, t) {
                e[2] || e[0].wasGmailOnboardingShown ? g && ($o(),
                xo(g, 1, 1, (()=>{
                    g = null
                }
                )),
                Eo()) : g ? (g.p(e, t),
                5 & t && yo(g, 1)) : (g = Yf(),
                g.c(),
                yo(g, 1),
                g.m(n, null)),
                (!d || 5 & t) && Gn(n, "content", !e[2] && !e[0].wasGmailOnboardingShown);
                const o = {};
                1 & t && (o.checked = e[0].isGmailEnabled),
                c.$set(o),
                (!d || 1 & t) && Gn(s, "topBorder", !e[0].wasGmailOnboardingShown)
            },
            i(e) {
                d || (yo(g),
                yo(c.$$.fragment, e),
                d = !0)
            },
            o(e) {
                xo(g),
                xo(c.$$.fragment, e),
                d = !1
            },
            d(e) {
                e && xn(t),
                g && g.d(),
                Ao(c),
                u = !1,
                Jt(m)
            }
        }
    }
    function Yf(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w, v, b, $, E;
        return c = new $r({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }),
        p = new $r({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }),
        v = new $r({
            props: {
                width: "16px",
                height: "16px",
                padding: "3px 0 0 0"
            }
        }),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                o.textContent = `${chrome.i18n.getMessage("gmail_onboarding_title")}`,
                i = kn(),
                s = Cn("div"),
                a = kn(),
                r = Cn("div"),
                l = Cn("div"),
                Mo(c.$$.fragment),
                d = kn(),
                u = Cn("div"),
                u.textContent = `${chrome.i18n.getMessage("gmail_onboarding_body_1")}`,
                m = kn(),
                g = Cn("div"),
                Mo(p.$$.fragment),
                h = kn(),
                f = Cn("div"),
                f.textContent = `${chrome.i18n.getMessage("gmail_onboarding_body_2")}`,
                _ = kn(),
                w = Cn("div"),
                Mo(v.$$.fragment),
                b = kn(),
                $ = Cn("div"),
                $.textContent = `${chrome.i18n.getMessage("gmail_onboarding_body_3")}`,
                On(n, "class", "left svelte-137wg5b"),
                On(s, "class", "right"),
                On(t, "class", "title svelte-137wg5b"),
                On(u, "class", "copy-text svelte-137wg5b"),
                On(l, "class", "copy svelte-137wg5b"),
                On(f, "class", "copy-text svelte-137wg5b"),
                On(g, "class", "copy svelte-137wg5b"),
                On($, "class", "copy-text svelte-137wg5b"),
                On(w, "class", "copy svelte-137wg5b"),
                On(r, "class", "body svelte-137wg5b")
            },
            m(e, y) {
                yn(e, t, y),
                bn(t, n),
                bn(n, o),
                bn(t, i),
                bn(t, s),
                yn(e, a, y),
                yn(e, r, y),
                bn(r, l),
                Io(c, l, null),
                bn(l, d),
                bn(l, u),
                bn(r, m),
                bn(r, g),
                Io(p, g, null),
                bn(g, h),
                bn(g, f),
                bn(r, _),
                bn(r, w),
                Io(v, w, null),
                bn(w, b),
                bn(w, $),
                E = !0
            },
            p: Kt,
            i(e) {
                E || (yo(c.$$.fragment, e),
                yo(p.$$.fragment, e),
                yo(v.$$.fragment, e),
                E = !0)
            },
            o(e) {
                xo(c.$$.fragment, e),
                xo(p.$$.fragment, e),
                xo(v.$$.fragment, e),
                E = !1
            },
            d(e) {
                e && xn(t),
                e && xn(a),
                e && xn(r),
                Ao(c),
                Ao(p),
                Ao(v)
            }
        }
    }
    function Xf(e) {
        let t, n, o, i, s, a, r, l = e[3] && Zf(), c = e[1] && Kf(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = kn(),
                l && l.c(),
                i = kn(),
                c && c.c(),
                On(n, "class", "icon svelte-137wg5b"),
                On(n, "id", "dl-gmail-settings-icon"),
                Gn(n, "notification", e[3]),
                Gn(n, "isOnboardingPopupOpen", e[1]),
                Gn(n, "enabled", e[0].isGmailEnabled),
                On(t, "class", "deepl-gmail-header-toolbar svelte-137wg5b")
            },
            m(d, u) {
                yn(d, t, u),
                bn(t, n),
                bn(t, o),
                l && l.m(t, null),
                bn(t, i),
                c && c.m(t, null),
                s = !0,
                a || (r = In(n, "click", Nn(An(e[6]))),
                a = !0)
            },
            p(e, [o]) {
                (!s || 8 & o) && Gn(n, "notification", e[3]),
                (!s || 2 & o) && Gn(n, "isOnboardingPopupOpen", e[1]),
                (!s || 1 & o) && Gn(n, "enabled", e[0].isGmailEnabled),
                e[3] ? l || (l = Zf(),
                l.c(),
                l.m(t, i)) : l && (l.d(1),
                l = null),
                e[1] ? c ? (c.p(e, o),
                2 & o && yo(c, 1)) : (c = Kf(e),
                c.c(),
                yo(c, 1),
                c.m(t, null)) : c && ($o(),
                xo(c, 1, 1, (()=>{
                    c = null
                }
                )),
                Eo())
            },
            i(e) {
                s || (yo(c),
                s = !0)
            },
            o(e) {
                xo(c),
                s = !1
            },
            d(e) {
                e && xn(t),
                l && l.d(),
                c && c.d(),
                a = !1,
                r()
            }
        }
    }
    function Qf(e, n, o) {
        let i;
        on(e, Po, (e=>o(0, i = e)));
        let s = !1
          , a = !1
          , r = !1;
        const l = async e=>{
            o(1, s = e),
            e || i.wasGmailOnboardingShown || await Po.set({
                wasGmailOnboardingShown: !0
            }),
            t({
                action: "dlTrackUILocationClicked",
                payload: I.gmailOnboardingIcon
            }),
            e && t({
                action: "dlTrackOnboardingModalShown",
                payload: {
                    nicheIntegration: K.gmail
                }
            })
        }
          , c = async e=>{
            await Po.set({
                isGmailEnabled: e
            }),
            t({
                action: "dlTrackCustomizationEnabledEvent",
                payload: {
                    nicheIntegration: K.gmail,
                    uiLocation: I.gmailOnboardingPopup,
                    customizationEnabled: e
                }
            })
        }
        ;
        return e.$$.update = ()=>{
            1 & e.$$.dirty && o(2, a = !0 === i.isLoggedIn && !0 === i.isProUser),
            1 & e.$$.dirty && o(3, r = !i.wasGmailOnboardingShown)
        }
        ,
        [i, s, a, r, l, c, ()=>{
            l(!s)
        }
        , e=>c(e.detail.checked), ()=>{
            l(!1)
        }
        ]
    }
    class Jf extends Oo {
        constructor(e) {
            super(),
            No(this, e, Qf, Xf, tn, {})
        }
    }
    class e_ {
        static HTML_TAG_NAME = "deepl-gmail-header-toolbar";
        static createElement = (e=document)=>{
            const t = e.createElement(e_.HTML_TAG_NAME)
              , n = new e_(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowRoot.addEventListener("mouseup", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.domElement.shadowRoot.addEventListener("mousedown", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = ()=>{
            this.domElement.mainComponent = new Jf({
                target: this.domElement.shadowContainer
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    function t_(e) {
        let t;
        return {
            c() {
                t = Cn("div"),
                On(t, "class", "dl-gmail")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function n_(e, t, n) {
        let o, i, s, a, r;
        on(e, Po, (e=>n(5, o = e)));
        let l = !1;
        const c = ()=>{
            m(),
            o.isGmailEnabled ? d() : u()
        }
          , d = ()=>{
            g(),
            p()
        }
          , u = ()=>{
            const e = [Mf.HTML_TAG_NAME, Vf.HTML_TAG_NAME, zf.HTML_TAG_NAME];
            a_(e)
        }
          , m = ()=>{
            const e = "data-has-dl-icon"
              , t = document.querySelector("header");
            if (!t || "banner" !== t.getAttribute("role") || t.hasAttribute(e))
                return;
            const n = t.querySelector("[role='search']");
            if (!n)
                return;
            const o = n.parentNode;
            if (!o)
                return;
            const i = e_.createElement();
            o.insertAdjacentElement("afterend", i),
            i.createDOM(),
            t.setAttribute(e, !0)
        }
          , g = ()=>{
            if (r_()) {
                const e = l_();
                if (!e)
                    return;
                e.forEach((e=>{
                    const t = u_(e);
                    if (!t || c_(e))
                        return;
                    const n = t.parentNode;
                    if (!n)
                        return;
                    const o = Vf.createElement();
                    n.after(o),
                    o.createDOM({
                        container: e
                    })
                }
                ))
            }
        }
          , p = ()=>{
            const e = document.activeElement;
            if (!e)
                return;
            const t = e.hasAttribute("contenteditable")
              , n = d_(e)
              , o = e.hasAttribute(bf)
              , i = e !== a
              , s = !r && (!t || n || i)
              , c = t && (!o || i) && !n;
            !s || c || l ? (l = !1,
            s && f(),
            c && (f(),
            h(e))) : l = !0
        }
          , h = e=>{
            const t = zf.createElement();
            s = t,
            a = e,
            e.setAttribute(bf, "true"),
            document.body.appendChild(t);
            const n = (e=>{
                const t = function(e) {
                    let t = e;
                    for (; null !== t; ) {
                        if ("dialog" === t.getAttribute("role"))
                            return t;
                        t = t.parentElement
                    }
                    return null
                }(e);
                return t ? t.querySelector('input[name="subjectbox"]') : null
            }
            )(e);
            t.createDOM({
                container: e,
                subjectInput: n,
                updateLockStatus: _
            })
        }
          , f = ()=>{
            s && s.cleanupDOM();
            const e = Array.from(document.querySelectorAll(zf.HTML_TAG_NAME));
            for (const t of e)
                t.remove();
            document.querySelectorAll(`[contenteditable][${bf}="true"]`).forEach((e=>e.removeAttribute(bf))),
            s = null
        }
          , _ = e=>{
            r = e
        }
          , w = async e=>{
            if ("dlChangeActiveTabStatus" === e.action)
                e.payload.isActive ? v() : b()
        }
          , v = ()=>{
            i && clearInterval(i),
            i = setInterval(c, 200)
        }
          , b = ()=>{
            clearInterval(i)
        }
        ;
        return Yn((()=>{
            v(),
            chrome.runtime.onMessage.addListener(w)
        }
        )),
        Xn((()=>{
            u(),
            i && b(),
            chrome.runtime.onMessage.removeListener(w)
        }
        )),
        []
    }
    class o_ extends Oo {
        constructor(e) {
            super(),
            No(this, e, n_, t_, tn, {})
        }
    }
    class i_ {
        static HTML_TAG_NAME = "deepl-gmail-controller";
        static createElement = (e=document)=>{
            const t = e.createElement(i_.HTML_TAG_NAME)
              , n = new i_(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.showOnboarding = n.showOnboarding,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer),
            this.domElement.shadowRoot.addEventListener("mouseup", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            )),
            this.domElement.shadowRoot.addEventListener("mousedown", (e=>{
                e.stopPropagation(),
                e.stopImmediatePropagation()
            }
            ))
        }
        createDOM = ()=>{
            this.domElement.mainComponent = new o_({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.domElement.cleanupDOM,
                    controller: this
                }
            })
        }
        ;
        cleanupDOM = ()=>{
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
        ;
        showOnboarding = ()=>{
            this.domElement.mainComponent.showOnboarding()
        }
    }
    const s_ = ()=>document.querySelector(i_.HTML_TAG_NAME)
      , a_ = e=>{
        try {
            for (const t of e)
                if (t) {
                    const e = Array.from(document.getElementsByTagName(t));
                    for (const t of e)
                        t.cleanupDOM && t.cleanupDOM(),
                        t.remove()
                }
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
      , r_ = ()=>document.querySelectorAll("[data-message-id]").length > 0
      , l_ = ()=>document.querySelectorAll("[data-message-id]")
      , c_ = e=>!!e && !!e.querySelector(Vf.HTML_TAG_NAME)
      , d_ = e=>{
        const {bottom: t, right: n} = e.getBoundingClientRect()
          , o = t - 30
          , i = n - 30;
        let s = !1;
        return document.querySelectorAll('[role="dialog"]').forEach((t=>{
            const n = (a = i,
            r = o,
            l = t.getBoundingClientRect(),
            a >= l.left && a <= l.right && r >= l.top && r <= l.bottom);
            var a, r, l;
            const c = t.contains(e);
            n && !c && (s = !0)
        }
        )),
        s
    }
      , u_ = e=>{
        if (e)
            return e.querySelector("table")
    }
      , m_ = e=>{
        const t = ut()
          , n = t.filter((e=>void 0 === e.regionalVariant)).map((e=>({
            value: e.value,
            label: `<strong>${e.value}</strong> - ${e.label}`,
            selectedOptionLabel: e.value
        })))
          , o = t.find((e=>"EN-GB" === e.value))
          , i = t.find((e=>"PT-PT" === e.value));
        return [...[...n, ...[{
            ...o,
            value: "EN",
            selectedOptionLabel: "EN",
            label: `<strong>EN</strong> - ${chrome.i18n.getMessage("supported_languages_EN")}`
        }, {
            ...i,
            value: "PT",
            selectedOptionLabel: "PT",
            label: `<strong>PT</strong> - ${chrome.i18n.getMessage("supported_languages_PT")}`
        }]].map((t=>e && t.value === e.value ? {
            ...t,
            label: `${t.label} ${chrome.i18n.getMessage("gmail_language_detected")}`
        } : t))].sort(((e,t)=>e.value.localeCompare(t.value)))
    }
      , g_ = e=>{
        const t = e.getBoundingClientRect();
        return {
            x: t.left + t.width / 2,
            y: t.top + t.height / 2
        }
    }
      , p_ = (e,t)=>{
        const n = new MouseEvent("click",{
            view: window,
            bubbles: !0,
            cancelable: !0,
            clientX: e,
            clientY: t
        });
        document.elementFromPoint(e, t)?.dispatchEvent(n)
    }
      , h_ = e=>{
        const {x: t, y: n} = g_(e);
        p_(t, n)
    }
      , f_ = (e,t)=>{
        const n = document.body;
        new MutationObserver(((o,i)=>{
            for (const s of o)
                if ("childList" === s.type && n.querySelector(e)) {
                    i.disconnect(),
                    t(n.querySelector(e));
                    break
                }
        }
        )).observe(n, {
            childList: !0,
            subtree: !0
        })
    }
      , __ = ()=>{
        const e = document.querySelectorAll("[data-message-id]");
        for (const t of e) {
            const e = t.nextElementSibling;
            if (e && "DIV" === e.tagName)
                return e
        }
        return null
    }
      , w_ = ()=>{
        const e = document.querySelectorAll('span[role="link"]');
        let t;
        for (let n = 0; n < e.length; n++) {
            const o = e[n]
              , i = o.previousElementSibling;
            if (i && "SPAN" === i.tagName && "link" === i.getAttribute("role")) {
                const e = o.parentElement
                  , n = e.querySelectorAll('span[role="link"]')
                  , i = Array.from(e.children).filter((e=>e.matches("span")));
                2 !== (2 === n.length && i.length) && 3 !== (3 === n.length && i.length) || (t = o)
            }
        }
        return t
    }
    ;
    let v_, b_, $_, E_, y_, x_, T_, C_, S_, L_;
    const {deepl_inline_ui: k_} = L;
    function M_({websiteData: e, platformBehaviour: t=K.default, textProcessingMode: n=Y.translate}) {
        try {
            let o;
            switch (I_(),
            b_ = Zm.createElement(),
            b_.platformBehaviour = t,
            b_.textProcessingMode = n,
            b_.style.zIndex = k_.z_index,
            document.documentElement.appendChild(b_),
            t) {
            case K.gdocs:
                o = qe;
                break;
            case K.default:
            default:
                o = jl
            }
            b_.createDOM(o, I_, e),
            cr.update({
                isTranslationTooltipInjected: !0
            })
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function I_() {
        try {
            b_ && (b_.cleanupDOM(),
            Array.from(document.getElementsByTagName(Zm.HTML_TAG_NAME), (e=>e.remove())),
            cr.update({
                isTranslationTooltipInjected: !1
            }),
            b_ = void 0)
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function A_(e=K.default) {
        try {
            if ($_)
                return;
            let t;
            switch ($_ = uu.createElement(),
            $_.style.zIndex = k_.z_index,
            document.documentElement.appendChild($_),
            e) {
            case K.gdocs:
                t = "deepl-gdocs-icon";
                break;
            case K.default:
            default:
                t = sg.HTML_TAG_NAME
            }
            const n = function(e) {
                if (!e)
                    return;
                const t = e.getBoundingClientRect()
                  , n = document.body.parentNode.getBoundingClientRect()
                  , {top: o, left: i, right: s, bottom: a, height: r, width: l} = t;
                return {
                    x: i - n.left,
                    y: a - n.top,
                    top: o,
                    bottom: a,
                    right: n.width - s,
                    left: i + window.pageXOffset,
                    width: l,
                    height: r
                }
            }(document.querySelector(t).shadowRoot.querySelector('[data-qa="deepl-inline-translate-menu-icon"]'));
            $_.createDOM(n, N_),
            cr.update({
                isInlineTranslateSettingsTooltipInjected: !0
            }),
            vi((()=>{
                N_()
            }
            ))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function N_() {
        try {
            if (!$_)
                return;
            $_.cleanupDOM(),
            Array.from(document.getElementsByTagName("deepl-inline-translate-settings-tooltip"), (e=>e.remove())),
            cr.update({
                isInlineTranslateSettingsTooltipInjected: !1
            }),
            $_ = void 0
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function O_() {
        try {
            if (document.querySelector(Gp.HTML_TAG_NAME))
                return;
            v_ = Gp.createElement(),
            document.documentElement.appendChild(v_),
            v_.createDOM(),
            document.addEventListener("click", D_),
            vi((()=>{
                D_()
            }
            ))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function D_() {
        try {
            v_ && (v_.cleanupDOM(),
            Array.from(document.getElementsByTagName(Gp.HTML_TAG_NAME), (e=>e.remove())),
            v_ = void 0,
            document.removeEventListener("click", D_))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function R_() {
        try {
            if (document.querySelector(vh.HTML_TAG_NAME))
                return;
            T_ = vh.createElement(),
            document.documentElement.appendChild(T_),
            T_.createDOM(),
            vi((()=>{
                H_()
            }
            ))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function P_() {
        try {
            if (document.querySelector(Kh.HTML_TAG_NAME))
                return;
            C_ = Kh.createElement(),
            document.documentElement.appendChild(C_),
            C_.createDOM(),
            vi((()=>{
                G_()
            }
            ))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function H_() {
        try {
            T_ && (T_.cleanupDOM(),
            Array.from(document.getElementsByTagName(vh.HTML_TAG_NAME), (e=>e.remove())),
            T_ = void 0,
            document.removeEventListener("click", H_))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function G_() {
        try {
            C_ && (C_.cleanupDOM(),
            Array.from(document.getElementsByTagName(Kh.HTML_TAG_NAME), (e=>e.remove())),
            C_ = void 0,
            document.removeEventListener("click", G_))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function z_() {
        try {
            if (ol())
                return;
            S_ = il(),
            document.documentElement.appendChild(S_),
            S_.createDOM(),
            vi((()=>{
                B_()
            }
            ))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function B_() {
        try {
            S_ && (S_.cleanupDOM(),
            Array.from(document.getElementsByTagName("deepl-zendesk-controller"), (e=>e.remove())),
            S_ = void 0,
            document.removeEventListener("click", B_))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function U_() {
        try {
            if (document.querySelector(Xw.HTML_TAG_NAME))
                return;
            y_ = Xw.createElement(),
            document.body.appendChild(y_),
            y_.createDOM(),
            vi((()=>{
                j_()
            }
            ))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function W_() {
        try {
            if (s_())
                return;
            L_ = i_.createElement(),
            document.documentElement.appendChild(L_),
            L_.createDOM(),
            vi((()=>{
                F_()
            }
            ))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function F_() {
        try {
            L_ && (L_.cleanupDOM(),
            Array.from(document.getElementsByTagName(i_.HTML_TAG_NAME), (e=>e.remove())),
            L_ = void 0,
            document.removeEventListener("click", F_))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function j_() {
        try {
            if (y_) {
                y_.cleanupDOM();
                const e = Array.from(document.querySelectorAll(Xw.HTML_TAG_NAME));
                for (const t of e)
                    t.remove();
                y_ = void 0,
                document.removeEventListener("click", j_)
            }
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    async function q_(e) {
        try {
            if (!E_)
                return;
            E_.cleanupDOM(),
            Array.from(document.getElementsByTagName("deepl-inline-trigger"), (e=>e.remove())),
            E_ = void 0;
            if (!(await Nd(["isInlineHighlighterShown"])).isInlineHighlighterShown && !e.target.contains(E_)) {
                try {
                    t({
                        action: "dltrackCloseInlineHighlighter",
                        payload: {
                            trigger: Z.outside_click
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
                Po.set({
                    isInlineHighlighterShown: !0
                })
            }
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function V_(e, t) {
        q_();
        try {
            E_ = sg.createElement(),
            E_.style.zIndex = k_.z_index,
            document.documentElement.appendChild(E_),
            E_.createDOM(e, t),
            vi((()=>{
                q_()
            }
            ))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    function Z_(e) {
        const t = t=>{
            requestAnimationFrame((()=>{
                const n = window.getSelection();
                if (!n.toString().trim())
                    return;
                if (2 === t?.button)
                    return;
                const o = n.getRangeAt(0)?.commonAncestorContainer;
                if ((o.contains(t.target) || t.target.contains(o)) && !n.isCollapsed && !n.anchorNode?.parentNode?.isContentEditable) {
                    let n = {
                        clientX: t.clientX || 0,
                        pageY: t.pageY || 0,
                        detail: t?.detail || 0,
                        isOutsideOfView: X_(t)
                    };
                    V_(e, n)
                }
            }
            ))
        }
        ;
        document.addEventListener("mouseup", t),
        document.addEventListener("mousedown", q_),
        vi((()=>{
            document.removeEventListener("mouseup", t),
            document.removeEventListener("mousedown", q_)
        }
        ))
    }
    function K_(e, t) {
        try {
            x_ = Cg.createElement(),
            x_.style.zIndex = k_.z_index,
            document.documentElement.appendChild(x_),
            x_.createDOM(e, t),
            vi((()=>{
                x_.cleanupDOM()
            }
            ))
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    const Y_ = (e=V.initial)=>{
        const t = uf.createElement();
        document.documentElement.appendChild(t),
        t.createDOM({
            reviewStage: e
        }),
        vi((()=>{
            t.cleanupDOM()
        }
        ))
    }
    ;
    function X_({clientX: e=0, pageY: t=0}={}) {
        const n = window.innerWidth || document.documentElement.innerWidth
          , o = window.scrollHeight || document.documentElement.scrollHeight;
        return e < 0 || e >= n || (t < 0 || t >= o)
    }
    function Q_(e) {
        switch (e) {
        case "web.whatsapp.com":
            Hc();
            break;
        case "twitter.com":
        case "tweetdeck.twitter.com":
            nd();
            break;
        case "www.linkedin.com":
            $d()
        }
    }
    async function J_(e) {
        const t = e.split(".");
        "deepl.com" === t.filter(((e,n)=>n === t.length - 1 || n === t.length - 2)).join(".") && (document.body.dataset.dlBrowserExtensionPresent = "true")
    }
    async function ew(e) {
        const t = await Nd(["shouldDisplayFeedbackPopup"]);
        if ("https://deepl.typeform.com/to/MkMfP2Y6" === e)
            t.shouldDisplayFeedbackPopup && (Po.set({
                shouldDisplayFeedbackPopup: !1
            }),
            Y_(V.feedback))
    }
    function tw(e, t) {
        if ("web.whatsapp.com" === t) {
            const t = document.documentElement.querySelector("#side");
            return !t || !t.contains(e)
        }
        return !0
    }
    function nw(e, t) {
        if ("web.whatsapp.com" === t) {
            const t = document.documentElement.querySelector("#side");
            if (t && t.contains(e))
                return !1
        }
        return !0
    }
    const ow = [];
    window.onerror = function(e) {
        /ResizeObserver/gm.test(e) && ow.forEach((e=>e.resize.disconnect()))
    }
    ;
    const iw = e=>"true" === e.contentEditable || "TEXTAREA" === e.nodeName && e.rows > 1;
    const sw = ({inputArea: e})=>{
        const t = cw(e);
        return {
            position: "absolute",
            top: t.top,
            left: t.left,
            width: t.width,
            height: t.height,
            isLanguageToolsPresent: !!document.querySelector("lt-toolbar"),
            isGrammarlyPresent: !!document.querySelector("grammarly-extension")
        }
    }
      , aw = ({inputArea: e})=>{
        const t = [];
        if (e)
            for (let n = e.parentElement; null !== n; n = n.parentElement)
                rw(n) && t.push(n);
        return t
    }
      , rw = e=>{
        const t = window.getComputedStyle(e)
          , n = t.getPropertyValue("overflow-y")
          , o = t.getPropertyValue("overflow-x")
          , i = ["hidden", "scroll", "auto"];
        return i.includes(n) || i.includes(o)
    }
      , lw = (e,t)=>{
        let n = {
            left: Math.max(e.left, t.left),
            right: Math.min(e.right, t.right),
            top: Math.max(e.top, t.top),
            bottom: Math.min(e.bottom, t.bottom)
        };
        return n.left >= n.right || n.top >= n.bottom ? null : n
    }
      , cw = e=>{
        let t = e.getBoundingClientRect()
          , n = {
            left: t.left,
            right: t.right,
            bottom: t.bottom,
            top: t.top
        };
        const o = {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0
        }
          , i = {
            top: 0,
            left: 0,
            right: window.innerWidth,
            bottom: window.innerHeight
        };
        for (let t = e.parentElement; null !== t && t !== e.ownerDocument.body; t = t.parentElement) {
            let e = t.getBoundingClientRect();
            const i = lw(n, e);
            if (i)
                n = i;
            else if (rw(t))
                return o
        }
        return n = lw(n, i),
        n ? {
            top: n.top,
            bottom: n.bottom,
            left: n.left,
            right: n.right,
            width: n.right - n.left,
            height: n.bottom - n.top
        } : o
    }
      , dw = [{
        domain: "zendesk.com",
        selectors: ['div[data-test-id="ticket-rich-text-editor"] [contenteditable="true"]'],
        uniqueDataAttributes: [{
            key: "testId",
            value: "ticket-rich-text-editor"
        }]
    }];
    const uw = {
        generalSettings: "GENERAL_SETTINGS",
        inputSettings: "INPUT_SETTINGS"
    };
    function mw(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                On(t, "class", "svelte-824gci")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function gw(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                On(t, "class", "svelte-824gci")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function pw(e) {
        let t;
        return {
            c() {
                t = Cn("span"),
                On(t, "class", "svelte-824gci")
            },
            m(e, n) {
                yn(e, t, n)
            },
            p: Kt,
            d(e) {
                e && xn(t)
            }
        }
    }
    function hw(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p;
        return o = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("input_translation_tooltip_turnoff"),
                $$slots: {
                    default: [mw]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        a = new xi({
            props: {
                tooltip: chrome.i18n.getMessage("input_translation_tooltip_settings"),
                $$slots: {
                    default: [gw]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        c = new xi({
            props: {
                tooltip: e[4],
                $$slots: {
                    default: [pw]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                Mo(o.$$.fragment),
                i = kn(),
                s = Cn("div"),
                Mo(a.$$.fragment),
                r = kn(),
                l = Cn("div"),
                Mo(c.$$.fragment),
                d = kn(),
                u = Cn("div"),
                On(n, "class", "dl-icon-circle dl-on-off svelte-824gci"),
                On(s, "class", "dl-icon-circle dl-settings svelte-824gci"),
                On(l, "class", "dl-icon-circle dl-icon svelte-824gci"),
                On(l, "data-qa", "input-translation-icon"),
                On(u, "class", "dl-icon-circle dl-loading svelte-824gci"),
                On(t, "class", "dl-input-icon svelte-824gci"),
                Gn(t, "is-input-translation-disabled", e[5]),
                Gn(t, "is-loading", e[3]),
                Gn(t, "is-minimized", e[2])
            },
            m(h, f) {
                yn(h, t, f),
                bn(t, n),
                Io(o, n, null),
                bn(t, i),
                bn(t, s),
                Io(a, s, null),
                bn(t, r),
                bn(t, l),
                Io(c, l, null),
                e[24](l),
                bn(t, d),
                bn(t, u),
                m = !0,
                g || (p = [In(n, "mouseenter", e[19]), In(n, "click", e[20]), In(s, "mouseenter", e[21]), In(s, "click", e[22]), In(l, "click", e[8]), In(l, "mouseenter", e[23])],
                g = !0)
            },
            p(e, n) {
                const i = {};
                1 & n[1] && (i.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                o.$set(i);
                const s = {};
                1 & n[1] && (s.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                a.$set(s);
                const r = {};
                16 & n[0] && (r.tooltip = e[4]),
                1 & n[1] && (r.$$scope = {
                    dirty: n,
                    ctx: e
                }),
                c.$set(r),
                (!m || 32 & n[0]) && Gn(t, "is-input-translation-disabled", e[5]),
                (!m || 8 & n[0]) && Gn(t, "is-loading", e[3]),
                (!m || 4 & n[0]) && Gn(t, "is-minimized", e[2])
            },
            i(e) {
                m || (yo(o.$$.fragment, e),
                yo(a.$$.fragment, e),
                yo(c.$$.fragment, e),
                m = !0)
            },
            o(e) {
                xo(o.$$.fragment, e),
                xo(a.$$.fragment, e),
                xo(c.$$.fragment, e),
                m = !1
            },
            d(n) {
                n && xn(t),
                Ao(o),
                Ao(a),
                Ao(c),
                e[24](null),
                g = !1,
                Jt(p)
            }
        }
    }
    function fw(e, o, i) {
        let s, a;
        const r = eo("deepl_settings");
        on(e, r, (e=>i(18, a = e)));
        let l, c, {inputArea: d} = o, {lockActiveElement: u} = o, {openSettings: m} = o, {closeSettings: g} = o, {hideOnboardingHighlighter: p} = o, {registerIconCallbacks: h} = o, {unregisterIconCallbacks: f} = o, {getActiveElement: _} = o, {setErrorMessage: w} = o, v = !1, b = !1, $ = "";
        const E = ()=>{
            y()
        }
          , y = ()=>{
            i(2, v = Gl(d, l))
        }
        ;
        async function x(e) {
            await r.set({
                targetLanguageUserInput: e.value,
                regionalVariant: e.regionalVariant
            }),
            L()
        }
        const S = async(e,n,o)=>{
            const s = _();
            switch (e.action) {
            case "dlTriggerTranslationShortcut":
                if (w(void 0),
                s !== d)
                    return;
                try {
                    t({
                        action: "dlTrackUseOfShortcut",
                        payload: {
                            shortcutType: A,
                            location: I.inputTranslationTriggerIcon
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
                if (a && a.targetLanguageUserInput) {
                    i(3, b = !0);
                    try {
                        await pf(d)
                    } catch (e) {
                        w(e)
                    }
                    i(3, b = !1)
                } else
                    m({
                        fromShortcut: !0
                    });
                o();
                break;
            case "dlChangeLanguageShortcut":
                if (s !== d)
                    return;
                i(3, b = !0);
                try {
                    m({
                        fromShortcut: !0
                    })
                } catch (e) {
                    w(e)
                }
                i(3, b = !1),
                o()
            }
        }
        ;
        async function L() {
            if (w(void 0),
            p(),
            a.targetLanguageUserInput && "undefined" != a.targetLanguageUserInput) {
                g(),
                i(3, b = !0);
                try {
                    await pf(d),
                    c || n(k.hintKeyboardShortcut)
                } catch (e) {
                    w(e)
                }
                i(3, b = !1)
            } else
                m()
        }
        function M(e) {
            t({
                action: "dlTrackIconHover",
                payload: {
                    uiLocation: e,
                    domainName: window.location.host
                }
            })
        }
        Yn((()=>{
            chrome.runtime.onMessage.addListener(S),
            h({
                processRefreshCycle: E,
                languageChanged: x,
                triggerTranslation: L
            })
        }
        )),
        Xn((()=>{
            chrome.runtime.onMessage.removeListener(S),
            f()
        }
        ));
        return e.$$set = e=>{
            "inputArea"in e && i(9, d = e.inputArea),
            "lockActiveElement"in e && i(10, u = e.lockActiveElement),
            "openSettings"in e && i(0, m = e.openSettings),
            "closeSettings"in e && i(11, g = e.closeSettings),
            "hideOnboardingHighlighter"in e && i(12, p = e.hideOnboardingHighlighter),
            "registerIconCallbacks"in e && i(13, h = e.registerIconCallbacks),
            "unregisterIconCallbacks"in e && i(14, f = e.unregisterIconCallbacks),
            "getActiveElement"in e && i(15, _ = e.getActiveElement),
            "setErrorMessage"in e && i(16, w = e.setErrorMessage)
        }
        ,
        e.$$.update = ()=>{
            if (262144 & e.$$.dirty[0])
                if (a.targetLanguageUserInput && "undefined" != a.targetLanguageUserInput) {
                    let e;
                    t({
                        action: "dlCheckCommandShortcuts"
                    }).then((t=>{
                        e = t ? t.filter((e=>e.name == A))[0].shortcut : "",
                        e ? (e = `(${e})`,
                        c = !0) : c = !1,
                        i(4, $ = `${chrome.i18n.getMessage("input_translation_tooltip_translate")} ${e}`)
                    }
                    ))
                } else
                    i(4, $ = chrome.i18n.getMessage("input_translation_tooltip_translate_to_unknown"));
            var n, o;
            262144 & e.$$.dirty[0] && i(5, s = !a.enableInputTranslation || (n = window.location.host,
            o = window.location.href,
            Bl(n, T) || Bl(o, C)) || a.blacklistDomainsForWriting.includes(window.location.host) || a.isGmailEnabled && Dl())
        }
        ,
        [m, l, v, b, $, s, r, M, ()=>{
            u(),
            a.targetLanguageUserInput ? L() : m()
        }
        , d, u, g, p, h, f, _, w, x, a, ()=>M(I.inputTranslationSettingsIcon), ()=>m({
            page: uw.inputSettings
        }), ()=>M(I.inputTranslationSettingsIcon), ()=>m({
            page: uw.generalSettings
        }), ()=>M(I.inputTranslationTriggerIcon), function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                l = e,
                i(1, l)
            }
            ))
        }
        ]
    }
    class _w extends Oo {
        constructor(e) {
            super(),
            No(this, e, fw, hw, tn, {
                inputArea: 9,
                lockActiveElement: 10,
                openSettings: 0,
                closeSettings: 11,
                hideOnboardingHighlighter: 12,
                registerIconCallbacks: 13,
                unregisterIconCallbacks: 14,
                getActiveElement: 15,
                setErrorMessage: 16,
                onLanguageChanged: 17
            }, null, [-1, -1])
        }
        get onLanguageChanged() {
            return this.$$.ctx[17]
        }
    }
    function ww(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w, v, b;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("div"),
                i = Cn("div"),
                s = kn(),
                a = Cn("div"),
                r = Cn("div"),
                r.textContent = `${chrome.i18n.getMessage("input_translation_highlighter_tooltip_headline")}`,
                l = kn(),
                c = Cn("div"),
                c.textContent = `${chrome.i18n.getMessage("input_translation_highlighter_tooltip_text")}`,
                d = kn(),
                u = Cn("div"),
                m = kn(),
                g = Cn("button"),
                On(i, "class", "logo svelte-cdagz7"),
                On(r, "class", "headline svelte-cdagz7"),
                On(a, "class", "text-wrapper svelte-cdagz7"),
                On(o, "class", "content svelte-cdagz7"),
                On(u, "class", "logo-picture svelte-cdagz7"),
                On(g, "class", "close-icon svelte-cdagz7"),
                On(n, "class", p = dn(`body body__${e[0]}`) + " svelte-cdagz7"),
                On(t, "class", h = "container container__" + e[0] + " svelte-cdagz7")
            },
            m(p, h) {
                yn(p, t, h),
                bn(t, n),
                bn(n, o),
                bn(o, i),
                bn(o, s),
                bn(o, a),
                bn(a, r),
                bn(a, l),
                bn(a, c),
                bn(n, d),
                bn(n, u),
                bn(n, m),
                bn(n, g),
                e[12](t),
                w = !0,
                v || (b = In(g, "click", e[11]),
                v = !0)
            },
            p(e, o) {
                (!w || 1 & o && p !== (p = dn(`body body__${e[0]}`) + " svelte-cdagz7")) && On(n, "class", p),
                (!w || 1 & o && h !== (h = "container container__" + e[0] + " svelte-cdagz7")) && On(t, "class", h)
            },
            i(e) {
                w || (co((()=>{
                    w && (_ && _.end(1),
                    f = Co(t, jo, {
                        x: 100,
                        duration: 1e3
                    }),
                    f.start())
                }
                )),
                w = !0)
            },
            o(e) {
                f && f.invalidate(),
                _ = So(t, jo, {
                    x: 100,
                    duration: 1e3
                }),
                w = !1
            },
            d(n) {
                n && xn(t),
                e[12](null),
                n && _ && _.end(),
                v = !1,
                b()
            }
        }
    }
    function vw(e) {
        let t, n, o = e[1] && ww(e);
        return {
            c() {
                o && o.c(),
                t = Mn()
            },
            m(e, i) {
                o && o.m(e, i),
                yn(e, t, i),
                n = !0
            },
            p(e, [n]) {
                e[1] ? o ? (o.p(e, n),
                2 & n && yo(o, 1)) : (o = ww(e),
                o.c(),
                yo(o, 1),
                o.m(t.parentNode, t)) : o && ($o(),
                xo(o, 1, 1, (()=>{
                    o = null
                }
                )),
                Eo())
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                o && o.d(e),
                e && xn(t)
            }
        }
    }
    function bw(n, o, i) {
        let s, a, {onClose: r} = o, {icon: l} = o, {position: c="top"} = o, {registerHighlighterCallbacks: d} = o, {unregisterHighlighterCallbacks: u} = o, m = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }, g = {
            height: 0,
            width: 0
        }, p = 140, h = 387;
        const f = ()=>{
            if (l) {
                const e = l.getBoundingClientRect();
                let t = {};
                for (const n of ["top", "bottom", "left", "right"])
                    e[n] !== m[n] && (t[n] = e[n]);
                Object.keys(t).length && i(7, m = {
                    ...m,
                    ...t
                });
                let n = {};
                window.innerHeight !== g.height && (n.height = window.innerHeight),
                window.innerWidth !== g.width && (n.width = window.innerWidth),
                Object.keys(n).length && i(8, g = {
                    ...g,
                    ...n
                })
            } else
                i(7, m = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
        }
        ;
        function _() {
            r(Z.close_icon)
        }
        Yn((async()=>{
            d({
                recalculateHighlighterCoords: f
            });
            try {
                t({
                    action: "dltrackOpenInputHighlighter",
                    payload: {
                        domainName: e.websiteData.hostname
                    }
                }),
                f()
            } catch (e) {
                console.error(e)
            }
            a = Ti(s, (({clientHeight: e, clientWidth: t})=>{
                i(9, p = e),
                i(10, h = t)
            }
            ))
        }
        )),
        Xn((()=>{
            u(),
            a && a()
        }
        ));
        return n.$$set = e=>{
            "onClose"in e && i(4, r = e.onClose),
            "icon"in e && i(1, l = e.icon),
            "position"in e && i(0, c = e.position),
            "registerHighlighterCallbacks"in e && i(5, d = e.registerHighlighterCallbacks),
            "unregisterHighlighterCallbacks"in e && i(6, u = e.unregisterHighlighterCallbacks)
        }
        ,
        n.$$.update = ()=>{
            1920 & n.$$.dirty && i(0, c = (({iconCoordinates: e, viewportSize: t, highlighterHeight: n, highlighterWidth: o})=>{
                if (!l)
                    return "top";
                const i = {
                    top: e.top > n,
                    bottom: t.height - e.bottom > n,
                    right: t.width - e.right > o,
                    left: e.left > o
                };
                for (const [e,t] of Object.entries(i))
                    if (t)
                        return e;
                return "top"
            }
            )({
                iconCoordinates: m,
                viewportSize: g,
                highlighterHeight: p,
                highlighterWidth: h
            }))
        }
        ,
        [c, l, s, _, r, d, u, m, g, p, h, ()=>_(), function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                s = e,
                i(2, s)
            }
            ))
        }
        ]
    }
    class $w extends Oo {
        constructor(e) {
            super(),
            No(this, e, bw, vw, tn, {
                onClose: 4,
                icon: 1,
                position: 0,
                registerHighlighterCallbacks: 5,
                unregisterHighlighterCallbacks: 6
            })
        }
    }
    function Ew(e) {
        let t, n, o, i, s;
        return i = new wr({
            props: {
                value: e[2].targetLanguageUserInput,
                showChooseLanguageOption: !0,
                fontSize: "sm"
            }
        }),
        i.$on("selection", e[5]),
        {
            c() {
                t = Cn("p"),
                n = Ln(e[0]),
                o = kn(),
                Mo(i.$$.fragment),
                On(t, "class", "font-bold svelte-1bwyi2r")
            },
            m(e, a) {
                yn(e, t, a),
                bn(t, n),
                yn(e, o, a),
                Io(i, e, a),
                s = !0
            },
            p(e, t) {
                (!s || 1 & t) && Dn(n, e[0]);
                const o = {};
                4 & t && (o.value = e[2].targetLanguageUserInput),
                i.$set(o)
            },
            i(e) {
                s || (yo(i.$$.fragment, e),
                s = !0)
            },
            o(e) {
                xo(i.$$.fragment, e),
                s = !1
            },
            d(e) {
                e && xn(t),
                e && xn(o),
                Ao(i, e)
            }
        }
    }
    function yw(e) {
        let t, n, o = (e[2].enableInputTranslation || e[1]) && Ew(e);
        return {
            c() {
                t = Cn("div"),
                o && o.c()
            },
            m(e, i) {
                yn(e, t, i),
                o && o.m(t, null),
                n = !0
            },
            p(e, [n]) {
                e[2].enableInputTranslation || e[1] ? o ? (o.p(e, n),
                6 & n && yo(o, 1)) : (o = Ew(e),
                o.c(),
                yo(o, 1),
                o.m(t, null)) : o && ($o(),
                xo(o, 1, 1, (()=>{
                    o = null
                }
                )),
                Eo())
            },
            i(e) {
                n || (yo(o),
                n = !0)
            },
            o(e) {
                xo(o),
                n = !1
            },
            d(e) {
                e && xn(t),
                o && o.d()
            }
        }
    }
    function xw(e, t, n) {
        let o;
        const i = eo("deepl_settings");
        on(e, i, (e=>n(2, o = e)));
        const s = Qn();
        let {subHeaderText: a=chrome.i18n.getMessage("input_translation_settings_target_language")} = t
          , {fromShortcut: r} = t;
        function l(e) {
            s("languageChanged", {
                lang: e
            })
        }
        return e.$$set = e=>{
            "subHeaderText"in e && n(0, a = e.subHeaderText),
            "fromShortcut"in e && n(1, r = e.fromShortcut)
        }
        ,
        [a, r, o, i, l, e=>l(e.detail.selectedOption)]
    }
    class Tw extends Oo {
        constructor(e) {
            super(),
            No(this, e, xw, yw, tn, {
                subHeaderText: 0,
                fromShortcut: 1
            })
        }
    }
    function Cw(e) {
        let t, n, o, i, s, a, r, l;
        const c = e[3].default
          , d = sn(c, e, e[2], null);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("button"),
                i = kn(),
                s = Cn("div"),
                d && d.c(),
                On(o, "type", "button"),
                On(o, "class", "close-icon svelte-11vq4i0"),
                On(n, "class", "header svelte-11vq4i0"),
                On(s, "class", "content"),
                On(t, "class", "container svelte-11vq4i0")
            },
            m(c, u) {
                yn(c, t, u),
                bn(t, n),
                bn(n, o),
                bn(t, i),
                bn(t, s),
                d && d.m(s, null),
                e[5](t),
                a = !0,
                r || (l = In(o, "click", e[4]),
                r = !0)
            },
            p(e, [t]) {
                d && d.p && (!a || 4 & t) && ln(d, c, e, e[2], a ? rn(c, e[2], t, null) : cn(e[2]), null)
            },
            i(e) {
                a || (yo(d, e),
                a = !0)
            },
            o(e) {
                xo(d, e),
                a = !1
            },
            d(n) {
                n && xn(t),
                d && d.d(n),
                e[5](null),
                r = !1,
                l()
            }
        }
    }
    function Sw(e, t, n) {
        let {$$slots: o={}, $$scope: i} = t;
        const s = Qn();
        let a, r, l, c;
        Yn((()=>{
            c = Ti(l, (e=>{
                e.offsetHeight = a,
                e.offsetWidth = r
            }
            ))
        }
        )),
        Xn((()=>{
            c && c()
        }
        ));
        return e.$$set = e=>{
            "$$scope"in e && n(2, i = e.$$scope)
        }
        ,
        s("resize", {
            offsetHeight: a,
            offsetWidth: r
        }),
        [l, s, i, o, ()=>s("close"), function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                l = e,
                n(0, l)
            }
            ))
        }
        ]
    }
    class Lw extends Oo {
        constructor(e) {
            super(),
            No(this, e, Sw, Cw, tn, {})
        }
    }
    function kw(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p, h, f, _, w = chrome.i18n.getMessage("input_translation_setting_button_ok") + "";
        return s = new su({
            props: {
                name: "disable_input_translation",
                id: P.disablePerSite,
                value: P.disablePerSite,
                cssClassName: "radio--with-border",
                checked: e[5] === P.disablePerSite,
                label: chrome.i18n.getMessage("input_translation_setting_radio_disable_per_site"),
                dataQa: "input-translation_hide-icon_disable-per-site"
            }
        }),
        s.$on("change", e[13]),
        r = new su({
            props: {
                name: "disable_input_translation",
                id: P.disableEverywhere,
                value: P.disableEverywhere,
                cssClassName: "radio--with-border",
                checked: e[5] === P.disableEverywhere,
                label: chrome.i18n.getMessage("input_translation_setting_radio_disable_everywhere"),
                dataQa: "input-translation_hide-icon_disable-always"
            }
        }),
        r.$on("change", e[13]),
        {
            c() {
                t = Cn("div"),
                n = Cn("p"),
                n.textContent = `${chrome.i18n.getMessage("input_translation_setting_label_title_v2")}`,
                o = kn(),
                i = Cn("div"),
                Mo(s.$$.fragment),
                a = kn(),
                Mo(r.$$.fragment),
                l = kn(),
                c = Cn("div"),
                d = Cn("span"),
                d.textContent = `${chrome.i18n.getMessage("input_translation_setting_link_cancel")}`,
                u = kn(),
                m = Cn("button"),
                g = Ln(w),
                On(n, "class", "font-bold svelte-cn5hxx"),
                On(i, "class", "option-container svelte-cn5hxx"),
                On(d, "class", "link svelte-cn5hxx"),
                On(m, "class", p = dn("btn btn-primary " + (e[5] ? "" : "disabled")) + " svelte-cn5hxx"),
                On(m, "data-qa", "input-translation_hide-icon_accept"),
                On(c, "class", "action-container svelte-cn5hxx"),
                On(t, "class", "dl-widget svelte-cn5hxx"),
                On(t, "data-qa", "dl-input-translate-turnoff-settings")
            },
            m(p, w) {
                yn(p, t, w),
                bn(t, n),
                bn(t, o),
                bn(t, i),
                Io(s, i, null),
                bn(i, a),
                Io(r, i, null),
                bn(t, l),
                bn(t, c),
                bn(c, d),
                bn(c, u),
                bn(c, m),
                bn(m, g),
                h = !0,
                f || (_ = [In(d, "click", (function() {
                    en(e[1] === uw.inputSettings ? e[8] : e[10]) && (e[1] === uw.inputSettings ? e[8] : e[10]).apply(this, arguments)
                }
                )), In(m, "click", e[12])],
                f = !0)
            },
            p(t, n) {
                e = t;
                const o = {};
                32 & n[0] && (o.checked = e[5] === P.disablePerSite),
                s.$set(o);
                const i = {};
                32 & n[0] && (i.checked = e[5] === P.disableEverywhere),
                r.$set(i),
                (!h || 32 & n[0] && p !== (p = dn("btn btn-primary " + (e[5] ? "" : "disabled")) + " svelte-cn5hxx")) && On(m, "class", p)
            },
            i(e) {
                h || (yo(s.$$.fragment, e),
                yo(r.$$.fragment, e),
                h = !0)
            },
            o(e) {
                xo(s.$$.fragment, e),
                xo(r.$$.fragment, e),
                h = !1
            },
            d(e) {
                e && xn(t),
                Ao(s),
                Ao(r),
                f = !1,
                Jt(_)
            }
        }
    }
    function Mw(e) {
        let t, n, o, i, s;
        n = new Tw({
            props: {
                fromShortcut: e[2]
            }
        }),
        n.$on("languageChanged", e[23]);
        let a = e[6] && e[6].targetLanguageUserInput && Iw(e);
        return {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                o = kn(),
                a && a.c(),
                i = Mn(),
                On(t, "class", "dl-widget svelte-cn5hxx")
            },
            m(e, r) {
                yn(e, t, r),
                Io(n, t, null),
                yn(e, o, r),
                a && a.m(e, r),
                yn(e, i, r),
                s = !0
            },
            p(e, t) {
                const o = {};
                4 & t[0] && (o.fromShortcut = e[2]),
                n.$set(o),
                e[6] && e[6].targetLanguageUserInput ? a ? a.p(e, t) : (a = Iw(e),
                a.c(),
                a.m(i.parentNode, i)) : a && (a.d(1),
                a = null)
            },
            i(e) {
                s || (yo(n.$$.fragment, e),
                s = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                s = !1
            },
            d(e) {
                e && xn(t),
                Ao(n),
                e && xn(o),
                a && a.d(e),
                e && xn(i)
            }
        }
    }
    function Iw(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m, g, p;
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                o = Cn("p"),
                o.textContent = `${chrome.i18n.getMessage("input_translation_label_show_icon_switch")}`,
                i = kn(),
                s = Cn("span"),
                a = kn(),
                r = Cn("div"),
                l = Cn("div"),
                c = Cn("div"),
                d = Cn("span"),
                d.textContent = `${chrome.i18n.getMessage("input_translation_link_more_settings")}`,
                u = kn(),
                m = Cn("span"),
                On(o, "class", "svelte-cn5hxx"),
                On(s, "class", "icon icon-toggle-on svelte-cn5hxx"),
                On(n, "class", "link-input-settings svelte-cn5hxx"),
                On(n, "data-qa", "deepl-input-translate-hide-extension"),
                On(t, "class", "dl-widget svelte-cn5hxx"),
                On(m, "class", "icon icon-external-link svelte-cn5hxx"),
                On(c, "class", "link link-settings svelte-cn5hxx"),
                On(c, "data-qa", "dl-input-translate-open-settings-page"),
                On(l, "class", "action-container svelte-cn5hxx"),
                On(r, "class", "dl-widget svelte-cn5hxx")
            },
            m(h, f) {
                yn(h, t, f),
                bn(t, n),
                bn(n, o),
                bn(n, i),
                bn(n, s),
                yn(h, a, f),
                yn(h, r, f),
                bn(r, l),
                bn(l, c),
                bn(c, d),
                bn(c, u),
                bn(c, m),
                g || (p = [In(n, "click", e[9]), In(c, "click", e[11])],
                g = !0)
            },
            p: Kt,
            d(e) {
                e && xn(t),
                e && xn(a),
                e && xn(r),
                g = !1,
                Jt(p)
            }
        }
    }
    function Aw(e) {
        let t, n, o, i;
        const s = [Mw, kw]
          , a = [];
        function r(e, t) {
            return e[3] === uw.generalSettings ? 0 : e[3] === uw.inputSettings ? 1 : -1
        }
        return ~(t = r(e)) && (n = a[t] = s[t](e)),
        {
            c() {
                n && n.c(),
                o = Mn()
            },
            m(e, n) {
                ~t && a[t].m(e, n),
                yn(e, o, n),
                i = !0
            },
            p(e, i) {
                let l = t;
                t = r(e),
                t === l ? ~t && a[t].p(e, i) : (n && ($o(),
                xo(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                Eo()),
                ~t ? (n = a[t],
                n ? n.p(e, i) : (n = a[t] = s[t](e),
                n.c()),
                yo(n, 1),
                n.m(o.parentNode, o)) : n = null)
            },
            i(e) {
                i || (yo(n),
                i = !0)
            },
            o(e) {
                xo(n),
                i = !1
            },
            d(e) {
                ~t && a[t].d(e),
                e && xn(o)
            }
        }
    }
    function Nw(e) {
        let t, n, o, i;
        return n = new Lw({
            props: {
                $$slots: {
                    default: [Aw]
                },
                $$scope: {
                    ctx: e
                }
            }
        }),
        n.$on("close", e[24]),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", o = "settings-container settings-container__" + e[0] + " svelte-cn5hxx")
            },
            m(o, s) {
                yn(o, t, s),
                Io(n, t, null),
                e[25](t),
                i = !0
            },
            p(e, s) {
                const a = {};
                110 & s[0] | 2 & s[1] && (a.$$scope = {
                    dirty: s,
                    ctx: e
                }),
                n.$set(a),
                (!i || 1 & s[0] && o !== (o = "settings-container settings-container__" + e[0] + " svelte-cn5hxx")) && On(t, "class", o)
            },
            i(e) {
                i || (yo(n.$$.fragment, e),
                i = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                i = !1
            },
            d(o) {
                o && xn(t),
                Ao(n),
                e[25](null)
            }
        }
    }
    function Ow(e, n, o) {
        let i;
        const s = Qn();
        let a = uw.generalSettings;
        const r = eo("deepl_settings");
        on(e, r, (e=>o(6, i = e)));
        let l, c, {startPage: d} = n, {fromShortcut: u=!1} = n, {icon: m} = n, {position: g="top"} = n, {registerSettingsCallbacks: p} = n, {unregisterSettingsCallbacks: h} = n, {closeSettings: f} = n, _ = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }, w = {
            height: 0,
            width: 0
        }, v = 140, b = 387, $ = "";
        const E = ()=>{
            if (m) {
                const e = m.getBoundingClientRect();
                let t = {};
                for (const n of ["top", "bottom", "left", "right"])
                    e[n] !== _[n] && (t[n] = e[n]);
                Object.keys(t).length && o(19, _ = {
                    ..._,
                    ...t
                });
                let n = {};
                window.innerHeight !== w.height && (n.height = window.innerHeight),
                window.innerWidth !== w.width && (n.width = window.innerWidth),
                Object.keys(n).length && o(20, w = {
                    ...w,
                    ...n
                })
            } else
                o(19, _ = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
        }
        ;
        function y(e) {
            o(3, a = e)
        }
        return Yn((()=>{
            E(),
            p({
                recalculateSettingsCoords: E
            }),
            c = Ti(l, (({clientHeight: e, clientWidth: t})=>{
                o(21, v = e),
                o(22, b = t)
            }
            ))
        }
        )),
        Xn((()=>{
            h(),
            c && c()
        }
        )),
        e.$$set = e=>{
            "startPage"in e && o(1, d = e.startPage),
            "fromShortcut"in e && o(2, u = e.fromShortcut),
            "icon"in e && o(14, m = e.icon),
            "position"in e && o(0, g = e.position),
            "registerSettingsCallbacks"in e && o(15, p = e.registerSettingsCallbacks),
            "unregisterSettingsCallbacks"in e && o(16, h = e.unregisterSettingsCallbacks),
            "closeSettings"in e && o(17, f = e.closeSettings)
        }
        ,
        e.$$.update = ()=>{
            7864320 & e.$$.dirty[0] && o(0, g = (({iconCoordinates: e, viewportSize: t, popupHeight: n, popupWidth: o})=>{
                if (!m)
                    return "top";
                const i = {
                    top: e.top > n,
                    bottom: t.height - e.bottom > n,
                    right: t.width - e.right > o,
                    left: e.left > o
                };
                for (const [e,t] of Object.entries(i))
                    if (t)
                        return e;
                return "top"
            }
            )({
                iconCoordinates: _,
                viewportSize: w,
                popupHeight: v,
                popupWidth: b
            })),
            2 & e.$$.dirty[0] && d && o(3, a = d)
        }
        ,
        [g, d, u, a, l, $, i, r, function() {
            s("close")
        }
        , function() {
            y(uw.inputSettings)
        }
        , function() {
            o(5, $ = ""),
            y(uw.generalSettings)
        }
        , function() {
            t({
                action: "dlOpenInternalPage",
                payload: {
                    destination: lc.settings_writing
                }
            })
        }
        , function() {
            if (!$)
                return;
            switch ($) {
            case P.disableEverywhere:
                r.set({
                    enableInputTranslation: !1
                }),
                t({
                    action: "dlTrackSettingChanged",
                    payload: {
                        settingType: P.disableEverywhere,
                        domainName: window.location.hostname,
                        uiFunction: H,
                        uiLocation: I.inputTranslationSettingPopup
                    }
                }),
                f();
                break;
            case P.disablePerSite:
                !function() {
                    let e = i.blacklistDomainsForWriting;
                    e && !e.includes(window.location.hostname) && (e.push(window.location.hostname),
                    r.set({
                        blacklistDomainsForWriting: e
                    }),
                    t({
                        action: "dlTrackSettingChanged",
                        payload: {
                            settingType: P.disablePerSite,
                            domainName: window.location.hostname,
                            uiFunction: H,
                            uiLocation: I.inputTranslationSettingPopup
                        }
                    }));
                    f()
                }()
            }
            let e = Wl(window.location.hostname, ["www."]);
            t({
                action: "dlSendNotification",
                payload: {
                    type: k.inputTranslation,
                    options: {
                        theme: M.green_theme,
                        currentDomain: e,
                        saveAction: $,
                        settingsPageURL: lc.settings_writing
                    }
                }
            })
        }
        , function(e) {
            o(5, $ = e.currentTarget.value)
        }
        , m, p, h, f, E, _, w, v, b, function(t) {
            to.call(this, e, t)
        }
        , function(t) {
            to.call(this, e, t)
        }
        , function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                l = e,
                o(4, l)
            }
            ))
        }
        ]
    }
    class Dw extends Oo {
        constructor(e) {
            super(),
            No(this, e, Ow, Nw, tn, {
                startPage: 1,
                fromShortcut: 2,
                icon: 14,
                position: 0,
                registerSettingsCallbacks: 15,
                unregisterSettingsCallbacks: 16,
                closeSettings: 17,
                recalculateSettingsCoords: 18
            }, null, [-1, -1])
        }
        get recalculateSettingsCoords() {
            return this.$$.ctx[18]
        }
    }
    function Rw(e) {
        let t, n, o, i;
        return n = new _a({
            props: {
                error: e[1],
                config: {
                    small: !0
                },
                close: e[2]
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", o = "error-container error-container__" + e[0] + " svelte-79t8l9")
            },
            m(o, s) {
                yn(o, t, s),
                Io(n, t, null),
                e[12](t),
                i = !0
            },
            p(e, [s]) {
                const a = {};
                2 & s && (a.error = e[1]),
                4 & s && (a.close = e[2]),
                n.$set(a),
                (!i || 1 & s && o !== (o = "error-container error-container__" + e[0] + " svelte-79t8l9")) && On(t, "class", o)
            },
            i(e) {
                i || (yo(n.$$.fragment, e),
                i = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                i = !1
            },
            d(o) {
                o && xn(t),
                Ao(n),
                e[12](null)
            }
        }
    }
    function Pw(e, t, n) {
        let o, i, {errorMessage: s} = t, {icon: a} = t, {position: r="top"} = t, {registerErrorCallbacks: l} = t, {unregisterErrorCallbacks: c} = t, {close: d} = t, u = 140, m = 387, g = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }, p = {
            height: 0,
            width: 0
        };
        const h = ()=>{
            if (a) {
                const e = a.getBoundingClientRect();
                let t = {};
                for (const n of ["top", "bottom", "left", "right"])
                    e[n] !== g[n] && (t[n] = e[n]);
                Object.keys(t).length && n(10, g = {
                    ...g,
                    ...t
                });
                let o = {};
                window.innerHeight !== p.height && (o.height = window.innerHeight),
                window.innerWidth !== p.width && (o.width = window.innerWidth),
                Object.keys(o).length && n(11, p = {
                    ...p,
                    ...o
                })
            } else
                n(10, g = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                })
        }
        ;
        return Yn((()=>{
            h(),
            l({
                recalculateErrorCoords: h
            }),
            i = Ti(o, (({clientHeight: e, clientWidth: t})=>{
                n(8, u = e),
                n(9, m = t)
            }
            ))
        }
        )),
        Xn((()=>{
            c(),
            i && i()
        }
        )),
        e.$$set = e=>{
            "errorMessage"in e && n(1, s = e.errorMessage),
            "icon"in e && n(4, a = e.icon),
            "position"in e && n(0, r = e.position),
            "registerErrorCallbacks"in e && n(5, l = e.registerErrorCallbacks),
            "unregisterErrorCallbacks"in e && n(6, c = e.unregisterErrorCallbacks),
            "close"in e && n(2, d = e.close)
        }
        ,
        e.$$.update = ()=>{
            3840 & e.$$.dirty && n(0, r = (({iconCoordinates: e, viewportSize: t, highlighterHeight: n, highlighterWidth: o})=>{
                if (!a)
                    return "top";
                const i = {
                    top: e.top > n,
                    bottom: t.height - e.bottom > n,
                    right: t.width - e.right > o,
                    left: e.left > o
                };
                for (const [e,t] of Object.entries(i))
                    if (t)
                        return e;
                return "top"
            }
            )({
                iconCoordinates: g,
                viewportSize: p,
                popupHeight: u,
                popupWidth: m
            }))
        }
        ,
        [r, s, d, o, a, l, c, h, u, m, g, p, function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                o = e,
                n(3, o)
            }
            ))
        }
        ]
    }
    class Hw extends Oo {
        constructor(e) {
            super(),
            No(this, e, Pw, Rw, tn, {
                errorMessage: 1,
                icon: 4,
                position: 0,
                registerErrorCallbacks: 5,
                unregisterErrorCallbacks: 6,
                close: 2,
                recalculateErrorCoords: 7
            })
        }
        get recalculateErrorCoords() {
            return this.$$.ctx[7]
        }
    }
    function Gw(e) {
        let t, n, o;
        return {
            c() {
                t = Cn("div")
            },
            m(i, s) {
                yn(i, t, s),
                n || (o = [In(t, "click_outside", e[13]), mn(wi.call(null, t, {
                    isShadow: !0
                }))],
                n = !0)
            },
            p: Kt,
            i: Kt,
            o: Kt,
            d(e) {
                e && xn(t),
                n = !1,
                Jt(o)
            }
        }
    }
    function zw(e) {
        let t, n, o, i, s, a, r, l, c, d, u, m;
        o = new _w({
            props: {
                inputArea: e[1],
                lockActiveElement: e[14],
                openSettings: e[17],
                closeSettings: e[18],
                hideOnboardingHighlighter: e[15],
                registerIconCallbacks: e[19],
                unregisterIconCallbacks: e[20],
                getActiveElement: e[16],
                setErrorMessage: e[30]
            }
        });
        let g = e[3] && Bw(e)
          , p = e[4] && Uw(e)
          , h = e[7] && Ww(e);
        return {
            c() {
                t = Cn("div"),
                n = Cn("div"),
                Mo(o.$$.fragment),
                i = kn(),
                g && g.c(),
                s = kn(),
                p && p.c(),
                a = kn(),
                h && h.c(),
                On(n, "class", "dl-input-placeholder svelte-16rwmnb"),
                Gn(n, "reduced-space", !e[10]),
                Gn(n, "other-extension-present", e[0].isLanguageToolsPresent || e[0].isGrammarlyPresent),
                On(t, "class", "dl-input-positioner svelte-16rwmnb"),
                On(t, "style", c = [`top: ${e[0].top}px;`, `left: ${e[0].left}px;`, `height: ${e[0].height}px;`, `width: ${e[0].width}px;`, `position: ${e[0].position};`].join(" ")),
                Gn(t, "debug-mode", jw)
            },
            m(r, l) {
                yn(r, t, l),
                bn(t, n),
                Io(o, n, null),
                bn(n, i),
                g && g.m(n, null),
                bn(n, s),
                p && p.m(n, null),
                bn(n, a),
                h && h.m(n, null),
                e[34](n),
                d = !0,
                u || (m = [mn(wi.call(null, n, {
                    isShadow: !0
                })), In(n, "click_outside", e[33]), In(n, "click", e[14])],
                u = !0)
            },
            p(e, i) {
                const r = {};
                2 & i[0] && (r.inputArea = e[1]),
                128 & i[0] && (r.setErrorMessage = e[30]),
                o.$set(r),
                e[3] ? g ? (g.p(e, i),
                8 & i[0] && yo(g, 1)) : (g = Bw(e),
                g.c(),
                yo(g, 1),
                g.m(n, s)) : g && ($o(),
                xo(g, 1, 1, (()=>{
                    g = null
                }
                )),
                Eo()),
                e[4] ? p ? (p.p(e, i),
                16 & i[0] && yo(p, 1)) : (p = Uw(e),
                p.c(),
                yo(p, 1),
                p.m(n, a)) : p && ($o(),
                xo(p, 1, 1, (()=>{
                    p = null
                }
                )),
                Eo()),
                e[7] ? h ? (h.p(e, i),
                128 & i[0] && yo(h, 1)) : (h = Ww(e),
                h.c(),
                yo(h, 1),
                h.m(n, null)) : h && ($o(),
                xo(h, 1, 1, (()=>{
                    h = null
                }
                )),
                Eo()),
                (!d || 1024 & i[0]) && Gn(n, "reduced-space", !e[10]),
                (!d || 1 & i[0]) && Gn(n, "other-extension-present", e[0].isLanguageToolsPresent || e[0].isGrammarlyPresent),
                (!d || 1 & i[0] && c !== (c = [`top: ${e[0].top}px;`, `left: ${e[0].left}px;`, `height: ${e[0].height}px;`, `width: ${e[0].width}px;`, `position: ${e[0].position};`].join(" "))) && On(t, "style", c)
            },
            i(e) {
                d || (yo(o.$$.fragment, e),
                yo(g),
                yo(p),
                yo(h),
                co((()=>{
                    d && (l && l.end(1),
                    r = Co(n, Fo, {
                        duration: 100
                    }),
                    r.start())
                }
                )),
                d = !0)
            },
            o(e) {
                xo(o.$$.fragment, e),
                xo(g),
                xo(p),
                xo(h),
                r && r.invalidate(),
                l = So(n, Fo, {
                    duration: 150
                }),
                d = !1
            },
            d(n) {
                n && xn(t),
                Ao(o),
                g && g.d(),
                p && p.d(),
                h && h.d(),
                e[34](null),
                n && l && l.end(),
                u = !1,
                Jt(m)
            }
        }
    }
    function Bw(e) {
        let t, n, o;
        return n = new $w({
            props: {
                onClose: e[15],
                position: "top",
                registerHighlighterCallbacks: e[25],
                unregisterHighlighterCallbacks: e[26],
                icon: e[2]
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "dl-onboarding-highlighter svelte-16rwmnb")
            },
            m(e, i) {
                yn(e, t, i),
                Io(n, t, null),
                o = !0
            },
            p(e, t) {
                const o = {};
                4 & t[0] && (o.icon = e[2]),
                n.$set(o)
            },
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function Uw(e) {
        let t, n;
        return t = new Dw({
            props: {
                icon: e[2],
                startPage: e[5],
                fromShortcut: e[6],
                position: "top",
                registerSettingsCallbacks: e[21],
                unregisterSettingsCallbacks: e[22],
                closeSettings: e[18]
            }
        }),
        t.$on("languageChanged", e[31]),
        t.$on("close", e[18]),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                4 & n[0] && (o.icon = e[2]),
                32 & n[0] && (o.startPage = e[5]),
                64 & n[0] && (o.fromShortcut = e[6]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Ww(e) {
        let t, n;
        return t = new Hw({
            props: {
                errorMessage: e[7],
                icon: e[2],
                position: "top",
                registerErrorCallbacks: e[23],
                unregisterErrorCallbacks: e[24],
                close: e[32]
            }
        }),
        {
            c() {
                Mo(t.$$.fragment)
            },
            m(e, o) {
                Io(t, e, o),
                n = !0
            },
            p(e, n) {
                const o = {};
                128 & n[0] && (o.errorMessage = e[7]),
                4 & n[0] && (o.icon = e[2]),
                128 & n[0] && (o.close = e[32]),
                t.$set(o)
            },
            i(e) {
                n || (yo(t.$$.fragment, e),
                n = !0)
            },
            o(e) {
                xo(t.$$.fragment, e),
                n = !1
            },
            d(e) {
                Ao(t, e)
            }
        }
    }
    function Fw(e) {
        let t, n, o, i;
        const s = [zw, Gw]
          , a = [];
        function r(e, t) {
            return e[9] && e[0] && e[11] ? 0 : 1
        }
        return t = r(e),
        n = a[t] = s[t](e),
        {
            c() {
                n.c(),
                o = Mn()
            },
            m(e, n) {
                a[t].m(e, n),
                yn(e, o, n),
                i = !0
            },
            p(e, i) {
                let l = t;
                t = r(e),
                t === l ? a[t].p(e, i) : ($o(),
                xo(a[l], 1, 1, (()=>{
                    a[l] = null
                }
                )),
                Eo(),
                n = a[t],
                n ? n.p(e, i) : (n = a[t] = s[t](e),
                n.c()),
                yo(n, 1),
                n.m(o.parentNode, o))
            },
            i(e) {
                i || (yo(n),
                i = !0)
            },
            o(e) {
                xo(n),
                i = !1
            },
            d(e) {
                a[t].d(e),
                e && xn(o)
            }
        }
    }
    const jw = !1;
    function qw(n, o, i) {
        let s, a, r;
        const l = eo("deepl_settings");
        on(n, l, (e=>i(43, r = e)));
        const c = 20
          , d = 40;
        let u, m, g, p, h, f, _, w, v, b, $ = !1, E = !1, y = !1, x = !1, T = !1, {trackInputInjectionIfNecessary: C} = o, {registerPositionerCallbacks: S} = o, {unregisterPositionerCallbacks: L} = o, k = [], M = {
            top: 0,
            left: 0,
            height: 0,
            width: 0,
            position: "absolute",
            isLanguageToolsPresent: !1,
            isGrammarlyPresent: !1
        }, A = !1;
        const N = ()=>{
            i(1, u = document.activeElement);
            const e = function(e) {
                const t = dw.find((({domain: t})=>{
                    const n = t.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
                    return new RegExp(n).test(e)
                }
                ));
                return t || null
            }(window.location.href);
            if (e?.uniqueDataAttributes && e.uniqueDataAttributes.length > 0)
                for (let t of e.uniqueDataAttributes)
                    if (u.dataset[t.key] === t.value)
                        return;
            if (e?.selectors && e.selectors.length > 0)
                for (let t of e.selectors) {
                    const e = document.querySelector(t)
                      , n = ic(e)
                      , o = ic(u)
                      , i = n.toString() === o.toString();
                    if (e === u || e.isSameNode(u) || i)
                        return
                }
            k = aw({
                inputArea: u
            }),
            F(),
            C(),
            R()
        }
          , O = ()=>{
            P(),
            i(7, p = void 0),
            j(),
            k = [],
            i(1, u = void 0)
        }
          , D = ()=>{
            $ = !1
        }
          , R = ()=>{
            if (!r.isInputHighlighterShown && !Dl()) {
                un(l, r.isInputHighlighterShown = !0, r),
                i(3, E = !0);
                try {
                    t({
                        action: "dltrackOpenInputHighlighter",
                        payload: {
                            domainName: e.websiteData.hostname
                        }
                    })
                } catch (e) {
                    console.error(e)
                }
            }
        }
          , P = (e=Z.outside_click)=>{
            i(3, E = !1);
            try {
                t({
                    action: "dltrackCloseInputHighlighter",
                    payload: {
                        event: e
                    }
                })
            } catch (e) {
                console.error(e)
            }
        }
          , G = ()=>{
            B(),
            A && (U(),
            b && b(),
            E && f && f(),
            y && _ && _(),
            w && w())
        }
          , z = (e=document.activeElement)=>{
            const t = e.contentDocument;
            return t && t.activeElement ? z(t.activeElement) : e
        }
          , B = ()=>{
            const e = z()
              , t = !$ && e !== u
              , n = e && iw(e)
              , o = u && !u.isConnected;
            !t || n || T ? (T = !1,
            t ? (O(),
            n && N()) : o && O()) : T = !0
        }
          , U = ()=>{
            i(0, M = sw({
                inputArea: u
            }))
        }
          , W = ()=>{
            U()
        }
          , F = ()=>{
            i(9, A = !0),
            U();
            for (const e of k)
                e.addEventListener("scroll", W);
            window.addEventListener("scroll", W)
        }
          , j = ()=>{
            i(9, A = !1);
            for (const e of k)
                e.removeEventListener("scroll", W);
            window.removeEventListener("scroll", W),
            K()
        }
          , q = ()=>{
            h && h()
        }
          , V = ({page: e, fromShortcut: n=!1}={})=>{
            i(5, g = e),
            i(6, x = n),
            y || (i(4, y = !0),
            t({
                action: "dlTrackInlineSettingOpened",
                payload: {
                    uiFunction: H,
                    uiLocation: I.inputTranslationTriggerIcon
                }
            }))
        }
          , K = ()=>{
            y && i(4, y = !1)
        }
        ;
        Yn((()=>{
            k = aw({
                inputArea: u
            }),
            S({
                processRefreshCycle: G,
                triggerTranslation: q,
                openSettings: V
            })
        }
        )),
        Xn((()=>{
            for (const e of k)
                e.removeEventListener("scroll", W);
            L()
        }
        ));
        return n.$$set = e=>{
            "trackInputInjectionIfNecessary"in e && i(27, C = e.trackInputInjectionIfNecessary),
            "registerPositionerCallbacks"in e && i(28, S = e.registerPositionerCallbacks),
            "unregisterPositionerCallbacks"in e && i(29, L = e.unregisterPositionerCallbacks)
        }
        ,
        n.$$.update = ()=>{
            1 & n.$$.dirty[0] && i(11, s = M.height >= c),
            1 & n.$$.dirty[0] && i(10, a = M.height >= d)
        }
        ,
        [M, u, m, E, y, g, x, p, v, A, a, s, l, D, ()=>{
            $ = !0
        }
        , P, z, V, K, ({processRefreshCycle: e, languageChanged: t, triggerTranslation: n})=>{
            b = e,
            i(8, v = t),
            h = n
        }
        , ()=>{
            b = void 0,
            i(8, v = void 0),
            h = void 0
        }
        , ({recalculateSettingsCoords: e})=>{
            _ = e
        }
        , ()=>{
            _ = void 0
        }
        , ({recalculateErrorCoords: e})=>{
            w = e
        }
        , ()=>{
            w = void 0
        }
        , ({recalculateHighlighterCoords: e})=>{
            f = e
        }
        , ()=>{
            f = void 0
        }
        , C, S, L, e=>{
            i(7, p = e)
        }
        , e=>v && v(e.detail.lang), ()=>{
            i(7, p = void 0)
        }
        , ()=>{
            D(),
            K()
        }
        , function(e) {
            oo[e ? "unshift" : "push"]((()=>{
                m = e,
                i(2, m)
            }
            ))
        }
        ]
    }
    class Vw extends Oo {
        constructor(e) {
            super(),
            No(this, e, qw, Fw, tn, {
                trackInputInjectionIfNecessary: 27,
                registerPositionerCallbacks: 28,
                unregisterPositionerCallbacks: 29
            }, null, [-1, -1])
        }
    }
    function Zw(e) {
        let t, n, o;
        return n = new Vw({
            props: {
                trackInputInjectionIfNecessary: e[0],
                registerPositionerCallbacks: e[1],
                unregisterPositionerCallbacks: e[2]
            }
        }),
        {
            c() {
                t = Cn("div"),
                Mo(n.$$.fragment),
                On(t, "class", "dl-input-translation-container svelte-ju4595")
            },
            m(e, i) {
                yn(e, t, i),
                Io(n, t, null),
                o = !0
            },
            p: Kt,
            i(e) {
                o || (yo(n.$$.fragment, e),
                o = !0)
            },
            o(e) {
                xo(n.$$.fragment, e),
                o = !1
            },
            d(e) {
                e && xn(t),
                Ao(n)
            }
        }
    }
    function Kw(e, n, o) {
        let i, s, a, r;
        Jn("deepl_settings", Po),
        Jn("deepl_website_settings", cr);
        let l = !0
          , c = !1;
        const d = ()=>{
            i && i()
        }
          , u = async e=>{
            if ("dlChangeActiveTabStatus" === e.action)
                o(5, l = e.payload.isActive)
        }
          , m = ()=>{
            r && clearInterval(r),
            r = setInterval(d, 300)
        }
          , g = ()=>{
            clearInterval(r)
        }
        ;
        return Yn((()=>{
            m(),
            chrome.runtime.onMessage.addListener(u)
        }
        )),
        Xn((()=>{
            r && g(),
            chrome.runtime.onMessage.removeListener(u)
        }
        )),
        e.$$.update = ()=>{
            32 & e.$$.dirty && (l ? m() : g())
        }
        ,
        [()=>{
            c || (c = !0,
            t({
                action: "dlTrackInputTranslationInjection",
                payload: window.location.host
            }))
        }
        , ({processRefreshCycle: e, triggerTranslation: t, openSettings: n})=>{
            i = e,
            s = t,
            a = n
        }
        , ()=>{
            i = void 0,
            s = void 0,
            a = void 0
        }
        , ()=>{
            s && s()
        }
        , ()=>{
            a && a({
                fromShortcut: !1
            })
        }
        , l]
    }
    class Yw extends Oo {
        constructor(e) {
            super(),
            No(this, e, Kw, Zw, tn, {
                triggerTranslation: 3,
                openSettingsFromShortcut: 4
            })
        }
        get triggerTranslation() {
            return this.$$.ctx[3]
        }
        get openSettingsFromShortcut() {
            return this.$$.ctx[4]
        }
    }
    class Xw {
        static HTML_TAG_NAME = "deepl-input-controller";
        static createElement = (e=document)=>{
            const t = e.createElement(Xw.HTML_TAG_NAME)
              , n = new Xw(t);
            return t.createDOM = n.createDOM,
            t.cleanupDOM = n.cleanupDOM,
            t.triggerTranslation = n.triggerTranslation,
            t.openSettingsFromShortcut = n.openSettingsFromShortcut,
            t
        }
        ;
        constructor(e) {
            this.domElement = e,
            this.domElement.shadow = this.domElement.attachShadow({
                mode: "open"
            }),
            this.domElement.shadowContainer = document.createElement("div"),
            this.domElement.mainComponent;
            const t = document.createElement("link");
            t.setAttribute("rel", "stylesheet"),
            t.setAttribute("href", chrome.runtime.getURL("build/content.css")),
            this.domElement.shadow.appendChild(t),
            this.domElement.shadow.appendChild(this.domElement.shadowContainer)
        }
        createDOM = ()=>{
            this.domElement.mainComponent = new Yw({
                target: this.domElement.shadowContainer,
                props: {
                    onClose: this.domElement.cleanupDOM,
                    controller: this.domElement
                }
            })
        }
        ;
        triggerTranslation = ()=>{
            this.domElement.mainComponent.triggerTranslation()
        }
        ;
        openSettingsFromShortcut() {
            this.domElement.mainComponent.openSettingsFromShortcut()
        }
        cleanupDOM() {
            this.domElement.shadowContainer.remove(),
            this.domElement.mainComponent && this.domElement.mainComponent.$destroy()
        }
    }
    let Qw, Jw, ev, tv, nv, ov, iv, sv = 0, av = [];
    const rv = cr.subscribe((e=>{
        Qw = e.translationState,
        e.translatedDOM && (av = e.translatedDOM.map((e=>e))),
        e.translationState !== nv && (nv = e.translationState,
        Qw === r.showOriginal && cv())
    }
    ))
      , lv = Po.subscribe((e=>{
        if (0 !== Object.keys(e).length) {
            if (ov = e.isProUser,
            iv = e.isLoggedIn,
            tv && tv !== e.selectedTargetLanguage) {
                const e = Qw !== r.none;
                e && cv(),
                cr.update({
                    translatedDOM: []
                }),
                av = [],
                e && cr.update({
                    translationState: r.none
                })
            }
            tv = e.selectedTargetLanguage
        }
    }
    ));
    function cv() {
        av.forEach((e=>{
            _v(e.original, e.clone),
            hv(e.original, e.clone),
            dv(e.original, !1)
        }
        )),
        ev && (ev.disconnect(),
        ev = void 0),
        Jw && (document.removeEventListener("scroll", Jw),
        Jw = void 0),
        Qw = r.none
    }
    function dv(e, t) {
        if ("#text" != e.nodeName && "#comment" != e.nodeName && e.dataset) {
            e.dataset.dlTranslated = t;
            for (var n = 0; n < e.childNodes.length; ++n)
                dv(e.childNodes[n], t)
        }
    }
    function uv(e) {
        if (void 0 !== e.dataset) {
            void 0 === e.dataset.dlUid && (e.dataset.dlUid = sv++),
            void 0 === e.dataset.dlOriginal && (e.dataset.dlOriginal = !0);
            for (var t = 0; t < e.childNodes.length; ++t)
                uv(e.childNodes[t])
        }
    }
    function mv(e) {
        if (void 0 !== e.attributes) {
            var t = null;
            for (void 0 !== e.dataset && void 0 !== e.dataset.dlUid && (t = e.dataset.dlUid); e.attributes.length > 0; )
                e.removeAttribute(e.attributes[0].name);
            null !== t && (e.dataset.dlUid = t)
        }
        for (var n = 0; n < e.childNodes.length; ++n)
            mv(e.childNodes[n])
    }
    function gv(e, t) {
        uv(t);
        var n = t.cloneNode(!0);
        mv(n),
        e.push({
            original: t,
            clone: n
        }),
        dv(t, !0)
    }
    function pv(e, t) {
        if (void 0 === t.dataset)
            return null;
        if (e.dataset && e.dataset.dlUid && t.dataset.dlUid && e.dataset.dlUid === t.dataset.dlUid)
            return e;
        for (var n = 0; n < e.childNodes.length; ++n) {
            var o = pv(e.childNodes[n], t);
            if (null !== o)
                return o
        }
        return null
    }
    function hv(e, t) {
        for (var n = []; e.childNodes.length > 0; )
            n.push(e.removeChild(e.childNodes[0]));
        for (; t.childNodes.length > 0; )
            e.appendChild(t.childNodes[0]);
        for (var o = 0; o < n.length; ++o)
            t.appendChild(n[o])
    }
    function fv(e, t) {
        if (null !== e.parentNode && null !== t.parentNode) {
            var n = document.createElement("div");
            e.parentNode.replaceChild(n, e),
            t.parentNode.replaceChild(e, t),
            n.parentNode.replaceChild(t, n),
            hv(e, t)
        }
    }
    function _v(e, t) {
        for (var n = 0; n < t.childNodes.length; ++n) {
            var o, i = t.childNodes[n], s = pv(e, i);
            if (s)
                fv(o = s.dataset && "true" === s.dataset.dlOriginal ? s : s.cloneNode(!1), i),
                _v(e, o);
            else
                _v(e, i)
        }
    }
    function wv(t, n=!0) {
        if ("#text" == t.nodeName || "#comment" == t.nodeName)
            return !1;
        if (!nw(t, e.websiteData.hostname))
            return !1;
        if (t.isContentEditable && n)
            return !1;
        if (function(e) {
            switch (e.tagName.toLowerCase()) {
            case "input":
                return "submit" !== e.getAttribute("type");
            case "textarea":
                return !0;
            default:
                return !1
            }
        }(t))
            return !1;
        if (oc(t))
            return !1;
        for (var o = 0; o < t.childNodes.length; ++o) {
            if ("#text" == (i = t.childNodes[o]).nodeName && "" != i.wholeText.trim() || "font" == i.nodeName)
                return !0
        }
        for (o = 0; o < t.childNodes.length; ++o) {
            var i;
            if ("#text" != (i = t.childNodes[o]).nodeName && "#comment" != i.nodeName && (!nc(i) || oc(i) || "inline" != window.getComputedStyle(i).display || Zl(t)))
                return !1
        }
        return void 0 !== t.innerText && "" != t.innerText.trim()
    }
    function vv(e) {
        if (void 0 !== e.dataset && (void 0 === e.dataset.dlTranslated || "false" === e.dataset.dlTranslated))
            return !1;
        for (var t = 0; t < e.childNodes.length; ++t) {
            var n = e.childNodes[t];
            if ("#text" != n.nodeName && "#comment" != n.nodeName && !vv(n))
                return !1
        }
        return !0
    }
    function bv(e, t) {
        if ("#text" != t.nodeName && "#comment" != t.nodeName && !function(e) {
            if ("no" == e.getAttribute("translate"))
                return !0;
            var t = e.className;
            return !(null == t || null == t.split || !t.split(" ").includes("notranslate"))
        }(t))
            if (wv(t))
                (function(e, t) {
                    var n = e.getBoundingClientRect()
                      , o = window.innerWidth || document.documentElement.clientWidth
                      , i = window.innerHeight || document.documentElement.clientHeight;
                    if (n.bottom < 0 - i * t || n.right < 0 - o * t)
                        return !1;
                    if (n.top > i * (1 + t))
                        return !1;
                    if (n.left > o * (1 + t))
                        return !1;
                    var s = window.getComputedStyle(e).position;
                    return "absolute" === s || "fixed" === s || null !== e.offsetParent
                }
                )(t, .3) && !vv(t) && gv(e, t);
            else
                for (var n = 0; n < t.childNodes.length; ++n)
                    bv(e, t.childNodes[n])
    }
    async function $v(e, n) {
        if (!ov || !iv)
            return;
        const o = [];
        try {
            if (bv(o, document.documentElement),
            0 === o.length)
                return;
            cr.update({
                translationState: r.ongoingTranslation
            }),
            await async function(e, n, o, i, s, a) {
                if (e.length > 0)
                    return t({
                        action: "dlRequestHtmlTranslation",
                        payload: {
                            sourceLang: n,
                            trigger: i,
                            texts: e.map((e=>e.clone.innerHTML.replace(/<!--(.|\s)*?-->/g, ""))),
                            isFirstTime: s,
                            domainName: a
                        }
                    }).then((t=>{
                        for (var n = 0; n < e.length; ++n)
                            e[n].clone.innerHTML = t[n],
                            _v(e[n].original, e[n].clone),
                            hv(e[n].original, e[n].clone),
                            dv(e[n].original, !0)
                    }
                    ))
            }(o, e.sourceLang, e.noTranslationLanguages, e.trigger, n, window.location.hostname)
        } catch (e) {
            console.error("error", e);
            for (var i = 0; i < o.length; ++i)
                dv(o[i].original, !1);
            return cr.update({
                translationState: r.none,
                error: e.name ? e.name : e
            }),
            ev && ev.disconnect,
            void (Jw && document.removeEventListener("scroll", Jw))
        }
        cr.update({
            translationState: r.isTranslationComplete
        }),
        o.length > 0 && cr.update({
            translatedDOM: [...av, ...o]
        })
    }
    async function Ev(e) {
        ev && (ev.disconnect(),
        ev = void 0),
        Jw && (document.removeEventListener("scroll", Jw),
        Jw = void 0);
        let t, n, o = !1;
        av.length > 0 ? (cr.update({
            translationState: r.ongoingTranslation
        }),
        cv(),
        av.forEach((e=>{
            hv(e.original, e.clone),
            hv(e.original, e.clone),
            dv(e.original, !0)
        }
        )),
        cr.update({
            translationState: r.isTranslationComplete
        })) : o = !0,
        await $v(e, o),
        Jw = async()=>{
            n = !0,
            window.clearTimeout(t),
            t = setTimeout((function() {
                Qw === r.isTranslationComplete && window.requestAnimationFrame((async()=>{
                    await $v(e, !1),
                    n = !1
                }
                ))
            }
            ), 100)
        }
        ,
        document.addEventListener("scroll", Jw),
        ev = new MutationObserver((t=>{
            if (n)
                return;
            if (Qw !== r.isTranslationComplete)
                return;
            t.filter((e=>e.addedNodes && e.addedNodes.length > 0)).length > 0 && window.requestAnimationFrame((async()=>{
                await $v(e, !1)
            }
            ))
        }
        )),
        ev.observe(document.body, {
            childList: !0,
            subtree: !0
        }),
        vi((()=>{
            rv(),
            lv(),
            ev && ev.disconnect(),
            Jw && document.removeEventListener("scroll", Jw)
        }
        ))
    }
    const yv = "translate"
      , xv = "write"
      , Tv = n=>{
        if (n.targetLang && window.getSelection() && window.getSelection().toString()) {
            var o = window.getSelection().toString();
            document.getElementsByTagName("deepl-inline-translate-tooltip").length || M_({
                websiteData: cr
            }),
            cr.update({
                translationState: r.ongoingTranslation,
                translatedSnippet: "",
                snippetDetectedSourceLang: "",
                translatedDOMSnippet: "",
                originalSnippet: ""
            }),
            t({
                action: "dlRequestInlineTranslation",
                payload: {
                    requests: [{
                        text: o
                    }],
                    domainName: window.location.hostname,
                    trigger: d,
                    sourceLang: "auto",
                    websiteLanguage: e.websiteData.websiteLanguage
                }
            }).then((e=>{
                cr.update({
                    translationState: r.none,
                    translatedSnippet: e[0].text,
                    snippetDetectedSourceLang: e[0].detected_source_language,
                    originalSnippet: o,
                    websiteLanguage: e[0].detected_source_language
                })
            }
            )).catch((e=>{
                cr.update({
                    translationState: r.none,
                    originalSnippet: o,
                    error: e.message ? e.message : e
                })
            }
            ))
        }
    }
      , Cv = async e=>{
        const n = await t({
            action: "dlGetAppSettings"
        });
        let o = window.getSelection().anchorNode;
        "#text" === o.nodeName.toLowerCase() && (o = o.parentNode);
        const i = "textarea" === o.nodeName.toLowerCase()
          , s = o.closest('[contenteditable="true"]')
          , a = o.closest("textarea")
          , r = o.querySelector("textarea")
          , d = r && r.selectionStart !== r.selectionEnd
          , u = i && o || s || a || d && r;
        u ? ((e,t,n)=>{
            const o = document.querySelector(Xw.HTML_TAG_NAME);
            o && (t ? o.openSettingsFromShortcut() : n ? o.triggerTranslation() : o.openSettingsFromShortcut())
        }
        )(0, e, n.targetLanguageUserInput) : Tv({
            targetLang: n.selectedTargetLanguage
        }),
        t({
            action: "dlTrackRightClick",
            payload: {
                translationType: u ? c : l,
                domainName: window.location.host
            }
        })
    }
      , Sv = async(e,n)=>{
        I_();
        const o = await t({
            action: "dlGetAppSettings"
        });
        var i;
        Ev({
            sourceLang: e,
            trigger: n,
            isFirstTime: !0,
            noTranslationLanguages: (i = o.languagesForTranslation,
            Object.keys(i).filter((e=>{
                i[e]
            }
            )))
        }).catch((e=>{
            cr.update({
                translationState: r.none,
                error: e.message ? e.message : e
            })
        }
        ))
    }
      , Lv = async e=>{
        if (e.length <= 5e3)
            return !1;
        const t = await Gv();
        return !t.isLoggedIn || !t.isProUser
    }
      , kv = async e=>{
        const t = e.length
          , n = await Gv();
        if (!n.isLoggedIn && t > p)
            throw new Zt(p,"Limit exceeded (anonymous user). Please upgrade");
        if (n.isLoggedIn && !n.isProUser && t > h)
            throw new Vt(h,"Limit exceeded (free account). Please upgrade")
    }
      , Mv = async e=>{
        const {event: n, targetLang: o} = e
          , i = document.querySelector("deepl-gdocs-icon");
        if (o && i) {
            const {originalText: e, textLines: s, entities: a, contentReference: l, originalObject: c} = Ke(n);
            if (document.getElementsByTagName("deepl-inline-translate-tooltip").length || M_({
                websiteData: cr,
                platformBehaviour: K.gdocs
            }),
            await Lv(e))
                return void cr.update({
                    translationState: r.anonymousUserMaxCharExceeded,
                    translatedSnippet: "",
                    originalSnippet: e
                });
            cr.update({
                translationState: r.ongoingTranslation,
                translatedSnippet: "",
                snippetDetectedSourceLang: "",
                translatedDOMSnippet: "",
                originalSnippet: ""
            });
            try {
                const n = await t({
                    action: "dlRequestGDocsSplitText",
                    payload: {
                        mode: yv,
                        texts: s
                    }
                })
                  , d = n.result.lang.detected
                  , u = []
                  , m = [];
                for (const e of n.result.texts) {
                    const t = [];
                    for (const n of e.chunks)
                        for (const e of n.sentences)
                            m.push(e),
                            t.push(m.length - 1);
                    u.push(t)
                }
                const g = (await t({
                    action: "dlRequestGDocsProcessContent",
                    payload: {
                        mode: yv,
                        sentences: m,
                        sourceLang: d,
                        targetLang: o.substring(0, 2),
                        domain: window.location.host
                    }
                })).result.translations.map(((e,t)=>({
                    prefix: m[t].prefix,
                    text: e.beams[0].sentences[0].text
                })));
                i.setContentProcessBuildingBlocks({
                    detectedSourceLanguage: d,
                    targetLang: o.substring(0, 2),
                    sentences: m,
                    processedSentences: g,
                    textLines: s,
                    textLinesComponents: u,
                    entities: a,
                    contentReference: l,
                    originalObject: c
                }),
                cr.update({
                    translationState: r.none,
                    translatedSnippet: "GDOCS_CONTENT",
                    snippetDetectedSourceLang: d,
                    originalSnippet: e,
                    websiteLanguage: d
                })
            } catch (t) {
                console.error(t),
                cr.update({
                    translationState: r.none,
                    originalSnippet: e,
                    error: t.message ? t.message : t
                })
            }
        }
    }
      , Iv = async({event: e, lang: n})=>{
        const {originalText: o, textLines: i, entities: s, contentReference: a, originalObject: l} = Ke(e);
        document.getElementsByTagName("deepl-inline-translate-tooltip").length || M_({
            websiteData: cr,
            platformBehaviour: K.gdocs,
            textProcessingMode: Y.write
        });
        const c = document.querySelector("deepl-gdocs-icon")
          , d = {
            lang: n,
            sourceLength: o.length,
            targetLength: 0,
            nicheIntegration: K.gdocs,
            error: ""
        };
        if (await Lv(o))
            return cr.update({
                translationState: r.anonymousUserMaxCharExceeded,
                translatedSnippet: "",
                originalSnippet: o
            }),
            void (c && c.setDeeplWriteTrackingData(d));
        cr.update({
            translationState: r.ongoingTranslation,
            translatedSnippet: "",
            snippetDetectedSourceLang: "",
            translatedDOMSnippet: "",
            originalSnippet: ""
        });
        try {
            const e = await t({
                action: "dlRequestGDocsSplitText",
                payload: {
                    mode: xv,
                    texts: i
                }
            })
              , n = e.result.lang.detected
              , u = []
              , m = [];
            for (const t of e.result.texts) {
                const e = [];
                for (const n of t.chunks)
                    for (const t of n.sentences)
                        m.push(t),
                        e.push(m.length - 1);
                u.push(e)
            }
            const g = (await t({
                action: "dlRequestGDocsProcessContent",
                payload: {
                    mode: xv,
                    sentences: m,
                    sourceLang: n,
                    targetLang: n,
                    domain: window.location.host
                }
            })).result.translations.map(((e,t)=>({
                prefix: m[t].prefix,
                text: e.beams[0].sentences[0].text
            })));
            c.setContentProcessBuildingBlocks({
                detectedSourceLanguage: n,
                targetLang: n,
                sentences: m,
                processedSentences: g,
                textLines: i,
                textLinesComponents: u,
                entities: s,
                contentReference: a,
                originalObject: l
            }),
            c.setDeeplWriteTrackingData(d),
            cr.update({
                translationState: r.none,
                translatedSnippet: "GDOCS_CONTENT",
                snippetDetectedSourceLang: n,
                originalSnippet: o,
                websiteLanguage: n
            }),
            Vv({
                eventType: ue,
                ...d
            })
        } catch (e) {
            const t = e.message ? e.message : e;
            cr.update({
                translationState: r.none,
                originalSnippet: o,
                error: t
            }),
            Vv({
                eventType: _e,
                ...d,
                error: t
            })
        }
    }
      , Av = async e=>{
        const {sentences: n, targetLang: o, sourceLang: i, mode: s} = e;
        if (o) {
            await kv(n.join(""));
            try {
                const e = await t({
                    action: "dlRequestInputTranslation",
                    payload: {
                        requests: n.map((e=>({
                            text: e
                        }))),
                        domainName: window.location.hostname,
                        websiteLanguage: o,
                        targetLang: o,
                        sourceLang: i,
                        platformBehavior: K.gslides,
                        isHtml: !0,
                        isWriteRequest: s === Y.write
                    }
                })
                  , a = e[0]?.texts;
                return a
            } catch (e) {
                throw console.error(e),
                Error(e)
            }
        }
    }
      , Nv = async({event: e, targetLang: n, sourceLang: o, mode: i})=>{
        if (n) {
            const {textLines: n, entities: s, contentReference: a, originalObject: r} = Ke(e);
            await kv(n.join(""));
            try {
                const e = await t({
                    action: "dlRequestInlineTranslation",
                    payload: {
                        requests: n.map((e=>({
                            text: e
                        }))),
                        domainName: window.location.hostname,
                        trigger: d,
                        sourceLang: o,
                        nicheIntegration: K.gslides,
                        isWriteRequest: i === Y.write
                    }
                })
                  , {processedText: l, processedEntities: c} = et({
                    textLines: e.map((e=>e.text)),
                    entities: s,
                    contentReference: a
                });
                return st({
                    entities: c,
                    text: l,
                    originalObject: r
                })
            } catch (e) {
                console.error(e)
            }
        }
    }
      , Ov = async e=>{
        const {element: n, targetLang: o} = e;
        let i, s = "";
        if (o) {
            const {domElements: a, strings: r, tmpElementMap: l} = (e=>{
                const t = []
                  , n = []
                  , o = {};
                return Xl({
                    domElements: t,
                    strings: n,
                    element: e,
                    tmpElementMap: o
                }),
                {
                    domElements: t,
                    strings: n,
                    tmpElementMap: o
                }
            }
            )(n);
            try {
                const i = await t({
                    action: "dlRequestZendeskInputTranslation",
                    payload: {
                        texts: r,
                        domainName: window.location.hostname,
                        websiteLanguage: o,
                        targetLang: o,
                        ...e.formality && {
                            formality: e.formality
                        }
                    }
                })
                  , c = i[0]?.texts;
                c && c.length > 0 && (Kl({
                    strings: c,
                    domElements: a
                }),
                (({element: e, tmpElementMap: t})=>{
                    for (const n of Object.keys(t)) {
                        const o = e.getElementsByTagName(n);
                        Array.from(o).forEach((e=>{
                            const {originalTagName: o, originalAttributes: i} = t[n]
                              , s = document.createElement(o);
                            for (const e in i)
                                s.setAttribute(e, i[e]);
                            s.innerHTML = e.innerHTML,
                            e.replaceWith(s)
                        }
                        ))
                    }
                }
                )({
                    element: n,
                    tmpElementMap: l
                }),
                s = n.innerHTML,
                n.innerHTML = ""),
                t({
                    action: "dlOnSuccessfulZendeskTranslation"
                })
            } catch (e) {
                console.error(e),
                i = e
            }
        }
        return [s, i]
    }
      , Dv = async e=>{
        const {targetLang: n, sourceLang: o, text: i, trigger: s} = e;
        let a, r = "";
        if (o && n)
            try {
                r = await t({
                    action: "dlRequestZendeskMessageTranslation",
                    payload: {
                        domainName: window.location.hostname,
                        sourceLang: o,
                        targetLang: n,
                        text: i,
                        trigger: s
                    }
                })
            } catch (e) {
                console.error(e),
                a = e
            }
        return [r, a]
    }
      , Rv = async()=>{
        let e, n = [];
        try {
            const [o,i] = await t({
                action: "dlRequestZendeskTermbases"
            });
            i ? e = i : n = o
        } catch (t) {
            console.error(t),
            e = t
        }
        return [n, e]
    }
      , Pv = async()=>{
        let e = document.body.innerText.substring(0, 200);
        if (!e || 1 === e.length) {
            const t = document.title;
            t.length >= e.length && (e = t)
        }
        let n = "";
        const o = await chrome.i18n.detectLanguage(e);
        o && o.languages?.length > 0 && (n = o.languages.sort(((e,t)=>t.percentage - e.percentage))[0].language.substr(0, 2).toUpperCase());
        try {
            t({
                action: "dlTrackDetectLanguage",
                payload: {
                    language: n,
                    domainName: window.location.host
                }
            })
        } catch (e) {
            console.error(e)
        }
        return n
    }
      , Hv = async()=>{
        let t = document.documentElement.lang;
        !t && e.websiteData.websiteLanguage && (t = e.websiteData.websiteLanguage),
        Ul(window.location.href);
        {
            const t = async()=>{
                let t = document.documentElement.lang;
                if (!t && e.websiteData.websiteLanguage && (t = e.websiteData.websiteLanguage),
                t)
                    return t.substr(0, 2).toUpperCase();
                try {
                    cr.update({
                        translationState: r.ongoingAutoDetection
                    });
                    const e = await Pv();
                    return cr.update({
                        translationState: r.none
                    }),
                    e
                } catch (e) {
                    cr.update({
                        translationState: r.none,
                        error: e.message ? e.message : chrome.i18n.getMessage(e)
                    })
                }
            }
              , n = ()=>{
                const e = document.documentElement.className;
                return /translated/g.test(e)
            }
              , o = Ul(window.location.href)
              , i = await t();
            cr.update({
                websiteLanguage: i,
                hostname: window.location.hostname,
                isSupportedLanguage: lt(i),
                isGoogleTranslatedActive: n(),
                isValidUrlForPopup: o
            });
            const s = new MutationObserver((async()=>{
                const e = await t();
                cr.update({
                    websiteLanguage: e,
                    isSupportedLanguage: lt(e),
                    isGoogleTranslatedActive: n(),
                    isValidUrlForPopup: o
                })
            }
            ));
            s.observe(document.documentElement, {
                attributes: !0,
                childList: !1,
                characterData: !1,
                subtree: !1,
                attributeFilter: ["class"]
            }),
            vi((()=>{
                s.disconnect()
            }
            ))
        }
    }
      , Gv = async()=>await t({
        action: "dlGetUserState"
    })
      , zv = async(n,o=!1)=>{
        if (n && !n.isTrusted && !o)
            return;
        const i = await t({
            action: "dlGetAppSettings"
        });
        Wv(),
        await Hv();
        const r = await Gv();
        r.isLoggedIn && r.isProUser && (lt(e.websiteData.websiteLanguage) && (rt(i.selectedTargetLanguage, e.websiteData.websiteLanguage) && !e.websiteData.isGoogleTranslatedActive || gt(e.websiteData.websiteLanguage, i.languagesForTranslation, a) || i.blacklistDomains.includes(e.websiteData.hostname) || Bl(window.location.host, S) || (gt(e.websiteData.websiteLanguage, i.languagesForTranslation, s) && Sv(e.websiteData.websiteLanguage, u),
        i.enableFullPageTranslation && window === window.parent && O_())))
    }
      , Bv = async()=>{
        await Hv(),
        document.getElementsByTagName("deepl-input-controller").length || U_()
    }
      , Uv = async()=>{
        await Hv(),
        Z_(cr)
    }
      , Wv = ()=>{
        Ue() && R_(),
        ht() && P_(),
        nl() && z_(),
        Dl() && W_()
    }
      , Fv = e=>{
        Yi.set(e)
    }
      , jv = async e=>{
        const n = ()=>{
            for (const t of Object.keys(F))
                if (F[t] && e.match(F[t]))
                    return t;
            if (document.querySelector("iframe#WebApplicationFrame")) {
                const e = document.querySelector("form#frameForm, form#office_form")
                  , t = e && new URL(e.getAttribute("action"))?.hostname?.toLowerCase();
                if (t)
                    for (const e of Object.keys(j))
                        if (j[e] && t.includes(j[e]))
                            return e
            }
            if ("onedrive.live.com" === e)
                for (const e of Object.keys(q))
                    if (q[e] && document.querySelector(`#${q[e]}`))
                        return e;
            return document.querySelector("body#jira") ? "jira" : document.querySelector("body#com-atlassian-confluence") ? "confluence" : void 0
        }
          , o = n();
        o ? t({
            action: "dlTrackLandingOnWebsite",
            payload: {
                website: o
            }
        }) : setTimeout((()=>{
            const e = n();
            e && t({
                action: "dlTrackLandingOnWebsite",
                payload: {
                    website: e
                }
            })
        }
        ), 2e3)
    }
      , qv = async({eventType: e, controller: n, sourceTextLength: o, targetTextLength: i, error: s, metaDataOverride: a={}})=>{
        const r = n?.getTicketLanguageInformation()
          , l = {
            agentLanguage: (await t({
                action: "dlGetAppSettings"
            })).selectedTargetLanguage,
            ticketLanguage: r?.language,
            isTicketLanguageAutodetected: r?.isDetected,
            isTicketLanguageSupported: r?.isSupported,
            isAutoTranslateEnabled: n.getIsAutoTranslatedEnabled(),
            sourceTextLength: o,
            targetTextLength: i,
            inputHasSelection: n.getInputHasSelection(),
            error: s,
            ...a
        };
        await t({
            action: "dlTrackZendeskCustomizationEvent",
            payload: {
                eventType: e,
                zendeskMetaData: l
            }
        })
    }
      , Vv = async({eventType: e, lang: n, sourceLength: o, targetLength: i, nicheIntegration: s=K.default, error: a, metaDataOverride: r={}})=>{
        await t({
            action: "dlTrackDeeplWriteEvent",
            payload: {
                eventType: e,
                deeplWriteMetaData: {
                    lang: n,
                    sourceLength: o,
                    targetLength: i,
                    nicheIntegration: s,
                    error: a,
                    ...r
                }
            }
        })
    }
    ;
    function Zv(e) {
        lr(e)
    }
    function Kv(t, n, o) {
        switch (t.action) {
        case "dlTranslate":
            t.sourceLang && Sv(t.sourceLang, m),
            o();
            break;
        case "dlShowOriginal":
            cr.update({
                translationState: r.showOriginal
            }),
            o();
            break;
        case "dlDefaultPopUpMounting":
            e.websiteData.translationState === r.none && I_(),
            D_(),
            o();
            break;
        case "dlTabChanged":
            setTimeout(Hv, 500),
            o();
            break;
        case "dlTranslateInline":
            Hv().then((()=>Tv(t))),
            o();
            break;
        case "dlTranslateSelectionRightClick":
            Hv().then((()=>Cv(t.payload))),
            o();
            break;
        case "dlGetWebsiteData":
            Hv().then((()=>o(e.websiteData)));
            break;
        case "dlShowNotification":
            K_(t.payload.type, t.payload.options),
            o();
            break;
        case "dlErrorVisibility":
            console.log("content listener", t),
            Fv(t.payload.state),
            o();
            break;
        case "dlShowAskForAReviewPopup":
            Y_(V.initial),
            o();
            break;
        case "dlShowCustomerSegmentationSurvey":
            Y_(V.customer_segmentation),
            o();
            break;
        case "dlShowAlert":
            Zv(t.payload),
            o();
            break;
        case "dlShowGmailFeedbackPopup":
            Y_(V.gmail),
            o();
            break;
        case "dlShowSlidesFeedbackPopup":
            Y_(V.gslides),
            o()
        }
        return !0
    }
    const Yv = ()=>{
        const e = window.location.hostname.split(".");
        if (e.length < 2)
            return !1;
        return "deepl.com" === `${e.at(-2)}.${e.at(-1)}`
    }
      , Xv = ()=>!Yv() && !nl()
      , Qv = ()=>!Yv() && !nl();
    if (It() && {
        IS_PROD: !0,
        BASE_URLS: {
            dapApi: "https://s.deepl.com/chrome/statistics",
            toolingApiPro: "https://api.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
            toolingApi: "https://www2.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
            toolingWriteApiPro: "https://write-pro.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
            toolingWriteApi: "https://write-free.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
            classicApi: "https://www2.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
            classicApiPro: "https://api.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
            classicApiWrite: "https://write-free.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
            classicApiWritePro: "https://write-pro.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
            classicApiGlossary: "https://api.deepl.com/termbases/jsonrpc?client=chrome-extension,1.16.1",
            login: "https://www.deepl.com/auth/login",
            token: "https://w.deepl.com/oidc/token",
            logout: "https://www.deepl.com/auth/logout",
            feedbackSurvey: "https://deepl.typeform.com/to/MkMfP2Y6",
            newFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_cMvbeX0WZGvkKGi",
            firefoxFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_eyfDZqQmXuNTFOK",
            uninstallSurvey: "https://deepl.qualtrics.com/jfe/form/SV_eJxAD8c7J5hqSRU",
            gslidesFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_9XBLSAbDmLq5emO",
            deeplPro: "https://www.deepl.com/pro",
            deeplTranslator: "https://www.deepl.com/translator",
            deeplDoctrans: "https://www.deepl.com/translator/files",
            deeplTermsOfServiceFree: "https://www.deepl.com/en/pro-license?tab=free",
            deeplCreateAccount: "https://www.deepl.com/signup",
            extensionStorePage: "https://bit.ly/DeepL-Chrome",
            supportArticle: "https://support.deepl.com/hc/articles/4407580229522",
            deeplSupport: "https://support.deepl.com/hc",
            chromeWebstore: "https://chrome.google.com/webstore/detail/deepl-translate-reading-w/cofdbpoegempjloogbagkncekinflcnj",
            edgeWebstore: "https://microsoftedge.microsoft.com/addons/detail/deepl-translate-reading-/fancfknaplihpclbhbpclnmmjcjanbaf",
            firefoxWebstore: "https://addons.mozilla.org/en-US/firefox/addon/deepl-translate",
            firefoxShortcutDocs: "https://support.mozilla.org/kb/manage-extension-shortcuts-firefox",
            clientStateApi: "https://w.deepl.com/web",
            experimentsEndpoint: "https://s.deepl.com/chrome/experiments",
            gmailFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_db8ItFTmYBcZjYW",
            customerSegmentationSurveyFree: "https://deepl.qualtrics.com/jfe/form/SV_3LbBcdg4mjQuCCq?desc=TG-2071",
            customerSegmentationSurveyPro: "https://deepl.qualtrics.com/jfe/form/SV_3LbBcdg4mjQuCCq?desc=TG-2070"
        },
        APP_VERSION: "1.16.1",
        FEATURE_FLAGS: {
            TRANSLATE_INPUT: !0,
            PAGE_TRANSLATION: !0,
            IMPROVE_WRITING: !0,
            DOCUMENT_TRANSLATION: !0,
            RECOMMEND_TO_A_FRIEND: !0,
            PRO_LOGIN: !0,
            WEBPAGE_CUSTOMIZER: !0,
            GDOCS_INTEGRATION: !0,
            ZENDESK_INTEGRATION: !0,
            GMAIL_INTEGRATION: !0,
            GSLIDES_INTEGRATION: !0,
            ON_INSTALL_ONBOARDING: !0,
            WHATSAPP_TRANSLATE_ALL_CHAT: !1,
            DEEPL_WRITE_GENERAL: !1,
            DEEPL_WRITE_GDOCS: !0,
            SHOW_CUSTOMER_SEGMENTATION_SURVEY: !0
        }
    }.HOT_RELOAD.active) {
        new WebSocket(`ws://localhost:${{
            IS_PROD: !0,
            BASE_URLS: {
                dapApi: "https://s.deepl.com/chrome/statistics",
                toolingApiPro: "https://api.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                toolingApi: "https://www2.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                toolingWriteApiPro: "https://write-pro.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                toolingWriteApi: "https://write-free.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                classicApi: "https://www2.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                classicApiPro: "https://api.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                classicApiWrite: "https://write-free.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                classicApiWritePro: "https://write-pro.www.deepl.com/jsonrpc?client=chrome-extension,1.16.1",
                classicApiGlossary: "https://api.deepl.com/termbases/jsonrpc?client=chrome-extension,1.16.1",
                login: "https://www.deepl.com/auth/login",
                token: "https://w.deepl.com/oidc/token",
                logout: "https://www.deepl.com/auth/logout",
                feedbackSurvey: "https://deepl.typeform.com/to/MkMfP2Y6",
                newFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_cMvbeX0WZGvkKGi",
                firefoxFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_eyfDZqQmXuNTFOK",
                uninstallSurvey: "https://deepl.qualtrics.com/jfe/form/SV_eJxAD8c7J5hqSRU",
                gslidesFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_9XBLSAbDmLq5emO",
                deeplPro: "https://www.deepl.com/pro",
                deeplTranslator: "https://www.deepl.com/translator",
                deeplDoctrans: "https://www.deepl.com/translator/files",
                deeplTermsOfServiceFree: "https://www.deepl.com/en/pro-license?tab=free",
                deeplCreateAccount: "https://www.deepl.com/signup",
                extensionStorePage: "https://bit.ly/DeepL-Chrome",
                supportArticle: "https://support.deepl.com/hc/articles/4407580229522",
                deeplSupport: "https://support.deepl.com/hc",
                chromeWebstore: "https://chrome.google.com/webstore/detail/deepl-translate-reading-w/cofdbpoegempjloogbagkncekinflcnj",
                edgeWebstore: "https://microsoftedge.microsoft.com/addons/detail/deepl-translate-reading-/fancfknaplihpclbhbpclnmmjcjanbaf",
                firefoxWebstore: "https://addons.mozilla.org/en-US/firefox/addon/deepl-translate",
                firefoxShortcutDocs: "https://support.mozilla.org/kb/manage-extension-shortcuts-firefox",
                clientStateApi: "https://w.deepl.com/web",
                experimentsEndpoint: "https://s.deepl.com/chrome/experiments",
                gmailFeedbackSurvey: "https://deepl.qualtrics.com/jfe/form/SV_db8ItFTmYBcZjYW",
                customerSegmentationSurveyFree: "https://deepl.qualtrics.com/jfe/form/SV_3LbBcdg4mjQuCCq?desc=TG-2071",
                customerSegmentationSurveyPro: "https://deepl.qualtrics.com/jfe/form/SV_3LbBcdg4mjQuCCq?desc=TG-2070"
            },
            APP_VERSION: "1.16.1",
            FEATURE_FLAGS: {
                TRANSLATE_INPUT: !0,
                PAGE_TRANSLATION: !0,
                IMPROVE_WRITING: !0,
                DOCUMENT_TRANSLATION: !0,
                RECOMMEND_TO_A_FRIEND: !0,
                PRO_LOGIN: !0,
                WEBPAGE_CUSTOMIZER: !0,
                GDOCS_INTEGRATION: !0,
                ZENDESK_INTEGRATION: !0,
                GMAIL_INTEGRATION: !0,
                GSLIDES_INTEGRATION: !0,
                ON_INSTALL_ONBOARDING: !0,
                WHATSAPP_TRANSLATE_ALL_CHAT: !1,
                DEEPL_WRITE_GENERAL: !1,
                DEEPL_WRITE_GDOCS: !0,
                SHOW_CUSTOMER_SEGMENTATION_SURVEY: !0
            }
        }.HOT_RELOAD.webSocketServerPort}`).addEventListener("message", (e=>{
            "file-change" === e.data && chrome.runtime.sendMessage("reload")
        }
        ))
    }
    document.dispatchEvent(new CustomEvent("deepl-reset-event"));
    try {
        chrome.runtime.onMessage.addListener(Kv),
        vi((()=>{
            cr.update({
                translationState: r.showOriginal
            }),
            dr(),
            chrome.runtime.onMessage.removeListener(Kv)
        }
        ))
    } catch (e) {
        console.error(e),
        At(e.message)
    }
    try {
        J_(window.location.host),
        jv(window.location.host),
        ew(window.location.href),
        "complete" === document.readyState ? zv(null, !0) : window.addEventListener("load", zv),
        Xv() && Bv(),
        Qv() && Uv(),
        Q_(window.location.host)
    } catch (e) {
        console.error(e),
        At(e.message)
    }
    return e.GMAIL_CHAR_LIMIT_ANONYMOUS_USER = 1500,
    e.GMAIL_CHAR_LIMIT_FREE_USER = $f,
    e.GMAIL_UI_ADDED_ATTRIBUTE = bf,
    e.autodetectLanguage = Pv,
    e.buildGDocsPasteData = st,
    e.calculateNewIconPosition = Ve,
    e.canInjectInlineTranslation = Qv,
    e.canInjectInputTranslation = Xv,
    e.canTranslateElementForDomain = nw,
    e.checkForIntersectionWithOpenDialogs = d_,
    e.checkIfInputHasSelection = Al,
    e.clearMessageControllers = Ml,
    e.clickAtCoordinates = p_,
    e.clickOnElement = h_,
    e.createAlert = lr,
    e.createGmailController = W_,
    e.createGmailControllerUtil = ()=>document.createElement(i_.HTML_TAG_NAME),
    e.createGoogleDocsIcon = R_,
    e.createGoogleSlidesController = P_,
    e.createHighlightsForSentence = wf,
    e.createInlineTranslateSettingsTooltip = A_,
    e.createInlineTranslateTooltip = M_,
    e.createInlineTranslationTrigger = V_,
    e.createInlineTranslationTriggerListener = Z_,
    e.createInputTranslationController = U_,
    e.createNotification = K_,
    e.createPageLoadPopup = O_,
    e.createSubmitButtonTooltip = Nl,
    e.createTicketController = ll,
    e.createZendeskController = z_,
    e.createZendeskControllerElement = il,
    e.customizePage = Q_,
    e.detectTicketLanguageInLiveChat = El,
    e.detectTicketLanguageInTicket = $l,
    e.detectTicketType = fl,
    e.disableExtension = ul,
    e.elementHasTranslateToolbar = c_,
    e.extractSentencesAndEntitiesFromData = wt,
    e.findEditableContent = async function t(n, o) {
        try {
            if (o.dataset && "true" === o.dataset.dlInputTranslation || o.dataset && "true" === o.dataset.dlNoInputTranslation)
                return;
            if ("true" === o.contentEditable || "TEXTAREA" === o.nodeName && o.rows > 1) {
                if ("none" === window.getComputedStyle(o).display)
                    return;
                if (!function(e) {
                    return e.getBoundingClientRect().width > 0 && e.getBoundingClientRect().height > 0
                }(o))
                    return;
                if (!tw(o, e.websiteData.hostname))
                    return;
                o.dataset.dlInputTranslation = "true",
                n.push(o)
            }
            for (const e of o.childNodes)
                t(n, e)
        } catch (e) {
            It() && console.error(e),
            At(e.message)
        }
    }
    ,
    e.findEmailToAndFromAddressTable = u_,
    e.findForwardButtonInDocument = w_,
    e.findSiblingDivWithAnyMessageId = __,
    e.generateLanguagesWithShortcodeForDropdown = m_,
    e.getActivePane = al,
    e.getActiveTermbases = ()=>{
        const e = ol();
        return e ? e.getActiveTermbases() : []
    }
    ,
    e.getBlocksFromString = function(e, t=[]) {
        const n = [];
        let o = 0
          , i = !1;
        for (; !i; ) {
            const [s,a] = hf(e, t, o);
            if ("end" === s && (i = !0),
            o < a && n.push({
                block: "main",
                text: e.substring(o, a)
            }),
            i)
                break;
            const r = e.indexOf(`</${s}>`, a);
            -1 === r ? (n.push({
                block: s,
                text: e.substring(a + `<${s}>`.length)
            }),
            i = !0) : (n.push({
                block: s,
                text: e.substring(a + `<${s}>`.length, r)
            }),
            o = r + `</${s}>`.length)
        }
        return n
    }
    ,
    e.getContextMessages = e=>{
        const t = []
          , n = _l(e).map(bl).map((e=>e.innerText))
          , o = []
          , i = [];
        for (let e = 0; e < n.length; e++) {
            const s = e % 2 == 0 ? "start" : "end";
            let a = Math.floor(e / 2);
            if ("end" === s && (a = n.length - 1 - a),
            t.includes(a))
                break;
            if ([...o, ...i].reduce(((e,t)=>e + t.length), 0) + n[a].length > 3e3)
                break;
            "end" === s ? i.unshift(n[a]) : o.push(n[a]),
            t.push(a)
        }
        return [...o, ...i]
    }
    ,
    e.getControllerFromMessage = Ll,
    e.getCoordsOfWord = vf,
    e.getElementCenterCoordinates = g_,
    e.getGDocsisEditMode = Ze,
    e.getGmailControllerUtil = s_,
    e.getIFrameAndEditable = We,
    e.getIconCoordinates = qe,
    e.getMessageContent = bl,
    e.getMessageViewContainers = l_,
    e.getMessageWriteContainers = ()=>{
        const e = Array.from(document.querySelectorAll('[role="textbox"]')).filter((e=>"true" === e.getAttribute("contenteditable")));
        return e
    }
    ,
    e.getMessagesFromTicket = _l,
    e.getScrollableElements = aw,
    e.getSelectionContent = je,
    e.getSourceLangFromSlide = ft,
    e.getTicketController = rl,
    e.getTicketId = sl,
    e.getTicketStartingMessage = wl,
    e.getTicketStartingMessages = vl,
    e.getUserState = Gv,
    e.getWebsiteSettings = Hv,
    e.getWordsFromSentence = nt,
    e.getZendeskController = ol,
    e.getZendeskTermbases = Rv,
    e.improveGDocsSelectionContent = Iv,
    e.injectAskAReviewPopup = Y_,
    e.injectControllerInMessage = kl,
    e.injectInlineTranslation = Uv,
    e.injectInputTranslation = Bv,
    e.injectMissingMessageControllers = Sl,
    e.injectMissingUIElements = cl,
    e.isDeepLCom = Yv,
    e.isGDocs = Ue,
    e.isGSlides = ht,
    e.isGmail = Dl,
    e.isIncludedInTheText = function(e, t) {
        if (!e || !t)
            return !1;
        const n = /[\n\r\s]+/gm
          , o = e.replace(n, "")
          , i = t.replace(n, "");
        return o.includes(i)
    }
    ,
    e.isInputArea = iw,
    e.isOnMessageViewScreen = r_,
    e.isZendesk = nl,
    e.onOpenPage = zv,
    e.pageListener = Kv,
    e.processEntityAfterTranslation = vt,
    e.processGDocsCopyEvent = Ke,
    e.reassembleGDocsTranslatedResult = et,
    e.removeAllDeeplElements = function() {
        !function(e) {
            const t = document.getElementsByTagName(e);
            if (!t.length)
                return;
            for (let e = t.length - 1; e >= 0; --e)
                t[e].cleanupDOM(),
                t[e].remove()
        }("deepl-input-controller")
    }
    ,
    e.removeGDocsEntities = tt,
    e.removeGmailController = F_,
    e.removeGoogleDocsIcon = H_,
    e.removeGoogleSlidesController = G_,
    e.removeInlineTranslateSettingsTooltip = N_,
    e.removeInlineTranslateTooltip = I_,
    e.removeInlineTranslateTrigger = q_,
    e.removeInputTranslationController = j_,
    e.removePageLoadPopup = D_,
    e.removeUIElementsFromList = a_,
    e.removeZendeskController = B_,
    e.removeZendeskToolbar = Ol,
    e.removeZendeskUIElements = dl,
    e.replaceTranslatedGDocsContent = ot,
    e.runCustomScriptsForDomain = J_,
    e.runCustomScriptsForSpecificUrl = ew,
    e.scanForTranslatables = Ev,
    e.setErrorVisibility = Fv,
    e.shouldBeTranslated = wv,
    e.shouldInjectInputIcon = tw,
    e.showAlert = Zv,
    e.simulateGSLidesSelectAll = _t,
    e.trackDeeplWriteEvent = Vv,
    e.trackPageLandingIfNeeded = jv,
    e.trackZendeskCustomizationEvent = qv,
    e.translateGDocsSelectionContent = Mv,
    e.translateGSlidesInbloxkSelectionContent = Nv,
    e.translateGSlidesSelectionContent = Av,
    e.translateInlineText = Tv,
    e.translateSelectionRightClick = Cv,
    e.translateWebsite = Sv,
    e.translateZendeskMessage = Dv,
    e.translateZendeskSelectionContent = Ov,
    e.triggerCopyEvent = Fe,
    e.twitterState = Wc,
    e.unsubscribeToWebsiteState = dr,
    e.updateInputIconLanguageInformation = Cl,
    e.updateInputPositionerCoords = sw,
    e.updateIntegrationPanelIfExists = Il,
    e.updateToolbarAutoTranslateStatus = xl,
    e.updateToolbarLanguageInformation = yl,
    e.updateTopIconLanguageInformation = Tl,
    e.waitForElement = f_,
    e.websiteState = cr,
    e.whatsAppState = vc,
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e
}({});
//# sourceMappingURL=content.js.map
