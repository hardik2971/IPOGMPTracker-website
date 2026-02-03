export interface DisplayIpo {
  name: string;
  logo: string | null;
  currentStatus?: string;
  ipoType: string;
  allotmentAwaited: boolean;
  offerDate: string;
  offerPrice: string;
  lotSize: string;
  subscription: string;
  expPremium: string;
}
