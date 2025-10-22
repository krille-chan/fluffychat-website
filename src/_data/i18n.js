import fs from "fs";
import path from "path";

const baseDir = path.join(process.cwd(), "src", "_data", "i18n");

export default function () {
    const langs = {};
    const defaultLang = JSON.parse(fs.readFileSync(path.join(baseDir, 'en.json'), "utf8"));
    for (const file of fs.readdirSync(baseDir)) {
        if (file.endsWith(".json")) {
            const code = path.basename(file, ".json");
            const lang = JSON.parse(fs.readFileSync(path.join(baseDir, file), "utf8"));
            langs[code] = {
                ...defaultLang,
                ...lang,
            };
            langs[code].website = {
                ...defaultLang.website,
                ...lang.website,
            };
            langs[code].faq = {
                ...defaultLang.faq,
                ...lang.faq,
            };
        }
    }
    return {
        languages: Object.keys(langs),
        ...langs
    };
}
