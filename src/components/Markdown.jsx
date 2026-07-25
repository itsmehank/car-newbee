import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import glossary from "@/content/glossary.json";

// 한글 조사가 붙는 **볼드**는 CommonMark flanking 규칙상 렌더 실패(리터럴 노출).
// 렌더 전에 **텍스트** → <strong>텍스트</strong> 로 바꿔 항상 굵게 표시되게 한다.
function fixBold(md) {
  if (!md) return md;
  return md.replace(/\*\*(?!\s)([^\n*]+?)(?<!\s)\*\*/g, "<strong>$1</strong>");
}

// ── 콜아웃(admonition): 인용문 첫 줄이 [!TIP]/[!NOTE]/[!WARN]/[!DANGER]/[!CHECK]면 색 박스로 ──
// GitHub 스타일. glossary 래핑 전에 실행해야 마커가 온전한 텍스트로 인식된다.
const CALLOUT = {
  TIP: { cls: "tip", icon: "💡", label: "팁" },
  NOTE: { cls: "note", icon: "📌", label: "핵심" },
  IMPORTANT: { cls: "note", icon: "📌", label: "핵심" },
  WARN: { cls: "warn", icon: "⚠️", label: "주의" },
  WARNING: { cls: "warn", icon: "⚠️", label: "주의" },
  DANGER: { cls: "danger", icon: "🚨", label: "경고" },
  CHECK: { cls: "check", icon: "✅", label: "체크" },
};

function firstTextNode(node) {
  if (!node) return null;
  // 공백만 있는 텍스트 노드(blockquote 첫 자식의 "\n")는 건너뛴다.
  if (node.type === "text") return node.value.trim() ? node : null;
  if (node.children) {
    for (const c of node.children) {
      const t = firstTextNode(c);
      if (t) return t;
    }
  }
  return null;
}

function rehypeCallout() {
  return (tree) => {
    const visit = (node) => {
      if (!node.children) return;
      for (const child of node.children) {
        if (child.type === "element" && child.tagName === "blockquote") {
          const t = firstTextNode(child);
          const m = t && t.value.match(/^\s*\[!(TIP|NOTE|IMPORTANT|WARN|WARNING|DANGER|CHECK)\]\s*/i);
          if (m) {
            child.properties = child.properties || {};
            child.properties.dataCallout = m[1].toUpperCase();
            t.value = t.value.slice(m[0].length); // 마커 제거, 나머지 본문 유지
          }
        }
        visit(child);
      }
    };
    visit(tree);
  };
}

// ── 용어집 용어를 본문에서 첫 등장 1회만 <gterm>으로 감싸는 rehype 플러그인 ──
const TERMS = Object.keys(glossary).sort((a, b) => b.length - a.length);
const NO_WRAP = new Set(["a", "code", "gterm", "summary"]);

function splitText(value, used) {
  const nodes = [];
  let rest = value;
  while (rest) {
    let best = null;
    for (const t of TERMS) {
      if (used.has(t)) continue;
      const idx = rest.indexOf(t);
      if (idx >= 0 && (best === null || idx < best.idx)) best = { idx, term: t };
    }
    if (!best) {
      nodes.push({ type: "text", value: rest });
      break;
    }
    if (best.idx > 0) nodes.push({ type: "text", value: rest.slice(0, best.idx) });
    nodes.push({
      type: "element",
      tagName: "gterm",
      properties: { dataDef: glossary[best.term] },
      children: [{ type: "text", value: best.term }],
    });
    used.add(best.term);
    rest = rest.slice(best.idx + best.term.length);
  }
  return nodes;
}

function walk(node, used, noWrap) {
  if (!node.children) return;
  const out = [];
  for (const child of node.children) {
    if (child.type === "text" && !noWrap) {
      out.push(...splitText(child.value, used));
    } else {
      if (child.type === "element") {
        walk(child, used, noWrap || NO_WRAP.has(child.tagName));
      }
      out.push(child);
    }
  }
  node.children = out;
}

function rehypeGlossary() {
  return (tree) => walk(tree, new Set(), false);
}

function TooltipTerm({ node, children }) {
  const def = node?.properties?.dataDef;
  const [open, setOpen] = useState(false);
  return (
    <span
      className={`gterm ${open ? "gterm--open" : ""}`}
      tabIndex={0}
      role="button"
      aria-label={`용어 설명: ${def}`}
      onClick={(e) => {
        e.stopPropagation();
        setOpen((o) => !o);
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open && <span className="gterm__pop" role="tooltip">{def}</span>}
    </span>
  );
}

function Blockquote({ node, children, ...props }) {
  const kind = node?.properties?.dataCallout;
  const c = kind && CALLOUT[kind];
  if (c) {
    return (
      <div className={`callout callout--${c.cls}`}>
        <span className="callout__badge" aria-hidden>
          {c.icon} {c.label}
        </span>
        <div className="callout__body">{children}</div>
      </div>
    );
  }
  return <blockquote {...props}>{children}</blockquote>;
}

export default function Markdown({ children }) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        rehypePlugins={[rehypeRaw, rehypeCallout, rehypeGlossary]}
        components={{
          table: (props) => (
            <div className="prose-table">
              <table {...props} />
            </div>
          ),
          a: (props) => <a {...props} target="_blank" rel="noreferrer" />,
          blockquote: Blockquote,
          gterm: TooltipTerm,
        }}
      >
        {fixBold(children)}
      </ReactMarkdown>
    </div>
  );
}
