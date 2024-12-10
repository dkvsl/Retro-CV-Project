import { Card } from "@/components/ui/card"
import { skills, education, experience, personalInfo } from "@/data/cv-data"
import { Terminal } from 'lucide-react'
import { SkillBadge } from '@/components/skill-badge'
import { PersonalInfo } from '@/components/personal-info'
import { MarkdownSection } from '@/components/markdown-section'
import { SyntaxHighlightedJSON } from '@/components/syntax-highlighted-json'
import { SocialLinks } from '@/components/social-links'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#E6AA00] p-6 font-mono">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center space-y-4 border border-[#F0C828] p-6 rounded">
          <h1 className="text-4xl tracking-wider">
            {Array.from("CURRICULUM VITAE").map((letter, i) => (
              <span key={i} className="inline-block border border-dashed border-[#E6AA00] p-2 m-1">
                {letter}
              </span>
            ))}
          </h1>
        </header>

        {/* Personal Info */}
        <PersonalInfo {...personalInfo} />

        {/* Skills Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <h2 className="text-xl">Skills</h2>
          </div>
          <Card className="bg-[#242424] border-[#F0C828] p-4">
            <MarkdownSection content={skills.markdown} />
          </Card>
          <div className="flex flex-wrap gap-2">
            {skills.technologies.map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <h2 className="text-xl">Experience</h2>
          </div>
          <Card className="bg-[#242424] border-[#F0C828] p-4">
            <SyntaxHighlightedJSON data={experience} />
          </Card>
        </section>

        {/* Education Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            <h2 className="text-xl">Education</h2>
          </div>
          <Card className="bg-[#242424] border-[#F0C828] p-4">
            <MarkdownSection content={education.markdown} />
          </Card>
        </section>

        {/* Social Links */}
        <SocialLinks githubUrl={personalInfo.githubUrl} dockerUrl={personalInfo.dockerUrl} />
      </div>
    </div>
  )
}