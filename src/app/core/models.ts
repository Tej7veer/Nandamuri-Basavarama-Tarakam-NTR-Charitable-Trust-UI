export interface ProgramItem {
  id: number;
  title: string;
  description: string;
  iconKey: string;
  isLaunched: boolean;
}

export interface ProjectEvent {
  id: number;
  title: string;
  description: string;
  eventDate: string | null;
  location: string | null;
  isUpcoming: boolean;
}

export interface GalleryImage {
  id: number;
  caption: string;
  imageUrl: string;
  isPlaceholder: boolean;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  photoUrl: string | null;
  displayOrder: number;
}

export interface Certificate {
  id: number;
  name: string;
  status: string;
  documentUrl: string | null;
  displayOrder: number;
}

export interface Video {
  id: number;
  caption: string;
  videoUrl: string;
  posterUrl: string | null;
}

export interface NewsPost {
  id: number;
  title: string;
  body: string;
  publishedAt: string;
}

export interface ContactMessagePayload {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}

export interface VolunteerApplicationPayload {
  fullName: string;
  email: string;
  phone: string;
  areaOfInterest?: string;
  message?: string;
}

export interface DonationInquiryPayload {
  fullName: string;
  mobileNo: string;
  email: string;
  dob?: string | null;
  panCardNo?: string | null;
  state: string;
  city: string;
  pinCode: string;
  address: string;
  amount: number;
}
