interface MedicEssential {
    medicId: string;
    name: string;
    lastname: string;
    cmp: string;
  }
  
  interface MedicOptional {
    email: string;
    phone: string;
  }
  
  export type MedicInputs = Required<MedicEssential> & Partial<MedicOptional>;
  