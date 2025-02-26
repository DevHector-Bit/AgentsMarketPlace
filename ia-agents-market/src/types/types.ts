export interface Agent {
  name: string;
  avatar: string;
  totalSales?: string;
}

export interface Category {
  name: string;
  image: string;
}

export interface TrendingCollection {
  name: string;
  image: string;
  artist: Agent;
}
