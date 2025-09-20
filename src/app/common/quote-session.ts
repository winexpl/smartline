export interface QuoteSession {
    name: string;
    id: string;
    amount: number;
    createdAt: string;
    completedAt: string | null;
    categoryFirstPositionSpecification : string;
    customerName: string;
    customerInn: string;
    vendorName: string;
    vendorInn: string;
    foundation: string;
}