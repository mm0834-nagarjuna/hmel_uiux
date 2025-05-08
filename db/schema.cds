namespace my.appraisal;
entity AppraisalDocuments {
    key index: Integer;
    key appraisalId: String;
    appraisalName: String;
    appraisalTypeText: String;
    appraiserId: String;
    appraiserType: String;
    appraiserTypeText: String;
    appraiserName: String;
    appraiseeId: String;
    appraiseeType: String;
    appraiseeTypeText: String;
    appraiseeName: String;
    apStatusName: String;
    apStatusSubName: String;
    submit: Boolean;
    referBackToEmployee: Boolean;
    onlySaveOption: Boolean;
    targetRevisionRequired: Boolean;
    allowTargetRevision: Boolean;
    doNotAllowTargetRevision: Boolean;
    referBackToAppraiser: Boolean;
    coFg: Boolean;
    iG: Boolean;
    bcf: Boolean;
    idp: Boolean;
    summary: Boolean;
    accomp: Boolean;
    overalRemarks: Boolean;
    acknowledgementVisible: Boolean;
    overallScore: Boolean;

    coFgKSP: String;
    coFgKSPEdit: Boolean;
    coFgKPI: String;
    coFgKPIEdit: Boolean;
    coFgTarget: String;
    coFgTargetEdit: Boolean;
    coFgWeightage: String;
    coFgWeightageEdit: Boolean;
    coFgARScore: String;
    coFgARScoreEdit: Boolean;

    ffmaAE: String;
    ffmaAEEdit: Boolean;
    ffmaAR: String;
    ffmaAREdit: Boolean;

    sfmaAE: String;
    sfmaAEEdit: Boolean;
    sfmaAR: String;
    sfmaAREdit: Boolean;

    aaAEE: String;
    aaAEEdit: Boolean;
    afAER: String;
    afAERdit: Boolean;

    selfAEScore: String;

    igKPI: String;
    igKPIEdit: Boolean;
    igTarget: String;
    igTargetEdit: Boolean;
    igWeightage: String;
    igWeightageEdit: Boolean;
    igARScore: String;
    igARScoreEdit: Boolean;
}
