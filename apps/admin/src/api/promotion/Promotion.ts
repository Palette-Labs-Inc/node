import { Bazaar } from "../bazaar/Bazaar";
import { Location } from "../location/Location";
import { Order } from "../order/Order";
import { Search } from "../search/Search";
import { Seller } from "../seller/Seller";

export type Promotion = {
  amount: number | null;
  bazaar?: Bazaar | null;
  createdAt: Date;
  expirationDate: Date | null;
  id: string;
  locations?: Array<Location>;
  maximumPurchase: number | null;
  minimumPurchase: number;
  name: string;
  orders?: Array<Order>;
  percentage: number | null;
  search?: Search | null;
  seller?: Seller | null;
  updatedAt: Date;
};
