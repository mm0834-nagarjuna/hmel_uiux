namespace my.appraisal;

entity AppraisalDocuments {
  key index             : Integer;
      counter           : Integer;
      planVersion       : String(10);
  key appraisalId       : UUID;
      partApId          : Integer;
      appraisalName     : String(100);
      appraisalTypeText : String(50);
      appraiserId       : String(20);
      appraiserType     : String(5);
      appraiserTypeText : String(20);
      appraiserName     : String(100);
      appraiserShort    : String(50);
      appraiseeId       : String(20);
      appraiseeType     : String(5);
      appraiseeTypeText : String(20);
      appraiseeName     : String(100);
      appraiseeShort    : String(50);
      apStatus          : Integer;
      apStatusName      : String(50);
      apStatusSub       : String(5);
      apStatusSubName   : String(100);
      apStartDate       : Date;
      apEndDate         : Date;
      objDateSet        : Date;
      reviewDateSet     : Date;
      apDateSet         : Date;
      changeDate        : Date;
      changeTime        : Time;
      changeUser        : String(20);
      templateId        : String(20);
      partRoleId        : String(20);
      co_ksp_value      : String;
      co_ksp_visible    : Boolean;
      co_ksp_edit       : Boolean;
      co_kpi_value      : String;
      co_kpi_visible    : Boolean;
      co_kpi_edit       : Boolean;
      co_target_value   : String;
      co_target_visible : Boolean;
      co_target_edit    : Boolean;
      ig_ksp_value      : String(255); // Individual Goal - Key Strategic Priority
      ig_ksp_visible    : Boolean;
      ig_ksp_edit       : Boolean;
      ig_kpi_value      : String(255); // Individual Goal - Key Performance Indicator
      ig_kpi_visible    : Boolean;
      ig_kpi_edit       : Boolean;
      ig_target_value   : String(255); // Individual Goal - Target
      ig_target_visible : Boolean;
      ig_target_edit    : Boolean;
}
