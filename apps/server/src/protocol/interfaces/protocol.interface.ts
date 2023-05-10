export enum MethodType {
  //Explore methods
  Broadcast = 'broadcast',
  HandleBroadcast = 'handleBroadcast',

  Create = 'create',
  HandleCreate = 'handleCreate',

  //Purchase methods
  Submit = 'submit',
  HandleSubmit = 'handleSubmit',

  //Fulfill methods
  Status = 'status',
  HandleStatus = 'handleStatus',

  Track = 'track',
  HandleTrack = 'handleTrack',

  Update = 'update',
  HandleUpdate = 'handleUpdate',

  Cancel = 'cancel',
  HandleCancel = 'handleCancel',

  //Post-Fulfill methods
  Rating = 'rating',
  HandleRating = 'handleRating',

  Support = 'support',
  HandleSupport = 'handleSupport',
}

  
  export enum WaveType {
    AFF = 'affirmative',
    NEG = 'negative',
  }
  
  export interface Wave {
    status: WaveType;
  }
  
  export class Method {
    method!: MethodType;
  }

  export class Error{
    code!: String
    message!: String
  }