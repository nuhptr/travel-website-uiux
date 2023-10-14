import Image from 'next/image'

interface IButtonProps {
   type: 'button' | 'submit' | 'reset'
   title: string
   icon?: string
   variant: string
}

export default function Button({ type, title, icon, variant }: IButtonProps) {
   return (
      <button type={type} className={`flexCenter gap-3 rounded-full border cursor-pointer ${variant}`}>
         {icon && <Image src={icon} alt={title} width={24} height={24} />}
         <label className='bold-16 whitespace-nowrap'>{title}</label>
      </button>
   )
}
