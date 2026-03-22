// @ts-check

/**
 * @typedef {Record<string, string | Record<string, string>>} LangDict
 */

import fs from "fs";
import path from "path";

const baseDir = path.join(process.cwd(), "src", "_data", "i18n");

/**
 * 
 * @param {LangDict} lang 
 * @param {LangDict} translated 
 */
function mergeLangDict(lang, translated) {
    const result = { ...lang };
    for (const key of Object.keys(lang)) {
        if (typeof lang[key] === "string") {
            const translation = translated[key];
            if (translation !== undefined && translation !== null && translation !== "") {
                result[key] = translation;
            }
        } else if (typeof lang[key] === "object" && typeof translated[key] === "object") {
            result[key] = mergeLangDict(lang[key], translated[key]);
        }
    }
    return result;
}

export default function () {
    /** @type {Record<string, LangDict>} */
    const langs = {};

    /** @type {LangDict} */
    const defaultLang = JSON.parse(fs.readFileSync(path.join(baseDir, 'en.json'), "utf8"));

    for (const file of fs.readdirSync(baseDir)) {
        if (file.endsWith(".json")) {
            const code = path.basename(file, ".json");

            /** @type {LangDict} */
            let lang = JSON.parse(fs.readFileSync(path.join(baseDir, file), "utf8"));

            langs[code] = mergeLangDict(defaultLang, lang);
        }
    }
    return {
        languages: Object.keys(langs),
        ...langs
    };
}
