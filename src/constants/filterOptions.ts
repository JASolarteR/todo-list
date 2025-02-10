type FilterOptions = {
    value: string
    label: string
}[]

export const filterOptions: FilterOptions = [
    {
        value: "all",
        label: "All"
    },
    {
        value: "completed",
        label: "Completed"
    },
    {
        value: "pending",
        label: "Pending"
    },
]