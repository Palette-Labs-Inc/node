import { Scalar as TScalar } from "../api/scalar/Scalar";

export const SCALAR_TITLE_FIELD = "unit";

export const ScalarTitle = (record: TScalar): string => {
  return record.unit || String(record.id);
};
