import { BaseAPIClient, XeroClientConfiguration } from './internals/BaseAPIClient';
import { AccessToken, IOAuth1HttpClient } from './internals/OAuth1HttpClient';
import { BanksFeedsResponse, CreateFeedResponse, DeleteFeedResponse } from './BankFeedsAPI-responses';
import { BankFeed } from './BankFeedsAPI-models';
import { generateQueryString } from './internals/utils';

export interface PagingArgs {
	page?: number;
	pageSize?: number;
}

export enum AccountType {
	BANK = 'BANK',
	CREDITCARD = 'CREDITCARD'
}

export interface DeleteFeedArgs {
	id?: string;
	accountToken?: string;
	accountType?: AccountType;
	country?: string;
}

export class BankFeedsAPIClient extends BaseAPIClient {
	public constructor(options: XeroClientConfiguration, authState?: AccessToken, _oAuth1HttpClient?: IOAuth1HttpClient) {
		super(options, authState, { apiBasePath: '/bankfeeds.xro/1.0/' }, _oAuth1HttpClient);
	}

	public getFeeds = async (args?: PagingArgs): Promise<BanksFeedsResponse> => {
		let endpoint = 'FeedConnections';
		endpoint += generateQueryString(args);
		return this.oauth1Client.get<BanksFeedsResponse>(endpoint);
	}

	public createFeed = async (args: { items: BankFeed[] }): Promise<CreateFeedResponse> => {
		const endpoint = 'FeedConnections';
		return this.oauth1Client.post<CreateFeedResponse>(endpoint, args);
	}

	deleteFeed = async (args: { items: DeleteFeedArgs[] }): Promise<DeleteFeedResponse> => {
		const endpoint = 'FeedConnections/DeleteRequests';
		return this.oauth1Client.post<DeleteFeedResponse>(endpoint, args);
	}
}
