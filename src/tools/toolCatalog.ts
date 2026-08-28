import type { LucideIcon } from 'lucide-react'
import {
  Braces,
  Code2,
  GitCompareArrows,
  FileCode2,
  FileJson,
  Hash,
  KeyRound,
  Link,
  QrCode,
  Regex,
  ShieldCheck,
  TerminalSquare,
  WandSparkles,
} from 'lucide-react'

export type ToolDefinition = {
  id: string
  label: string
  description: string
  category: string
  icon: LucideIcon
  settings: ToolSetting[]
}

export type ToolSetting =
  | { id: string; label: string; description: string; type: 'toggle'; defaultValue: boolean }
  | { id: string; label: string; description: string; type: 'select'; defaultValue: string; options: string[] }
  | { id: string; label: string; description: string; type: 'text'; defaultValue: string; placeholder?: string }
  | { id: string; label: string; description: string; type: 'number'; defaultValue: number; min?: number; max?: number }

const encodingSettings: ToolSetting[] = [
  { id: 'urlSafe', label: 'URL-safe alphabet', description: 'Use - and _ instead of + and /', type: 'toggle', defaultValue: false },
  { id: 'preservePadding', label: 'Preserve padding', description: 'Keep trailing = characters', type: 'toggle', defaultValue: true },
  { id: 'lineBreaks', label: 'Line breaks', description: 'Wrap output for easier reading', type: 'select', defaultValue: 'None', options: ['None', '64 characters', '76 characters'] },
]

export const tools: ToolDefinition[] = [
  { id: 'compare', label: 'Text Compare', description: 'Analyze code and text differences side-by-side.', category: 'Content', icon: GitCompareArrows, settings: [{ id: 'formatJson', label: 'Format JSON while comparing', description: 'Normalize JSON before finding differences', type: 'toggle', defaultValue: true }, { id: 'ignoreCase', label: 'Ignore Case', description: 'Treat uppercase and lowercase as equal', type: 'toggle', defaultValue: false }, { id: 'ignoreWhitespace', label: 'Ignore Whitespace', description: 'Skip differences caused by spacing', type: 'toggle', defaultValue: false }, { id: 'algorithm', label: 'Diff Algorithm', description: 'Choose how changes are matched', type: 'select', defaultValue: 'Character-by-character', options: ['Line-by-line', 'Character-by-character'] } ] },
  { id: 'base64', label: 'Base64 Encode / Decode', description: 'Convert text and data between plain text and Base64.', category: 'Encoding', icon: WandSparkles, settings: encodingSettings },
  { id: 'url', label: 'URL Encode / Decode', description: 'Handle query strings and URL components.', category: 'Encoding', icon: Link, settings: [{ id: 'component', label: 'Component mode', description: 'Encode one URL component at a time', type: 'toggle', defaultValue: true }, { id: 'spaceEncoding', label: 'Space encoding', description: 'Choose how spaces are represented', type: 'select', defaultValue: '%20', options: ['%20', '+'] }] },
  { id: 'jwt', label: 'JWT Debugger & Inspector', description: 'Inspect token claims and expiration details.', category: 'Security', icon: ShieldCheck, settings: [{ id: 'verifySignature', label: 'Verify signature', description: 'Check the token with a supplied secret', type: 'toggle', defaultValue: false }, { id: 'algorithm', label: 'Algorithm', description: 'Expected signing algorithm', type: 'select', defaultValue: 'HS256', options: ['HS256', 'RS256', 'ES256'] }] },
  { id: 'hash', label: 'Cryptographic Hash Generator', description: 'Create secure hashes from text in your browser.', category: 'Security', icon: Hash, settings: [{ id: 'algorithm', label: 'Hash algorithm', description: 'Select the digest function', type: 'select', defaultValue: 'SHA-256', options: ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'] }, { id: 'uppercase', label: 'Uppercase output', description: 'Display hexadecimal characters in capitals', type: 'toggle', defaultValue: false }] },
  { id: 'html', label: 'HTML Entities Escape', description: 'Escape and decode special HTML characters.', category: 'Markup', icon: Code2, settings: [{ id: 'convertQuotes', label: 'Convert quotes', description: 'Escape single and double quotes', type: 'toggle', defaultValue: true }, { id: 'mode', label: 'Mode', description: 'Choose the conversion direction', type: 'select', defaultValue: 'Escape', options: ['Escape', 'Decode'] }] },
  { id: 'hex', label: 'Hex / ASCII Converter', description: 'Convert byte values between hexadecimal and ASCII.', category: 'Encoding', icon: FileCode2, settings: [{ id: 'uppercase', label: 'Uppercase hex', description: 'Use capital A-F characters', type: 'toggle', defaultValue: false }, { id: 'separator', label: 'Separator', description: 'Character between byte values', type: 'text', defaultValue: ' ', placeholder: 'e.g. space' }] },
  { id: 'json', label: 'JSON Formatter', description: 'Format, validate, and inspect JSON data.', category: 'Code', icon: FileJson, settings: [{ id: 'indent', label: 'Indent size', description: 'Spaces used for nested values', type: 'number', defaultValue: 2, min: 0, max: 8 }, { id: 'sortKeys', label: 'Sort keys', description: 'Order object keys alphabetically', type: 'toggle', defaultValue: false }] },
  { id: 'regex', label: 'Regex Tester', description: 'Test regular expressions against sample text.', category: 'Code', icon: Regex, settings: [{ id: 'flags', label: 'Flags', description: 'Regular expression flags', type: 'text', defaultValue: 'gi', placeholder: 'e.g. gim' }, { id: 'global', label: 'Show all matches', description: 'Return every match in the input', type: 'toggle', defaultValue: true }] },
  { id: 'api', label: 'API Request Builder', description: 'Compose and inspect HTTP requests.', category: 'Developer', icon: TerminalSquare, settings: [{ id: 'method', label: 'HTTP method', description: 'Request method to use', type: 'select', defaultValue: 'GET', options: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'] }, { id: 'followRedirects', label: 'Follow redirects', description: 'Automatically follow HTTP redirects', type: 'toggle', defaultValue: true }] },
  { id: 'qr', label: 'QR Code Generator', description: 'Turn text and links into a scannable QR code.', category: 'Generators', icon: QrCode, settings: [{ id: 'size', label: 'Size', description: 'Output image dimensions', type: 'number', defaultValue: 256, min: 128, max: 1024 }, { id: 'errorCorrection', label: 'Error correction', description: 'Recovery level for damaged codes', type: 'select', defaultValue: 'Medium', options: ['Low', 'Medium', 'Quartile', 'High'] }] },
  { id: 'key', label: 'Key Pair Generator', description: 'Generate cryptographic keys locally.', category: 'Security', icon: KeyRound, settings: [{ id: 'keySize', label: 'Key size', description: 'Number of bits in the generated key', type: 'select', defaultValue: '2048 bits', options: ['2048 bits', '3072 bits', '4096 bits'] }] },
  { id: 'code', label: 'Code Minifier', description: 'Reduce whitespace in CSS, HTML, and JavaScript.', category: 'Code', icon: Braces, settings: [{ id: 'language', label: 'Language', description: 'Syntax to process', type: 'select', defaultValue: 'JavaScript', options: ['JavaScript', 'CSS', 'HTML'] }, { id: 'removeComments', label: 'Remove comments', description: 'Strip comments from the output', type: 'toggle', defaultValue: true }] },
]

export const defaultTool = tools[0]
