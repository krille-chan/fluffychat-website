import fs from "fs";
import path from "path";

const baseDir = path.join(process.cwd(), "src", "_data", "i18n");

export default function () {
    const langs = {};
    for (const file of fs.readdirSync(baseDir)) {
        if (file.endsWith(".json")) {
            const code = path.basename(file, ".json");
            langs[code] = JSON.parse(fs.readFileSync(path.join(baseDir, file), "utf8"));
        }
    }
    return {
        languages: Object.keys(langs),
        ...langs
    };
}
