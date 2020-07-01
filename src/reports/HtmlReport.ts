import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `<html>
            <body>
                <div>${report}</div>
            </body>
        </html>`;

    fs.writeFileSync("report.html", html);
  }
}
