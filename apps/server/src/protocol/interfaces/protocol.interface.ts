export enum MethodType {
    Search = 'search',
    Select = 'select',
    Create = 'create',
    Update = 'update',
    Status = 'status',
    Track = 'track',
    Cancel = 'cancel',
    Rating = 'rating',
    Support = 'support',
  }
  
  export interface Protocol {
    method: MethodType;
  }
  
  export enum WaveType {
    AFF = 'affirmative',
    NEG = 'negative',
  }
  
  export interface Wave {
    status: WaveType;
  }
  