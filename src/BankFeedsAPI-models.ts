export interface BankFeed {
	id?: string;
	accountToken: string;
	accountType: string;
	accountNumber: string;
	accountName: string;
	accountId: string;
	currency: string;
	country?: string;
}
