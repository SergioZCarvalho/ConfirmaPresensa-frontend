export type User = {
  role: string;
  name: string;
  email: string;
  id: string;
};

export type CreateEvent = {
  name: string;
  description: string;
  startEvent: Date;
  endEvent: Date;
  address: string;
  city: string;
  number: string;
  zipCode: string;
  price: number;
  whatsapp: string;
};

export type Event = {
  id: string;
  cover?: string | null;
  name: string;
  description: string;
  startEvent: Date;
  endEvent: Date;
  startEventTime: string;
  endEventTime: string;
  address: string;
  city: string;
  number: string;
  state: string;
  zipCode: string;
  slug: string;
  price: number;
  whatsapp: string;
  photos: string[];
  localName: string;
};

export type EventPopulated = Event & {
  confirms: Confirm[];
};

export type Confirm = {
  id: string;
  name: string;
  email: string;
  event: string;
  hasAccepted: boolean;
};
