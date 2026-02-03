// src/types/api/ipo.ts

export interface IpoResponse {
  count: number;
  data: Ipo[];
}

export interface Ipo {
  id: number;
  name: string;
  ipo_type: string;
  open: string; // ISO / date string
  close: string; // ISO / date string
  start_time: string; // HH:mm:ss
  end_time: string; // HH:mm:ss
  script_code: string;
  icon_url: string;
  min_price: string; // comes as string from API
  max_price: string; // comes as string from API
  lot_size: number;
  premium: string; // contains HTML
  allotment_date: string;
  listing_date: string;
  allotment_link: string | null;
  is_buyer: 0 | 1;
  is_seller: 0 | 1;
  is_pre_apply: 0 | 1;
  issue_size: string;
  current_status: "open" | "closed" | "upcoming";
  listing_price: string | null;
  slug: string;
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
  lead_managers: LeadManager[];
}

export interface LeadManager {
  id: number;
  name: string;
  about_section: string;
  logo: string;
  address: string;
  email: string;
  phone: string;
  website: string;
  created_at: string | null;
  updated_at: string;
  pivot: LeadManagerPivot;
}

export interface LeadManagerPivot {
  ipo_id: number;
  lead_manager_id: number;
  created_at: string;
  updated_at: string;
}
