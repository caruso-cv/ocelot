import { SafariImage } from '@/components/ui/safari-image'
import vwAvif from '@/assets/avif/vw-wordmark.avif'
import vwWebp from '@/assets/webp/vw-wordmark.webp'

interface HeroLogoMainProps {
  widthClasses: string
}

export default function HeroLogoMain({ widthClasses }: HeroLogoMainProps) {
  return (
    <div className={`mx-auto h-auto mb-2 -translate-y-8 md:-translate-y-12 lg:-translate-y-16 ${widthClasses} select-none animate-slide-up-gentle drop-shadow-[0_4px_3px_rgba(0,0,0,0.95)] drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]`}>
      <SafariImage
        avifSrc={vwAvif.src}
        webpSrc={vwWebp.src}
        alt="Vanished Worlds Logo"
        width={1170}
        height={390}
        className="w-full h-auto"
        draggable={false}
        priority
        quality={90}
      />
    </div>
  )
} 