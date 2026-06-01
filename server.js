// Enkel lokal webserver slik at ES-moduler (import/export) fungerer.
// Filsystemet (file://) tillater ikke ES-moduler i nettleseren.
import { createServer } from 'node:http';
import { readFile }     from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname }      from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = 3000;

const mime = {
    '.html': 'text/html; charset=utf-8',
    '.js':   'application/javascript; charset=utf-8',
    '.css':  'text/css; charset=utf-8',
};

createServer(async (req, res) => {
    const filePath = join(__dirname, req.url === '/' ? 'index.html' : req.url);
    try {
        const content = await readFile(filePath);
        res.writeHead(200, { 'Content-Type': mime[extname(filePath)] ?? 'text/plain' });
        res.end(content);
    } catch {
        res.writeHead(404);
        res.end('404 – ikke funnet');
    }
}).listen(PORT, () => console.log(`Åpne → http://localhost:${PORT}`));
