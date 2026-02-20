interface ICard {
    id: number
    paragraph: string
    details: string
}

interface LabelProps {
    id: string
    type: string
    label: string
}

export type { ICard, LabelProps };