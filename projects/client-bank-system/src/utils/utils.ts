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

export type { InputProps, ButtonProps, LinkProps };