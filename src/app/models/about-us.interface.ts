export interface AboutUsInterface {
    whatsappNumber: string,
    mission: string,
    address: {
        path: string,
        url: string
    }
    email: string,
    officeHours?: string[]
}