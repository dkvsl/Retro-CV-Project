import Image from 'next/image'
import { Card } from "@/components/ui/card"

interface PersonalInfoProps {
  name: string
  phone: string
  email: string
  address: string
  photo: string
}

export function PersonalInfo({ name, phone, email, address, photo }: PersonalInfoProps) {
  return (
    <Card className="bg-[#242424] border-[#F0C828] p-6 flex items-center space-x-6">
      <div className="relative w-[150px] h-[150px] flex-shrink-0">
        <Image
          src={photo}
          alt={name}
          width={150}
          height={150}
          className="rounded-full border-2 border-[#E6AA00]"
          priority
        />
      </div>
      <div className="space-y-2 text-[#7fd962]">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>📞 {phone}</p>
        <p>📧 {email}</p>
        <p>🏠 {address}</p>
      </div>
    </Card>
  )
}

