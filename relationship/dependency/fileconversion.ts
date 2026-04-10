class Filereader {
    read(filePath: string): string {
        return `content from ${filePath}`;
    }
}

class FormatParser {
    parse(content: string, targetFormat: string): string {
        if (targetFormat === "json") {
            return `{ "${content}" }`;
        } else if (targetFormat === "string") {
            return `"${content}"`;
        } else {
            return content;
        }
    }
}

class FileWriter {
    write(filePath: string, content: string): void {
        console.log(`Writing to ${filePath}: ${content}`);
    }
}

class FileConverter {
    convert(
        sourcePath: string,
        targetPath: string,
        targetFormat: string,
        reader: Filereader,
        parser: FormatParser,
        writer: FileWriter
    ): void {

        // Step 1: Read
        const content = reader.read(sourcePath);

        // Step 2: Parse / Convert
        const parsedContent = parser.parse(content, targetFormat);

        // Step 3: Write
        writer.write(targetPath, parsedContent);
    }
}