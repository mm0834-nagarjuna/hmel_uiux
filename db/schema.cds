namespace my.appraisal;

entity AppraisalDocuments {
  key index              : Integer;
  counter                : Integer;
  planVersion            : String(10);
  key appraisalId        : UUID;
  partApId               : Integer;
  appraisalName          : String(100);
  appraisalTypeText      : String(50);
  appraiserId            : String(20);
  appraiserType          : String(5);
  appraiserTypeText      : String(20);
  appraiserName          : String(100);
  appraiserShort         : String(50);
  appraiseeId            : String(20);
  appraiseeType          : String(5);
  appraiseeTypeText      : String(20);
  appraiseeName          : String(100);
  appraiseeShort         : String(50);
  apStatus               : Integer;
  apStatusName           : String(50);
  apStatusSub            : String(5);
  apStatusSubName        : String(100);
  apStartDate            : Date;
  apEndDate              : Date;
  objDateSet             : Date;
  reviewDateSet          : Date;
  apDateSet              : Date;
  changeDate             : Date;
  changeTime             : Time;
  changeUser             : String(20);
  templateId             : String(20);
  partRoleId             : String(20);
}
