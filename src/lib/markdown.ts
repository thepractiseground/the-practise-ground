// Simple markdown parser for blog content
// Handles: headings, bold, italic, links, lists, code, tables, hr

interface ParsedMarkdown {
  html: string;
  headings: string[];
}

export function markdownToHtml(markdown: string): ParsedMarkdown {
  let html = markdown;
  const headings: string[] = [];

  // Preserve code blocks first
  const codeBlocks: string[] = [];
  html = html.replace(/```[\s\S]*?```/g, (match) => {
    const code = match.replace(/```/g, "").trim();
    const placeholder = `__CODE_BLOCK_${codeBlocks.length}__`;
    codeBlocks.push(code);
    return placeholder;
  });

  // Preserve inline code
  const inlineCode: string[] = [];
  html = html.replace(/`([^`]+)`/g, (match, code) => {
    const placeholder = `__INLINE_CODE_${inlineCode.length}__`;
    inlineCode.push(code);
    return placeholder;
  });

  // Headings (must be at start of line)
  html = html.replace(/^## (.+)$/gm, (match, text) => {
    const cleanText = text.trim();
    headings.push(cleanText);
    return `<h2 class="markdown-h2">${cleanText}</h2>`;
  });

  html = html.replace(/^### (.+)$/gm, (match, text) => {
    const cleanText = text.trim();
    headings.push(cleanText);
    return `<h3 class="markdown-h3">${cleanText}</h3>`;
  });

  html = html.replace(/^#### (.+)$/gm, (match, text) => {
    return `<h4 class="markdown-h4">${text.trim()}</h4>`;
  });

  // Bold and italic
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");
  html = html.replace(/_(.+?)_/g, "<em>$1</em>");

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" class="markdown-link">$1</a>');

  // Tables (simple markdown table format)
  html = html.replace(
    /^\|(.+)\n\|[\s\-|:]+\n((?:\|.+\n?)*)/gm,
    (match) => {
      const lines = match.trim().split("\n");
      const headerLine = lines[0];
      const bodyLines = lines.slice(2);

      const headerCells = headerLine
        .split("|")
        .filter((cell) => cell.trim())
        .map((cell) => `<th class="markdown-th">${cell.trim()}</th>`);
      const headerHtml = `<thead><tr>${headerCells.join("")}</tr></thead>`;

      const bodyRows = bodyLines
        .map((line) => {
          const cells = line
            .split("|")
            .filter((cell) => cell.trim())
            .map((cell) => `<td class="markdown-td">${cell.trim()}</td>`);
          return `<tr>${cells.join("")}</tr>`;
        })
        .join("");
      const bodyHtml = `<tbody>${bodyRows}</tbody>`;

      return `<table class="markdown-table">${headerHtml}${bodyHtml}</table>`;
    }
  );

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, "<li class='markdown-li'>$1</li>");
  html = html.replace(
    /(<li class='markdown-li'>.*?<\/li>)(?:\n(?!<li)|\n$)/s,
    "<ol class='markdown-ol'>$1</ol>"
  );

  // Unordered lists
  html = html.replace(/^[\*\-] (.+)$/gm, "<li class='markdown-li'>$1</li>");
  html = html.replace(
    /(<li class='markdown-li'>.*?<\/li>)(?:\n(?!<li)|\n$)/s,
    "<ul class='markdown-ul'>$1</ul>"
  );

  // Horizontal rules
  html = html.replace(/^---$/gm, "<hr class='markdown-hr' />");

  // Paragraphs (double newline = paragraph break)
  const paragraphs = html.split("\n\n").map((para) => {
    para = para.trim();
    if (
      !para.startsWith("<") ||
      para.startsWith("<li") ||
      para.startsWith("<h")
    ) {
      if (para && !para.startsWith("<")) {
        return `<p class="markdown-p">${para}</p>`;
      }
    }
    return para;
  });

  html = paragraphs.join("\n");

  // Restore code blocks
  codeBlocks.forEach((code, index) => {
    html = html.replace(
      `__CODE_BLOCK_${index}__`,
      `<pre class="markdown-pre"><code class="markdown-code">${escapeHtml(code)}</code></pre>`
    );
  });

  // Restore inline code
  inlineCode.forEach((code, index) => {
    html = html.replace(
      `__INLINE_CODE_${index}__`,
      `<code class="markdown-inline-code">${escapeHtml(code)}</code>`
    );
  });

  return { html, headings };
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export const markdownStyles = `
  .markdown-h2 {
    @apply text-2xl font-bold text-brand-navy mt-8 mb-4;
  }

  .markdown-h3 {
    @apply text-xl font-bold text-brand-navy mt-6 mb-3;
  }

  .markdown-h4 {
    @apply text-lg font-bold text-gray-800 mt-4 mb-2;
  }

  .markdown-p {
    @apply text-gray-700 leading-relaxed mb-4;
  }

  .markdown-link {
    @apply text-brand-orange hover:underline font-medium;
  }

  .markdown-ul,
  .markdown-ol {
    @apply ml-6 mb-4;
  }

  .markdown-li {
    @apply mb-2;
  }

  .markdown-ul .markdown-li {
    @apply list-disc list-inside;
  }

  .markdown-ol .markdown-li {
    @apply list-decimal list-inside;
  }

  .markdown-ul .markdown-li::marker {
    @apply text-brand-teal;
  }

  .markdown-ol .markdown-li::marker {
    @apply text-brand-orange font-bold;
  }

  .markdown-inline-code {
    @apply bg-gray-100 text-brand-navy px-2 py-1 rounded text-sm font-mono;
  }

  .markdown-pre {
    @apply bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4;
  }

  .markdown-code {
    @apply font-mono text-sm;
  }

  .markdown-table {
    @apply w-full border-collapse mb-4 border border-gray-300;
  }

  .markdown-table .markdown-th,
  .markdown-table .markdown-td {
    @apply border border-gray-300 px-3 py-2 text-left;
  }

  .markdown-table .markdown-th {
    @apply bg-brand-navy text-white font-bold;
  }

  .markdown-table tbody tr:nth-child(odd) {
    @apply bg-gray-50;
  }

  .markdown-hr {
    @apply my-8 border-t-2 border-gray-300;
  }
`;
