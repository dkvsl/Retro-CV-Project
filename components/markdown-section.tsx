import ReactMarkdown from 'react-markdown'

interface MarkdownSectionProps {
  content: string
}

export function MarkdownSection({ content }: MarkdownSectionProps) {
  return (
    <ReactMarkdown className="text-[#F0C828] prose prose-invert max-w-none">
      {content}
    </ReactMarkdown>
  )
}