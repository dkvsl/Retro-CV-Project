interface SkillBadgeProps {
  skill: string
}

const badgeStyles: { [key: string]: string } = {
  'Vercel': 'https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white',
  'Visual Studio Code': 'https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white',
  'Python': 'https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue',
  'Docker': 'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white',
  'Oracle': 'https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=black',
  'HuggingFace': 'https://img.shields.io/badge/-HuggingFace-FDEE21?style=for-the-badge&logo=HuggingFace&logoColor=black',
  'LangChain': 'https://img.shields.io/badge/langchain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white',
  'Linux': 'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black',
  'Cloudflare': 'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white',
  'PyTorch': 'https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white',
  'ChatGPT': 'https://img.shields.io/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white',
  'Unraid': 'https://img.shields.io/badge/Unraid-F15A2C?style=for-the-badge&logo=unraid&logoColor=white',
  'GitHub': 'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white'
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <img src={badgeStyles[skill] || `https://img.shields.io/badge/${skill}-lightgrey?style=for-the-badge`} alt={skill} />
  )
}