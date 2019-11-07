import { BankFeed } from './BankFeedsAPI-models';

export interface BankFeedsPagination {
	page: number;
	pageCount: number;
	pageSize: number;
	itemCount: number;
}

export interface BankFeedsError {
	title: string;
	type: string;
	status?: number;
	detail: string;
}

export interface BanksFeedsResponse {
	pagination: BankFeedsPagination;
	items: BankFeed[];
}

export interface CreateFeedSuccess {
	id: string;
	accountToken: string;
	status: string;
}

export interface BankFeedErrorResponse {
	accountToken: string;
	status: string;
	error: BankFeedsError;
}

export interface CreateFeedResponse {
	items: Array<CreateFeedSuccess & BankFeedErrorResponse>;
}

export interface DeleteFeedSuccess {
	id: string;
	status: string;
}

export interface DeleteFeedResponse {
	items: Array<DeleteFeedSuccess & BankFeedErrorResponse>;
}
