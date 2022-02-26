import * as fs from "fs";
import * as path from "path";
import * as mkdirp from "mkdirp";

/**
 * Command line utils functions.
 */
export class CommandUtils {

    /**
     * Creates directories recursively.
     */
    static createDirectories(directory: string) {
        return mkdirp(directory);
    }

    /**
     * Creates a file with the given content in the given path.
     */
    static async createFile(filePath: string, content: string, override: boolean = true): Promise<void> {
        await CommandUtils.createDirectories(path.dirname(filePath));
        const exists = await this.fileExists(filePath);
        return new Promise<void>((ok, fail) => {
            if (!override && exists)
                return ok();

            fs.writeFile(filePath, content, err => err ? fail(err) : ok());
        });
    }

    /**
     * Reads everything from a given file and returns its content as a string.
     */
    static async readFile(filePath: string): Promise<string> {
        return new Promise<string>((ok, fail) => fs.readFile(filePath, (err, data) => err ? fail(err) : ok(data.toString())));
    }


    static async fileExists(filePath: string): Promise<boolean> {
        return new Promise<boolean>((ok) => fs.access(filePath, (err) => ok(!err)));
    }
}
