import React from "react";
import "./SillyMarkdown.styles.css";

const styles = {
  paragraph: "silly-paragraph",
  normal: "silly-normal",
  quote: "silly-quote",
  bold: "silly-bold",
  italic: "silly-italic",
  dash: "silly-quote",
  blockquote: "silly-blockquote",
};

const quoteChars = ['"', "«", "“", "‘", "„"];

const innerRegex = /(\*\*[\s\S]+?\*\*|\*[\s\S]+?\*)/g;

const quotePattern = '(?:["«“‘„][\\s\\S]+?["»”’“])';
const dashPattern = '(?:—.*?(?:—|$))';
const outerRegex = new RegExp(`(${quotePattern}|${dashPattern})`, "g");

const detectLang = (text: string): "ru" | "en" => {
  if (/[а-яё]/i.test(text)) return "ru";
  if (/[a-z]/i.test(text)) return "en";
  return "en";
};

const getWrapperClass = (text: string): string => {
  if (text.startsWith("—")) return styles.dash;
  if (quoteChars.some((char) => text.startsWith(char))) return styles.quote;
  return styles.normal;
};

const renderRichText = (content: string): React.ReactNode[] => {
  return content.split(innerRegex).map((part, i) => {
    if (part.startsWith("**") && part.length >= 4) {
      return (
        <span key={i} className={styles.bold}>
          {part.slice(2, -2)}
        </span>
      );
    }

    if (part.startsWith("*") && part.length >= 2) {
      return (
        <span key={i} className={styles.italic}>
          {part.slice(1, -1)}
        </span>
      );
    }

    return part;
  });
};

interface SillyMarkdownProps {
  text: string;
}

export const SillyMarkdown: React.FC<SillyMarkdownProps> = ({ text }) => {
  if (!text) return null;

  const paragraphs = text.split("\n");

  return (
    <>
      {paragraphs.map((line, pIndex) => {
        if (!line.trim()) {
          return (
            <div key={pIndex} className={styles.paragraph}>
              &nbsp;
            </div>
          );
        }

        const parts = line.split(outerRegex);

        return (
          <div
            key={pIndex}
            className={`${styles.paragraph} hyphenate`}
          >
            {parts.map((part, index) => {
              if (!part) return null;

              const lang = detectLang(part);

              return (
                <span
                  key={index}
                  className={getWrapperClass(part)}
                  lang={lang}
                >
                  {renderRichText(part)}
                </span>
              );
            })}
          </div>
        );
      })}
    </>
  );
};