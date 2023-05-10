import { Organization as TOrganization } from "../api/organization/Organization";

export const ORGANIZATION_TITLE_FIELD = "address";

export const OrganizationTitle = (record: TOrganization): string => {
  return record.address || String(record.id);
};
