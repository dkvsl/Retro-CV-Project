import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface SocialLinksProps {
  githubUrl: string
  dockerUrl: string
}

export function SocialLinks({ githubUrl, dockerUrl }: SocialLinksProps) {
  return (
    <div className="flex gap-4 mt-8 w-full max-w-4xl mx-auto">
      <div className="flex-1 flex items-center space-x-3 bg-[#242424] p-3 rounded-lg border border-[#F0C828]">
        <Button
          variant="outline"
          className="border-[#E6AA00] bg-[#1a1a1a] text-[#E6AA00] hover:bg-[#E6AA00] hover:text-[#1a1a1a] w-8 h-8 p-0 flex items-center justify-center"
          asChild
        >
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <div className="relative w-4 h-4">
              <Image 
                src="/images/github-icon.svg" 
                alt="GitHub" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </a>
        </Button>
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#E6AA00] hover:underline overflow-hidden overflow-ellipsis text-xs"
        >
          {githubUrl}
        </a>
      </div>
      <div className="flex-1 flex items-center space-x-3 bg-[#242424] p-3 rounded-lg border border-[#F0C828]">
        <Button
          variant="outline"
          className="border-[#E6AA00] bg-[#1a1a1a] text-[#E6AA00] hover:bg-[#E6AA00] hover:text-[#1a1a1a] w-8 h-8 p-0 flex items-center justify-center"
          asChild
        >
          <a href={dockerUrl} target="_blank" rel="noopener noreferrer">
            <div className="relative w-4 h-4">
              <Image 
                src="/images/docker-icon.svg" 
                alt="Docker" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </a>
        </Button>
        <a 
          href={dockerUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#E6AA00] hover:underline overflow-hidden overflow-ellipsis text-xs"
        >
          {dockerUrl}
        </a>
      </div>
    </div>
  )
}