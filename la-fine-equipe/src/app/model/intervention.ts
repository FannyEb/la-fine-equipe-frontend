export class Intervention {
  totalPrice: number;
  title: string;
}

export class Appointment {
  id: string;
  date: Date | string;
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
  address: string;
  location: Location;
}

export class Location {
  zipCode: string;
  region: string;
  city: string;
}
