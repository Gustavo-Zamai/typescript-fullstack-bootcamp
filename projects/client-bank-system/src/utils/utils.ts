interface InputProps {
    id: string
    type: string
    label: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
}

interface ButtonProps {
    text: string
    event: () => void
}

interface LinkProps {
    text: string
    href: string
}

interface HeaderProps {
  showMenu?: boolean; // Prop para decidir se mostra o menu ou não
  menuContent?: React.ReactNode; // Slot para o conteúdo do menu
}


export type { InputProps, ButtonProps, LinkProps, HeaderProps };