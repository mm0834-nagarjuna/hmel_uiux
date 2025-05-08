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

    coFgKSP: Boolean;
    coFgKSPEdit: Boolean;
    coFgKPI: Boolean;
    coFgKPIEdit: Boolean;
    coFgTarget: Boolean;
    coFgTargetEdit: Boolean;
    coFgWeightage: Boolean;
    coFgWeightageEdit: Boolean;
    coFgARScore: Boolean;
    coFgARScoreEdit: Boolean;

    ffmaAE: Boolean;
    ffmaAEEdit: Boolean;
    ffmaAR: Boolean;
    ffmaAREdit: Boolean;

    sfmaAE: Boolean;
    sfmaAEEdit: Boolean;
    sfmaAR: Boolean;
    sfmaAREdit: Boolean;

    aaAEE: Boolean;
    aaAEEdit: Boolean;
    afAER: Boolean;
    afAERdit: Boolean;

    selfAEScore: Boolean;

    igKPI: Boolean;
    igKPIEdit: Boolean;
    igTarget: Boolean;
    igTargetEdit: Boolean;
    igWeightage: Boolean;
    igWeightageEdit: Boolean;
    igARScore: Boolean;
    igARScoreEdit: Boolean;
}
