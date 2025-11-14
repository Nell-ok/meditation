export interface Meditation {
  id: number;
  title: string;
  description: string;
  duration_min: number;
}

export interface MeditationsData {
  meditations: Meditation[];
}

export interface MeditationsResponse {
  data: MeditationsData;
  status: string;
}
