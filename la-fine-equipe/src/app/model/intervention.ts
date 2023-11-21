export class Intervention {
  totalPrice: number;
  title: string;
}

export class Appointment {
  id: string;
  date: Date;
  confirmed: boolean;
  patient: Patient;
  place: Hospital;
  interventionComments: string;
  invoice: Invoice;
}

export class Invoice {
  mutAmount: number;
  paid: boolean;
  intervention: Intervention;
}

export class Patient {
  secNumber: string;
}

export class Hospital {
  adress: string;
  location: Location;
}

export class Location {
  zipCode: string;
  region: string;
  city: string;
}
