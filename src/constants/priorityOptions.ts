type PriorityOptions = {
    id: string
    value: string
    label: string
}[]

export const priorityOptions: PriorityOptions = [
    {
        id: crypto.randomUUID(),
        value: "low",
        label: "Low"
    },
    {
        id: crypto.randomUUID(),
        value: "mid",
        label: "Medium"
    },
    {
        id: crypto.randomUUID(),
        value: "high",
        label: "High"
    },
]